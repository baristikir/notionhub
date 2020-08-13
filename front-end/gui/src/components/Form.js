import React, { useState } from 'react';
import { Form, Input, Button } from 'antd';

import axios from 'axios';

class CustomForm extends React.Component {

  handleFormSubmit = (event, requestType, projectID) => {
    const title = event.target.elements.title.value;
    const content = event.target.elements.content.value;

    switch ( requestType ) {
      case 'post':
          return axios.post('http://127.0.0.1:8000/api/', {
            title: title,
            content: content
          })
          .then(res => console.log(res))
          .catch(err => console.err(err))

      case 'put':
          return axios.put(`http://127.0.0.1:8000/api/${projectID}/`, {
              title: title,
              content: content
            })
            .then(res => console.log(res))
            .catch(err => console.err(err))

    }
  }

  render(){
     return (
        <div>
          <Form onSubmitCapture={(event) => this.handleFormSubmit(
                                              event,
                                              this.props.requestType,
                                              this.props.projectID    )}>
            <Form.Item label="Title">
              <Input name="title" placeholder="Put title here" />
            </Form.Item>
            <Form.Item label="Content">
              <Input name="content" placeholder="Put content here" />
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit">{this.props.btnText}</Button>
            </Form.Item>
          </Form>
        </div>
      );
  }
}

export default CustomForm;
