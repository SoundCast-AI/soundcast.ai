import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  // MapPin, Phone,
  Mail,
} from "lucide-react";
import Page from "@/components/landing/page";
import Button from "@/components/landing/button";
import Head from "next/head";
import { NextSeo } from "next-seo";

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <Page>
      <NextSeo title="SoundCast.ai" description="Contact Us" />
      <Head>
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
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-8">Contact Us</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Send us a message</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div>
                  <Input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div>
                  <Textarea
                    name="message"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                </div>
                <Button primary modifier="w-full">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Contact Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {/* <div className="flex items-center space-x-2">
                <MapPin className="text-primary" />
                <span>123 Business Road, City, Country</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="text-primary" />
                <span>+1 (555) 123-4567</span>
              </div> */}
              <div className="flex items-center space-x-2">
                <Mail className="text-primary" />
                <span>vivekans2016@gmail.com</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </Page>
  );
}
