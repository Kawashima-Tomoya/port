import { MantineProvider } from "@mantine/core";
import type { ReactNode } from "react";
import { Footer } from "~/layouts/FormLayout/Footer";
import { theme } from "~/layouts/MantineTheme/theme";
import c from "./index.module.css";

export function FormLayout({ children }: { children: ReactNode }) {
	return (
		<MantineProvider theme={theme}>
			<main className={c.main}>{children}</main>
			<Footer />
		</MantineProvider>
	);
}
