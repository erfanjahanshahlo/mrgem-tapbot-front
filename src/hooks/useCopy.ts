import { useState } from "react"

export const useCopy = () => {
    const [isCopied, setIsCopied] = useState(false);

    const onCopy = (t: string) => {
        navigator.clipboard.writeText(t);
        setIsCopied(true);
        setTimeout(() => {
            setIsCopied(false);
        }, 2000);
    }
    return { onCopy, isCopied }

}