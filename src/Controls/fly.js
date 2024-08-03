import { FlyControls } from 'three/addons/controls/FlyControls.js';
import { TrackballControls } from 'three/addons/controls/TrackballControls.js';
import { Vector3, Quaternion } from 'three/src/Three.js';
import { __ZikoThreeControls__ } from './__ZikoThreeControls__';

class ZikoThreeFlyControls extends __ZikoThreeControls__{
    constructor(target) {
        super(target)
        this.control = new FlyControls(target.camera.currentCamera, target.rendererTarget.domElement);
        this.onChange();
    }
    init() {
        this.control = new FlyControls(this.__TARGET__.camera.currentCamera, this.__TARGET__.rendererTarget.domElement);
        this.restore();
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
window.fly = ZikoFlyControls
export { ZikoFlyControls }
