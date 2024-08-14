// components/NavBar.tsx
import React, { useCallback, useContext, useEffect } from 'react';
import Button, { IButtonProps } from '../bootstrap/Button';
import Icon from '../icon/Icon';
import router from 'next/router';
import Badge from '../bootstrap/Badge';
import { useAuth0 } from '@auth0/auth0-react';
// import AuthContext from '../../context/authContext';
import { fetchToken } from '@/services/opensearchService';

interface NavBarComponentProps {
    isAuthenticated: boolean;
}

const NavBar: React.FC<NavBarComponentProps> = ({ isAuthenticated }) => {

    const { user, loginWithRedirect, logout } = useAuth0();

    // const { tenant, setTenant } = useContext(AuthContext);
    // const { tempToken } = useContext(AuthContext);
    // console.log(user)

    // if (user) {
    //     console.log(user.nickname,setTenant)
    //     // setTenant(user.nickname);
    //     if (setTenant) {
    //         console.log('got')
    //         setTenant(user.nickname);
    //         // console.log(tenant)
    //     }
    // }


    const handleLogin = () => {
        loginWithRedirect();
    };

    const handleLogout = () => {
        localStorage.removeItem('bai_token');
        localStorage.removeItem('bai_tenant');
        logout({
            logoutParams: {
                returnTo: window.location.origin,
            },
        });
    };

    const fetchTempToken = useCallback(async () => {
        try {
            const data = await fetchToken();
            console.log(data.token)
            if (data.token != null) {
                localStorage.setItem('bai_token', data.token);
                return true;
            }
            else return false;

        } catch (error: any) {
            console.log(error);
        }
    }, []);

    useEffect(() => {
        if (user && user.nickname) {
            fetchTempToken();
            localStorage.setItem('bai_tenant', user.nickname);
        }
    }, [user]);

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
                    <div className="flex items-center space-x-2 border pt-2 pb-2 pr-4 pl-4 rounded-lg cursor-pointer"
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
                    <div className="flex items-center space-x-2 border pt-2 pb-2 pr-4 pl-4 rounded-lg cursor-pointer"
                        onClick={handleLogout}>
                        <Icon
                            size='2x'
                            icon='logout'
                            style={{ color: 'white' }}
                        />
                        <span className='fs-7'>Sign&nbsp;Out</span>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default NavBar;
