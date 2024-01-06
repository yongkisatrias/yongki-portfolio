import { Laptop, Server, Smartphone } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const servicesData = [
  {
    icon: <Laptop size={72} strokeWidth={0.8} />,
    title: "Front-End Web Development",
    description:
      "Elevate your online presence with expertly crafted front-end web development services. Transforming ideas into visually stunning and user-friendly websites.",
  },
  {
    icon: <Server size={72} strokeWidth={0.8} />,
    title: "Back-End Web Development",
    description:
      "Unlock seamless functionality, robust databases, and optimal performance for your website. Let's turn your digital vision into a dynamic reality.",
  },
  {
    icon: <Smartphone size={72} strokeWidth={0.8} />,
    title: "Mobile Development",
    description:
      "Unlock the potential of your ideas with our personalized mobile development services! Elevate your digital presence and showcase your unique ideas through cutting-edge, user-friendly mobile applications.",
  },
];

const Services = () => {
  return (
    <section className="mb-12 xl:mb-36">
      <div className="container mx-auto">
        <h2 className="section-title mb-12 xl:mb-24 text-center mx-auto">
          My Services
        </h2>
        {/* Grid Items */}
        <div className="grid xl:grid-cols-3 justify-center gap-y-12 xl:gap-y-24 xl:gap-x-8">
          {servicesData.map((item, index) => {
            return (
              <Card
                className="w-full max-w-[424px] h-[300px] flex flex-col pt-16 pb-10 justify-center items-center relative"
                key={index}
              >
                <CardHeader className="text-primary absolute -top-[60px]">
                  <div className="w-[140px] h-[80px] bg-white dark:bg-background flex justify-center items-center">
                    {item.icon}
                  </div>
                </CardHeader>
                <CardContent className="text-center">
                  <CardTitle className="mb-4">{item.title}</CardTitle>
                  <CardDescription className="text-lg">
                    {item.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
