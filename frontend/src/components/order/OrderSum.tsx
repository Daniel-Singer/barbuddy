import { Group, Stack, Text } from "@mantine/core";
import { orderStore } from "../../stores/orderStore";
import { observer } from "mobx-react-lite";

const OrderSum = observer(() => {
  const { orderTotal, totalDeposits } = orderStore;
  return (
    <Stack gap={0} p={"xs"}>
      <Group justify="space-between">
        <Text size="xl" fw={600}>
          SUMME
        </Text>
        <Text size="xl" fw={600}>{`${orderTotal} €`}</Text>
      </Group>
      <Group justify="space-between">
        <Text size="sm" c={"dimmed"}>
          Davon Einsatz
        </Text>
        <Text size="sm" c={"dimmed"}>
          {`${totalDeposits} €`}
        </Text>
      </Group>
    </Stack>
  );
});

export default OrderSum;
