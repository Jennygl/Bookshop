import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
// import bookrow from '../assets/bookrow.jpg'
// import shelf from '../assets/shelf.jpg'

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
            {/* <Books
                src={shelf}
                className="Hero-image"
                // style={{ resizeMode: 'cover' }}
                alt="Roslagens bokhandel"
            /> */}
            <Post>
                <ul>
                    {data.map((item) => {
                        const { id, title, post, category, date } = item
                        const itemArr = post.split('')
                        const itemShort = itemArr.splice(0, 200).join('')
                        return (
                            <div key={id}>
                                {' '}
                                <Li>
                                    <StyledLink to={`/blog/${id}`}>
                                        <Title>{title}</Title>
                                    </StyledLink>
                                    <p>{date}</p>
                                    {/* <p>{post}</p> */}
                                    <p>
                                        {itemShort}{' '}
                                        <StyledLink to={`/blog/${id}`}>
                                            <span style={{ color: 'grey' }}>
                                                Forsätt läsa
                                            </span>
                                        </StyledLink>
                                    </p>

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
    color: black;
    margin-top: 20vh;
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
// const Books = styled.img`
//     position: fixed;
//     bottom: 10px;
//     right: 10px;
//     width: 250px;
//     height: 250px;
//     border-radius: 50%;
//     @media screen and (max-width: 930px) {
//         width: 100px;
//         height: 100px;
//     }
// `

const Cat = styled.p`
    color: lightgrey;
`
