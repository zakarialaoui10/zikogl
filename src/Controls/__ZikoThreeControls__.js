class __ZikoThreeControls__{
    constructor(target){
        this.__TARGET__=target;
        this.isPaused=false;
    }
    get type(){
        return "controls";
    }
    get currentState(){
        return null
    }
    enable(restore){
        if(restore)this.restore();
        this.control.enabled=true;
        return this;
    }
    disable(save){
        if(save)this.save();
        this.control.enabled=false;
        return this;
    }
    pause(){
        this.isPaused=true;
        return this;
    }
    resume(){
        this.isPaused=false;
        return this;
    }
    dispose(save=false){
        if(save)this.save();
        this.control.dispose();
        return this;
    }
    init(){
        return this;
    }
    save(){
        return this;
    }
    restore(){
        return this;
    }
    clear(){
        this.dispose();
        this.__TARGET__.cache.controls.orbit=null;
        return null
    }
    onChange(handler,renderGl=true,renderCss=true){
        this.control.addEventListener("change",()=>{
            if(!this.isPaused){
                this.__TARGET__.renderGl();
                if(renderGl)this.__TARGET__.renderGl();
                if(this.__TARGET__.cache.type==="css" && renderCss)this.__TARGET__.renderCss();
                if(handler)handler();
            }
        });
        return this;
    }
}
export {
    __ZikoThreeControls__
}