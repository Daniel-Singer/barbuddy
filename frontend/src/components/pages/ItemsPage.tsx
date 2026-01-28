import AddButton from "../buttons/AddButton";
import { Box, Group, Text } from "@mantine/core";
import { modals } from "@mantine/modals";
import CategoryModal from "../modals/CategoryModal";
import ItemFormDesktop from "../forms/item/ItemFormDesktop";

const ItemsPage = () => {
  const openItemModal = () => {
    modals.open({
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
  return (
    <Box w={"100%"}>
      <Group p={"xs"} justify="end">
        <AddButton onClick={openItemModal}>Neuer Artikel</AddButton>
        <AddButton onClick={openCategoryModal} buttonProps={{ color: "blue" }}>
          Kategorie
        </AddButton>
      </Group>
      <Box flex={1}></Box>
    </Box>
  );
};

export default ItemsPage;
