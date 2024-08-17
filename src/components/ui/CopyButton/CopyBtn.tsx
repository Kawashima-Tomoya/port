"use client";

import { Button, CopyButton } from "@mantine/core";

type CopyBtnProps = {
	mail: string;
	timeout: number;
	copiedTxt: string;
	unCopiedTxt: string;
};

export function CopyBtn({
	mail,
	timeout,
	copiedTxt,
	unCopiedTxt,
}: CopyBtnProps) {
	return (
		<CopyButton value={mail} timeout={timeout}>
			{({ copied, copy }) => (
				<Button
					variant="light"
					color={copied ? "teal" : "var(--mantine-color-text)"}
					onClick={copy}
				>
					{copied ? copiedTxt : unCopiedTxt}
				</Button>
			)}
		</CopyButton>
	);
}
