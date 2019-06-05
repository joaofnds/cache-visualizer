import "./style.css";

import { h } from "preact";
import { times } from "lodash"

import { Block } from "../block/block"
import { toBinary } from "../../utils/binary";

interface SetProps {
  index: number,
  indexSize: number,
  blockSize: number,
  tagSize: number,
  offsetSize: number,
  assoc: number
}

export const Set = (props: SetProps) => {
  const binaryIndex = toBinary(props.index, props.indexSize)

  return (
    <div class="set">
      <div>{binaryIndex}</div>
      {times(props.assoc, _ =>
        <Block tagSize={props.tagSize} offsetSize={props.offsetSize} />
      )}
    </div>
  )
};
