import * as THREE from 'three'
import { TrackballControls } from 'three/examples/jsm/controls/TrackballControls.js'
const gsap = window.gsap;
import * as dat from 'lil-gui'
// const gui = new dat.GUI()
import Highway from 'highway';

// Import Transitions
import Fade from './fade.js';
import { Raycaster } from 'three';

// Call Highway.Core once.
const H = new Highway.Core({
  transitions: {
    default: Fade
  }
});

/**
 * Base
 */
// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()

/**
 * Overlay
 */
const overlayGeometry = new THREE.PlaneBufferGeometry(2, 2, 1, 1)

const overlayMaterial = new THREE.ShaderMaterial({
  transparent: true,
  uniforms:
  {
    uAlpha: { value: 1}
  },
  vertexShader: `
    void main()
    {
      gl_Position = vec4(position, 1.0);
    }
  `
  ,
  fragmentShader:
    `
      uniform float uAlpha;

      void main()
      {
        gl_FragColor = vec4(0.0, 0.0, 0.0, uAlpha);
      }
    `
})

const overlay = new THREE.Mesh(overlayGeometry, overlayMaterial)
scene.add(overlay)

/**
 * Loader
 */
const loadingBarElement = document.querySelector('.loading-bar')

/**
 * Texture
 */
const loadingManager = new THREE.LoadingManager(
  // Loaded
  () =>
  {
    gsap.delayedCall(0.5,()=>{
      gsap.to(overlayMaterial.uniforms.uAlpha,{duration:3, value: 0})
      loadingBarElement.classList.add('ended')
      loadingBarElement.style.transform = ''
    })
  },
  //Progress
  (itemUrl, itemsLoaded, itemsTotal) =>
  {
    const progressRatio = itemsLoaded / itemsTotal;
    loadingBarElement.style.transform = `scaleX( ${progressRatio} )`
  }
)

const textureLoader = new THREE.TextureLoader(loadingManager)

let myImages = [
  new URL('static/sans+titre-2.jpg?as=webp', import.meta.url),
  new URL('static/sans+titre-1.jpg?as=webp',import.meta.url),
  new URL('static/sans+titre-3.jpg?as=webp',import.meta.url),
  new URL('static/sans+titre-4.jpg?as=webp',import.meta.url),
  new URL('static/sans+titre-5.jpg?as=webp',import.meta.url),
  new URL('static/sans+titre-6.jpg?as=webp',import.meta.url),
  new URL('static/sans+titre-7.jpg?as=webp',import.meta.url),
  new URL('static/sans+titre-8.jpg?as=webp',import.meta.url),
  new URL('static/sans+titre-9.jpg?as=webp',import.meta.url),
  new URL('static/sans+titre-10.jpg?as=webp',import.meta.url),
  new URL('static/sans+titre-11.jpg?as=webp',import.meta.url),
  new URL('static/sans+titre-12.jpg?as=webp',import.meta.url),
  new URL('static/sans+titre-13.jpg?as=webp',import.meta.url),
  new URL('static/sans+titre-14.jpg?as=webp',import.meta.url),
  new URL('static/sans+titre-15.jpg?as=webp',import.meta.url),
  new URL('static/sans+titre-16.jpg?as=webp',import.meta.url),
  new URL('static/sans+titre-17.jpg?as=webp',import.meta.url),
  new URL('static/sans+titre-19.jpg?as=webp',import.meta.url),
  new URL('static/sans+titre-20.jpg?as=webp',import.meta.url),
  new URL('static/sans+titre-21.jpg?as=webp',import.meta.url),
  new URL('static/sans+titre-22.jpg?as=webp',import.meta.url),
  new URL('static/sans+titre-24.jpg?as=webp',import.meta.url),
  new URL('static/sans+titre-25.jpg?as=webp',import.meta.url),
  new URL('static/sans+titre-26.jpg?as=webp',import.meta.url),
  new URL('static/sans+titre-27.jpg?as=webp',import.meta.url),
  new URL('static/sans+titre-28.jpg?as=webp',import.meta.url),
  new URL('static/sans+titre-29.jpg?as=webp',import.meta.url),
  new URL('static/sans+titre-30.jpg?as=webp',import.meta.url),
  new URL('static/sans+titre-31.jpg?as=webp',import.meta.url),
  new URL('static/sans+titre-32.jpg?as=webp',import.meta.url),
  new URL('static/sans+titre-33.jpg?as=webp',import.meta.url),
  new URL('static/sans+titre-34.jpg?as=webp',import.meta.url),
  new URL('static/sans+titre-35.jpg?as=webp',import.meta.url),
  new URL('static/sans+titre-36.jpg?as=webp',import.meta.url),
  new URL('static/sans+titre-37.jpg?as=webp',import.meta.url),
  new URL('static/sans+titre-38.jpg?as=webp',import.meta.url),
  new URL('static/sans+titre-39.jpg?as=webp',import.meta.url),
  new URL('static/sans+titre-41.jpg?as=webp',import.meta.url),
  new URL('static/sans+titre-42.jpg?as=webp',import.meta.url),
  new URL('static/sans+titre-43.jpg?as=webp',import.meta.url),
  new URL('static/sans+titre-44.jpg?as=webp',import.meta.url),
  new URL('static/sans+titre-45.jpg?as=webp',import.meta.url),
  new URL('static/sans+titre-46.jpg?as=webp',import.meta.url),
  new URL('static/sans+titre-47.jpg?as=webp',import.meta.url),
]

