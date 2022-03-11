import React from 'react'
import PropTypes from 'prop-types'
import { TouchableOpacity, Text } from 'react-native'
import { colors } from 'theme'

const styles = {
  root: {
    paddingVertical: 10, paddingHorizontal: 16,
    borderRadius: 7, borderColor: colors.colorBlack
  },
  text: {
    textAlign: 'center',
    fontSize: 15.5,
  },
}

const Button = ({
  title,
  width,
  height,
  color,
  backgroundColor,
  borderColor,
  borderWidth,
  onPress,
  children,
  textStyle,
  style,
  disabled
}) => {
  const btnStyle = [styles.root, { width, height, backgroundColor, borderColor, borderWidth, disabled }, style]
  const txtStyle = [styles.text, { color }, textStyle]
  return (
    <TouchableOpacity onPress={onPress} style={btnStyle}>
      {title && <Text style={txtStyle}>{title}</Text>}
      {children}
    </TouchableOpacity>
  )
}

Button.propTypes = {
  title: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
  color: PropTypes.string,
  backgroundColor: PropTypes.string,
  borderColor: PropTypes.string,
  borderWidth: PropTypes.number,
  onPress: PropTypes.func,
  children: PropTypes.string,
  textStyle: PropTypes.shape({}),
  style: PropTypes.shape({}),
  disabled: PropTypes.bool
}

Button.defaultProps = {
  title: null,
  width: 'auto',
  height: 'auto',
  color: colors.colorBlack,
  backgroundColor: colors.colorDimBlack,
  borderColor: '#00000000',
  borderWidth: 0,
  onPress: () => { },
  children: null,
  textStyle: {},
  style: {},
  disabled: false
}

export default Button
