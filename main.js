document.addEventListener('DOMContentLoaded', function() {
    
    document.querySelector('form').onsubmit = function() {

        const li = document.createElement('li');

        let taskText = document.querySelector ("#taskText").value;
        let taskRem = `<span> ${taskText} </span> 
            <button class = "remove"> X </button>
            <button class = "done"> Done </button>`

        li.innerHTML = taskRem;
                    
        document.querySelector('ul').append(li);
        document.querySelector("#taskText").value = '';
        
        return false;
    }
        document.addEventListener ('click', function (event) {
        element = event.target;
            if (element.className === 'remove') {
                element.parentElement.remove();
            }

        })

        document.addEventListener('click', function (event) {
            element = event.target;
                if (element.className === 'done') {
                    taskText.style.textDecoration = "line-through";
                    }
        })
} )
