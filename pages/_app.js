import { ThemeProvider } from "styled-components";
import { store, persistor } from "/store/store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

// This is a global stylesheet. You can edit it to sooth your taste
import GlobalStyle from "/styles/globalStyles";

// edit your theme in styles/theme
import Theme from "/styles/theme";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <GlobalStyle />
          <ThemeProvider theme={Theme}>
            <Component {...pageProps} />
          </ThemeProvider>
        </PersistGate>
      </Provider>
    </>
  );
}

export default MyApp;
