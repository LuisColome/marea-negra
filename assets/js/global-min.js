jQuery(document).ready((function(e){e(".site-header").after('<div class="bumper"></div>'),e(window).scroll((function(){e(document).scrollTop()>5?e(".site-header").addClass("shrink"):e(".site-header").removeClass("shrink")})),e(".backtotop"),e(window).scroll((function(){e(document).scrollTop()>200?e(".backtotop").addClass("visible"):e(".backtotop").removeClass("visible")}))})),jQuery((function(e){e(".menu-toggle").click((function(){e(".search-toggle, .header-search").removeClass("active"),e(".menu-toggle, .nav-menu, .lcm-dark-overlay").toggleClass("active"),e("body").toggleClass("noscroll")})),e(".lcm-dark-overlay").click((function(){e(".menu-toggle, .nav-menu, .lcm-dark-overlay").removeClass("active")})),e(".menu-item-has-children > .submenu-expand").click((function(a){e(this).toggleClass("expanded"),a.preventDefault()})),e(".search-toggle").click((function(){e(".menu-toggle, .nav-menu").removeClass("active"),e(".search-toggle, .header-search").toggleClass("active"),e(".site-header .search-field").focus()}))}));