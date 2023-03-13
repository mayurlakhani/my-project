import React from 'react'
import axios from "axios"
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function ListUser() {
 
  const [posts, setPosts] = useState([]);
  useEffect(() => {
      getPosts();
  }, []);

  const getPosts =() =>{
    axios.get('http://localhost:3100/posts/').then(function(response) {
      console.log(response.data);
      setPosts(response.data);
  });
  };

  const deleteUser = (id) => {
    axios.delete(`http://localhost:3100/posts/${id}`).then(function(response){
        console.log(response.data);
        getPosts();
    });
  }
  return (
    <div className="container">
    <h6 className="p-2 bd-highlight">ListUser</h6>
    <div className="d-flex justify-content-center col-md-12">
    <div className="card shadow " style={{width:"70%"}}>
      <div class="card-body">
        <form>
          <table class="table table-sm table-striped table-hover table-responsive" >
            <thead >
              <th>id</th>
              <th>title</th>
              <th>author</th>    
              <th>Action</th>
            </thead>
            <tbody>
            {posts && posts.map((post, key) =>
                              <tr key={key}>
                                  <td>{post.id}</td>
                                  <td>{post.title}</td>
                                  <td>{post.author}</td>
                                  <td>
                                  
                                      <button className="btn btn-light"><Link to={`/${post.id}/edit`}>Edit</Link></button><span>&nbsp;&nbsp;&nbsp;</span>
                                      <button className="btn btn-danger" onClick={() => deleteUser(post.id)}>Delete</button>
                                  </td>
                              </tr>
                          )} 
            </tbody>
          </table>  
        </form>
      </div>
    </div>
  </div>
  </div>
  )
}

// rfc for component with export function 