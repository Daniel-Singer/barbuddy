import { ActionIcon, type ActionIconProps } from "@mantine/core";
import { IconPlus } from "@tabler/icons-react";

interface Props extends ActionIconProps {
  onClick: () => void;
}

const PlusButton = ({ onClick }: Props) => {
  return (
    <ActionIcon size={"xl"} variant="light" onClick={onClick}>
      <IconPlus />
    </ActionIcon>
  );
};

export default PlusButton;
