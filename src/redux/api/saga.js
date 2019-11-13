import { all, fork, put, takeEvery } from "redux-saga/effects";
import { 
    PAGE_LOAD } 
from "../actions";

import {
    loadedPage
} from "./actions";

function* loadPageData({ payload }) {
    try {
        let url = `http://18.237.242.89/api/${payload.type}?page=${payload.page}`;

        console.log(url);

        const res = yield fetch(url)
            .then(res => res.json());

        console.log(res);
        yield put(loadedPage(payload.type, payload.page, res.data));
    } catch (error) {
        console.log(error);
    }
}

export function* wathcLoadPageData() {
    yield takeEvery(PAGE_LOAD, loadPageData);
}

export default function* rootSaga() {
    yield all([fork(wathcLoadPageData)]);
}
