"use client";

import {
  RiYoutubeFill,
  RiLinkedinFill,
  RiGithubFill,
  RiFacebookFill,
  RiInstagramFill,
} from "react-icons/ri";

import Link from "next/link";

const icons = [
  // {
  //   path: "/",
  //   name: <RiYoutubeFill />,
  // },
  {
    path: "https://www.linkedin.com/in/yongkisatrias/",
    name: <RiLinkedinFill />,
  },
  {
    path: "https://github.com/yongkisatrias",
    name: <RiGithubFill />,
  },
  {
    path: "https://www.facebook.com/yongkisatrias/",
    name: <RiFacebookFill />,
  },
  {
    path: "https://www.instagram.com/yongkisatrias/",
    name: <RiInstagramFill />,
  },
];

const Socials = ({ containerStyles, IconsStyles }) => {
  return (
    <div className={`${containerStyles}`}>
      {icons.map((icon, index) => {
        return (
          <Link href={icon.path} target="_blank" key={index}>
            <div className={`${IconsStyles}`}>{icon.name}</div>
          </Link>
        );
      })}
    </div>
  );
};

export default Socials;
