import React from 'react';
import axios from 'axios';

import Projects from '../components/Project';
import CustomForm from '../components/Form';

class ProjectList extends React.Component {

    state = {
        projects: []
    }

    // Method gots called everytime when data changes
    componentDidMount(){
        axios.get('http://127.0.0.1:8000/api/')
            .then(res => {
                this.setState({
                    projects: res.data
                });
                console.log(res.data)
            })
    }

    render() {
        return (
            <div>
                <Projects data={this.state.projects} />
                <br />
                <h2>Create an Article</h2>
                <CustomForm
                    requestType="post"
                    projectID={null}
                    btnText="Create"/>
            </div>
        );
    }
}

export default ProjectList;
