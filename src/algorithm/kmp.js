// KMP Function
function kmp(strinput, strpattern){
    let n_text = strinput.length;
    let n_pattern = strpattern.length;
    
    let i = 0;
    let j = 0;

    let fail = failure(strpattern);

    while (i < n_text){
        if (strinput[i] == strpattern[j]){
            if (j == n_pattern - 1){
                return true;
            }
            i++;
            j++;
        }
        else {
            if (j > 0){
                j = fail[j - 1];
            }
            else {
                i++;
            }
        }
    }
    return false;
}

// Find failure function / fail(k)
function failure(strpattern){
    let fail = Array(strpattern.length);
    fail[0] = 0;

    let i = 1;    
    let j = 0;

    while (i < strpattern.length){
        if (strpattern[i] == strpattern[j]){ 
            fail[i] = j + 1;
            i++;
            j++;
        }
        else {
            if (j > 0){
                j = fail[j - 1];
            }
            else {
                fail[i] = 0;
                i++;
            }
        }
    }
    return fail;
}

export { kmp, failure };