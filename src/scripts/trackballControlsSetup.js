import { TrackballControls } from 'three/examples/jsm/controls/TrackballControls.js';

export function initializeTrackballControls(camera, canvas) {
    const controls = new TrackballControls(camera, canvas);

    controls.staticMoving = false; // Keep this as false to enable smooth inertial movement.
    controls.noPan = true;
    controls.dynamicDampingFactor = 0.02; // Lower this to make the damping less, which makes controls more responsive.
    controls.rotateSpeed = 0.5; // Increase this to allow faster rotation with the same amount of mouse movement.
    controls.zoomSpeed = 1.0; // Increase this to make zooming faster.
    controls.maxDistance = 100; // Increase if needed to allow zooming out further.
    controls.minDistance = 10; // Decrease if you want to allow zooming in closer.

    function updateControls() {
        controls.update();
    }

    function resetControls() {
        controls.reset();
    }

    return { updateControls, resetControls };
}
