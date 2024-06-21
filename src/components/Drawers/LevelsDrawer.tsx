import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "../ui";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
type Props = {};

const LevelsDrawer = ({}: Props) => {
  const [snapPoint, setSnapPoint] = useState<number | string | null>(0.9);
  // const [activeLevel, setActiveLevel] = useState<number>(0);
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const charactersSrc = [
    "/LevelCharacters/mrgem-bronze-character-transparent.webp",
    "/LevelCharacters/mrgem-diamond-character-transparent.webp",
    "/LevelCharacters/mrgem-gold-character-transparent.webp",
    "/LevelCharacters/mrgem-iron-character-transparent.webp",
    "/LevelCharacters/mrgem-platinum-character-transparent.webp",
    "/LevelCharacters/mrgem-sliver-character-transparent.webp",
  ];
  return (
    <Drawer
      snapPoints={[0.6, 0.9]}
      activeSnapPoint={snapPoint}
      disablePreventScroll={false}
      modal={false}
      setActiveSnapPoint={setSnapPoint}>
      <DrawerTrigger asChild>
        <div className="flex justify-between items-center gap-1 w-full">
          <h2 className="text-base font-semibold">Legendary</h2>
          <div className="text-sm leading-3">
            <p>2/10</p>
          </div>
        </div>
      </DrawerTrigger>
      <DrawerContent className="px-2 pb-2 ">
        <DrawerHeader>
          <DrawerTitle className="text-2xl font-semibold capitalize">
            Levels
          </DrawerTitle>
        </DrawerHeader>
        <div className="w-full h-screen">
          <Swiper
            slidesPerView={1}
            spaceBetween={0}
            onSlideChange={(slide) => {
              setCurrentSlide(slide.activeIndex);
            }}
            modules={[Navigation]}>
            {charactersSrc.map((src, index) => (
              <SwiperSlide className="!h-fit !flex justify-center items-center w-full">
                <div className="w-10/12 aspect-square border border-white rounded-2xl bg-gradient-to-b from-white/10 to-white/5 p-5 ">
                  <img
                    src={src}
                    className="w-full aspect-square object-contain bg-black-80 rounded-xl bg-[radial-gradient(circle,rgba(255,255,255,1)0%,rgba(255,215,0,0.75)100%);]"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="w-full text-5xl">{currentSlide}</div>
        </div>
      </DrawerContent>
    </Drawer>
  );
};

export { LevelsDrawer };
