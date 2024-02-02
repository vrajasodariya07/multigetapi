import '../App.css';
import { Container, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';


function Home() {
    return (
        <>
            <nav>
                <Container>
                    <Row>
                        <Col>
                            <div className='d-flex justify-content-between align-items-center'>
                                <div>
                                    <ul className='d-flex '>
                                        <li><a href=""><Link to="/">Home</Link></a></li>
                                        <li><a href=""><Link to="/posts">Posts</Link></a></li>
                                        <li><a href=""><Link to="/comments">Comments</Link></a></li>
                                        <li><a href=""><Link to="/albums">Albums</Link></a></li>

                                    </ul>
                                </div>
                                <div className='image'>
                                    <img src={require(`../API_600x386.png`)} alt="" />
                                </div>
                                <div>
                                    <ul className='d-flex '>
                                        <li><a href=""><Link to="/photos">Photos</Link></a></li>
                                        <li><a href=""><Link to="/todos">Todos</Link></a></li>
                                        <li><a href=""><Link to="/users">Users</Link></a></li>
                                        <li><a href="">About Us</a></li>
                                    </ul>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </nav>
        </>
    )
}
export default Home;