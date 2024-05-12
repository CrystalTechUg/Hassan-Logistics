import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import Inter from "../public/static/fonts/Inter.ttf";
import RootComponent from "./components/RootComponent";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Setting from "./components/bodyComponents/Settings/Setting";
// import Customer from "./components/bodyComponents/Customer";
import Growth from "./components/bodyComponents/Growth";
import Home from "./components/bodyComponents/Home";
import Inventory from "./components/bodyComponents/Inventory";
import Order from "./components/bodyComponents/Order";
import Report from "./components/bodyComponents/Report";
import Revenue from "./components/bodyComponents/Revenue";

function App() {
  const theme = createTheme({
    spacing: 4,
    palette: {
      mode: "light",

      // primary: {
      //   main: "#573BFE",
      // },
      // text: {
      //   primary: "#202635",
      //   secondary: "#A0AEC0",
      // },
      // secondary: {
      //   main: "#01C0F6",
      // },
      // error: {
      //   main: "#E03137",
      // },
    },

    typography: {
      fontFamily: "Inter",
    },
    components: {
      MuiCssBaseline: {
        styleOverrides: `
          @font-face {
            font-family: 'Inter';
            font-style: normal;
            font-display: swap;
            font-weight: 400;
            src: local('Raleway'), local('Raleway-Regular'), url(${Inter}) format('woff2');
            unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
          }
        `,
      },
    },
    //here we customize our typography and in the variant prop we can use out myVar value
  });
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootComponent />}>
        <Route index element={<Home />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/inventory" element={<Inventory />}></Route>
        <Route path="/orders" element={<Order />}></Route>
        {/* <Route path="/customers" element={<Customer />}></Route> */}
        <Route path="/revenue" element={<Revenue />}></Route>
        <Route path="/growth" element={<Growth />}></Route>
        <Route path="/reports" element={<Report />}></Route>
        <Route path="/settings" element={<Setting />}></Route>
      </Route>
    )
  );

  return (
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
      <CssBaseline />
    </ThemeProvider>
  );
}

export default App;
