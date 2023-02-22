import React, { useEffect, useState } from 'react'

function Api() {

    const [data, setData] = useState([]);

    const getData = async () =>{

       const res = await fetch('https://jsonplaceholder.typicode.com/users');
       const mainData = await res.json();

       setData(mainData);

       mainData.map((cval) =>{

            console.log(cval);

       })


       } 


       useEffect(() =>{

         getData();

       },[] )


    return (
    
     <>
       <h1 className='text-center mt-5'>Fetching Data from JSON placeholder</h1>

       <table border="1" className="table table-striped">

            <tr>
                <th>ID</th>
                <th>NAME</th>
                <th>USERNAME</th>
                <th>EMAIL</th>
                <th>ADDRESS</th>

            </tr>

          
            {
                data.map((cval) =>{

                    return(

                         <tr>
                            
                            <td>{cval.id}</td>
                            <td>{cval.name}</td>
                            <td>{cval.username}</td>
                            <td>{cval.email}</td>
                            <td>{cval.address.street},{cval.address.city}</td>


                         </tr>



                    );



                })






            }

               



        





       </table>
     
     </>

  )
}

export default Api;