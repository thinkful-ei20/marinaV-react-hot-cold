import React from 'react';

import './guess-count.css';

export default function GuessCount(props) {
  console.log(props.count);
  const isPlural = props.count !== 1;
  const guessNoun = isPlural ? 'guesses' : 'guess';
    return (
      <h2 id="guessCount">
        You've made <span id="count">{props.count}</span> {guessNoun}!
      </h2>
    );
}
