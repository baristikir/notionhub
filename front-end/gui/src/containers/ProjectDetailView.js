// -- Package Imports -- //
import React from 'react';
import axios from 'axios';

// -- Project Resource Imports -- //
import Projects from '../components/Project';
import CustomForm from '../components/Form';

// -- Style Component Imports -- //
import { Card, Button } from 'antd';


// Project Detail View
// Currently displaying title and content of the selcted project

class ProjectDetail extends React.Component {

    // Property as a single Project object.
    state = {
        project: {}
    }

    // Method gets called everytime when data changes
    componentDidMount(){
        const projectID = this.props.match.params.projectID;
        axios.get(`http://127.0.0.1:8000/api/projects/${projectID}/`)
            .then(res => {
                this.setState({
                    project: res.data
                });
                // for testing porpuses
                // console.log(res.data)
            })
    }

    // Delete
    // Button Submit method for deleting the current Project object
    handleDelete = (event) => {
         const projectID = this.props.match.params.projectID;
         axios.delete(`http://127.0.0.1:8000/api/${projectID}/`);
         this.props.history.push('/');

         // One way to do the reload on page
         // this.forceUpdate();
    }

    // Card View + Form
    // Project detail data displayed as Card View
    // Form for updating the current object
    render() {
        return (
            <div>
            <Card title={this.state.project.title} style={{ margin: '20px', padding: ' 5px 5px' }}>
                <p>{this.state.project.content}</p>
            </Card>
            <CustomForm
                requestType="put"
                projectID={this.props.match.params.projectID}
                btnText="Update" />
            <form onSubmitCapture={this.handleDelete}>
                <Button type="danger" htmlType="submit">Delete</Button>
            </form>
            </div>
        );
    }
}

export default ProjectDetail;
