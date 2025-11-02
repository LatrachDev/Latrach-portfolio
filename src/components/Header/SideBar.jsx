// components/Header/SideBar.jsx
import React, { forwardRef, useImperativeHandle, useRef, useState } from 'react';
import StaggeredMenu from '../StaggeredMenu';

const menuItems = [
  { label: 'Home', link: '/' },
  { label: 'About', link: '/' },
  { label: 'Gallery', link: '#gallery' },
  { label: 'Dev', link: '#dev' },
  { label: 'Contact', link: '#contact' },
];

const socialItems = [
  { label: 'Instagram', link: 'https://instagram.com/mohammed_latrach' },
  { label: 'GitHub', link: 'https://github.com/LatrachDev' },
  { label: 'LinkedIn', link: 'https://www.linkedin.com/in/latrachdev1/' },
  { label: 'WhatsApp', link: 'https://wa.me/+212645338599' },
  { label: 'Behance', link: 'https://www.behance.net/latrach' },
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