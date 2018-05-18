import React from 'react';

// import GuessForm from './guess-form';

import './guess-section.css';

export default function GuessSection(props) {
    return (
        <section aria-label="guess section" aria-describedby="feedback">
            <h2 id="feedback">{props.feedback}</h2>
        </section>
    );
}

