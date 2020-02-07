function create(words) {
   let container = document.getElementById('content');

   for (let word of words) {
      let divElement = document.createElement('div');
      let pElement = document.createElement('p');

      pElement.textContent = word;
      pElement.style.display = 'none';

      //When a div is clicked is must be shown
      divElement.appendChild(pElement);
      divElement.addEventListener('click', () =>  {
         pElement.style.display = 'inline-block';
      });
      container.appendChild(divElement);
   }
}