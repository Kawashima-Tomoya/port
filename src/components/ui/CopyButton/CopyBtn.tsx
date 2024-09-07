"use client";

import { Button, CopyButton } from "@mantine/core";
import type { ButtonProps, CopyButtonProps } from "@mantine/core";

type CopyBtnProps = {
	copiedText: string;
	unCopiedText: string;
} & CopyButtonProps;

type Props = CopyBtnProps & Omit<ButtonProps, "children">;

export function CopyBtn({
	copiedText,
	unCopiedText,
	...rest
}: Props) {
	return (
		<CopyButton {...rest}>
			{({ copied, copy }) => (
				<Button
					{...rest}
					color={copied ? rest.color?.[0] : rest.color?.[1]}
					onClick={copy}
				>
					{copied ? copiedText : unCopiedText}
				</Button>
			)}
		</CopyButton>
	);
}
