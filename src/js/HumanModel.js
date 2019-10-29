import * as THREE from 'three/build/three.module';

export class HumanModel {
    constructor(character, animations) {
        this.animations = animations;
        this.object3d = character;
        this.object3d.children[1].castShadow = true;
        this.object3d.children[1].material = new THREE.MeshPhongMaterial({ skinning: true, flatShading: true });
        this.material = this.object3d.children[1].material;
        this.mixer = new THREE.AnimationMixer( character );
        this.actions = [];

        this.head = this.object3d.getObjectByName("mixamorigHead");

        for (let i = 0; i < animations.length; i++) {
            this.actions.push(this.mixer.clipAction( animations[i] ));
        }

        this.actions[1].play();
        this.currentActionIndex = 0;
        this.shouldPlay = false;
    }

    updateMixer(delta) {
        this.mixer.update(delta);
    }

    transitionAnimTo(index) {
        this.actions[index].enabled = true;
        this.actions[index].time = 0;
        this.actions[index].setEffectiveTimeScale(1);
        this.actions[index].setEffectiveWeight(1);
        this.actions[index].play();

        this.actions[this.currentActionIndex].crossFadeTo(this.actions[index], 1, true);
        this.currentActionIndex = index;
    }

    clone() {
        return new HumanModel(this.object3d.GdeepCloneMaterials(), this.animations)
    }
}