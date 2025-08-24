import Image from 'next/image';

export function DfacLogo() {
  return (
    <Image
      src="/image/Recurso-2.png.webp"
      alt="DFAC Logo"
      width={130}
      height={45}
      priority
    />
  );
}
