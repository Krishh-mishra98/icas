$(document).ready(function(){  
    $("#football").hover(function(){ 
        $(".default-img-1").removeClass("golf-img-1");  
        $(".default-img-2").removeClass("golf-img-2"); 
        $(".default-img-1").removeClass("gym-img-1");  
        $(".default-img-2").removeClass("gym-img-2"); 
        $(".default-img-1").removeClass("outdoors-img-1");  
        $(".default-img-2").removeClass("outdoors-img-2"); 
        $(".default-img-1").removeClass("running-img-1");  
        $(".default-img-2").removeClass("running-img-2");
        $(".default-img-1").removeClass("swim-img-1");  
        $(".default-img-2").removeClass("swim-img-2");  
        $(".default-img-1").addClass("football-img-1");  
        $(".default-img-2").addClass("football-img-2"); 
    }); 
    $("#golf").hover(function(){  
        $(".default-img-1").removeClass("football-img-1");  
        $(".default-img-2").removeClass("football-img-2"); 
        $(".default-img-1").removeClass("gym-img-1");  
        $(".default-img-2").removeClass("gym-img-2"); 
        $(".default-img-1").removeClass("outdoors-img-1");  
        $(".default-img-2").removeClass("outdoors-img-2"); 
        $(".default-img-1").removeClass("running-img-1");  
        $(".default-img-2").removeClass("running-img-2");
        $(".default-img-1").removeClass("swim-img-1");  
        $(".default-img-2").removeClass("swim-img-2");
        $(".default-img-1").addClass("golf-img-1");  
        $(".default-img-2").addClass("golf-img-2"); 
    }); 
    $("#gym").hover(function(){  
        $(".default-img-1").removeClass("football-img-1");  
        $(".default-img-2").removeClass("football-img-2"); 
        $(".default-img-1").removeClass("outdoors-img-1");  
        $(".default-img-2").removeClass("outdoors-img-2"); 
        $(".default-img-1").removeClass("running-img-1");  
        $(".default-img-2").removeClass("running-img-2");
        $(".default-img-1").removeClass("swim-img-1");  
        $(".default-img-2").removeClass("swim-img-2");
        $(".default-img-1").removeClass("golf-img-1");  
        $(".default-img-2").removeClass("golf-img-2"); 
        $(".default-img-1").addClass("gym-img-1");  
        $(".default-img-2").addClass("gym-img-2"); 
    }); 
    $("#outdoors").hover(function(){  
        $(".default-img-1").removeClass("football-img-1");  
        $(".default-img-2").removeClass("football-img-2"); 
        $(".default-img-1").removeClass("running-img-1");  
        $(".default-img-2").removeClass("running-img-2");
        $(".default-img-1").removeClass("swim-img-1");  
        $(".default-img-2").removeClass("swim-img-2");
        $(".default-img-1").removeClass("golf-img-1");  
        $(".default-img-2").removeClass("golf-img-2");
        $(".default-img-1").removeClass("gym-img-1");  
        $(".default-img-2").removeClass("gym-img-2"); 
        $(".default-img-1").addClass("outdoors-img-1");  
        $(".default-img-2").addClass("outdoors-img-2"); 
    }); 
    $("#running").hover(function(){  
        $(".default-img-1").removeClass("football-img-1");  
        $(".default-img-2").removeClass("football-img-2");
        $(".default-img-1").removeClass("swim-img-1");  
        $(".default-img-2").removeClass("swim-img-2");
        $(".default-img-1").removeClass("golf-img-1");  
        $(".default-img-2").removeClass("golf-img-2");
        $(".default-img-1").removeClass("gym-img-1");  
        $(".default-img-2").removeClass("gym-img-2"); 
        $(".default-img-1").removeClass("outdoors-img-1");  
        $(".default-img-2").removeClass("outdoors-img-2");  
        $(".default-img-1").addClass("running-img-1");  
        $(".default-img-2").addClass("running-img-2"); 
    }); 
    $("#swim").hover(function(){  
        $(".default-img-1").removeClass("football-img-1");  
        $(".default-img-2").removeClass("football-img-2"); 
        $(".default-img-1").removeClass("golf-img-1");  
        $(".default-img-2").removeClass("golf-img-2");
        $(".default-img-1").removeClass("gym-img-1");  
        $(".default-img-2").removeClass("gym-img-2"); 
        $(".default-img-1").removeClass("outdoors-img-1");  
        $(".default-img-2").removeClass("outdoors-img-2");  
        $(".default-img-1").removeClass("running-img-1");  
        $(".default-img-2").removeClass("running-img-2"); 
        $(".default-img-1").addClass("swim-img-1");  
        $(".default-img-2").addClass("swim-img-2"); 
    }); 
    
}); 