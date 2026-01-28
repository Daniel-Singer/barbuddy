import { ActionIcon, type ActionIconProps } from "@mantine/core";
import { IconMinus, type IconProps } from "@tabler/icons-react";

type Props = {
  onClick?: () => void;
  actionIconProps?: ActionIconProps;
  iconProps?: IconProps;
};

const MinusButton = ({
  onClick,
  actionIconProps = {
    variant: "light",
    size: "lg",
  },
  iconProps = { size: 20 },
}: Props) => {
  return (
    <ActionIcon {...actionIconProps} onClick={onClick}>
      <IconMinus {...iconProps} />
    </ActionIcon>
  );
};

export default MinusButton;
