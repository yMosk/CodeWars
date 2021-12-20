function correctness(a, b) {
  let score = 0;
  
  for (let i = 0; i < a.length; i++){
    if (a[i] === b[i])
      score++
    else if (a[i] === '?' || b[i] === '?')
      score+= 0.5
  }
  return score;
}
