import {musics} from '../components/DB'
import {DELETE_MUSIC_ELEMENT} from '../constants'

export default (musicState = musics, action) => {
  const {type, payload} = action

  switch (type) {
    case DELETE_MUSIC_ELEMENT: return musicState.filter(music => music.id !== payload.id)
  }

  return musicState
}
