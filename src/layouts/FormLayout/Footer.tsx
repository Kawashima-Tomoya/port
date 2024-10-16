import { CopyBtn } from "~/components/ui/CopyButton/CopyBtn";
import c from "./Footer.module.css";

import { Container, Group } from "@mantine/core";

// const links = [{ link: "#", label: "お問い合わせ" }] as const;

export function Footer() {
	return (
		<footer className={c.footer}>
			<Container className={c.inner} c="dimmed">
				<small>&copy;2024 - Copyright All Rights Reserved.</small>
			</Container>
		</footer>
	);
}
