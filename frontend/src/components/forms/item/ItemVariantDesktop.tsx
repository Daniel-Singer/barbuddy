import {
  Group,
  NumberInput,
  SimpleGrid,
  Stack,
  TextInput,
} from "@mantine/core";
import { useItemFormContext } from "./context";
import TrashButton from "../../buttons/TrashButton";

import styles from "./ItemVariantDesktop.module.css";

const ItemVariantDesktop = () => {
  const form = useItemFormContext();
  return (
    <>
      {form.getValues().variants.map((_variant, index) => (
        <Stack key={`variant_${index}`} className={styles.variant}>
          <SimpleGrid cols={3}>
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
          </SimpleGrid>
          <Group justify="flex-end">
            <TrashButton
              onClick={() => form.removeListItem("variants", index)}
            ></TrashButton>
          </Group>
        </Stack>
      ))}
    </>
  );
};

export default ItemVariantDesktop;
