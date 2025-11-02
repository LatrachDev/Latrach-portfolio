import StaggeredMenu from "../StaggeredMenu";

function Navbar({ onContactClick }) {
  return (
    <header className="absolute inset-x-0 top-0 z-30 flex items-center justify-center px-4 py-6">
      <div className="flex w-full max-w-6xl items-center justify-between rounded-full border border-white/10 bg-black/60 px-6 py-4 text-white shadow-[0_20px_60px_rgba(9,3,20,0.45)] backdrop-blur-xl">
        <a href="#home" className="flex items-center gap-3">
          <img
            src="/Logo/Logo-Latrach-white.png"
            alt="Mohammed Latrach Logo"
            className="h-10 w-10 object-contain"
          />
          <span className="text-lg font-semibold tracking-wide">Mohammed Latrach</span>
        </a>

        <button
          type="button"
          onClick={() => onContactClick?.()}
          className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white transition hover:bg-white/20"
          aria-label="Open menu"
        >
          <span className="sr-only">Open menu</span>
          <span className="flex flex-col items-center justify-center gap-1.5">
            <span className="block h-0.5 w-5 rounded bg-current" />
            <span className="block h-0.5 w-5 rounded bg-current" />
            <span className="block h-0.5 w-5 rounded bg-current" />
          </span>
        </button>

        <nav className="hidden gap-8 text-sm font-medium text-white/80 md:flex">
          <a className="transition hover:text-white" href="#home">Home</a>
          <a className="transition hover:text-white" href="#projects">Projects</a>
          <a className="transition hover:text-white" href="#contact">Contact</a>
          <a className="transition hover:text-white" href="#gallery">Gallery</a>
        </nav>

      </div>
    </header>
  );
}

export default Navbar;
