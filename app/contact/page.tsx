"use client";

import {
  Box,
  Button,
  Text,
  Group,
  TextInput,
  Title,
  Center,
  Modal,
  Stack,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { useDisclosure } from "@mantine/hooks";
import { IconSend } from "@tabler/icons-react";
import React, { FunctionComponent } from "react";

interface PageProps {}

const Page: FunctionComponent<PageProps> = () => {
  const [opened, { open, close }] = useDisclosure(false);

  const form = useForm({
    initialValues: {
      name: "",
      email: "",
      message: "",
    },

    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
    },
  });

  const sendEmail = (e: any) => {
    e.preventDefault();
    open();
  };

  return (
    <Center>
      <Box w={500} m={50}>
        <Title m={25}>
          Nachricht <br />
        </Title>
        <form onSubmit={sendEmail}>
          <TextInput
            m={25}
            withAsterisk
            placeholder="Name"
            {...form.getInputProps("name")}
          />
          <TextInput
            m={25}
            withAsterisk
            placeholder="Email"
            {...form.getInputProps("email")}
          />
          <TextInput
            m={25}
            withAsterisk
            placeholder="Nachricht"
            {...form.getInputProps("message")}
          />

          <Group justify="flex-end" m={25}>
            <Button type="submit" onSubmit={sendEmail}>
              Submit
            </Button>
          </Group>
        </form>
      </Box>

      <Modal size={"36em"} opened={opened} onClose={close} title="" centered>
        <Stack justify="center" align="center">
          <Title m={15}>Email gesendet 🎉</Title>
          <IconSend size={64} style={{ margin: 15 }} />
          <Text m={15}>
            Vielen Dank für die Nachricht auch wenn ich sie nicht lesen werde
            weil das Formular nicht funktioniert. Aber hey, der Wille zählt!
          </Text>
        </Stack>
      </Modal>
    </Center>
  );
};

export default Page;
