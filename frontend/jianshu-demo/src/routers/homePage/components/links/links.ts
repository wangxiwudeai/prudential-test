export const links: Array<LinkConfigItem> = [
    {
        name: "日更挑战",
        code: "日更挑战",
        backgroundColor: "#b7d3ec",
        fontColor: "#6385bc"
    },{
        name: "简书会员",
        code: "简书会员",
        backgroundColor: "#ffb84f",
        fontColor: "#ffffff"
    },{
        name: "优选连载",
        code: "优选连载",
        backgroundColor: "#f4e0bd",
        fontColor: "#c0913d"
    },{
        name: "简书版权",
        code: "简书版权",
        backgroundColor: "#c1e4de",
        fontColor: "#538f86"
    },
]

export interface LinkConfigItem {
    name: string;
    code: string;
    backgroundColor: string;
    fontColor: string;
}