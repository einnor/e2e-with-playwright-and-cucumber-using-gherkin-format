export default class CustomWorld {
  variable: number;
  constructor() {
    this.variable = 0;
  }

  setTo(number: number) {
    this.variable = number;
  }

  incrementBy(number: number) {
    this.variable += number;
  }
}
  