function findShort(s){
return (s.split(" ").reduce(function(a, b) {
    return a.length <= b.length ? a : b;
  }).length)
}
