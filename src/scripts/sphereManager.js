class SphereManager {
    constructor(scene, textureLoader) {
        this.scene = scene;
        this.textureLoader = textureLoader;
        this.imgObjects = [];
        this.imgGroup = new THREE.Group();
        this.scene.add(this.imgGroup);
    }

    createSphere(items, geometry, transparent = false, doubleSide = true, repeatTexture = false, isVideo = false) {
        const localGroup = new THREE.Group();
        const goldNum = 1.618033988749895;

        items.forEach((item, index) => {
            this.textureLoader.load(item, (texture) => {
                texture.generateMipmaps = false;
                if (repeatTexture) {
                    texture.wrapS = THREE.RepeatWrapping;
                    texture.repeat.x = -1;
                }

                const material = new THREE.MeshBasicMaterial({
                    map: texture,
                    transparent: transparent,
                    side: doubleSide ? THREE.DoubleSide : THREE.FrontSide
                });

                const mesh = new THREE.Mesh(geometry, material);
                const totalItems = items.length;
                const theta = 2 * Math.PI * index / goldNum;
                const phi = Math.acos(1 - 2 * (index + 0.5) / totalItems);
                const positionSphere = new THREE.Spherical(10, phi, theta); // Adjust radius as needed

                mesh.position.setFromSpherical(positionSphere);
                mesh.lookAt(new THREE.Vector3());

                localGroup.add(mesh);
                this.imgObjects.push(mesh);
            });
        });

        this.imgGroup.add(localGroup);
    }
}


export default SphereManager;
