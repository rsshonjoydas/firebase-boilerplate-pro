import { motion } from 'framer-motion';
import { useRef } from 'react';

const Img = ({ width, height, src, alt, loading, blurDataURL, placeholder, ...rest }: any) => {
  const lazyRoot = useRef(null);

  return (
    <motion.img
      lazyRoot={lazyRoot}
      width={width}
      height={height}
      src={src}
      alt={alt}
      blurDataURL={blurDataURL}
      placeholder={placeholder}
      loading={loading}
      {...rest}
    />
  );
};

export default Img;
