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
                      href="#what"
                      aria-label="how to play"
                    >
                        What?
                    </a>
                </li>
                <li tabIndex="0" role="button">
                    <a
                      tabIndex="0"
                      className="new"
                      href="#newgame"
                      aria-label="start a new game"
                      onClick={props.onRestart}
                    >
                        + New Game
                    </a>
                </li>
            </ul>
        </nav>
    );
}

