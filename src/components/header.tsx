"use client";

import { IconButton, Link, createIcon, useColorMode } from "@chakra-ui/react";
import { SunIcon, MoonIcon, ExternalLinkIcon } from "@chakra-ui/icons";
import { FC } from "react";

export const Header: FC = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <header className="flex items-center w-full p-4 gap-3 max-w-4xl mx-auto">
      <KeyboardIcon boxSize={8} />
      <div>Words to learn</div>

      <Link
        className="text-sm ml-auto flex items-center gap-1"
        href="https://github.com/Alounv/words"
        isExternal
      >
        Github
        <ExternalLinkIcon />
      </Link>

      <IconButton
        onClick={toggleColorMode}
        aria-label="Toggle color mode"
        icon={colorMode === "dark" ? <SunIcon /> : <MoonIcon />}
        variant="ghost"
        size="sm"
      />
    </header>
  );
};

const KeyboardIcon = createIcon({
  displayName: "KeyboardIcon",
  viewBox: "0 0 24 24",
  path: (
    <path
      fill="currentColor"
      d="M20 5H4c-1.1 0-1.99.9-1.99 2L2 17c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm-9 3h2v2h-2V8zm0 3h2v2h-2v-2zM8 8h2v2H8V8zm0 3h2v2H8v-2zm-1 2H5v-2h2v2zm0-3H5V8h2v2zm9 7H8v-2h8v2zm0-4h-2v-2h2v2zm0-3h-2V8h2v2zm3 3h-2v-2h2v2zm0-3h-2V8h2v2z"
    />
  ),
});
