import "../styles/globals.css";
import { WalletConnectProvider } from "../components/WalletConnectProvider";
import "@solana/wallet-adapter-react-ui/styles.css";

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
  return (
    <WalletConnectProvider>
      <Component {...pageProps} />
    </WalletConnectProvider>
  );
}
