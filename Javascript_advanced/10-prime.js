function countPrimeNumbers() {
    function isPrime(num) {
      if (num <= 1) return false;
      for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
      }
      return true;
    }
  
    let count = 0;
    for (let i = 2; i <= 100; i++) {
      if (isPrime(i)) {
        count++;
      }
    }
  
    return count;
  }
  const startTime = performance.now();
  for (let i = 0; i < 100; i++) {
      countPrimeNumbers();
  }
  const endTime = performance.now();
  const executionTime = endTime - startTime;
  console.log(
    `Execution time of counting prime numbers was ${executionTime} milliseconds.`
  );
  