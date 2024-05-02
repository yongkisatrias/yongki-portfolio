import DevImg from "./DevImg";
import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import {
  User2,
  MailIcon,
  HomeIcon,
  PhoneCall,
  GraduationCap,
  Calendar,
  Briefcase,
} from "lucide-react";

const infoData = [
  {
    icon: <User2 size={20} />,
    text: "Yongki Satria Sanjaya",
  },
  {
    icon: <PhoneCall size={20} />,
    text: "+62-812-2573-3651",
  },
  {
    icon: <MailIcon size={20} />,
    text: "Yongkisatrias@gmail.com",
  },
  {
    icon: <Calendar size={20} />,
    text: "Born on 9 June, 2001",
  },
  {
    icon: <GraduationCap size={20} />,
    text: "Pijar Camp by Telkom Indonesia",
  },
  {
    icon: <HomeIcon size={20} />,
    text: "Kudus, Central Java, Indonesia",
  },
];

const qualificationData = [
  {
    title: "education",
    data: [
      {
        university: "Pijar Camp by Telkom Indonesia",
        qualification: "Bootcamp Fullstack Web & Mobile Developer",
        years: "Sep 2023 - Dec 2023",
      },
      {
        university: "Proklamasi 45 Yogyakarta University",
        qualification: "Management",
        years: "2021 - 2023 (not finished)",
      },
      {
        university: "Muhammadiyah Kudus Senior High School",
        qualification: "Natural Science / Ilmu Pengetahuan Alam (IPA)",
        years: "2016 - 2019",
      },
    ],
  },
  {
    title: "experience",
    data: [
      {
        company: "Freelance",
        role: "Seller Accounts and Online Game Items",
        years: "2020 - Aug 2023",
      },
      {
        company: "Tempo Gelato",
        role: "Store Cashier",
        years: "2019 - 2020",
      },
    ],
  },
];

const skillData = [
  {
    title: "frontend",
    data: [
      {
        imgPath: "/logo-skill/html-1.svg",
        name: "HTML",
      },
      {
        imgPath: "/logo-skill/css-3.svg",
        name: "CSS",
      },
      {
        imgPath: "/logo-skill/logo-javascript.svg",
        name: "JavaScript",
      },
      {
        imgPath: "/logo-skill/typescript-icon-svgrepo-com.svg",
        name: "TypeScript",
      },
      {
        imgPath: "/logo-skill/bootstrap-5-1.svg",
        name: "Bootstrap",
      },
      {
        imgPath: "/logo-skill/tailwind-css-2.svg",
        name: "Tailwind CSS",
      },
      {
        imgPath: "/logo-skill/sass-1.svg",
        name: "Sass",
      },
      {
        imgPath: "/logo-skill/react-2.svg",
        name: "React.js",
      },
      {
        imgPath: "/logo-skill/next-js.svg",
        name: "Next.js",
      },
      {
        imgPath: "/logo-skill/shadcn-ui.svg",
        name: "shadcn/ui",
      },
    ],
  },
  {
    title: "backend",
    data: [
      {
        imgPath: "/logo-skill/nodejs-1.svg",
        name: "Node.js",
      },
      {
        imgPath: "/logo-skill/expressjs-icon.svg",
        name: "Express.js",
      },
      {
        imgPath: "/logo-skill/postgresql.svg",
        name: "PostgreSQL",
      },
      {
        imgPath: "/logo-skill/prisma-svgrepo-com.svg",
        name: "Prisma",
      },
      {
        imgPath: "/logo-skill/supabase-icon.svg",
        name: "Supabase",
      },
    ],
  },
  {
    title: "mobile",
    data: [
      {
        imgPath: "/logo-skill/react-2.svg",
        name: "React Native",
      },
      {
        imgPath: "/logo-skill/firebase-icon.svg",
        name: "Firebase",
      },
    ],
  },
];

