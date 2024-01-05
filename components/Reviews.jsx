"use client";

import Image from "next/image";

import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

// Import Swiper React Components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper Styles
import "swiper/css";
import "swiper/css/pagination";

// Import Required Modules
import { Pagination } from "swiper/modules";

const reviewsData = [
  {
    avatar: "/reviews/avatar-1.png",
    name: "person 1",
    job: "cool jobs",
    review:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat veniam excepturi repellendus sunt temporibus ut!",
  },
  {
    avatar: "/reviews/avatar-2.png",
    name: "person 2",
    job: "cool jobs",
    review:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat veniam excepturi repellendus sunt temporibus ut!",
  },
  {
    avatar: "/reviews/avatar-3.png",
    name: "person 3",
    job: "cool jobs",
    review:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat veniam excepturi repellendus sunt temporibus ut!",
  },
  {
    avatar: "/reviews/avatar-4.png",
    name: "person 4",
    job: "cool jobs",
    review:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat veniam excepturi repellendus sunt temporibus ut!",
  },
  {
    avatar: "/reviews/avatar-5.png",
    name: "person 5",
    job: "cool jobs",
    review:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat veniam excepturi repellendus sunt temporibus ut!",
  },
  {
    avatar: "/reviews/avatar-6.png",
    name: "person 6",
    job: "cool jobs",
    review:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat veniam excepturi repellendus sunt temporibus ut!",
  },
];

const Reviews = () => {
  return (
    <section className="mb-12 xl:mb-32">
      <div className="container mx-auto">
        <h2 className="section-title mb-12 text-center mx-auto">Reviews</h2>
        {/* Slider */}
        <Swiper
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2 },
            1400: { slidesPerView: 3 },
          }}
          spaceBetween={30}
          modules={[Pagination]}
          pagination={{
            clickable: true,
          }}
          className="h-[350px]"
        >
          {reviewsData.map((person, index) => {
            return (
              <SwiperSlide key={index}>
                <Card className="bg-tertiary dark:bg-secondary/40 p-8 min-h-[300px]">
                  <CardHeader className="p-0 mb-10">
                    <div className="flex items-center gap-x-4">
                      {/* Image */}
                      <Image
                        src={person.avatar}
                        width={70}
                        height={70}
                        alt="profile-pic"
                        priority
                      />
                      {/* Name */}
                      <div className="flex flex-col">
                        <CardTitle>{person.name}</CardTitle>
                        <p>{person.job}</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardDescription>{person.review}</CardDescription>
                </Card>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
};

export default Reviews;
