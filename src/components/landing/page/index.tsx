import Head from "next/head";
import Navigation from "@/components/landing/navigation";
import { cn } from "@/lib/utils";

interface IProps {
  children: React.ReactNode;
}

const Page = ({ children }: IProps) => (
  <div>
    <Head>
      <link rel="icon" href="/logo.svg" />
    </Head>
    <div className={cn(`min-h-screen flex flex-col`)}>
      <Navigation />
      {children}
    </div>
  </div>
);

export default Page;
