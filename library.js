/* @flow */

export type Classes<Styles> = $Call<
  <T>((any) => T | T) => { [name: $Keys<T>]: string },
  Styles
>
