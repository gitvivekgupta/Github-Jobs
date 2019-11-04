import React from "react";
import File from "./resume";
import { TextArea } from "semantic-ui-react";

const Apply = props => (

    <form onSubmit={props.apply} style={{ marginBottom:"2rem" }}>

        Enter your Name: <span>  </span>
        <input className="form__input" type="text" name="avtar" required />
        <hr />

        Enter your email: <span>  </span>
        <input className="form__input" type="email" name="mail" required />
        <hr />

        Cover Letter: <span>  </span>
        <TextArea rows={6}type="text" name="letter" required />
        <hr />

        <File />
        <hr />

        <button className="form__button" type="submit" value="Apply">Apply</button>

    </form>

);

export default Apply;