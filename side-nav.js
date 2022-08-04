window.onload=function(){
    window.jQuery?$(document).ready(function(){
        $(".sidebarNavigation .navbar-collapse").hide().clone().appendTo("body").removeAttr("class").addClass("sideMenu").show(),
        $("body").append("<div class='overlay'></div>"),$(".navbar-toggle").on("click",function(){
            $(".sideMenu").addClass($(".sidebarNavigation").attr("data-sidebarClass")),$(".sideMenu, .overlay").toggleClass("open"),$(".overlay").on("click",function(){
                $(this).removeClass("open"),$(".sideMenu").removeClass("open")
            })
        }),
        $(window).resize(function(){
            $(".navbar-toggle").is(":hidden")?$(".sideMenu, .overlay").hide():$(".sideMenu, .overlay").show()
        })
    }):console.log("sidebarNavigation Requires jQuery")// ternary operator is used here
};