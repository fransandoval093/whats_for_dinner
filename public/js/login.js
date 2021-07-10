<<<<<<< Updated upstream
=======


const intro = document.querySelector(".intro");
const more = document.querySelector(".more");
const mark = document.querySelector(".mark");
const tl = gsap.timeline({defaults: {ease: "power1.out"}})
const controller = new ScrollMagic.Controller();
const tm = TweenMax;


// ============
// Background Animation on scroll
// ============

// set desired animation time long enough so that it doesn't skip frames when scrolling fast.
const animationTime = 827;

// initialise scrollmagic scene
let scene = new ScrollMagic.Scene({
  duration: animationTime,
  triggerElement: intro,
  triggerHook: 0,
})
  .setPin(intro)
  .addTo(controller);

// initalise bodymovin

const elem = document.getElementById("lottie");
let anim;

let delay = 0;
let heightPerFrame = 0;

var animation = ["chaderr.json"]

scene.on("update", (e) => {
  //heightPerFrame = anim.totalFrames / animationTime; // if total animation duration === total frames, then 1px height scroll = 1 frame moved
  delay = Math.round(e.scrollPos * heightPerFrame);
  anim.goToAndStop(delay, true);
});

const animateData = {
  container: elem, //
  renderer: "svg",
  loop: false,
  autoplay: false,
  rendererSettings: { progressiveLoad: false },
  path: animation[Math.floor(Math.random()*animation.length)], // path to json file
};



// tl.from(".intro",2,{
//   y: "400",
//   opacity: 0,
//   ease: Expo.easeInOut,
// });
anim = lottie.loadAnimation(animateData);
// ============
// Background Animation on Start
// ============

// tl.from(".soup-2",1,{
//   rotation:"+=380",
//   repeat: -1,
//   ease: Expo.easeInOut,
// }, )




// Animation



// tl.from(".intro",5,{
//   x: "400",
//   opacity: 0,
//   ease: Expo.easeInOut,
// }, )

tl.from(".block",1,{
  x: "100",
  opacity: 0,
  stagger: 0.15,
  scale: ".8",
  ease: Expo.easeInOut,
}, )

tl.from(".plate", 6,{
  opacity: 0,
  scale: ".8",
},)
tl.from(".avocado", 2,{
  opacity: 0,
  y: "-100",
  
}, "-=3")

tl.from(".soup", 30,{
  rotation: "-=360",
  repeat:-1,
  ease:Linear
},"-=7") 





tm.to(".blocks", 5.1, {
  y: "-460",
  scale: ".4",
  ease: Expo.easeInOut,
});

tm.to(".box", 5.6, {
    y: "-100%",
    ease: Expo.easeInOut,
});

tm.from(".navbar > div", 6.9, {
    opacity: 0,
    y: 60,
    ease: Expo.easeInOut,
    delay: 0.6,
});

tm.from(".title", 6.9, {
    opacity: 0,
    y: 60,
    ease: Expo.easeInOut,
    delay: 0.6,
});
tm.from(".social", 1.6, {
    opacity: 0,
    y: 60,
    ease: Expo.easeInOut,
    delay: 0.6,
});


// Auto Scroll Down
$(function() {
  $('.scroll-down').click (function() {
    $('html, body').animate({scrollTop: parseInt($('#login').offset().top) }, 500);
  });
});


// FOrm login
(function() {
  'use strict';
  window.addEventListener('load', function() {
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.getElementsByClassName('needs-validation');
    // Loop over them and prevent submission
    var validation = Array.prototype.filter.call(forms, function(form) {
      form.addEventListener('submit', function(event) {
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
        form.classList.add('was-validated');
      }, false);
    });
  }, false);
})();


// lOGIn Input
$('.signup').on('click',() =>{
  var imgArry = ["vegetable-1", "vegetable-2", "vegetable-3", "vegetable-4", "vegetable-5", ]
  var randomImage = imgArry[Math.floor(Math.random()*imgArry.length)]
  var randomgImageUrl = './public/img/'+ randomImage + '.jpg'
console.log(randomgImageUrl);
  $(".secound-img").attr("src", randomgImageUrl)
  tm.to(".CreatingAndLoginIn",  {
    opacity: 1,
    x: -770,
    ease: Expo.easeInOut,
});
$('#signup-inputs').removeClass("not-active");
  $('#login-inputs').addClass("not-active");
  console.log("++++");
})

$('.login').on('click',() =>{
  var imgArry = [ "vegetable-6", "vegetable-7", "vegetable-8", "vegetable-9", "vegetable-10"]
  var randomImage = imgArry[Math.floor(Math.random()*imgArry.length)]
  var randomgImageUrl = './public/img/'+ randomImage + '.jpg'
  $(".first-img").attr("src", randomgImageUrl) 
  tm.to(".CreatingAndLoginIn",  {
    opacity: 1,
    x: 0,
    ease: Expo.easeInOut,
});
$('#signup-inputs').addClass("not-active");
$('#login-inputs').removeClass("not-active");
  console.log("++++");
})

// Form Scroll Animation

gsap.from(".CreatingAndLoginIn", {
  scrollTrigger:{
  trigger: ".move",
  toggleActions: "restart resume resume restart"
  } ,
  x:"-300",
  ease: Expo.easeInOut,
  duration: 3
})
gsap.from(".both-logIn-signIn-card", {
  scrollTrigger:{
  trigger: ".move",
  toggleActions: "restart resume resume restart"
  } ,
  x:"10",
  delay:2,
  opacity: 0,
  ease: Expo.easeInOut,
  duration: 1
})
>>>>>>> Stashed changes
const loginFormHandler = async (event) => {
    event.preventDefault();
  
    const email = document.querySelector('#email-login').value.trim();
    const password = document.querySelector('#password-login').value.trim();
  
    if (email && password) {
      const response = await fetch('/api/users/login', {
        method: 'POST',
        body: JSON.stringify({ email, password }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/homepage');
      } else {
        alert(response.statusText);
      }
    }
};
  
const signupFormHandler = async (event) => {
    event.preventDefault();
    console.log('CLICKED!');
    const name = document.querySelector('#name-signup').value.trim();
    const email = document.querySelector('#email-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();
  
    if (name && email && password) {
      const response = await fetch('/api/users', {
        method: 'POST',
        body: JSON.stringify({ name, email, password }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/homepage');
      } else {
        alert(response.statusText);
      }
    }
};
  
document
    .querySelector('.login-form')
    .addEventListener('submit', loginFormHandler);
  
document
<<<<<<< Updated upstream
    .querySelector('.signup-form')
    .addEventListener('submit', signupFormHandler);
  
=======
    .querySelector('#signupbtn')
    .addEventListener('click', signupFormHandler);
  
>>>>>>> Stashed changes
