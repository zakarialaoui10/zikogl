__Ziko__.ExtractAll()
__ZikoGl__.ExtractAll()
__Ziko__.__Config__.setDefault({target:document.body})

SCENE = SceneGl("100vw","100vh");
obj=[]
for(i=-2;i<=2;i++){
	for(j=-2;j<=2;j++){
		for(k=-2;k<=2;k++){
			obj.push(cube3(0.3).pos(i*4.5,j*4.5,3*k))
		}
	}
}
SCENE.add(...obj);

dragCtrl = useDragControls(obj);
transformCtrl = useTransformControls(SCENE);
dragCtrl.onHoverOn(e=>transformCtrl.attach(e.element));
dragCtrl.onStart(()=>transformCtrl.setMode("rotate"))

// dragCtrl.onStart(e=>e.element.style({color:0xffff00}))
// dragCtrl.onDrag(e=>e.element.style({color:0xff00ff}))
// dragCtrl.onEnd(e=>e.element.style({color:0x00ffff}))
// dragCtrl.onHoverOn(e=>e.element.style({color:0x3333ee}).scale(1.5,1.5,1.5))
// dragCtrl.onHoverOff(e=>e.element.style({color:0xffffff}).scale(1,1,1))
