import Coin from "/G-coin.png";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "../ui";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { useDatas } from "@/hooks";
import { FingerTapIcon } from "@/assets/icons";
type Props = {};

const LevelsDrawer = ({}: Props) => {
  const { data } = useDatas();

  const [snapPoint, setSnapPoint] = useState<number | string | null>(0.9);
  // const [activeLevel, setActiveLevel] = useState<number>(0);
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  // const charactersSrc = [
  //   "/LevelCharacters/mrgem-bronze-character-transparent.webp",
  //   "/LevelCharacters/mrgem-diamond-character-transparent.webp",
  //   "/LevelCharacters/mrgem-gold-character-transparent.webp",
  //   "/LevelCharacters/mrgem-iron-character-transparent.webp",
  //   "/LevelCharacters/mrgem-platinum-character-transparent.webp",
  //   "/LevelCharacters/mrgem-sliver-character-transparent.webp",
  // ];
  const levels = [
    "iron",
    "bronze",
    "silver",
    "gold",
    "platinum",
    "diamond",
    "legendry",
  ];

  return (
    <Drawer
      snapPoints={[0.9]}
      activeSnapPoint={snapPoint}
      disablePreventScroll={false}
      modal={false}
      setActiveSnapPoint={setSnapPoint}>
      <DrawerTrigger asChild>
        <div className="flex justify-between items-center gap-1 w-full">
          <h2 className="text-base font-semibold">
            {data?.user?.current_level}
          </h2>
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
            navigation
            onSlideChange={(slide) => {
              setCurrentSlide(slide.activeIndex);
            }}
            modules={[Navigation]}>
            {data?.data?.levels &&
              Object.entries(data?.data?.levels).map(
                ([key, level]: any, index) => (
                  <SwiperSlide
                    key={`level slide--${index}--${key}`}
                    className="!h-fit !flex justify-center items-center w-full">
                    <div className="w-4/6 h-fit  rounded-2xl bg-gradient-to-b from-white/10 to-white/5 ">
                      <img
                        src={level.character}
                        className="w-full h-auto aspect-[3/4] object-contain rounded-xl "
                      />
                    </div>
                  </SwiperSlide>
                )
              )}
          </Swiper>
          <div className="w-full mt-5 flex flex-col  justify-center items-center">
            <h2 className="text-center text-3xl capitalize font-bold">
              {levels[currentSlide]}
            </h2>

            <div className="flex justify-center w-fit mx-auto divide-x-2 divide-gray-90 items-center gap-1 text-white">
              <span className="flex justify-center items-center gap-1 text-base">
                <img src={Coin} alt="" className="size-5" />
                2,000
              </span>
              <span className="flex justify-center items-center gap-0 text-base">
                <FingerTapIcon className="fill-white stroke-white size-8 " />3
              </span>
            </div>
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  );
};

export { LevelsDrawer };
