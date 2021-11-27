window.addEventListener('load', () => {
    console.log('Se vinculó correctamente');
    const qs = (tag) => {
        return document.querySelector(tag)
    }

    const title = qs('#title')
    const form = qs('form')
    const select = qs('select')
    const inputs = document.querySelector('input')
    const awards = qs('#awards')
    const smallAw = qs('.awards')

    title.focus()


    form.addEventListener('submit', (e) => {
        e.preventDefault()

        for ( let i = 0; i < inputs.length; i++) {
            if(inputs[i].value === '') {
                inputs[i].classList.add('is-invalid')
            } else if(inputs[i].classList.contains('is-invalid')) {
                inputs[i].classList.remove('is-invalid')
            }
        }

        if(awards.value > 10 || awards.value < 0) {
            e.preventDefault()
            smallAw.innerHTML = 'Los premios tienen que estar entre 0 y 10'
        }

        if(select.value === '') {
            e.preventDefault()
            select.classList.add('is-invalid')
        } else if(select.classList.contains('is-invalid')) {
            select.classList.remove('is-invalid')
        }
    })


})