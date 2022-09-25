import { LayoutProps } from '../../../interface';
import SEO from '../SEO';
import Sidebar from './Sidebar';
import TopNavigation from './TopNavigation';

const DashboardLayout = ({ children, title }: LayoutProps) => (
  <>
    <SEO title={title} />
    <Sidebar />
    <div className="min-h-screen content-container">
      <TopNavigation />
      <div className="mx-20 my-12">{children}</div>
    </div>
  </>
);

export default DashboardLayout;
