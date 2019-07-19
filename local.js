/* @flow */

export type Classes<Styles> = $Call<
  <T>((any) => T | T) => { [name: $Keys<T>]: string },
  Styles
>

const styles = (theme: any) => ({
  root: {
    backgroundColor: 'green',
  },
})

const classes: Classes<typeof styles> = {root: 'cls01'}

classes.foo
