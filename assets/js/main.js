// selecting all the buttons and field into variables 

const lowercaseChars = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
const uppercaseChars = lowercaseChars.join("").toUpperCase().split('')
const specialChars = ['!', '@', '#', '$', '%', '^', '&', '*'];
const passwordField = document.getElementById("passwordField")
// const copyBtn = document.getElementById('copyBtn')
const submitBtn = document.querySelector('button')
const checkbox = document.getElementById('includeSpecialChars')

// initializing the main function which returns password 

function generatePassword(length) {
    // copyBtn.style.display = 'block'
    var password = []
    let i = 0;

    // adding random symbols from characters' arrays without trimming and slicing 

    while (i < length) {
        let char = Math.round(Math.random() * (lowercaseChars.length - 1))
        password.push(lowercaseChars[char])
        i++
    };

    let j = 0;

    while (j < length) {
        let char = Math.round(Math.random() * (uppercaseChars.length - 1))
        password.push(uppercaseChars[char])
        j++
    };
    if (checkbox.checked) {
        let k = 0
        while (k < length) {
            let char = Math.round(Math.random() * (specialChars.length - 1))
            password.push(specialChars[char])
            k++
        };
    }

    // although password property isn't ready, use return because we need to save it 

    return password
}

// function which shuffles the array of password symbols 

function shuffle(array) {
    let currentIndex = array.length;
    while (currentIndex != 0) {
        let randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
    }
    return array
}

// putting all the functions to button + trimming the password 

submitBtn.addEventListener('click', () => {
    let passwordlength = parseInt(document.getElementById('lengthField').value)
    var userPassword = shuffle(generatePassword(passwordlength)).join('');
    userPassword = userPassword.slice(0, passwordlength)
    passwordField.textContent = userPassword
})

// in progress...

// copyBtn.onclick = async function() {
//     var copyText = passwordField.textContent
//     copyText.select()
//     copyText.setSelectionRange(0, 999)
//     navigator.clipboard.writeText(copyText.value)
// }
