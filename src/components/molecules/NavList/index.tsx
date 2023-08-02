import { type NavItem } from '@/components/organisms/Header/data';
import './styles.scss';
import NavLink from '@/components/atoms/NavLink';
import { scrollToAnchor } from '@/utils/helpers';

interface NavListProps {
  navItems: NavItem[];
  toggleMenu?: () => void;
}

const NavList = ({ navItems, toggleMenu }: NavListProps) => {
  const handleClick = ({
    href,
    internal = false,
  }: {
    href: string;
    internal: boolean;
  }) => {
    if (toggleMenu) toggleMenu();
    if (!internal) window.open(href, '_blank');
    scrollToAnchor(href);
  };

  return (
    <ul className="navigation__list">
      {navItems.map((item) => {
        const { id, href, label, internal } = item;

        return (
          <NavLink
            key={id}
            label={label}
            href={href}
            handleClick={() => {
              handleClick({ href, internal });
            }}
          />
        );
      })}
    </ul>
  );
};

export default NavList;
