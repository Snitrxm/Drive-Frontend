import {
    setCookie,
    parseCookies
} from 'nookies';

export const USER_COOKIE_NAME = "drive_cookie";

export function registerCookie(
    cookieName: string,
    token: string,
    options?: any
): void {
    setCookie(null, cookieName, token, { path: '/', ...options });
}

export function getCookie(key: string): any {
    const cookies = parseCookies()
    return cookies[key]
}