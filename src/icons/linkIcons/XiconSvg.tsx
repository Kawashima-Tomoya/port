import { useHover } from "@mantine/hooks";
import type { SVGProps } from "react";

export const XiconSvg = (props: SVGProps<SVGSVGElement>) => {
	const { hovered, ref } = useHover();
	return (
		<div ref={ref}>
			{hovered ? (
				//hover時strokeを青に変える
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 256 256"
					width="20px"
					height="20px"
					{...props}
				>
					<title>X</title>
					<rect width="256" height="256" fill="none" />
					<polygon
						points="48 40 96 40 208 216 160 216 48 40"
						fill="none"
						stroke="var(--mantine-color-anchor)"
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="16"
					/>
					<line
						x1="113.88"
						y1="143.53"
						x2="48"
						y2="216"
						fill="none"
						stroke="var(--mantine-color-anchor)"
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="16"
					/>
					<line
						x1="208"
						y1="40"
						x2="142.12"
						y2="112.47"
						fill="none"
						stroke="var(--mantine-color-anchor)"
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="16"
					/>
				</svg>
			) : (
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 256 256"
					width="20px"
					height="20px"
					{...props}
				>
					<title>X</title>
					<rect width="256" height="256" fill="none" />
					<polygon
						points="48 40 96 40 208 216 160 216 48 40"
						fill="none"
						stroke="currentColor"
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="16"
					/>
					<line
						x1="113.88"
						y1="143.53"
						x2="48"
						y2="216"
						fill="none"
						stroke="currentColor"
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="16"
					/>
					<line
						x1="208"
						y1="40"
						x2="142.12"
						y2="112.47"
						fill="none"
						stroke="currentColor"
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="16"
					/>
				</svg>
			)}
		</div>
	);
};
