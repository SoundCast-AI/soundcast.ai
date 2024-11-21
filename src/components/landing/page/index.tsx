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
      <script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-2EFS549HWS"
      ></script>
      <script
        dangerouslySetInnerHTML={{
          __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-2EFS549HWS');
            `,
        }}
      />
    </Head>
    <div className={cn(`min-h-screen flex flex-col`)}>
      <Navigation />
      {children}
      <Footer />
    </div>
  </div>
);

export default Page;
