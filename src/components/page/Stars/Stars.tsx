import { Box } from "@mantine/core";
import Image from "next/image";
import c from "./Stars.module.css";

export function Stars() {
	return (
		<Box className={c.container}>
			<div className={c.stars}>
				<Image
					src="/hosi-blue.gif"
					alt="star"
					width={40}
					height={40}
					className={c.star}
				/>
				<Image
					src="/hosi-yel.gif"
					alt="star"
					width={40}
					height={40}
					loading="lazy"
					className={c.star}
				/>
				<Image
					src="/hosi-red.gif"
					alt="star"
					width={40}
					height={40}
					className={c.star}
				/>
			</div>
		</Box>
	);
}
