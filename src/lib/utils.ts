import * as pathlib from 'path'

export const resolve = (path: string) => {
    const prefix = import.meta.env.PROD ? '/badenhoop-duo-website' : ''
    return pathlib.join(prefix, path)
}