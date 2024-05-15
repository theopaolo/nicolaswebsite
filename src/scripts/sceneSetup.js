import * as THREE from 'three';

export function initializeScene(canvas) {
    const fov = 45; // Default FOV
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x0d0d0d);

    const camera = new THREE.PerspectiveCamera(fov, window.innerWidth / window.innerHeight, 0.1, 1000);
    // camera.position.set(50, 0, 0);
    camera.position.set(0, 0, 50);
    camera.lookAt(scene.position);
    
    const renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    const textureLoader = new THREE.TextureLoader(); // Initialize texture loader here

    function adjustFOV() {
        const minWidthForDesktop = 768;
        camera.fov = window.innerWidth < minWidthForDesktop ? 55 : 45;
        camera.updateProjectionMatrix();
    }

    function onResize() {
        adjustFOV();
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    }

    window.addEventListener('resize', onResize);
    adjustFOV(); // Initial adjustment

    return { scene, camera, renderer, textureLoader };
}
