
'use strict'

$(document).ready(function($){
 
  $("#btnHide").on('click',function(){
    $('p').hide('slow');
  })
  $("#btnShow").on('click',function(){
    $('p').show('slow');
  })
  $("#btnToggle").on('click',function(){
    $('p').toggle('slow');
  })
  $("#btnFadeOut").on('click',function(){
    $('p').fadeOut('slow');
  })
  $("#btnFadeIn").on('click',function(){
    $('p').fadeIn('slow');
  })
  $("#btnFadeToggle").on('click',function(){
    $('p').fadeToggle('slow');
  })
  $("#btnFadeTo").on('click',function(){
    $('p').fadeTo('slow', 0.2);
  })
  $("#btnSlideUp").on('click',function(){
    $('p').slideUp('slow');
  })
  $("#btnSlideDown").on('click',function(){
    $('p').slideDown('slow');
  })
  $("#btnSlideToggle").on('click',function(){
    $('p').slideToggle('slow');
  })
  $("#btnAnimate").on('click',function(){
    $('#p1').animate({'left':'200px' , 'top':'300px' , 'fontSize':'48pt'},'slow')
    .animate({'left':'400px' , 'top':'100px' , 'fontSize':'28pt'},'slow')
    .animate({'left':'500px' , 'top':'500px' , 'fontSize':'18pt'},'slow')
    .animate({'left':'100px' , 'top':'600px' , 'fontSize':'18pt'},'slow')


  })
 });