// components/AuthContext.tsx
import React, { createContext, useContext, ReactNode } from 'react';
import { Auth0Provider, useAuth0, Auth0ContextInterface } from '@auth0/auth0-react';
import authConfig from '../auth0';

interface AuthProviderProps {
	children: ReactNode;
}

const AuthContext = createContext<Auth0ContextInterface | null>(null);

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {

	const isBrowser = typeof window !== 'undefined';
	const redirectUri = isBrowser ? window.location.origin : '';

	return (
		<Auth0Provider
			domain={authConfig.domain}
			clientId={authConfig.clientId}
			authorizationParams={{ redirect_uri: redirectUri }}
		>
			<AuthContext.Provider value={useAuth0()}>
				{children}
			</AuthContext.Provider>
		</Auth0Provider>
	);
};

export const useAuth = () => {
	const context = useContext(AuthContext);
	if (!context) {
		throw new Error('useAuth must be used within an AuthProvider');
	}
	return context;
};
