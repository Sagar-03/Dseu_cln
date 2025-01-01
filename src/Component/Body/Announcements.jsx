import React from "react";
import { ExternalLink } from "lucide-react";
import Marquee from "react-fast-marquee";

const Announcements = () => {
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

  const style = `
    @keyframes marquee {
      0% {
        transform: translateX(100%);
      }
      100% {
        transform: translateX(-100%);
      }
    }
    .animate-marquee {
      animation: marquee 30s linear infinite;
    }
    /* Pause animation on hover */
    .animate-marquee:hover {
      animation-play-state: paused;
    }
  `;

  return (
    <>
      <style>{style}</style>
      <div className="flex bg-white border-y border-gray-200">
        <div className="bg-blue-600 text-white flex items-center px-4">
          <span className="text-lg font-bold">Announcements</span>
        </div>
        
        <div className="h-10 flex items-center overflow-hidden relative w-full">
          <Marquee
            speed={40}
            pauseOnHover={true}
            gradient={false}
          >
            <div className="inline-flex items-center">
              {announcements.map((announcement, index) => (
                <a
                  key={index}
                  href={announcement.link}
                  className="flex items-center hover:text-blue-800 transition-colors mx-4 text-blue-600"
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  <span>{announcement.text}</span>
                  {index !== announcements.length - 1 && (
                    <span className="mx-4 text-gray-400">|</span>
                  )}
                </a>
              ))}
              {/* Duplicate the announcements for continuous scrolling */}
              {announcements.map((announcement, index) => (
                <a
                  key={`dup-${index}`}
                  href={announcement.link}
                  className="flex items-center hover:text-blue-800 transition-colors mx-4 text-blue-600"
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  <span>{announcement.text}</span>
                  {index !== announcements.length - 1 && (
                    <span className="mx-4 text-gray-400">|</span>
                  )}
                </a>
              ))}
            </div>
          </Marquee>
        </div>
      </div>
    </>
  );
};

export default Announcements;