import { Metadata } from "next";
import React from "react";
import contentData1 from "@/components/Content/contact.json";
import ContactInfo from "@/components/Content/ContactInfo.json";
import Page from "../components/Contact/Page";
import { headers } from "next/headers";
import content from "@/components/Content/subDomainUrlContent.json";
export function generateMetadata() {
  const headersList = headers();
  const subdomain = headersList.get("x-subdomain");
  const Data: any = content[subdomain as keyof typeof content];
  const contentData = JSON.parse(
    JSON.stringify(contentData1)
      .split("[location]")
      .join(Data?.name || ContactInfo.location)
      .split("[phone]")
      .join(ContactInfo.No),
  );
  return {
    title: {
      absolute: contentData.metaTitle,
    },
    description: contentData.metaDescription,
    alternates: {
      canonical: `${ContactInfo.baseUrl}contact`,
    },
  };
}

const page = () => {
  return (
    <div className="">
      <Page />
    </div>
  );
};

export default page;
