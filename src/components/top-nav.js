import React from 'react';

import './top-nav.css';

export default function TopNav(props) {
    return (
        <nav>
            <ul className="clearfix">
                <li>
                    <a
                      tabIndex="0"
                      className="what"
                      href="#what">
                        What?
                    </a>
                </li>
                <li tabIndex="0" role="button">
                    <a
                      tabIndex="0"
                      className="new"
                      href="#newgame"
                      onClick={props.onRestart}
                    >
                        + New Game
                    </a>
                </li>
            </ul>
        </nav>
    );
}

