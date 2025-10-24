import { Tooltip } from "@mantine/core";
import type { SVGProps } from "react";
export const Gemini = (props: SVGProps<SVGSVGElement>) => (
	<Tooltip
		withArrow={true}
		arrowSize={5}
		label="Gemini"
		transitionProps={{ transition: "pop", duration: 200 }}
	>
		<svg {...props} viewBox="0 0 296 298" fill="none" width="2em" height="2em">
			<title>Gemini</title>
			<g mask="url(#gemini__a)">
				<g filter="url(#gemini__b)">
					<ellipse cx="163" cy="149" fill="#3689FF" rx="196" ry="159" />
				</g>
				<g filter="url(#gemini__c)">
					<ellipse cx="33.5" cy="142.5" fill="#F6C013" rx="68.5" ry="72.5" />
				</g>
				<g filter="url(#gemini__d)">
					<ellipse cx="19.5" cy="148.5" fill="#F6C013" rx="68.5" ry="72.5" />
				</g>
				<g filter="url(#gemini__e)">
					<path
						fill="#FA4340"
						d="M194 10.5C172 82.5 65.5 134.333 22.5 135L144-66l50 76.5Z"
					/>
				</g>
				<g filter="url(#gemini__f)">
					<path
						fill="#FA4340"
						d="M190.5-12.5C168.5 59.5 62 111.333 19 112L140.5-89l50 76.5Z"
					/>
				</g>
				<g filter="url(#gemini__g)">
					<path
						fill="#14BB69"
						d="M194.5 279.5C172.5 207.5 66 155.667 23 155l121.5 201 50-76.5Z"
					/>
				</g>
				<g filter="url(#gemini__h)">
					<path
						fill="#14BB69"
						d="M196.5 320.5C174.5 248.5 68 196.667 25 196l121.5 201 50-76.5Z"
					/>
				</g>
			</g>
		</svg>
	</Tooltip>
);
