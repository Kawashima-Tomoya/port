import c from "./index.module.css";

import { Container } from "@mantine/core";
import { ActiveButton } from "~/components/ui/ActiveLink/ActiveButton";
import { IconLinksDialog } from "~/components/ui/IconLinksDialog";

const links = [
	{ href: "/", label: "Top" },
	{ href: "/works", label: "Works" },
	{ href: "/about", label: "About" },
] as const;

export function NavigationLinks() {
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
				<IconLinksDialog>Links</IconLinksDialog>{" "}
			</Container>
		</header>
	);
}
