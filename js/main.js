import EventBus from "./utils/EventBus";
window.EventBus = EventBus;
import WebGL from "./modules/WebGL";


if(!window.isDev) window.isDev = false;

const webglMng = new WebGL({
    $wrapper: document.body
});

document.addEventListener("mousemove", logKey);

function logKey(e) {
  // console.log( `
    // Screen X/Y: ${e.screenX}, ${e.screenY}
    // Client X/Y: ${e.clientX}, ${e.clientY}`);
}