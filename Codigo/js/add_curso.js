var db_cursos_inicial = {
    "curso_atual": null,
    "curso_selecionado": null,
    "data": [{
        "id": 1,
        "nome_curso": "Web Moderno",
        "descricao": "Tudo que vc precisa saber para construir aplicações modernas para Web. Criar aplicações REAIS usando as mais modernas tecnologias do mercado",
        "autor": "Leonardo Mourao",
        "aulas": [
            {
                "id": 1,
                "nome_aula": "Aula 1",
                "link": "https://www.google.com/"
            },
            {
                "id": 2,
                "nome_aula": "Aula 2",
                "link": "https://www.google.com/"
            },
            {
                "id": 3,
                "nome_aula": "Aula 3",
                "link": "https://www.google.com/"
            }
        ]
    },
    {
        "id": 2,
        "nome_curso": "Curso de oratória",
        "descricao": "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam laudantium nemo, debitis ex unde autem harum nihil aliquid voluptas iste odio quas, a ut fuga",
        "autor": "Luis Fonseca",
        "aulas": []
    }
    ]
}

var db = JSON.parse(localStorage.getItem('db_curso'))

if (!db) {
    // db = db_cursos_inicial
    db = { "curso_atual": null, "curso_selecionado": null, "data": [] }
    localStorage.setItem("db_curso", JSON.stringify(db))
}

function displayMessage(msg) {
    $('#msg').html('<div class="alert alert-warning">' + msg + '</div>')
}

function insertCurso(curso) {

    let novoId = 1
    if (db.data.length != 0)
        novoId = db.data[db.data.length - 1].id + 1
    let novoCurso = {
        "id": novoId,
        "nome_curso": curso.nome_curso,
        "descricao": curso.descricao,
        "autor": curso.autor,
        "aulas": []
    }

    db.data.push(novoCurso)
    displayMessage("Curso inserido com sucesso")

    localStorage.setItem('db_curso', JSON.stringify(db))
}

function updateCurso(id, curso) {

    let index = db.data.map(obj => obj.id).indexOf(id)

    db.data[index].nome_curso = curso.nome_curso,
        db.data[index].descricao = curso.descricao,
        db.data[index].autor = curso.autor,

        displayMessage("Curso alterado com sucesso")

    localStorage.setItem('db_curso', JSON.stringify(db))
}

function deleteCurso(id) {

    db.data = db.data.filter(function (element) { return element.id != id })

    displayMessage("Curso removido com sucesso")

    localStorage.setItem('db_curso', JSON.stringify(db))
}
