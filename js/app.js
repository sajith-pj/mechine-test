const Title = document.querySelector("#title")
const position = document.querySelector("#position-dropdown")
const place = document.querySelector('#place-dropdown')

const handleSubmit = ()=>{
    e.preventDefault()
    console.log("submit");
}

const setValue = (  value )=>{
       document.getElementById("position-dropdown").value = value
       document.getElementById("position-dropdown").innerText = value
}

const setPlace = ( place ) => {
    console.log(place);
    document.getElementById("place-dropdown").value = place
    document.getElementById("place-dropdown").innerText  = place
}