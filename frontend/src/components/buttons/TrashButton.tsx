import { ActionIcon, type ActionIconProps } from "@mantine/core";
import { IconTrash } from "@tabler/icons-react";

interface Props extends ActionIconProps {
  onClick: () => void;
}

const TrashButton = ({ onClick }: Props) => {
  return (
    <ActionIcon size={"xl"} variant="light" color="red" onClick={onClick}>
      <IconTrash />
    </ActionIcon>
  );
};

export default TrashButton;
