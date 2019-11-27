import {MeshPhongMaterial, AnimationMixer, Object3D, AnimationClip, Mesh, Color, AnimationAction} from 'three';
import * as TWEEN from '@tweenjs/tween.js';
import {GLTF} from "three/examples/jsm/loaders/GLTFLoader";
import {Model} from "./Model";

export class HumanModel extends Model {
    private mixer: AnimationMixer;
    private animations: AnimationClip[];
    private object3d: Object3D;
    private material: MeshPhongMaterial;
    private defaultColor: Color;
    private actions: AnimationAction[];
    private head: Object3D;
    private currentActionIndex: number;
    private shouldPlay: boolean;
    private colorTween: TWEEN.Tween;

    constructor(gltf: GLTF) {
        super(gltf);
        this.object3d = gltf.scene.children[0];
        this.animations = gltf.animations;
        this.object3d.children[1].castShadow = true;
        (<Mesh>this.object3d.children[1]).material = new MeshPhongMaterial({ skinning: true, flatShading: true });
        this.material = <MeshPhongMaterial>(<Mesh>this.object3d.children[1]).material;
        this.defaultColor = this.material.color;
        this.mixer = new AnimationMixer( this.object3d );
        this.actions = [];

        this.head = this.object3d.getObjectByName("mixamorigHead");

        for (let i = 0; i < this.animations.length; i++) {
            this.actions.push(this.mixer.clipAction( this.animations[i] ));
        }
        this.actions[1].play();
        this.currentActionIndex = 0;
        this.shouldPlay = false;
    }

    setColorTween(newColor : Color) {
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

    updateMixer(delta : number) {
        this.mixer.update(delta);
    }

    transitionAnimTo(index : number) {
        this.actions[index].enabled = true;
        this.actions[index].time = 0;
        this.actions[index].setEffectiveTimeScale(1);
        this.actions[index].setEffectiveWeight(1);
        this.actions[index].play();

        this.actions[this.currentActionIndex].crossFadeTo(this.actions[index], 1, true);
        this.currentActionIndex = index;
    }

    updateXPos(min : number, max : number, progress : number, delta : number) {
        this.object3d.position.x = min + (max - min) * progress;
    }

    flashColor() {
        if (this.colorTween !== null) {
            this.colorTween.stop();
            this.colorTween.start();
        }
    }

    getObject3D() {
        return this.object3d;
    }
}