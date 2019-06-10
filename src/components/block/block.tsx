import "./index.css";
import { h } from "preact";
import { times } from "lodash"

import { toBinary } from "../../utils/binary";
import { Cache } from "../../lib/cache";

interface BlockProps {
  cache: Cache;
  setIndex: number;
  blockIndex: number;
  displayAsBinary: boolean;
}

export const Block = ({
  cache: {
    blockSize,
    sets,
    WORD_SIZE
  },
  setIndex,
  blockIndex,
  displayAsBinary = false
}: BlockProps) => {
  const blockData = times(blockSize, i => {
    let data = sets[setIndex].blocks[blockIndex].data[i]
    let displayValue = displayAsBinary ? toBinary(data, WORD_SIZE) : data;

    return <div>{displayValue}</div>
  });

  return (
    <div class="block">
      <div>{blockData}</div>
    </div>
  )
};
