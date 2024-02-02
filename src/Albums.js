import axios from "axios";
import { useEffect, useState } from "react";

function Albums(params) {

    let [data, setdata] = useState([]);

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/albums')
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

            <table border={1} className="center">
                <tr>
                    <th>UserId</th>
                    <th>ID</th>
                    <th>Title</th>
                </tr>
                {
                    data.map((ele, ind) => {
                        return (
                            <tr>
                                <td>{ele.userId}</td>
                                <td>{ele.id}</td>
                                <td>{ele.title}</td>
                            </tr>
                        )
                    })
                }
            </table>

        </>
    );
}

export default Albums;