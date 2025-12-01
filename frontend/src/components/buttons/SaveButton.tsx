import { Button, type ButtonProps } from "@mantine/core";
import { IconDeviceFloppy } from "@tabler/icons-react";

interface Props extends ButtonProps {
  onClick?: () => void;
  children: string;
  type?: "submit" | "button" | "reset" | undefined;
}
const SaveButton = ({
  children,
  color = "green",
  onClick,
  type = "submit",
}: Props) => {
  return (
    <Button
      leftSection={<IconDeviceFloppy size={20} />}
      color={color}
      onClick={onClick}
      type={type}
    >
      {children.toUpperCase()}
    </Button>
  );
};

export default SaveButton;
