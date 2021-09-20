import {createStore, AnyAction, Store} from 'redux';
import {createWrapper, Context, HYDRATE, MakeStore} from 'next-redux-wrapper';
import { reducer, RootState } from './reducers';

// create a makeStore function
console.log('reducer', reducer);

const makeStore: MakeStore<Store<RootState>> = (context: Context) => createStore(reducer);

// export an assembled wrapper
export const wrapper = createWrapper<Store<RootState>>(makeStore, {debug: true});
console.log('wrapper', wrapper);
