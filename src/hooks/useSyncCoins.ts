import { urls } from "@/constants/urls"
import { useTelegram } from "@/features/TelegramProvider"
import { useMainContext } from "@/providers/MainContext"
import axios from "axios"
import { useCallback, useEffect, useState } from "react"
import { useDatas } from "./useDatas"
const DEBOUNCE_DELAY = 300; // milliseconds

export const useSyncCoins = () => {
    const { data: mainData, setUserCoins, coins: stateCoins, setSyncing, syncing } = useMainContext()
    const { webApp } = useTelegram()
    const { refetch, isLoading } = useDatas()
    const [_, setDebouncedCoinAmount] = useState(null);
    const [timeoutId, setTimeoutId] = useState<null | number>(null);

    const syncCoins = async (coinAmount?: number) => {
        if (syncing) return;
        const coins = localStorage.getItem("coins")!
        if (!coinAmount && +coins <= +mainData?.data.coin_sync_gap_toforce) return
        localStorage.removeItem("coins")
        setSyncing(true)
        const { status } = await axios.post(urls.syncCoins,
            {
                count: coinAmount ? coinAmount : +coins
            },
            {
                headers: {
                    'content-type': 'application/x-www-form-urlencoded',
                    "X-INITDATA": webApp?.initData,
                },
            }
        )
        setSyncing(false)
        if (status >= 200 && status < 300) {
            const currentLevel = mainData?.data.levels.find((l: any) => l.id === mainData.user.current_level)
            setUserCoins(+stateCoins + (currentLevel?.earn_per_click || 0))
            const indexOfCurrentLevel = mainData?.data.levels.findIndex(
                (level: any) => level.id === mainData?.user.current_level
            );

            const exitPoint = mainData?.data.levels[indexOfCurrentLevel + 1]?.entry;
            if (coinAmount && coinAmount >= exitPoint) {
                if (isLoading) return
                refetch()
                webApp?.showPopup({
                    title: "Congratulations",
                    message: "You have completed this level",
                    buttons: [{ type: "ok", text: "Ok" }],
                });
            }

        } else {
        }
    }

    const debouncedSyncCoins = useCallback((coinAmount?: any) => {
        if (timeoutId) {
            clearTimeout(timeoutId);
        }

        const newTimeoutId = setTimeout(() => {
            syncCoins(coinAmount);
        }, DEBOUNCE_DELAY);

        setTimeoutId(newTimeoutId);
        setDebouncedCoinAmount(coinAmount);
    }, [syncCoins, timeoutId]);

    useEffect(() => {
        return () => {
            if (timeoutId) {
                clearTimeout(timeoutId);
            }
        };
    }, [timeoutId]);
    return { syncCoins: debouncedSyncCoins, syncing }
}