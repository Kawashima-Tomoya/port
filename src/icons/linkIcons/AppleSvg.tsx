import { useHover } from "@mantine/hooks";
import type { SVGProps } from "react";

export const AppleSvg = (props: SVGProps<SVGSVGElement>) => {
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
					<title>apple</title>
					<rect width="256" height="256" fill="none" />
					<path
						d="M216,73.52C204.53,62.66,185,56,168,56a63.72,63.72,0,0,0-40,14h0A63.71,63.71,0,0,0,88.88,56C52,55.5,23.06,86.3,24,123.19a119.62,119.62,0,0,0,37.65,84.12A31.92,31.92,0,0,0,83.6,216h87.7a31.75,31.75,0,0,0,23.26-10c15.85-17,21.44-33.2,21.44-33.2h0c-16.79-11.53-24-30.87-24-52.78,0-18.3,11.68-34.81,24-46.48Z"
						className="hover"
						fill="none"
						stroke="var(--mantine-color-anchor)"
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="16"
					/>
					<path
						d="M168,8h-1a32,32,0,0,0-31,24"
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
					<title>apple</title>
					<rect width="256" height="256" fill="none" />
					<path
						d="M216,73.52C204.53,62.66,185,56,168,56a63.72,63.72,0,0,0-40,14h0A63.71,63.71,0,0,0,88.88,56C52,55.5,23.06,86.3,24,123.19a119.62,119.62,0,0,0,37.65,84.12A31.92,31.92,0,0,0,83.6,216h87.7a31.75,31.75,0,0,0,23.26-10c15.85-17,21.44-33.2,21.44-33.2h0c-16.79-11.53-24-30.87-24-52.78,0-18.3,11.68-34.81,24-46.48Z"
						className="hover"
						fill="none"
						stroke="currentColor"
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="16"
					/>
					<path
						d="M168,8h-1a32,32,0,0,0-31,24"
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