/**
 * Create Objects
 */
let planeGeometry = new THREE.PlaneGeometry(16, 9);
let phi = 0
let theta = 0
let goldNum = 1.618033988749895
let myVideos = document.querySelectorAll('.video')
const imggroup = new THREE.Group();
const imgObjects = []

function fiboSphere(imgLght, iter, mesh, size) {
  theta = 2 * Math.PI * iter / goldNum
  phi = Math.acos(1-2 * (iter + 0.5)/imgLght)
  let positionSphere = new THREE.Spherical(size, phi, theta)

  mesh.position.setFromSpherical(positionSphere);
  mesh.lookAt(mesh.position.clone().setLength(3));
  imggroup.add(mesh);
}


function imgSphere(elArr){
  let imgLght = elArr.length
  let i = 0
  for(let image of elArr){
    // Load images as texture
    let imgText = textureLoader.load(image)
    imgText.generateMipmaps = false

    // Create planeMaterial and map images texture
    let planeMaterial = new THREE.MeshBasicMaterial({ map: imgText })
    planeMaterial.side = THREE.DoubleSide
    let planeMesh  = new THREE.Mesh(planeGeometry, planeMaterial);
    i += 1

    // Create sphere using finonacci
    fiboSphere(imgLght, i, planeMesh, 50)
    imgObjects.push(planeMesh)
  }
  scene.add(imggroup)
  imggroup.rotation.x = -0.100;
  imggroup.rotation.z = 0.0835;
}

// gui.add(imggroup.rotation , 'x', - 5, 5, 0.01)
// gui.add(imggroup.rotation , 'z', - 5, 5, 0.01)


imgSphere(myImages)

function vidSphere(elArr){
  let y = 0
  let imgLght = elArr.length

  for(let vid of elArr){
    vid.play()
    let vidTexture = new THREE.VideoTexture(vid)
    // Create planeMaterial and map images texture
    let planeMaterial = new THREE.MeshBasicMaterial({ map: vidTexture })
    planeMaterial.side = THREE.DoubleSide
    let planeMesh  = new THREE.Mesh(planeGeometry, planeMaterial);

    y += 1

    // Create sphere using finonacci
    fiboSphere(imgLght, y, planeMesh, 35)
  }
}

vidSphere(myVideos)


/**
 * Sizes
 */
const sizes = {
  width: window.innerWidth,
  height: window.innerHeight
}

