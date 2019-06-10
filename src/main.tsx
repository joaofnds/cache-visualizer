import "./style/style"
import { random } from "lodash";
import { h, render, Fragment } from "preact";
import { useState } from "preact/hooks";
import { Cache } from "./lib/cache/cache";
import { Cache as CacheComponent } from "./components/cache/cache"
import { BinCounter } from "./components/BinCounter"
import { Address } from "./components/address/address";

const App = () => {
  const [sets, setSets] = useState(4);
  const [assoc, setAssoc] = useState(1);
  const [blockSize, setBlockSize] = useState(4);

  const cache = new Cache(sets, blockSize, assoc)
  for (let i = 0; i < 1024; i++) {
    let address = random(0, 512);
    cache.get(address);
  }

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
        min={1}
        max={16}
      />

      <Address cache={cache} />

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
