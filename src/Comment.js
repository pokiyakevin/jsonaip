import { useEffect, useState } from "react";
import axios from 'axios';


function Comment() {

    let [data,setdata] = useState([]);

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/comments')
            .then(function (response) {
                // handle success
                console.log(response.data);
                setdata(response.data);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
    },[]);

    return (
        <>

            <table border={1} className="center">
                <tr>
                    <th>PostId</th>
                    <th>ID</th>
                    <th>NAME</th>
                    <th>Email</th>
                    <th>Body</th>
                </tr>
                {
                    data.map((ele,ind) => {
                        return(
                            <tr key={ind}>
                                <td>{ele.postId}</td>
                                <td>{ele.id}</td>
                                <td>{ele.name}</td>
                                <td>{ele.email}</td>
                                <td>{ele.body}</td>
                            </tr>
                        )
                    })
                }
            </table>

        </>
    );
}

export default Comment;