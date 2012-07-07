		<script type="text/javascript">
$(function(){ 
 
$().gmap3(
'setDefault',
{ unit:'km',
init:{
mapTypeId : google.maps.MapTypeId.HYBRID,
center:[44.83409396867651,20.417007207870483],
zoom:17,
}
}
);

$("#map2").gmap3(
{
action: 'setOptions', args:[{
scrollwheel:true,
disableDefaultUI:false,
disableDoubleClickZoom:false,
draggable:true,
mapTypeControl: true,
panControl:true,
panControlOptions			: {
	position	: google.maps.ControlPosition.TOP_RIGHT
							},
rotateControl:false,
scaleControl:false,
streetViewControl:true,
streetViewControlOptions: {        position: google.maps.ControlPosition.TOP_RIGHT    },
zoomControl:true,
zoomControlOptions			: {
	style		: google.maps.ZoomControlStyle.MEDIUM,
	position	: google.maps.ControlPosition.TOP_RIGHT
							}
}]

});

$("#map2").gmap3(

{ action: 'addMarkers',
    markers:[
      {lat:44.83388473817061,lng:20.421288013458252, data:'<span>Marina Goga Yachting Club</span>'},
      {lat:44.83391517174595,lng:20.420451164245605, data:'<span style="font-size:20px;color:#009bdf;">Goga Yachting Club</span><br>Elitni restoran na vodi'},
      {lat:44.83408445821544,lng:20.416980385780334, data:'Parking na ulici'},
      {lat:44.83426135253427,lng:20.41662633419037, data:'Parking na ulici'},
      {lat:44.83446107127391, lng:20.417157411575317, data:'Besplatan parking'}
    ],
    marker:{
      options:{
        draggable: false
      },
      events:{
        mouseover: function(marker, event, data){
          var map = $(this).gmap3('get'),
              infowindow = $(this).gmap3({action:'get', name:'infowindow'});

          if (infowindow){
            infowindow.open(map, marker);
            infowindow.setContent(data);
          } else {
            $(this).gmap3({action:'addinfowindow', anchor:marker, options:{content: data}});
          }
        }
        //mouseout: function(){
        //  var infowindow = $(this).gmap3({action:'get', name:'infowindow'});
        //  if (infowindow){
        //    infowindow.close();
        //  }
        //}
      }
    }
  }

);

});
		</script>