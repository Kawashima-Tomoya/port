import c from "./Header.module.css";

import { Box, Button, Container, Group, Text } from "@mantine/core";
import { ActiveButton } from "~/components/ui/ActiveLink/ActiveButton";

const links = [
	{ href: "/", label: "Top" },
	{ href: "/works", label: "Works" },
	{ href: "/about", label: "About" },
] as const;

export function Header() {
	return (
		<header className={c.header}>
			<Container className={c.container}>
				{/* biome-ignore lint/nursery/useJsxKeyInIterable: TODO: Biome側のエラーと思われるため、いったん無効化 */}
				{links.map((link) => (
					<ActiveButton
						key={link.label}
						href={link.href}
						variant="outline"
						color="indigo"
						className={c.button}
					>
						{link.label}
					</ActiveButton>
				))}
				<Button variant="outline" color="indigo" className={c.button}>
					Links
				</Button>
			</Container>
		</header>
	);
}
