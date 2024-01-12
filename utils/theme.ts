export const getTheme = (): string => {
    return localStorage.getItem('theme') || 'light';
};

export const setTheme = (theme: string): void => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
};