$(document).ready(function()	{
    //dla boxa

    var changeBox = $('input');
    changeBox.each(function(){
        var styleChange = $(this).parent();
        $(this).on('click', function(){
            styleChange.toggleClass('checked');
            styleChange.toggleClass('unchecked');
        })
    })





    //dla GIFa
    var showGif = $('.click');
    showGif.each(function(){
    var gif = $(this).next();
        $(this).on('click', function(){
            gif.toggleClass('shown');
        });
    });
    
 });