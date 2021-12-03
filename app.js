const body = document.querySelector('body')
const intro = document.querySelector('.intro')
const video = intro.querySelector('video')

// HIDE PLAY BUTTON IN LOW POWER MODE DEVICES
const playVideo = (e) => {
  video.play()
  // video.style.display = 'inline'
}

// video.addEventListener('suspend', playVideo)
body.addEventListener('touchstart', playVideo)

const text = intro.querySelector('.header')
// END SECTION
const section = document.querySelector('section')

// SCROLL MAGIC
const controller = new ScrollMagic.Controller()

// SCENES
let scene = new ScrollMagic.Scene({
  duration: 3818,
  triggerElement: intro,
  triggerHook: 0
})
  .addIndicators()
  .setPin(intro)
  .addTo(controller)

// TEXT ANIMATION
const textAnim = TweenMax.fromTo(text, 3.818, {opacity: 1}, {opacity: 0})

let scene2 = new ScrollMagic.Scene({
  duration: 3818,
  triggerElement: intro,
  triggerHook: 0
})
.setTween(textAnim)
.addTo(controller)

// VIDEO ANIMATION
let accelamount = .2
let scrollpos = 0
let delay = 0

scene.on('update', e => {
  scrollpos = e.scrollPos / 1000;
  if (scrollpos > 0 && video.style.display === '') {
    video.style.display = 'inline'
  }
})

setInterval(() => {
  delay += (scrollpos - delay) * accelamount;
  video.currentTime = delay
}, (1000/30));
