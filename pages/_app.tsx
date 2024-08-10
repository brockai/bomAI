import '../styles/globals.css';
import '../styles/styles.scss';
import type { AppProps } from "next/app";
import { ThemeProvider } from 'react-jss';
import useDarkMode from '../hooks/useDarkMode';
import COLORS from '../common/enumColors';
import { getOS } from '../helpers/helpers';
import App from '../layout/App/App';
import Wrapper from '../layout/Wrapper/Wrapper';
import { ToastContainer } from 'react-toastify';
import { ReactNotifications } from 'react-notifications-component';
import { ToastCloseButton } from '../components/bootstrap/Toasts';
import '../styles/Toast.css';

import { ThemeContextProvider } from '../context/themeContext';
import { AuthProvider } from '../context/authContext';

const BMEAPP = ({ Component, pageProps }: AppProps) => {
    getOS();

    /**
     * Dark Mode
     */
    const { themeStatus } = useDarkMode();
    console.log(themeStatus)

    const theme = {
        theme: themeStatus,
        primary: COLORS.PRIMARY.code,
        secondary: COLORS.SECONDARY.code,
        success: COLORS.SUCCESS.code,
        info: COLORS.INFO.code,
        warning: COLORS.WARNING.code,
        brockai: COLORS.BROCKAI.code,
        danger: COLORS.DANGER.code,
        dark: COLORS.DARK.code,
        light: COLORS.LIGHT.code,
    };

    return (
        <ThemeContextProvider>
            <ThemeProvider theme={theme}>
                <AuthProvider>
                    <App>
                        <Wrapper>
                            {/* eslint-disable-next-line react/jsx-props-no-spreading */}
                            <Component {...pageProps} />
                        </Wrapper>
                    </App>
                    <ToastContainer
                        closeButton={ToastCloseButton}
                        toastClassName='toast show'
                    />
                </AuthProvider>
            </ThemeProvider>
        </ThemeContextProvider>
    );
};

export default BMEAPP;