precision highp float;
uniform sampler2D velocity;
varying vec2 uv;

void main() {
    vec2 vel = texture2D(velocity, uv).xy;
    float len = length(vel);
    vel = vel * 0.5 + 0.5;

    float a = texture2D(velocity, uv).a;
    float z = texture2D(velocity, uv).z;

    vec3 color = vec3(vel.x, vel.y, 1.0);
    color = mix(vec3(1.0), color, len);

    if (a==1. && z==1.){
		color = vec3(0.5);
	 }else{
		// color = mix(vec3(1.0), color, len);
        // color = vec3(1.0);
	}

    gl_FragColor = vec4(color, 1.0);
}
