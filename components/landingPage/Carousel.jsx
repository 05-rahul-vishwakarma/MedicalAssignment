/* eslint-disable @next/next/no-img-element */
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import React, { useEffect, useState } from 'react'

const testimonialData = [
    {
        id: 1,
        name: "Jane Cooper",
        testimonial: "This platform has transformed my learning experience. Highly recommend!",
        image: "https://randomuser.me/api/portraits/women/1.jpg",
    },
    {
        id: 2,
        name: "John Doe",
        testimonial: "Great interface, easy to use, and the support is amazing!",
        image: "https://randomuser.me/api/portraits/men/2.jpg",
    },
    {
        id: 3,
        name: "Mary Smith",
        testimonial: "The lessons are well-structured and easy to follow. Very satisfied!",
        image: "https://randomuser.me/api/portraits/women/3.jpg",
    },
    {
        id: 4,
        name: "James Johnson",
        testimonial: "I love the hands-on approach of the platform. I learned a lot.",
        image: "https://randomuser.me/api/portraits/men/4.jpg",
    },
];


export default function CarouselCard() {
    const [isAutoplay, setIsAutoplay] = useState(true); // To control autoplay
    const autoplayInterval = 3000; // 3 seconds interval

    useEffect(() => {
        let interval;
        if (isAutoplay) {
            interval = setInterval(() => {
                const nextButton = document.querySelector(".carousel-next");
                if (nextButton) {
                    nextButton.click(); // Trigger next item
                }
            }, autoplayInterval);
        }

        return () => {
            if (interval) clearInterval(interval);
        };
    }, [isAutoplay]);

    return (
        <Carousel opts={{
            align: "start",
            loop: true,
        }}
            className="w-full h-full">
            <CarouselContent>
                {
                    testimonialData?.map((data, i) => (
                        <CarouselItem key={i} >
                            <ReviewCard />
                        </CarouselItem>
                    ))
                }
            </CarouselContent>
            <CarouselPrevious className="carousel-previous hidden " />
            <CarouselNext className="carousel-next hidden " />
        </Carousel>
    )
}

const ReviewCard = () => {
    return (
        <div className="p-4 border border-gray-200 shadow-md bg-white rounded-md ">
            {/* Header Section */}
            <div className="flex items-center">
                {/* Avatar */}
                <img
                    src="https://randomuser.me/api/portraits/women/44.jpg"
                    alt="User Avatar"
                    className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                    <h2 className="text-lg font-bold">Jane Cooper</h2>
                    <p className="text-gray-500 text-sm">12/4/17</p>
                </div>
            </div>

            {/* Star Rating */}
            <div className="flex mt-4">
                {[...Array(5)].map((star, index) => (
                    <svg
                        key={index}
                        xmlns="http://www.w3.org/2000/svg"
                        fill="yellow"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="w-6 h-6 text-yellow-500"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M12 17.75L7.618 20.44c-.462.266-1.036-.133-.956-.682l.896-5.219L3.24 10.87c-.382-.372-.17-1.03.351-1.098l5.337-.755 2.388-4.84c.228-.46.866-.46 1.094 0l2.388 4.84 5.337.755c.521.068.733.726.351 1.098l-3.317 3.669.896 5.219c.08.549-.494.948-.956.682L12 17.75z"
                        />
                    </svg>
                ))}
            </div>

            {/* Review Text */}
            <p className="text-gray-600 mt-4 max-md:text-sm ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sem velit viverra amet faucibus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sem velit viverra amet faucibus.
            </p>
        </div>
    );
};
