import type { NextPage } from "next";
import Head from "next/head";
import { HomeView } from "../views/home";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Write Mind</title>
        <meta property="og:title" content="BHEET" />
        <meta property="og:site_name" content="Write Mind" />
        <meta property="og:description" content="My mind writing in the waves of the human language." />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://raw.githubusercontent.com/KRKBHEET/writemind/main/app/public/YinYang.png"
        />
      </Head>
      {/* <WalletMultiButton></WalletMultiButton> */}
      <HomeView/>
    </>
  );
};

export default Home;