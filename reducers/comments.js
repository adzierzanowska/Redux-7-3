import {EDIT_COMMENT, REMOVE_COMMENT, THUMB_DOWN_COMMENT, THUMB_UP_COMMENT} from './actions';

function comments(state = [], action) {
    switch(action.type) {
        case ADD_COMMENT:
            return [{
                id: action.id,
                text: action.text,
                votes: 0
            }
                , ...state.comments];

        case REMOVE_COMMENT:
            return Object.assign({}, state, {
                comments: state.comments.filter(
                    comment => comment.id !== action.id)
            });
        case EDIT_COMMENT:
            return Object.assign({}, state, {
                comments: state.comments.map(
                    comment => comment.id === action.id
                        ? Object.assign(comment, {text: action.text}) : comment)
            });
        case THUMB_UP_COMMENT:
            return Object.assign({}, state, {
                comments: state.comments.map(
                    comment => comment.id === action.id
                        ? Object.assign(comment, {votes: comment.votes + 1}) : comment)
            });
        case THUMB_DOWN_COMMENT:
            return Object.assign({}, state, {
                comments: state.comments.map(
                    comment => comment.id === action.id
                        ? Object.assign(comment, {votes: comment.votes - 1}) : comment)
            });

        default:
            return state;
    }
}

export default comments;