import axios from 'axios'
//import { baseURL } from '../config/api'

export const getUsers = (page) => {
    return axios.get(`https://gorest.co.in/public/v1/users?page=${page}`)    
        .then(res => res.data)
        
     
}


/**
 * 
 * @param {name, email, gender, status} data  
 */
 axios.defaults.headers = {
  Authorization:
    "Bearer 1dc413990299ee6e8618d4eb9c11574a75ed36fcf5194d302a7965724447010a",
};



export const addUsers = (data) => {
    data.date = new Date()
    data.completed = false
    return axios.post("https://gorest.co.in/public/v1/users/", 
        data ,
        axios.defaults.headers
        )
        .then(res => res.data.data)
}

export const deleteUsers = (id) => {
  return axios.delete("https://gorest.co.in/public/v1/users/"+ id,
      axios.defaults.headers
      )
      .then(res=>res.data)
}

export const editUsers = (id, data) => {
    
  return axios.put("https://gorest.co.in/public/v1/users/"+ id,
      data,
      axios.defaults.headers
      )
      .then(res => res.data)
}