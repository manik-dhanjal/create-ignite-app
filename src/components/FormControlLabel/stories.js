import * as React from 'react'
import { Checkbox, FormControlLabel, Radio } from '@mui/material'

export default {
  title: 'Components/FormControlLabel',
  component: FormControlLabel,
  argTypes: {
    labelPlacement: {
      control: 'select',
      options: ['bottom', 'end', 'start', 'top'],
    },
  },
}

const Template = (args) => <FormControlLabel {...args} />

export const WithCheckbox = Template.bind({})
WithCheckbox.args = {
  control: <Checkbox />,
  checked: false,
  disabled: false,
  label: 'Field label',
  labelPlacement: 'end',
}

export const WithRadio = Template.bind({})
WithRadio.args = {
  control: <Radio />,
  checked: false,
  disabled: false,
  label: 'Field label',
  labelPlacement: 'end',
}
