import React from "react";
import { ExternalLink } from "lucide-react";
import Marquee from 'react-marquee';

const AnnouncementStrip = () => {
  const announcements = [
    {
      text: "Click here for e-Library Software (for DSEU Faculty Members)",
      link: "#",
    },
    {
      text: "UGC Guidelines on Anti-Ragging",
      link: "#",
    },
  ];

  const marqueeText = announcements.map((announcement, index) => (
    <span key={index}>
      <a
        href={announcement.link}
        className="flex items-center hover:text-blue-800 transition-colors mx-4 text-blue-600"
      >
        <ExternalLink className="w-4 h-4 mr-2" />
        {announcement.text}
      </a>
      {index !== announcements.length - 1 && (
        <span className="mx-4 text-gray-400">|</span>
      )}
    </span>
  ));

  return (
    <div className="flex bg-white border-y border-gray-200">
      <div className="bg-blue-600 text-white flex items-center px-4">
        <span className="text-lg font-bold">Announcements</span>
      </div>
      <div className="h-10 flex items-center overflow-hidden relative w-full">
        <Marquee text={marqueeText} />
      </div>
    </div>
  );
};

export default () => (
  <>
    <AnnouncementStrip />
  </>
);