const About = () => {
  const getData = (arr, title) => {
    return arr.find((item) => item.title === title);
  };
  return (
    <section className="xl:h-[960px] pb-12 xl:py-24">
      <div className="container mx-auto">
        <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto">
          About Me
        </h2>
        <div className="flex flex-col xl:flex-row">
          {/* Image */}
          <div className="hidden xl:flex flex-1 relative">
            <DevImg
              containerStyles="bg-about_shape_light dark:bg-about_shape_dark w-[505px] h-[505px] bg-no-repeat relative"
              imgSrc="/about/yongki-about.png"
            />
          </div>
          {/* Tabs */}
          <div className="flex-1">
            <Tabs defaultValue="personal">
              <TabsList className="w-full grid xl:grid-cols-3 xl:max-w-[520px] xl:border dark:border-none">
                <TabsTrigger className="w-[162px] xl:w-auto" value="personal">
                  Personal Info
                </TabsTrigger>
                <TabsTrigger
                  className="w-[162px] xl:w-auto"
                  value="qualifications"
                >
                  Qualifications
                </TabsTrigger>
                <TabsTrigger className="w-[162px] xl:w-auto" value="skills">
                  Skills
                </TabsTrigger>
              </TabsList>
              {/* Tabs Content */}
              <div className="text-lg mt-12 xl:mt-8">
                {/* Personal */}
                <TabsContent value="personal">
                  <div className="text-center xl:text-left">
                    <h3 className="h3 mb-4">
                      Fullstack Web & Mobile Developer
                    </h3>
                    <p className="subtitle max-w-xl mx-auto xl:mx-0">
                      I am an ambitious and determined individual pursuing a
                      career in the world of programming. My high curiosity
                      motivates me to continue learning and developing my
                      technical skills. I have a passion for becoming a quality
                      fullstack developer, and I am committed to giving my best
                      in every project I work on.
                    </p>
                    {/* Icons */}
                    <div className="grid xl:grid-cols-2 gap-4 mb-12">
                      {infoData.map((item, index) => {
                        return (
                          <div
                            className="flex items-center gap-x-4 mx-auto xl:mx-0"
                            key={index}
                          >
                            <div className="text-primary">{item.icon}</div>
                            <div>{item.text}</div>
                          </div>
                        );
                      })}
                    </div>
                    {/* Languages */}
                    <div className="flex flex-col gap-y-2">
                      <div className="text-primary">Language Skill</div>
                      <div className="border-b border-border"></div>
                      <div>English, Indonesian & Javanese</div>
                    </div>
                  </div>
                </TabsContent>
                {/* Qualifications */}
                <TabsContent value="qualifications">
                  <div>
                    <h3 className="h3 mb-8 text-center xl:text-left">
                      My Awesome Journey
                    </h3>
                    {/* Experience & Education Wrapper */}
                    <div className="grid md:grid-cols-2 gap-y-8">
                      {/* Experience */}
                      <div className="flex flex-col gap-y-6">
                        <div className="flex gap-x-4 items-center text-[22px] text-primary">
                          <Briefcase />
                          <h4 className="capitalize font-medium">
                            {getData(qualificationData, "experience").title}
                          </h4>
                        </div>
                        {/* List */}
                        <div className="flex flex-col gap-y-8">
                          {getData(qualificationData, "experience").data.map(
                            (item, index) => {
                              const { company, role, years } = item;
                              return (
                                <div className="flex gap-x-8 group" key={index}>
                                  <div className="h-[84px] 2-[1px] bg-border relative ml-2">
                                    <div className="w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[84px] transition-all duration-500"></div>
                                  </div>
                                  <div>
                                    <div className="font-semibold text-xl leading-none mb-2">
                                      {company}
                                    </div>
                                    <div className="text-lg leading-none text-muted-foreground mb-4">
                                      {role}
                                    </div>
                                    <div className="text-base font-medium">
                                      {years}
                                    </div>
                                  </div>
                                </div>
                              );
                            }
                          )}
                        </div>
                      </div>
                      {/* Education */}
                      <div className="flex flex-col gap-y-6">
                        <div className="flex gap-x-4 items-center text-[22px] text-primary">
                          <GraduationCap size={28} />
                          <h4 className="capitalize font-medium">
                            {getData(qualificationData, "education").title}
                          </h4>
                        </div>
                        {/* List */}
                        <div className="flex flex-col gap-y-8">
                          {getData(qualificationData, "education").data.map(
                            (item, index) => {
                              const { university, qualification, years } = item;
                              return (
                                <div className="flex gap-x-8 group" key={index}>
                                  <div className="h-[84px] 2-[1px] bg-border relative ml-2">
                                    <div className="w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[84px] transition-all duration-500"></div>
                                  </div>
                                  <div>
                                    <div className="font-semibold text-xl leading-none mb-2">
                                      {university}
                                    </div>
                                    <div className="text-lg leading-none text-muted-foreground mb-4">
                                      {qualification}
                                    </div>
                                    <div className="text-base font-medium">
                                      {years}
                                    </div>
                                  </div>
                                </div>
                              );
                            }
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </TabsContent>
                {/* Skills */}
                <TabsContent value="skills">
                  <div className="text-center xl:text-left">
                    <h3 className="h3 mb-8">
                      Languages, frameworks & libraries I use
                    </h3>
                    {/* Front-End */}
                    <div className="mb-5">
                      <h4 className="text-xl font-semibold mb-2">
                        Front-End Web Development
                      </h4>
                      <div className="border-b border-border mb-4"></div>
                      {/* Skill List */}
                      <div className="flex flex-wrap gap-3">
                        {getData(skillData, "frontend").data.map(
                          (item, index) => {
                            const { imgPath, name } = item;
                            return (
                              <div className="w-16 h-16 mb-5">
                                <div className="flex justify-center">
                                  <div
                                    key={index}
                                    className="flex items-center w-[50px] h-[50px]"
                                  >
                                    <Image
                                      src={imgPath}
                                      width={50}
                                      height={50}
                                      alt="logo"
                                      priority
                                    />
                                  </div>
                                </div>
                                <div className="text-sm mt-2 text-center">
                                  {name}
                                </div>
                              </div>
                            );
                          }
                        )}
                      </div>
                    </div>
                    {/* Back-End */}
                    <div className="mb-5">
                      <h4 className="text-xl font-semibold mb-2">
                        Back-End Web Development
                      </h4>
                      <div className="border-b border-border mb-4"></div>
                      {/* Skill List */}
                      <div className="flex flex-wrap gap-3">
                        {getData(skillData, "backend").data.map(
                          (item, index) => {
                            const { imgPath, name } = item;
                            return (
                              <div className="w-16 h-16 mb-5">
                                <div className="flex justify-center">
                                  <div
                                    key={index}
                                    className="flex items-center w-[50px] h-[50px]"
                                  >
                                    <Image
                                      src={imgPath}
                                      width={50}
                                      height={50}
                                      alt="logo"
                                      priority
                                    />
                                  </div>
                                </div>
                                <div className="text-sm mt-2 text-center">
                                  {name}
                                </div>
                              </div>
                            );
                          }
                        )}
                      </div>
                    </div>
                    {/* Mobile */}
                    <div className="mb-5">
                      <h4 className="text-xl font-semibold mb-2">
                        Mobile Development
                      </h4>
                      <div className="border-b border-border mb-4"></div>
                      {/* Skill List */}
                      <div className="flex flex-wrap gap-3">
                        {getData(skillData, "mobile").data.map(
                          (item, index) => {
                            const { imgPath, name } = item;
                            return (
                              <div className="w-16 h-16 mb-5">
                                <div className="flex justify-center">
                                  <div
                                    key={index}
                                    className="flex items-center w-[50px] h-[50px]"
                                  >
                                    <Image
                                      src={imgPath}
                                      width={50}
                                      height={50}
                                      alt="logo"
                                      priority
                                    />
                                  </div>
                                </div>
                                <div className="text-sm mt-2 text-center">
                                  {name}
                                </div>
                              </div>
                            );
                          }
                        )}
                      </div>
                    </div>
                  </div>
                </TabsContent>
              </div>
            </Tabs>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
