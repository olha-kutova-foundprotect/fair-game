import React from 'react';
import Head from 'next/head';

const Home: React.FC = () => {
  return (
    <div className="relative min-h-screen w-full bg-charcoal-black overflow-hidden text-white">
      <Head>
        <title>Fair Game | Co-Building Disruptive Companies</title>
      </Head>

      <div className="absolute inset-0 z-0 pointer-events-none bg-charcoal-black"/>

      {/* FAIR GAME TEXT — DESKTOP ONLY */}
      <div className="pointer-events-none absolute inset-0 z-0 hidden lg:block">
        <span className="absolute bottom-[-8%] left-[1%] text-[20rem] font-bold text-white/3 leading-none">
          FAIR GAME
        </span>
      </div>

      {/* BACKGROUND ARCS */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* First circle */}
        <div
          className="
            absolute
            -top-20
            left-[40%]
            sm:-right-20
            sm:left-[53%]
            w-[800px]
            h-[800px]
            rounded-full
            border-[75px]"
          style={{
            borderColor: 'rgba(38, 48, 61, 0.7)',
            transform: 'rotate(-15deg)',
          }}
        />

        {/* Second circle */}
        <div
          className="
            absolute
            bottom-[-10%]
            left-[20%]
            sm:right-[-10%]
            sm:left-auto
            w-[600px]
            h-[600px]
            rounded-full
            border-[40px]"
          style={{
            borderColor: 'rgba(38, 48, 61, 0.4)',
          }}
        />
      </div>

      {/* MOBILE DIAGONAL BAND */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden lg:hidden">
        <div
          className="
      absolute
      bottom-[-45%]
      left-[10%]
      w-[160%]
      h-[90%]
      rotate-[50deg]
    "
          style={{
            background: 'rgba(38, 48, 61, 0.3)',
          }}
        />
      </div>



      <main className="relative z-20 container mx-auto px-6 min-h-screen flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 w-full items-center">

          {/* LEFT CONTENT */}
          <div className="relative flex flex-col items-center lg:items-start text-center lg:text-left space-y-8 max-w-2xl mx-auto lg:mx-0">
            <div className="flex items-center gap-4 text-xs uppercase tracking-widest text-gray-500">
              <span>Fair Game</span>
              <span className="w-8 h-px bg-gray-600" />
              <span>Venture Studio</span>
            </div>

            <h1 className="text-xl sm:text-3xl fonttracking-tight">
              Ideas are easy! <br />
              <span className="">Solving big problems and commercialising them isn’t.</span>
            </h1>
            <h2 className="text-2xl sm:text-5xl font-semibold tracking-tight text-burnt-terracotta">That’s what Fair Game does.</h2>

            <p className="text-gray-400 text-sm sm:text-xl leading-relaxed max-w-lg">
              We don&#39;t produce ideas; we take real problems, understands them deeply and turn them into businesses built to succeed.
            </p>

            <div className="flex gap-10 pt-4 text-sm">
              <div>
                <div className="text-burnt-terracotta font-semibold text-lg">7+</div>
                <div className="text-gray-500">Ventures Built</div>
              </div>
              <div>
                <div className="text-burnt-terracotta font-semibold text-lg">15+</div>
                <div className="text-gray-500">Founders Supported</div>
              </div>
            </div>

            {/*<button className="mt-6 inline-flex items-center justify-center px-10 py-4 rounded-lg bg-deep-teal font-semibold transition-all hover:bg-[#3db6c0] hover:shadow-[0_0_30px_rgba(45,166,176,0.35)] active:scale-95">*/}
            {/*  Let’s Build Together*/}
            {/*</button>*/}
          </div>

          {/* DESKTOP — CIRCLES (UNCHANGED) */}
          <div className="hidden lg:block relative h-[600px]">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="absolute w-[440px] h-[440px] rounded-full border border-deep-teal/20" />
              <div className="absolute w-[360px] h-[360px] rounded-full border border-deep-teal/40" />
            </div>
          </div>

        </div>
      </main>
    </div>
  );
};

export default Home;
