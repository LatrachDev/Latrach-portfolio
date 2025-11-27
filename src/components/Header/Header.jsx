function Header() {
  return (
    <header className="absolute flex min-h-screen w-full flex-col items-center justify-center overflow-hidden bg-[#090217] px-6 py-24 text-white">
      <div className="relative z-10 flex sm:w-3xl  flex-col items-center gap-10 text-center">
        
        <span className="rounded-full border border-white/10 bg-white/5 px-6 py-2 text-xs mt-4 sm:text-sm font-medium uppercase tracking-[0.1em] sm:tracking-[0.4em] text-white/70 backdrop-blur">
          Designer & Developer
        </span>

        <h1 className="text-4xl font-black leading-tight sm:text-5xl lg:text-6xl uppercase">
          Mohammed Latrach 
        </h1>

        <p className="w-[80%] text-xs sm:text-lg text-white/70 text-justify [text-align-last:center]"> 
          I can help you bring your project to life by combining technical skills, user-friendly design, and effective communication to ensure your goals are achieved smoothly and efficiently.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4">
          <a
            className="rounded-full bg-white px-8 py-3 text-xs sm:text-sm font-semibold text-[#090217] shadow transition hover:bg-white/80"
            href="#about"
          >
            Discover Me
          </a>
          <a
            className="rounded-full border border-white/20 bg-white/5 px-8 py-3 text-xs sm:text-sm font-semibold text-white transition hover:bg-white/10"
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