import React from "react";
import {  Link } from "react-router-dom";

const Jobs = props => (

    <div className="container">
        <div className="row">

            {
                props.jobs.map((job) => {

                    return (

                        <div className="col-md-4" key={job.id}>

                            <div className="recipes__box">

                                <img className="recipes__box-img" src={job.company_logo} alt={job.company} />

                                <span>  </span>
                            
                                <div className="recipe__text">

                                    <h5 className="recipes__title">
                                    
                                        { job.company.length < 15 ? `${ job.company }` : `${job.company.substring(0, 20)}...` }

                                    </h5>

                                    <hr />

                                    <h5 className="recipes__subtitle"><b>Title:</b> <span>
                                        { job.title.length < 20 ? `${ job.title }` : `${job.title.substring(0, 25)}...` }
                                    </span></h5>

                                </div>

                                <button className="recipe_buttons">
                                    <Link to={{ 
                                        pathname: `/result/${job.id}`,
                                        state: { 
                                            id: job.id
                                        }
                                        }}>View Job
                                    </Link>
                                </button>

                            </div>

                            <hr />

                        </div>
                    
                    );
                }) 
            }

        </div>

    </div>
);

export default Jobs;