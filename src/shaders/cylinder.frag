R"zzz(
#version 330 core

in vec4 light_direction;
in vec4 position;
out vec4 fragment_color;
void main() {
	fragment_color = vec4(0.0,0.8,0.8, 1.0);
}
)zzz"
