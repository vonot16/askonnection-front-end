import axios from 'axios';
const baseUrl = 'http://192.168.1.2:3300'

export async function getUserById(_id:string) {
  const response = await axios.get(`${baseUrl}/user/${_id}`)
  return await response.data
}

export async function getInstallerById(_id:string) {
  const response = await axios.get(`${baseUrl}/installer/${_id}`)
  return await response.data
}

export async function getAllInstallers(){
  const response = await axios.get(`${baseUrl}/installer/`)
  const data = await response.data
  return data
}

export async function getAllUsers(){
  const response = await axios.get(`${baseUrl}/user/`)
  const data = await response.data
  return data
}

export async function insertNewUser(user: Object) {
  const response = await axios.post(`${baseUrl}/user/newUser`,
    {
      firstName: user.given_name,
      lastName: user.family_name,
      email: user.email,
      phone: user.phone,
      adress: user.adress,
      photo: user.picture
    })
    return response.data
}

export async function insertNewInstaller(user: Object) {
  const response = await axios.post(`${baseUrl}/installer/newInstaller`,
    {
      firstName: user.given_name,
      lastName: user.family_name,
      email: user.email,
      phone: user.phone,
      adress: user.adress,
      photo: user.picture
    })
    return response.data
}

export async function verifyEmailRegistred(userEmail: String) {
  const response = await axios.post(`${baseUrl}/auth/`, { email: userEmail });
  return response.data
}

export async function getPlanById(_id:String){
  const response = await axios.get(`${baseUrl}/plan/${_id}`)
  return await response.data
}

export async function getAllPlansFromDB(){
  const response = await axios.get(`${baseUrl}/plan/`)
  return await response.data
}

export async function getInstallerPlansFromBD(_id:string) {
  const response = await axios.get(`${baseUrl}/installer/getPlansInstallers/${_id}`)
  return await response.data
}
