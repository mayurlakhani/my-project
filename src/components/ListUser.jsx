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
    <div>
    <h1 className="heading">ListUser</h1>
    <div class="container">
    <form class="align-items-center">
    <table class="table">
      <thead>
        <th>id</th>
        <th>title</th>
        <th>author</th>    
      </thead>
      <tbody>
      {posts && posts.map((post, key) =>
                        <tr key={key} class="table-active">
                            <td>{post.id}</td>
                            <td>{post.title}</td>
                            <td>{post.author}</td>
                           
                            <td>
                                <Link to={`/${post.id}/edit`} style={{marginRight: "10px"}}>Edit</Link>
                                <button onClick={() => deleteUser(post.id)}>Delete</button>
                            </td>
                        </tr>
                    )} 
      </tbody>
    </table>  
    </form>
    </div>
  </div>
  )
}

// rfc for component with export function 