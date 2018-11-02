import {createSelector} from 'reselect'

const musicsGetter = state => state.musics
const searchDate = state => state.search

export const filterSearchMusics = createSelector(musicsGetter, searchDate, (musics, search) => {

    const result = musics.filter(element =>
       element.title.toUpperCase().includes(search.toUpperCase()) || element.executor.toUpperCase().includes(search.toUpperCase()))
    return result

} )
