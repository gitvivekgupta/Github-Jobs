import React from "react";

const Userinput = props => (

    <form onSubmit={props.get_data} style={{ marginBottom:"2rem" }}>

        Enter your Preferred language: <span>  </span>
        <input className="form__input" type="text" name="skill" placeholder="python" required />
        <span>  </span>
        <button className="form__button" type="submit" value="Submit">Submit</button>

    </form>

);

export default Userinput;