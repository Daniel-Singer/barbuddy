import { Group, type GroupProps } from "@mantine/core";
import type { ReactNode } from "react";

interface Props extends GroupProps {
  children: ReactNode;
}

const PageHeader = (props: Props) => {
  return <Group {...props}>{props.children}</Group>;
};

export default PageHeader;
