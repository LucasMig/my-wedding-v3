import { navItems } from '@/components/organisms/Header/data';

import './styles.scss';
import useScreenWidth from '@/hooks/useScreenWidth';
import NavLink from '@/components/atoms/NavLink';
import { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(true);
  const { isMobile } = useScreenWidth();
  const mapItemID = navItems.find((item) => item.href === '#map')?.id;

  const handleMenuOpen = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      {isMobile && (
        <div className={`${isMenuOpen ? 'menu--open' : 'menu--closed'}`} />
      )}

      {isMobile ? (
        <>
          <nav
            className={`navigation__container--mobile ${
              isMenuOpen ? 'open' : ''
            }`}
          >
            <img
              src="/icons/close.webp"
              alt="close-icon"
              className="navigation__close"
              onClick={handleMenuOpen}
            />
            <ul className="navigation__list">
              {navItems
                .filter((item) => item.id !== mapItemID)
                .map((item) => {
                  const { id, href, label } = item;

                  return <NavLink key={id} label={label} href={href} />;
                })}
            </ul>
          </nav>
          <img
            src="/images/logo-square-no-bg.webp"
            alt="pri-e-lucas-logo"
            className="navigation__logo"
          />
        </>
      ) : null}
    </header>
  );
};

export default Header;
