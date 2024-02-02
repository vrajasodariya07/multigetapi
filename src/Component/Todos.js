import { useEffect, useState } from 'react';
import '../App.css';
import axios from 'axios';
import { Table } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Home';

function Todos() {

    let [data, setdata] = useState([]);

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/todos')
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
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>User Id</th>
                        <th>Id</th>
                        <th>Title</th>
                        <th>Completed</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((ele) => {
                            return (
                                <>
                                    <tr>
                                        <td>{ele.userId}</td>
                                        <td>{ele.id}</td>
                                        <td>{ele.title}</td>
                                        <td>{ele.completed ? "True" : "False"}</td>
                                    </tr>
                                </>
                            )
                        })
                    }
                </tbody>
            </Table>
        </>
    )
}
export default Todos;