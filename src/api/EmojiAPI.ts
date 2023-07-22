export type TEmoji = {
    name: string
    category: string
    group: string
    htmlCode: string[]
    unicode: string[]
}

export const EmojiAPI = {
    getAllEmojis: async (): Promise<TEmoji[]> => {
        const response = await fetch('https://emojihub.yurace.pro/api/all');
        return await response.json();
    }
}

