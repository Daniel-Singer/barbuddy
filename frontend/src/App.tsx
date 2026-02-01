import { Flex, MantineProvider, Stack } from "@mantine/core";
import "@mantine/core/styles.css";
import { ModalsProvider } from "@mantine/modals";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Outlet } from "@tanstack/react-router";
import "./App.css";
import TestModal from "./components/modals/ItemModal";
import MainNav from "./components/navigation/MainNav";
import { theme } from "./theme";

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <MantineProvider theme={theme} forceColorScheme="light">
        <ModalsProvider modals={{ test: TestModal }}>
          <Stack h={"100%"} gap={0} w={"100%"}>
            <MainNav />
            <Flex flex={1} w={"100%"} bg={"gray.1"} p={"xs"}>
              <Outlet />
            </Flex>
          </Stack>
        </ModalsProvider>
      </MantineProvider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

export default App;
