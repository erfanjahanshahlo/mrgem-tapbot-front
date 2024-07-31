import { useState } from "react";
import {
  Button,
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "../ui";
// import { UsdCoin } from "iconsax-react";
import ClashOfClansBanner from "/shopProduct.png";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { useSyncCoins } from "@/hooks/useSyncCoins";
import axios from "axios";
import { urls } from "@/constants/urls";
import { useTelegram } from "@/features/TelegramProvider";
import { useDatas } from "@/hooks";
import { delay } from "@/utils";

type Props = {
  formFields: any;
  productId: string;
};
type FormData = {
  [key: string]: string;
};
const ProductDrawer = ({ formFields, productId }: Props) => {
  const [isDialogOpen, setIsDialogOpen] = useState<boolean>(false);
  const [formData, setFormData] = useState<FormData>({});
  const { syncCoins } = useSyncCoins();
  const { refetch } = useDatas();
  const { webApp } = useTelegram();
  const handleInputChange = (fieldId: string, value: string) => {
    setFormData((prevData) => ({
      ...prevData,
      [fieldId]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const coins = localStorage.getItem("coins");
    syncCoins(coins ? coins : 0);
    await delay(1000);
    console.log("Submitting data:", formData);
    const { data, status } = await axios.post(
      urls.purchase,
      {
        id: productId,
        params: formData,
      },
      {
        headers: {
          "content-type": "application/x-www-form-urlencoded",
          "X-INITDATA": webApp?.initData,
        },
      }
    );
    if (data.success) {
      setIsDialogOpen(false);
      webApp?.showAlert(data.msg);
      refetch();
    } else {
      webApp?.showAlert(data.msg);
    }
    if (status >= 400 && status < 500) {
      webApp?.showAlert("An error occurred, please try again later");
      return;
    }
  };

  return (
    <Drawer
      open={isDialogOpen}
      onOpenChange={setIsDialogOpen}
      // snapPoints={[0.9]}
      // activeSnapPoint={snapPoint}
      // disablePreventScroll={true}
      // modal={true}
      // setActiveSnapPoint={setSnapPoint}
    >
      <DrawerTrigger asChild>
        <Button
          variant={"secondary"}
          className="flex-1 py-2 text-sm font-semibold rounded-md capitalize bg-black-60">
          buy
        </Button>
      </DrawerTrigger>
      <DrawerContent className={""}>
        <DrawerHeader>
          <DrawerTitle className="text-2xl font-semibold capitalize">
            Enter your details
          </DrawerTitle>
        </DrawerHeader>
        <div className="w-full overflow-auto px-5 space-y-5">
          <img
            src={ClashOfClansBanner}
            className="w-full h-auto aspect-video rounded-lg"
            alt=""
          />
          {formFields.map((field: any, i: number) => (
            <div className="flex flex-col gap-1" key={`form field--${i}`}>
              <span className="text-sm capitalize">{field.title} :</span>
              {field.type === "select" ? (
                <Select
                  onValueChange={(value) => handleInputChange(field.id, value)}>
                  <SelectTrigger className="w-full h-11 bg-[#121212] border-black-60 !outline-none">
                    <SelectValue placeholder="" />
                  </SelectTrigger>
                  <SelectContent className="bg-[#121212]">
                    {Object.keys(field.options).map(
                      (option: any, i: number) => (
                        <SelectItem key={`option--${i}`} value={option}>
                          {field.options[option]}
                        </SelectItem>
                      )
                    )}
                  </SelectContent>
                </Select>
              ) : (
                <input
                  type={field.type}
                  value={formData[field.id] || ""}
                  onChange={(e) => handleInputChange(field.id, e.target.value)}
                  className="w-full h-11 rounded-lg border bg-[#121212] border-black-60 !outline-none px-3"
                />
              )}
            </div>
          ))}
        </div>
        <div className="w-full px-5 mt-5 mb-6">
          <Button className="w-full px-5" onClick={handleSubmit}>
            Purchase
          </Button>
        </div>
      </DrawerContent>
    </Drawer>
  );
};

export { ProductDrawer };
