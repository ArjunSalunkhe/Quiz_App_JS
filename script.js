let quziArr = [
    {
        Question: "What is HTML?",
        Option: [
            "hyper text langauge marqup ",
            "hyper marqup text  langauge",
            "hyper text marqup langauge",
            "text marqup langauge hyper"
        ],
        correct: 2

    },
    {
        Question: "What is JS?",
        Option: [
            "JavaScript",
            "ScriptJAjva",
            "Java Section",
            "Java"
        ],
        correct: 2

    },
    {
        Question: "What is React JS?",
        Option: [
            "hyper text marqup langauge",
            "hyper text marqup langauge",
            "hyper text marqup langauge",
            "hyper text marqup langauge"
        ],
        correct: 2

    },
    {
        Question: "What is CSS?",
        Option: [
            "hyper text marqup langauge",
            "hyper text marqup langauge",
            "hyper text marqup langauge",
            "hyper text marqup langauge"
        ],
        correct: 2

    }

]





// ---------------------------------
// Referance.....

let btn = document.querySelector("#btn");

let inputEle = document.querySelectorAll("input");

let que = document.querySelector("#question");

let option_1 = document.querySelector("#opti_1");
let option_2 = document.querySelector("#opti_2");
let option_3 = document.querySelector("#opti_3");
let option_4 = document.querySelector("#opti_4");

let currQuzi = 0;
let score = 0;
// --------------------------------------------------
// Load Quzi Function......

let loadQuzi =()=>{

    let {Question,Option} = quziArr[currQuzi];
    que.innerText = Question;

    let [op1,op2,op3,op4] =Option;
    option_1.innerText = op1;
    option_2.innerText = op2;
    option_3.innerText = op3;
    option_4.innerText = op4;
}

loadQuzi();

// ------------------------------------------------------
// Get Selected Ans Fuction on Button....

let getSelectedOption = ()=>{
   let index;
    inputEle.forEach((e, ind)=>{
        if (e.checked){
            index = ind;
            // console.log(index);
        }
    })

    return index;
// ------------------------------------------------------------
// findINdex.....method
    // let newInput = Array.from(inputEle);
    // // console.log(newInput);
    // newInput.findIndex((e,ind)=>{
    //     console.log(ind.checked);
    // })


}
// ------------------------------------------------------------------

// deSelected function....

let deSelected = ()=>{
    inputEle.forEach((e)=>{
        return e.checked = false;
    })
}

// -------------------------------------------------------------------
// btn logic.....

let con = document.querySelector(".container");
// console.log(con);

btn.addEventListener("click",()=>{
    let getIndex = getSelectedOption();
    // console.log(getIndex);

    if(getIndex == quziArr[currQuzi].correct){
        score = score + 1;
        loadQuzi();
    }

    currQuzi = currQuzi + 1;

    if(currQuzi < quziArr.length){
        deSelected();
        loadQuzi();
    }else{
        con.innerHTML = 
         ` <div class="result">                
        <h1>🎉🏆Your Score : ${score}/${quziArr.length} Correct Answers</h1>
        <p>congratutation on completing the quiz</p>
        <button type="submit" onClick = "location.reload()">play again</button>
        </div>`
    }
})


