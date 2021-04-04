const inputs = document.querySelectorAll('.controls input');

function handleChange(e) {
    if(e.target.name === 'base'){
        const leftEye = document.querySelector("#left-eye");
        const rightEye = document.querySelector("#right-eye");

        leftEye.style.background = e.target.value;
        rightEye.style.background = e.target.value;
    }

    if(e.target.name === 'base2'){
        const leftEar = document.querySelector("#left-ear");
        const rightEar = document.querySelector("#right-ear");

        leftEar.style.background = e.target.value;
        rightEar.style.background = e.target.value;
    }

    if(e.target.name === 'base3'){
        const nose = document.querySelector(".nose");
        nose.style.background = e.target.value;
    }
}

inputs.forEach(input => {
    input.addEventListener("change", handleChange)
});

