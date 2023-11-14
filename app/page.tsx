import { AspectRatio, Center, Group, Image, Stack } from "@mantine/core";
import profileImgSrc from "@/assets/profile.jpg";
import NextImage from "next/image";

export default function Home() {
  return (
    <main>
      <Center w={"100vw"} h={"100vh"} bg="var(--mantine-color-gray-light)">
        <Stack align="center">
          <h1>Welcome!</h1>
          <Group justify="center">
            <Group justify="center">
              <AspectRatio ratio={1 / 1} w={200} mx="auto">
                <Image
                  component={NextImage}
                  src={profileImgSrc}
                  alt="Profile Image"
                  radius={"50%"}
                />
              </AspectRatio>
            </Group>

            <Group justify="center">
              <Stack h={"100%"} justify="flex-start">
                <h1>Dennis Hawran</h1>
                <span>Passionate Programmer</span>
              </Stack>
            </Group>
          </Group>
        </Stack>
      </Center>
    </main>
  );
}
