import React from 'react';

import './top-nav.css';

export default function TopNav(props) {
    return (
        <nav>
            <ul className="clearfix">
                <li tabIndex="0">
                    <a className="what" href="#">
                        What?
                    </a>
                </li>
                <li tabIndex="0">
                    <a className="new" href="#">
                        + New Game
                    </a>
                </li>
            </ul>
        </nav>
    );
}

