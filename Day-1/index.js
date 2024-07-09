// const heading = document.getElementById("root");

// heading.innerHTML = "hello from javascript using selector by id ";

const heading = document.createElement("h1");
heading.innerHTML = "i am from inner html and h1 created";

const root = document.getElementById("root");
root.appendChild(heading);