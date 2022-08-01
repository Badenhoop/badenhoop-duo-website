export const resolve = (path: string) => {
    const prefix = process.env.NODE_ENV === "production" ? "/badenhoop-duo-website" : ""
    return prefix + path
}