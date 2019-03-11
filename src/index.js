(function () {
    //IIFE to not polute the global scope
    const mockData = [
        {
            src: "https://placebear.com/50/50",
            title: "Some Title",
            desc: "The description",
            favorite: false
        },
        {
            src: "https://placebear.com/50/50",
            title: "Some Title 2",
            desc: "The description",
            favorite: false
        },
        {
            src: "https://placebear.com/50/50",
            title: "Some Title 3",
            desc: "The description",
            favorite: false
        },
        {
            src: "https://placebear.com/50/50",
            title: "Some Title 4",
            desc: "The description",
            favorite: false
        },
        {
            src: "https://placebear.com/50/50",
            title: "Some Title 5",
            desc: "The description",
            favorite: false
        }
    ];

    const app = document.getElementById("app");

    mockData.forEach((item, index) => {
        createItem(item, index);
    });

    // creates all the dom elements for each row,
    //appends them to the dom and attaches the click eventlisteners
    function createItem(item, index) {
        const row = document.createElement("div");
        const content = document.createElement("div");
        const heart = document.createElement("span");
        const imgWrapper = document.createElement("div");

        const img = document.createElement("img");
        const title = document.createElement("h2");
        const desc = document.createElement("p");

        row.className = "flex-container";
        row.id = index;

        heart.innerText = "❤";
        heart.className = "heart";
        imgWrapper.className = "img-wrapper";
        img.src = item.src;
        img.alt = item.title;
        title.innerText = item.title;
        desc.innerText = item.desc;

        imgWrapper.appendChild(img);
        content.append(title, desc);
        row.append(heart, imgWrapper, content);
        app.appendChild(row);

        addClick(row, heart);
    }

    /* I thought about adding the event listener to the app and
     then get the parent of the target, but that ended up being more
     complicated than adding an event to each row */
    function addClick(row, heart) {
        row.addEventListener("click", () => {
            if (heart.style.color === "red") {
                heart.style.color = "black";
                mockData[row.id].favorite = false;
            } else {
                heart.style.color = "red";
                mockData[row.id].favorite = true;
            }
        });
    }
})();
