"use client";

import { Tooltip } from "@mantine/core";
import cx from "clsx";
import type { SVGProps } from "react";
import c from "./lightDark.module.css";

const GITHUB_PATH =
	"M128.001 0C57.317 0 0 57.307 0 128.001c0 56.554 36.676 104.535 87.535 121.46 6.397 1.185 8.746-2.777 8.746-6.158 0-3.052-.12-13.135-.174-23.83-35.61 7.742-43.124-15.103-43.124-15.103-5.823-14.795-14.213-18.73-14.213-18.73-11.613-7.944.876-7.78.876-7.78 12.853.902 19.621 13.19 19.621 13.19 11.417 19.568 29.945 13.911 37.249 10.64 1.149-8.272 4.466-13.92 8.127-17.116-28.431-3.236-58.318-14.212-58.318-63.258 0-13.975 5-25.394 13.188-34.358-1.329-3.224-5.71-16.242 1.24-33.874 0 0 10.749-3.44 35.21 13.121 10.21-2.836 21.16-4.258 32.038-4.307 10.878.049 21.837 1.47 32.066 4.307 24.431-16.56 35.165-13.12 35.165-13.12 6.967 17.63 2.584 30.65 1.255 33.873 8.207 8.964 13.173 20.383 13.173 34.358 0 49.163-29.944 59.988-58.447 63.157 4.591 3.972 8.682 11.762 8.682 23.704 0 17.126-.148 30.91-.148 35.126 0 3.407 2.304 7.398 8.792 6.14C219.37 232.5 256 184.537 256 128.002 256 57.307 198.691 0 128.001 0Z";

const svgProps = {
	xmlns: "http://www.w3.org/2000/svg",
	viewBox: "0 0 256 250",
	width: "2em",
	height: "2em",
	preserveAspectRatio: "xMidYMid",
} as const;

const GitHubSvg = ({ className, ...props }: SVGProps<SVGSVGElement>) => (
	<svg className={className} {...props} {...svgProps}>
		<title>Github</title>
		<path d={GITHUB_PATH} />
	</svg>
);

export const Github = (props: SVGProps<SVGSVGElement>) => (
	<Tooltip
		withArrow={true}
		arrowSize={5}
		label="Github"
		transitionProps={{ transition: "pop", duration: 200 }}
	>
		<div>
			<GitHubSvg className={cx(c.icon, c.dark)} {...props} />
			<GitHubSvg className={cx(c.icon, c.light)} {...props} />
		</div>
	</Tooltip>
);
