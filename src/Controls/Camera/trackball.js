import { TrackballControls } from 'three/addons/controls/TrackballControls.js';
import { __ZikoThreeCameraControls__ } from './__ZikoThreeCameraControls__';

class ZikoThreeTrackballControls extends __ZikoThreeCameraControls__{
    constructor(target) {
        super(target)
        this.control = new TrackballControls(target.camera.currentCamera, target.rendererTarget.domElement);
        this.init(false)
        this.onChange();
    }
    init() {
        this.control = new TrackballControls(this.__TARGET__.camera.currentCamera, this.__TARGET__.rendererTarget.domElement);
        return this;
    }
    onChange(handler, renderGl = true, renderCss = true) {
        this.__TARGET__.onPtrMove(()=>{
            if (!this.isPaused) {
                this.__TARGET__.renderGl();
                if (renderGl) this.__TARGET__.renderGl();
                if (this.__TARGET__.cache.type === "css" && renderCss) this.__TARGET__.renderCss();
                if (handler) handler();
                this.control.update()
            }

        })
        return this;
    }
}

const ZikoTrackballControls = target => new ZikoThreeTrackballControls(target);
export { ZikoTrackballControls }
