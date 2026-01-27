import { Button, type ButtonProps } from "@mantine/core";
import { IconCheck, type IconProps } from "@tabler/icons-react";

type Props = {
  children: string;
  buttonProps?: ButtonProps;
  iconProps?: IconProps;
  onClick?: () => void;
};

const MakePaymentButton = ({
  children,
  buttonProps,
  iconProps = {
    size: 20,
  },
  onClick,
}: Props) => {
  return (
    <Button
      {...buttonProps}
      onClick={onClick}
      leftSection={<IconCheck {...iconProps} />}
    >
      {children}
    </Button>
  );
};

export default MakePaymentButton;
