import "./style/style"
import { h, render, Fragment } from "preact";
import { useState } from "preact/hooks";
import { Cache } from "./components/cache/cache"
import { BinCounter } from "./components/BinCounter"

const App = () => {
  const [sets, setSets] = useState(4);
  const [assoc, setAssoc] = useState(1);
  const [addressSize, setAddressSize] = useState(8);
  const [blockSize, setBlockSize] = useState(8);

  return (
    <Fragment>
      Sets:
      <BinCounter
        value={sets}
        setValue={setSets}
        min={1}
        max={64}
      />
      <br />
      Assoc:
      <BinCounter
        value={assoc}
        setValue={setAssoc}
        min={1}
        max={8}
      />
      <br />
      AddressSize:
      <BinCounter
        value={addressSize}
        setValue={setAddressSize}
        min={1}
        max={blockSize}
      />
      <br />
      BlockSize:
      <BinCounter
        value={blockSize}
        setValue={setBlockSize}
        min={addressSize}
        max={addressSize * 4}
      />
      <br />

      <Cache
        addressSize={addressSize}
        sets={sets}
        blockSize={blockSize}
        assoc={assoc}
      />
    </Fragment >
  )
}

render(
  <App />,
  document.body
);
