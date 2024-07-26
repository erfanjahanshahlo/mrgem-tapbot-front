import { ProductDrawer } from "@/components/Drawers";
import {
  Button,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui";
import Coin from "/G-coin.png";
import { useMainContext } from "@/providers/MainContext";
import { formatNumber } from "@/utils";
import ShopProduct from "/shopProduct.png";

type Props = {};

const ShopView = ({}: Props) => {
  const { coins } = useMainContext();
  return (
    <div className="w-full h-full space-y-4 scroll-pb-2 overflow-hidden overflow-y-auto">
      <span className="w-full gap-2 font-bold flex justify-center items-center text-white text-2xl">
        {/* <UsdCoin className="text-secondary-100" /> */}
        <img src={Coin} alt="" className="size-6" />
        {formatNumber(coins)}
      </span>
      <Tabs defaultValue="Markets" className="w-full">
        <TabsList className="sticky top-5 z-50">
          <TabsTrigger value="Markets">Markets</TabsTrigger>
          <TabsTrigger value="PR&Team">PR&Team</TabsTrigger>
          <TabsTrigger value="Legal">Legal</TabsTrigger>
          <TabsTrigger value="Specials">Specials</TabsTrigger>
        </TabsList>
        <TabsContent value="Markets">
          <div className="flex flex-col justify-center items-center gap-3">
            {Array.from({ length: 20 }).map((_, i) => (
              <div
                key={`product--${i}`}
                className="w-full h-36 rounded-2xl bg-primary relative p-4 flex justify-center items-center gap-4">
                <img
                  src={ShopProduct}
                  className="rounded-2xl aspect-square size-28 object-center object-cover bg-card border-2 border-cardBorder"
                />
                <div className="flex-1 h-fit mt-2">
                  <h5 className="text-sm font-semibold">pubg mobile uc</h5>
                  <p className="text-sm text-black-30 font-semibold mt-2">
                    60 uc
                  </p>
                  <div className="flex justify-between items-center gap-4 mt-4">
                    <Button
                      className="gap-1 text-sm font-semibold rounded-md capitalize bg-[rgba(23,194,35,0.09)]"
                      variant={"secondary"}>
                      <img src={Coin} className="h-full aspect-square" />
                      5000
                    </Button>
                    <ProductDrawer />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </TabsContent>
        <TabsContent value="password">Change your password here.</TabsContent>
      </Tabs>
    </div>
  );
};

export { ShopView };
