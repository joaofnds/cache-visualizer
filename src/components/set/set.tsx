import "./style.css";

import { h } from "preact";
import { times } from "lodash"

import { Cache } from "../../lib/cache";
import { toBinary } from "../../utils/binary";
import { Block } from "../block/block";

interface SetProps {
  index: number,
  cache: Cache,
}

export const Set = ({ index, cache }: SetProps) => (
  <div class="set">
    <div>{index}</div>
    {times(cache.assoc, _ =>
      <Block cache={cache} />
    )}
  </div>
);
