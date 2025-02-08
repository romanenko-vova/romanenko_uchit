import { useEffect, useState } from "react";
import axios from "axios";
import i_am from "./i.png";
import blob from "./blob.svg";
import { FaUserCircle } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import Trajectory_card from "./Trajectory_card";

export function MainPage() {
  return (
    <div className="min-h-screen bg-[#141313]">
      <header className="bg-black bg-opacity-50 text-white p-4 flex justify-between items-center">
        <h1 className="text-xl font-bold">Романенко Учит</h1>
        <FaUserCircle className="text-3xl cursor-pointer hover:text-pink-300" />
      </header>
      <div className="flex flex-col md:flex-row items-center justify-center h-full">
        <div className="flex flex-col items-center justify-center h-1/2 md:h-full w-full md:w-1/2 p-4 glass-effect">
          <h1 className="text-4xl font-bold text-white neon-text">
            Романенко Учит
          </h1>
          <p className="text-lg text-white mt-4">
            Школа программирования для подростков
          </p>
        </div>
        <div className="h-1/2 md:h-full w-full md:w-1/2 relative">
          <img
            src={blob}
            alt="blob"
            className="w-full h-full absolute top-0 left-0"
          />
          <img
            src={i_am}
            alt="main_page"
            className="w-full h-full object-cover relative z-20"
          />
        </div>
      </div>
      <div className="py-12 px-8 text-center border-t-2 border-white">
        <h2 className="text-3xl font-bold text-white mb-4">Чему мы учим?</h2>
        <Swiper
          slidesPerView={1.2}
          spaceBetween={30}
          centeredSlides={true}
          //   pagination={{
          //     clickable: true,
          //   }}
          breakpoints={{
            640: {
              slidesPerView: 2.2,
            },
            1024: {
              slidesPerView: 3.2,
            },
          }}
          modules={[Pagination]}
          className="mySwiper mt-8"
        >
          <SwiperSlide>
            <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-6 rounded-xl glass-effect">
              <h3 className="text-xl font-bold text-white mb-2">
                Программирование на Python
              </h3>
              <p className="text-white">
                Изучайте Python на реальных проектах, которые встретятся в
                работе
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-gradient-to-r from-pink-500 to-red-500 p-6 rounded-xl glass-effect">
              <h3 className="text-xl font-bold text-white mb-2">
                Создание Telegram Ботов
              </h3>
              <p className="text-white">
                Учимся создавать Telegram Ботов для бизнеса. Чтобы вы
                зарабатывали на фрилансе
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-gradient-to-r from-red-500 to-orange-500 p-6 rounded-xl glass-effect">
              <h3 className="text-xl font-bold text-white mb-2">
                Создание Web-приложений
              </h3>
              <p className="text-white">
                Изучим Django, HTML, CSS, JS, React, чтобы создавать такие же
                сайты, как этот
              </p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="py-16 px-4 md:px-8 text-white">
        <h2 className="text-3xl font-bold text-center mb-12">Траектория обучения</h2>
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Вертикальная линия */}
            <div className="absolute left-8 md:left-1/2 top-0 h-full w-1 bg-gradient-to-b from-purple-500 via-pink-500 to-red-500 md:transform md:-translate-x-1/2"></div>

            {/* Этапы обучения */}
            <div className="space-y-8">
              {/* Этап 1 */}
              <Trajectory_card title="Основы Python" description="Изучение базового синтаксиса, переменных, условий и циклов" side="md:justify-end md:pr-[50%]" />

              {/* Этап 2 */}
              <Trajectory_card title="Функции и ООП" description="Работа с функциями, классами и объектами" side="md:justify-start md:pl-[50%]" />

              {/* Этап 3 */}
              <Trajectory_card title="Работа с данными" description="Изучение баз данных, API и работа с файлами" side="md:justify-end md:pr-[50%]" />

              {/* Этап 4 */}
              <Trajectory_card title="Веб-разработка" description="HTML, CSS, JavaScript и основы фронтенд-разработки" side="md:justify-start md:pl-[50%]" />

              {/* Этап 5 */}
              <Trajectory_card title="Проекты и практики" description="Реальные проекты и практики для закрепления знаний" side="md:justify-end md:pr-[50%]" />

              {/* Этап 6 */}
              <Trajectory_card title="Выпускной проект" description="Завершение обучения с выпускным проектом" side="md:justify-start md:pl-[50%]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
