import React from 'react';
import Apply from "./apply";

var flag;

class Job extends React.Component {

    state = {
        activejob: [],
        flag: 0
    }

    componentDidMount = async () => {

        const id = this.props.location.state.id;
        const req = await fetch(`https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions/${id}.json?markdown=true`)
        const res = await req.json();
        console.log(res);
        this.setState({ activejob: res });
    }

    apply = async (e) => {

        e.preventDefault();
        this.setState({ flag: 1 })
        
    }

    render() {

        const job = this.state.activejob;

        return(

            <div className="container">

                { 
                    this.state.activejob.length !== 0 &&

                        <div className="active-recipe">

                            <img className="active-recipe__img" src={job.company_logo} alt={job.title} />
                            <h4 className="active-recipe__title"><span>{ job.company }</span></h4><hr />
                            <h4 className="active-recipe__publisher">Title: <span>{ job.title }</span></h4>
                            Company Profile:<a className="active-recipe__website"><span>{ job.company_url }</span></a>
                            <hr />
                            Location:<a className="active-recipe__website"><span>{ job.location }</span></a>
                            <hr />
                            Description: <p>{ job.description }</p>
                            <hr />
                            <button className="active-recipe__button" onClick={this.apply}>Apply Here</button>
                            <hr />
                        </div>
                    
                }

                { this.state.flag == 1 &&
                    <div className="recipes__box"><Apply /></div>
                    
                }
            </div>
        );
    }
};

export default Job;