import { createMuiTheme } from '@material-ui/core';

const styledComponentsTheme = {
  breakpoints: {
    desktop: 1025,
    xs: 0,
    sm: 600,
    md: 960,
    lg: 1280,
    xl: 1920,
  },
};

const materialUiTheme = createMuiTheme({
  typography: {
    useNextVariants: true,
  },
});

export { styledComponentsTheme, materialUiTheme };
