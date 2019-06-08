import { times } from "lodash";

import { Set } from "./set";
import { Block } from "./block";

export class Cache {
  ADDRESS_SIZE: number = 8;
  WORD_SIZE: number = 8;

  cacheSize: number;
  numberOfSets: number;
  replacementPolicy: number;

  // set info
  indexSize: number;
  tagSize: number;
  indexMask: number;
  assoc: number;

  // block info
  blockSize: number;
  offsetSize: number;
  offsetMask: number;
  sets: Array<Set>;

  constructor(sets: number, blockSize: number, assoc: number) {
    this.blockSize = blockSize;
    this.indexSize = Math.log2(sets);
    this.tagSize = this.ADDRESS_SIZE - this.indexSize;
    this.offsetSize = Math.log2(blockSize)
    this.assoc = assoc;

    this.sets = times(sets, () => {
      let blocks = times(assoc, () => new Block())
      return new Set(blocks)
    })
  }
}