/**
 * 生成一个随机值模拟推荐
 */
export const randomSuffix = () => {
    const randomPool = "1234567890abcdef";
    return randomPool[Math.floor(Math.random() * 16)]
}
