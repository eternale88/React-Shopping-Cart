import { PROMO_CODE } from './types'

// Handles change
export const handleChange = (e) => (dispatch) => {
  dispatch({
    type: PROMO_CODE,
    payload: e.target.value
  })
}
