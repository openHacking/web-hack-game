import { changeLevel,$$ } from "../utils/util";
function answerInit() {
    changeLevel(2)
    $$('#container').innerHTML = ''
    $$('#container').insertAdjacentHTML('beforeend', '<p id="answer-box" >Hello Level 2</p>');
}

answerInit()