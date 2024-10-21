import { Container } from "@mantine/core";
import type { ReactNode } from "react";
import { LinkButton } from "~/components/ui/LinkButton";
import c from "./index.module.css";

type Props = {
	children: ReactNode;
	href: string;
};

export function Footer({ children, href }: Props) {
	return (
		<footer className={c.footer}>
			<Container className={c.container} c="dimmed">
				<small>&copy;2024 - Copyright All Rights Reserved.</small>
				<LinkButton
					href={href}
					variant="subtle"
					size="xs"
					c={"var(--mantine-color-dimmed)"}
					className="button"
				>
					{children}
				</LinkButton>
			</Container>
		</footer>
	);
}
