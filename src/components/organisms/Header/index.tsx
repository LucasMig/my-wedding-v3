import { navItems } from '@/components/organisms/Header/data';

import './styles.scss';
import useScreenWidth from '@/hooks/useScreenWidth';
import { useState } from 'react';
import NavList from '@/components/molecules/NavList';
import { scrollToAnchor } from '@/utils/helpers';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(true);
  const { isMobile } = useScreenWidth();
  const mapItem = navItems.find((item) => item.href === '#map');

  const handleMenuOpen = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      {isMobile && (
        <div>
          <div className={`${isMenuOpen ? 'menu--open' : 'menu--closed'}`} />
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
              <NavList
                navItems={navItems.filter((item) => item.id !== mapItem?.id)}
              />
            </ul>
          </nav>
        </div>
      )}
      <div className="header__navbar">
        {isMobile ? (
          <img
            src="/icons/hamburger.webp"
            alt="menu-icon"
            className="navigation__icon"
            onClick={handleMenuOpen}
          />
        ) : (
          <NavList navItems={navItems.slice(0, navItems.length / 2)} />
        )}
        <img
          src="/images/logo-square-no-bg.webp"
          alt="pri-e-lucas-logo"
          className="navigation__logo"
        />
        {isMobile ? (
          <img
            src="/icons/location.webp"
            alt="location-icon"
            className="navigation__icon"
            onClick={() => {
              scrollToAnchor(mapItem?.href ?? '#');
            }}
          />
        ) : (
          <NavList navItems={navItems.slice(navItems.length / 2)} />
        )}
      </div>
    </header>
  );
};

export default Header;
