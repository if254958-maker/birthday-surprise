/* ==========================
   PASSCODE
========================== */

function checkPassword(){

    let password = document.getElementById("passcode").value;

    if(password === "3004"){

        document.getElementById("login-page").style.display = "none";

        document.getElementById("website").style.display = "block";

        const music = document.getElementById("bgMusic");
music.play();


        alert("🎉 Happy Birthday Fajar! ❤️");

        createHearts();

    }

    else{

        document.getElementById("error").innerHTML =
        "❌ Wrong Passcode! Try Again ❤️";

    }

}

/* ==========================
   GIFT BUTTON
========================== */

const giftBtn = document.getElementById("giftBtn");

giftBtn.addEventListener("click",function(){

    document.getElementById("giftMessage").style.display="block";

    giftBtn.innerHTML="Gift Opened ❤️";

});

/* ==========================
   FLOATING HEARTS
========================== */

function createHearts(){

    setInterval(function(){

        let heart=document.createElement("div");

        heart.innerHTML="💖";

        heart.style.position="fixed";

        heart.style.left=Math.random()*100+"vw";

        heart.style.top="100vh";

        heart.style.fontSize=(20+Math.random()*25)+"px";

        heart.style.pointerEvents="none";

        heart.style.animation="floatHeart 6s linear";

        document.body.appendChild(heart);

        setTimeout(function(){

            heart.remove();

        },6000);

    },350);

}