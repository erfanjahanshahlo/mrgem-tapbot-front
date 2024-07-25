import { ProductDrawer } from "@/components/Drawers";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui";
import Coin from "/G-coin.png";
import { useMainContext } from "@/providers/MainContext";
import { formatNumber } from "@/utils";

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
          <div className="grid grid-cols-2 gap-3">
            {Array.from({ length: 20 }).map((_, i) => (
              <ProductDrawer key={`product--${i}`} />
            ))}
          </div>
        </TabsContent>
        <TabsContent value="password">Change your password here.</TabsContent>
      </Tabs>
    </div>
  );
};

export { ShopView };
