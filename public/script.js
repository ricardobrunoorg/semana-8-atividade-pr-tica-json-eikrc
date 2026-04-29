const catalogo = [
    {
        id: 1,
        titulo: "Panico 7",
        tipo: "Filme",
        ano: 1999,
        generos: ["Terror"],
        nota: 8,
        assistido: true
    },
    {
        id: 2,
        titulo: "Consequencia",
        tipo: "Filme",
        ano: 2001,
        generos: ["Comedia","Drama"],
        nota: 8.0,
        assistido: false
    },
    {
        id: 3,
        titulo: "Zootopia 2",
        tipo: "Filme",
        ano: 1756,
        generos: ["Comedia","Animação", "Aventura Policial"],
        nota: 7.5,
        assistido: true
    },
    {
        id: 4,
        titulo: "Lindas e Letais",
        tipo: "Filme",
        ano: 1980,
        generos: ["Ação","Suspense"],
        nota: 2.5,
        assistido: false
    },
    {
        id: 5,
        titulo: "O Primata",
        tipo: "Serie",
        ano: 2026,
        generos: ["Comedia","Drama"],
        nota: 5.7,
        assistido: true
    },
    {
        id: 6,
        titulo: "Marty Supreme",
        tipo: "Serie",
        ano: 2026,
        generos: ["Biografia","Drama", "Esportes"],
        nota: 7.7,
        assistido: false
    },
]


console.log(`Titulo primeiro item: ${catalogo[0].titulo}`)
console.log(`Ano do ultimo item: ${catalogo[catalogo.length - 1].ano}`)

if (catalogo[2].generos.length >= 2) {
    console.log(`Genero do terceiro item: ${catalogo[2].generos[1]}`)
}else{
    console.log("Não possui mais de 1 genero")
}

catalogo.forEach((v, i) => {
    console.log(`- [${v.tipo}] - ${v.titulo} (${v.ano})`)
});

const caixa_alta = []
caixa_alta.push(catalogo.map(item => item.titulo.toUpperCase()))
console.log(`Array Caixa-Alta: `, caixa_alta)

const not_watched = []
catalogo.forEach(v => {
    if (v.assistido === false) {
        not_watched.push(v.titulo)
    }
});
console.log("Titulos não vistos: ", not_watched)

const notas = []
var media_total = 0
const notas_assistidos = []
var media_assistidos = 0
catalogo.forEach(v => {
    notas.push(v.nota)
    if (v.assistido === true) {
        notas_assistidos.push(v.nota)
    }
});
media_total = notas.reduce((acumulado, atual) => acumulado + atual / notas.length, 0)
media_assistidos = notas_assistidos.reduce((acumulado, atual) => acumulado + atual / notas_assistidos.length, 0)
console.log(`Media total: ${media_total.toFixed(2)}\nMedia dos Assistidos: ${media_assistidos.toFixed(2)}`)

const idade_filmes = []
catalogo.forEach(v => {
    idade_filmes.push(v.ano)
});
var filme_menor2000 = idade_filmes.some(n => n < 2000)

const generos_aototal = []
catalogo.forEach(v => {
    generos_aototal.push = v.generos.length
});
var aomenos1 = false
aomenos1 = generos_aototal.every(v => v => 1)
console.log(`Existe algum item abaixo de 2000?: ${filme_menor2000}\nTodos os items tem ao menos 1 genero?: ${aomenos1}`)

document.getElementById("output").innerHTML = `<h2>Começando a listagem <h3> Total itens catalogados: ${catalogo.length}`

var quantidade_filmes = 0
var quantidade_series = 0
catalogo.forEach(v => {
    if (v.tipo === "Filme") {
        quantidade_filmes += 1
    }else{
        quantidade_series += 1
    }
});

var p = "primeiro"
var s = "segundo"
var t = "terceiro"
var top_valor = [0.0,0.0,0.0]

catalogo.forEach(v => {
    if (v.nota > top_valor[0]) {
        p = v.titulo
        top_valor[0] = v.nota
    }else if (v.nota > top_valor[1]) {
        s = v.titulo
        top_valor[1] = v.nota
    }else if (v.nota > top_valor[2]) {
        t = v.titulo
        top_valor[2] = v.nota
    }
});

document.getElementById("output").innerHTML += `<h3>Quantidade de filmes: ${quantidade_filmes}`
document.getElementById("output").innerHTML += `<h3>Quantidade de series: ${quantidade_series}`

document.getElementById("output").innerHTML += `<h3>Quantidade não assistidos: ${not_watched.length}`
document.getElementById("output").innerHTML += `<h3>Media geral de notas: ${media_total.toFixed(2)}`

document.getElementById("output").innerHTML += `<h1>Ranqueamento: <h2>Top 1: ${p} - ${top_valor[0]} / 10`
document.getElementById("output").innerHTML += `<h2>Top 2: ${s} - ${top_valor[1]} / 10`
document.getElementById("output").innerHTML += `<h2>Top 2: ${t} - ${top_valor[2]} / 10`
