precision highp float;
uniform sampler2D pressure;
uniform sampler2D velocity;
uniform sampler2D coloredPoints;
uniform vec2 px;
uniform float dt;
varying vec2 uv;

void main(){
    float step = 1.0;

    float p0 = texture2D(pressure, uv+vec2(px.x * step, 0)).r;
    float p1 = texture2D(pressure, uv-vec2(px.x * step, 0)).r;
    float p2 = texture2D(pressure, uv+vec2(0, px.y * step)).r;
    float p3 = texture2D(pressure, uv-vec2(0, px.y * step)).r;

    vec2 v = texture2D(velocity, uv).xy;
    vec2 gradP = vec2(p0 - p1, p2 - p3) * 0.5;
    v = v - gradP * dt;

    // float posx=0.;
	// float posy=0.;
	float coloredPointsZ=0.;
	float coloredPointsA=0.;
    float displacement1=texture2D(coloredPoints, uv).b;
    float displacement2=texture2D(coloredPoints, uv).a;
	// if ( (uv.x-0.01*v.x)>0.0 && (uv.y-0.01*v.y)>0.0){
	// 	coloredPointsZ=texture2D(coloredPoints, uv-0.01*v).b;
	// 	coloredPointsA=texture2D(coloredPoints, uv-0.01*v).a;
		
	// 	if (coloredPointsZ == 1. && coloredPointsA==1.){
	// 		// posx=uv.x +0.1*v.x;
	// 		// posy=uv.y+0.1*v.y;
    //         coloredPointsZ=1.0;
    //         coloredPointsA=1.0;
	// 	}
	// }
    displacement1+=v.x*dt;
    displacement2+=v.y*dt;
    gl_FragColor = vec4(v, displacement1,displacement2);
}
