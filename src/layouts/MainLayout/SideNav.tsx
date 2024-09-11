"use client";
import { Accordion, Text } from "@mantine/core";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
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
	const [activeItem, setActiveItem] = useState<string | null>(pathname);

	useEffect(() => {
		const rootPath = pathname.split("/")[1];
		const activeLink = links.find((link) => link.href.includes(rootPath));
		setActiveItem(activeLink ? activeLink.href : null);
	}, [pathname]);

	const items = links.map((link) => (
		<Accordion.Item key={link.href} value={link.href}>
			{link.href === activeItem ? (
				<Link href={link.href} className={c.link}>
					<Accordion.Control icon={link.emoji} className={c.selectedControl}>
						{link.label}
					</Accordion.Control>
					<Accordion.Panel>
						<Text size="sm">{link.description}</Text>
					</Accordion.Panel>
				</Link>
			) : (
				<Link href={link.href} className={c.link}>
					<Accordion.Control icon={link.emoji} className={c.unSelectedControl}>
						{link.label}
					</Accordion.Control>
				</Link>
			)}
		</Accordion.Item>
	));

	return (
		<Accordion
			variant="contained"
			value={activeItem}
			onChange={(value: string | null) => setActiveItem(value)}
			radius="md"
			transitionDuration={0}
			disableChevronRotation={true}
			classNames={c}
		>
			{items}
		</Accordion>
	);
}
