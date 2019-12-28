import React from 'react'

import { storiesOf } from '@storybook/react'
import { Button } from './Button'

storiesOf('Button', module).add('with background', () => (
    <Button bg="red">Hello world</Button>
)).add('with background 2', () => (
    <Button bg="red">Hello world 2</Button>
))