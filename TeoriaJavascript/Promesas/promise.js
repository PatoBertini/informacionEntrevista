// 
cons getData = new Promise((res, rej) =>{
    res()
})
getData.then(()=>{
    console.log('salio todo ok');
})
getData.catch(()=>{
    console.log(rej);
})