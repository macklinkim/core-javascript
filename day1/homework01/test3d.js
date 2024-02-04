//Import the THREE.js library
import * as THREE from 'https://cdn.skypack.dev/three@0.129.0/build/three.module.js';
// To allow for the camera to move around the scene
import { OrbitControls } from 'https://cdn.skypack.dev/three@0.129.0/examples/jsm/controls/OrbitControls.js';
// To allow for importing the .gltf file
import { GLTFLoader } from 'https://cdn.skypack.dev/three@0.129.0/examples/jsm/loaders/GLTFLoader.js';

//Create a Three.JS Scene
//create a new camera with positions and angles
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
let object;
let scene = new THREE.Scene();
let renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector('#canvas'),
  antialias: true,
});
renderer.outputEncoding = THREE.sRGBEncoding;
camera.position.set(0, 0, 40);
scene.background = new THREE.Color('white');
let light = new THREE.DirectionalLight(0xffff00, 10);
scene.add(light);
let loader = new GLTFLoader();
loader.load('./scene.gltf', function (gltf) {
  object = gltf.scene;
  scene.add(gltf.scene);
  renderer.render(scene, camera);
  function animate() {
    requestAnimationFrame(animate);
    object.rotation.y = -3 + (mouseX / window.innerWidth) * 5.5;
    object.rotation.x = -1.2 + (mouseY * 4) / window.innerHeight;
    renderer.render(scene, camera);
  }
  animate();
});
let mouseX = window.innerWidth / 2;
let mouseY = window.innerHeight / 2;

renderer.setSize(window.innerWidth, window.innerHeight);

const topLight = new THREE.DirectionalLight(0x111111, 1);
topLight.position.set(500, 500, 500);
topLight.castShadow = true;
scene.add(topLight);

const ambientLight = new THREE.AmbientLight(0x222222, 5);
scene.add(ambientLight);

let controls = new OrbitControls(camera, renderer.domElement);

const frameDragon = document.querySelector('#canvas');
frameDragon.addEventListener('resize', function () {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});

document.body.onmousemove = (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
};
