import React from 'react'
import Movie from '../MoviesData';




const Movies = () => {
    return (

        <>
            <div className="container">
                <h1 className='text-center my-5'>Top Rated Movies of 2022</h1>
                <div className='row mt-3'>

                    {
                        Movie.map((cval) => {

                            return (

                                <div className='col-md-4 mt-3'>
                                <div className="card" style={{width:"18rem"}}>
                                    <img src={cval.cover} className="card-img-top" style={{height:"40vh"}} alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">{cval.name}<span className='badge bg-warning'>{cval.rating}</span></h5>
                                        
                                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        <a href={cval.watch} className="btn btn-primary">Watch Now</a>
                                    </div>
                                </div>
                                </div>
                            );
                        })
                    }
               </div>
           </div>
         </>

    );
}

export default Movies;