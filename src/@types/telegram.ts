// types.ts
export interface ITelegramUser {
    id: number;
    first_name: string;
    last_name: string;
    username: string;
    language_code: string;
    is_premium?: boolean
}

export interface IWebApp {
    initData: string;
    initDataUnsafe: {
        query_id: string;
        user: ITelegramUser;
        auth_date: string;
        hash: string;
        start_param?: string

    };
    version: string;
    platform: string;
    colorScheme: string;
    themeParams: {
        link_color: string;
        button_color: string;
        button_text_color: string;
        secondary_bg_color: string;
        hint_color: string;
        bg_color: string;
        text_color: string;
    };
    isExpanded: boolean;
    viewportHeight: number;
    viewportStableHeight: number;
    isClosingConfirmationEnabled: boolean;
    headerColor: string;
    backgroundColor: string;
    BackButton: {
        isVisible: boolean;
    };
    MainButton: {
        text: string;
        color: string;
        textColor: string;
        isVisible: boolean;
        isProgressVisible: boolean;
        isActive: boolean;
    };
    HapticFeedback: any;
    expand: () => void;
    openTelegramLink: (url: string) => void;
    showAlert: (message: string) => void;
    showPopup: (params: {
        title: string;
        message: string;
        buttons: {
            id?: string;
            type: 'default' | 'ok' | 'close' | "cancel" | "destructive";
            text?: string;
        }[]
    }, callback?: () => void) => void;
    close: () => void;
    disableVerticalSwipes: () => void;
    enableVerticalSwipes: () => void;
    openLink: (url: string,) => void;
}

