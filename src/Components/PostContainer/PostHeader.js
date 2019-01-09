import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import SearchBar from '../SearchBar/SearchBar';
const PostHeader = (props) => {
    return (
        <Container className="post-header">
            <Row >
                <Col className="post-thumb-wrapper" xs="1">
                <img className="post-thumb"src={props.thumbnailUrl} alt="" style={{height: '40px', width: 'auto', borderRadius: "50%"}}/>
                </Col>
                <Col style={{textAlign: 'right'}}>{props.username}</Col>
            </Row>
           
        </Container>
    );
}

export default PostHeader;