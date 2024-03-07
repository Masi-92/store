import { TriangleLogo } from "iconsax-react";
import ProductCard from "../../../component/product/ProductCard ";
import { Virtual, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";


const ProductSlider = ({title ,list}) => {
  return (
    <div>
    <div className="mt-20 flex flex-col items-center justify-center ">
      <p>{title}</p>
      <TriangleLogo />
    </div>
    <div className=" m-3 xl:px-80">
    <Swiper
      modules={[Virtual, Navigation, Pagination]}
      //onSwiper={setSwiperRef}
      slidesPerView={3}
      centeredSlides={true}
      spaceBetween={30}
      pagination={{
        type: "fraction",
      }}
      navigation={true}
      virtual
    >
      {list.map((product, index) => (
        <SwiperSlide key={index} virtualIndex={index}>
          <ProductCard
            productName={product.productName}
            image={product.image}
            price={product.price}
            disCount={product.disCount}
          />
        </SwiperSlide>
      ))}
    </Swiper>
    </div>
  </div>
  )
}

export default ProductSlider