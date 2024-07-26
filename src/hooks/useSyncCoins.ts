import { urls } from "@/constants/urls"
import { useTelegram } from "@/features/TelegramProvider"
import { useMainContext } from "@/providers/MainContext"
import axios from "axios"
import { useState } from "react"
export const useSyncCoins = () => {
    const { data: mainData, setUserCoins, coins: stateCoins } = useMainContext()
    const { webApp } = useTelegram()
    const [syncing, setSyncing] = useState(false)
    const syncCoins = async (coinAmount?: number) => {
        const coins = localStorage.getItem("coins")!
        localStorage.removeItem("coins")
        if (syncing) return;
        if (+coins <= +mainData?.data.coin_sync_gap_toforce) return
        setSyncing(true)
        // webApp?.showAlert(`Syncing... ${coins} ${coinAmount}`)
        const { data, status, statusText } = await axios.post(urls.syncCoins,
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
        if (status >= 200 && status < 300) {
            setUserCoins(+stateCoins)
            setSyncing(false)
        } else {
            setSyncing(false)
            //   
        }
        console.log("data", data, "\nstatus", status, "\nstatusText", statusText);
    }

    return { syncCoins, }
}