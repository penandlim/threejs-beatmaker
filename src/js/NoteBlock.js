import * as THREE from 'three/build/three.module';

export class NoteBlock {
    constructor() {
        let geometry = new THREE.BoxGeometry( 6, 0.7, 2 );
        let material = new THREE.MeshPhongMaterial( {color: 0xffffff, flatShading: true} );
        this.object3d = new THREE.Mesh( geometry, material );
        this.object3d.receiveShadow = true;
        this.material = material;
    }
}