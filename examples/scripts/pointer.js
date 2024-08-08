__Ziko__.ExtractAll()
__ZikoGl__.ExtractAll()
__Ziko__.__Config__.setDefault({target:document.body})

SCENE = SceneGl("100vw","90vh");

obj=[]
for(i=-2;i<=2;i++){
	for(j=-2;j<=2;j++){
		for(k=-2;k<=2;k++){
			obj.push(cube3(0.3).pos(i*4.5,j*4.5,3*k).style({color:Random.color()}))
		}
	}
}
SCENE.add(...obj)

ptrCtrl = usePtrCtrl(obj);
transformCtrl = useTransformCtrl(SCENE);
ptrCtrl.onClick(e=>transformCtrl.attach(e.element));



Mode = Flex(
	btn("Translate"),
	btn("Rotate"),
	btn("Scale")
).horizontal("space-around",0).style({
	width:"80vw",
	height:"50px",
	// background:"red",
	margin:"auto",
})


Mode.forEach(element=>{
	element.onClick(()=>transformCtrl.setMode(element.value))
	element.style({
		color:"blue",
		border:"1px blue solid",
		fontWeight:"bold",
		background:"transparent",
		width:"100px",
		height:"30px",
	})
})
