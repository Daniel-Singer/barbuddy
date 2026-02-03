import { Button, type ButtonProps } from "@mantine/core";
import { IconPencil } from "@tabler/icons-react";

type Props = {
  children: string;
  onClick?: () => void;
  buttonProps?: ButtonProps;
};

const EditButton = ({
  children,
  onClick,
  buttonProps = {
    color: "grape",
    size: "md",
  },
}: Props) => {
  return (
    <Button
      leftSection={<IconPencil size={20} />}
      onClick={onClick}
      {...buttonProps}
    >
      {children.toUpperCase()}
    </Button>
  );
};

export default EditButton;
