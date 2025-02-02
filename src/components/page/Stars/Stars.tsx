import { Box } from "@mantine/core";
import Image from "next/image";
import c from "./Stars.module.css";

type StarImage = {
	src: string;
	alt: string;
	width: number;
	height: number;
	loading?: "lazy" | "eager";
};

const starImages: StarImage[] = [
	{
		src: "/hosi-blue.gif",
		alt: "star",
		width: 40,
		height: 40,
	},
	{
		src: "/hosi-yel.gif",
		alt: "star",
		width: 40,
		height: 40,
		loading: "lazy",
	},
	{
		src: "/hosi-red.gif",
		alt: "star",
		width: 40,
		height: 40,
	},
];

export function Stars() {
	return (
		<Box className={c.container}>
			<div className={c.stars}>
				{/* biome-ignore lint/nursery/useJsxKeyInIterable: <explanation> */}
				{starImages.map((star) => (
					<Image key={star.src} {...star} />
				))}
			</div>
		</Box>
	);
}
