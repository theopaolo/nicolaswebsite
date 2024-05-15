import * as THREE from 'three';
import { initSwup } from './swupManager';
import { initScripts } from './scriptManager';
import transAbout from './translateabout.js'
import { TrackballControls } from 'three/examples/jsm/controls/TrackballControls.js'
import * as dat from 'dat.gui';

initSwup(() => {
  transAbout();
  initScripts();
});

const gsap = window.gsap;
const raycaster = new THREE.Raycaster();

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
  vertexShader:
  `
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

// Funtion animate zoom in to x 50 of camera position

function zoomIn() {
  let tl = gsap.timeline();
  tl.fromTo(camera.position, {x: 900, y: 500, z: 0, ease: "powe3.inOut"}, {x: 55, y: 0, z: 0, duration: 3, ease: "power3.inOut"})
}

/**
 * Loader
 */
const loadingBarElement = document.querySelector('.loading-bar')
const loadingPercent = document.querySelector(".loadpercent")

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
      loadingPercent.classList.add('ended')

      loadingBarElement.style.transform = ''

    })
  },

// Progress
(url, itemsLoaded, itemsTotal) => {
  const progressRatio = itemsLoaded / itemsTotal;
  loadingBarElement.style.transform = `scaleX( ${progressRatio} )`
  loadingPercent.innerHTML = Math.round(progressRatio * 100) + "%"
  zoomIn();
})


const textureLoader = new THREE.TextureLoader(loadingManager)

let imghorizon = [
  new URL('../static/webhorizontales/2.jpg?as=webp&width=960', import.meta.url),
  new URL('../static/webhorizontales/1.jpg?as=webp&width=960',import.meta.url),
  new URL('../static/webhorizontales/3.jpg?as=webp&width=960',import.meta.url),
  new URL('../static/webhorizontales/4.jpg?as=webp&width=960',import.meta.url),
  new URL('../static/webhorizontales/5.jpg?as=webp&width=960',import.meta.url),
  new URL('../static/webhorizontales/6.jpg?as=webp&width=960',import.meta.url),
  new URL('../static/webhorizontales/7.jpg?as=webp&width=960',import.meta.url),
  new URL('../static/webhorizontales/8.jpg?as=webp&width=960',import.meta.url),
  new URL('../static/webhorizontales/9.jpg?as=webp&width=960',import.meta.url),
  new URL('../static/webhorizontales/10.jpg?as=webp&width=960',import.meta.url),
  new URL('../static/webhorizontales/11.jpg?as=webp&width=960',import.meta.url),
  new URL('../static/webhorizontales/12.jpg?as=webp&width=960',import.meta.url),
  new URL('../static/webhorizontales/13.jpg?as=webp&width=960',import.meta.url),
  new URL('../static/webhorizontales/14.jpg?as=webp&width=960',import.meta.url),
  new URL('../static/webhorizontales/15.jpg?as=webp&width=960',import.meta.url),
  new URL('../static/webhorizontales/16.jpg?as=webp&width=960',import.meta.url),
  new URL('../static/webhorizontales/17.jpg?as=webp&width=960',import.meta.url),
  new URL('../static/webhorizontales/19.jpg?as=webp&width=960',import.meta.url),
  new URL('../static/webhorizontales/20.jpg?as=webp&width=960',import.meta.url),
  new URL('../static/webhorizontales/21.jpg?as=webp&width=960',import.meta.url),
  new URL('../static/webhorizontales/22.jpg?as=webp&width=960',import.meta.url),
  new URL('../static/webhorizontales/24.jpg?as=webp&width=960',import.meta.url),
  new URL('../static/webhorizontales/25.jpg?as=webp&width=960',import.meta.url),
  new URL('../static/webhorizontales/26.jpg?as=webp&width=960',import.meta.url),
  new URL('../static/webhorizontales/27.jpg?as=webp&width=960',import.meta.url),
  new URL('../static/webhorizontales/28.jpg?as=webp&width=960',import.meta.url),
  new URL('../static/webhorizontales/29.jpg?as=webp&width=960',import.meta.url),
  new URL('../static/webhorizontales/30.jpg?as=webp&width=960',import.meta.url),
  new URL('../static/webhorizontales/31.jpg?as=webp&width=960',import.meta.url),
  new URL('../static/webhorizontales/32.jpg?as=webp&width=960',import.meta.url),
  new URL('../static/webhorizontales/33.jpg?as=webp&width=960',import.meta.url),
  new URL('../static/webhorizontales/34.jpg?as=webp&width=960',import.meta.url),
  new URL('../static/webhorizontales/35.jpg?as=webp&width=960',import.meta.url),
  new URL('../static/webhorizontales/36.jpg?as=webp&width=960',import.meta.url),
  new URL('../static/webhorizontales/37.jpg?as=webp&width=960',import.meta.url),
  new URL('../static/webhorizontales/38.jpg?as=webp&width=960',import.meta.url),
  new URL('../static/webhorizontales/39.jpg?as=webp&width=960',import.meta.url),
  new URL('../static/webhorizontales/41.jpg?as=webp&width=960',import.meta.url),
  new URL('../static/webhorizontales/42.jpg?as=webp&width=960',import.meta.url),
  new URL('../static/webhorizontales/43.jpg?as=webp&width=960',import.meta.url),
  ]

let imgverticale = [
  new URL('../static/webverticales/1.jpg?as=webp&width=950',import.meta.url),
  new URL('../static/webverticales/2.jpg?as=webp&width=950',import.meta.url),
  new URL('../static/webverticales/3.jpg?as=webp&width=950',import.meta.url),
  new URL('../static/webverticales/4.jpg?as=webp&width=950',import.meta.url),
  new URL('../static/webverticales/5.jpg?as=webp&width=950',import.meta.url),
  new URL('../static/webverticales/6.jpg?as=webp&width=950',import.meta.url),
  new URL('../static/webverticales/7.jpg?as=webp&width=950',import.meta.url),
  new URL('../static/webverticales/8.jpg?as=webp&width=950',import.meta.url),
  new URL('../static/webverticales/9.jpg?as=webp&width=950',import.meta.url),
  new URL('../static/webverticales/10.jpg?as=webp&width=950',import.meta.url),
  new URL('../static/webverticales/11.jpg?as=webp&width=950',import.meta.url),
  new URL('../static/webverticales/12.jpg?as=webp&width=950',import.meta.url),
  new URL('../static/webverticales/13.jpg?as=webp&width=950',import.meta.url),
  new URL('../static/webverticales/14.jpg?as=webp&width=950',import.meta.url),
  new URL('../static/webverticales/15.jpg?as=webp&width=950',import.meta.url),
]


/**
 * Create Objects
 */
let planeGeometry = new THREE.PlaneGeometry(3, 2, 1, 1);
let planeGeoVerti = new THREE.PlaneGeometry(3, 4, 1, 1);

const imggroup = new THREE.Group();
const imgObjects = []

let goldNum = 1.618033988749895
let myVideos = document.querySelectorAll('.video')

const sharedMaterial = new THREE.MeshBasicMaterial();
sharedMaterial.transparent = false;
sharedMaterial.side = THREE.DoubleSide;

function createTextureAndMaterial(imageUrl) {
  const texture = textureLoader.load(imageUrl, texture => {
      texture.generateMipmaps = false;
      texture.wrapS = THREE.RepeatWrapping;
      texture.repeat.x = -1;
  });

  return new THREE.MeshBasicMaterial({
      map: texture,
      transparent: sharedMaterial.transparent,
      side: sharedMaterial.side
  });
}

function fiboSphere(imgLght, iter, mesh, size) {
  const theta = 2 * Math.PI * iter / goldNum;
  const phi = Math.acos(1 - 2 * (iter + 0.5) / imgLght);
  const positionSphere = new THREE.Spherical(size, phi, theta);

  mesh.position.setFromSpherical(positionSphere);
  mesh.lookAt(new THREE.Vector3()); // Directly using the origin

  imggroup.add(mesh);
}

function createSphere(imgArray, geometry, size) {
  const imgLght = imgArray.length + 1;

  imgArray.forEach((image, i) => {
      const material = createTextureAndMaterial(image);
      const mesh = new THREE.Mesh(geometry, material);

      fiboSphere(imgLght, i + 1, mesh, size);
      imgObjects.push(mesh);
  });

  scene.add(imggroup);
}

createSphere(imghorizon, planeGeometry, 10);
createSphere(imgverticale, planeGeoVerti, 12);

/*
* Video Sphere
*/
function vidSphere(elArr) {
  const imgLght = elArr.length;

  for (let i = 0; i < elArr.length; i++) {
    const vid = elArr[i];
    vid.play();
    const vidTexture = new THREE.VideoTexture(vid);
    const material = new THREE.MeshBasicMaterial({ map: vidTexture });
    material.side = THREE.DoubleSide;
    const mesh = new THREE.Mesh(planeGeometry, material);

    fiboSphere(imgLght, i + 1, mesh, 6);
  }
}

vidSphere(myVideos);

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

   // fovDistances()
})


/* Mouse */
const mouse = new THREE.Vector2()

/*  LIGHTBOX */
window.addEventListener('mousemove', (event) => {
  mouse.x = event.clientX / sizes.width * 2 - 1;
  mouse.y = - (event.clientY / sizes.height * 2 - 1);
})

let tl = gsap.timeline();
let lightbox = document.querySelector('.lightbox')
let imgOpen = false

// Handle the lightbox
canvas.addEventListener("touchstart", tapHandler);
let tapedTwice = false;

function tapHandler(event) {

  if(!tapedTwice) {
      tapedTwice = true;
      setTimeout( function() { tapedTwice = false; }, 300 );
      return false;
  }

  event.preventDefault();
  //action on double tap goes below
  if(currentIntersect) {
    for(let i = 0; i < imgObjects.length; i++){
     if(currentIntersect.object === imgObjects[i]) {
       let imgurl = imgObjects[i].material.map.source.data.currentSrc
       createImg(imgurl)
     }
    }
    imgOpen = true
   }
   if(currentIntersect) {
    console.log("taped twice");
    } else {
      removeImage()
    }
}

canvas.addEventListener('dblclick', (event) => {
  if(currentIntersect) {
   for(let i = 0; i < imgObjects.length; i++){
    if(currentIntersect.object === imgObjects[i]) {
      let imgurl = imgObjects[i].material.map.source.data.currentSrc
      createImg(imgurl)
    }
   }
   imgOpen = true
  }
})

let imgbox = null
let imgcreated = false

function createImg(url) {
  if(imgcreated === false){
    let newimg = document.createElement('img');
    newimg.src = url;
    newimg.classList.add("imagebox", "img-active")
    lightbox.appendChild(newimg);
    imgbox = document.querySelector(".imagebox")
    imgcreated = true

    // image transition
    tl
      .to(".lightbox", { opacity: 1, zIndex:999, duration: 0.5, })
      .from(".imagebox", { opacity: 0,  zIndex:0, duration: 0, })

    imgbox.addEventListener('click', (event) => {
        removeImage()
      })
    } else {
      removeImage()
    }
}

function removeImage() {
  if(imgcreated === true){
    currentIntersect = null
    tl.to(".lightbox", { opacity: 0, duration: 1, zIndex:0, })
    setTimeout(() => {
      imgbox.remove()
      console.log("erase img");
      imgcreated = false
      imgOpen = false
    }, 1000);
  }
}


/**
  Camera
  Base camera
**/


// function fovDistances() {
//   if(window.innerWidth < 768){
//     fov = 55;
//   } else {
//     fov = 45;
//   }
// }

// fovDistances()

let fov = 45;
const camera = new THREE.PerspectiveCamera(fov, window.innerWidth / window.innerHeight, 0.05, 1000);
camera.position.set(50, 0, 0);

// Constants
// Constants
let miniSizes = {
  width: window.innerWidth / 2,
  height: window.innerHeight
};

let miniSphere = document.querySelector('canvas.mini-sphere');
let renderMniSphere = new THREE.WebGLRenderer({ canvas: miniSphere });
renderMniSphere.setSize(miniSizes.width, miniSizes.height);
renderMniSphere.setPixelRatio(Math.min(window.devicePixelRatio, 2));

// Setup camera and scene
let minicamera = new THREE.PerspectiveCamera(55, miniSizes.width / miniSizes.height, 0.05, 1000);
// minicamera.position.set(0, 0, 600);
let miniScene = new THREE.Scene();

// Material and group for spheres
let pointmaterial = new THREE.MeshBasicMaterial({ color: 0xffffff });
let sphereGroup = new THREE.Group();
miniScene.add(sphereGroup);

// Constants for sphere positions
let totalPoints = 200;
let offset = 2 / (totalPoints - 1);
let increment = Math.PI * (3 - Math.sqrt(5));

function initializeRendererAndScene() {

  miniScene = new THREE.Scene();
  minicamera = new THREE.PerspectiveCamera(55, miniSizes.width / miniSizes.height, 0.05, 1000);
  minicamera.position.set(0, 0, 600);
  miniScene.add(minicamera);

  recreateSpheres();
}

function recreateSpheres() {
  sphereGroup = new THREE.Group();
  for (let i = 0; i < totalPoints; i++) {
    let y = i * offset - 1 + (offset / 2);
    let r = Math.sqrt(1 - y * y);
    let phi = i * increment;
    let x = Math.cos(phi) * r;
    let z = Math.sin(phi) * r;

    const geometry = new THREE.SphereGeometry(1, 32, 32);
    const sphere = new THREE.Mesh(geometry, pointmaterial);
    sphere.position.set(x * 150, y * 150, z * 150);
    sphereGroup.add(sphere);
  }
  miniScene.add(sphereGroup);
}


  if (window.innerWidth > 740) {
    initializeRendererAndScene();
  }


// Handle window resizing
let resizeTimeout;
window.addEventListener('resize', () => {
  clearTimeout(resizeTimeout);
  resizeTimeout = setTimeout(() => {
    let currentWidth = window.innerWidth;
    miniSizes.width = currentWidth / 2;
    miniSizes.height = window.innerHeight;

    if (currentWidth <= 740) {
      disposeResources();
    } else {
      if (!renderMniSphere) {
        initializeRendererAndScene();
      } else {
        renderMniSphere.setSize(miniSizes.width, miniSizes.height);
        minicamera.aspect = miniSizes.width / miniSizes.height;
        minicamera.updateProjectionMatrix();
      }
    }
  }, 100);
});

function disposeResources() {
  if (renderMniSphere) {
    renderMniSphere.dispose(); // Dispose of the renderer resources
    renderMniSphere.domElement.parentNode.removeChild(renderMniSphere.domElement); // Remove the canvas from the DOM
    renderMniSphere = null; // Dereference to clean up memory
  }
  sphereGroup.children.forEach(sphere => {
    sphere.geometry.dispose();
    sphere.material.dispose();
  });
  sphereGroup.clear(); // Clear all objects from the group
}


scene.add(camera)
scene.background = new THREE.Color(0x0d0d0d);

/**
 * TrackBall Controls
 */
const trackballcontrols = new TrackballControls(camera, canvas)

trackballcontrols.staticMoving = false
trackballcontrols.dynamicDampingFactor = 0.05;
trackballcontrols.rotateSpeed = 0.2;

trackballcontrols.noPan = true

trackballcontrols.zoomSpeed = 0.5;

trackballcontrols.maxDistance = 100
trackballcontrols.minDistance = 0

trackballcontrols.update()

/**
* Renderer
*/
const renderer = new THREE.WebGLRenderer({ canvas: canvas })

renderer.setSize(sizes.width, sizes.height)
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))


/**
* Animate
*/
let currentIntersect = null

const expbtn = document.querySelector('.expbtn')
expbtn.addEventListener("click", () => { trackballcontrols.reset() });

const plusicon = `
<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="14" height="14" viewBox="0 0 14 14">
  <defs>
    <clipPath id="clip-Curseur_">
      <rect width="14" height="14"/>
    </clipPath>
  </defs>
  <g id="Curseur_" data-name="Curseur +" clip-path="url(#clip-Curseur_)">
    <g id="Union_1" data-name="Union 1" transform="translate(-19470 -18693)">
      <path d="M 19478.001953125 18705.25 L 19477.751953125 18705.25 L 19476.25 18705.25 L 19476 18705.25 L 19476 18705 L 19476 18701.001953125 L 19472.001953125 18701.001953125 L 19471.751953125 18701.001953125 L 19471.751953125 18700.751953125 L 19471.751953125 18699.25 L 19471.751953125 18699 L 19472.001953125 18699 L 19476 18699 L 19476 18695.001953125 L 19476 18694.751953125 L 19476.25 18694.751953125 L 19477.751953125 18694.751953125 L 19478.001953125 18694.751953125 L 19478.001953125 18695.001953125 L 19478.001953125 18699 L 19482 18699 L 19482.25 18699 L 19482.25 18699.25 L 19482.25 18700.751953125 L 19482.25 18701.001953125 L 19482 18701.001953125 L 19478.001953125 18701.001953125 L 19478.001953125 18705 L 19478.001953125 18705.25 Z" stroke="none"/>
      <path d="M 19477.751953125 18705 L 19477.751953125 18700.751953125 L 19482 18700.751953125 L 19482 18699.25 L 19477.751953125 18699.25 L 19477.751953125 18695.001953125 L 19476.25 18695.001953125 L 19476.25 18699.25 L 19472.001953125 18699.25 L 19472.001953125 18700.751953125 L 19476.25 18700.751953125 L 19476.25 18705 L 19477.751953125 18705 M 19478.251953125 18705.5 L 19475.75 18705.5 L 19475.75 18701.251953125 L 19471.501953125 18701.251953125 L 19471.501953125 18698.75 L 19475.75 18698.75 L 19475.75 18694.501953125 L 19478.251953125 18694.501953125 L 19478.251953125 18698.75 L 19482.5 18698.75 L 19482.5 18701.251953125 L 19478.251953125 18701.251953125 L 19478.251953125 18705.5 Z" stroke="none" fill="#fff"/>
    </g>
  </g>
</svg>
`;

const plusblob = new Blob([plusicon], {type: 'image/svg+xml'});
const iconplus = URL.createObjectURL(plusblob);

const tick = () =>
{
    imggroup.rotation.y -= 0.0002;

    // Cas a ray
    raycaster.setFromCamera(mouse, camera)
    const intersects = raycaster.intersectObjects(imgObjects)

   if (intersects.length) {
        if (!currentIntersect) {
            currentIntersect = intersects[0];
            document.body.style.cursor = "url('" + iconplus + "'), auto";
            console.log("Intersection detected");
        }
    } else {
        if (currentIntersect) {
            document.body.style.cursor = "grab";
            currentIntersect = null;
            console.log("No intersection");
        }
    }



    // Update controls
    trackballcontrols.update()
    // Render
    renderer.render(scene, camera)

    let currentWidth = window.innerWidth;
    if (currentWidth >= 746) {
        sphereGroup.rotation.y += 0.002;
        if (renderMniSphere) {
            renderMniSphere.render(miniScene, minicamera);
        }
    }

    // Call tick again on the next frame
    window.requestAnimationFrame(tick)
}

tick()