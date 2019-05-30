import "./style.css";

import { h } from "preact";
import { times } from "lodash"

import { Block } from "../block/block"
import { toBinary } from "../../utils/binary";

interface SetProps {
  index: number,
  indexSize: number,
  addressSize: number,
  blockSize: number,
  assoc: number
}

export const Set = ({ index, indexSize, addressSize, blockSize, assoc }: SetProps) => {
  const binaryIndex = toBinary(index, indexSize)
  const offsetSize = Math.log2(blockSize / addressSize)
  const tagSize = addressSize - indexSize - offsetSize

  return (
    <div class="set">
      <div>{binaryIndex}</div>
      {times(assoc, _ =>
        <Block tagSize={tagSize} offsetSize={offsetSize} />
      )}
    </div>
  )
};
