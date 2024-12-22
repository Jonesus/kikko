window.addEventListener('load', function() {
    let elements = document.querySelectorAll("#osta");
    console.log(elements)
    elements.forEach(function(elem) {
        elem.addEventListener("click", function(e) {
            let [osta, hinta] = elem.textContent.split(" ")
            elem.textContent = osta + " 9" + hinta
        })
    })

    let keksi = document.querySelector(".keksi")
    setInterval(function() {
        keksi.style.setProperty("display", "block")
    }, 10_000)
    let buttons = document.querySelectorAll("button")
    buttons.forEach(function(elem) {
        elem.addEventListener("click", function(e) {
            keksi.style.setProperty("display", "none")
        })
    })
})