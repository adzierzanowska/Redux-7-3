import uuid from 'uuid';

// ADD COMMENT //

export const ADD_COMMENT = 'ADD_COMMENT';

function addComment(text) {
    return {
        type: ADD_COMMENT,
        text: text,
        id: uuid.v4()
    }
}
const boundAddComment = text => dispatch(addComment(text));

// boundAddComment('nowy komentarz!');

// EDIT COMMENT //

export const EDIT_COMMENT = 'EDIT_COMMENT';

function editComment(id, text) {
    return {
        type: EDIT_COMMENT,
        id: id,
        text: text
    }
}
const boundEditComment = (text, id) => dispatch(editComment(text, id));

// REMOVE COMMENT //

export const REMOVE_COMMENT = 'REMOVE COMMENT';

function removeComment(id) {
    return {
        type: REMOVE_COMMENT,
        id: id
    }
}

const boundRemoveComment = id => dispatch(removeComment(id));

// THUMB UP COMMENT //

export const THUMB_UP_COMMENT = 'THUMB_UP_COMMENT';

function thumbUpComment(id) {
    return {
        type: THUMB_UP_COMMENT,
        id: id
    }
}

const boundThumbUpComment = id => dispatch(thumbUpComment(id));

// THUMB DOWN COMMENT //

export const THUMB_DOWN_COMMENT = ' THUMB_DOWN_COMMENT';

function thumbDownComment(id) {
    return {
        type: THUMB_DOWN_COMMENT,
        id: id
    }
}

const boundThumbDownComment = id => dispatch(thumbDownComment(id));