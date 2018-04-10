import { FETCH_WEATHER } from '../actions/index';

export default function(state = [], action) {
    switch (action.type) {
        case FETCH_WEATHER:
            // return state.push(action.payload.data); // BAD!
            // return state.concat([action.payload.data]); // BETTER!
            return [action.payload.data, ...state]; // BEST! (ES6)
    }
    return state;
}
