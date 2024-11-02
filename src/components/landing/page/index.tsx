import Head from "next/head";
import Navigation from "@/components/landing/navigation";
import { cn } from "@/lib/utils";
import Footer from "../footer";

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
      <Footer />
    </div>
  </div>
);

export default Page;
