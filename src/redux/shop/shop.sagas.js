import { takeEvery } from 'redux-saga/effects';

import ShopActionTypes from './shop.types';

// Run sagas concurrently
export function* fetchCollectionsAsync() {
    yield console.log('Firing');
}

export function* fetchCollectionsStart() {
    yield takeEvery(ShopActionTypes.FETCH_COLLECTIONS_START, fetchCollectionsAsync)
}