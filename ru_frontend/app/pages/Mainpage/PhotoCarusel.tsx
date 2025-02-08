import React from "react";
import misha_site from "./portfolio/misha_site.png";
import numer_bot from "./portfolio/numer_bot.png";
import espire from "./portfolio/espire_shop.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

function PhotoCarusel() {
  const portfolioItems = [
    {
      image: misha_site, 
      title: "Чат в реальном времени",
      description: "Это проект, который сделал мой ученик Михаил, за лето перед 7м классом",
      link: "https://misha-site.ru",
    },
    {
      image: numer_bot,
      title: "Первый реальный проект Севы",
      description: "Бот для расчета энергий по дате рождения\nСтоимость 60.000 рублей",
      link: "https://t.me/yur_numer_bot",
    },
    {
      image: espire,
      title: "Сайт для продажи кроссовок",
      description: "Сайт для продажи кроссовок от Евгения",
      link: "https://espire-shop.ru",
    },
  ];

  return (
    // Тянем контейнер на всю высоту экрана (или как вам нужно)
    <div className="max-w-6xl mx-auto">
      <Swiper
        slidesPerView={1.1}
        spaceBetween={30}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        // Увеличиваем ширину карточек на больших экранах:
        breakpoints={{
          640: {
            slidesPerView: 1.5,
          },
          1024: {
            slidesPerView: 1.5, // можно поставить 2.5 или 3 — зависит от макета
          },
        }}
        modules={[Pagination, Autoplay]}
        className="mySwiper mt-8 !pb-12" // тянем на всю высоту
      >
        {portfolioItems.map((item, index) => (
          <SwiperSlide key={index}>
            <a
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block group" 
            >
              <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl glass-effect overflow-hidden flex flex-col h-[400px] lg:h-[600px]">
                {/* Верхняя часть: изображение */}
                <div className="relative aspect-video">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="text-white text-lg font-bold">
                      Перейти →
                    </span>
                  </div>
                </div>

                {/* Нижняя часть: заголовок, текст */}
                <div className="p-4 flex-1 flex flex-col justify-center">
                  <h3 className="text-xl font-bold text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-white text-sm whitespace-pre-line">
                    {item.description}
                  </p>
                </div>
              </div>
            </a>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default PhotoCarusel;