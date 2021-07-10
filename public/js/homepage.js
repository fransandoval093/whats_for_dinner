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
const animationTime = 1827;

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

var animation = ["salt.json"]

scene.on("update", (e) => {
  heightPerFrame = anim.totalFrames / animationTime; // if total animation duration === total frames, then 1px height scroll = 1 frame moved
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


tl.from(".block",1,{
    x: "100",
    opacity: 0,
    stagger: 0.15,
    scale: ".8",
    ease: Expo.easeInOut,
  }, )


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


  
  const intro1 = document.getElementById("intro");
  const helper = document.getElementById("helper");
  const container = document.getElementById("container");
  
  gsap.to(container, {
    x: () => -(container.offsetWidth - innerWidth),
    ease: "none",
    scrollTrigger: {
      trigger: intro1,
      start: "bottom top",
      invalidateOnRefresh: true,
      markers: true,
      scrub: 1,
      end: () => "+=" + (container.offsetWidth - innerWidth)
    }
})
  
var virtualFridge = [];

const addIngredient = (event) => {
    event.preventDefault();
    console.log('Added Ingredient');
    const ingredient = document.querySelector('#ingredient-name').value.trim();
    ingredient.push(virtualFridge);
    console.log(virtualFridge);

}
document.getElementById('addbtn').addEventListener('click', addIngredient);


//Francisco API handler below.
//Pushing Again
>>>>>>> Stashed changes
const newFormHandler = async (event) => {
    event.preventDefault();
    
    if (virtualFridge > 0) {
      const response = await fetch(`/api/items`, {
        method: 'POST',
        body: JSON.stringify({ virtualFridge }),
        headers: {
          'Content-Type': 'application/json',
        },
      });


    }
    var ingredients = JSON.stringify(virtualFridge);
    var apiUrl = '' + ingredients;
    var apiKey = '';
    fetch(apiUrl)
    .then(function (res) {
        return res.json()
    })
    .then(function (data) {
        var recipe1 = data[0];
        document.getElementById('recipe1title').innerHTML(recipe1.title);
        document.getElementById('recipe1list').innerHTML(recipe1.list);
        document.getElementById('recipe1instructions').innerHTML(recipe1.instructions);
        document.getElementById('recipe1image').src=recipe1.image;
        //copy paste for more cards w ingredients.
    })

};
  
const delButtonHandler = async (event) => {
    if (event.target.hasAttribute('data-id')) {
      const id = event.target.getAttribute('data-id');
  
      const response = await fetch(`/api/items/${id}`, {
        method: 'DELETE',
      });
    }
};
  
document
    .querySelector('.new-recipe-form')
    .addEventListener('submit', newFormHandler);
  
document
    .querySelector('.recipe-list')
    .addEventListener('click', delButtonHandler);