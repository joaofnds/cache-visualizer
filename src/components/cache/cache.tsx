import { h, Fragment } from "preact";
import { times } from "lodash"
import "style.css"

import { Set } from "../set/set"
import { Cache as CacheClass } from "../../lib/cache/cache";

interface CacheProps {
  cache: CacheClass;
}

export const Cache = ({ cache }: CacheProps) => {
  return <Fragment>
    {times(cache.sets.length, index =>
      <Set
        index={index}
        indexSize={cache.indexSize}
        blockSize={cache.blockSize}
        assoc={cache.assoc}
      />
    )}
  </Fragment>;
};