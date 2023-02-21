import { useSelector } from 'react-redux';
import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import { globalReducer } from './reducers/globalReducer';

const rootReducer = combineReducers({
  global: globalReducer,
});

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

// Infer the `RootState` and `AppDispatch` types from the store itself
// type RootState = ReturnType<typeof store.getState>;

// const useAppDispatch = () => useDispatch<AppDispatch>();
const useAppSelector = useSelector;

export { store, useAppSelector };
