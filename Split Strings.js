function solution(str){
  let result = []

  for (let i = 0; i < str.length; i += 2){
    result.push(str.slice(i,i+2))
  }
  
  if(str.length % 2 === 0){   
    return result
  } else {
    result[result.length - 1] += "_"
    return result
  }
}
