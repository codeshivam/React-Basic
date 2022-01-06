import React, { Component } from 'react'

export class Post extends Component{   

    render(){
        const sidebar = 
            <ul>
              {this.props.post.map((post) =>
                <li key={post.id}>
                  {post.title}
                </li>
              )}
            </ul>
        const content = this.props.post.map((p) =>
            <div key={p.id}>
                <h1>{p.id}</h1>
                <h2>{p.name}</h2>
                <p>{p.email}</p>
            </div>
        ); 
        return(
            <div>
                {sidebar}
                <hr />
                {content}
            </div>
        );
    }
}