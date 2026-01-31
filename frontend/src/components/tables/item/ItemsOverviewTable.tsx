import { Table } from "@mantine/core";
import { useQuery } from "@tanstack/react-query";
import { listAvailableItems } from "../../../queries/itemQueries";
import { convertCentsToEuros } from "../../../utils/currency";
import { convertMillilitersToLiters } from "../../../utils/liquids";
import { currencyLabels } from "../../../config";

const ItemsOverviewTable = () => {
  const { data: items } = useQuery({
    queryKey: ["items"],
    queryFn: listAvailableItems,
  });
  return (
    <Table>
      <Table.Thead>
        <Table.Tr>
          <Table.Th>Bezeichung</Table.Th>
          <Table.Th>Größe</Table.Th>
          <Table.Th>Einheit</Table.Th>
          <Table.Th>Einsatz</Table.Th>
          <Table.Th>Bestand</Table.Th>
          <Table.Th>EK</Table.Th>
          <Table.Th>VK</Table.Th>
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
            <Table.Tr key={_id}>
              <Table.Td>{name}</Table.Td>
              <Table.Td>{convertMillilitersToLiters(servingSize)}</Table.Td>
              <Table.Td>{unit}</Table.Td>
              <Table.Td>{convertCentsToEuros(deposit)}</Table.Td>
              <Table.Td>{"--"}</Table.Td>
              <Table.Td>{`${currencyLabels[currency]} ${convertCentsToEuros(sell.price)}`}</Table.Td>
              <Table.Td>{`${currencyLabels[currency]} ${convertCentsToEuros(purchase.price)}`}</Table.Td>
            </Table.Tr>
          ),
        )}
      </Table.Tbody>
    </Table>
  );
};

export default ItemsOverviewTable;
