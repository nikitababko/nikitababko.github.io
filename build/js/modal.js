$(document).ready((function(){var t={arduino:{title:"Arduino store",tag:"ARDUINO STORE.",detail:"Online store 'Mechatronics' - Arduino for studying robotics and prototyping various electronic devices. The assortment of the store is conveniently divided into categories in which you can find and buy almost any goods for a radio amateur - microcontrollers, sensors and sensors, expansion cards, batteries and much more!.",link:"https://github.com/nikitababko/arduino-store"},chat:{title:"Chat",tag:"MESSENGER.",detail:"This is a service for exchanging instant messages, links, pictures and other information. This messenger is similar to many others, but with its own characteristics. He knows how to attach media files to messages, is anonymous. The correspondence can be diversified with emoticons and voice messages..",link:"https://github.com/nikitababko/chat"},tictactoe:{title:"Tic tac tore",tag:"ENTERTAINMENT APP",detail:"A logic game between two opponents on a square field of 3 by 3 cells or larger. One of the players plays with 'crosses', the other - with 'noughts'. The traditional Chinese game uses black and white stones..",link:"https://nikitababko.github.io/tic-tac-toe/"},mogo:{title:"MoGO",tag:"BUSINESS ANALYTICS.",detail:"In digital marketing, a landing page is a standalone web page, created specifically for a marketing or advertising campaign. It’s where a visitor “lands” after they click on a link in an email, or ads from Google, Bing, YouTube, Facebook, Instagram, Twitter, or similar places on the web.",link:"https://nikitababko.github.io/landing-page-mogo/"},netlife:{title:"NetLife",tag:"Social, network, social network.",detail:"Social network. There is an opportunity to subscribe to someone, share posts (photo, description). There is a completely anonymous chat. In the chat, you can transfer text, photos and emoticons.",link:"https://github.com/nikitababko/social-network-netlife"},eclipse:{title:"Eclipse",tag:"DESIGN.",detail:"In digital marketing, a landing page is a standalone web page, created specifically for a marketing or advertising campaign. It’s where a visitor “lands” after they click on a link in an email, or ads from Google, Bing, YouTube, Facebook, Instagram, Twitter, or similar places on the web.",link:"https://nikitababko.github.io/landing-page-eclipse/"},todocloud:{title:"Todo Cloud",tag:"todo, app.",detail:"Todo Cloud gives you the confidence that everything’s organized and accounted for, so you can make progress on the things that are important to you. Get a clear overview of everything on your plate and never lose track of an important task. Easily organize and prioritize your tasks and projects so you’ll always know exactly what to work on next.",link:"https://github.com/nikitababko/todo-app-todocloud"},activebox:{title:"Active Box",tag:"LANDING PAGE.",detail:"In digital marketing, a landing page is a standalone web page, created specifically for a marketing or advertising campaign. It’s where a visitor “lands” after they click on a link in an email, or ads from Google, Bing, YouTube, Facebook, Instagram, Twitter, or similar places on the web.",link:"https://nikitababko.github.io/landing-page-active-box/"},bouncy:{title:"Bouncy",tag:"LANDING PAGE.",detail:"In digital marketing, a landing page is a standalone web page, created specifically for a marketing or advertising campaign. It’s where a visitor “lands” after they click on a link in an email, or ads from Google, Bing, YouTube, Facebook, Instagram, Twitter, or similar places on the web.",link:"https://nikitababko.github.io/landing-page-bouncy/"}};$("#gallery .button").on("click",(function(){!function(e){$("#modal .title").text(t[e].title),$("#modal .detail").text(t[e].detail),$("#modal .tag").text(t[e].tag),t[e].link&&$("#modal .button").addClass("visible").parent().attr("href",t[e].link);$.each($("#modal li"),(function(a,i){$(this).text(t[e].bullets[a])})),$.each($("#modal .slide"),(function(t,a){$(this).css({background:"url('img/slides/"+e+"-"+t+".jpg') center center/cover",backgroundSize:"cover"})}))}(this.id),$(".modal-wrap").addClass("visible")})),$(".close").on("click",(function(){$(".modal-wrap, #modal .button").removeClass("visible")})),$(".mask").on("click",(function(){$(".modal-wrap, #modal .button").removeClass("visible")}));var e,a,i=$("#carousel"),o=700,n=o/3;function s(){return a-e}function r(t){i.hasClass("transition")||(a=e,$(document).off("mouseup"),i.off("mousemove").addClass("transition").css("transform","translateX("+t*o+"px)"),setTimeout((function(){1===t?$(".slide:first").before($(".slide:last")):-1===t&&$(".slide:last").after($(".slide:first")),i.removeClass("transition"),i.css("transform","translateX(0px)")}),700))}!function(){/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)&&(o=$(window).innerWidth());$(".carousel-wrap, .slide").css("width",o),$(".modal").css("max-width",o),$("#carousel").css("left",-1*o)}(),$("#next").click((function(){r(-1)})),$("#prev").click((function(){r(1)})),i.on("mousedown",(function(){i.hasClass("transition")||(e=event.pageX,$(this).on("mousemove",(function(){a=event.pageX,$(this).css("transform","translateX("+s()+"px)")})),$(document).on("mouseup",(function(){return s()>n?r(1):s()<-n?r(-1):void r(0)})))}))}));
//# sourceMappingURL=modal.js.map
