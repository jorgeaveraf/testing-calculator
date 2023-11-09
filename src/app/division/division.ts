import { round } from "../round/round";
export function division(oper1, oper2) {  
    // refactoring
    let div = oper1 / oper2;
    return round(div);
}