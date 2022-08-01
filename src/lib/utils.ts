export const resolve = (path: string) => {
    const prefix = import.meta.env.PROD ? '/badenhoop-duo-website/' : '/'
    return prefix + path
}