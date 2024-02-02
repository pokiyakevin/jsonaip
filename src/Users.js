import axios from "axios";
import { useEffect, useState } from "react";

function Users() {

    let [data, setdata] = useState([]);
    let [add, setadd] = useState([]);

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
            })
    }, [])

    // useEffect(() => {
    //     axios.get('https://jsonplaceholder.typicode.com/users')
    //         .then(function (response) {
    //             // handle success
    //             // console.log(response.data.address);
    //             setadd(response.data);
    //         })
    //         .catch(function (error) {
    //             // handle error
    //             console.log(error);
    //         })
    // }, [])


    return (
        <>

            <table border={1} className="center">
                <tr>
                    <th>id</th>
                    <th>Name</th>
                    <th>UserName</th>
                    <th>Phone</th>
                    <th>Website</th>
                    <th>Address</th>
                    <th>Company</th>
                </tr>
                {
                    data.map((ele, ind) => {
                        return (
                            <tr key={ind}>
                                <td>{ele.id}</td>
                                <td>{ele.name}</td>
                                <td>{ele.username}</td>
                                <td>{ele.phone}</td>
                                <td>{ele.website}</td>
                                <td>
                                    <table border={1}>
                                        <tr>
                                            <th>city</th>
                                            <th>geo</th>
                                            <th>street</th>
                                            <th>suite</th>
                                            <th>zipcode</th>
                                        </tr>
                                        <tr>
                                            <td>{ele.address.city}</td>
                                            <td>
                                                <table border={1}>
                                                    <th>Lat</th>
                                                    <th>Lng</th>
                                                    <tr>
                                                        <td>{ele.address.geo.lat}</td>
                                                        <td>{ele.address.geo.lng}</td>
                                                    </tr>
                                                </table>
                                            </td>
                                            <td>{ele.address.street}</td>
                                            <td>{ele.address.suite}</td>
                                            <td>{ele.address.zipcode}</td>
                                        </tr>
                                    </table>
                                </td>
                                <td>
                                    <table>
                                        <tr>
                                            <th>BS</th>
                                            <th>catchPhrase</th>
                                            <th>Name</th>
                                        </tr>
                                        <tr>
                                            <td>{ele.company.bs}</td>
                                            <td>{ele.company.catchPhrase}</td>
                                            <td>{ele.company.name}</td>
                                        </tr>
                                    </table>
                                </td>
                            </tr>
                        )
                    })
                }
            </table>

        </>
    );
}

export default Users;