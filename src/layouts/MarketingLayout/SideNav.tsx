"use client";
import { alpha } from "@mantine/core";
import { Accordion, Text } from "@mantine/core";
import Link from "next/link";
import { usePathname } from "next/navigation";
import c from "./SideNav.module.css";

const links = [
	{
		href: "/",
		emoji: "🏠",
		label: "Top",
		description: "よろしく！",
	},
	{
		href: "/works",
		emoji: "🎨",
		label: "Works",
		description: "少しずつ増やしていきたい",
	},
	{
		href: "/about",
		emoji: "😎",
		label: "About",
		description: "自己紹介ページ",
	},
] as const;

export function SideNav() {
	const pathname = usePathname();

	const items = links.map((link) => (
		<Accordion.Item key={link.href} value={link.href} className={c.item}>
			<Link href={link.href} className={c.link}>
				{link.href === pathname ? (
					<Accordion.Control icon={link.emoji} disabled={true}>
						{link.label}
					</Accordion.Control>
				) : (
					<Accordion.Control icon={link.emoji}>{link.label}</Accordion.Control>
				)}
			</Link>
			<Accordion.Panel bg={alpha("var(--mantine-color-dark-9)", 0.2)}>
				<Text size="sm">{link.description}</Text>
			</Accordion.Panel>
		</Accordion.Item>
	));

	return (
		<Accordion
			variant="contained"
			defaultValue={pathname}
			radius="md"
			transitionDuration={0}
			disableChevronRotation={true}
		>
			{items}
		</Accordion>
	);
}
