// import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
function Posts() {

    let [data, setdata] = useState([]);

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(function (response) {
                // handle success
                console.log(response.data);
                setdata(response.data);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
    },[])

    return (
        <>
            <table border={1} className='center'>
                <tr>
                    <th>USERID</th>
                    <th>ID</th>
                    <th>TITEL</th>
                    <th>BODY</th>
                </tr>
                {
                    data.map((ele, ind) => {
                        return (
                            <>
                                <tr>
                                    <td>{ele.userId}</td>
                                    <td>{ele.id}</td>
                                    <td>{ele.title}</td>
                                    <td>{ele.body}</td>
                                </tr>
                            </>
                        )
                    })
                }
            </table>
        </>
    );
}

export default Posts;