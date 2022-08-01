import * as pathlib from 'path'

export const resolve = (path: string) => {
    const prefix = import.meta.env.MODE === 'production' ? '/badenhoop-duo-website' : ''
    return pathlib.join(prefix, path)
}