import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between min-h-screen">
      {/* Logo Section */}
      <div className="flex justify-center w-full py-8 bg-white">
        <Image
          src="/levelup-logo-transparent.png"
          alt="LevelUp Logo"
          width={180}
          height={37}
          priority
        />
      </div>

      {/* Title Section */}
      <section className="w-full pb-20 text-center bg-white">
        <h1 className="py-20 text-4xl font-bold">
          Building vibrant economic ecosystems.
        </h1>

      </section>

      {/* Who We Work With Section */}        
      <section className="w-full py-16 text-center bg-blue-100">
      <h3 className="py-20 mt-4 text-2xl ">
          Our clients are diverse organizations, from foundations and enterprises to start-ups, all seeking a partner capable of guiding them from research and strategy to transformative design and world-class products.
        </h3>
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
      </section>

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
