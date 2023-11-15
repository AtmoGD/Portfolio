"use client";

import { Box, Button, Text, Group, TextInput, Title } from "@mantine/core";
import { useForm } from "@mantine/form";
import React, { FunctionComponent } from "react";

interface PageProps {}

const Page: FunctionComponent<PageProps> = () => {
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
  }

  return (
    <Box maw={"36em"} mx="auto">
      <Title>
        Sie möchten mich kontaktieren? <br />
      </Title>
      <Text>
        Sie können mich gerne über meine oben verlinkten Kanäle erreichen oder
        mir ganz unkompliziert über das unten stehende Formular eine Nachricht
        zukommen lassen.
      </Text>
      <form onSubmit={form.onSubmit((values) => handleSubmit(values))}>
        <TextInput
          withAsterisk
          label="Name"
          placeholder="Ihr Name"
          {...form.getInputProps("name")}
        />
        <TextInput
          withAsterisk
          label="Email"
          placeholder="Ihre@email.com"
          {...form.getInputProps("email")}
        />
        <TextInput
          withAsterisk
          label="Nachricht"
          placeholder="Bitte geben Sie eine Nachricht ein"
          {...form.getInputProps("message")}
        />

        <Group justify="flex-end" mt="md">
          <Button type="submit">Submit</Button>
        </Group>
      </form>
    </Box>
  );
};

export default Page;
