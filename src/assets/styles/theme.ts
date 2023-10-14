import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  styles: {
    global: {
      html: {
        height: "100%",
      },
      body: {
        background: "var(--chakra-colors-gray-100)",
      },
    },
  },
});
