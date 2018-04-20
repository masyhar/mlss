import React from 'react'
import { fabric } from 'fabric'
import { Subscribe } from 'unstated'
import {
  Button,
  TextField,
  FontIcon
} from 'react-md'

import { CanvasContainer } from '../state'

class Canvas extends React.Component {
  canvas = new CanvasContainer()

  constructor (props) {
    super(props)
    this.canvas = new CanvasContainer()
  }

  componentDidMount () {
    const canvas = this.canvas.init('canvas')
  }

  handleChangeBackgroundImage = (canvas) => {
    const img = canvas.state.imageBackground
    this.canvas.changeBackgroundImage(img)
  }

  handleTextFieldChange = (value, e, canvas) => {
    const name = e.target.getAttribute('name')
    canvas.setStateByName(name, value)
  }

  render () {
    return (
      <Subscribe to={[CanvasContainer]}>
        {(canvas) => (
          <div id="canvas-wrapper">
          <canvas id="canvas"></canvas>
            <div>{canvas.state.imageBackground}</div>
            <TextField
              id="image-background-with-icon-left"
              label="Image URL"
              name="imageBackground"
              type="text"
              leftIcon={<FontIcon>http</FontIcon>}
              size={50}
              fullWidth={true}
              onChange={(val, e) => this.handleTextFieldChange(val, e, canvas)}
            />
            <Button
              flat={true}
              primary={true}
              swapTheming={true}
              onClick={() => this.handleChangeBackgroundImage(canvas) }
              >
              Change Background
            </Button>
          </div>
        )}
      </Subscribe>
    )
  }
}

export default Canvas
