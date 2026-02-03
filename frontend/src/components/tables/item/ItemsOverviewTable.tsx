import { ActionIcon, Alert, Group, Stack, Table, Text } from "@mantine/core";
import { modals } from "@mantine/modals";
import {
  IconCheck,
  IconInfoTriangle,
  IconPencil,
  IconTrash,
  IconX,
} from "@tabler/icons-react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "@tanstack/react-router";
import { currencyLabels } from "../../../config";
import { listAvailableItems, removeItem } from "../../../queries/itemQueries";
import { convertCentsToEuros } from "../../../utils/currency";
import { convertMillilitersToLiters } from "../../../utils/liquids";

const ItemsOverviewTable = () => {
  const { data: items } = useQuery({
    queryKey: ["items"],
    queryFn: listAvailableItems,
  });

  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const handleUpdateItem = ({ _id, name }: { _id: string; name: string }) => {
    navigate({
      to: `/items`,
      search: {
        itemToUpdate: _id,
      },
    });
    modals.openContextModal({
      modal: "item",
      title: `${name.toUpperCase()} BEARBEITEN`,
      innerProps: {},
      size: "lg",
      onClose: () => navigate({ search: undefined }),
    });
  };

  const { mutate: deleteItem } = useMutation({
    mutationFn: removeItem,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["items"] });
    },
    onError: (error) => console.log(error),
  });

  const openConfim = (_id: string, name: string) =>
    modals.openConfirmModal({
      title: <Text>{`${name.toUpperCase()} ENTFERNEN`}</Text>,
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
        </Stack>
      ),
      labels: { cancel: "Abbrechen", confirm: "Bestätigen" },
      cancelProps: { leftSection: <IconX size={20} />, fullWidth: true },
      confirmProps: { leftSection: <IconCheck size={20} />, fullWidth: true },
      onConfirm: () => deleteItem(_id),
    });

  return (
    <Table highlightOnHover>
      <Table.Thead>
        <Table.Tr>
          <Table.Th>Bezeichung</Table.Th>
          <Table.Th>Größe</Table.Th>
          <Table.Th>Einheit</Table.Th>
          <Table.Th>EK</Table.Th>
          <Table.Th>VK</Table.Th>
          <Table.Th>Einsatz</Table.Th>
          <Table.Th>Bestand</Table.Th>
          <Table.Th>Verkauft</Table.Th>
          <Table.Th></Table.Th>
        </Table.Tr>
      </Table.Thead>
      <Table.Tbody>
        {items?.map(
          ({
            _id,
            name,
            currency,
            unit,
            servingSize,
            purchase,
            deposit,
            sell,
          }) => (
            <Table.Tr
              key={_id}
              onDoubleClick={() => navigate({ to: `/items/${_id}` })}
            >
              <Table.Td>
                <Text size="sm" fw={600}>
                  {name}
                </Text>
              </Table.Td>
              <Table.Td>{convertMillilitersToLiters(servingSize)}</Table.Td>
              <Table.Td>{unit}</Table.Td>
              <Table.Td>{`${currencyLabels[currency]} ${convertCentsToEuros(sell.price)}`}</Table.Td>
              <Table.Td>{`${currencyLabels[currency]} ${convertCentsToEuros(purchase.price)}`}</Table.Td>
              <Table.Td>{`${currencyLabels[currency]} ${convertCentsToEuros(deposit)}`}</Table.Td>
              <Table.Td>{"--"}</Table.Td>
              <Table.Td>{"--"}</Table.Td>
              <Table.Td>
                <Group justify="flex-end">
                  <ActionIcon
                    variant="light"
                    onClick={() => handleUpdateItem({ _id, name })}
                  >
                    <IconPencil stroke={2} />
                  </ActionIcon>
                  <ActionIcon
                    variant="light"
                    color="red"
                    onClick={() => openConfim(_id, name)}
                  >
                    <IconTrash stroke={2} />
                  </ActionIcon>
                </Group>
              </Table.Td>
            </Table.Tr>
          ),
        )}
      </Table.Tbody>
    </Table>
  );
};

export default ItemsOverviewTable;
