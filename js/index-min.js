function escape(){var e=screen.availHeight,t=screen.availWidth,o=["Sorry, try again.","I can't let that happen. Sorry.","I don't give up that easily.","It's gonna take more than that to stop me.","Your decision to press this button has been deferred.","Deferred, then waitlisted. How could you?!?","Woah woah woah.","Michigan may be cold, but my heart froze when I saw I got waitlisted.","This is what happens when you give a second semester senior too much free time.","Wrong button.","Faster, please.","Really? :'(","Are you sure?","Getting deferred from UMich is like asking your high school crush to Prom, and her saying she'll get back to you in 3 months. Getting waitlisted after that is like her saying she'll go with you if her first thousands of choices decide not to go.","This site was created using HTML, CSS, JavaScript, and denial.","You just activated my trap card."];console.log("Height: "+e),console.log("Width: "+t);var a=Math.random()*t*.8,n=Math.random()*e*.8;console.log("Right:"+a),console.log("Top: "+n),$(this).css({position:"fixed",right:a+"px",top:n+"px"});var i=o[Math.floor(Math.random()*o.length)];console.log(i),$("#message").text(i)}$(function(){$("#nope").click(escape),$("#nope").mouseover(escape),$("#yep").on({click:function(){function e(e){TweenMax.to(e,t(6,15),{y:s+100,ease:Linear.easeNone,repeat:-1,delay:-15}),TweenMax.to(e,t(4,8),{x:"+=100",rotationZ:t(0,180),repeat:-1,yoyo:!0,ease:Sine.easeInOut}),TweenMax.to(e,t(2,8),{rotationX:t(0,360),rotationY:t(0,360),repeat:-1,yoyo:!0,ease:Sine.easeInOut,delay:-5})}function t(e,t){return e+Math.random()*(t-e)}$("#message").text("Now, can we do it for real this time? :)"),TweenLite.set("#container",{perspective:600}),TweenLite.set("img",{xPercent:"-50%",yPercent:"-50%"});var o=30,a=document.getElementById("container"),n=window.innerWidth,s=window.innerHeight;for(i=0;i<o;i++){var r=document.createElement("div");TweenLite.set(r,{attr:{class:"dot"},x:t(0,n),y:t(-200,-150),z:t(-200,200)}),a.appendChild(r),e(r)}}})});