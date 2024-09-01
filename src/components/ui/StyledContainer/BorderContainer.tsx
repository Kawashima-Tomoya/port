import { Container, type ContainerProps } from "@mantine/core";
import c from "./BorderContainer.module.css";

// type Props = ComponentProps<typeof Container>;
type Props = ContainerProps;

export function BorderContainer(containerProps: Props) {
	return <Container {...containerProps} className={c.borderContainer} />;
}
