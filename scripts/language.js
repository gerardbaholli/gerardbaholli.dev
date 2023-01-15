
var arrayLang = {
    "en": {
        "sub_title" : "Graduate Student at University of Milan, Italy.",
        "sub_sub_title" : "Consultant at"
    },
    "it": {
        "sub_title" : "Laureato presso l'Universit\xE0 degli Studi di Milano.",
        "sub_sub_title" : "Consultant in"
    },
    "al": {
        "sub_title" : "I diplomuar ne Universitetin e Milanos, Itali.",
        "sub_sub_title" : "Consultant ne"
    }
};

$(document).ready(function() {
    
    //localStorage.clear();
    
    var lang = localStorage.getItem('lang') || 'en';

    
    $(".lang").each(function(index, element) {
        $(this).text(arrayLang[lang][$(this).attr("key")]);
    });
    
    
    // get/set the selected language
    $(".translate").click(function() {
        //console.log("lang before: " + localStorage.getItem('lang'));
        
        var lang = $(this).attr("id");
        //console.log("lang selected " + lang);

        $(".lang").each(function(index, element) {
            $(this).text(arrayLang[lang][$(this).attr("key")]);
            
        localStorage.setItem('lang', lang);
        //console.log("lang after: " + localStorage.getItem('lang'));
        });
    });

});
