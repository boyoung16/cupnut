$(document).ready(function(){

    var prevScrollpos = window.pageYOffset;
    console.log("first Y offset : "+prevScrollpos)
    window.onscroll = headerbarToggle
    function headerbarToggle() {

        var headerbar_1 = document.getElementById("in_header_c");
        var headerbar_2 = document.getElementById("in_header_w");

        var currentScrollPos = window.pageYOffset;
        if(prevScrollpos < currentScrollPos){
            headerbar_1.style.display = 'block';
            headerbar_2.style.display = 'none';
        }else{
            headerbar_1.style.display = 'none';
            headerbar_2.style.display = 'block';
        }

    }

    // header

});