let input = document.getElementById("searchInput");
let card = document.getElementById("searchResults");
let head = document.getElementById("head");
let spinner = document.getElementById("spinner");
card.classList.add("d-flex", "flex-row");


input.addEventListener("keydown", function(event) {

    if (event.key === "Enter") {
        spinner.classList.toggle("d-none");
        let name = event.target.value;
        let options = {
            method: "GET"
        };
        fetch("https://apis.ccbp.in/book-store?title=" + name, options)
            .then(function(response) {
                return response.json();
            })
            .then(function(jsonData) {
                let {
                    search_results,
                    total
                } = jsonData;
                spinner.classList.toggle("d-none");
                if (total === 0) {
                    head.textContent = "No results Found!";
                } else {
                    head.textContent = "Popular Books";
                    console.log(search_results);
                    for (let ele of search_results) {
                        let card1 = document.createElement("div");
                        let img = document.createElement("img");
                        img.classList.add("img");
                        let label = document.createElement("p");
                        label.classList.add("lab");
                        img.src = ele.imageLink;
                        label.textContent = ele.author;
                        card1.appendChild(img);
                        card1.appendChild(label);

                        card1.classList.add("d-flex", "flex-column", "col-6");
                        card.appendChild(card1);

                    }
                }

            });


    }
})