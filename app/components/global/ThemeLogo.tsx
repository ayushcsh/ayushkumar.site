import Image from "next/image";

export default function ThemeLogo() {
  return (
    <span className="relative block h-10 w-10 overflow-hidden rounded-md">
      <Image
        src="/light_logo.png"
        width={42}
        height={42}
        alt="Ayush Kumar logo"
        priority
        className="h-10 w-10 object-cover dark:hidden"
      />
      <Image
        src="/logo.png"
        width={42}
        height={42}
        alt="Ayush Kumar logo"
        priority
        className="hidden h-10 w-10 object-cover dark:block"
      />
    </span>
  );
}