window.addEventListener('resize', () =>
{
    // Update sizes
    sizes.width = window.innerWidth
    sizes.height = window.innerHeight

    // Update camera
    camera.aspect = sizes.width / sizes.height
    camera.updateProjectionMatrix()

    // Update renderer
    renderer.setSize(sizes.width, sizes.height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

    // Update EffectComposer
    effectComposer.setSize(sizes.width, sizes.height)
    effectComposer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
})

/**
 * Raycaster
 */
const raycaster = new THREE.Raycaster();

/**
 * Mouse
 */
const mouse = new THREE.Vector2()

window.addEventListener('mousemove', (event) => {
  mouse.x = event.clientX / sizes.width * 2 - 1;
  mouse.y = - (event.clientY / sizes.height * 2 - 1);
})
let tl = gsap.timeline();
let lightbox = document.querySelector('.lightbox')

window.addEventListener('click', (event) => {
  if(currentIntersect) {
   for(let i = 0; i < imgObjects.length; i++){
    if(currentIntersect.object === imgObjects[i]) {
      let imgurl = imgObjects[i].material.map.source.data.currentSrc
      createImg(imgurl)
    }
   }
  } else {
    console.log('clickaway');
    clickouteraseimg()
  }
})


let imgboxbtn = document.querySelector(".boxbtn")

imgboxbtn.addEventListener('click', ()=>{
  console.log("btnclicked", imgcreated);
  if(imgcreated){
    tl.to(".lightbox", { opacity: 0, duration: 1, })
    setTimeout(() => {
      imgbox.remove()
          console.log("erase img");
    }, 1000);
  }
})

let imgbox = null
let imgcreated = false

function createImg(url) {
  console.log(imgcreated);
  if(imgcreated === false){
    let newimg = document.createElement('img');
    newimg.src = url;
    newimg.classList.add("imagebox")
    lightbox.appendChild(newimg);
    imgbox = document.querySelector(".imagebox")
    imgcreated = true
    tl
      .to(".lightbox", { opacity: 1, duration: 0.5, })
      .from(".imagebox", { opacity: 0, duration: 0, })
  } else {
    clickouteraseimg()
  }
}

function clickouteraseimg() {
  if(imgcreated === true){
    tl.to(".lightbox", { opacity: 0, duration: 1, })
    setTimeout(() => {
      imgbox.remove()
      console.log("erase img");
      imgcreated = false
    }, 1000);
  }
}

/**
 * Camera
 */
// Base camera
var fov = 45;
const camera = new THREE.PerspectiveCamera( fov, window.innerWidth / window.innerHeight, 0.05, 1000 );
camera.position.set(80,80,80); // Set position like this
scene.add(camera)

/**
 * Controls
 */
// const controls = new OrbitControls(camera, canvas)
// controls.enableDamping = true // le smooth des mouvements
// controls.dampingFactor = 0.05;
// controls.enablePan = false
// controls.enableZoom = true

// // controls.zoomSpeed = 1.2
// controls.maxDistance = 1000
// controls.update()

/**
 * TrackBall
 */
  const trackballcontrols = new TrackballControls(camera, canvas)

  trackballcontrols.staticMoving = false
  trackballcontrols.dynamicDampingFactor = 0.05;
  trackballcontrols.noPan = true
  trackballcontrols.rotateSpeed = 0.5;
  trackballcontrols.zoomSpeed = 0.5;

  trackballcontrols.maxDistance = 200
  trackballcontrols.minDistance = 0

  trackballcontrols.update()

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})

renderer.setSize(sizes.width, sizes.height)
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))


/**
 * Animate
 */
const clock = new THREE.Clock()
let currentIntersect = null

const tick = () =>
{
    imggroup.rotation.y += 0.001;

    // Cas a ray
    raycaster.setFromCamera(mouse, camera)
    const intersects = raycaster.intersectObjects(imgObjects)

    if(intersects.length)
    {
        if(!currentIntersect)
        currentIntersect = intersects[0]
    }
    else
    {
        if(currentIntersect)
        currentIntersect = null
    }

    // Update controls
    // controls.update()
    trackballcontrols.update()
    // Render
    renderer.render(scene, camera)

    // Call tick again on the next frame
    window.requestAnimationFrame(tick)
}

tick()