import { useForm } from "@mantine/form";
import { type ItemCreate } from "../../../schemas/zodItem";
import { MultiSelect, Stack, TextInput } from "@mantine/core";
import SaveButton from "../../buttons/SaveButton";
import UnitSelect from "../common/UnitSelect";

const ItemFormDesktop = () => {
  const form = useForm<ItemCreate>();
  return (
    <form onSubmit={form.onSubmit((values) => console.log(values))}>
      <Stack>
        <TextInput label={"Bezeichnung"} {...form.getInputProps("name")} />
        <MultiSelect label="Kategorie" />
        <UnitSelect />
        <SaveButton>Speichern</SaveButton>
      </Stack>
    </form>
  );
};

export default ItemFormDesktop;
