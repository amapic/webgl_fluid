import face_vert from "./glsl/sim/face.vert";
import deplacement_frag from "./glsl/sim/deplacement.frag";
import ShaderPass from "./ShaderPass";

export default class Deplacement extends ShaderPass{
    constructor(simProps){
        super({
            material: {
                vertexShader: face_vert,
                fragmentShader: deplacement_frag,
                uniforms: {
                    boundarySpace: {
                        value: simProps.boundarySpace
                    },
                    pressure: {
                        value: simProps.src_p.texture
                    },
                    velocity: {
                        value: simProps.src_v.texture
                    },
                    deplacement: {
                        value: simProps.src_deplacement.texture
                    },
                    px: {
                        value: simProps.cellScale
                    },
                    dt: {
                        value: simProps.dt
                    }
                }
            },
            output: simProps.dst
        });

        this.init();
    }

    update({vel2,deplacement}){
        // console.log("aa")
        this.uniforms.velocity.value = vel2.texture;
        // this.uniforms.pressure.value = pressure.texture;
        this.uniforms.deplacement.value = deplacement.texture;
        super.update();
    }
    
}