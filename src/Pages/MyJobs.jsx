import React from "react";
import { Link } from "react-router-dom";

function MyJobs() {
    return (
        <div>
            <h1>My Jobs</h1>
            <Link to="/jobs">Back to Jobs</Link>
        </div>
    );
}


export default MyJobs;