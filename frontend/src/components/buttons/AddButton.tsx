import { Button, type ButtonProps } from "@mantine/core";
import { IconPlus } from "@tabler/icons-react";

type Props = {
  children: string;
  onClick?: () => void;
  buttonProps?: ButtonProps;
};

const AddButton = ({
  children,
  onClick,
  buttonProps = {
    color: "green",
    size: "md",
  },
}: Props) => {
  return (
    <Button
      leftSection={<IconPlus size={20} />}
      onClick={onClick}
      {...buttonProps}
    >
      {children.toUpperCase()}
    </Button>
  );
};

export default AddButton;
