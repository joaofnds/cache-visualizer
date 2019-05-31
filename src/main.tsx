import "./style/style"
import { h, render, Fragment } from "preact";
import { useState } from "preact/hooks";
import { Cache, ADDRESS_SIZE } from "./lib/cache/cache";
import { Cache as CacheComponent } from "./components/cache/cache"
import { BinCounter } from "./components/BinCounter"

const App = () => {
  const [sets, setSets] = useState(4);
  const [assoc, setAssoc] = useState(1);
  const [blockSize, setBlockSize] = useState(8);

  const cache = new Cache(sets, blockSize, assoc)

  return (
    <Fragment>
      Sets:
      <BinCounter
        value={sets}
        setValue={setSets}
        min={1}
        max={64}
      />
      Assoc:
      <BinCounter
        value={assoc}
        setValue={setAssoc}
        min={1}
        max={8}
      />
      BlockSize:
      <BinCounter
        value={blockSize}
        setValue={setBlockSize}
        min={ADDRESS_SIZE}
        max={ADDRESS_SIZE * 4}
      />

      <CacheComponent
        cache={cache}
      />
    </Fragment >
  )
}

render(
  <App />,
  document.body
);
