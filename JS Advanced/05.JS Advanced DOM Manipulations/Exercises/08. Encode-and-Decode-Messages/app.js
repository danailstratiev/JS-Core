function encodeAndDecodeMessages() {
    let sendAndEncodeButton = document.getElementsByTagName('button')[0];
    let decodeAndReadButton = document.getElementsByTagName('button')[1];

    let sendTextArea = document.getElementsByTagName('textarea')[0];
    let decodeTextArea = document.getElementsByTagName('textarea')[1];

    sendAndEncodeButton.addEventListener('click', function () {
        let input = sendTextArea.value;
        let encodedMessage = '';

        for (let index = 0; index < input.length; index++) {
            encodedMessage += String.fromCharCode(input[index].charCodeAt(0)+1);
        }

        decodeTextArea.value = encodedMessage;
        sendTextArea.value = "";
    })

    decodeAndReadButton.addEventListener('click', function() {

        let input = decodeTextArea.value;
        let decodedMsg = '';

        for (let i = 0; i < input.length; i++) {
            decodedMsg += String.fromCharCode(input[i].charCodeAt(0)-1);
        }

        decodeTextArea.value = decodedMsg;
    })
}