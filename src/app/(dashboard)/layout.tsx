import Image from "next/image";
import Link from "next/link";
import Menu from "@/components/Menu";
import Navbar from "@/components/Navbar";
export default function DashboardLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <div className="h-screen flex ">
        {/* left */}
        <div className="w-[14%] md:[8%] lg:w-[16%] xl:w-[14%] ">
        <Link href="/" className="flex items-center justify-center lg:justify-start gap-2">
        <Image src="/logo.png" alt="logo" width={32} height={32}/>
        <span className="hidden lg:block">Harmony</span>
        </Link>
        <Menu/>
        </div>
        {/* Right */}
        <div className="w-[86%] md:[92%] lg:w-[84%] xl:w-[86%] bg-[]">
          <Navbar />
          {children}
          </div>
      </div>
    );
  }