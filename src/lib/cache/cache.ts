import { times } from "lodash";

import { Set } from "./set";
import { Block } from "./block";

export const ADDRESS_SIZE = 8;

export class Cache {
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
  wordsPerBlock: number;
  offsetSize: number;
  offsetMask: number;
  sets: Array<Set>;

  constructor(sets: number, blockSize: number, assoc: number) {
    this.blockSize = blockSize;
    this.indexSize = Math.log2(sets);
    this.tagSize = ADDRESS_SIZE - this.indexSize;
    this.wordsPerBlock = blockSize / ADDRESS_SIZE;
    this.offsetSize = Math.log2(this.wordsPerBlock)
    this.assoc = assoc;

    this.sets = times(sets, () => {
      let blocks = times(assoc, () => new Block())
      return new Set(blocks)
    })
  }
}