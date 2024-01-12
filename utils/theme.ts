import Cookies from 'js-cookie';
export const getTheme = (): string => {
    return Cookies.get('theme') || 'light';
};

export const setTheme = (theme: string): void => {
    document.documentElement.setAttribute('data-theme', theme);
    Cookies.set('theme', theme);
};