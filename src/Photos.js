import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import { Card, Row, Col, Button } from 'react-bootstrap';
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
            })
    }, [])

    return (
        <>

            <Row>
                {

                    data.map((ele, ind) => {
                        return (
                            <Col lg="3">
                                <Card style={{ width: '18rem' }}>
                                    <Card.Img variant="top" src={ele.url} />
                                    <Card.Body>
                                        <Card.Title>{ele.title}</Card.Title>
                                        <Card.Text>
                                            AlbumId:-{ele.albumId} <br />
                                            ID:-{ele.id}
                                        </Card.Text>
                                        <Button variant="primary">Go somewhere</Button>
                                    </Card.Body>
                                </Card>
                            </Col>
                        )
                    })



                }
            </Row>

        </>
    );
}

export default Photos;