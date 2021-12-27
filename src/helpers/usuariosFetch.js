import axios from 'axios'

export const getUsuarios = async () => {
    try {
        const resp = await axios.get('https://reqres.in/api/users?page=1')
        return resp.data
    } catch {
        console.log(error)
    }

  }