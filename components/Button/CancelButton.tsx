import { motion } from 'framer-motion';

const CancelButton = ({ label, onClick }: any) => (
  <motion.button
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.9 }}
    className='px-4 py-2 mt-5 font-semibold tracking-wider text-white uppercase bg-gray-500 rounded-md hover:bg-gray-600'
    onClick={onClick}
    type='submit'
  >
    {label}
  </motion.button>
);

export default CancelButton;
