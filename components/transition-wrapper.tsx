"use client";

import { Box, Transition } from "@mantine/core";
import { useSetState } from "@mantine/hooks";
import exp from "constants";
import { useEffect, useState } from "react";

function TransitionWrapper({ children }: any) {
  const [opened, setOpened] = useState(false);

  useEffect(() => {
    setTimeout(() => setOpened(true), 100);
  }, []);

  return (
    <>
      {!opened && <div style={{ height: "200vh" }}></div>}
      <Transition
        mounted={opened}
        transition="fade"
        duration={800}
        timingFunction="ease"
      >
        {(styles) => <Box style={styles}>{children}</Box>}
      </Transition>
    </>
  );
}

export default TransitionWrapper;
