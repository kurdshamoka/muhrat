$(function () {
    "use strict";

    /*---------------------------
       Commons Variables
    ------------------------------ */ 
    var $window = $(window),
        $body = $("body");


     /*----------------------------------------
            Bootstrap dropdown               
    -------------------------------------------*/

    // Add slideDown animation to Bootstrap dropdown when expanding.

    $('.dropdown').on('show.bs.dropdown', function() {
        $(this).find('.dropdown-menu').first().stop(true, true).slideDown();
    });
    // Add slideUp animation to Bootstrap dropdown when collapsing.
    $('.dropdown').on('hide.bs.dropdown', function() {
        $(this).find('.dropdown-menu').first().stop(true, true).slideUp();
    });


    document.addEventListener('DOMContentLoaded', function() {
        var dropdownElementList = [].slice.call(document.querySelectorAll('.dropdown-toggle'))
        var dropdownList = dropdownElementList.map(function (dropdownToggleEl) {
            return new bootstrap.Dropdown(dropdownToggleEl)
        })
    
        // گۆڕینی زمان
        document.querySelectorAll('.dropdown-item').forEach(function(item) {
            item.addEventListener('click', function(e) {
                e.preventDefault();
                var selectedLang = this.getAttribute('lang');
                document.querySelector('#languageDropdown').innerHTML = this.innerHTML;
                // لێرەدا دەتوانیت کۆدی گۆڕینی زمانی ماڵپەڕەکە زیاد بکەیت
                console.log('زمان گۆڕدرا بۆ: ' + selectedLang);
            });
        });
    });

    /*---------------------------
       Menu Fixed On Scroll Active
    ------------------------------ */
    $(window).scroll(function () {
        var window_top = $(window).scrollTop() + 1;
        if (window_top > 250) {
            $(".sticky-nav").addClass("menu_fixed animated fadeInDown");
        } else {
            $(".sticky-nav").removeClass("menu_fixed animated fadeInDown");
        }
    });

    /*---------------------------
       Menu menu-content
    ------------------------------ */

    $(".header-menu-vertical .menu-title").on("click", function (event) {
        $(".header-menu-vertical .menu-content").slideToggle(500);
    });

    $(".menu-content").each(function () {
        var $ul = $(this),
            $lis = $ul.find(".menu-item:gt(7)"),
            isExpanded = $ul.hasClass("expanded");
        $lis[isExpanded ? "show" : "hide"]();

        if ($lis.length > 0) {
            $ul.append(
                $(
                    '<li class="expand">' +
                        (isExpanded ? '<a href="javascript:;"><span><i class="ion-android-remove"></i>Close Categories</span></a>' : '<a href="javascript:;"><span><i class="ion-android-add"></i>More Categories</span></a>') +
                        "</li>"
                ).click(function (event) {
                    var isExpanded = $ul.hasClass("expanded");
                    event.preventDefault();
                    $(this).html(isExpanded ? '<a href="javascript:;"><span><i class="ion-android-add"></i>More Categories</span></a>' : '<a href="javascript:;"><span><i class="ion-android-remove"></i>Close Categories</span></a>');
                    $ul.toggleClass("expanded");
                    $lis.toggle(300);
                })
            );
        }
    });

    /*---------------------------------
        Off Canvas Function
    -----------------------------------*/
    (function () {
        var $offCanvasToggle = $(".offcanvas-toggle"),
            $offCanvas = $(".offcanvas"),
            $offCanvasOverlay = $(".offcanvas-overlay"),
            $mobileMenuToggle = $(".mobile-menu-toggle");
        $offCanvasToggle.on("click", function (e) {
            e.preventDefault();
            var $this = $(this),
                $target = $this.attr("href");
            $body.addClass("offcanvas-open");
            $($target).addClass("offcanvas-open");
            $offCanvasOverlay.fadeIn();
            if ($this.parent().hasClass("mobile-menu-toggle")) {
                $this.addClass("close");
            }
        });
        $(".offcanvas-close, .offcanvas-overlay").on("click", function (e) {
            e.preventDefault();
            $body.removeClass("offcanvas-open");
            $offCanvas.removeClass("offcanvas-open");
            $offCanvasOverlay.fadeOut();
            $mobileMenuToggle.find("a").removeClass("close");
        });
    })();

    /*----------------------------------
        Off Canvas Menu
    -----------------------------------*/
    function mobileOffCanvasMenu() {
        var $offCanvasNav = $(".offcanvas-menu, .overlay-menu"),
            $offCanvasNavSubMenu = $offCanvasNav.find(".sub-menu");

        /*Add Toggle Button With Off Canvas Sub Menu*/
        $offCanvasNavSubMenu.parent().prepend('<span class="menu-expand"></span>');

        /*Category Sub Menu Toggle*/
        $offCanvasNav.on("click", "li a, .menu-expand", function (e) {
            var $this = $(this);
            if ($this.attr("href") === "#" || $this.hasClass("menu-expand")) {
                e.preventDefault();
                if ($this.siblings("ul:visible").length) {
                    $this.parent("li").removeClass("active");
                    $this.siblings("ul").slideUp();
                    $this.parent("li").find("li").removeClass("active");
                    $this.parent("li").find("ul:visible").slideUp();
                } else {
                    $this.parent("li").addClass("active");
                    $this.closest("li").siblings("li").removeClass("active").find("li").removeClass("active");
                    $this.closest("li").siblings("li").find("ul:visible").slideUp();
                    $this.siblings("ul").slideDown();
                }
            }
        });
    }
    mobileOffCanvasMenu();

    /*------------------------------
            Hero Slider
    -----------------------------------*/

    var swiper = new Swiper(".hero-slider", {
        spaceBetween: 30,
        speed: 750,
        loop: true,
        autoplay: {
            delay: 7000,
            disableOnInteraction: false,
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
    });

    /*------------------------------
            Category Slider
    -----------------------------------*/
    var swiper = new Swiper(".category-slider", {
        slidesPerView: 5,
        spaceBetween: 30,
        speed: 750,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        breakpoints: {
            0: {
                slidesPerView: 1,
            },
            478: {
                slidesPerView: 2,
            },
            576: {
                slidesPerView: 2,
            },
            768: {
                slidesPerView: 3,
            },
            1024: {
                slidesPerView: 4,
            },
            1200: {
                slidesPerView: 5,
            },
        },
    });

    /*------------------------------
            Feature Slider
    -----------------------------------*/

    var swiper = new Swiper(".feature-slider", {
        slidesPerView: 5,
        spaceBetween: 0,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        breakpoints: {
            0: {
                slidesPerView: 1,
            },
            478: {
                slidesPerView: 2,
            },
            576: {
                slidesPerView: 2,
            },
            768: {
                slidesPerView: 3,
            },
            1024: {
                slidesPerView: 4,
            },
            1200: {
                slidesPerView: 5,
            },
        },
    });

    /*------------------------------
            Feature Slider Two
    -----------------------------------*/

    var swiper = new Swiper(".feature-slider-two", {
        slidesPerView: 6,
        spaceBetween: 0,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        breakpoints: {
            0: {
                slidesPerView: 1,
            },
            478: {
                slidesPerView: 2,
            },
            576: {
                slidesPerView: 2,
            },
            768: {
                slidesPerView: 3,
            },
            1024: {
                slidesPerView: 4,
            },
            1200: {
                slidesPerView: 5,
            },
            1300: {
                slidesPerView: 6,
            },
        },
    });

    /*------------------------------
            Hot Deal Slider
    -----------------------------------*/
    var swiper = new Swiper(".deal-slider", {
        slidesPerView: 2,
        spaceBetween: 30,
        speed: 750,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        breakpoints: {
            0: {
                slidesPerView: 1,
            },
            1024: {
                slidesPerView: 1,
            },
            1200: {
                slidesPerView: 2,
            },
        },
    });

    /*------------------------------
            Feature-2 Slider
    -----------------------------------*/

    var swiper = new Swiper(".feature-slider-2", {
        slidesPerView: 4,
        spaceBetween: 0,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        breakpoints: {
            0: {
                slidesPerView: 1,
            },
            478: {
                slidesPerView: 2,
            },
            576: {
                slidesPerView: 2,
            },
            768: {
                slidesPerView: 2,
            },
            1024: {
                slidesPerView: 2,
            },
            1200: {
                slidesPerView: 4,
            },
        },
    });

    /*------------------------------
            Brand Slider
    -----------------------------------*/

    var swiper = new Swiper(".brand-slider", {
        slidesPerView: 5,
        spaceBetween: 30,
        speed: 750,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        breakpoints: {
            0: {
                slidesPerView: 1,
            },
            478: {
                slidesPerView: 1,
            },
            576: {
                slidesPerView: 2,
            },
            768: {
                slidesPerView: 3,
            },
            1024: {
                slidesPerView: 4,
            },
            1200: {
                slidesPerView: 5,
            },
        },
    });

    /*------------------------------
            Recent Slider
    -----------------------------------*/

    var swiper = new Swiper(".recent-slider", {
        slidesPerView: 4,
        spaceBetween: 30,
        speed: 750,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        breakpoints: {
            0: {
                slidesPerView: 1,
            },
            478: {
                slidesPerView: 1,
            },
            576: {
                slidesPerView: 1,
            },
            768: {
                slidesPerView: 2,
            },
            1024: {
                slidesPerView: 3,
            },
            1200: {
                slidesPerView: 4,
            },
        },
    });

    /*------------------------------
            Recent Slider Two
    -----------------------------------*/
    var swiper = new Swiper(".recent-slider-two", {
        slidesPerView: 3,
        spaceBetween: 0,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        breakpoints: {
            0: {
                slidesPerView: 1,
            },
            478: {
                slidesPerView: 1,
            },
            576: {
                slidesPerView: 1,
            },
            768: {
                slidesPerView: 1,
            },
            992: {
                slidesPerView: 2,
            },
            1024: {
                slidesPerView: 2,
            },
            1200: {
                slidesPerView: 3,
            },
        },
    });

    /*------------------------------
            Single Product Slider
    -----------------------------------*/
    var swiper = new Swiper(".single-product-slider", {
        slidesPerView: 4,
        spaceBetween: 20,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        breakpoints: {
            0: {
                slidesPerView: 1,
            },
            478: {
                slidesPerView: 1,
            },
            576: {
                slidesPerView: 2,
            },
            768: {
                slidesPerView: 3,
            },
            992: {
                slidesPerView: 3,
            },
            1024: {
                slidesPerView: 4,
            },
            1200: {
                slidesPerView: 4,
            },
        },
    });

    /*----------------------------  
        All Category toggle  
     ------------------------------*/

    $(".category-toggle").click(function () {
        $(".category-menu").slideToggle("slow");
    });
    $(".menu-item-has-children-1").click(function () {
        $(".category-mega-menu-1").slideToggle("slow");
    });
    $(".menu-item-has-children-2").click(function () {
        $(".category-mega-menu-2").slideToggle("slow");
    });
    $(".menu-item-has-children-3").click(function () {
        $(".category-mega-menu-3").slideToggle("slow");
    });
    $(".menu-item-has-children-4").click(function () {
        $(".category-mega-menu-4").slideToggle("slow");
    });
    $(".menu-item-has-children-5").click(function () {
        $(".category-mega-menu-5").slideToggle("slow");
    });
    $(".menu-item-has-children-6").click(function () {
        $(".category-mega-menu-6").slideToggle("slow");
    });

    /*-----------------------------  
              Category more toggle  
        -------------------------------*/

    $(".category-menu li.hidden").hide();
    $("#more-btn").on("click", function (e) {
        e.preventDefault();
        $(".category-menu li.hidden").toggle(500);
        var htmlAfter = '<i class="ion-ios-minus-empty" aria-hidden="true"></i> Less Categories';
        var htmlBefore = '<i class="ion-ios-plus-empty" aria-hidden="true"></i> More Categories';

        if ($(this).html() == htmlBefore) {
            $(this).html(htmlAfter);
        } else {
            $(this).html(htmlBefore);
        }
    });

    /*---------------------
        Countdown
    --------------------- */
    $("[data-countdown]").each(function () {
        var $this = $(this),
            finalDate = $(this).data("countdown");
        $this.countdown(finalDate, function (event) {
            $this.html(event.strftime('<span class="cdown day">%-D <p>Days</p></span> <span class="cdown hour">%-H <p>Hours</p></span> <span class="cdown minutes">%M <p>Mins</p></span> <span class="cdown second">%S <p>Sec</p></span>'));
        });
    });

    /*---------------------
        Scroll Up
    --------------------- */
    $.scrollUp({
        scrollText: '<i class="ion-android-arrow-up"></i>',
        easingType: "linear",
        scrollSpeed: 900,
        animation: "fade",
    });

    /*----------------------------
        Cart Plus Minus Button
    ------------------------------ */
    var CartPlusMinus = $(".cart-plus-minus");
    CartPlusMinus.prepend('<div class="dec qtybutton">-</div>');
    CartPlusMinus.append('<div class="inc qtybutton">+</div>');
    $(".qtybutton").on("click", function () {
        var $button = $(this);
        var oldValue = $button.parent().find("input").val();
        if ($button.text() === "+") {
            var newVal = parseFloat(oldValue) + 1;
        } else {
            // Don't allow decrementing below zero
            if (oldValue > 1) {
                var newVal = parseFloat(oldValue) - 1;
            } else {
                newVal = 1;
            }
        }
        $button.parent().find("input").val(newVal);
    });

    /*--------------------------
            Product Zoom
    ---------------------------- */
    $(".zoompro").elevateZoom({
        gallery: "gallery",
        galleryActiveClass: "active",
        zoomWindowWidth: 300,
        zoomWindowHeight: 100,
        scrollZoom: false,
        zoomType: "inner",
        cursor: "crosshair",
        easing : true,
        responsive:true,
    });

    /*------------------------------
            Single Product Slider
    -----------------------------------*/
    var swiper = new Swiper(".product-dec-slider-2", {
        slidesPerView: 4,
        spaceBetween: 10,
        breakpoints: {
            0: {
                slidesPerView: 4,
            },
            478: {
                slidesPerView: 4,
            },
            576: {
                slidesPerView: 4,
            },
            768: {
                slidesPerView: 4,
            },
            992: {
                slidesPerView: 4,
            },
            1024: {
                slidesPerView: 4,
            },
            1200: {
                slidesPerView: 4,
            },
        },
    }); 

    /*------------------------------
            Single Product Slider
    -----------------------------------*/
    var swiper = new Swiper(".product-dec-slider-3", {
        slidesPerView: 4,
        spaceBetween: 10,
        direction: 'vertical',
        breakpoints: {
            0: {
                slidesPerView: 4,
            },
            478: {
                slidesPerView: 4,
            },
            576: {
                slidesPerView: 4,
            },
            768: {
                slidesPerView: 4,
            },
            992: {
                slidesPerView: 4,
            },
            1024: {
                slidesPerView: 4,
            },
            1200: {
                slidesPerView: 4,
            },
        },
    });

      

    /*-----------------------------
        Blog Gallery Slider 
    -------------------------------- */
        var swiper = new Swiper(".blog-gallery", {
        slidesPerView:1,
        spaceBetween:0,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });

    /*-------------------------------
        Create an account toggle
    ---------------------------------*/
    $(".checkout-toggle2").on("click", function () {
        $(".open-toggle2").slideToggle(1000);
    });

    $(".checkout-toggle").on("click", function () {
        $(".open-toggle").slideToggle(1000);
    });

    /*---------------------------
        Quick view Slider 
    ------------------------------ */
    var galleryThumbs = new Swiper('.gallery-thumbs', {
      spaceBetween: 10,
      slidesPerView: 4,
      freeMode: true,
      watchSlidesVisibility: true,
      watchSlidesProgress: true,
    });
    var galleryTop = new Swiper('.gallery-top', {
      spaceBetween: 0,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      thumbs: {
        swiper: galleryThumbs
      }
    });
        
});

document.addEventListener('DOMContentLoaded', function() {
    var galleryTop = new Swiper('.gallery-top', {
      spaceBetween: 10,
      effect: 'fade',
      speed: 300,
      loop: true,
    });
  
    var galleryThumbs = new Swiper('.gallery-thumbs', {
      spaceBetween: 10,
      slidesPerView: 4,
      freeMode: true,
      watchSlidesVisibility: true,
      watchSlidesProgress: true,
      clickable: true,
    });
  
    // بەستنەوەی گەلەری سەرەوە بە گەلەری خوارەوە
    galleryTop.controller.control = galleryThumbs;
    galleryThumbs.controller.control = galleryTop;
  
    // زیادکردنی گوێگر بۆ کرتەکردن لەسەر وێنە بچووکەکان
    var thumbnails = document.querySelectorAll('.gallery-thumbs .swiper-slide');
    thumbnails.forEach(function(thumbnail, index) {
      thumbnail.addEventListener('click', function() {
        galleryTop.slideTo(index);
      });
    });
  
    // کردنەوەی مۆدێل
    var productModal = document.getElementById('productModal');
    productModal.addEventListener('shown.bs.modal', function () {
      galleryTop.update();
      galleryThumbs.update();
    });
  
    // چاپکردنی زانیاری دیباگ
    console.log('Number of thumbnails:', thumbnails.length);
    galleryThumbs.on('click', function() {
      console.log('Thumbnail clicked, index:', galleryThumbs.clickedIndex);
    });
    galleryTop.on('slideChange', function() {
      console.log('Main image changed, index:', galleryTop.activeIndex);
    });
  });








  const products = [
    {
      id: 1,
      name: "Originals Kaval Windbr",
      reference: "demo_1",
      price: "€18.90",
      description: "Lorem ipsum dolor sit amet, consectetur adipisic elit eiusm tempor incidid ut labore et dolore magna aliqua.",
      rating: 5,
      reviews: 1,
      colors: ["blue", "maroon"],
      images: ["./img/airpod/airppod1cc.jpg", "./img/airpod/airppod2cc.jpg", "./img/airpod/airppod3cc.jpg", "./img/airpod/airppod4cc.jpg"]
    },
    // ... زانیارییەکانی کاڵاکانی تر
  ];
  
  // فەنکشنێک بۆ دروستکردنی وێنەی بچووک
  function createThumbnail(imgSrc, callback) {
    const img = new Image();
    img.onload = function() {
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      canvas.width = 100;  // قەبارەی وێنەی بچووک
      canvas.height = canvas.width * (img.height / img.width);
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
      callback(canvas.toDataURL());
    }
    img.src = imgSrc;
  }
  
  // فەنکشنێک بۆ پڕکردنەوەی مۆدێل بە زانیارییەکانی کاڵا
  function fillProductModal(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;
  
    // پڕکردنەوەی ناونیشانی مۆدێل
    document.querySelector('#productModalLabel').textContent = product.name;
  
    // پڕکردنەوەی وێنەکان
    const mainSwiper = document.querySelector('.gallery-top .swiper-wrapper');
    const thumbSwiper = document.querySelector('.gallery-thumbs .swiper-wrapper');
    mainSwiper.innerHTML = '';
    thumbSwiper.innerHTML = '';
    
    product.images.forEach((img, index) => {
      // زیادکردنی وێنەی گەورە
      mainSwiper.innerHTML += `<div class="swiper-slide"><img src="${img}" class="img-fluid" alt="${product.name}"></div>`;
      
      // دروستکردنی وێنەی بچووک
      createThumbnail(img, (thumbnailSrc) => {
        thumbSwiper.innerHTML += `<div class="swiper-slide"><img src="${thumbnailSrc}" class="img-fluid" alt="${product.name}"></div>`;
        
        // نوێکردنەوەی Swiper دوای زیادکردنی دوایین وێنە
        if (index === product.images.length - 1) {
          if (galleryTop && galleryThumbs) {
            galleryTop.update();
            galleryThumbs.update();
          }
        }
      });
    });
  
    // پڕکردنەوەی زانیارییەکانی تر
    document.querySelector('.product-details-content h2').textContent = product.name;
    document.querySelector('.reference span').textContent = product.reference;
    document.querySelector('.pricing-meta ul li').textContent = product.price;
    document.querySelector('.quickview-para').textContent = product.description;
  }
  
  // زیادکردنی گوێگر بۆ کردنەوەی مۆدێل
  document.querySelectorAll('.open-product-modal').forEach(button => {
    button.addEventListener('click', (event) => {
      const productId = parseInt(event.target.dataset.productId);
      fillProductModal(productId);
      // کردنەوەی مۆدێل (بە مەرجێک کتێبخانەی Bootstrap بەکار بهێنیت)
      var myModal = new bootstrap.Modal(document.getElementById('productModal'));
      myModal.show();
    });
  });


  document.addEventListener('DOMContentLoaded', function() {
    const menuItems = document.querySelectorAll('.offcanvas-menu ul li');
    menuItems.forEach(item => {
        if (item.querySelector('.sub-menu')) {
            const expandBtn = document.createElement('span');
            expandBtn.classList.add('menu-expand');
            expandBtn.innerHTML = '+';
            item.insertBefore(expandBtn, item.firstChild);
            
            expandBtn.addEventListener('click', function(e) {
                e.preventDefault();
                this.parentElement.classList.toggle('menu-open');
                this.innerHTML = this.parentElement.classList.contains('menu-open') ? '-' : '+';
            });
        }
    });
});



  