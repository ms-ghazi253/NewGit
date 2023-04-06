
'use strict'

$(document).ready(function($){
    
    setInterval(function(){
        if($('.current').next('img').length>0){
            $('.current').next('img').addClass('current')
            $('.current').first().removeClass('current')
        }else{
            $("#slides").find('img').first().addClass("current")
            $('.current').last().removeClass('current')
        }
    },10000)

});