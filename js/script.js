window.onload = () => {
    let inputSearch = document.querySelector('#input');
    inputSearch.oninput = function() {
        let value = this.value.trim(),
            list = document.querySelectorAll('.ul li');

        if( value != "" ) {
            list.forEach(elem => {
                console.log(elem.innerText);
                if(elem.innerText.toLowerCase().search(value) == -1){
                    elem.classList.add('hide');
                }
            });
        } else {
            list.forEach(elem => {
                elem.classList.remove('hide');
            });
        }
    };
};