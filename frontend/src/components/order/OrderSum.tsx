import { Divider, Group, Stack, Text } from "@mantine/core";
import { orderStore } from "../../stores/orderStore";
import { observer } from "mobx-react-lite";
import MinusButton from "../buttons/MinusButton";
import PlusButton from "../buttons/PlusButton";
import CurrencyValue from "../currency/CurrencyValue";

const OrderSum = observer(() => {
  const {
    orderTotal,
    totalArticles,
    totalDeposits,
    addReturnDeposit,
    removeReturnDeposit,
    depositReturnCount,
    depositReturnSum,
  } = orderStore;

  return (
    <Stack gap={"xs"} p={"xs"}>
      <Group justify="space-between">
        <Text size="md">ARTIKEL</Text>
        <CurrencyValue size="md">{totalArticles}</CurrencyValue>
      </Group>
      <Group justify="space-between">
        <Text size="md" c={"dimmed"}>
          EINSATZ
        </Text>
        <CurrencyValue size="md" c={"dimmed"}>
          {totalDeposits}
        </CurrencyValue>
      </Group>
      <Group justify="space-between">
        <Group>
          <MinusButton
            onClick={() => removeReturnDeposit(200)}
            actionIconProps={{
              disabled: depositReturnCount < 1,
              variant: "light",
              size: "lg",
              color: "red",
            }}
          />
          <Text>{depositReturnCount}</Text>
          <PlusButton
            onClick={() => addReturnDeposit(200)}
            actionIconProps={{ variant: "light", size: "lg", color: "green" }}
          />
          BECHERRÜCKGABE
        </Group>
        <CurrencyValue useColoring>{depositReturnSum}</CurrencyValue>
      </Group>
      <Divider />
      <Group justify="space-between">
        <Text size="xl" fw={600}>
          SUMME
        </Text>
        <CurrencyValue size="xl" fw={600}>
          {orderTotal}
        </CurrencyValue>
      </Group>
    </Stack>
  );
});

export default OrderSum;
