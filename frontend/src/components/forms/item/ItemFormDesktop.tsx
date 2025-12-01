import {
  Group,
  MultiSelect,
  SimpleGrid,
  Stack,
  Text,
  TextInput,
} from "@mantine/core";
import SaveButton from "../../buttons/SaveButton";
import UnitSelect from "../common/UnitSelect";
import PlusButton from "../../buttons/PlusButton";
import FormWrapper from "../common/FormWrapper";
import { ItemFormProvider, useItemForm } from "./context";
import ItemVariantDesktop from "./ItemVariantDesktop";

const ItemFormDesktop = () => {
  const form = useItemForm({
    initialValues: {
      name: "",
      categories: [],
      unit: "",
      currency: "EUR",
      variants: [
        {
          name: "",
          servingSize: 0,
          purchase: {
            price: 0,
            taxRate: 0,
          },
          sell: {
            price: 0,
            taxRate: 0,
          },
          deposit: "",
        },
      ],
    },
  });

  const addNewVariant = () => {
    form.insertListItem("variants", {
      name: "",
      servingSize: 0,
      purchase: {
        price: 0,
        taxRate: 0,
      },
      sell: {
        price: 0,
        taxRate: 0,
      },
      deposit: "",
    });
  };
  return (
    <FormWrapper>
      <ItemFormProvider form={form}>
        <form
          onSubmit={form.onSubmit(
            (values) => console.log("Form values:", values),
            (errors) => console.error("Form errors:", errors)
          )}
        >
          <Stack>
            <TextInput label={"Bezeichnung"} {...form.getInputProps("name")} />
            <SimpleGrid cols={2}>
              <MultiSelect
                label="Kategorie"
                {...form.getInputProps("categories")}
              />
              <UnitSelect form={form} field="unit" />
            </SimpleGrid>
            <Group justify="space-between">
              <Text c={"blue"}>Varianten</Text>
              <PlusButton onClick={addNewVariant} />
            </Group>
            <ItemVariantDesktop />
            <SaveButton>Speichern</SaveButton>
          </Stack>
        </form>
      </ItemFormProvider>
    </FormWrapper>
  );
};

export default ItemFormDesktop;
