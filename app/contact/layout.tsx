"use client";

import TransitionWrapper from "@/components/transition-wrapper";

export default function RootLayout({ children }: any) {
  return <TransitionWrapper>{children}</TransitionWrapper>;
}
