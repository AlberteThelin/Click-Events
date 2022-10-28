const main = document.querySelector("main");

const foo = document.getElementById("foo")
const bar = document.getElementById("bar")
const fooBar = document.getElementById("fooBar")

foo.addEventListener('click', function() {
    const fooh3Tag = document.createElement("h3");
    fooh3Tag.textContent = "Foo";
    main.appendChild(fooh3Tag);
})

bar.addEventListener('click', function() {
    const barh3Tag = document.createElement("h3");
    barh3Tag.textContent = "Bar";
    main.appendChild(barh3Tag);
})

fooBar.addEventListener('click', function() {
    const fooBarh2Tag = document.createElement("h2");
    fooBarh2Tag.textContent = "Foobar";
    main.appendChild(fooBarh2Tag);
})


