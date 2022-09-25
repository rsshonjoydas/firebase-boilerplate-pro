import Image from 'next/image';
import { useRef } from 'react';

const Img = ({ width, height, src, alt, loading, blurDataURL, placeholder, ...rest }: any) => {
  const lazyRoot = useRef(null);

  return (
    <Image
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
