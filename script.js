function Hideelement(){
    document.querySelector("#titleText").classList.add("title")
}

function addElement(){
    let input = document.getElementById("todo").value;
    let newElement = document.createElement("p")
        newElement.innerHTML = input;
    let result = document.getElementById('results')
    result.appendChild(newElement);
    document.getElementById("todo").value = ''
}

fetch('https://jsonplaceholder.typicode.com/todos')
      .then(response => response.json())
      .then(json => {
        let result = document.getElementById("results");
        for (let i = 0; i < json.length; i++) {
            let newElement = document.createElement("p");
            newElement.innerHTML = json[i].title;
            result.appendChild(newElement);

        }
        });


        67
