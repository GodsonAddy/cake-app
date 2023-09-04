"use client";
import { CssBaseline } from "@mui/material";
import { deepmerge } from "@mui/utils";
import {
  useColorScheme,
  Experimental_CssVarsProvider as CssVarsProvider,
  experimental_extendTheme as extendMuiTheme,
  StyledEngineProvider,
} from "@mui/material/styles";
import { unstable_createCssVarsTheme as createCssVarsTheme } from "@mui/system";
import theme from "./theme";
import joyTheme from "./theme/joyTheme";

const muiTheme = extendMuiTheme(theme);

const allTheme = deepmerge(joyTheme, muiTheme);

export default function Providers({ children, session }) {
  return (
    <CssVarsProvider theme={createCssVarsTheme(allTheme)}>
      <CssBaseline />
      {children}
    </CssVarsProvider>
  );
}
