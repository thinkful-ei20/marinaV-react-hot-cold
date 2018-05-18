import React from 'react';

import Header from './header';
import GuessSection from './guess-section';
import GuessForm from './guess-form'
import GuessCount  from './guess-count';
import GuessList from './guess-list';

export default class Game extends React.Component {
  constructor() {
    super();
    this.state = {
      feedback: 'Guess between 0 and 100',
      guessInput: '',
      guessCount: 0,
      guessList: []
    };
    this.onSubmitGuess = this.onSubmitGuess.bind(this);
    this.onGuessInput = this.onGuessInput.bind(this);
  }

  onSubmitGuess(e) {
    console.log('onSubmitGuest **** ran');
    e.preventDefault();
    const stateCopy = { ...this.state, guessList: [ ...this.state.guessList ] };
    stateCopy.guessCount += 1;
    stateCopy.guessList.push(stateCopy.guessInput);
    stateCopy.guessInput = '';
    console.log(stateCopy);
    this.setState(stateCopy);

  }

  onGuessInput(e) {
    console.log('onGuessInput **** ran');
    //Get value from text input, convert to number
    const input = +e.target.value;
    console.log(input);
    // if()

    // this.setState({
    //   guessInput: input
    // });
  }

  render() {
    return (
      <div>
        <Header />
        <GuessSection feedback={this.state.feedback} />
        <GuessForm
          guessInput={this.state.guessInput}
          onSubmitGuess={this.onSubmitGuess}
          onGuessInput={this.onGuessInput}
        />
        <GuessCount count={this.state.guessCount} />
        <GuessList guesses={this.state.guessList} />
      </div>
    );
  }


}

