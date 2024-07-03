import { urls } from "@/constants/urls";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const useDatas = () => {
    const { data, error, refetch } = useQuery({
        queryKey: ["getConf"],
        queryFn: async () => {
            const { data } = await axios.get(urls.getConfig, {
                headers: {
                    "X-INITDATA":
                        "query_id=AAFHYuV1AAAAAEdi5XXcexw-&user=%7B%22id%22%3A1977967175%2C%22first_name%22%3A%22Erfan%22%2C%22last_name%22%3A%22%22%2C%22username%22%3A%22jahanerfan%22%2C%22language_code%22%3A%22en%22%2C%22allows_write_to_pm%22%3Atrue%7D&auth_date=1719402153&hash=235077694a1d4b0c6d2f7e172df2074577907cca72bbd55a200f9bfffe0e8aac",
                },
            });
            console.log(data);
            return data;
        },
    });
    setTimeout(() => {
        refetch()
    }, 2000);
    return { data, error, refetch }
}