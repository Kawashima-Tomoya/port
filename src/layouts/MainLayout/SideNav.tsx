"use client";
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
		<Accordion.Item key={link.href} value={link.href}>
			<Link href={link.href} className={c.link}>
				{link.href === pathname ? (
					<Accordion.Control
						icon={link.emoji}
						disabled={true}
						className={c.selectedControl}
					>
						{link.label}
					</Accordion.Control>
				) : (
					<Accordion.Control icon={link.emoji} className={c.unSelectedControl}>
						{link.label}
					</Accordion.Control>
				)}
			</Link>
			<Accordion.Panel>
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
			classNames={c}
		>
			{items}
		</Accordion>
	);
}
