import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

function BlogPosts() {
    const [data, setData] = useState([])

    useEffect(() => {
        fetch('blog.json', {
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json'
            }
        })
            .then((response) => response.json())
            .then((data) => setData(data))
    }, [])

    return (
        <Post>
            <ul>
                {data.map((item) => (
                    <Li key={item.id}>
                        <h3>{item.title}</h3>
                        <p>{item.post}</p>
                    </Li>
                ))}
            </ul>
        </Post>
    )
}

export default BlogPosts

const Post = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 20vh;
`
const Li = styled.div`
    border: solid 1px black;
    padding: 10px;
    margin: 10px;
    width: 70vw;
`
