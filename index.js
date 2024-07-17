function Counter() {
    return {
      count: 0,
      max: 15,
      increment() {
        this.count++;
      },
      decrement() {
        this.count--;
      },
      max() {
        this.max = 15;
      }
    };
  }

  // ensure that AlpineJS is properly loaded
  document.addEventListener('alpine:init', () => {
    Alpine.data('counter', Counter);
  });