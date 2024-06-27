import { MapControls } from 'three/addons/controls/MapControls.js';
import { Vector3, Quaternion } from 'three/src/Three.js';

class ZikoThreeMapControls {
    #TARGET;

    constructor(target) {
        this.#TARGET = target;
        this.control = new MapControls(target.camera.currentCamera, target.rendererTarget.domElement);
        this.isPaused = false;
        this.__cache__ = {
            saved_state: {
                position: new Vector3(),
                quaternion: new Quaternion()
            }
        };
        this.onChange();
    }

    get currentState() {
        const state = {
            position: new Vector3(),
            quaternion: new Quaternion()
        };
        state.position.copy(this.#TARGET.camera.currentCamera.position);
        state.quaternion.copy(this.#TARGET.camera.currentCamera.quaternion);
        return state;
    }

    save() {
        this.__cache__.saved_state.position.copy(this.#TARGET.camera.currentCamera.position);
        this.__cache__.saved_state.quaternion.copy(this.#TARGET.camera.currentCamera.quaternion);
        return this;
    }

    useState(state, renderGl = true, renderCss = true) {
        let { position, quaternion } = state;
        if (!(position instanceof Vector3)) {
            const { x, y, z } = position;
            position = new Vector3(x, y, z);
        }
        if (!(quaternion instanceof Quaternion)) {
            const { _x, _y, _z, _w } = quaternion;
            quaternion = new Quaternion(_x, _y, _z, _w);
        }
        this.#TARGET.camera.currentCamera.position.copy(position);
        this.#TARGET.camera.currentCamera.quaternion.copy(quaternion);
        this.#TARGET.camera.currentCamera.updateMatrixWorld();
        if (renderGl) this.#TARGET?.renderGl();
        if (renderCss) this.#TARGET?.renderCss();
    }

    restore(renderGl = false, renderCss = false) {
        this.useState(this.__cache__.saved_state, renderGl, renderCss);
        return this;
    }

    enable() {
        this.restore();
        this.control.enabled = true;
        return this;
    }

    disable() {
        this.save();
        this.control.enabled = false;
        return this;
    }

    pause() {
        this.isPaused = true;
        return this;
    }

    resume() {
        this.isPaused = false;
        return this;
    }

    dispose() {
        this.save();
        this.control.dispose();
        return this;
    }

    init() {
        this.control = new MapControls(this.#TARGET.camera.currentCamera, this.#TARGET.rendererTarget.domElement);
        this.restore();
        return this;
    }

    clear() {
        this.dispose();
        this.#TARGET.cache.controls.map = null;
        return null;
    }

    onChange(handler, renderGl = true, renderCss = true) {
        this.control.addEventListener("change", () => {
            if (!this.isPaused) {
                this.#TARGET.renderGl();
                if (renderGl) this.#TARGET.renderGl();
                if (this.#TARGET.cache.type === "css" && renderCss) this.#TARGET.renderCss();
                if (handler) handler();
            }
        });
        return this;
    }
}

const ZikoMapControls = target => new ZikoThreeMapControls(target);
export { ZikoMapControls };