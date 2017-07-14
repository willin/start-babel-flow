function foo({ x } : {x? : number} = {}): string {
  if (x) {
    return String(x);
  }
  return 'default string';
}

console.log(foo());
