import "./style/style"
import { h, render, Fragment } from "preact";
import { useState } from "preact/hooks";
import { Cache } from "./components/cache/cache"

const BinCounter = ({ value, setValue }) => {
  return (
    <Fragment>
      <button onClick={_ => setValue(value >> 1)}>-</button >
      {value}
      <button onClick={_ => setValue(value << 1)}>+</button>
    </Fragment>
  )
}

const App = () => {
  const [sets, setSets] = useState(4);
  const [assoc, setAssoc] = useState(1);
  const [addressSize, setAddressSize] = useState(8);
  const [blockSize, setBlockSize] = useState(8);

  return (
    <Fragment>
      Sets: <BinCounter value={sets} setValue={setSets} />
      <br />
      Assoc: <BinCounter value={assoc} setValue={setAssoc} />
      <br />
      AddressSize: <BinCounter value={addressSize} setValue={setAddressSize} />
      <br />
      BlockSize: <BinCounter value={blockSize} setValue={setBlockSize} />
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
  <App />
  document.body
);
