import {combineReducers} from 'redux'
import songs from './songs'
import curentElement from './curentMusic'
import search from './search'

export default combineReducers({
    musics: songs,
    curentElement,
    search
})
