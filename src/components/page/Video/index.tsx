import { Box } from "@mantine/core";
import c from "./index.module.css";

export function Video() {
	return (
		<Box className={c.container}>
			<video
				width="100%"
				controls={false}
				preload="true"
				muted={true}
				autoPlay={true}
				loop={true}
				disablePictureInPicture={true}
				className={c.video}
			>
				<source src="/game.mp4" type="video/mp4" />
			</video>
		</Box>
	);
}
