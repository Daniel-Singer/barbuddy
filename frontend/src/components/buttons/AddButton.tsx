import { Button, type ButtonProps } from "@mantine/core";
import { IconPlus } from "@tabler/icons-react";

interface Props extends ButtonProps {
  onClick: () => void;
  children: string;
}
const AddButton = ({
  children,
  color = "green",
  onClick,
  size = "md",
}: Props) => {
  return (
    <Button
      leftSection={<IconPlus size={20} />}
      color={color}
      onClick={onClick}
      size={size}
    >
      {children.toUpperCase()}
    </Button>
  );
};

export default AddButton;
