import React from 'react';
import axios from 'axios';

import Projects from '../components/Project';

import { Card } from 'antd';
class ProjectDetail extends React.Component {

    state = {
        project: {}
    }

    // Method gots called everytime when data changes
    componentDidMount(){
        const projectID = this.props.match.params.projectID;
        axios.get(`http://127.0.0.1:8000/api/${projectID}`)
            .then(res => {
                this.setState({
                    project: res.data
                });
                console.log(res.data)
            })
    }

    render() {
        return (
            <Card title={this.state.project.title} style={{ margin: '20px', padding: ' 5px 5px' }}>
                <p>{this.state.project.content}</p>
            </Card>
        );
    }
}

export default ProjectDetail;
