
'use strict'

$(document).ready(function($){
 
// $("#d1").draggable({scroll:true , axis:'x' , containment:"#parent" , cursor:'move' , cursorAt:{top:-10 , left:-5}})
// $("#d1").draggable({
//   start: function(){alert("start")},
//   drag: function(event){
//         $("#position").text("x: "+ event.pageX +" , Y : "+ event.pageY )
//   },
//   stop: function(){alert("stop")}
// })

$("#parent").draggable({handle:"#d1"  })
 });