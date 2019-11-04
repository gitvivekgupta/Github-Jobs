import React from 'react';
import Userinput from "./comp/form";
import Jobs from "./comp/jobs";

class App extends React.Component {

  state = {

    jobs: []

    // type: undefined,
    // url: undefined,
    // created_At: undefined,
    // company: undefined,
    // company_url: undefined,
    // location: undefined,
    // job_title: undefined,
    // description: undefined,
    // company_logo: undefined,
    // how_to_apply: undefined
  }

  get_data = async (e) => {

    e.preventDefault();

    const user_input = e.target.elements.skill.value;

    const api_call = await fetch(`https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json?description=${user_input}`)
      
    const result = await api_call.json();

    this.setState({ jobs: result});
    
    // if (user_input) {

    //   console.log(result);

    //   for(var i=0; i<result.length; i++) {

    //     var jobs = result[i];

    //     this.setState({
    //       type: jobs.type,
    //       url: jobs.url,
    //       created_at: jobs.created_at,
    //       company: jobs.company,
    //       company_url: jobs.company_url,
    //       location: jobs.location,
    //       job_title: jobs.job_title,
    //       description: jobs.description,
    //       company_logo: jobs.company_logo,
    //       how_to_apply: jobs.how_to_apply,
    //       error: ""
    //     });
    //   }
    // }

    // else {

    //   this.setState({
    //     type: undefined,
    //     url: undefined,
    //     created_At: undefined,
    //     company: undefined,
    //     company_url: undefined,
    //     location: undefined,
    //     job_title: undefined,
    //     description: undefined,
    //     company_logo: undefined,
    //     how_to_apply: undefined,
    //     error: "Please give input"
    //   });
    // }

  };

  render() {

    return(

      <div>

        <div className="App">

          <header className="App-header">
            <h1 className="App-title">Gihub Jobs</h1>
          </header>

          <Userinput get_data={this.get_data} />
          <hr />
          <Jobs jobs={this.state.jobs} />

        </div>
        
        {/* <div className="wrapper">

          <div className="main">

            <div className="container">

              <div className="row">

                <div className="title-container">

                  <br/>
                  <h2>What Programming language are you looking a Job in?</h2>
                  <br/>

                  <Userinput get_data={this.get_data} />

                  <BrowserRouter>

                      <Route path="/result" Component=

                        {
                          <Show 
                            type = {this.state.type} 
                            url = {this.state.url}
                            created_at = {this.state.created}
                            company = {this.state.company}
                            company_url = {this.state.company_url}
                            location = {this.state.location}
                            job_title = {this.state.job_title}
                            description = {this.state.description}
                            company_logo = {this.state.company_logo}
                            how_to_apply = {this.state.how_to_apply}
                            error = {this.state.error} />
                        } />

                  </BrowserRouter>
                  
                </div>

              </div>

            </div>

          </div>

        </div> */}

      </div>

    );
  }
};


export default App;
