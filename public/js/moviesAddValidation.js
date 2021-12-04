window.addEventListener('load', () => {
    let now = new Date()
    console.log('Se vinculó correctamente', now);
    const qs = (tag) => {
        return document.querySelector(tag)
    }

    const funcValidate = (obj) => {
        let arr = Object.values(validate)
        
        if (!arr.includes(false)) {
            button.disabled = false
            button.classList.remove('bttn-invalid')
        }
    }

    const form = qs('form')
    const title = qs('#title')
    const select = qs('select')
    const awards = qs('#awards')
    const inputs = document.querySelectorAll('.inputs')
    const small = document.querySelectorAll('small')
    const smallAw = qs('.awards')
    const smallTitle = qs('small.title')
    const smallAwards = qs('small.awards')
    const button = qs('button.botonAgregar')
    const len = qs('#length')
    const smallLen = qs('small.length')

    const validate = {
        title: false,
        awards: false,
        len: false

    }

    button.disabled = true
    button.classList.add('bttn-invalid')

    title.focus()

    title.addEventListener('input', (e) => {
        if (e.target.value.length < 3) {
            title.classList.add('is-invalid')
            title.classList.remove('is-valid')
            smallTitle.innerHTML = "El título debe tener más de dos caracteres"
            validate.title = false
        } else {
            title.classList.remove('is-invalid')
            title.classList.add('is-valid')
            smallTitle.innerHTML = ''
            validate.title = true
        }

        funcValidate(validate)
    })

    

    awards.addEventListener('input', (e) => {
        if (e.target.value < 0 || e.target.value > 10) {
            awards.classList.add('is-invalid')
            awards.classList.remove('is-valid')
            smallAwards.innerHTML = 'El número de premios tiene que estar entre 0 y 10'
            validate.awards = false

        } else {
            awards.classList.remove('is-invalid')
            awards.classList.add('is-valid')
            smallAwards.innerHTML = ''
            validate.awards = true

        }

        funcValidate(validate)
    })


    len.addEventListener('input', (e) => {
        if (e.target.value < 60 || e.target.value > 360) {
            len.classList.add('is-invalid')
            len.classList.remove('is-valid')
            smallLen.innerHTML = 'El número de premios tiene que estar entre 60 y 360'
            validate.len = false

        } else {
            len.classList.remove('is-invalid')
            len.classList.add('is-valid')
            smallLen.innerHTML = ''
            validate.len = true

        }

        funcValidate(validate)
    })



    form.addEventListener('submit', (e) => {

        for ( let i = 0; i < inputs.length; i++) {

            if (inputs[i].value === '') {
                e.preventDefault()
                inputs[i].classList.add('is-invalid')
                small[i].innerHTML = 'Este campo no debe estar vacío'
                button.disabled = true

            } else if (inputs[i].classList.contains('is-invalid')) {
                inputs[i].classList.remove('is-invalid')
                small[i].innerHTML = ""
                button.disabled = false
                button.classList.remove('bttn-invalid')
            }
        }

        if (awards.value > 10 || awards.value < 0) {
            e.preventDefault()
            smallAw.innerHTML = 'Los premios tienen que estar entre 0 y 10'
        }

        if (select.value === '') {
            e.preventDefault()
            select.classList.add('is-invalid')
            small[5].innerHTML = "Este campo no debe estar vacío"
        } else if (select.classList.contains('is-invalid')) {
            select.classList.remove('is-invalid')
        }


    })


})



/* title.addEventListener('blur', () => {
        if (e.target.value.length < 3) {
            title.classList.add('is-invalid')
            title.classList.remove('is-valid')
            smallTitle.innerHTML = "El título debe tener más de dos caracteres"
        } else {
            title.classList.remove('is-invalid')
            title.classList.add('is-valid')
            smallTitle.innerHTML = ''
        }
    }) */