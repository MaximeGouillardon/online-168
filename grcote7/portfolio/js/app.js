(window.webpackJsonp=window.webpackJsonp||[]).push([["app"],{"Irx+":function(e,s,t){},ng4s:function(e,s,t){"use strict";t.r(s),function(e){t("fbCW"),t("4mDm"),t("07d7"),t("5s+n"),t("PKPk"),t("3bBZ"),t("R5XZ"),t("Irx+");var s=t("EVdn"),o=t.n(s),n=t("l012"),i=t("zSlN"),a=t.n(i),r=t("vDqi"),l=t.n(r),d=new a.a.Controller;function c(){o()(".hidebg").hide(),o()(".loader_container").slideUp(500,(function(){}))}new n.a({magnet:{element:".attraction",distance:200}}).init(),o()(".hidebg").fadeIn(400),o()(".loader_container").slideDown(500,(function(){o()(this).css("display","flex")})),o()(window).on("load",(function(){setTimeout(c,200)})),o()(document).ready((function(){if(o()("#endsteps").length){var s=o()("#endsteps").offset().top-o()("#startsteps").offset().top,t=o()("#step1").height(),n=o()("#step2").height(),i=o()("#step3").height(),r=o()("#step4").height(),c=o()("#step5").height(),g=new a.a.Scene({triggerElement:"#startsteps",duration:s}).setPin("#step").addTo(d);new a.a.Scene({triggerElement:"#step1",duration:t}).on("enter",(function(e){o()("#step").text("1")})).addTo(d),new a.a.Scene({triggerElement:"#step2",duration:n}).on("enter",(function(e){o()("#step").text("2")})).addTo(d),new a.a.Scene({triggerElement:"#step3",duration:i}).on("enter",(function(e){o()("#step").text("3")})).addTo(d),new a.a.Scene({triggerElement:"#step4",duration:r}).on("enter",(function(e){o()("#step").text("4")})).addTo(d),new a.a.Scene({triggerElement:"#step5",duration:c}).on("enter",(function(e){o()("#step").text("5")})).addTo(d),new a.a.Scene({triggerElement:"#endsteps",duration:s}).on("enter",(function(e){o()("#step").text("6")})).addTo(d),o()(window).scroll((function(){s=o()("#endsteps").offset().top-o()("#startsteps").offset().top,g.duration(s)})),o()(window).on("resize",(function(){s=o()("#endsteps").offset().top-o()("#startsteps").offset().top,g.duration(s)}))}o()(".contact-me").attr("href","mailto:alex.dean9g@gmail.com"),o()(window).width()<769?o()(".sidebar-nav").hasClass("sidebar-nav-mobile")||o()(".sidebar-nav").addClass("sidebar-nav-mobile"):o()(".sidebar-nav").removeClass("sidebar-nav-mobile"),o()(".menu-toggle").click((function(){o()(this).toggleClass("opened"),window.setTimeout((function(){o()("header").toggleClass("header-open")}),500),o()(".menu-toggle-inner").toggleClass("cross-lines"),o()(this).hasClass("opened")?(o()("header").toggleClass("no-exclusion"),o()(".main-menu").toggleClass("flexbox"),o()(".slide-bg").animate({width:"toggle"},500),o()(".nav-link").delay(350).each((function(e){o()(this).delay(100*e).animate({opacity:1},{duration:300,queue:!0}),o()(this).delay(100*e).css("pointer-events","auto"),o()(this).delay(100*e).toggleClass("color-link")})),o()(".sidebar-nav-mobile").show(),o()(".sidebar-nav-mobile li").delay(350).each((function(e){o()(this).delay(100*e).animate({opacity:1},{duration:300,queue:!0}),o()(this).delay(100*e).css("pointer-events","auto")}))):(window.setTimeout((function(){o()("header").toggleClass("no-exclusion")}),1e3),o()(".slide-bg").delay(500).animate({width:"toggle"},500),o()(".nav-link").each((function(e){o()(this).delay(100*e).animate({opacity:0},{duration:300,queue:!0}),o()(this).delay(100*e).css("pointer-events","none")})),o()(".sidebar-nav-mobile").show(),o()(".sidebar-nav-mobile li").each((function(e){o()(this).delay(100*e).animate({opacity:0},{duration:300,queue:!0}),o()(this).delay(100*e).css("pointer-events","none")})),window.setTimeout((function(){o()(".main-menu").toggleClass("flexbox")}),1e3))})),o()(window).scroll((function(){o()(".menu-toggle").hasClass("opened")&&(window.setTimeout((function(){o()("header").toggleClass("no-exclusion")}),1e3),o()(".menu-toggle").toggleClass("opened"),o()(".menu-toggle-inner").toggleClass("cross-lines"),o()("header").toggleClass("header-open"),o()(".slide-bg").delay(500).animate({width:"toggle"},500),o()(".nav-link").each((function(e){o()(this).delay(100*e).animate({opacity:0},{duration:300,queue:!0}),o()(this).delay(100*e).css("pointer-events","none")})),window.setTimeout((function(){o()(".main-menu").toggleClass("flexbox")}),1e3))}));var h=o()(window).width();o()(window).resize((function(){h=o()(window).width(),o()(window).width()<768?o()(".sidebar-nav").hasClass("sidebar-nav-mobile")||o()(".sidebar-nav").addClass("sidebar-nav-mobile"):o()(".sidebar-nav").removeClass("sidebar-nav-mobile")})),o()(".menu-toggle-inner").mouseenter((function(){!o()("header").hasClass("header-open")&&h>768&&o()(this).addClass("plus-lines")})).mouseleave((function(){o()(this).removeClass("plus-lines")})),o()(".project-content .text a").addClass("show-gif"),o()(".nav-link, .btn--primary, .logo, .show-gif").mouseenter((function(){o()(".cursor").addClass("exclude-cursor")})).mouseleave((function(){o()(".cursor").removeClass("exclude-cursor")})),o()(".projects-gif").hide(),o()(".whoami-gif").hide(),o()(".show-projects-gif").mouseenter((function(){o()(".projects-gif").show(),o()(".projects-gif").addClass("projects-gif-in"),o()(".projects-gif").removeClass("projects-gif-out")})).mouseleave((function(){o()(".projects-gif").addClass("projects-gif-out"),o()(".projects-gif").removeClass("projects-gif-in")})),o()(".show-whoami-gif").mouseenter((function(){o()(".whoami-gif").show(),o()(".whoami-gif").addClass("whoami-gif-in"),o()(".whoami-gif").removeClass("whoami-gif-out")})).mouseleave((function(){o()(".whoami-gif").addClass("whoami-gif-out"),o()(".whoami-gif").removeClass("whoami-gif-in")})),o()(".show-heisenberg-gif").mouseenter((function(){o()(".heisenberg-gif").show(),o()(".heisenberg-gif").addClass("heisenberg-gif-in"),o()(".heisenberg-gif").removeClass("heisenberg-gif-out")})).mouseleave((function(){o()(".heisenberg-gif").addClass("heisenberg-gif-out"),o()(".heisenberg-gif").removeClass("heisenberg-gif-in")})),o()(".show-brent-gif").mouseenter((function(){o()(".brent-gif").show(),o()(".brent-gif").addClass("brent-gif-in"),o()(".brent-gif").removeClass("brent-gif-out")})).mouseleave((function(){o()(".brent-gif").addClass("brent-gif-out"),o()(".brent-gif").removeClass("brent-gif-in")})),o()(".view-project").mouseenter((function(){o()(".cursor").addClass("vanish")})).mouseleave((function(){o()(".cursor").removeClass("vanish")}));var u=o()(".countup"),f=!1;if(u.length){var m=u.offset().top-110;u.hide(),o()(window).scroll((function(s){o()(window).scrollTop()+o()(window).height()/2>=m&&!f&&(u.fadeIn(),u.each((function(){var s=o()(this);e({Counter:0}).animate({Counter:s.text()},{duration:2e3,easing:"swing",step:function(){s.text(Math.ceil(this.Counter))}})})),f=!0)}))}o()(".project").mouseenter((function(){o()(".cursor--large").addClass("cursor--project"),o()(".inner-cursor").removeClass("cursor--small")})).mouseleave((function(){o()(".cursor--large").removeClass("cursor--project"),o()(".inner-cursor").addClass("cursor--small")})),o()(".project").mouseenter((function(){var e=o()(this).data("color");o()(".cursor--project").css("background-color",e)})).mouseleave((function(){o()(".cursor--large").css("background-color","unset")}));var p="dark";o()("img.moon-light").hide(),o()(".mode-toggle").click((function(){!function(){o()("body").toggleClass("dark-mode"),o()("body").toggleClass("light-mode"),o()("img.moon-light").toggle(),o()("img.moon-dark").toggle(),p="dark"===p?"light":"dark";localStorage.setItem("themeMode",p)}()})),"light"===(p=localStorage.getItem("themeMode"))?(o()("body").removeClass("dark-mode"),o()("body").addClass("light-mode"),o()("img.moon-light").show(),o()("img.moon-dark").hide()):(o()("body").addClass("dark-mode"),o()("body").removeClass("light-mode"),o()("img.moon-light").hide(),o()("img.moon-dark").show());var w=!1;o()(document).on("keypress",(function(e){if(!w){if(w=!0,"j"===String.fromCharCode(e.which))o()("body").removeClass("dark-mode"),o()("body").addClass("light-mode"),o()("img.moon-light").show(),o()("img.moon-dark").hide(),p="light",localStorage.setItem("themeMode",p),new Audio("/build/jour.mp3").play();else if("n"===String.fromCharCode(e.which)){o()("body").addClass("dark-mode"),o()("body").removeClass("light-mode"),o()("img.moon-light").hide(),o()("img.moon-dark").show(),p="dark",localStorage.setItem("themeMode",p),new Audio("/build/nuit.mp3").play()}setTimeout((function(){w=!1}),500)}})),o()(window).scroll((function(){o()(".fadein").each((function(e){var s=o()(this).offset().top-60,t=o()(window).scrollTop()+o()(window).height()/2,n=t-s;t>s&&(o()(this).animate({opacity:"1"},1300),o()(this).addClass("skewin")),t+o()(window).height()/2>s&&(n>0?(o()(this).find(".scroll-slide-left").css("transform","translate(-"+n/20+"px, 0)"),o()(this).find(".scroll-slide-right").css("transform","translate("+n/14+"px, 0)"),o()(this).find(".scroll-slide-up").css("transform","rotate(-90deg) translate("+n/12+"px, 0)"),o()(this).find(".scroll-scale-up").css("transform","scale("+(1+n/4e3)+")")):(o()(this).find(".scroll-slide-left").css("transform","translate("+-n/19+"px, 0)"),o()(this).find(".scroll-slide-right").css("transform","translate(-"+-n/16+"px, 0)"),o()(this).find(".scroll-slide-up").css("transform","rotate(-90deg) translate("+-n/12+"px, 0)")))})),o()(".fadeinearly").each((function(e){var s=o()(this).offset().top-200,t=o()(window).scrollTop()+o()(window).height()/2,n=t-s;t>s&&(o()(this).animate({opacity:"1"},1300),o()(this).addClass("skewin")),t+o()(window).height()/2>s&&(n>0?(o()(this).find(".scroll-slide-left").css("transform","translate(-"+n/20+"px, 0)"),o()(this).find(".scroll-slide-right").css("transform","translate("+n/14+"px, 0)"),o()(this).find(".scroll-slide-up").css("transform","rotate(-90deg) translate("+n/12+"px, 0)"),o()(this).find(".scroll-scale-up").css("transform","scale("+(1+n/4e3)+")")):(o()(this).find(".scroll-slide-left").css("transform","translate("+-n/19+"px, 0)"),o()(this).find(".scroll-slide-right").css("transform","translate(-"+-n/16+"px, 0)"),o()(this).find(".scroll-slide-up").css("transform","rotate(-90deg) translate("+-n/12+"px, 0)")))}))})),setTimeout((function(){o()(".fadein").each((function(e){var s=o()(this).offset().top;o()(window).scrollTop()+o()(window).height()>s&&(o()(this).animate({opacity:"1"},2e3),o()(this).addClass("skewin"))}))}),1e3);new Promise((function(e,s){return Promise.all([l.a.get("".concat("https://api.github.com/users/alexjamesdean1997/repos"),{})]).then((function(s){var t=s[0].data.length;o()(".git-repos").text(t),e(t)})).catch((function(e){s(e)}))}))}))}.call(this,t("EVdn"))}},[["ng4s","runtime",0]]]);