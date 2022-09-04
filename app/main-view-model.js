import { Observable } from '@nativescript/core';

function getMessage(counter) {
  if (counter <= 0) {
    return 'You tapped the button 10 times. Bravo!!';
  } else {
    return `${counter} taps left`;
  }
}

export function createViewModel() {
  const viewModel = new Observable();
  viewModel.counter = 10;
  viewModel.message = getMessage(viewModel.counter);

  viewModel.onTap = () => {
    viewModel.counter--;
    viewModel.set('message', getMessage(viewModel.counter));

    // log the message to the console
    console.log(getMessage(viewModel.counter));
  };

  viewModel.onReset = () => {
    viewModel.counter = 10;
    viewModel.set('message', getMessage(viewModel.counter));
  };

  return viewModel;
}
