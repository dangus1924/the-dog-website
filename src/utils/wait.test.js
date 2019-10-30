import wait from './wait'

// test("wait for promise to resolve", () =>{
//     return wait(3).then(result => {
//         expect(result).toBe("hurry")
        
//     })    
// })

// done keyword is telling jest that the est is done by calling done 
//also you eill need .catch with this because you use .then 
// test("wait for promise to resolve", (done) =>{
//      wait(3).then(result => {
//         expect(result).toBe("hurry")
//          done()
    
 

// this is the best one to use recommened by jason
test("wait for promise to resolve", async () =>{
    const spy = jest.fn()
    const result = await wait(3, spy)

        expect(result).toBe("hurry")
        expect(spy).toHaveBeenCalledWith("hurray")
        expect(spy).toHaveBeenCalledTimes(1)

        
    })    
