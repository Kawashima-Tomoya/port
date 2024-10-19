"use client";

import { Button, CopyButton } from "@mantine/core";
import type { ButtonProps, CopyButtonProps } from "@mantine/core";
import c from "./index.module.css";

type CopyBtnProps = {
	copiedText: string;
	unCopiedText: string;
	copiedColor: string;
	unCopiedColor: string;
} & Omit<CopyButtonProps, "children">;

type Props = CopyBtnProps & Omit<ButtonProps, "children">;

export function CopyBtn({
	copiedText,
	unCopiedText,
	copiedColor,
	unCopiedColor,
	...rest
}: Props) {
	return (
		<CopyButton {...rest}>
			{({ copied, copy }) => (
				<Button
					{...rest}
					color={copied ? copiedColor : unCopiedColor}
					onClick={copy}
					className={c.button}
				>
					{copied ? copiedText : unCopiedText}
				</Button>
			)}
		</CopyButton>
	);
}
