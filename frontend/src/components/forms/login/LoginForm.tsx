import {
  Alert,
  Button,
  FocusTrap,
  Paper,
  PasswordInput,
  Stack,
  Text,
  TextInput,
} from "@mantine/core";
import { isNotEmpty, useForm } from "@mantine/form";
import { IconAlertCircle } from "@tabler/icons-react";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { auth, type AuthCredentials } from "../../../queries/authQueries";
import { authStore } from "../../../stores/authStore";

const LoginForm = () => {
  const { onAuthSuccess } = authStore;
  const navigate = useNavigate();

  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const form = useForm<AuthCredentials>({
    initialValues: {
      email: "",
      password: "",
    },
    validate: {
      email: isNotEmpty("Pflichtfeld"),
      password: isNotEmpty("Pflichtfeld"),
    },
  });

  const { mutate: login } = useMutation({
    mutationFn: auth,
    onSuccess: (data) => {
      onAuthSuccess(data);
      navigate({ to: "/cashregister" });
    },
    onError: (error: any) => {
      console.log(error);
      if (error) {
        setErrorMessage(
          error.response?.data?.message ?? "Login fehlgeschlagen",
        );
      }
    },
  });
  return (
    <Paper p={"md"} shadow="md" w={300}>
      <FocusTrap>
        <form onSubmit={form.onSubmit((values) => login(values))}>
          <Stack>
            {errorMessage && (
              <Alert color="red" icon={<IconAlertCircle size={20} />}>
                <Text c={"red"}>{errorMessage}</Text>
              </Alert>
            )}
            <TextInput
              label="E-Mail"
              name="email"
              {...form.getInputProps("email")}
              data-autofocus
            />
            <PasswordInput
              label="Passwort"
              name="password"
              {...form.getInputProps("password")}
            />
            <Button type="submit">LOGIN</Button>
          </Stack>
        </form>
      </FocusTrap>
    </Paper>
  );
};

export default LoginForm;
