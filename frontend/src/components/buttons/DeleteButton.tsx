import { Button, type ButtonProps } from "@mantine/core";
import { IconTrash, type IconProps } from "@tabler/icons-react";

type Props = {
  children: string;
  buttonProps?: ButtonProps;
  iconProps?: IconProps;
  onClick?: () => void;
};

const DeleteButton = ({
  children,
  buttonProps = {
    color: "red",
  },
  iconProps = {
    size: 20,
  },
  onClick,
}: Props) => {
  return (
    <Button
      {...buttonProps}
      onClick={onClick}
      leftSection={<IconTrash {...iconProps} />}
    >
      {children}
    </Button>
  );
};

export default DeleteButton;
