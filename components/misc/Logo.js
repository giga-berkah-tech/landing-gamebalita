import Image from 'next/image';
import Icon from '../../public/assets/logo_asset.jpg';

const Logo = ({ width = 40, height = 40 }) => {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
      <Image
        src={Icon}
        alt="Logo XinChat"
        width={width}
        height={height}
        className="rounded-md"
      ></Image>
      <h2 className="font-semibold">
        Balita <span className="text-purple-500">Belajar</span>
      </h2>
    </div>
  );
};

export default Logo;
