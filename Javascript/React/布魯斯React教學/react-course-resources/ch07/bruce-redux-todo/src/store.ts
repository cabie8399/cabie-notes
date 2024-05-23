import { configureStore } from '@reduxjs/toolkit'
import todoReducer from './slices/todo'
import { loggerMiddlware, bruceMiddlware } from './middleware'
import { combineReducers } from 'redux'
import { todoApiService } from './services/todoApi'

const reducers = combineReducers({
  todoReducer,
  [todoApiService.reducerPath]: todoApiService.reducer
})

const store = configureStore({
  reducer: reducers,
  middleware: (getCurrentMiddlewares) => {
    return getCurrentMiddlewares()
      // .concat(loggerMiddlware)
      // .concat(bruceMiddlware)
      .concat(todoApiService.middleware)
  }
})

export type RootState = ReturnType<typeof reducers>
export type AppDispatch = typeof store.dispatch

export default store