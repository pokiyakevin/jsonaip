import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";
import { useEffect, useState } from "react";

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
            })
    }, [])



    return (
        <>

            <table className="center" bordered striped>
                <tr>
                    <th>USERID</th>
                    <th>ID</th>
                    <th>Title</th>
                    {/* <th>Completed</th> */}
                </tr>
                {
                    data.map((ele,ind) =>{
                        return(
                            <tr key={ind}>
                                <td>{ele.userId}</td>
                                <td>{ele.id}</td>
                                <td>{ele.title}</td>
                                {/* <td>{ele.completed}</td> */}
                            </tr>
                        )
                    })
                }
            </table>

        </>
    );
}

export default Todos;