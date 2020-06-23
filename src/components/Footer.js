import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Footer() {

    return(
        <footer className="mt-5">
            <Container fluid={true}>
                <Row className="border-top justify-content-right p-3">
                    <Col className="p-0 text-right">
                        Aarvi Patel
                    </Col>
                </Row>
            </Container>
        </footer>
    );

}

export default Footer;