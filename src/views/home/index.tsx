
 

// React
import { useEffect, useState } from "react";
// Next
import Link from "next/link";
// import Image from "next/image";

export const HomeView = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1337);
  }, []);

  return (
    <div className="xs:max-w-[100vw]  mx-auto bg-black mt-[-67.5px]">
      <div className="hero h-screen flex flex-col justify-center items-center">
          <div className="w-full flex flex-col items-center ">
            <h1 className="leading-relaxed text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-tr from-[#9945FF] to-[#14F195]">
              krk.finance
            </h1>
            <div className="text-lg text-white mb-3">
              <p>🏗️ Ðev guild onboarding newbies 👷</p>
            </div>
            <div className="text-lg text-white mb-5">
            </div>
            <div className="lg:w-[420px] flex justify-center items-center space-x-4 mb-4">
              <Link href="/whitelist">
                <button className="btn lg:btn-wide btn-outline btn-success">
                  Whitelist
                </button>
              </Link>
              <Link href="https://docs.krk.finance">
                <button className="btn lg:btn-wide btn-outline btn-secondary">
                  Litepaper
                </button>
              </Link>
            </div>
          </div>
      </div>
      {/* <div className="hero h-screen flex flex-col justify-center items-center border-2 border-white">
        <TheGuild />
      </div>
      <div className="hero h-screen flex flex-col justify-center items-center">
        <Partners />
      </div> */}
    </div>
  );
};