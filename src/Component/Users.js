import { useEffect, useState } from 'react';
import '../App.css';
import axios from 'axios';
import { Table } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Home';

function Users() {

    let [data, setdata] = useState([]);

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users')
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
                        <th>Id</th>
                        <th>Name</th>
                        <th>Username</th>
                        <th>Email</th>
                        <th>Address
                            <Table striped bordered hover>
                                <thead>
                                    <tr>
                                        <th>Street</th>
                                        <th>Suite</th>
                                        <th>City</th>
                                        <th>ZipCode</th>
                                        <th>
                                            <Table striped bordered hover>
                                                <thead>
                                                    <tr>
                                                        <th>Latitude</th>
                                                        <th>Longitude</th>
                                                    </tr>
                                                </thead>
                                                <tbody>

                                                </tbody>
                                            </Table>
                                        </th>
                                    </tr>
                                </thead>
                            </Table>
                        </th>
                        <th>Phone</th>
                        <th>Website</th>
                        <th>Company
                            <Table striped bordered hover>
                                <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>Catch Phrase</th>
                                        <th>Bs</th>
                                    </tr>
                                </thead>
                            </Table>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((ele) => {
                            return (
                                <>
                                    <tr>
                                        <td>{ele.id}</td>
                                        <td>{ele.name}</td>
                                        <td>{ele.username}</td>
                                        <td>{ele.email}</td>
                                        <td style={{ border: "1px solid black" }}>
                                            <tbody>
                                                <tr>
                                                    <td style={{ border: "1px solid black" }}>{ele.address.street}</td>
                                                    <td style={{ border: "1px solid black" }}>{ele.address.suite}</td>
                                                    <td style={{ border: "1px solid black" }}>{ele.address.city}</td>
                                                    <td style={{ border: "1px solid black" }}>{ele.address.zipcode}</td>
                                                    <td style={{ border: "1px solid black" }}>
                                                        <tbody>
                                                            <tr>
                                                                <td style={{ border: "1px solid black" }}>{ele.address.geo.lat}</td>
                                                                <td style={{ border: "1px solid black" }}>{ele.address.geo.lng}</td>
                                                            </tr>
                                                        </tbody>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </td>
                                        <td>{ele.phone}</td>
                                        <td>{ele.website}</td>
                                        <td style={{ border: "1px solid black" }}>
                                            <tbody>
                                                <tr>
                                                    <td style={{ border: "1px solid black" }}>{ele.company.name}</td>
                                                    <td style={{ border: "1px solid black" }}>{ele.company.catchPhrase}</td>
                                                    <td style={{ border: "1px solid black" }}>{ele.company.bs}</td>
                                                </tr>
                                            </tbody>
                                        </td>
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
export default Users;