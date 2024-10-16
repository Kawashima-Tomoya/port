import type { ReactNode } from "react";
import { FormLayout } from "~/layouts/FormLayout";

export default function Layout({ children }: { children: ReactNode }) {
	return <FormLayout>{children}</FormLayout>;
}
