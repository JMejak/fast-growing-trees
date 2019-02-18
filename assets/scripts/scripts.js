// Script for accordian menu functionality


var acc = document.getElementsByClassName("accordion");
    var i;
            
    for (i = 0; i < acc.length; i++) {
        acc[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight){
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
        });
    }

// Script for Swiper Gallery Functionality

 var galleryThumbs = new Swiper('.gallery-thumbs', {
    spaceBetween: 10,
    slidesPerView: 2,
    loop: true,
    freeMode: true,
    loopedSlides: 3, //looped slides should be the same
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
});

var galleryTop = new Swiper('.gallery-top', {
    spaceBetween: 10,
    loop:true,
    loopedSlides: 3, //looped slides should be the same
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    thumbs: {
        swiper: galleryThumbs,
    },
    });
  
var swiper1 = new Swiper('.swiper1', {
    spaceBetween: 30,
    pagination: {
        el: '.swiper-pagination1',
        clickable: true,
    },
});


// Script for Show More/Less Toggle on Reviews

$(document).ready(function() {
       
    var showChar = 100;
    var ellipsestext = "...";
    var moretext = "Show more >";
    var lesstext = "Show less";
        
    
    $('.more').each(function() {
        var content = $(this).html();
     
        if(content.length > showChar) {
     
            var c = content.substr(0, showChar);
            var h = content.substr(showChar, content.length - showChar);
     
            var html = c + '<span class="moreellipses">' + ellipsestext+ '&nbsp;</span><span class="morecontent"><span>' + h + '</span>&nbsp;&nbsp;<a href="" class="morelink">' + moretext + '</a></span>';
     
            $(this).html(html);
        }
     
    });
     
    $(".morelink").click(function(){
        if($(this).hasClass("less")) {
            $(this).removeClass("less");
            $(this).html(moretext);
        } else {
            $(this).addClass("less");
            $(this).html(lesstext);
        }
        $(this).parent().prev().toggle();
        $(this).prev().toggle();
        return false;
    });
});


// Script for changing price/bear fruit values

$(document).ready(function() {
    $("#height").change(function() {
        $('#product-price').html($(this).val());
        $('#fruit').html($(this).find(':selected').attr('data-fruit'));
    }).change();
});