"use client";
import c from "./index.module.css";

import { Button, Dialog, Group, Text } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import type { ReactNode } from "react";
import { IconLinks } from "~/layouts/MainLayout/IconLinks";

export function IconLinksDialog({ children }: { children: ReactNode }) {
	const [opened, { toggle, close }] = useDisclosure(false);

	return (
		<>
			<Group justify="center">
				<Button
					variant="outline"
					onClick={toggle}
					color="indigo"
					aria-label="Toggle navigation"
					className={c.button}
				>
					{children}
				</Button>
			</Group>

			<Dialog
				position={{ top: 40, right: 20 }}
				opened={opened}
				withCloseButton={true}
				onClose={close}
				size="sm"
				radius="md"
				className={c.dialog}
				withBorder={true}
			>
				<Text size="sm" mb="xs" fw="bold">
					外部リンク一覧
				</Text>

				<Group align="flex-end">
					<IconLinks />
				</Group>
			</Dialog>
		</>
	);
}
