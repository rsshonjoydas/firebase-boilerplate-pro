import Link from 'next/link';
import Img from './index';

const myLoader = ({ src, width, quality }: any) =>
  `https://res.cloudinary.com/dmgbtukr2/image/upload/v1642085457/avatar/${src}?w=${width}&q=${
    quality || 75
  }`;

const Logo = () => (
  <div className="pt-1 ml-4">
    <Link href="/">
      <a>
        <Img
          loader={myLoader}
          height={40}
          width={40}
          className="rounded-md cursor-pointer"
          src="rs_xedovq.jpg"
          alt="logo"
          blurDataURL="rs_xedovq.jpg"
          placeholder="blur"
          loading="lazy"
        />
      </a>
    </Link>
  </div>
);

export default Logo;
