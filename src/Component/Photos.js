import { useEffect, useState } from 'react';
import '../App.css';
import axios from 'axios';
import { Card, Container, Col, Row, ListGroup } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Home';

function Photos() {

    let [data, setdata] = useState([]);

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/photos')
            .then(function (response) {
                // handle success
                console.log(response.data);
                setdata(response.data);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            });
    }, [])

    return (
        <>
            <Home></Home>
            <Container>
                <Row>
                    {
                        data.map((ele) => {
                            return (
                                <>
                                    <Col xs={4} className='p-3'>
                                        <Card>
                                            <Card.Img variant="top" src={ele.url} />
                                            <Card.Body>
                                                <Card.Title>{ele.title}</Card.Title>
                                            </Card.Body>
                                            <ListGroup className="list-group-flush">
                                                <ListGroup.Item>Album Id : {ele.albumId}</ListGroup.Item>
                                                <ListGroup.Item>Id : {ele.id}</ListGroup.Item>
                                            </ListGroup>
                                            {/* <Card.Img variant="top" src={ele.thumbnailUrl} /> */}
                                        </Card>
                                    </Col>
                                </>
                            )
                        })
                    }
                </Row>
            </Container>

        </>
    )
}
export default Photos;