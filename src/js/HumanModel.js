import { MeshPhongMaterial, AnimationMixer } from 'three/build/three.module';
import TWEEN from '@tweenjs/tween.js';

export class HumanModel {
    constructor(character, animations) {
        this.animations = animations;
        this.object3d = character;
        this.object3d.children[1].castShadow = true;
        this.object3d.children[1].material = new MeshPhongMaterial({ skinning: true, flatShading: true });
        this.material = this.object3d.children[1].material;
        this.defaultColor = this.material.color;
        this.mixer = new AnimationMixer( character );
        this.actions = [];

        this.head = this.object3d.getObjectByName("mixamorigHead");

        for (let i = 0; i < animations.length; i++) {
            this.actions.push(this.mixer.clipAction( animations[i] ));
        }

        this.actions[1].play();
        this.currentActionIndex = 0;
        this.shouldPlay = false;
    }

    setColorTween(newColor) {
        this.colorTween = new TWEEN.Tween(this.material.color)
            .to({
                r: newColor.r,
                g: newColor.g,
                b: newColor.b
            }, 100)
            .easing(TWEEN.Easing.Cubic.Out).chain(
                new TWEEN.Tween(this.material.color)
                    .to({
                        r: this.defaultColor.r,
                        g: this.defaultColor.g,
                        b: this.defaultColor.b
                    }, 200)
            );
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

    updateXPos(min, max, progress, delta) {
        this.object3d.position.x = min + (max - min) * progress;
    }

    flashColor() {
        if (this.colorTween !== null) {
            this.colorTween.stop();
            this.colorTween.start();
        }
    }
}