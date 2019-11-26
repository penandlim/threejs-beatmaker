import * as THREE from 'three';
import * as $ from 'jquery';
// import { EffectComposer } from "three/examples/jsm/postprocessing/EffectComposer";
// import { RenderPass } from "three/examples/jsm/postprocessing/RenderPass";
import * as Tone from "tone";
import * as React from "react";
import * as ReactDOM from "react-dom";
import { App } from "./components/App";
import 'bootstrap';
import 'snapsvg-cjs';
import * as SNAPSVG_TYPE from "snapsvg"
declare var Snap: typeof SNAPSVG_TYPE;
import * as SetupCanvas from "./SetupCanvas";
import "../js/input-knobs";

(window as any).THREE = THREE;
(window as any).Tone = Tone;

ReactDOM.render(React.createElement(App, {xSize:16, ySize:6 } ), document.getElementById("container"), function() {
    SetupCanvas.main();
    const controlButton = $("#controlButton");

    const svg = document.getElementById("controlButtonSVG") as any;
    const s = Snap(svg as SVGElement);
    const playPath = Snap.select("#playPath");
    const stopPath = Snap.select("#stopPath");
    const playPathPoints = playPath.node.getAttribute("d");
    const stopPathPoints = stopPath.node.getAttribute("d");

    controlButton.on("click", function() {
        if (Tone.Transport.state === "started") {
            playPath.animate({d : playPathPoints},300, mina.easeinout);
            Tone.Transport.stop();
        } else {
            playPath.animate({d : stopPathPoints},300, mina.backout);
            Tone.Transport.start();
        }
    });
});
