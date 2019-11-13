import {
    PAGE_LOAD,
    PAGE_LOADED
} from '../actions';

export const loadPage = (type, page) => ({
    type: PAGE_LOAD,
    payload: {type, page}
});

export const loadedPage = (type, page, results) => ({
    type: PAGE_LOADED,
    payload: {type, page, results}
});