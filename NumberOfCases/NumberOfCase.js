
// // 완전탐색으로
let input = ["a","b","c","d","e"]
let cnt = 0;

const permutation = (arr,s,r) =>{
    // 시작할 위치 s
    // 몇개를 뽑을지 r
    
    // 재귀를 멈춰야할 조건
    if(s == r){
        cnt++;
        console.log(arr.join(" "));
        return
    }


    // 재귀함수 재귀를 돌면서 변경될 부분/메인 로직;
    for(let i =s; i < arr.length; i++){
        [arr[s],arr[i]] = [arr[i],arr[s]];
        permutation(arr,s+1,r); 
        [arr[s],arr[i]] = [arr[i],arr[s]];
    }
}

permutation(input,0,2)
console.log(cnt)


const getPermutations = function (arr, selectNumber) {
    const results = [];
    if (selectNumber === 1) return arr.map((el) => [el]); 
    // n개중에서 1개 선택할 때(nP1), 바로 모든 배열의 원소 return. 1개선택이므로 순서가 의미없음.

    arr.forEach((fixed, index, origin) => {
      const rest = [...origin.slice(0, index), ...origin.slice(index+1)] 
      console.log(rest)
      // 해당하는 fixed를 제외한 나머지 배열 
      const permutations = getPermutations(rest, selectNumber - 1); 
      // 나머지에 대해서 순열을 구한다.
      const attached = permutations.map((el) => [fixed, ...el]); 
      //  돌아온 순열에 떼 놓은(fixed) 값 붙이기
      results.push(...attached); 
      // 배열 spread syntax 로 모두다 push
    });

    return results; // 결과 담긴 results return
}

getPermutations(input,4)