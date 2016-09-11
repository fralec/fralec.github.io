/*setTimeout(animation, 2500);

function animation() {
    $(".core-selected").removeClass("fadeInDown");
    $(".core-selected").addClass("fadeOutDown");
}

setInterval(function() {
    var selector = document.querySelector('core-selector');
    $(".core-selected").removeClass("fadeOutDown");
    $(".core-selected").addClass("fadeInDown");

    setTimeout(animation, 2500);

    function animation() {
        $(".core-selected").removeClass("fadeInDown");
        $(".core-selected").addClass("fadeOutDown");
    }
    selector.selected = (selector.selected + 1) % selector.children.length;
    
}, 3000);*/

$(document).ready(function() {
    $("#stay").elegant({
        
        //layout
        background: "black",
        color: "white",
        crossSize: 2,
        iconSize: 2,
        
        //social
        facebook: {id: "alec.vonbarnekow"},
	    wordpress: {id: "/", url: "https://blog.fralec.com"},
        twitter: {id: "fralec_"},    
        linkedin: {id: "alec-von-barnekow-ab525ba2"},
        github: {id: "fralec"},
        mail: {id: "alec@alecvonbarnekow.com"},
        instagram: {id: "fralec__"},
        googleplus: {id: "103748247122385573233"},
        codepen: {id: "fralec"}
    });
});
