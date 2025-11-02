// components/Header/SideBar.jsx
import React, { forwardRef, useImperativeHandle, useRef, useState } from 'react';
import StaggeredMenu from '../StaggeredMenu';

const menuItems = [
  { label: 'Home', ariaLabel: 'Go to home section', link: '#home' },
  { label: 'Projects', ariaLabel: 'View projects', link: '#projects' },
  { label: 'Contact', ariaLabel: 'Get in touch', link: '#contact' },
  { label: 'Gallery', ariaLabel: 'View gallery', link: '#gallery' }
];

const socialItems = [
  { label: 'Twitter', link: 'https://twitter.com' },
  { label: 'GitHub', link: 'https://github.com' },
  { label: 'LinkedIn', link: 'https://linkedin.com' }
];

const SideBar = forwardRef(function SideBar(_, ref) {
  const menuRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);

  useImperativeHandle(
    ref,
    () => ({
      open: () => menuRef.current?.open?.(),
      close: () => menuRef.current?.close?.(),
      toggle: () => menuRef.current?.toggle?.(),
      isOpen: () => isOpen
    }),
    [isOpen]
  );

  return (
    <>
      <StaggeredMenu
        ref={menuRef}
        position="right"
        items={menuItems}
        socialItems={socialItems}
        displaySocials={true}
        displayItemNumbering={true}
        menuButtonColor="#fff"
        openMenuButtonColor="#fff"
        changeMenuColorOnOpen={true}
        colors={['#B19EEF', '#5227FF']}
        // logoUrl="/Logo/Logo-Latrach-white.png"
        accentColor="#ff6b6b"
        isFixed
        onMenuOpen={() => setIsOpen(true)}
        onMenuClose={() => setIsOpen(false)}
        className="z-50"
      />

      {isOpen && (
        <button
          type="button"
          onClick={() => menuRef.current?.close?.()}
          className="fixed top-6 right-6 z-[70] rounded-full border border-white/30 bg-black/70 px-4 py-2 text-sm font-medium text-white shadow-lg transition hover:bg-black/80"
          aria-label="Close menu"
        >
          Close menu
        </button>
      )}
    </>
  );
});

export default SideBar;