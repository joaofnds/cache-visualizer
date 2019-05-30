import { h, Fragment } from "preact";
import { times } from "lodash"
import "style.css"

import { Set } from "../set/set"

export const Cache = ({ addressSize, sets, blockSize, assoc }) => {
  const indexSize = Math.log2(sets)

  return <Fragment>
    {times(sets, index =>
      <Set
        index={index}
        indexSize={indexSize}
        blockSize={blockSize}
        addressSize={addressSize}
        assoc={assoc}
      />
    )}
  </Fragment>;
};