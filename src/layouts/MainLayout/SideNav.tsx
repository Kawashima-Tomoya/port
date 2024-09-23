"use client";
import { Accordion, Text } from "@mantine/core";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import c from "./SideNav.module.css";

type LinkItem = {
	href: string;
	emoji: string;
	label: string;
	description: string;
};

const links: LinkItem[] = [
	{
		href: "/",
		emoji: "🏠",
		label: "Top",
		description: "ようこそ...🍵",
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
		description: "よろしくお願いします！",
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

	const items = useMemo(() => {
		return links.map((link) => {
			const isActive = link.href === activeItem;
			const controlClass = isActive ? c.selectedControl : c.unSelectedControl;

			return (
				<Accordion.Item key={link.href} value={link.href}>
					<Link href={link.href} className={c.link}>
						<Accordion.Control icon={link.emoji} className={controlClass}>
							{link.label}
						</Accordion.Control>
						{isActive && (
							<Accordion.Panel>
								<Text size="sm">{link.description}</Text>
							</Accordion.Panel>
						)}
					</Link>
				</Accordion.Item>
			);
		});
	}, [activeItem]);

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
