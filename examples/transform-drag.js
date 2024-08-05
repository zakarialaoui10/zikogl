__Ziko__.ExtractAll()
__ZikoGl__.ExtractAll()
__Ziko__.__Config__.setDefault({target:document.body})

SCENE = SceneGl("100vw","100vh");
// obj=[]
// for(i=-2;i<=2;i++){
// 	for(j=-2;j<=2;j++){
// 		for(k=-2;k<=2;k++){
// 			obj.push(cube3(0.3).pos(i*4.5,j*4.5,3*k))
// 		}
// 	}
// }
// SCENE.add(...obj);
c=cube3(1).style({color:0xaaaa00})
b=c.clone()
// SCENE.add(b)

// dragCtrl = useDragControls(obj);
// transformCtrl = useTransformControls(SCENE);
// dragCtrl.onHoverOn(e=>transformCtrl.attach(e.element));
// dragCtrl.onStart(()=>transformCtrl.setMode("rotate"))

// function dumpObject(obj, lines = [], isLast = true, prefix = '') {
// 	const localPrefix = isLast ? '└─' : '├─';
// 	lines.push(`${prefix}${prefix ? localPrefix : ''}${obj.name || '*no-name*'} [${obj.type}]`);
// 	const newPrefix = prefix + (isLast ? '  ' : '│ ');
// 	const lastNdx = obj.children.length - 1;
// 	obj.children.forEach((child, ndx) => {
// 	  const isLast = ndx === lastNdx;
// 	  dumpObject(child, lines, isLast, newPrefix);
// 	});
// 	return lines;
//   }

// gltf.load( 'https://threejs.org/manual/examples/resources/models/cartoon_lowpoly_small_city_free_pack/scene.gltf', ( gltf ) => {
// 	window.root=gltf.scene;
// 	// SCENE.sceneGl.add(gltf.scene)
// 	console.log(dumpObject(root).join('\n'));

// })
// // ob.load('https://threejs.org/manual/examples/resources/models/windmill/windmill.obj', (root) => {
// //     SCENE.sceneGl.add(root);
// //   });
// a=JSON.parse(preload("https://threejs.org/manual/examples/resources/models/cartoon_lowpoly_small_city_free_pack/scene.gltf"))