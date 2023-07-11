import './styles.scss';

interface NavLinkProps {
  label: string;
  href?: string;
  styleClass?: string;
}

const NavLink = ({ label, href, styleClass }: NavLinkProps) => {
  return (
    <li className={`navlink ${styleClass ?? ''}`}>
      <a href={href ?? '#'} className="navlink__anchor">
        {label}
      </a>
    </li>
  );
};

export default NavLink;
