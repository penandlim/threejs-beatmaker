import * as THREE from 'three/build/three.module';
import TWEEN from '@tweenjs/tween.js';


export class NoteBlock {
    constructor() {
        let geometry = new THREE.BoxGeometry( 6, 0.8, 2 );
        let material = new THREE.MeshPhongMaterial( {color: 0xffffff } );
        this.object3d = new THREE.Mesh( geometry, material );
        this.object3d.receiveShadow = true;
        this.object3d.userData.classObject = this;
        this.material = material;
        this.isClicked = false;
    }
    clearHoverTween() {
        if (this.object3d.userData.hoverTween) {
            TWEEN.remove(this.object3d.userData.hoverTween);
        }
    }
    onHoverStart() {
        this.clearHoverTween();
        if (!this.isClicked) {
            if (this.object3d.userData.hoverColor) {
                let newColor = this.object3d.userData.hoverColor;
                this.object3d.userData.hoverTween = new TWEEN.Tween(this.object3d.material.color)
                    .to({r: newColor.r, g: newColor.g, b: newColor.b}, 300)
                    .easing(TWEEN.Easing.Cubic.Out).start();
            }
        }
    }
    onHoverEnd() {
        if (!this.isClicked) {
            this.clearHoverTween();

            this.object3d.userData.hoverTween = new TWEEN.Tween(this.object3d.material.color)
                .to({r: 1, g: 1, b: 1}, 300)
                .easing(TWEEN.Easing.Cubic.Out).start();
        }
    }
    onClick() {
        this.clearHoverTween();
        if (this.isClicked) {
            this.toggleOff();
        } else {
            this.toggleOn();
        }
    }
    toggleOn() {
        this.object3d.material.color.copy(this.object3d.userData.hoverColor);

        this.object3d.scale.y = 0.5;
        this.object3d.userData.tween = new TWEEN.Tween(this.object3d.scale)
            .to({y:1}, 400)
            .easing(TWEEN.Easing.Back.Out).start();

        this.isClicked = true;
    }
    toggleOff() {
        this.object3d.userData.hoverTween = new TWEEN.Tween(this.object3d.material.color)
            .to({r: 1, g: 1, b: 1}, 400)
            .easing(TWEEN.Easing.Cubic.Out).start();

        this.object3d.scale.y = 2;
        this.object3d.userData.tween = new TWEEN.Tween(this.object3d.scale)
            .to({y:1}, 400)
            .easing(TWEEN.Easing.Cubic.Out).start();

        this.isClicked = false;
    }
}