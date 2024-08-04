import { MapControls } from 'three/addons/controls/MapControls.js';
import { __ZikoThreeCameraControls__ } from './__ZikoThreeCameraControls__';
class ZikoThreeMapControls extends __ZikoThreeCameraControls__{
    constructor(target) {
        super(target)
        this.init()
        this.onChange();
    }
    init() {
        this.control = new MapControls(this.__TARGET__.camera.currentCamera, this.__TARGET__.rendererTarget.domElement);
        return this;
    }
    onChange(handler, renderGl = true, renderCss = true) {
        this.control.addEventListener("change", () => {
            if (!this.isPaused) {
                this.__TARGET__.renderGl();
                if (renderGl) this.__TARGET__.renderGl();
                if (this.__TARGET__.cache.type === "css" && renderCss) this.__TARGET__.renderCss();
                if (handler) handler();
            }
        });
        return this;
    }
}

const ZikoMapControls = target => new ZikoThreeMapControls(target);
export { ZikoMapControls };