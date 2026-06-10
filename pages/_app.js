import "../styles/globals.css";
import "react-toastify/dist/ReactToastify.css";
import Layout from "../components/Layout";
import { ThemeProvider } from "../components/ThemeProvider";
import ToastProvider from "../components/ToastProvider";

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
      <ToastProvider />
    </ThemeProvider>
  );
}
