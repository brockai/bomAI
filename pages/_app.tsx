import '../styles/globals.css';
import '../styles/styles.scss';
import type { AppProps } from "next/app";
import { getOS } from '../helpers/helpers';
import App from '../layout/App/App';
import Wrapper from '../layout/Wrapper/Wrapper';
import { ToastContainer } from 'react-toastify';
import { ReactNotifications } from 'react-notifications-component';
import { ToastCloseButton } from '../components/bootstrap/Toasts';
import '../styles/Toast.css';

import { Auth0Provider } from '@auth0/auth0-react';
import { StepContextProvider } from '@/context/stepContext';
import { ThemeContextProvider } from '../context/themeContext';

const BOMAI = ({ Component, pageProps }: AppProps) => {
    getOS();

    const isBrowser = typeof window !== 'undefined';
    const redirectUri = isBrowser ? window.location.origin : '';

    return (

        <Auth0Provider
            domain={process.env.NEXT_PUBLIC_AUTH0_DOMAIN || ''}
            clientId={process.env.NEXT_PUBLIC_AUTH0_CLIENT_ID || ''}
            authorizationParams={{
                redirect_uri: redirectUri
            }}
        >
            <StepContextProvider>
                <ThemeContextProvider>
                    <App>
                        <Wrapper>
                            {/* eslint-disable-next-line react/jsx-props-no-spreading */}
                            <Component {...pageProps} />
                        </Wrapper>
                    </App>
                </ThemeContextProvider>
                <ToastContainer
                    closeButton={ToastCloseButton}
                    toastClassName='toast show'
                />
            </StepContextProvider>
        </Auth0Provider>
    );
};

export default BOMAI;