import { round } from "../round/round";
export function substraction(oper1, oper2) {  
    // refactoring
    let subs =0
    subs = oper1 - oper2;
    return round(subs);
}