import { Container } from "@mantine/core";
import type { ReactNode } from "react";

export function BorderContainer({ children }: { children: ReactNode }) {
	return (
		<Container
			style={{
				padding: "var(--mantine-spacing-md)",
				border:
					"1px solid light-dark(var(--mantine-color-dark-1), var(--mantine-color-dark-4))",
				borderRadius: "var(--mantine-radius-md)",
			}}
		>
			{children}
		</Container>
	);
}
