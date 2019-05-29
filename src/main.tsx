import { h, render } from "preact";
import { Cache } from "./components/cache/cache"

render(
  <Cache sets={4} blockSize={32} assoc={1} />,
  document.body
);
