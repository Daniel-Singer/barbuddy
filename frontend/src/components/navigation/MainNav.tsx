import { Burger, Drawer, Group, Stack, UnstyledButton } from "@mantine/core";

import { useDisclosure } from "@mantine/hooks";
import {
  IconBuildingWarehouse,
  IconDashboard,
  IconHome,
  IconListDetails,
} from "@tabler/icons-react";
import { Link } from "@tanstack/react-router";
import styles from "./MainNav.module.css";

const navLinks = [
  {
    href: "/",
    label: "Home",
    icon: IconHome,
  },
  {
    href: "/cashregister",
    label: "Kassa",
    icon: IconHome,
  },
  {
    href: "/dashboard",
    label: "Dashboard",
    icon: IconDashboard,
  },
  {
    href: "/items",
    label: "Artikel",
    icon: IconBuildingWarehouse,
  },
  {
    href: "/orders",
    label: "Bestellungen",
    icon: IconListDetails,
  },
];

const MainNav = () => {
  const [opened, { toggle, close }] = useDisclosure();
  return (
    <Group className={styles.mainNav}>
      <Burger opened={opened} onClick={toggle} style={{ zIndex: 2000 }} />
      <Drawer
        opened={opened}
        onClose={close}
        closeButtonProps={{ display: "none" }}
        size={"sm"}
      >
        <Stack gap={0}>
          {navLinks.map(({ label, href }) => (
            <UnstyledButton
              component={Link}
              href={href}
              onClick={toggle}
              className={styles.mainLink}
            >
              {label}
            </UnstyledButton>
          ))}
        </Stack>
      </Drawer>
    </Group>
  );
};

export default MainNav;
