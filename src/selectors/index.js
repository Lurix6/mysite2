import {createSelector} from 'reselect'

const musicsGetter = state => state.musics
const searchDate = state => state.search
const allFriends = state => state.accounts
const friendsFilter = state => state.friendsFilter



export const filterSearchMusics = createSelector(musicsGetter, searchDate, (musics, search) => {
    const result = musics.filter(element =>
       element.title.toUpperCase().includes(search.toUpperCase()) || element.executor.toUpperCase().includes(search.toUpperCase()))
    return result

} )


export const filterActiveFriends = createSelector(allFriends,friendsFilter ,(accounts, friendsFilter) => {
  return accounts
})



export const getFriendById = createSelector(allFriends,friendsFilter ,(accounts, friendsFilter) => {
  return accounts
})
