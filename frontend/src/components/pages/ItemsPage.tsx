import { Box, Group, Paper, Text } from "@mantine/core";
import { modals } from "@mantine/modals";
import { useMutationState } from "@tanstack/react-query";
import { useEffect } from "react";
import AddButton from "../buttons/AddButton";
import EditButton from "../buttons/EditButton";
import ItemsOverviewTable from "../tables/item/ItemsOverviewTable";

const ItemsPage = () => {
  const mutationStatus = useMutationState({
    filters: { mutationKey: ["add_item"] },
    select: (mutation) => mutation.state.status,
  });

  useEffect(() => {
    if (mutationStatus.includes("success")) {
      modals.close("create_item_modal");
    }
  }, [mutationStatus]);
  return (
    <Box w={"100%"}>
      <Group p={"xs"} justify="end">
        <AddButton
          onClick={() =>
            modals.openContextModal({
              modal: "item",
              title: <Text>NEUER ARTIKEL</Text>,
              size: "lg",
              innerProps: {},
            })
          }
        >
          Neuer Artikel
        </AddButton>
        <EditButton
          onClick={() =>
            modals.openContextModal({
              modal: "deposit",
              title: <Text>NEUER ARTIKEL</Text>,
              innerProps: {},
            })
          }
        >
          Einsatz bearbeiten
        </EditButton>
      </Group>
      <Box flex={1} p={"xs"}>
        <Paper withBorder>
          <ItemsOverviewTable />
        </Paper>
      </Box>
    </Box>
  );
};

export default ItemsPage;
