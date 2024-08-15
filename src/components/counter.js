let counterInc = 0;
export function counter (input) {
        if (input !== 0) {
            counterInc += input;
        } else if (input === 0) {
            counterInc = 0;
        } 
    return counterInc 
}