import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import bookrow from '../assets/bookrow.jpg'

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
        <>
            <Books
                src={bookrow}
                className="Hero-image"
                // style={{ resizeMode: 'cover' }}
                alt="Roslagens bokhandel"
            />
            <Post>
                <ul>
                    {data.map((item) => {
                        const { id, title, post, category, date } = item
                        return (
                            <div key={id}>
                                {' '}
                                <Li>
                                    <StyledLink to={`/blog/${id}`}>
                                        <Title>{title}</Title>
                                    </StyledLink>
                                    <p>{date}</p>
                                    <p>{post}</p>

                                    <Cat>Kategori: {category}</Cat>
                                </Li>
                            </div>
                        )
                    })}
                </ul>
            </Post>
        </>
    )
}

export default BlogPosts

const Post = styled.div`
    display: flex;
    justify-content: center;
    /* margin-top: 20vh; */
    color: black;
`
const Li = styled.div`
    border: solid 1px lightgrey;
    padding: 10px;
    margin: 10px;
    width: 70vw;
`

const Title = styled.h3`
    color: black;
    list-style-type: none;
    text-decoration: none;
`
const StyledLink = styled(Link)`
    text-decoration: none;
`
const Books = styled.img`
    margin-top: 20vh;
    @media screen and (max-width: 600px) {
        margin-top: 25vh;
    }
`

const Cat = styled.p`
    color: lightgrey;
`
