import {
    setCookie,
} from 'nookies';

export const USER_COOKIE_NAME = "drive_cookie";

export function registerCookie(
    cookieName: string,
    token: string,
    options?: any
): void {
    setCookie(null, cookieName, token, { path: '/', ...options });
}