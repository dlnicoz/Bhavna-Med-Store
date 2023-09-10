import axios from 'axios';
import React ,{useState, useEffect} from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'


function Update() {
  // const [data, setData] = useState([])
  const [values, setvalues] = useState({
    name: '',
    desc: '',
    phone: ''
  })

const {id} = useParams();
  useEffect(() => {
    axios
      .get("http://localhost:3000/users/"+ id)
      .then(res => setvalues(res.data))
      .catch(err => console.log(err));
  }, [])

  const navigate = useNavigate();
  const handleUpdate= (event) => {
    event.preventDefault();
    axios
  .put("http://localhost:3000/users/"+id ,values)
  .then((res) => {
    console.log(res);
    navigate('/')
  })
  .catch(err => console.log(err));
  }
  return (
    <div className="d-flex w-100 vh-100 justify-content-center align-items-center bg-light">
    <div className="w-50 border bg-white shadow px-5 pt-3 pb-5 rounded">
      <h1>Update a User</h1>
      <form onSubmit={handleUpdate} >
        <div className="mb-2">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            name="name"
            className="form-control"
            placeholder="Enter Name"
            value={values.name}
            onChange={e => setvalues({...values , name: e.target.value})}

          />
        </div>
        <div className="mb-2">
          <label htmlFor="desc">Desc:</label>
          <input
            type="desc"
            name="desc"
            className="form-control"
            placeholder="Enter Description"
            value={values.desc}
            onChange={e => setvalues({...values , desc: e.target.value})}

          />
        </div>
        <div className="mb-2">
          <label htmlFor="phone">Phone:</label>
          <input
            type="text"
            name="phone"
            className="form-control"
            placeholder="Enter Phone"
            value={values.phone}
            onChange={e => setvalues({...values , phone: e.target.value})}

          />
        </div>
        <button className="btn btn-success">Update</button>
        <Link to="/" className="btn btn-primary ms-3">Back</Link>
      </form>
    </div>
  </div>
    )
}

export default Update