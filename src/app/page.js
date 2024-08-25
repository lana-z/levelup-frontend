"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  const [buildingVibrant, setBuildingVibrant] = useState({
    text: "economic ecosystems.",
    color: "text-blue-200",
  });

  useEffect(() => {
    const texts = [
      { text: "economic ecosystems.", color: "text-blue-400" },
      { text: "early stage startups.", color: "text-green-400" },
      { text: "emerging markets.", color: "text-orange-400" },
    ];
    let index = 0;

    const interval = setInterval(() => {
      index = (index + 1) % texts.length;
      setBuildingVibrant(texts[index]);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  function triggerPulse(serviceId) {
    window.location.hash = "#services";
    setTimeout(() => {
      const targetElement = document.getElementById(serviceId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" });
        targetElement.classList.add("highlighted");
        setTimeout(() => {
          targetElement.classList.remove("highlighted");
        }, 1500);
      }
    }, 1000);
  }

  return (
    <main className="flex flex-col items-center justify-between min-h-screen">
      <section className="flex items-center justify-between w-2/3 pb-20 text-left bg-white">
        <div className="w-1/3">
          <h1 className="pt-20 pb-3 text-5xl font-bold">
            Supporting vibrant {""}
            <span className={`transition-all duration-1000 ease-in-out ${buildingVibrant.color}`}>
              {buildingVibrant.text}
            </span>
          </h1>
          <p className="text-balance">
            Our clients are diverse organizations, from foundations and enterprises to startups, all seeking a partner to accelerate their growth.
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
          href="#services"
          className="px-5 py-4 transition-colors border border-transparent rounded-lg group hover:border-gray-300 hover:bg-blue-200"
          onClick={(e) => {
            e.preventDefault();
            triggerPulse("accelerator-services");
          }}
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
          href="#services"
          className="px-5 py-4 transition-colors border border-transparent rounded-lg group hover:border-gray-300 hover:bg-blue-200"
          onClick={(e) => {
            e.preventDefault();
            triggerPulse("founder-services");
          }}
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
          href="#services"
          className="px-5 py-4 transition-colors border border-transparent rounded-lg group hover:border-gray-300 hover:bg-blue-200"
          onClick={(e) => {
            e.preventDefault();
            triggerPulse("funder-services");
          }}
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

      <section className="flex items-center justify-between w-full p-20 bg-blue-200">
        <div className="w-1/2">
          <Image
            src="/work-we-love-bl.png"
            alt="Inspiring Work We Love Image"
            width={400}
            height={400}
          />
        </div>
        <div className="w-1/2">
          <h3 className="pt-20 pb-3 mx-5 text-3xl">
            And we love it because
            <br />
            it changes lives,
            <br />
            grows economies,
            <br />
            and makes{" "}
            <span className="animate-pulse">lasting, impactful change.</span>
          </h3>
          <p className="mx-5 mt-4">
            We partner closely with founders to ensure sustainable outcomes that last well beyond the scope of our project, program, or training.
          </p>
        </div>
      </section>

      <section id="services" className="w-full py-16 text-center bg-green-400">
        <h2 className="mx-10 text-2xl">
          We deeply understand the startup ecosystem, founder life, and product development lifecycle.
        </h2>

        <div className="flex justify-around mt-10">
          <div id="accelerator-services" className="w-1/4 p-5 bg-white rounded-lg shadow-md">
            <h3 className="mb-4 text-xl font-semibold">For Accelerators</h3>
            <ul className="text-left list-disc list-inside">
              <li>Founder training modules</li>
              <li>Cohort management tools</li>
              <li>Performance analytics and reporting</li>
              <li>Programming and curriculum design</li>
              <li>Peer coaching facilitation</li>
            </ul>
          </div>

          <div id="founder-services" className="w-1/4 p-5 bg-white rounded-lg shadow-md">
            <h3 className="mb-4 text-xl font-semibold">For Founders</h3>
            <ul className="text-left list-disc list-inside">
              <li>Business model development</li>
              <li>Product consulting</li>
              <li>GTM research and recommendations</li>
              <li>Customer discovery</li>
              <li>User journey mapping</li>
              <li>Leadership training</li>
            </ul>
          </div>

          <div id="funder-services" className="w-1/4 p-5 bg-white rounded-lg shadow-md">
            <h3 className="mb-4 text-xl font-semibold">For Funders</h3>
            <ul className="text-left list-disc list-inside">
              <li>Ecosystem assessment and mapping</li>
              <li>Founder mentoring</li>
              <li>Community building</li>
              <li>Custom research</li>
            </ul>
          </div>
        </div>
        <h2 className="py-10 mx-10 text-2xl">
          Let's work together to ensure your success.
        </h2>
        <button className="px-5 py-4 mt-10 bg-blue-200 rounded-lg hover:border-gray-300 hover:bg-blue-400">
          Let's go!
        </button>
      </section>

      <section className="w-full pt-10 text-center">
        <h2 className="text-2xl">
          Here's what hundreds of happy Accelerators, Founders and Funders have said after partnering with us.
        </h2>
      </section>

      <section className="testimonials-container">
        <div className="testimonials-track">
          {[...Array(10)].map((_, index) => (
            <div key={index} className="testimonial-card">
              <p>
                "All the great things to say about LevelUp Economy. All the great outcomes. Highly recommend!"
              </p>
              <div className="author">
                <img src="/placeholder-pfp.png" alt="Pic or logo" />
                <div>
                  <h3>Client Name</h3>
                  <p>@Organization Name</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="w-full py-10 text-center bg-blue-200">
        <h2 className="text-2xl">
          LevelUp is a global company leveraging technology to advance sustainable economic growth.
          <br></br>

          <p>Get in touch.</p>
        </h2>

      </section>
    </main>
  );
}