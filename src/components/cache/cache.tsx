import { h, Fragment } from "preact";
import { times } from "lodash"

import { Set } from "../set/set"

export const Cache = ({ sets, blockSize, assoc }) => {
  let setsEls = times(sets, _ => (<Set />))
  return <Fragment>{setsEls}</Fragment>;
};