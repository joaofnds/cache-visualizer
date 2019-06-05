import "./index.css";
import { h } from "preact";
import { toBinary } from "../../utils/binary";

interface BlockProps {
  tagSize: number,
  offsetSize: number
}

export const Block = ({ tagSize, offsetSize }: BlockProps) => {
  const hasOffset = offsetSize !== 0;
  const binTag = toBinary(tagSize, tagSize)
  const binOffset = toBinary(offsetSize, offsetSize)

  return (
    <div class="block">
      <div>{binTag}</div>
      {hasOffset && <div>{binOffset}</div>}
    </div>
  )
};
