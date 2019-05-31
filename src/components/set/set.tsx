import "./style.css";

import { h } from "preact";
import { times } from "lodash"

import { Block } from "../block/block"
import { toBinary } from "../../utils/binary";
import { ADDRESS_SIZE } from "../../lib/cache/cache";

interface SetProps {
  index: number,
  indexSize: number,
  blockSize: number,
  assoc: number
}

export const Set = ({ index, indexSize, blockSize, assoc }: SetProps) => {
  const binaryIndex = toBinary(index, indexSize)
  const offsetSize = Math.log2(blockSize / ADDRESS_SIZE)
  const tagSize = ADDRESS_SIZE - indexSize - offsetSize

  return (
    <div class="set">
      <div>{binaryIndex}</div>
      {times(assoc, _ =>
        <Block tagSize={tagSize} offsetSize={offsetSize} />
      )}
    </div>
  )
};
