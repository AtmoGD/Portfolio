"use client";

import { Box, Button, Text, Group, TextInput, Title, Center, Modal } from "@mantine/core";
import { useForm } from "@mantine/form";
import { useDisclosure } from '@mantine/hooks';
import React, { FunctionComponent } from "react";

interface PageProps { }

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

  function handleSubmit(values: any) {
    console.log(form.values);
    open();
  }

  return (
    <Center>
      <Box w={500} m={50}>
        <Title m={25}>
          Nachricht <br />
        </Title>
        <form onSubmit={form.onSubmit((values) => handleSubmit(values))}>
          <TextInput m={25}
            withAsterisk
            // label="Name"
            placeholder="Name"
            {...form.getInputProps("name")}
          />
          <TextInput m={25}
            withAsterisk
            // label="Email"
            placeholder="Email"
            {...form.getInputProps("email")}
          />
          <TextInput m={25}
            withAsterisk
            // label="Nachricht"
            placeholder="Nachricht"
            {...form.getInputProps("message")}
          />

          <Group justify="flex-end" m={25}>
            <Button type="submit">Submit</Button>
          </Group>
        </form>
      </Box>

      <Modal opened={opened} onClose={close} title="Authentication" centered>
        <Text>Modal content</Text>
      </Modal>
    </Center>
  );
};

export default Page;



