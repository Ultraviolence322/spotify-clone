import {createStore, AnyAction, Store} from 'redux';
import {createWrapper, Context, HYDRATE, MakeStore} from 'next-redux-wrapper';
import { reducer, RootState } from './reducers';

const makeStore: MakeStore<Store<RootState>> = (context: Context) => createStore(reducer);

export const wrapper = createWrapper<Store<RootState>>(makeStore, {debug: true});
