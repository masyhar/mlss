import React from 'react'
import { withSiteData } from 'react-static'
// Components
import Canvas from '../components/Canvas'

class Home extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      mounted: false
    }
  }

  componentDidMount () {
    this.setState({
      mounted: true
    })
  }

  render () {
    let WindowCanvas = () => <div>Application error.</div>

    if (this.state.mounted) {
      WindowCanvas = Canvas
    }

    return <WindowCanvas />
  }
}

export default withSiteData(Home)
