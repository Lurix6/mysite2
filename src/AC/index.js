import {DELETE_MUSIC_ELEMENT} from '../constants'
import {CHANGE_CARENT_MUSIC} from '../constants'

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