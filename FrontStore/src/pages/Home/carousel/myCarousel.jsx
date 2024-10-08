import { Carousel } from "@material-tailwind/react";
import { IconButton } from "@mui/material";
import img1 from "../../../assets/images/photo_2024-03-07_15-36-20.jpg"
import img2 from "../../../assets/images/img2.jpg"
import img3 from "../../../assets/images/img3.jpg"
//import img4 from "../../../assets/images/photo_2024-03-07_15-37-31.jpg"


export const MyCarousel = () => {
  return (
    <Carousel
      className="rounded-xl h-48 sm:h-[600px]"
      prevArrow={({ handlePrev }) => (
        <IconButton
          variant="text"
          color="white"
          size="lg"
          onClick={handlePrev}
          className="!absolute top-2/4 left-4 -translate-y-2/4"
        >
          <svg
            xmlns="https://source.unsplash.com/random?tea"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="h-6 w-6  "
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
            />
          </svg>
        </IconButton>
      )}
      nextArrow={({ handleNext }) => (
        <IconButton
          variant="text"
          color="white"
          size="lg"
          onClick={handleNext}
          className="!absolute top-2/4 !right-4 -translate-y-2/4 "
        >
          <svg
            xmlns="https://source.unsplash.com/random?tea"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="h-6 w-6 "
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
            />
          </svg>
        </IconButton>
      )}
    >
      <img
        src={img1}
        alt="image 1"
        className="h-full w-full object-cover object-center  transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300"
      />
      <img
        src={img2}
        alt="image 2"
        className="h-full w-full object-cover object-center transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300"
      />
      <img
          src={img3}
        alt="image 3"
        className="h-full w-full object-cover object-center transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300"
      />
    </Carousel>
  );
};
