// components/NavBar.tsx
import React from 'react';
import { useAuth } from '../../context/authContext';
import Button, { IButtonProps } from '../bootstrap/Button';
import Icon from '../icon/Icon';
import router from 'next/router';
import Badge from '../bootstrap/Badge';

const NavBar: React.FC = () => {
    const { loginWithRedirect, logout, isAuthenticated } = useAuth();

    const handleLogin = () => {
        loginWithRedirect();
    };

    const handleLogout = () => {
        logout({
            logoutParams: {
                returnTo: window.location.origin,
            },
        });
    };

    return (
        <nav style={{ display: 'flex', justifyContent: 'space-between', padding: '1rem', color: 'white' }}>
            <div className='col flex items-center'>
                <a href="https://brockai.com/"
                    className="flex items-center text-white no-underline mr-2"
                >
                    <img src="/brockai.png" alt="BrockAI Logo" width={50} />
                </a>
                <div className="font-light fs-2 text-danger">BOM Check AI</div>
                &nbsp;&nbsp;&nbsp;
                <div className="font-light fs-6 text-danger">
                    <Badge
                        color='danger'
                        shadow='none'
                        rounded='pill'
                    >
                        Prototype
                    </Badge>
                </div>
            </div>
            <div className="pt-1">
                {!isAuthenticated && (
                    <div className="flex items-center space-x-2 border pt-2 pb-2 pr-4 pl-4 rounded-lg"
                        onClick={handleLogin}>
                        <Icon
                            size='2x'
                            icon='login'
                            style={{ color: 'white' }}
                        />
                        <span className='fs-7'>Sign&nbsp;In</span>
                    </div>
                )}
                {isAuthenticated && (
                    <div className="flex items-center space-x-2 border pt-2 pb-2 pr-4 pl-4 rounded-lg"
                        onClick={handleLogout}>
                        <Icon
                            size='3x'
                            icon='logout'
                            style={{ color: 'white' }}
                        />
                        <span className='fs-4'>Sign&nbsp;Out</span>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default NavBar;
