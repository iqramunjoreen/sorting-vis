export function getMergeSortAnimations(array){
    const animations = [];
    if (array.length <= 1){
        return array;
    }
    const auxArray = array.slice();
    mergeSortHelper(array, 0, array.length-1, auxArray, animations);
    return animations;
}

function mergeSortHelper(mainArray, start, end, auxArray, animations){
    if (start === end){
        return;
    }
    const mid = Math.floor((start + end) / 2);
    mergeSortHelper(auxArray, start, mid, mainArray, animations);
    mergeSortHelper(auxArray, mid + 1, end, mainArray, animations);
    doMerge(mainArray, start, mid, end, auxArray, animations);
}

function doMerge(mainArray, start, mid, end, auxArray, animations){
    let k = start;
    let i = start;
    let j = mid + 1;
    while (i <= mid && j <= end){
        animations.push([i, j]);
        animations.push([i, j]);
        if (auxArray[i] <= auxArray[j]){
            animations.push([k, auxArray[i]]);
            mainArray[k++] = auxArray[i++];
        } 
        else{
            animations.push([k, auxArray[j]]);
            mainArray[k++] = auxArray[j++];
        }
    }
  
    while (i <= mid){
        animations.push([i, i]);
        animations.push([i, i]);
        animations.push([k, auxArray[i]]);
        mainArray[k++] = auxArray[i++];
    }
  
    while (j <= end){
        animations.push([j, j]);
        animations.push([j, j]);
        animations.push([k, auxArray[j]]);
        mainArray[k++] = auxArray[j++];
    }
}
