precision highp float;
uniform sampler2D velocity;
uniform sampler2D deplacement;
varying vec2 uv;

void main() {
    vec2 vel = texture2D(velocity, uv).xy;
    float len = length(vel);
    vel = vel * 0.5 + 0.5;

    vec2 D = texture2D(deplacement, uv).xy;


	vec3 color=vec3(0.5);
	if (uv.x>0.5){
		color=vec3(D.x,D.y,1.0);
		color = mix(vec3(1.0), color, len);
	}else{
		color=vec3(vel.x,vel.y,1.0);
		color = mix(vec3(1.0), color, len);
	}
    // if (uv.x>0.1 && uv.x<0.12 && uv.y>0.1 && uv.y<0.12 ){
    //     color=vec3(1.0);
    // }
	
	

    gl_FragColor = vec4(color, 1.0);
}
