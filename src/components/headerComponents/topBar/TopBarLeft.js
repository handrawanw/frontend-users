import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';

export const TopBarLeft = () => {
    let { url } = useRouteMatch();

    return (
        <div className="topbar-left">
            <div className="logo">
                <Link to={`${url}`}>
                <span>
                    <img style={{cursor: 'pointer'}} src="./assets/images/codeoku.png" alt="logo-small" className="logo-sm" />
                </span>
                    <span>
                    <img style={{cursor: 'pointer'}} src="./assets/images/codeo.png" alt="logo-large" className="logo-lg" />
                </span>
                </Link>
            </div>
        </div>
    )
};

