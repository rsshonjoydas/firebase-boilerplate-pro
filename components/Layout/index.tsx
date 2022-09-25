import { LayoutProps } from '../../interface';
import FooterPrimary from './Footer/Primary';
import HeaderPrimary from './Header/Primary';
import SEO from './SEO';

const Layout = ({ children, title }: LayoutProps) => (
  <>
    <SEO title={title} />
    <HeaderPrimary />
    <main className='bottom-0 pt-20 dark:bg-dark-100 bg-light-100 text-dark-300 dark:text-light-300'>
      {children}
    </main>
    {title === 'Login' ||
    title === 'Register' ||
    title === 'Verify Email' ||
    title === 'Forgot Password' ||
    title === 'Dashboard' ||
    title === 'Profile' ? null : (
      <FooterPrimary />
    )}
  </>
);

export default Layout;
