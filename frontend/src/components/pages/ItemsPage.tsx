import { Box, Group, Paper, Text } from "@mantine/core";
import { modals } from "@mantine/modals";
import { useMutationState } from "@tanstack/react-query";
import { useEffect } from "react";
import AddButton from "../buttons/AddButton";
import ItemFormDesktop from "../forms/item/ItemFormDesktop";
import CategoryModal from "../modals/CategoryModal";
import ItemsOverviewTable from "../tables/item/ItemsOverviewTable";

const ItemsPage = () => {
  const mutationStatus = useMutationState({
    filters: { mutationKey: ["add_item"] },
    select: (mutation) => mutation.state.status,
  });

  const openItemModal = () => {
    modals.open({
      id: "create_item_modal",
      title: <Text c={"blue"}>ARTIKEL</Text>,
      children: <ItemFormDesktop />,
      size: "lg",
    });
  };
  const openCategoryModal = () =>
    modals.open({
      title: <Text c={"blue"}>KATEGORIE</Text>,
      children: <CategoryModal />,
    });

  useEffect(() => {
    if (mutationStatus.includes("success")) {
      modals.close("create_item_modal");
    }
  }, [mutationStatus]);
  return (
    <Box w={"100%"}>
      <Group p={"xs"} justify="end">
        <AddButton onClick={openItemModal}>Neuer Artikel</AddButton>
        <AddButton onClick={openCategoryModal} buttonProps={{ color: "blue" }}>
          Kategorie
        </AddButton>
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
