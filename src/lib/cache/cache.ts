import { times } from "lodash";

export const ADDRESS_SIZE = 8;

class Block {
  validity: boolean;
  tag: number;
  data: Array<number>;
}

class Set {
  blocks: Array<Block>

  constructor(blocks: Array<Block>) {
    this.blocks = blocks
  }
}

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