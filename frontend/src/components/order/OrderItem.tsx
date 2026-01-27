import { Group, Paper, Stack, Text } from "@mantine/core";
import type { TItem } from "../../types/Item";
import { convertCentsToEuros } from "../../utils/currency";

type Props = TItem & {};

const OrderItem = (props: Props) => {
  return (
    <Paper withBorder p={"xs"}>
      <Stack>
        <Group>
          <Text>{props.name}</Text>
          <Text>{convertCentsToEuros(props.price)}</Text>
        </Group>
      </Stack>
    </Paper>
  );
};

export default OrderItem;
