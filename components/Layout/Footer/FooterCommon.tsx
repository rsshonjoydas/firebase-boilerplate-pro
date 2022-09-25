const FooterCommon = () => (
  <div className='pt-6 mt-6 border-t dark:border-gray-600 sm:flex sm:flex-wrap sm:-mx-4 sm:pt-12'>
    <div className='px-4 sm:w-full md:w-1/6'>
      <strong>FWR</strong>
    </div>
    <div className='px-4 mt-4 sm:w-1/2 md:w-1/4 md:mt-0'>
      <h6 className='mb-2 font-bold'>Address</h6>
      <address className='mb-4 text-sm not-italic'>123 6th St. Melbourne, FL 32904</address>
    </div>
    <div className='px-4 mt-4 sm:w-1/2 md:w-1/4 md:mt-0'>
      <h6 className='mb-2 font-bold'>Free Resources</h6>
      <p className='mb-4 text-sm'>
        Use our HTML blocks for <strong>FREE</strong>
        <em>All are MIT License</em>
      </p>
    </div>
    <div className='px-4 mt-6 md:w-1/4 md:ml-auto sm:mt-4 md:mt-0'>
      <button
        type='button'
        className='px-4 py-2 text-white bg-purple-800 rounded hover:bg-purple-900'
      >
        Get Started
      </button>
    </div>
  </div>
);

export default FooterCommon;
