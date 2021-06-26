import React from 'react';
import { Col } from 'react-bootstrap';

const Post = (props) => {
    const {id, link} = props.posts;
    return (
        <Col border="primary" md={4} >
            <h3>{id}</h3>
            <a href = {`${link}`} target="_blank" rel="noreferrer">Reade More</a>
        </Col>
    );
};

export default Post;