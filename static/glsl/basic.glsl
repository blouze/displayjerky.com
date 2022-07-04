precision highp float;

uniform float iTime;

void main() {
  vec4 color = texture(iChannel0,uv).rgb;
  gl_FragColor = vec4(
    mod(gl_FragCoord.x / 256., 1.),
    mod((gl_FragCoord.x + gl_FragCoord.y - iTime * 40.) / 256. , 1.),
    mod(gl_FragCoord.y / 256., 1.),
    1.
  );
}
