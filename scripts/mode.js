
$(document).ready(function() {

    $(".dark_mode").click(function(){
        $("html").removeClass("light");
        $("html").addClass("dark");

        var sunActiveMode = document.getElementById("sunsolid");
        var sunInactiveMode = document.getElementById("sunregular");

        var moonActiveMode = document.getElementById("moonsolid");
        var moonInactiveMode = document.getElementById("moonregular");

        sunActiveMode.style.display = "none";
        sunInactiveMode.style.display = "block";

        moonActiveMode.style.display = "block";
        moonInactiveMode.style.display = "none";
    });

    $(".light_mode").click(function(){
        $("html").removeClass("dark");
        $("html").addClass("light");

        var sunActiveMode = document.getElementById("sunsolid");
        var sunInactiveMode = document.getElementById("sunregular");

        var moonActiveMode = document.getElementById("moonsolid");
        var moonInactiveMode = document.getElementById("moonregular");

        sunActiveMode.style.display = "block";
        sunInactiveMode.style.display = "none";

        moonActiveMode.style.display = "none";
        moonInactiveMode.style.display = "block";
    });



});
