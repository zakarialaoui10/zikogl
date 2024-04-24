//import Ziko  from "ziko";
import {SceneGl,cube3} from "zikogl"
__Ziko__.__Config__.setDefault({target:document.body})
const S=SceneGl(400,400)
S.add(cube3(2))
S.useOrbitControls()






// console.log(S)
// Ziko.App(
//     //Ziko.UI.text("hello world"),
//     S
// ).style({
//     width:"100vw",
//     height:"100vh",
//     color:"gold",
//     //backgroundColor:"darkblue",
//     position:"fixed",
//     left:0,
//     top:0,
//     fontSize:"2rem"
// }).vertical(0,0)