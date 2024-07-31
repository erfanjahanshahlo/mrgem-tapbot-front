import Coin from "/G-coin.png";
import Electric from "/electric.png";
import CoinPlus from "/coinPlus.png";

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
import { useMainContext } from "@/providers/MainContext";
import { formatNumber } from "@/utils";

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

  const exitPoint = data?.data.levels[indexOfCurrentLevel + 1]?.entry;
  const [currentSlide, setCurrentSlide] = useState<number>(indexOfCurrentLevel);
  const entryPoint = currentLevel?.entry;
  const totalRange = exitPoint - entryPoint;
  const currentProgress = coins - entryPoint;
  const progressPercentage =
    (currentProgress / totalRange) * 100 > 100
      ? 100
      : ((currentProgress / totalRange) * 100).toFixed(0);
  // useEffect(() => {
  //   if (coins >= exitPoint) {
  //     if (isLoading) return;
  //     refetch();
  //     webApp?.showPopup({
  //       title: "Congratulations",
  //       message: "You have completed this level",
  //       buttons: [{ type: "ok", text: "Ok" }],
  //     });
  //   }
  // }, [coins, isLoading]);
  return (
    <Drawer
      snapPoints={[0.9]}
      activeSnapPoint={snapPoint}
      disablePreventScroll={false}
      modal={false}
      setActiveSnapPoint={setSnapPoint}>
      <DrawerTrigger asChild>
        <div className="w-full h-fit p-2 text-white  rounded-xl  space-y-0.5">
          <div className="w-full flex  justify-between items-center">
            <div className="flex justify-between items-center gap-1 w-full">
              <div className="flex items-center justify-center gap-1">
                <h2 className="text-base font-semibold">
                  {currentLevel?.name}
                </h2>
                <div className="text-sm leading-3 text-white/80">
                  <p>{`level  ${indexOfCurrentLevel + 1}/${data?.data?.levels.length}`}</p>
                </div>
              </div>
              <span className="text-sm">
                {indexOfCurrentLevel + 1 === data?.data?.levels.length
                  ? "100%"
                  : `${progressPercentage}%`}
              </span>
            </div>
          </div>
          <div className="relative h-8 w-full">
            <Progress
              value={
                indexOfCurrentLevel + 1 === data?.data?.levels.length
                  ? 100
                  : +progressPercentage
              }
            />
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
            <div className="flex justify-center w-full h-fit mt-6 items-center gap-6 text-white">
              <div className="flex justify-center items-center flex-col gap-1 text-sm font-semibold ">
                <div className="size-14 bg-card border border-cardBorder rounded-[35%] flex justify-center items-center">
                  <img src={Electric} className="size-10" alt="" />
                </div>
                {formatNumber(data?.data?.levels[currentSlide]?.earn_power)}{" "}
              </div>
              <div className="flex justify-center items-center flex-col gap-1 text-sm font-semibold ">
                <div className="size-14 relative bg-card border border-cardBorder rounded-[35%] flex justify-center items-center">
                  <img src={CoinPlus} className="size-10" alt="" />
                  <div className="absolute top-0 right-0 translate-x-1/2 -translate-y-1/2 flex justify-center items-center size-5 rounded-full bg-green-50">
                    {formatNumber(
                      data?.data?.levels[currentSlide]?.earn_per_click
                    )}
                  </div>
                </div>
                Earn
              </div>
            </div>
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  );
};

export { LevelsDrawer };
