import Link from 'next/link';
import { LinkProps } from '../../../interface/pathType';

const FooterItem = ({ label, href }: LinkProps) => (
  <li className="mb-2 cursor-pointer">
    <Link href={href}>
      <span className="border-b border-transparent border-solid link link-underline">{label}</span>
    </Link>
  </li>
);

export default FooterItem;
