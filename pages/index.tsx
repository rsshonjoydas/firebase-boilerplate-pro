import type { NextPage } from 'next';
import Layout from '../components/Layout';

const Home: NextPage = () => (
  <Layout title='Home'>
    <h2>RS Shonjoy - Roboto</h2>
    <h1 className='font-cursive'>RS Shonjoy - Cursive</h1>
    <h2 className='font-poppins'>RS Shonjoy - Poppins</h2>
    <h2 className='font-montserrat'>RS Shonjoy - Montserrat</h2>
    <p className='text-primary-600'>RS Shonjoy</p>
  </Layout>
);

export default Home;
