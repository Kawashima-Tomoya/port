import { Container } from "@mantine/core";
import type { ReactNode } from "react";
import c from "./BorderContainer.module.css";

export function BorderContainer({ children }: { children: ReactNode }) {
	return <Container className={c.borderContainer}>{children}</Container>;
}
