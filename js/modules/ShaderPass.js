import Common from "./Common";
import * as THREE from "three";


export default class ShaderPass{
    constructor(props){
        this.props = props;
        this.uniforms = this.props.material?.uniforms;
		
    }

    init(){
        this.scene = new THREE.Scene();
        this.camera = new THREE.Camera();
		this.rtTexture = new THREE.WebGLRenderTarget( window.innerWidth, window.innerHeight, { minFilter: THREE.LinearFilter, magFilter: THREE.NearestFilter, format: THREE.RGBAFormat, type: THREE.FloatType } );


        if(this.uniforms){
            this.material = new THREE.RawShaderMaterial(this.props.material);
            this.geometry = new THREE.PlaneBufferGeometry(2.0, 2.0);
            this.plane = new THREE.Mesh(this.geometry, this.material);
            this.scene.add(this.plane);
        }

    }

    update(){
		// color=vec3(1.0);
		Common.renderer.setRenderTarget(this.rtTexture);
        Common.renderer.clear();
        Common.renderer.render(this.scene, this.camera);
		
        Common.renderer.setRenderTarget(this.props.output);
        Common.renderer.render(this.scene, this.camera);
        Common.renderer.setRenderTarget(null);
		
		const read=new Float32Array(4);
		Common.renderer.readRenderTargetPixels( this.rtTexture,500, 500, 1, 1, read );
		   // Screen X/Y: 210, 933
    // Client X/Y: 210, 848
		if (read[ 3 ]==0.5){
			console.log('r:' + read[ 0 ] + '<br/>g:' + read[ 1 ] + '<br/>b:' + read[ 2 ] + '<br/>a:' + read[ 3 ]);
		}
    }
}