import {chart} from "./script/testobj";

describe('Cars validation', function () {

    test("Chart is present today", ()=>{
        expect(chart).toBeDefined()
    })

    test("Capacity sum", ()=>{
        let sum = 0;
        chart.map(car =>{
            sum = sum + car.capacity
        })
        expect(sum).toBe(21)
    })
});
