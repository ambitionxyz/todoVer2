import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "@redux-saga/core";

import reducer from "./rootReducer";
import rootSaga from "./rootSaga";

const sagaMiddleware = createSagaMiddleware();
const store = createStore(reducer(), applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);
export default store;
