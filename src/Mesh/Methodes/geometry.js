function maintain(render){
	if(render && this.parent){
		if(this.cache.type==="gl")this.parent.renderGl();
		if(this.cache.type==="css")this.parent?.renderCss();
	}
	return this;
}
class ZikoThreeGeometry{
        posX(x=this.px,render=true){
			this.element.position.x=x;
			maintain.call(this,render);
			return this;
        }
        posY(y=this.py,render=true){
			this.element.position.y=y;
			maintain.call(this,render);
			return this;
        }
        posZ(z=this.pz,render=true){
			this.element.position.z=z;
			maintain.call(this,render);
			return this;
        }
        pos(x,y,z,render){
			this.element.position.set(x,y,z,render);
			maintain.call(this,render);
			return this;
        }
		translateX(dx=0,render=true){
			this.element.position.x=this.px+dx;
			maintain.call(this,render);
			return this;
        }
        translateY(dy=0,render=true){
			this.element.position.y=this.py+dy;
			maintain.call(this,render);
			return this;
        }
        translateZ(dz=0,render=true){
			this.element.position.z=this.pz+dz;
			maintain.call(this,render);
			return this;
        }
        translate(dx=0,dy=0,dz=0,render=true){
			this.element.rotation.set(
				this.px+dx,
				this.py+dy,
				this.pz+dz,
				);
			maintain.call(this,render);
			return this;
        }
        rotX(x=this.rx,render=true){
			this.element.rotation.x=x;
			maintain.call(this,render);
			return this;
        }
        rotY(y=this.ry,render=true){
			this.element.rotation.y=y;
			maintain.call(this,render);
			return this;            
        }
        rotZ(z=this.rz,render=true){
			this.element.rotation.z=z;
			maintain.call(this,render);
			return this;            
        }
        rot(x,y,z,render=true){
			this.element.rotation.set(x,y,z);
			maintain.call(this,render);
			return this;
        }
		scaleX(x,render=true){
			this.element.scale.x=x;
			maintain.call(this,render);
			return this;
        }
        scaleY(y,render=true){
			this.element.scale.y=y;
			maintain.call(this,render);
			return this;            
        }
        scaleZ(z,render=true){
			this.element.scale.z=z;
			maintain.call(this,render);
			return this;            
        }
        scale(x,y,z,render=true){
			this.element.scale.set(x,y,z);
			maintain.call(this,render);
			return this;
        }
    }
export { ZikoThreeGeometry }