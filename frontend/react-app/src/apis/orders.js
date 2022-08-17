import axios from "axios"
import { orders } from "../urls"

export const postOrder = (params) => {
  return axios.post(orders,
    {
      line_food_ids: params_line_food_ids
    },
  )
  .then(res => {
    return res.data
  })
  .catch((e) => console.log(e))
}