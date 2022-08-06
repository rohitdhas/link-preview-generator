/* eslint-disable @next/next/no-img-element */
import { useState } from "react";
import { TabView, TabPanel } from "primereact/tabview";
import { Card } from "primereact/card";
import { getDomain, selectImageURL, modifyDescription } from "../utils/index";
import Link from "next/link";

export default function Tabs({ data }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const bannerImg = selectImageURL(data.favicons, data.images);
  data.img = bannerImg;
  const { url } = data;

  return (
    <TabView
      className="w-auto mx-4 md:w-[550px] md:mx-auto my-6 shadow-md !rounded-md"
      activeIndex={activeIndex}
      onTabChange={(e) => setActiveIndex(e.index)}
    >
      <TabPanel header="Twitter">
        <TwitterCard data={data} url={url} />
      </TabPanel>
      <TabPanel header="Instagram">
        <InstagramCard data={data} url={url} />
      </TabPanel>
      <TabPanel header="Facebook">
        <FacebookCard data={data} url={url} />
      </TabPanel>
      <TabPanel header="Other">
        <PeerlistCard data={data} url={url} />
      </TabPanel>
    </TabView>
  );
}

function TwitterCard({ data, url }) {
  const header = <img className="rounded-t-md" alt="Card" src={data.img} />;
  return (
    <Card header={header}>
      <div className="title font-bold text-black">
        {data.title ? data.title.split(" ").slice(0, 15).join(" ") : ""}
      </div>
      <div className="description text-black text-sm">
        {modifyDescription(data.description, 20)}
      </div>
      <a
        href={url}
        target="_blank"
        className="domain text-gray-600 text-sm mt-2 cursor-pointer block"
        rel="noreferrer"
      >
        {getDomain(url)}
      </a>
    </Card>
  );
}

function FacebookCard({ data, url }) {
  const header = <img alt="Card" src={data.img} />;
  return (
    <Card header={header} className="!bg-gray-100">
      <a
        href={url}
        target="_blank"
        className="domain text-gray-600 text-sm mb-2 cursor-pointer block"
        rel="noreferrer"
      >
        {getDomain(url)}
      </a>
      <div className="title font-bold text-black">
        {data.title ? data.title.split(" ").slice(0, 15).join(" ") : ""}
      </div>
      <div className="description text-black">
        {modifyDescription(data.description, 20)}
      </div>
    </Card>
  );
}

function InstagramCard({ data, url }) {
  const header = <img className="rounded-t-3xl" alt="Card" src={data.img} />;
  return (
    <Link href={url} target="_blank">
      <a target="_blank">
        <Card header={header} className="!bg-gray-100 !rounded-3xl">
          <div className="title font-bold text-black text-sm">
            {data.title ? data.title.split(" ").slice(0, 15).join(" ") : ""}
          </div>
          <div className="description text-gray-700 text-xs mt-2">
            {modifyDescription(data.description, 20)}
          </div>
        </Card>
      </a>
    </Link>
  );
}

function PeerlistCard({ data, url }) {
  return (
    <Link href={url} target="_blank">
      <a target="_blank">
        <div className="flex justify-between bg-gray-100 rounded-md">
          <div className="mr-2 p-2">
            <div className="title font-bold text-black text-sm">
              {data.title ? data.title.split(" ").slice(0, 15).join(" ") : ""}
            </div>
            <div className="description text-gray-700 text-xs mt-2">
              {modifyDescription(data.description, 10)}
            </div>
          </div>
          <img
            className="h-[120px] w-auto rounded-r-md"
            alt="Card"
            src={data.img}
          />
        </div>
      </a>
    </Link>
  );
}
