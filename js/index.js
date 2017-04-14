$(function () {
    $("#nope").click(escape);
    $("#nope").mouseover(escape);

    $("#yep").on({
        click: function () {
            $("#message").text("Now, can we do it for real this time? :)")
            // The following code to animate the falling M's was written by DIACO : twitter.com/Diaco_ml 
            TweenLite.set("#container", {
                perspective: 600
            })
            TweenLite.set("img", {
                xPercent: "-50%",
                yPercent: "-50%"
            })

            var total = 30;
            var warp = document.getElementById("container"),
                w = window.innerWidth,
                h = window.innerHeight;

            for (i = 0; i < total; i++) {
                var Div = document.createElement('div');
                TweenLite.set(Div, {
                    attr: {
                        class: 'dot'
                    },
                    x: R(0, w),
                    y: R(-200, -150),
                    z: R(-200, 200)
                });
                warp.appendChild(Div);
                animm(Div);
            }

            function animm(elm) {
                TweenMax.to(elm, R(6, 15), {
                    y: h + 100,
                    ease: Linear.easeNone,
                    repeat: -1,
                    delay: -15
                });
                TweenMax.to(elm, R(4, 8), {
                    x: '+=100',
                    rotationZ: R(0, 180),
                    repeat: -1,
                    yoyo: true,
                    ease: Sine.easeInOut
                });
                TweenMax.to(elm, R(2, 8), {
                    rotationX: R(0, 360),
                    rotationY: R(0, 360),
                    repeat: -1,
                    yoyo: true,
                    ease: Sine.easeInOut,
                    delay: -5
                });
            };

            function R(min, max) {
                return min + Math.random() * (max - min)
            }
        }
    });
});

function escape() {
    var screenHeight = screen.availHeight;
    var screenWidth = screen.availWidth;

    var errorMessages = [
        "Sorry, try again.",
        "I can't let that happen. Sorry.",
        "I don't give up that easily.",
        "It's gonna take more than that to stop me.",
        "Your decision to press this button has been deferred.",
        "Deferred, then waitlisted. How could you?!?",
        "Woah woah woah.",
        "Michigan may be cold, but my heart froze when I saw I got waitlisted.",
        "This is what happens when you give a second semester senior too much free time.",
        "Wrong button.",
        "Faster, please.",
        "Really? :'(",
        "Are you sure?",
        "Getting deferred from UMich is like asking your high school crush to Prom, and her saying she'll get back to you in 3 months. Getting waitlisted after that is like her saying she'll go with you if her first thousands of choices decide not to go.",
        "This site was created using HTML, CSS, JavaScript, and denial.",
        "You just activated my trap card.",
    ]


    console.log("Height: " + screenHeight);
    console.log("Width: " + screenWidth);
    var right = Math.random() * screenWidth * .80;
    var top = Math.random() * screenHeight * .80;
    console.log("Right:" + right);
    console.log("Top: " + top);
    $(this).css({
        position: "fixed",
        right: right + "px",
        top: top + "px",
    });
    var error = errorMessages[Math.floor(Math.random() * errorMessages.length)]
    console.log(error)
    $("#message").text(error);
}