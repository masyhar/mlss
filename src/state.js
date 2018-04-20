import { Container } from 'unstated'
import { fabric } from 'fabric'

export class CanvasContainer extends Container {
  canvas = new fabric.Canvas('')
  state = {
    imageBackground: '',
    width: 1280,
    height: 720
  }

  init (canvasId) {
    const canvas = new fabric.Canvas(canvasId, {
      width: this.state.width,
      height: this.state.height
    })

    this.setCanvas(canvas)
  }

  setCanvas (canvas) {
    this.canvas = canvas
  }

  setStateByName (name, value) {
    const newState = { [name]: value }
    this.setState(newState)
  }

  changeBackgroundImage (imgUrl) {
    this.canvas.setBackgroundImage(
      imgUrl,
      this.canvas.renderAll.bind(this.canvas),
      {
        width: 1280,
        originX: 'left',
        originY: 'top'
      }
    )

    this.setState({
      imageBackground: imgUrl
    })
  }
}
