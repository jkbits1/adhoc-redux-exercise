export const INCREMENT_COUNTER        = 'INCREMENT_COUNTER';
export const DECREMENT_COUNTER        = 'DECREMENT_COUNTER';
export const INCREMENT_TWICE_COUNTER  = 'INCREMENT_TWICE_COUNTER';

export function increment() {
  return {
    type: INCREMENT_COUNTER
  };
}

export function incrementTwice() {
  return {
    type: INCREMENT_TWICE_COUNTER
  };
}

export function decrement() {
  return {
    type: DECREMENT_COUNTER
  };
}

export function incrementIfOdd() {
  return (dispatch, getState) => {
    const {counter} = getState();

    if (counter % 2 === 0) {
      return;
    }

    dispatch(increment());
  }
}

export function incrementAsync (delay = 1000) {
  return dispatch => {
    setTimeout(() => {
      dispatch(increment());
    }, delay);
  }
}
