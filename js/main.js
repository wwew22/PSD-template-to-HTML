$(document).ready (function() {
    
    new WOW().init();
    
    
    $('.hamburger-nav').on('click', function(){
        
        
        $('.container nav ul').toggleClass('open');
    })
    
    
   
    $('.js-wp-2').waypoint(function(direction){
        
       $('.js-wp-2').addClass('animated slideInUp');
        
    }, {
        offset: '70%'
    });
    
    $('.js-wp-3').waypoint(function(direction){
        
       $('.js-wp-3').addClass('animated fadeIn');
        
    }, {
        offset: '70%'
    });
    
    
    
    
    $('.iphone-btn').delay(1800).animate({bottom: '+=-3'}, 300);
    $('.iphone-btn').delay(200).animate({top: '+=-3'}, 100);
        
    
});


$(document).ready (function(){
   
    $('.first').waypoint(function(direction){
        
       $('.first').addClass('animated fadeInLeft'); 
    }, {
        offset: '70%'
    });
    
});


$(document).ready (function(){
   
    $('.second').waypoint(function(direction){
        
       $('.second').addClass('animated fadeInDown'); 
    }, {
        offset: '70%'
    });
    
});


$(document).ready (function(){
   
    $('.third').waypoint(function(direction){
        
       $('.third').addClass('animated fadeInRight'); 
    }, {
        offset: '70%'
    });
    
});



$(document).ready (function(){
   
    $('.download-info').waypoint(function(direction){
        
       $('.download-info').addClass('animated fadeInLeft'); 
    }, {
        offset: '30%'
    });
    
});


$(document).ready (function(){
   
    $('.reddish').waypoint(function(direction){
        
       $('.reddish').addClass('animated bounceInRight'); 
    }, {
        offset: '40%'
    });
    
});


$(document).ready (function(){
   
    $('.download-btn').waypoint(function(direction){
        
       $('.download-btn').addClass('animated bounceInDown'); 
        
    }, {
        offset: '90%'
    });
    
});


$(document).ready (function(){
   
    $('.cta-info').waypoint(function(direction){
        
       $('.cta-info').addClass('animated bounceInDown'); 
        
    }, {
        offset: '70%'
    });
    
});




