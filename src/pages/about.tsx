import * as React from 'react';
import App from '../components/App';

interface Props {
  message: string
}

export default class About extends React.Component<Props> {
  
    static async getInitialProps({ query }) {
      const content = await new Promise(res => setTimeout(res, 1000))
      return {
        message: '!!'
      }
    }
    
    render() {
      return (<App><p>About Page ${this.props.message}</p></App>)
    }
  
  }