import {defaultId} from '../components/DB'
import {CHANGE_CARENT_MUSIC} from '../constants'

export default (state = defaultId, action) => {
    const {type, payload} = action

    switch (type) {
            case CHANGE_CARENT_MUSIC: return payload.element
    }

    return state

}
