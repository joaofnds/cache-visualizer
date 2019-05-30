export function toBinary(n: number, size: number = 0): string {
  return n.toString(2).padStart(size, '0');
}