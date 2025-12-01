import { Paper } from "@mantine/core";
import type { ReactNode } from "react";
import styles from "./FormWrapper.module.css";

const FormWrapper = ({ children }: { children: ReactNode }) => {
  return (
    <Paper withBorder p={"md"} className={styles.formWrapper}>
      {children}
    </Paper>
  );
};

export default FormWrapper;
