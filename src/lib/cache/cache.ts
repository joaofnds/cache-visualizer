import { times, random } from "lodash";

import { Set } from "./set";
import { Block } from "./block";

export class Cache {
  ADDRESS_SIZE: number = 8;
  WORD_SIZE: number = 8;

  cacheSize: number;
  numberOfSets: number;
  replacementPolicy: number;

  // set info
  setsSize: number;
  indexSize: number;
  tagSize: number;
  indexMask: number;
  assoc: number;

  // block info
  blockSize: number;
  offsetSize: number;
  offsetMask: number;
  sets: Set[];

  constructor(sets: number, blockSize: number, assoc: number) {
    this.blockSize = blockSize;
    this.indexSize = Math.log2(sets);
    this.tagSize = this.ADDRESS_SIZE - this.indexSize;
    this.setsSize = sets;
    this.offsetSize = Math.log2(blockSize)
    this.assoc = assoc;

    this.sets = times(sets, () => {
      let blocks = times(assoc, () => {
        let data = times(blockSize, () => 0);
        return new Block(data)
      });
      return new Set(blocks)
    });
  }

  get = (address: number): number => {
    let index = this.getSetIndex(address)
    let blocks = this.sets[index].blocks;
    let tag = this.getTag(address);
    let offset = this.getOffset(address);

    for (let block of blocks) {
      if (block.tag == tag) {
        return block.data[offset];
      }
    }

    let blockIndex = random(0, this.assoc - 1);
    let block = blocks[blockIndex];

    block.tag = tag;
    block.data = this.genBlockData();
    block.validity = true;

    return block.data[offset];
  }

  private getSetIndex = (address: number): number =>
    address % this.setsSize;

  private getTag = (address: number): number =>
    address >> (this.indexSize + this.offsetSize);

  private getOffset = (address: number): number =>
    address % this.blockSize;

  private genBlockData =
    (lower: number = 0, upper: number = 63): number[] =>
      times(this.blockSize, () => random(lower, upper))
}