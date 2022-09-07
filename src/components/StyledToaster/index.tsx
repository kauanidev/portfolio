import { Toaster } from "react-hot-toast";
import { useTheme } from "styled-components";

export function StyledToaster() {
  const theme = useTheme();
  return (
    <Toaster
      position="top-center"
      toastOptions={{
        success: {
          iconTheme: {
            primary: "white",
            secondary: theme.secondary,
          },
          style: {
            background: theme.secondary,
            color: theme.title,
          },
        },
        error: {
          iconTheme: {
            primary: "white",
            secondary: theme.primary,
          },
          style: {
            background: theme.primary,
            color: theme.title,
          },
        },
      }}
    />
  );
}
