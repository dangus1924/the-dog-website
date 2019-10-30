import wait from './wait'

// test("wait for promise to resolve", () =>{
//     return wait(3).then(result => {
//         expect(result).toBe("hurry")
        
//     })    
// })

//done keyword is telling jest that the est is done by calling done 
// test("wait for promise to resolve", (done) =>{
//      wait(3).then(result => {
//         expect(result).toBe("hurry")
//          done()
 

//this is the best one to use recommened by Hason
test("wait for promise to resolve", async () =>{
    const result = await wait(3)
        expect(result).toBe("hurry")
        
    })    
