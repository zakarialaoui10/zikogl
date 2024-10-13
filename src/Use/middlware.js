const useCoordinates=(e,scene,render=true)=>{
    scene.cache.watch.intersection.pointer.x = ( e.mx / globalThis?.innerWidth ) * 2 - 1;
	scene.cache.watch.intersection.pointer.y = - ( e.my / globalThis?.innerHeight ) * 2 + 1;
    if(render)scene.renderGl()
}
export{
    useCoordinates
}