import React from 'react';
import {Col, Row, Container} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import SearchBar from '../Components/SearchBar/SearchBar';
import instaLogo from '../images/insta-title.png'

const AppHeader= (props)=> {
    return (
        <Container>
            <Row >
                <Col xs="1">
                    <FontAwesomeIcon icon= {["fab", "instagram"]} size="3x"/>
                </Col>
                <Col xs="5" className="text-left">
                    <img src={instaLogo}/>
                </Col>
                <Col xs="5" className="text-right"> <SearchBar/> </Col>
                
            </Row>
           
        </Container>
    );
}




export default AppHeader;