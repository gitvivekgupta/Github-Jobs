import React from "react";

class File extends React.Component {

    render() {

        return(

            <div>

                Upload Resume: <span>  </span>
                <input type="file" name="file" required />

            </div>
        );
    }
};

export default File;