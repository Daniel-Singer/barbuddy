import { useForm } from "@mantine/form";
import { Stack, TextInput } from "@mantine/core";
import SaveButton from "../../buttons/SaveButton";

const CategoryForm = () => {
  const form = useForm({
    initialValues: {
      name: "",
    },
    validate: {
      name: (value) => (!value || value === "" ? "Pflichtfeld" : null),
    },
  });
  return (
    <form onSubmit={form.onSubmit((values) => console.log(values))}>
      <Stack>
        <TextInput
          label="Bezeichnung"
          {...form.getInputProps("name")}
          key={form.key("name")}
          withAsterisk
        />
        <SaveButton>Speichern</SaveButton>
      </Stack>
    </form>
  );
};

export default CategoryForm;
