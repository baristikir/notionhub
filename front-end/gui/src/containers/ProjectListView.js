import React from 'react';
import axios from 'axios';

import Projects from '../components/Project';


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
            <Projects data={this.state.projects} />
        );
    }
}

export default ProjectList;