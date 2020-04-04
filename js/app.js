document.querySelector('#generar-nombre').addEventListener('submit', loadNames)

function loadNames(e) {
    e.preventDefault()

    const origin = document.getElementById('origen')
    const originSelected = origin.options[origin.selectedIndex].value

    const gender = document.getElementById('genero')
    const genderSelected = gender.options[gender.selectedIndex].value

    const quantity = document.getElementById('numero').value

    let url = ''
    url += 'http://uinames.com/api/?'

    if (originSelected !== '') {
        url += `region=${originSelected}&`
    }

    if (genderSelected !== '') {
        url += `gender=${genderSelected}&`
    }

    if (quantity !== '') {
        url += `amount=${quantity}&`
    }

    console.log(url)

    const xhr = new XMLHttpRequest()

    xhr.open('GET', url, true)

    xhr.onload = () => {
        if (this.status === 200) {
            const names = JSON.parse(this.responseText)

            let HTML = `<h2>Nombres Generados</h2>`
                
            HTML += `<ul class="lista">`

                names.forEach( n => {
                    HTML += `
                        <li>${n.name}</li>
                    `
                })

            HTML += `</ul>`
            document.getElementById('resultado').innerHTML = HTML
        }
    }

    xhr.send()
    
}