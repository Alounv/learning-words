"use client";

import "@fontsource/roboto-mono/400.css";

import { CacheProvider } from "@chakra-ui/next-js";
import {
  ChakraBaseProvider,
  ColorModeScript,
  extendBaseTheme,
} from "@chakra-ui/react";
import chakraTheme from "@chakra-ui/theme";

const { Button, Switch, Textarea, Input, Tabs, Link } = chakraTheme.components;

export const theme = extendBaseTheme({
  components: {
    Button,
    Textarea,
    Input,
    Tabs,
    Switch,
    Link,
  },
  fonts: {
    body: "Roboto Mono, sans-serif",
  },
  initialColorMode: "dark",
  useSystemColorMode: true,
});

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <>
      <CacheProvider>
        <ChakraBaseProvider theme={theme}>{children}</ChakraBaseProvider>
      </CacheProvider>

      <ColorModeScript initialColorMode="dark" />
    </>
  );
}
