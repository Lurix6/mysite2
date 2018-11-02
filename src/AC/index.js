import {DELETE_MUSIC_ELEMENT, CHANGE_CARENT_MUSIC, SEARCH_MUSICS, ADD_NEW_MUSIC_IN_MY_LIST} from '../constants'


export function deleteMusicElement(id){
  return {
    type: DELETE_MUSIC_ELEMENT,
    payload:{ id }
  }
}

export function setNewCarentMusic(element){
  return{
    type: CHANGE_CARENT_MUSIC,
    payload: { element }
  }
}

export function setSearchDate(search){
  return{
    type:SEARCH_MUSICS,
    payload: { search }
  }
}

export function addNewMusic(element){
  return{
    type: ADD_NEW_MUSIC_IN_MY_LIST,
    payload: {element}
  }
}
