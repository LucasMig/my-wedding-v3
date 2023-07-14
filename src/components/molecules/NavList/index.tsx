import { type NavItem } from '@/components/organisms/Header/data';
import './styles.scss';
import NavLink from '@/components/atoms/NavLink';

interface NavListProps {
  navItems: NavItem[];
}

const NavList = ({ navItems }: NavListProps) => {
  return (
    <ul className="navigation__list">
      {navItems.map((item) => {
        const { id, href, label } = item;

        return <NavLink key={id} label={label} href={href} />;
      })}
    </ul>
  );
};

export default NavList;
