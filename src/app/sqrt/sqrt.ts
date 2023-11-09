import { round } from "../round/round";
export function sqrt(oper1) {  
    // refactoring
    let sqrt = 0;

    sqrt = Math.sqrt(oper1);
    return round(sqrt);
}
