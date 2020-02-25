import React from 'react'
import { action } from '@storybook/addon-actions'
import SmartButton from 'components/SmartButton'
import '../App.sass'

export default {
  title: 'SmartButton',
  component: SmartButton,
}

export const Text = () => <SmartButton color="red" isChecked={true} text="Hello World" />
