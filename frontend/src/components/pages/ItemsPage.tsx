import { useNavigate } from "@tanstack/react-router";
import AddButton from "../buttons/AddButton";
import { Box, Group, Text } from "@mantine/core";
import { modals } from "@mantine/modals";
import CategoryModal from "../modals/CategoryModal";

const ItemsPage = () => {
  const navigate = useNavigate();
  const openCategoryModal = () =>
    modals.open({
      title: <Text c={"blue"}>KATEGORIE</Text>,
      children: <CategoryModal />,
    });
  return (
    <Box w={"100%"}>
      <Group p={"xs"} justify="end">
        <AddButton onClick={() => navigate({ to: "/items/new" })}>
          Neuer Artikel
        </AddButton>
        <AddButton onClick={openCategoryModal} buttonProps={{ color: "blue" }}>
          Kategorie
        </AddButton>
      </Group>
      <Box flex={1}></Box>
    </Box>
  );
};

export default ItemsPage;
