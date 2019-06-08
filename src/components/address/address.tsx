import { h, Fragment } from "preact";
import { Cache } from "../../lib/cache";
import { toBinary } from "../../utils/binary";

interface AddressProps {
  cache: Cache
}

export const Address = ({ cache }: AddressProps) => {
  const hasOffset = cache.offsetSize !== 0;
  const binTag = toBinary(0, cache.tagSize)
  const binOffset = toBinary(0, cache.offsetSize)
  const binIndex = toBinary(0, cache.indexSize)

  return (
    <table>
      <thead>
        <tr>
          <th>tag</th>
          <th>index</th>
          {hasOffset && <th>offset</th>}
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{binTag}</td>
          <td>{binIndex}</td>
          {hasOffset && <td>{binOffset}</td>}
        </tr>
      </tbody>
    </table>
  );
}