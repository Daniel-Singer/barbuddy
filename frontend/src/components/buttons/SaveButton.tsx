import { Button, type ButtonProps } from "@mantine/core";
import { IconDeviceFloppy } from "@tabler/icons-react";

type Props = {
  onClick?: () => void;
  children: string;
  buttonProps?: ButtonProps & {
    type?: "submit" | "button" | "reset" | undefined;
  };
};
const SaveButton = ({
  children,
  onClick,
  buttonProps = {
    color: "green",
    type: "submit",
  },
}: Props) => {
  return (
    <Button
      leftSection={<IconDeviceFloppy size={20} />}
      {...buttonProps}
      onClick={onClick}
    >
      {children.toUpperCase()}
    </Button>
  );
};

export default SaveButton;
