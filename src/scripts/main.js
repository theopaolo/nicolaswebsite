// main.js
import * as THREE from 'three';
import { TrackballControls } from 'three/examples/jsm/controls/TrackballControls.js';
import { createFibonacciSphere } from './sphereCreation';
import gsap from 'gsap';
import Swup from 'swup';

const canvas = document.querySelector('canvas.webgl');
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 100);
camera.position.set(50, 0, 0);
scene.add(camera);

const renderer = new THREE.WebGLRenderer({ canvas });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

const trackballControls = new TrackballControls(camera, canvas);
trackballControls.staticMoving = true;
trackballControls.dynamicDampingFactor = 0.1;

const textureLoader = new THREE.TextureLoader();
const group = new THREE.Group();

const imagesHorizon = ['./path/to/image1.jpg', './path/to/image2.jpg'];
const planeGeometry = new THREE.PlaneGeometry(3, 2);

createFibonacciSphere(imagesHorizon, planeGeometry, scene, textureLoader, group);

function animate() {
  requestAnimationFrame(animate);
  trackballControls.update();
  renderer.render(scene, camera);
}
animate();
