import { Avatar, UnstyledButton, Menu, Text } from "@mantine/core";
import { IconLogout, IconUser } from "@tabler/icons-react";
import { useAuth } from "@/app/(pages)/users/api/use-auth";
import classes from "./avatar.module.css";
import Link from "next/link";

export function NavbarAvatar() {
  const { user, signOut } = useAuth();

  return (
    <Menu shadow="md" width={200} position="top-start">
      <Menu.Target>
        <UnstyledButton className={classes.link}>
          <div className={classes.linkInner}>
            <Avatar
              src={user?.avatar}
              alt={user?.name}
              size={40}
              radius="xl"
              color="white"
            />
          </div>
        </UnstyledButton>
      </Menu.Target>

      <Menu.Dropdown>
        <Menu.Item
          component={Link}
          href="/profile"
          leftSection={<IconUser size={14} />}
        >
          <Text size="sm">Profile</Text>
        </Menu.Item>
        <Menu.Divider />
        <Menu.Item
          leftSection={<IconLogout size={14} />}
          onClick={() => signOut()}
        >
          <Text size="sm">Logout</Text>
        </Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
}
