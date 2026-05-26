import "./NavLink.css";

type NavLinkProps = {
  href: string;
  children: React.ReactNode;
  className?: string;
};

export const NavLink = ({ href, children, className = "" }: NavLinkProps) => {
  return (
    <a href={href} className={`nav-link ${className}`}>
      {children}
    </a>
  );
};