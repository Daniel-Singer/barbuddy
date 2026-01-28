import { Divider, Group, Paper, Stack } from "@mantine/core";
import { orderStore } from "../../stores/orderStore";

import { observer } from "mobx-react-lite";
import MakePaymentButton from "../buttons/MakePaymentButton";
import OpenCalculatorButton from "../buttons/OpenCalculatorButton";
import OrderSum from "./OrderSum";
import OrderItem from "./OrderItem";

const OrderOverview = observer(() => {
  const { orderedItems, resetOrder } = orderStore;

  const handleMakePayment = () => {
    resetOrder();
  };
  return (
    <Paper miw={"33%"} h={"100%"} withBorder>
      <Stack gap={0} h={"100%"} justify="space-between">
        <Stack gap={0}>
          <OrderSum />
          <Divider />
          {orderedItems?.map((item) => (
            <OrderItem key={item.name} item={item} />
          ))}
        </Stack>

        <Group p={"xs"} grow gap={"xs"} visibleFrom="lg">
          <MakePaymentButton
            onClick={handleMakePayment}
            buttonProps={{ color: "green" }}
          >
            Abschliessen
          </MakePaymentButton>
          <OpenCalculatorButton>Rechner</OpenCalculatorButton>
        </Group>
        <Stack p={"xs"} gap={"xs"} hiddenFrom="lg">
          <MakePaymentButton
            onClick={handleMakePayment}
            buttonProps={{ color: "green" }}
          >
            Abschliessen
          </MakePaymentButton>
          <OpenCalculatorButton>Rechner</OpenCalculatorButton>
        </Stack>
      </Stack>
    </Paper>
  );
});

export default OrderOverview;
