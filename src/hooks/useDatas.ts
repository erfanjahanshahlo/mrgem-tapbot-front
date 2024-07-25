import { urls } from "@/constants/urls";
import { useTelegram } from "@/features/TelegramProvider";
import { useMainContext } from "@/providers/MainContext";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useEffect, useState } from "react";

export const useDatas = () => {
    const { setData, setCoins } = useMainContext();
    const { webApp } = useTelegram();
    const [isLoading, setIsLoading] = useState(true);
    const startAppParam = webApp?.initDataUnsafe?.start_param;

    const { data, isError } = useQuery({
        queryKey: ["getConf"],
        queryFn: async () => {
            const { data } = await axios.get(
                startAppParam ? `${urls.getConfig}?start_param=${startAppParam}` : urls.getConfig,
                {
                    headers: {
                        "X-INITDATA": webApp?.initDataUnsafe.user.is_premium
                            ? `${webApp?.initData}&isp=true`
                            : webApp?.initData
                    },
                }
            );
            console.log(data);
            return data;
        },
        retry: 3,
        retryDelay: 2000,
    });

    useEffect(() => {
        if (data?.success) {
            setData(data);
            setCoins(data?.user.coins);
            setIsLoading(false);
        } else if (isError) {
            setData(null);
            setIsLoading(false);
            // webApp?.showPopup({
            //     title: "Error",
            //     message: "Please reopen the app",
            //     buttons: [{ text: "OK", type: "close" }],
            // }, () => {
            //     webApp.close()
            // })
        }
    }, [data, isError]);

    return { isLoading, data };
};