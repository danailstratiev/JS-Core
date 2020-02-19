// NOTE: The comment sections inside the index.html file is an example of how suppose to be structured the current elements.
//       - You can use them as an example when you create those elements, to check how they will be displayed, just uncomment them.
//       - Also keep in mind that, the actual skeleton in judge does not have this comment sections. So do not be dependent on them!
//       - Тhey are present in the skeleton just to help you!


// This function will be invoked when the html is loaded. Check the console in the browser or index.html file.
function mySolution(){

    // TODO: Write my solution for this problem...
    //console.log("GOOD LUCK c(:");
    
    const $elements = {
        askQuestionTextarea: document.querySelector('#inputSection textarea'),
        usernameInputField: document.querySelector('#inputSection div input[type="username"]'),
        askQuestionButton: document.querySelector('#inputSection div button'),
        pendingQuestionsDiv: document.querySelector('#pendingQuestions'),
        openQuestionsDiv: document.querySelector('#openQuestions')
    };

    $elements.askQuestionButton.addEventListener('click', askQuestion);

    function askQuestion(){
        const question = $elements.askQuestionTextarea.value;
        const givenUsername = $elements.usernameInputField.value;
        const username = givenUsername !== ""? givenUsername : "Anonymous";

        let pendingQuestionDiv = createHTMLelement('div', 'pendingQuestion');    
        let usernameImage = createHTMLelement('img', null, null, [{k:'src', v:'./images/user.png'},{k: 'width', v: 32},{k: 'height', v: 32}]);    
        let usernameSpan = createHTMLelement('span', null, username);
        let questionP = createHTMLelement('p', null, question);
        let actionsDiv = createHTMLelement('div', 'actions');
        let archiveBtn = createHTMLelement('button', 'archive', 'Archive', null,{name:'click', func: archiveQuestion})
        let openBtn = createHTMLelement('button', 'open', 'Open', null, {name: 'click', func: openQuestion});
   
        actionsDiv = appendChildrenToParent([archiveBtn, openBtn], actionsDiv);
        pendingQuestionDiv = appendChildrenToParent([usernameImage, usernameSpan, questionP, actionsDiv], pendingQuestionDiv);
        
        $elements.pendingQuestionsDiv.appendChild(pendingQuestionDiv);
    }
    function archiveQuestion(e){
        const parent = e.target.parentNode.parentNode;
        parent.remove();
        //parent.textContent = "";
        // parent.remove works the same way
    }

    function openQuestion(e){
        const questionDiv = e.target.parentNode.parentNode;
        
        questionDiv.className = "openQuestion";
        let actionsDiv = questionDiv.querySelector('div.actions');
        actionsDiv.innerHTML = "";
        const replyBtn = createHTMLelement('button', 'reply', 'Reply', null, {name: 'click', func: replyToQuestion});
        actionsDiv = appendChildrenToParent([replyBtn], actionsDiv);
        
        let replySectionDiv = createHTMLelement('div', 'replySection', null, [{k: 'style', v: 'display: none;'}]);
        let replyInput = createHTMLelement('input', 'replyInput', null, [{k: 'type', v: 'text'}, {k: 'placeholder', v: 'Reply to this question here...'}]);
        let sendAnswerButton  = createHTMLelement('button', 'replyButton', 'Send', null, {name: 'click', func: addAnswer});
        let answerOl = createHTMLelement('ol', 'reply', null, [{k: 'type', v: '1'}]);
        
        replySectionDiv = appendChildrenToParent([replyInput, sendAnswerButton, answerOl], replySectionDiv);

        questionDiv.appendChild(replySectionDiv);
        $elements.openQuestionsDiv.appendChild(questionDiv);
    }

    function addAnswer() {
        let parent = this.parentNode;
        let answerInput = parent.querySelector('input').value;

        let answerLi = createHTMLelement('li', null, answerInput);
        parent.querySelector('ol').appendChild(answerLi);
    }

    function replyToQuestion() {
        let button = this.textContent;
        let replySectionDiv = this.parentNode.parentNode.querySelector('.replySection');
        
        if (button === "Reply") {
            replySectionDiv.style.display = "block";
            button.textContent = "Back";    
        }else {
            replySectionDiv.style.display = "block";
            button = "Reply";    
        }
    }

    //We use this function to create various HTML elements
    function createHTMLelement(tagname, className, textContent, attributes, event){
        let element = document.createElement(tagname);

        if(className){
            element.classList.add(className);
        }

        if(textContent){
            element.textContent = textContent;
        }

        if(attributes){
            attributes.forEach((a) => element.setAttribute(a.k, a.v));
        }

        if (event) {
            element.addEventListener(event.name, event.func);
        }

        return element;
    }

    function appendChildrenToParent(children, parent) {
        children.forEach((c) => parent.appendChild(c));
        return parent;
    }
}
// To check out your solution, just submit mySolution() function in judge system.