import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";

// React
import { useEffect, useState } from "react";
// Next
import Link from "next/link";
// import Image from "next/image";

export const ContactView = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1337);
  }, []);

  return (
    <div>
      <Header/>
      wassuppp
      <Footer/>
    </div>
  );
};