import { createContext, useContext } from "react";

// Create the theme context
const ThemeContext = createContext({
  themeMode: "light",
  darkTheme: () => {},
  lightTheme: () => {},
});

export const ThemeProvider = ThemeContext.Provider;

// Create a custom hook to use the theme
export default function useTheme() {
  return useContext(ThemeContext);
}
