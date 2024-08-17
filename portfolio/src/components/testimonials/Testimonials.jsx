import styles from "./Testimonials.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import client1 from "@assets/client1.webp";
import client2 from "@assets/client2.webp";
import client3 from "@assets/client3.webp";
const Testimonials = () => {
  const testimonials = [
    {
      name: "Elon Musk",
      imgURL: client1,
      role: "CEO, Tesla,SpaceX",
      descriptions: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat`,
    },
    {
      name: "Elizabeth Holmes",
      imgURL: client2,
      role: "CEO,Theranos Labs",
      descriptions: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat`,
    },
    {
      name: "Donald Trump",
      imgURL: client3,
      role: "President, United States",
      descriptions: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat`,
    },
  ];
  return (
    <div className={`${styles.testimonials_wrapper} section`} id="testimonials">
      <div className={`section_title`}>
        <h2>Testimonials</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat
        </p>
      </div>
      <Swiper
        spaceBetween={30}
        slidesPerView={2}
        className={styles.swiper_component}
        loop
        autoplay={{ delay: 2500 }}
        modules={[Autoplay]}
        breakpoints={{
          0: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
        }}
      >
        {testimonials.map((client) => (
          <SwiperSlide key={client.name}>
            <div className={styles.testimonial}>
              <img src={client.imgURL} alt={client.name} />
              <p>{client.descriptions}</p>
              <h4>
                {client.name} <span>{client.role}</span>{" "}
              </h4>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Testimonials;
