// import {  combineReducers } from 'redux';
// import { composeWithDevTools } from 'redux-devtools-extension';
import { configureStore, getDefaultMiddleware  } from '@reduxjs/toolkit';
import contactReducer from './contact-reducer';
import logger  from 'redux-logger';
import {
    persistStore,
    persistReducer, 
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'

// const persistConfig = {
//   key: 'contacts',
//   storage,
// }
const contactsPersistConfig = {
    key: 'contacts',
    storage,
    blacklist: ['filter'],
}

// const rootReducer = combineReducers({
//     contacts: persistReducer(persistConfig, contactReducer),
// })

// const persistedReducer = persistReducer(persistConfig, rootReducer);
const middleware = [...getDefaultMiddleware({
    serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
}), logger,];
// Используем редюсер-болванку
// const rootReducer = combineReducers({
//     contacts: contactReducer,
// })

// const store = createStore(rootReducer, composeWithDevTools());
const store = configureStore({
    reducer: {
        contacts: persistReducer(contactsPersistConfig, contactReducer),
    },
    middleware,
    devTools: process.env.NODE_ENV==='development',
})

const persistor = persistStore(store);
const storeFin ={store, persistor}

export default storeFin;

