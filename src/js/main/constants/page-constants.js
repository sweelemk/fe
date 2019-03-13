import { userIsNotAuthenticated, userIsAuthenticated } from 'main/tools/auth-tool';

import MainPage from 'main-page/components/main-page/main-page';
import GuidePage from 'guide-page/components/guide-page/guide-page';
import TeachersPage from 'teachers-page/containers/teachers-container';
import Authentication from 'authentication/components/authentication';
import LoginPage from 'authentication/containers/login-page/login-container';
import RegisterPage from 'authentication/containers/register-page/register-container';

export default [
    {
        path: '/authentication',
        component: userIsNotAuthenticated(Authentication),
        exact: true,
        routes: [
            {
                path: '/authentication/login',
                component: userIsNotAuthenticated(LoginPage),
                exact: true
            },
            {
                path: '/authentication/register',
                component: userIsNotAuthenticated(RegisterPage),
                exact: true
            },
        ],
    },
    // {
    //     path: '/guide',
    //     component: GuidePage,
    //     exact: true
    // },
    {
        path: '/teachers',
        component: userIsNotAuthenticated(TeachersPage),
        exact: true
    },
    {
        path: '/guide',
        component: userIsNotAuthenticated(GuidePage),
        exact: true
    },{
        path: '/',
        component: MainPage,
        exact: true
    },
];


export const logoStyle = {
    fill: 'var(--text-color)',
    stroke: 'var(--primary-color)',
    height: '50px'
};

export const defaultSelectStyle = {
    control: () => ({}),
    clearIndicator: () => ({}),
    container: () => ({}),
    dropdownIndicator: () => ({}),
    group: () => ({}),
    groupHeading: () => ({}),
    indicatorsContainer: () => ({}),
    indicatorSeparator: () => ({}),
    input: () => ({}),
    loadingIndicator: () => ({}),
    loadingMessage: () => ({}),
    menu: () => ({}),
    menuList: () => ({}),
    menuPortal: () => ({}),
    multiValue: () => ({}),
    multiValueLabel: () => ({}),
    multiValueRemove: () => ({}),
    // noOptionsMessage: () => ({}),
    option: () => ({}),
    placeholder: () => ({}),
    singleValue: () => ({}),
    valueContainer: () => ({}),
};

export const Languages = [
    {
        value: 'en',
        label: 'English'
    },
    {
        value: 'de',
        label: 'German'
    },
    {
        value: 'es',
        label: 'Spanish'
    },
    {
        value: 'it',
        label: 'Italian'
    },
    {
        value: 'ch',
        label: 'Chinese'
    },
    {
        value: 'blr',
        label: 'Belorussian'
    },
    {
        value: 'ru',
        label: 'Russian'
    },
    {
        value: 'fr',
        label: 'French'
    }
];
