import { ActionIcon, Anchor, Table } from "@mantine/core";
import { IconPencil } from "@tabler/icons-react";
import { useQuery } from "@tanstack/react-query";
import { Link, useNavigate } from "@tanstack/react-router";
import { currencyLabels } from "../../../config";
import { listAvailableItems } from "../../../queries/itemQueries";
import { convertCentsToEuros } from "../../../utils/currency";
import { convertMillilitersToLiters } from "../../../utils/liquids";

const ItemsOverviewTable = () => {
  const { data: items } = useQuery({
    queryKey: ["items"],
    queryFn: listAvailableItems,
  });

  const navigate = useNavigate();

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
                <Anchor
                  component={Link}
                  href={`/items/${_id}`}
                  size="sm"
                  fw={500}
                >
                  {name}
                </Anchor>
              </Table.Td>
              <Table.Td>{convertMillilitersToLiters(servingSize)}</Table.Td>
              <Table.Td>{unit}</Table.Td>
              <Table.Td>{`${currencyLabels[currency]} ${convertCentsToEuros(sell.price)}`}</Table.Td>
              <Table.Td>{`${currencyLabels[currency]} ${convertCentsToEuros(purchase.price)}`}</Table.Td>
              <Table.Td>{`${currencyLabels[currency]} ${convertCentsToEuros(deposit)}`}</Table.Td>
              <Table.Td>{"--"}</Table.Td>
              <Table.Td>{"--"}</Table.Td>
              <Table.Td>
                <ActionIcon
                  variant="subtle"
                  onClick={() => alert("clickedy click")}
                >
                  <IconPencil stroke={2} />
                </ActionIcon>
              </Table.Td>
            </Table.Tr>
          ),
        )}
      </Table.Tbody>
    </Table>
  );
};

export default ItemsOverviewTable;
