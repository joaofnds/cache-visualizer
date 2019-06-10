import { h, Fragment } from "preact";
import { flow, parseInt } from "lodash";
import { StateUpdater } from "preact/hooks/src";

interface BinCounterProps {
  value: number,
  setValue: StateUpdater<number>,
  min: number,
  max: number
}

export const BinCounter = ({ value, setValue, min, max }: BinCounterProps) => {
  const increase = () => setValue(value << 1);
  const decrease = () => setValue(value >> 1);
  const change = (n: number) => {
    if (min <= n && n <= max && n != value) {
      return n > value ? increase() : decrease();
    }
  }
  const inputValue = ({ target }) => target.value;

  return (
    <Fragment>
      <input
        type="number"
        min={min}
        max={max}
        value={value}
        onInput={flow([inputValue, parseInt, change])}
      />
    </Fragment>
  )
}