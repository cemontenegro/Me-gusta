likes = [
    document.querySelector("#p0").innerText.split(" ")[0],
    document.querySelector("#p1").innerText.split(" ")[0],
    document.querySelector("#p2").innerText.split(" ")[0]
];

spans = [
    document.querySelector("#p0"),
    document.querySelector("#p1"),
    document.querySelector("#p2")
];

function like(id){
    likes[id]++;
    spans[id].innerHTML = likes[id] + " Like(s)";
}