// fetch api():- application programming interfaces.
// a fetch method is used to fetch a resource (data), A fetch api provides an interface for
// fetching ( sending or receiving ) resources.

// a fetch returns a data in the form of promises:-
// JSON is js object notation

const URL = "https://cat-fact.herokuapp.com/facts";
const facts = document.querySelector('#fact');

const getFacts = async () => {
    console.log("getting data")
    let response = await fetch(URL);
    console.log(response) // get data in the json format
    let data = await response.json();
    // console.log(data)
    facts.innerText = data[0].text;
}
