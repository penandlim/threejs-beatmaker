// Cloning GLTF instances.

import {Bone, Skeleton, SkinnedMesh} from 'three';
import {GLTF} from "three/examples/jsm/loaders/GLTFLoader";

export const cloneGltf = (gltf: GLTF) => {
    const clone = {
        animations: gltf.animations,
        scene: gltf.scene.clone(true)
    };

    const skinnedMeshes : {[key: string] : SkinnedMesh} = {};

    gltf.scene.traverse(node => {
        if (node instanceof SkinnedMesh)
            skinnedMeshes[node.name] = node;
    });

    const cloneBones : {[key: string] : Bone} = {};
    const cloneSkinnedMeshes : {[key: string] : SkinnedMesh} = {};

    clone.scene.traverse(node => {
        if (node instanceof Bone) {
            cloneBones[node.name] = node;
        }

        if (node instanceof SkinnedMesh) {
            cloneSkinnedMeshes[node.name] = node;
        }
    });

    for (let name in skinnedMeshes) {
        const skinnedMesh = skinnedMeshes[name];
        const skeleton = skinnedMesh.skeleton;
        const cloneSkinnedMesh = cloneSkinnedMeshes[name];

        const orderedCloneBones : Bone[] = [];

        for (let i = 0; i < skeleton.bones.length; ++i) {
            const cloneBone = cloneBones[skeleton.bones[i].name];
            orderedCloneBones.push(cloneBone);
        }

        cloneSkinnedMesh.bind(
            new Skeleton(orderedCloneBones, skeleton.boneInverses),
            cloneSkinnedMesh.matrixWorld);
    }

    return clone;
};