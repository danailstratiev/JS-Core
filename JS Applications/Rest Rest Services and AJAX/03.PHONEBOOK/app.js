function attachEvents() {
    // document.getElementById('btnLoad').addEventListener('click', function(){
        let url = `https://phonebook-nakov.firebaseio.com/phonebook.json`;
        const personInput = document.getElementById('person');
        const phoneInput = document.getElementById('phone');
        let phonebookContainer = document.getElementById('phonebook');

        function loadPhonebook() {
            
            fetch(url)
            .then((request) => request.json())
            .then((data) => {
                let values = Object.values(data);

                for (let value of values) {
                    let name = value.person;
                    let phoneNumber = value.phone;
                    let delButton = document.createElement('button');
                    delButton.textContent = 'DELETE';
                    delButton.setAttribute('data-target', name);
                    delButton.addEventListener('click', deletePhonebook);

                    let listItem = document.createElement('li');
                    listItem.textContent = `${name}: ${phoneNumber}`;
                    listItem.appendChild(delButton);
                    phonebookContainer.appendChild(listItem);
                }
                
            })
            .catch(handleError);
        }

        function createPhonebook(params) {
            const person = personInput.value;
            const phone = phoneInput.value;

            const headers = {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({person, phone})
            }

            fetch(url, headers)
            // .then((res) => res.json())
            .then(() => {
                phonebookContainer.innerHTML = '';
                personInput.value = '';
                phoneInput.value = '';

                loadPhonebook();
            })
            .catch(handleError);
        }

        function deletePhonebook() {
            const phonebookId = this.getAttribute('data-target');
            const headers = {
                method: 'DELETE'
            };

            fetch(`https://phonebook-nakov.firebaseio.com/phonebook/${phonebookId}.json`, headers)
            .then(() => {
                phonebookContainer.innerHTML = '';
                console.log(this);
                
                loadPhonebook();
            })
            .catch(handleError);

        }

        function handleError(err){
            console.log(err);
            
        }


        return {
            loadPhonebook,  
            createPhonebook,
            deletePhonebook
        }        
}



const result = attachEvents();
console.log(result);
