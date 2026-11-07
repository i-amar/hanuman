// Entry point — the lead session replaces this during milestone 1 (port of prototype/index.html)
import * as THREE from 'three';
document.body.style.margin = '0';
const r = new THREE.WebGLRenderer(); r.setSize(innerWidth, innerHeight); document.body.appendChild(r.domElement);
const s = new THREE.Scene(); s.background = new THREE.Color(0x5e2a5c);
const c = new THREE.PerspectiveCamera(60, innerWidth / innerHeight, 0.1, 100); c.position.z = 3;
const m = new THREE.Mesh(new THREE.TorusKnotGeometry(0.6, 0.2), new THREE.MeshNormalMaterial()); s.add(m);
r.setAnimationLoop(t => { m.rotation.y = t / 1000; r.render(s, c); });
