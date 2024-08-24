"use client";  

import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {

  const [buildingVibrant, setBuildingVibrant] = useState("economic ecosystems.");

  useEffect(() => {
    const texts = ["economic ecosystems.", "early stage startups.", "growth stage startups."];
    let index = 0;

    const interval = setInterval(() => {
      index = (index + 1) % texts.length;
      setBuildingVibrant(texts[index]);
    }, 3000); // 3 seconds

    return () => clearInterval(interval); 
  }, []);

  return (
    <main className="flex flex-col items-center justify-between min-h-screen">
      
      {/* Hero Section */}
      <section className="flex items-center justify-between w-2/3 pb-20 text-left bg-white">
        <div className="w-1/3">
          <h1 className="pt-20 pb-3 text-5xl font-bold">
            Supporting vibrant {""}
            <span className="transition-all duration-1000 ease-in-out">
              {buildingVibrant}
            </span>
          </h1>
          <p className="text-balance">
            Our clients are diverse organizations, from foundations and enterprises to startups, all seeking a partner capable of guiding them from research and strategy to transformative design and world-class products.
          </p>
        </div>
        
        <div className="w-2/3">
          <Image
            src="/placeholder-image.png" 
            alt="Dynamic Image"
            width={600}
            height={400} 
            className="object-cover pt-10 pl-10"
          />
        </div>
      </section>

      <div className="grid mx-auto text-center lg:max-w-5xl lg:w-full lg:grid-cols-3 lg:text-left">
          
        <a
          href="/accelerators"
          className="px-5 py-4 transition-colors border border-transparent rounded-lg group hover:border-gray-300 hover:bg-blue-200"
        >
          <h2 className="mb-3 text-2xl font-semibold">
            Accelerators{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className="m-0 max-w-[30ch] text-sm opacity-75">
            Empower your founder cohorts with proven training and customized workshops that meet them where they are.
          </p>
        </a>

        <a
          href="/founders"
          className="px-5 py-4 transition-colors border border-transparent rounded-lg group hover:border-gray-300 hover:bg-blue-200"
        >
          <h2 className="mb-3 text-2xl font-semibold">
            Founders{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className="m-0 max-w-[30ch] text-sm opacity-75">
            Transform your startup vision into reality with our research, coaching, and custom consulting services.
          </p>
        </a>
          
        <a
          href="/funders"
          className="px-5 py-4 transition-colors border border-transparent rounded-lg group hover:border-gray-300 hover:bg-blue-200"
        >
          <h2 className="mb-3 text-2xl font-semibold">
            Funders{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className="m-0 max-w-[30ch] text-sm opacity-75">
            Discover what's missing with our ecosystem analysis and provide holistic support that nurtures high-potential startups and drives strong results.
          </p>
        </a>
      </div>

      {/* Understands Section */}
      <section className="w-full py-16 text-center bg-green-100">
        <h2 className="text-2xl">
          We are your partner who deeply understands the startup ecosystem, founder life, and product development lifecycle. Let's work together to ensure your success.
        </h2>
      </section>

      {/* Global Tech Sustainable Section */}
      <section className="w-full py-16 text-center bg-yellow-100">
        <h2 className="text-2xl">
          LevelUp is a global company leveraging technology to advance sustainable economic growth.
        </h2>
      </section>
    </main>
  );
}
