import { FocusTrap, NumberInput, Stack, TextInput } from "@mantine/core";
import { useForm } from "@mantine/form";
import { type DepositCreate } from "../../../schemas/zodDeposit";
import SaveButton from "../../buttons/SaveButton";

const DepositForm = () => {
  const form = useForm<DepositCreate>({
    initialValues: {
      name: "",
      value: null,
    },
  });
  return (
    <FocusTrap>
      <form onSubmit={form.onSubmit((values) => console.log(values))}>
        <Stack>
          <TextInput
            label="Bezeichnung"
            {...form.getInputProps("name")}
            withAsterisk
            data-autofocus
          />
          <NumberInput
            label="Betrag €"
            {...form.getInputProps("value")}
            withAsterisk
          />
          <SaveButton>Speichern</SaveButton>
        </Stack>
      </form>
    </FocusTrap>
  );
};

export default DepositForm;
