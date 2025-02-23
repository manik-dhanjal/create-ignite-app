import * as React from 'react'
import { blocks } from '~/api/__mock__'
import Hero from './Hero'

export default {
  title: 'Blocks/Hero',
  component: Hero,
}

const Template = (args) => <Hero {...args} />

export const Default = Template.bind({})
Default.args = blocks.Hero
