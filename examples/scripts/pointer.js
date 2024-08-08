__Ziko__.ExtractAll()
__ZikoGl__.ExtractAll()
__Ziko__.__Config__.setDefault({target:document.body})

SCENE = SceneGl("100vw","100vh");

obj=[]
for(i=-2;i<=2;i++){
	for(j=-2;j<=2;j++){
		for(k=-2;k<=2;k++){
			obj.push(cube3(0.3).pos(i*4.5,j*4.5,3*k).style({color:Random.color()}))
		}
	}
}
SCENE.add(...obj);
// dragCtrl = useDragControls(obj)
ptrCtrl = usePointerControls(obj);
transformCtrl = useTransformControls(SCENE,"rotate");
ptrCtrl.onClick(e=>transformCtrl.attach(e.element));
ptrCtrl.onHoverOn(()=>console.log("Hover On"))
ptrCtrl.onHoverOff(()=>console.log("Hover Off"))
ptrCtrl.onUp(()=>console.log("Pointer Up"))
