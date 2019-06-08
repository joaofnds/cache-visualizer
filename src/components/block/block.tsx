import "./index.css";
import { h } from "preact";
import { times } from "lodash"

import { toBinary } from "../../utils/binary";
import { Cache, WORD_SIZE } from "../../lib/cache";

interface BlockProps {
  cache: Cache
}

export const Block = ({ cache }: BlockProps) => {
  const blockData = times(cache.blockSize, () =>
    toBinary(0, WORD_SIZE)
  ).join(', ');

  return (
    <div class="block">
      <div>{blockData}</div>
    </div>
  )
};
