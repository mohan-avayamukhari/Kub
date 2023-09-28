import services from './components/services.js'
import { useState, useRef, useEffect } from 'react'

const AddCluster = () => {
  const [clusterName, setClusterName] = useState("")
  const [fdqn, setFdqn] = useState("")
  const [ip, setIp] = useState("")
  const [port, setPort] = useState("")
  const [token, setToken] = useState("")

  const handelSubmit = async (event) => {
    event.preventDefault();
    const portValue = port === "" ? "6443" : port
    const newCluster = {
      clusterName: clusterName,
      fdqn: fdqn,
      ip: ip,
      port: portValue,
      token: token
    };

    await services.create(newCluster);
    setClusterName("")
    setFdqn("")
    setIp("")
    setPort("")
    setToken("")
  };


  return (
    <div>
      <h2>Add a new cluster</h2>
      <form onSubmit={handelSubmit}>
        <div>
          <label htmlFor='clusterName'>Cluster Name: </label>
          <input id='clusterName' type='text' required value={clusterName} onChange={(e) => setClusterName(e.target.value)} />
        </div>
        <div>
          <label htmlFor='fdqn'>FDQN: </label>
          <input id='fdqn' type='text' required value={fdqn} onChange={(e) => setFdqn(e.target.value)} />
        </div>
        <div>
          <label htmlFor='ip'>IP: </label>
          <input id='ip' type='text' required value={ip} onChange={(e) => setIp(e.target.value)} />
        </div>
        <div>
          <label htmlFor='port'>Port: </label>
          <input id='port' type='text' placeholder="6443" value={port} onChange={(e) => setPort(e.target.value)} />
        </div>
        <div>
          <label htmlFor='token'>Token: </label>
          <input id='token' type='password' required value={token} onChange={(e) => setToken(e.target.value)} />
        </div>
        <button type='submit'>save</button>
      </form>
    </div >
  )
}

export default AddCluster