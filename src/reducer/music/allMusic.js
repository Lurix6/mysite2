import {fullMusics } from '../../components/DB'



export default (musicState = fullMusics, action) => {
  const {type, payload} = action

  switch (type) {

    case 'ssss':  return musicState
  }

  return musicState
}
