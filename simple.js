
$("#fotos").click(function(evt) {
    console.log('was clicked')
    $(this).zoomTo({targetsize:0.75, duration:600});
    evt.stopPropagation();
});