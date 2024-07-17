function counterApp() {
  return {
    mainCount: 0,

    incrementMain() {
      if (this.mainCount < 10) {
          this.mainCount++;
        }
    },
    decrementMain() {
      if (this.mainCount > 0) {
        this.mainCount--;
      }
    },
    resetMain() {
      this.mainCount = 0;
    },
    maxMain() {
      this.mainCount = 10;
    },
  };
}


