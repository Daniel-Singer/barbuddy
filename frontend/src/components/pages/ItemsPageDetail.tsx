import { Alert, Box, Stack, Text } from "@mantine/core";
import { modals } from "@mantine/modals";
import { IconCheck, IconInfoTriangle, IconX } from "@tabler/icons-react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useNavigate, useParams } from "@tanstack/react-router";
import { getItem, removeItem } from "../../queries/itemQueries";
import { convertMillilitersToLiters } from "../../utils/liquids";
import DeleteButton from "../buttons/DeleteButton";
import PageHeader from "../layout/PageHeader";

const ItemsPageDetail = () => {
  const params = useParams({ from: "/items/$itemId" });

  const { data: item, isLoading } = useQuery({
    queryKey: ["item", params.itemId],
    queryFn: () => getItem(params.itemId),
    enabled: !!params.itemId,
  });

  const queryClient = useQueryClient();

  const navigate = useNavigate();

  const { mutate } = useMutation({
    mutationFn: removeItem,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["items"] });
      navigate({ to: "/items" });
    },
    onError: (error) => console.log(error),
  });
  const openConfim = () =>
    modals.openConfirmModal({
      title: <Text>ARTIKEL ENTFERNEN</Text>,
      children: (
        <Stack gap={"lg"}>
          <Alert
            title="ACHTUNG"
            icon={<IconInfoTriangle size={20} />}
            color="red"
          >
            <Text c={"red"}>
              Diese Aktion kann nicht rückgängig gemacht werden
            </Text>
          </Alert>
          <Text>
            Sind Sie sicher, dass dieser Artikel entfernt werden soll?
          </Text>
        </Stack>
      ),
      labels: { cancel: "Abbrechen", confirm: "Bestätigen" },
      cancelProps: { leftSection: <IconX size={20} /> },
      confirmProps: { leftSection: <IconCheck size={20} /> },
      onConfirm: () => mutate(params.itemId),
    });

  if (!item && !isLoading) {
    return <Alert>Kein Artikel gefunden</Alert>;
  }

  return (
    <Box w={"100%"}>
      <PageHeader p={"xs"} justify="space-between">
        <Text
          size="xl"
          fw={500}
        >{`${item?.name} ${convertMillilitersToLiters(item?.servingSize!)} ${item?.unit}`}</Text>
        <DeleteButton onClick={openConfim}>Löschen</DeleteButton>
      </PageHeader>
      <Box flex={1}></Box>
    </Box>
  );
};

export default ItemsPageDetail;
