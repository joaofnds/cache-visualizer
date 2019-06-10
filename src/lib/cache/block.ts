export class Block {
  validity: boolean;
  tag: number;
  data: number[];

  constructor(data: number[]) {
    this.data = data;
  }
}
