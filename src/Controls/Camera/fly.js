import { FlyControls } from 'three/addons/controls/FlyControls.js';
import { __ZikoThreeCameraControls__ } from './__ZikoThreeCameraControls__';

class ZikoThreeFlyControls extends __ZikoThreeCameraControls__{
    constructor(target) {
        super(target);
        this.init()
        this.onChange();
    }
    init() {
        this.control = new FlyControls(this.__TARGET__.camera.currentCamera, this.__TARGET__.rendererTarget.domElement);
        return this;
    }
    onChange(handler, renderGl = true, renderCss = true) {
        this.__TARGET__.onPtrMove(()=>{
            if (!this.isPaused) {
                this.__TARGET__.renderGl();
                if (renderGl) this.__TARGET__.renderGl();
                if (this.__TARGET__.cache.type === "css" && renderCss) this.__TARGET__.renderCss();
                this.control.update(0.1);
                if (handler) handler();
            }

        })
        return this;
    }
}

const ZikoFlyControls = target => new ZikoThreeFlyControls(target);
export { ZikoFlyControls }
