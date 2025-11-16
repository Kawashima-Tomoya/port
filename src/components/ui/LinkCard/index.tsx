"use client";

import { Card, type CardProps, Text } from "@mantine/core";
import Image, { type StaticImageData } from "next/image";
import c from "./index.module.css";

type Props = CardProps & {
	href: string;
	title: string;
	description?: string;
	image: StaticImageData | string;
	imageAlt: string;
	target?: "_blank" | "_self";
	priority?: boolean;
};

export function LinkCard({
	href,
	title,
	description,
	image,
	imageAlt,
	target = "_blank",
	priority = false,
	...cardProps
}: Props) {
	return (
		<Card
			shadow="sm"
			padding="lg"
			radius="md"
			component="a"
			href={href}
			target={target}
			rel={target === "_blank" ? "noopener noreferrer" : undefined}
			className={c.card}
			{...cardProps}
		>
			<Card.Section className={c.imageSection}>
				<div className={c.imageWrapper}>
					<Image
						src={image}
						alt={imageAlt}
						priority={priority}
						placeholder={typeof image === "object" ? "blur" : undefined}
						fill={true}
						sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
						className={c.image}
					/>
				</div>
			</Card.Section>
			<div className={c.content}>
				<Text fw={600} size="lg" className={c.title}>
					{title}
				</Text>
				{description && (
					<Text size="sm" c="dimmed" mt="xs" className={c.description}>
						{description}
					</Text>
				)}
			</div>
		</Card>
	);
}
