import axios from "axios"

const baseUrl = "http://localhost:3001/api/clusters"

const getAll = async () => {
  const response = await axios.get(baseUrl)
  return response.data
}

const create = async (newObject) => {
  const response = await axios.post(baseUrl, newObject)
  if (response.status === 200) {
    return response
  } else {
    throw new Error(`Unexpected status code: ${response.status}`)
  }
}

const update = async (id, newObject) => {
  const response = await axios.put(`${baseUrl}/${id}`, newObject)
  return response.status(200).end()
}

const remove = async (id) => {
  const response = await axios.delete(`${baseUrl}/${id}`)
  return response.status(204).end()
}

export default { getAll, create, update, remove }