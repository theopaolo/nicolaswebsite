// sphereCreation.js
import * as THREE from 'three';

export function createFibonacciSphere(images, geometry, scene, textureLoader, group) {
  const imgLength = images.length + 1;
  const goldenRatio = (1 + Math.sqrt(5)) / 2;
  images.forEach((image, index) => {
    const texture = textureLoader.load(image);
    texture.generateMipmaps = false;
    texture.wrapS = THREE.RepeatWrapping;
    texture.repeat.x = -1;

    const material = new THREE.MeshBasicMaterial({ map: texture, side: THREE.DoubleSide });
    const mesh = new THREE.Mesh(geometry, material);

    const theta = Math.PI * 2 * index / goldenRatio;
    const phi = Math.acos(1 - 2 * (index + 0.5) / imgLength);
    const position = new THREE.Spherical(10, phi, theta);
    mesh.position.setFromSpherical(position);
    mesh.lookAt(new THREE.Vector3());

    group.add(mesh);
  });
  scene.add(group);
}
