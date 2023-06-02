// function getData (url){
//     let result = fetch(url);
//     result.then(response => 
//         {
//             if(response.ok){
//             	return response.json();
//             }
//            throw new Error(`Error: ${response.status}`);
//         })
//         .then(data => {
//             let arrA = data.filter(i => i.title[0] === 'a');
//             console.log(arrA);
//     })
//     .catch(error => console.log(error.message))
// }

async function getData(url){
    try{
        let result = await fetch(url);
        if(result.ok){
            let response = await result.json();
            let arrA = response.filter(i => i.title[0] === 'a');
            console.log(arrA);
        } else {
            throw new Error(`Error: ${result.status}`);
        }
    } catch(error){
        console.log(error.message)
    }
}

getData('https://jsonplaceholder.typicode.com/todos');

async function devDate(url) {
    try {
        let result = await fetch(url);
        if (result.ok) {
            let response = await result.json();
            const arrA = response.filter(a => a.title[0] === 'a');
            const arrAB = response.filter(ab => ab.title[0] === 'a' && ab.title[1] === 'b');
            const userA = document.querySelector('.user-a');
            const userAB = document.querySelector('.user-ab');
            arrA.forEach(e => {
                let p = document.createElement('p');
                p.innerHTML = JSON.stringify(e);
                userA.append(p);

            });
            arrAB.forEach(e => {
                let p = document.createElement('p');
                p.innerHTML = JSON.stringify(e);
                userAB.append(p);

            });
        } else {
            throw new Error(`Error: ${result.status}`);
        }
    } catch (e) {
        console.log(e.message);
    }
}

// devDate('https://jsonplaceholder.typicode.com/todos');


const userGA = document.querySelector('.user-a');
const userGAB = document.querySelector('.user-ab');
const btnA = document.querySelector('.add-a');
btnA.addEventListener('click', getA);

async function getA() {
    userGA.innerText = "";
    userGAB.innerText = "";
    try {
        let result = await fetch('https://jsonplaceholder.typicode.com/todos');
        if (result.ok) {
            let response = await result.json();
            const arrGA = response.filter(a => a.title[0] === 'a');
            arrGA.forEach(e => {
                let p = document.createElement('p');
                p.innerHTML = JSON.stringify(e);
                userGA.append(p);

            })
            
        } else {
            throw new Error(`Error: ${result.status}`);
        }
    } catch (e) {
        console.log(e.message);
    }
}

const btnB = document.querySelector('.add-ab');
btnB.addEventListener('click', getAB);

async function getAB() {
    userGA.innerText = "";
    userGAB.innerText = "";
    try {
        let result = await fetch('https://jsonplaceholder.typicode.com/todos');
        if (result.ok) {
            let response = await result.json();
            const arrGAB = response.filter(ab => ab.title[0] === 'a' && ab.title[1] === 'b');
            arrGAB.forEach(e => {
                let p = document.createElement('p');
                p.innerHTML = JSON.stringify(e);
                userGAB.append(p);

            })

        } else {
            throw new Error(`Error: ${result.status}`);
        }
    } catch (e) {
        console.log(e.message);
    }
}
const btnAll = document.querySelector('.add-all');
btnAll.addEventListener('click', getAll);
async function getAll() {
    userGA.innerText = "";
    userGAB.innerText = "";
    try {
        let result = await fetch('https://jsonplaceholder.typicode.com/todos');
        if (result.ok) {
            let response = await result.json();
            const arrGA = response.filter(a => a.title[0] === 'a');
            arrGA.forEach(e => {
                let p = document.createElement('p');
                p.innerHTML = JSON.stringify(e);
                userGA.append(p);

            })
            const arrGAB = response.filter(ab => ab.title[0] === 'a' && ab.title[1] === 'b');
            arrGAB.forEach(e => {
                let p = document.createElement('p');
                p.innerHTML = JSON.stringify(e);
                userGAB.append(p);

            })
        } else {
            throw new Error(`Error: ${result.status}`);
        }
    } catch (e) {
        console.log(e.message);
    }
}
