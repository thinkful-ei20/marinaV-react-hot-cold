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
      guessList: [],
      correctAnswer: Math.round(Math.random() * 100) + 1
    };
    this.onSubmitGuess = this.onSubmitGuess.bind(this);
    this.onGuessInput = this.onGuessInput.bind(this);
    this.onGameRestart = this.onGameRestart.bind(this);
  }

  onSubmitGuess(e) {
    console.log('onSubmitGuest **** ran');
    e.preventDefault();

    const stateCopy = { ...this.state, guessList: [ ...this.state.guessList ] };
    const difference = Math.abs(stateCopy.guessInput - stateCopy.correctAnswer);

    if (difference >= 50) {
      stateCopy.feedback = 'You\'re Ice Cold...';
    } else if (difference >= 30) {
      stateCopy.feedback = 'You\'re Cold...';
    } else if (difference >= 10) {
      stateCopy.feedback = 'You\'re Warm.';
    } else if (difference >= 1) {
      stateCopy.feedback = 'You\'re Hot!';
    } else {
      stateCopy.feedback = 'You got it!';
    }


    stateCopy.guessList.push(stateCopy.guessInput);
    stateCopy.guessInput = '';
    this.setState(stateCopy);

  }

  onGuessInput(e) {
    console.log('onGuessInput **** ran');
    //Get value from text input, convert to number
    const input = +e.target.value;
    if (isNaN(input)) {
      this.setState({ feedback: 'Please enter a valid number' });
      return;
    }

    this.setState({
      feedback: 'Guess between 0 and 100',
      guessInput: input
    });
  }

  onGameRestart() {
    console.log('onGameRestart **** ran');
    this.setState({
      feedback: 'Guess between 0 and 100',
      guessInput: '',
      guessList: []
    })

  }

  render() {
    const { feedback, guessList } = this.state;
    const guessCount = guessList.length;
    return (
      <div>
        <Header onRestart={this.onGameRestart}
        />
        <main role="main">
          <GuessSection feedback={feedback} />
          <GuessForm
            guessInput={this.state.guessInput}
            onSubmitGuess={this.onSubmitGuess}
            onGuessInput={this.onGuessInput}
          />
          <GuessCount count={guessCount} />
          <GuessList guesses={this.state.guessList} />
        </main>
      </div>
    );
  }


}

