/* @flow */

import { type Classes } from './library'

const styles = (theme: any) => ({
  root: {
    backgroundColor: 'green',
  },
})

const classes: Classes<typeof styles> = {root: 'cls01'}

classes.foo
