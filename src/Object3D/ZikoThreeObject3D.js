class ZikoThreeObject3D{
    constructor(){
        this.parent=null;
        this.cache={
            type:null,
            legacyParent:null,
            attributes:{}
        }
    }
    maintain(render){
        if(render && this.parent){
            if(this.cache.type==="gl")this.parent?.renderGl();
            if(this.cache.type==="css")this.parent?.renderCss();
        }
        return this;
    }
    render(){
        this.cache.legacyParent.add(this);
        return this;
    }
    unrender(){
        if(this.parent && this.parent.items.includes(this)){
            this.cache.legacyParent=this.parent;
            this.parent.remove(this);
        }
        this.parent = null;
        return this;
    }
    emit(eventName,data=this){
        this.element.dispatchEvent({type:eventName,data});
        return this;
    }
    on(eventName,callback){
        this.element.addEventListener(eventName,e=>callback.call(e,e.data));
        return this;
    }
    setAttr(name, value) {
        if(name instanceof Object){
          const [names,values]=[Object.keys(name),Object.values(name)];
          for(let i=0;i<names.length;i++){
            if(this?.attr[name[i]]!==value[i]){
              Object.assign(this.cache.attributes, Object.fromEntries([[names[i], values[i]]]));
            }
          }
        }
        else{
          if(this?.attr[name]!==value){
            Object.assign(this.cache.attributes, Object.fromEntries([[name, value]]));
          }
        }
        return this;
    }
    removeAttr(...names) {
        for(let i=0;i<names.length;i++){
            delete this.cache.attributes[names];
        }
        return this;
    }
    get attr(){
        return this.cache.attributes;
    }
    get id(){
        return this.element.id
    }
    get px(){
        return this.element.position.x;
    }
    get py(){
        return this.element.position.y;
    }
    get pz(){
        return this.element.position.z;
    }
    get rx(){
        return this.element.rotation.x;
    }
    get ry(){
        return this.element.rotation.y;
    }
    get rz(){
        return this.element.rotation.z;
    }
    posX(x=this.px,render=true){
        this.element.position.x=x;
        this.maintain(render);
        return this;
    }
    posY(y=this.py,render=true){
        this.element.position.y=y;
        this.maintain(render);
        return this;
    }
    posZ(z=this.pz,render=true){
        this.element.position.z=z;
        this.maintain(render);
        return this;
    }
    pos(x,y,z,render=true){
        this.element.position.set(x,y,z,render);
        this.maintain(render);
        return this;
    }
    translateX(dx=0,render=true){
        this.element.position.x=this.px+dx;
        this.maintain(render);
        return this;
    }
    translateY(dy=0,render=true){
        this.element.position.y=this.py+dy;
        this.maintain(render);
        return this;
    }
    translateZ(dz=0,render=true){
        this.element.position.z=this.pz+dz;
        this.maintain(render);
        return this;
    }
    translate(dx=0,dy=0,dz=0,render=true){
        this.element.rotation.set(
            this.px+dx,
            this.py+dy,
            this.pz+dz,
            );
        this.maintain(render);
        return this;
    }
    rotX(x=this.rx,render=true){
        this.element.rotation.x=x;
        this.maintain(render);
        return this;
    }
    rotY(y=this.ry,render=true){
        this.element.rotation.y=y;
        this.maintain(render);
        return this;            
    }
    rotZ(z=this.rz,render=true){
        this.element.rotation.z=z;
        this.maintain(render);
        return this;            
    }
    rot(x,y,z,render=true){
        this.element.rotation.set(x,y,z);
        this.maintain(render);
        return this;
    }
    scaleX(x,render=true){
        this.element.scale.x=x;
        this.maintain(render);
        return this;
    }
    scaleY(y,render=true){
        this.element.scale.y=y;
        this.maintain(render);
        return this;            
    }
    scaleZ(z,render=true){
        this.element.scale.z=z;
        this.maintain(render);
        return this;            
    }
    scale(x,y,z,render=true){
        this.element.scale.set(x,y,z);
        this.maintain(render);
        return this;
    }
    useShadow(receiveShadow=true,castShadow=true){
        this.element.receiveShadow=receiveShadow;
        this.element.castShadow=castShadow;
        return this;
    }
    castShadow(castShadow=true){
        this.element.castShadow=castShadow;
        return this;
    }
    receiveShadow(receiveShadow=true){
        this.element.receiveShadow=receiveShadow;
        return this;
    }
}
export {
    ZikoThreeObject3D,
}