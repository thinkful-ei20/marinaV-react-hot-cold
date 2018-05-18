import React from 'react';

import './guess-form.css';

export default function GuessForm(props) {
    return (
        <form onSubmit={props.onSubmitGuess}>

            <input
              type="text"
              name="userGuess"
              id="userGuess"
              className="text"
              maxLength="3"
              autoComplete="off"
              placeholder="Enter your Guess"
              value={props.guessInput}
              onChange={props.onGuessInput}
              required />
            <input
              type="submit"
              id="guessButton"
              className="button"
              name="submit"
              value="Guess"

            />
        </form>
    );
};

