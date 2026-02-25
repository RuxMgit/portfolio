import { register, init, getLocaleFromNavigator } from 'svelte-i18n';


register('en', () => import('./locales/en.json'));
register('fr-FR', () => import('./locales/fr-FR.json'));

init({
    fallbackLocale: 'fr',
    initialLocale: getLocaleFromNavigator(),
});