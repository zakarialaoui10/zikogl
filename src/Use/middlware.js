const useCoordinates=(e,scene,render=true)=>{
    scene.cache.watch.intersection.pointer.x = ( e.mx / window.innerWidth ) * 2 - 1;
	scene.cache.watch.intersection.pointer.y = - ( e.my / window.innerHeight ) * 2 + 1;
    if(render)scene.renderGl()
}
export{
    useCoordinates
}