'use strict';

import React from 'react'
import reactCSS from 'reactcss'
import { SwatchesPicker } from 'react-color'

class SketchBackgroundColor extends React.Component {
  // Component state with initial color and color picker visibility
  state = {
    displayColorPicker: false,
    color: {
      r: '255',
      g: '205',
      b: '210',
      a: '1',
    },
  };

  // Toggle display of color picker
  handleClick = () => {
    this.setState({ displayColorPicker: !this.state.displayColorPicker })
  };

  // Close color picker
  handleClose = () => {
    this.setState({ displayColorPicker: false })
  };

  // Update state and notify parent component of color change
  handleBackgroundColorChange = (color) => {
    this.setState({ color: color.rgb })
    this.props.onColorChange(color.hex) // Notify parent component of color change
  };

  render() {
    // ReactCSS styles for the color picker
    const styles = reactCSS({
      'default': {
        color: {
          width: '50px',
          height: '50px',
          borderRadius: '100%',
          background: `rgba(${ this.state.color.r }, ${ this.state.color.g }, ${ this.state.color.b }, ${ this.state.color.a })`,
        },
        swatch: {
          padding: '5px',
          background: '#fff',
          borderRadius: '100%',
          boxShadow: '0 0 0 1px rgba(0,0,0,.1)',
          display: 'inline-block',
          cursor: 'pointer',
        },
        popover: {
          position: 'absolute',
          zIndex: '2',
        },
        cover: {
          position: 'fixed',
          top: '0px',
          right: '0px',
          bottom: '0px',
          left: '0px',
        },
      },
    })

    return (
      <div>
        {/* Color swatch */}
        <div style={styles.swatch} onClick={this.handleClick}>
          <div style={styles.color} />
        </div>

        {/* Color picker popover */}
        {this.state.displayColorPicker ? (
          <div style={styles.popover}>
            <div style={styles.cover} onClick={this.handleClose} />
            {/* SwatchesPicker component for color selection */}
            <SwatchesPicker
              height={"250px"}
              width={"170px"}
              color={this.state.color}
              onChange={this.handleBackgroundColorChange}
            />
          </div>
        ) : null}
      </div>
    );
  }
}

export default SketchBackgroundColor