import c from "./Header.module.css";

import { Container, Group } from "@mantine/core";
import { ActiveButton } from "~/components/ui/ActiveLink/ActiveButton";

const links = [
	{ href: "/", label: "Top" },
	{ href: "/works", label: "Works" },
	{ href: "/about", label: "About" },
] as const;

export function Header() {
	return (
		<header className={c.header}>
			<Container size="md" className={c.inner}>
				<Group gap={40}>TITLE</Group>

				<Group component="nav" justify="center" gap={8}>
					{/* biome-ignore lint/nursery/useJsxKeyInIterable: TODO: Biome側のエラーと思われるため、いったん無効化 */}
					{links.map((link) => (
						<ActiveButton key={link.label} href={link.href}>
							{link.label}
						</ActiveButton>
					))}
				</Group>
			</Container>
		</header>
	);
}
