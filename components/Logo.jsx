import Link from "next/link";
import Image from "next/image";

const Logo = () => {
  return (
    <Link href="/">
      <Image
        className="rounded"
        src="/yongki-logo.png"
        width={45}
        height={45}
        priority
        alt="logo"
      />
    </Link>
  );
};

export default Logo;
