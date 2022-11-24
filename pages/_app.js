import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import { Provider } from "react-redux";
import { wrapper } from "store/configureStore";
import theme from "styles/muiTheme/muiCustomTheme";
import "../styles/globals.css";

function MyApp({ Component, ...rest }) {
  const getLayout = Component.getLayout || ((page) => page);
  const { store, props } = wrapper.useWrappedStore(rest);
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {getLayout(<Component {...props.pageProps} />)}
      </ThemeProvider>
    </Provider>
  );
}

export default MyApp;
