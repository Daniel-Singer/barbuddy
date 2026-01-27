import { Divider, Paper, Stack } from "@mantine/core";
import { orderStore } from "../../stores/orderStore";

import { observer } from "mobx-react-lite";
import MakePaymentButton from "../buttons/MakePaymentButton";
import OpenCalculatorButton from "../buttons/OpenCalculatorButton";
import OrderSum from "./OrderSum";
import ListItem from "./ListItem";

const OrderOverview = observer(() => {
  const { orderedItems, resetOrder } = orderStore;

  const handleMakePayment = () => {
    resetOrder();
  };
  return (
    <Paper w={300} h={"100%"}>
      <Stack gap={0} h={"100%"} justify="space-between">
        <Stack gap={0}>
          <OrderSum />
          <Divider />
          {orderedItems?.map((item) => (
            <ListItem key={item.name} item={item} />
          ))}
        </Stack>

        <Stack>
          <MakePaymentButton onClick={handleMakePayment}>
            Abschliessen
          </MakePaymentButton>
          <OpenCalculatorButton>Rechner</OpenCalculatorButton>
        </Stack>
      </Stack>
    </Paper>
  );
});

export default OrderOverview;
