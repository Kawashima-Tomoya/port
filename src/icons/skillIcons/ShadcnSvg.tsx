import { Tooltip } from "@mantine/core";
import type { SVGProps } from "react";
export const Shadcn = (props: SVGProps<SVGSVGElement>) => (
	<Tooltip
		withArrow={true}
		arrowSize={5}
		label="Shadcn"
		transitionProps={{ transition: "pop", duration: 200 }}
	>
		<svg
			viewBox="0 0 256 256"
			width="2em"
			height="2em"
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<title>Shadcn</title>
			<path fill="none" d="M0 0h256v256H0z" />
			<path
				fill="none"
				stroke="#fff"
				strokeWidth="25"
				strokeLinecap="round"
				d="M208 128l-80 80M192 40L40 192"
			/>
		</svg>
	</Tooltip>
);
