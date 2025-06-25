import { proxy } from 'valtio';
// import { reactLogo } from '../assets';

export const shirtState = proxy ({
    intro:false,
    color:'#EFBD48',
    isLogoTexture: true, 
    isFullTexture: false,
    logoDecal: '/threejs.png',
    fullDecal: '/threejs.png',
    position:[0, 0.08, 0.07],
    rotation:[0, 0, 0],
    scale:0.15,
    backPosition:[0, 0.08, -0.1],
    backRotation:[0, -3.14, 0],
    backScale:0.15,

})



export const mugState = proxy ({
    intro:false,
    color:'#EFBD48',
    isLogoTexture: true, 
    isFullTexture: false,
    logoDecal: '/threejs.png',
    fullDecal: '/threejs.png',
    position:[0, 0.08, 0.07],
    rotation:[0, 0, 0],
    scale:0.15,
    backPosition:[0, 0.08, -0.1],
    backRotation:[0, -3.14, 0],
    backScale:0.15,

})
