import { NoteName } from './theory';
import { PLAY_NOTE, STOP_NOTE, STOP_ALL_NOTES, Action } from './actions';
// import { makeSynth } from './synth';

interface AppState {
  notes: NoteName[],
  // synth: any
}

const initialState: AppState = {
  notes: [],
  // synth: makeSynth()
}

export function rootReducer(state = initialState, action: Action): AppState {
  switch (action.type) {
    case PLAY_NOTE:
      return {
        ...state,
          notes: [...state.notes, action.note]
      }

    case STOP_NOTE:
      return {
        ...state,
        notes: state.notes.filter((note: NoteName) => {
          return action.note !== note;
        })
      }

    // case STOP_ALL_NOTES:
    //   return {
    //     ...state,
    //     notes: []
    //   }

    default:
      return state;
  }
}