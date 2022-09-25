import FooterData from '../../../../adapters/data/FooterData';
import SocialIcons from '../../../SocialIcons';
import FooterCommon from '../FooterCommon';
import FooterItem from '../FooterItem';

const FooterPrimary = () => (
  <footer className='bottom-0 py-8 footer-1 sm:py-12 bg-light dark:bg-dark'>
    <div className='container px-4 mx-auto border-t dark:border-gray-600'>
      <div className='sm:flex sm:flex-wrap sm:-mx-4 md:py-4'>
        <div className='px-4 xl:w-1/6 sm:w-1/2 md:w-1/4'>
          <h5 className='mb-6 text-xl font-bold underline-animation'>Features</h5>
          <ul className='list-none'>
            {FooterData.features.map((data) => (
              <FooterItem key={data.id} href={data.path} label={data.label} />
            ))}
          </ul>
        </div>
        <div className='px-4 mt-8 sm:w-1/2 md:w-1/4 xl:w-1/6 sm:mt-0'>
          <h5 className='mb-6 text-xl font-bold underline-animation'>Resources</h5>
          <ul className='list-none'>
            {FooterData.resources.map((data) => (
              <FooterItem key={data.id} href={data.path} label={data.label} />
            ))}
          </ul>
        </div>
        <div className='px-4 mt-8 sm:w-1/2 md:w-1/4 xl:w-1/6 md:mt-0'>
          <h5 className='mb-6 text-xl font-bold underline-animation'>About</h5>
          <ul className='list-none'>
            {FooterData.about.map((data) => (
              <FooterItem key={data.id} href={data.path} label={data.label} />
            ))}
          </ul>
        </div>
        <div className='px-4 mt-8 sm:w-1/2 md:w-1/4 xl:w-1/6 md:mt-0'>
          <h5 className='mb-6 text-xl font-bold underline-animation'>Help</h5>
          <ul className='list-none'>
            {FooterData.help.map((data) => (
              <FooterItem key={data.id} href={data.path} label={data.label} />
            ))}
          </ul>
        </div>
        <div className='px-4 mt-4 sm:w-1/3 xl:w-1/6 sm:mx-auto xl:mt-0 xl:ml-auto'>
          <h5 className='mb-6 text-xl font-bold sm:text-center xl:text-left underline-animation'>
            Stay connected
          </h5>
          <div className='flex sm:justify-center xl:justify-start'>
            <SocialIcons />
          </div>
        </div>
      </div>

      <FooterCommon />
    </div>
  </footer>
);

export default FooterPrimary;
