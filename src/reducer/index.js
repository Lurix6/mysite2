import {combineReducers} from 'redux'
import songs from './songs'
import curentElement from './curentMusic'
import search from './search'
import noveltySongs from './exempleNewSongs'

export default combineReducers({
    musics: songs,
    curentElement,
    search, noveltySongs
})
