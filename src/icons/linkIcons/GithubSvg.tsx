import { Tooltip } from "@mantine/core";
import { useHover } from "@mantine/hooks";
import type { SVGProps } from "react";

const PATH_DATA = {
	main: "M119.83,56A52,52,0,0,0,76,32a51.92,51.92,0,0,0-3.49,44.7A49.28,49.28,0,0,0,64,104v8a48,48,0,0,0,48,48h48a48,48,0,0,0,48-48v-8a49.28,49.28,0,0,0-8.51-27.3A51.92,51.92,0,0,0,196,32a52,52,0,0,0-43.83,24Z",
	branch: "M104,232V192a32,32,0,0,1,32-32h0a32,32,0,0,1,32,32v40",
	fork: "M104,208H72a32,32,0,0,1-32-32A32,32,0,0,0,8,144",
} as const;

const PATH_PROPS = {
	fill: "none",
	strokeLinecap: "round" as const,
	strokeLinejoin: "round" as const,
	strokeWidth: "16",
};

export const GithubSvg = (props: SVGProps<SVGSVGElement>) => {
	const { hovered, ref } = useHover();
	const strokeColor = hovered ? "var(--mantine-color-anchor)" : "currentColor";

	return (
		<Tooltip
			withArrow={true}
			arrowSize={5}
			label="Github"
			transitionProps={{ transition: "pop", duration: 200 }}
		>
			<div ref={ref}>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 256 256"
					width="20px"
					height="20px"
					{...props}
				>
					<title>github</title>
					<rect width="256" height="256" fill="none" />
					<path d={PATH_DATA.main} stroke={strokeColor} {...PATH_PROPS} />
					<path d={PATH_DATA.branch} stroke={strokeColor} {...PATH_PROPS} />
					<path d={PATH_DATA.fork} stroke={strokeColor} {...PATH_PROPS} />
				</svg>
			</div>
		</Tooltip>
	);
};
