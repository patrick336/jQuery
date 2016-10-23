

$(function(){
    
//    var c;
    var offset = 532,
        current = 0;
    
    $('.dot').first().addClass('active');
    $('#js-stop').css({opacity:0.3});
    $('#js-stop').prop('disabled',true);
    
   
    
    var carouselList = $('#carousel ul');
    var photoItems = carouselList.find('li').length-1;
    
    
    var span = $('.dots').find('span');
    span.each(function(index,value){
        $(value).attr('data-tmp',index);
    }); // nie wiem czy to było konieczne, jest chyba funkcja eq.
    
        
    
    
    
     $('.prev').click(prev);
     $('.next').click(next);
    
     $('.dot').click(function () {
         current = $(this).attr('data-tmp');
         change();

     });
    
    
    function next () {
        current++;
        change();
    }
    function prev () {
        current--;
        change();
    } 
    function change () {
            
        if(current < 0) current = photoItems;
        if(current > photoItems) current = 0;
        setDot();
       
        carouselList.animate({   
        'marginLeft': -(current%5)*offset   
        },700);
//        console.log(current);
//        console.log(-(current%5)*offset);
        
    }
    
    
    function setDot () {
        $('.dot').removeClass('active');
        $('.dot').eq(current).addClass('active');
//        console.log(current);
    }
    
    $('#js-play').click(function(){
        c = setInterval(next,5000);
        
        $(this).prop('disabled',true);
        $('#js-stop').prop('disabled',false);
        
        $(this).css({ opacity:0.3 });
        $('#js-stop').css({opacity:1});
    });
    
    
    $('#js-stop').click(function () {
        $(this).prop('disabled',true);
        $('#js-play').prop('disabled',false);
        $('#js-play').css({opacity:1});
        $(this).css({opacity:0.3});
        clearInterval(c);
    });
    
    
    
});



//$(function(){
//
//    function next () {
//        var first = carouselList.find('li').first();
//        var last = carouselList.find('li').last();
//        last.after(first); // pierwszy element ląduje  na ostatnią pozycję
//        
//        carouselList.css({'marginLeft': '0px' });
//        
//    }
//    
//    var carouselList = $('#carousel ul');
//    
//    function change () {
//    carouselList.animate({
//        
//        'marginLeft': '-532px'   
//        },2000, next);
//    }
//    setInterval(change,3000);
//});
//
