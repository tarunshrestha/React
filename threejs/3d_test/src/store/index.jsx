import { proxy } from 'valtio';
// import { reactLogo } from '../assets';

const shirtState = proxy ({
    intro:false,
    color:'#EFBD48',
    isLogoTexture: true, 
    isFullTexture: false,
    logoDecal: '/threejs.png',
    fullDecal: '/threejs.png',
    position:[0, 0.08, 0.15],
    rotation:[0, 0, 0],
    scale:0.15,

})

export default shirtState