import {
  Button,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui";
import { UsdCoin } from "iconsax-react";

type Props = {};

const ShopView = ({}: Props) => {
  return (
    <div className="w-full h-full space-y-4 scroll-pb-2 overflow-hidden overflow-y-auto">
      <div className="w-full rounded-md flex justify-between items-center p-2 bg-card border border-cardBorder">
        <h1>Daily combo</h1>
        <div className="flex justify-center items-center gap-1">
          <div className="size-3 rounded-full bg-white/10 border-2 border-white/20"></div>
          <div className="size-3 rounded-full bg-white/10 border-2 border-white/20"></div>
          <div className="size-3 rounded-full bg-white/10 border-2 border-white/20"></div>
        </div>
        <Button>
          <UsdCoin />
          +5,000,000
        </Button>
      </div>
      <div className="grid grid-cols-3 w-full gap-2">
        <div className="w-full aspect-square rounded-2xl bg-card border border-[rgb(177,75,244)] border-b-transparent"></div>
        <div className="w-full aspect-square rounded-2xl bg-card border border-[rgb(177,75,244)] border-b-transparent"></div>
        <div className="w-full aspect-square rounded-2xl bg-card border border-[rgb(177,75,244)] border-b-transparent"></div>
      </div>
      <span className="w-full gap-2 font-bold flex justify-center items-center text-white text-2xl">
        <UsdCoin className="text-secondary-100" />
        5,380
      </span>
      <Tabs defaultValue="Markets" className="w-full">
        <TabsList className="sticky top-5">
          <TabsTrigger value="Markets">Markets</TabsTrigger>
          <TabsTrigger value="PR&Team">PR&Team</TabsTrigger>
          <TabsTrigger value="Legal">Legal</TabsTrigger>
          <TabsTrigger value="Specials">Specials</TabsTrigger>
        </TabsList>
        <TabsContent value="Markets">
          <div className="grid grid-cols-2 gap-3">
            {Array.from({ length: 20 }).map((_, i) => (
              <div
                key={`shopbox--${i}`}
                className="w-full  h-full rounded-2xl bg-card border border-cardBorder">
                <div className="w-full p-2 flex justify-start gap-2 items-start border-b border-b-white/50">
                  <h1>img {i + 1}</h1>
                  <div>
                    <h5 className="text-sm">Fan Tokens</h5>
                    <span className="text-xs text-white/50 mt-5 block">
                      profit per hour
                    </span>
                    <span className="flex items-center text-white/50 gap-2 font-bold">
                      <UsdCoin className="text-gray-90" />
                      +950
                    </span>
                  </div>
                </div>
                <div className="flex justify-start items-center p-2 divide-x divide-white/50">
                  <div className="pr-4 w-fit">lvl {i}</div>
                  <div className="pl-4 w-fit flex justify-start items-center gap-1">
                    {i !== 1 ? (
                      <span className="text-gray-100 flex items-center gap-1 font-bold">
                        <UsdCoin className="text-gray-100" />
                        10K
                      </span>
                    ) : (
                      <>
                        <span className="font-bold uppercase">kyx</span>
                        lvl {i}
                      </>
                    )}
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
