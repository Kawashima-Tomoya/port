import {
	Button,
	type ButtonProps,
	type PolymorphicComponentProps,
} from "@mantine/core";
import Link from "next/link";
import c from "./index.module.css";

type Props = PolymorphicComponentProps<typeof Link, ButtonProps>;

export function LinkButton(buttonProps: Props) {
	return <Button component={Link} {...buttonProps} className={c.button} />;
}
