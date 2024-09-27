import { Box, Container, Image, SimpleGrid, Title } from "@mantine/core";
import Link from "next/link";
import { imageLinks } from "~/components/page/WorksDetail/data";
import c from "./index.module.css";

export default function Page() {
	return (
		<Container p="0">
			<SimpleGrid cols={2}>
				{/* biome-ignore lint/nursery/useJsxKeyInIterable: <explanation> */}
				{imageLinks.map((imageLink) => (
					<Box>
						<Link key={imageLink.alt} href={`works/${imageLink.workId}`}>
							<Image
								src={imageLink.src}
								alt={imageLink.alt}
								width={260}
								height={200}
								className={c.img}
							/>
						</Link>
						{/* <Title order={4}>{imageLink.title}</Title> */}
					</Box>
				))}
			</SimpleGrid>
		</Container>
	);
}
