import { Button, type ButtonProps } from "@mantine/core";
import { IconCalculator, type IconProps } from "@tabler/icons-react";

type Props = {
  children: string;
  buttonProps?: ButtonProps;
  iconProps?: IconProps;
  onClick?: () => void;
};

const OpenCalculatorButton = ({
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
      leftSection={<IconCalculator {...iconProps} />}
    >
      {children}
    </Button>
  );
};

export default OpenCalculatorButton;
