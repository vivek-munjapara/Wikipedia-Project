
search = () => {

    let srchInput = document.getElementById('search').value;
    // console.log(srchInput);

    fetch(`https://en.wikipedia.org/w/api.php?action=query&list=search&srlimit=20&format=json&origin=*&srsearch=${srchInput}`)
        .then((data) => data.json())
        .then((data) => getData(data));

}


let resultArray = [];

getData = (data) => {

    for (const key in data) {
        if (key == 'query') {
            for (const k in data[key]) {
                if (k == "search") {
                    resultArray = data[key][k];
                }
                console.log(resultArray);
            }
        }
    }
    let finalResult = resultArray.map((value) => {
        return `<div class="first">
                <h3>${value.title}</h3>
                <p>${value.snippet}</p>
                </div>`
    }).join("");

    document.getElementById("searchResult").innerHTML = finalResult;
}
