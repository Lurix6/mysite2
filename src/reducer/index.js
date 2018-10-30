import {combineReducers} from 'redux'
import songs from './songs'
import curentElement from './curentMusic'

export default combineReducers({
    musics: songs,
    curentElement
})
