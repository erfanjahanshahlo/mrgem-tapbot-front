import { cn, formatNumber } from "@/utils";
import Coin from "/G-coin.png";
import { Button } from "../ui";
import { ProductDrawer } from "../Drawers";
import { LockIcon } from "lucide-react";
import { useEffect, useState } from "react";
import { useMainContext } from "@/providers/MainContext";

type Props = {
  image: string;
  name: string;
  subTitle: string;
  price: number;
  requireType: boolean;
  formFields: any;
  requireValue?: string | number;
  productId: string;
};

const ProductBox = ({
  image,
  name,
  subTitle,
  price,
  requireType,
  requireValue,
  formFields,
  productId,
}: Props) => {
  const [isLocked, setIsLocked] = useState(requireType);
  const { coins } = useMainContext();
  useEffect(() => {
    if (coins < price) {
      setIsLocked(true);
    }
  }, [coins]);
  return (
    <div className="w-full h-36 rounded-2xl relative p-4 !flex justify-center items-center gap-4 bg-card border border-cardBorder">
      {isLocked && (
        <div className="absolute inset-0 w-full h-full bg-card/80 flex justify-center items-center flex-col gap-2 text-white rounded-xl pointer-events-none z-20">
          <LockIcon className="size-10" />
          <span className="font-semibold">
            {requireValue
              ? requireValue
              : coins < price && (
                  <span className="flex justify-center items-center gap-1">
                    <img src={Coin} className="h-8 aspect-square" />
                    {formatNumber(price)}
                  </span>
                )}
          </span>
        </div>
      )}
      <img
        src={image}
        className="rounded-2xl aspect-square size-28 object-center object-cover bg-primary"
      />
      <div className="flex-1 h-fit mt-2">
        <h5 className="text-sm font-semibold">{name}</h5>
        <p className="text-sm text-black-30 font-semibold mt-2">{subTitle}</p>
        <div
          className={cn(
            "flex justify-between items-center gap-4 mt-4",
            isLocked ? "pointer-events-none" : ""
          )}>
          <Button
            className="gap-1 text-sm font-semibold rounded-md capitalize bg-[rgba(23,194,35,0.09)]"
            variant={"secondary"}>
            <img src={Coin} className="h-full aspect-square" />
            {formatNumber(price)}
          </Button>
          <ProductDrawer
            image={image}
            formFields={formFields}
            productId={productId}
          />
        </div>
      </div>
    </div>
  );
};

export { ProductBox };
