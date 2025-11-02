function Header() {
  return (
    <header className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden bg-[#090217] px-6 py-24 text-white">
      <div className="relative z-10 flex w-full max-w-4xl flex-col items-center gap-10 text-center">
        <span className="rounded-full border border-white/10 bg-white/5 px-6 py-2 text-sm font-medium uppercase tracking-[0.4em] text-white/70 backdrop-blur">
          Portfolio 2025
        </span>

        <h1 className="text-4xl font-semibold leading-tight sm:text-5xl md:text-6xl">
          Mohammed Latrach
        </h1>

        <p className="max-w-2xl text-lg text-white/70">
          Product designer & full-stack creative crafting immersive digital experiences. I build delightful user journeys and the systems that power them.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <a
            className="rounded-full bg-white px-8 py-3 text-sm font-semibold text-[#090217] shadow transition hover:bg-white/80"
            href="#about"
          >
            Discover Me
          </a>
          <a
            className="rounded-full border border-white/20 bg-white/5 px-8 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
            href="#projects"
          >
            My Projects
          </a>
        </div>
      </div>

      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,_rgba(114,71,255,0.35),_transparent_55%),_radial-gradient(circle_at_bottom,_rgba(255,42,141,0.25),_transparent_60%)]" />
    </header>
  );
}

export default Header;