precision highp float;

uniform vec2 force;
uniform vec2 center;
uniform vec2 scale;
uniform vec2 px;
varying vec2 vUv;
uniform vec2 time;

void main(){
    vec2 circle = (vUv - 0.5) * 2.0;
    float d = 1.0-min(length(circle), 1.0);
    float x=0.;
	float y=0.;
    if ((time.x - 5. * floor(time.x/5.)) < 2.0){
		x=1.;
		y=1.;
	}
    d *= d;
    gl_FragColor = vec4(force * d, x, y);
}
