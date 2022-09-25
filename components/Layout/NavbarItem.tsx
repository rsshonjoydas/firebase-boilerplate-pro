import Link from 'next/link';
import { Children } from '../../interface';
import { LinkProps } from '../../interface/pathType';

const NavbarItem = ({ label, href, className, children }: LinkProps & Children) => (
  <Link href={href}>
    <span className={`text-base font-medium ${className}`}>
      {label}
      {children}
    </span>
  </Link>
);

export default NavbarItem;
