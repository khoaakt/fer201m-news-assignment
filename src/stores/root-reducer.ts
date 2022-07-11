import { combineReducers } from 'redux'

import navigationReducer from './navigation-slice'
import newsReducer from './news-slice'

const rootReducer = combineReducers({
  news: newsReducer,
  navigation: navigationReducer
})

export default rootReducer