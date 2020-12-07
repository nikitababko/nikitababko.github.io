$(document).ready(function () {
    // MODAL
    var modalText = {
        arduino: {
            title: "Arduino store",
            tag: "ARDUINO STORE.",
            detail:
                "Online store 'Mechatronics' - Arduino for studying robotics and prototyping various electronic devices. The assortment of the store is conveniently divided into categories in which you can find and buy almost any goods for a radio amateur - microcontrollers, sensors and sensors, expansion cards, batteries and much more!.",
            link: "https://github.com/nikitababko/arduino-store",
        },
        chat: {
            title: "Chat",
            tag: "MESSENGER.",
            detail:
                "This is a service for exchanging instant messages, links, pictures and other information. This messenger is similar to many others, but with its own characteristics. He knows how to attach media files to messages, is anonymous. The correspondence can be diversified with emoticons and voice messages..",
            link: "https://github.com/nikitababko/chat",
        },
        tictactoe: {
            title: "Tic tac tore",
            tag: "ENTERTAINMENT APP",
            detail:
                "A logic game between two opponents on a square field of 3 by 3 cells or larger. One of the players plays with 'crosses', the other - with 'noughts'. The traditional Chinese game uses black and white stones..",
            link: "https://nikitababko.github.io/tic-tac-toe/",
        },
        mogo: {
            title: "MoGO",
            tag: "BUSINESS ANALYTICS.",
            detail:
                "The layout was made for the site - business analyst. Each of us must have heard the same question from our parents or friends not from the “programmer community”: “What are you doing there at your work?”. Usually, after an attempt to answer, an unchanging comment follows: 'Oh, you programmer, you can't even fix a refrigerator.' What can we say about business analysts who cannot really explain to their colleagues what they are doing. I myself often hear this question from my father, but I still can't find the right answer. And the truth is, what we do at work - we analyze!.",
            link: "https://nikitababko.github.io/landing-page___mogo___-HARD-/",
        },
        pex: {
            title: "Pex",
            tag: "DESIGN YOUR EYEBALLS WILL THANK YOU FOR.",
            detail: "Landing page.",
            link: "https://nikitababko.github.io/landing-page___pex___-LIGHT-/",
        },
        eclipse: {
            title: "Eclipse",
            tag: "DESIGN.",
            detail: "Very nice layout. The designer clearly had a hand in it.",
            link: "https://nikitababko.github.io/landing-page___eclipse___-LIGHT-/",
        },
        axit: {
            title: "Axit",
            tag: "DESIGN.",
            detail: "Landing page.",
            link: "https://nikitababko.github.io/landing-page___axit___-MIDDLE-/",
        },
        activebox: {
            title: "Active Box",
            tag: "LANDING PAGE.",
            detail: "Landing page.",
            link: "https://nikitababko.github.io/landing-page___active-box___-MIDDLE-/",
        },
        goldenpage: {
            title: "Golden page",
            tag: "LANDING PAGE.",
            detail: "Landing page.",
            link: "https://nikitababko.github.io/landing-page___golden-page___-LIGHT-/",
        },
    };

    $("#gallery .button").on("click", function () {
        fillModal(this.id);
        $(".modal-wrap").addClass("visible");
    });

    $(".close").on("click", function () {
        $(".modal-wrap, #modal .button").removeClass("visible");
    });

    $(".mask").on("click", function () {
        $(".modal-wrap, #modal .button").removeClass("visible");
    });

    var carousel = $("#carousel"),
        slideWidth = 700,
        threshold = slideWidth / 3,
        dragStart,
        dragEnd;

    setDimensions();

    $("#next").click(function () {
        shiftSlide(-1);
    });
    $("#prev").click(function () {
        shiftSlide(1);
    });

    carousel.on("mousedown", function () {
        if (carousel.hasClass("transition")) return;
        dragStart = event.pageX;
        $(this).on("mousemove", function () {
            dragEnd = event.pageX;
            $(this).css("transform", "translateX(" + dragPos() + "px)");
        });
        $(document).on("mouseup", function () {
            if (dragPos() > threshold) {
                return shiftSlide(1);
            }
            if (dragPos() < -threshold) {
                return shiftSlide(-1);
            }
            shiftSlide(0);
        });
    });

    function setDimensions() {
        if (
            /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
                navigator.userAgent
            )
        ) {
            slideWidth = $(window).innerWidth();
        }
        $(".carousel-wrap, .slide").css("width", slideWidth);
        $(".modal").css("max-width", slideWidth);
        $("#carousel").css("left", slideWidth * -1);
    }

    function dragPos() {
        return dragEnd - dragStart;
    }

    function shiftSlide(direction) {
        if (carousel.hasClass("transition")) return;
        dragEnd = dragStart;
        $(document).off("mouseup");
        carousel
            .off("mousemove")
            .addClass("transition")
            .css("transform", "translateX(" + direction * slideWidth + "px)");
        setTimeout(function () {
            if (direction === 1) {
                $(".slide:first").before($(".slide:last"));
            } else if (direction === -1) {
                $(".slide:last").after($(".slide:first"));
            }
            carousel.removeClass("transition");
            carousel.css("transform", "translateX(0px)");
        }, 700);
    }

    function fillModal(id) {
        $("#modal .title").text(modalText[id].title);
        $("#modal .detail").text(modalText[id].detail);
        $("#modal .tag").text(modalText[id].tag);
        if (modalText[id].link)
            $("#modal .button")
                .addClass("visible")
                .parent()
                .attr("href", modalText[id].link);

        $.each($("#modal li"), function (index, value) {
            $(this).text(modalText[id].bullets[index]);
        });
        $.each($("#modal .slide"), function (index, value) {
            $(this).css({
                background:
                    "url('img/slides/" + id + "-" + index + ".jpg') center center/cover",
                backgroundSize: "cover",
            });
        });
    }
});
