"use client";

import { Container, Image, SimpleGrid } from "@mantine/core";
import Link from "next/link";

type ImageLinks = {
	href: string;
	src: string;
	alt: string;
};
const imageLinks: ImageLinks[] = [
	{ href: "/works/1", src: "/instasave.JPEG", alt: "instasave1" },
	{ href: "/works/2", src: "/instasave.JPEG", alt: "instasave2" },
	{ href: "/works/3", src: "/instasave.JPEG", alt: "instasave3" },
] as const;

export default function Page() {
	return (
		<Container size="md">
			<SimpleGrid cols={3}>
				{/* biome-ignore lint/nursery/useJsxKeyInIterable: <explanation> */}
				{imageLinks.map((imageLink) => (
					<Link key={imageLink.alt} href={imageLink.href}>
						<Image src={imageLink.src} alt={imageLink.alt} />
					</Link>
				))}
			</SimpleGrid>
		</Container>
	);
}
