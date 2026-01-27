import { Group, Stack, Text } from "@mantine/core";
import type { OrderedItem } from "../../stores/orderStore";
import { convertCentsToEuros } from "../../utils/currency";

type Props = {
  item: OrderedItem;
};

const ListItem = ({ item }: Props) => {
  const { name, amount, total, deposit } = item;
  return (
    <Group p={"xs"} justify="space-between">
      <Stack gap={0}>
        <Group gap={"xs"}>
          <Text>{amount}</Text>x<Text>{name}</Text>
        </Group>
        {deposit && (
          <Group>
            <Text size="xs" c={"dimmed"}>
              {convertCentsToEuros(deposit)}
            </Text>
          </Group>
        )}
      </Stack>
      <Text>{`${convertCentsToEuros(total)} €`}</Text>
    </Group>
  );
};

export default ListItem;
