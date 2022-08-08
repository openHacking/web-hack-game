import { locale } from "../locales";
import { $$,changeLevel,showTip,toNextLevel } from "../utils/util";

function inputBoxInit() {
    changeLevel(1)
    $$('#container').insertAdjacentHTML('beforeend', '<input id="input-box" />');
}

function inputBoxTip() {
    console.log(
        `%c${locale.inputBoxTip}%c${locale.js}`,
        'padding:3px;color:white;background:red',
        'padding:3px;color:white;background:green',
    );
}

let count = 0
function inputBoxCheck() {
    $$('#input-box').addEventListener('input',(e)=>{
        const value = e.target.value
        count++

        if(count === 30){
            showTip(locale.inputBoxPageTip)
            count = 0
        }
        
        if(value === 'JavaScript'){
            toNextLevel()
        }
    })
}

inputBoxInit()
inputBoxTip()
inputBoxCheck()