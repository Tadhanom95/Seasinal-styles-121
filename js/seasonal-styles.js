$("document").ready(function(){
    $('.seasons a').click(function(e){//find all a tags inside class of seasons
        e.preventDefault();//stop default submission
        var season = $(this).attr("href");//contents of href attribute of this element
        season = season.toLowerCase();
        switch (season){

            case 'spring':
                alert("Welcome to Spring");
        $("html").css("background-color","#2B7129");
        $("#wear").attr("src","images/spring-wear.jpg");
        $("#logo").attr("src","images/spring.gif");
        $("header h3").text("jump into spring wear!");
        break;
        
        case 'summer':
            alert("Welcome to Summer");
        $("html").css("background-color","#EBA52B");
        $("#wear").attr("src","images/summer-wear.jpg");
        $("#logo").attr("src","images/summer.gif");
        $("header h3").text("jump into summer wear!");
        break;

        case 'fall':
            alert("Welcome to Fall");
        $("html").css("background-color","#A81124");
        $("#wear").attr("src","images/fall-wear.jpg");
        $("#logo").attr("src","images/fall.gif");
        $("header h3").text("jump into fall wear!");
        break;

        case 'winter':
            alert("Welcome to Winter");
        $("html").css("background-color","#005393");
        $("#wear").attr("src","images/winter-wear.jpg");
        $("#logo").attr("src","images/winter.gif");
        $("header h3").text("jump into winter wear!");
        break;

        default:
              alert("yay default!");
              $("#logo").attr("src","images/four-seasons.gif");
              $("#wear").attr("src","images/300x400.png");

        }

        
    });
});