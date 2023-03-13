import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useLocation, useParams } from "react-router-dom";

export default function CreateUser() {
  const nameUrl = window.location.href;
  const navigate = useNavigate();
  const [inputs, setInputs] = useState([]);
  const location = useLocation();
  const {id} = useParams();


  useEffect(() => {
    console.log('location', location.pathname)
    getPostbyID();
  }, [location.pathname]);

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}));
}

  const handleSubmit = (event) => {
    event.preventDefault();
     
    if (location.pathname === "/create")  {
      axios.post('http://localhost:3100/posts', inputs).then(function(response){
        console.log(response.data);
        navigate('/');
    });
    }else{
      axios.put(`http://localhost:3100/posts/${id}`, inputs).then(function(response){
        console.log(response.data);
        navigate('/');
    });
      
    };
   
}

function getPostbyID() {
  axios.get(`http://localhost:3100/posts/${id}`).then(function(response) {
      console.log(response.data);
      setInputs(response.data);
  });
}
  return (
    <div className="container">
     <h6 className="p-2 bd-highlight">CreateUser</h6> 
    <form className="d-flex justify-content-center">
    <div class="col-md-6">
      <div class="row">
      <label for="postid" class="form-label">PostId</label>
      <input type="text" value={inputs.id} name="id" class="form-control" id="id" aria-describedby="emailHelp" onChange={handleChange}/>
      <div id="postid" class="form-text">We'll never share your email with anyone else.</div>
      </div>
      <div class="row">
      <label for="title" class="form-label">Title</label>
      <input type="text" value={inputs.title} name="title" class="form-control" id="title" aria-describedby="emailHelp" onChange={handleChange}/>
      <div id="title" class="form-text">We'll never share your email with anyone else.</div>
      </div>
      <div class="row">
      <label for="author" class="form-label">Author</label>
      <input type="text" value={inputs.author} name="author" class="form-control" id="author" aria-describedby="emailHelp" onChange={handleChange}/>
      <div id="author" class="form-text">We'll never share your email with anyone else.</div>
      <button type="button" className="btn btn-primary" onClick={handleSubmit}>submit</button>
      </div>
    </div>
    </form>
    </div>
  )
}
