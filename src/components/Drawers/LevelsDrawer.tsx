import Coin from "/G-coin.png";

import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
  Progress,
} from "../ui";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { FingerTapIcon } from "@/assets/icons";
import { useMainContext } from "@/providers/MainContext";
import { Flash } from "iconsax-react";
import { formatNumber, formatNumberToM } from "@/utils";
import { Infinity } from "lucide-react";
type Props = {};

const LevelsDrawer = ({}: Props) => {
  const { data, coins } = useMainContext();

  const [snapPoint, setSnapPoint] = useState<number | string | null>(0.9);
  const currentLevel =
    data?.data.levels.find(
      (level: any) => level.id === data.user.current_level
    ) || null;

  const indexOfCurrentLevel = data?.data.levels.findIndex(
    (level: any) => level.id === data?.user.current_level
  );

  const [currentSlide, setCurrentSlide] = useState<number>(indexOfCurrentLevel);
  // const charactersSrc = [
  //   "/LevelCharacters/mrgem-bronze-character-transparent.webp",
  //   "/LevelCharacters/mrgem-diamond-character-transparent.webp",
  //   "/LevelCharacters/mrgem-gold-character-transparent.webp",
  //   "/LevelCharacters/mrgem-iron-character-transparent.webp",
  //   "/LevelCharacters/mrgem-platinum-character-transparent.webp",
  //   "/LevelCharacters/mrgem-sliver-character-transparent.webp",
  // ];
  // Assuming entryPoint and exitPoint are available
  const entryPoint = currentLevel?.entry; // Example: 0 for the start of the level
  const exitPoint = data?.data.levels[indexOfCurrentLevel + 1]?.entry; // Example: 10000 for the end of the level

  // Ensure these values are numbers and not undefined
  const totalRange = exitPoint - entryPoint;
  const currentProgress = coins - entryPoint;
  const progressPercentage = (currentProgress / totalRange) * 100;

  return (
    <Drawer
      snapPoints={[0.9]}
      activeSnapPoint={snapPoint}
      disablePreventScroll={false}
      modal={false}
      setActiveSnapPoint={setSnapPoint}>
      <DrawerTrigger asChild>
        <div className="w-full h-fit p-2   bg-card border border-cardBorder backdrop-blur-3xl text-white  rounded-xl  space-y-0.5">
          <div className="w-full flex  justify-between items-center">
            <div className="flex justify-between items-center gap-1 w-full">
              <h2 className="text-base font-semibold">{currentLevel?.name}</h2>
              <div className="text-sm leading-3">
                <p>{`${indexOfCurrentLevel + 1}/${data?.data?.levels.length}`}</p>
              </div>
            </div>{" "}
          </div>
          <div className="relative h-8 w-full">
            <Progress
              value={
                indexOfCurrentLevel + 1 === data?.data?.levels.length
                  ? 100
                  : progressPercentage
              }
              indicatorClassName={
                indexOfCurrentLevel + 1 === data?.data?.levels.length
                  ? "bg-green-50"
                  : ""
              }
            />
            <span className="w-full flex justify-end items-end">
              {indexOfCurrentLevel + 1 === data?.data?.levels.length ? (
                <Infinity />
              ) : (
                `${formatNumberToM(data?.data.levels[indexOfCurrentLevel + 1]?.entry)}`
              )}
            </span>
            <span
              className="absolute bottom-0"
              style={{
                left: `${
                  indexOfCurrentLevel + 1 === data?.data?.levels.length ||
                  progressPercentage < 6
                    ? 0
                    : progressPercentage
                }%`,
                transform:
                  indexOfCurrentLevel + 1 === data?.data?.levels.length ||
                  coins == data?.data.levels[indexOfCurrentLevel].entry ||
                  progressPercentage < 6
                    ? ""
                    : "translateX(-50%)",
              }}>
              {formatNumberToM(Math.floor(coins))}
            </span>
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
            // defaultValue={indexOfCurrentLevel}
            initialSlide={indexOfCurrentLevel}
            onSlideChange={(slide) => {
              setCurrentSlide(slide.activeIndex);
            }}
            modules={[Navigation]}>
            {data?.data?.levels &&
              data?.data?.levels.map((level: any, index: number) => (
                <SwiperSlide
                  key={`level slide--${index}--${level}`}
                  className="!h-fit !flex justify-center items-center w-full">
                  <div className="w-4/6 h-fit  rounded-2xl bg-gradient-to-b from-white/10 to-white/5 ">
                    <img
                      src={level.character}
                      className="w-full h-auto aspect-[3/4] object-contain rounded-xl "
                    />
                  </div>
                </SwiperSlide>
              ))}
          </Swiper>
          <div className="w-full mt-5 flex flex-col  justify-center items-center">
            <h2 className="text-center text-3xl capitalize font-bold">
              {data?.data?.levels[currentSlide]?.name}
            </h2>
            <div className="flex justify-center w-fit items-center mx-auto gap-2">
              <img src={Coin} alt="" className="size-8" />
              <span className="text-2xl font-semibold text-white">
                {formatNumber(data?.data?.levels[currentSlide]?.entry)}
              </span>
            </div>
            <div className="flex justify-center w-fit mx-auto h-8 items-center gap-2 text-white">
              <span className="flex justify-center items-center gap-1 text-base">
                <Flash />
                {formatNumber(data?.data?.levels[currentSlide]?.earn_power)}
              </span>
              <span className="h-8 w-0.5 bg-gray-90"></span>

              <span className="flex justify-center items-center gap-1 text-base">
                <FingerTapIcon className="fill-white stroke-white size-8 " />
                {formatNumber(data?.data?.levels[currentSlide]?.earn_per_click)}
              </span>
            </div>
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  );
};

export { LevelsDrawer };
