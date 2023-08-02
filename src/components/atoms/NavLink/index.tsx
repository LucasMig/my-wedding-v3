import './styles.scss';

interface NavLinkProps {
  label: string;
  href?: string;
  styleClass?: string;
  handleClick: () => void;
}

const NavLink = ({ label, styleClass, handleClick }: NavLinkProps) => {
  return (
    <li className={`navlink ${styleClass ?? ''}`} onClick={handleClick}>
      <a className="navlink__anchor">{label}</a>
    </li>
  );
};

export default NavLink;
