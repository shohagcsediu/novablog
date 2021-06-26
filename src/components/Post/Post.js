import React from 'react';
import { Col } from 'react-bootstrap';

const Post = (props) => {
    const {id} = props.posts;
    return (
        <Col border="primary" md={4} >
            <h3>{id}</h3>
            
        </Col>
    );
};

export default Post;