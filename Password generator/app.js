const upperSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerSet = "abcdefghijklmnopqrstuvwxyz";
const numberSet = "1234567890";
const symbolSet = "~!@#$%^&*()_+/";
// const button = document.getElementById("btn")

const getRandomData = (dataset) => {
    return dataset[Math.floor(Math.random()*dataset.length)]
}