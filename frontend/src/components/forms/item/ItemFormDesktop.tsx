import { useForm } from "@mantine/form";
import { type ItemCreate } from "../../../schemas/zodItem";

import {
  Group,
  MultiSelect,
  NumberInput,
  SimpleGrid,
  Stack,
  Text,
  TextInput,
} from "@mantine/core";
import SaveButton from "../../buttons/SaveButton";
import UnitSelect from "../common/UnitSelect";
import PlusButton from "../../buttons/PlusButton";
import FormWrapper from "../common/FormWrapper";
import TrashButton from "../../buttons/TrashButton";

const ItemFormDesktop = () => {
  const form = useForm<ItemCreate>({
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
      <form
        onSubmit={form.onSubmit(
          (values) => console.log("Form values:", values),
          (errors) => console.error("Form errors:", errors)
        )}
      >
        <Stack>
          <TextInput label={"Bezeichnung"} {...form.getInputProps("name")} />
          <MultiSelect
            label="Kategorie"
            {...form.getInputProps("categories")}
          />
          <UnitSelect form={form} field="unit" />
          <Group justify="space-between">
            <Text c={"blue"}>Varianten</Text>
            <PlusButton onClick={addNewVariant} />
          </Group>
          {form.getValues().variants.map((_variant, index) => (
            <Stack key={`variant_${index}`}>
              <SimpleGrid cols={2}>
                <TextInput
                  label="Bezeichnung"
                  {...form.getInputProps(`variants.${index}.name`)}
                />
                <NumberInput
                  label="Menge"
                  min={0}
                  step={0.1}
                  {...form.getInputProps(`variants.${index}.servingSize`)}
                />
                <NumberInput
                  label="Einkaufspreis Brutto"
                  {...form.getInputProps(`variants.${index}.purchase.price`)}
                />
                <NumberInput
                  label="Steuersatz"
                  {...form.getInputProps(`variants.${index}.purchase.taxRate`)}
                />
                <NumberInput
                  label="Verkaufspreis Brutto"
                  {...form.getInputProps(`variants.${index}.sell.price`)}
                />
                <NumberInput
                  label="Steuersatz"
                  {...form.getInputProps(`variants.${index}.sell.taxRate`)}
                />
                <TrashButton
                  onClick={() => form.removeListItem("variants", index)}
                ></TrashButton>
              </SimpleGrid>
            </Stack>
          ))}
          <SaveButton>Speichern</SaveButton>
        </Stack>
      </form>
    </FormWrapper>
  );
};

export default ItemFormDesktop;
