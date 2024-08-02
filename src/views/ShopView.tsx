import { ProductBox } from "@/components";
import Coin from "/G-coin.png";
import { useMainContext } from "@/providers/MainContext";
import { formatNumber } from "@/utils";

type Props = {};

const ShopView = ({}: Props) => {
  const { coins } = useMainContext();
  const { data } = useMainContext();

  return (
    <div className="w-full h-full space-y-4 pb-2 overflow-hidden overflow-y-auto">
      <span className="w-full gap-2 font-bold flex justify-center items-center text-white text-2xl">
        <img src={Coin} alt="" className="size-6" />
        {formatNumber(coins)}
      </span>
      {/* <Tabs defaultValue="Markets" className="w-full">
        <TabsList className="sticky top-5 z-50">
          <TabsTrigger value="Markets">Markets</TabsTrigger>
          <TabsTrigger value="PR&Team">PR&Team</TabsTrigger>
          <TabsTrigger value="Legal">Legal</TabsTrigger>
          <TabsTrigger value="Specials">Specials</TabsTrigger>
        </TabsList>
        <TabsContent value="Markets">
          
        </TabsContent>
        <TabsContent value="password">Change your password here.</TabsContent>
      </Tabs> */}
      <div className="flex flex-col justify-center items-center gap-3">
        {data?.data.products.map((item: any, i: number) => (
          <ProductBox
            key={`shop item--${i}`}
            image={item.image}
            name={item.name}
            subTitle={item.subtext}
            price={item.price}
            requireType={item.require_type === "static" ? true : false}
            requireValue={item.require_value}
            formFields={item.fields}
            productId={item.id}
          />
        ))}
      </div>
    </div>
  );
};

export { ShopView };
