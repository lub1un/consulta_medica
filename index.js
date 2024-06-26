const readline = require('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

let enfermos = []
executar()

function executar() {
    console.log(`
    Menu:
    1. Cadastrar enfermo
    2. Listar todos os enfermos
    3. Atualizar enfermos
    4. Remover enfermo
    0. Sair
    `)
    rl.question('Escolha uma opção: ', (opcao) => {
        switch (opcao) {
            case '1':
                cadastarEnfermo()
                break
            case '2':
                listarEnfermos()
                executar()
                break
            case '3':
                atualizarEnfermos()
                break
            case '4':
                removerEnfermo()
                break
            case '0':
                rl.close()
                break
            default:
                console.log('Opção inválida, tente novamente.')
                executar()
                break
        }
    })
}

function cadastarEnfermo() {
    rl.question('Digite o nome do enfermo: ', (nome) => {
        rl.question('Digite o nome do médico: ', (medico) => {
            rl.question('Digite a data: ', (data) => {
                rl.question('Digite o horário: ', (horario) => {
            enfermos.push({nome, medico, data, horario})
            console.log('Enfermo cadastrado com sucesso!')
            executar()
        })
    })
        })
    })
}

function listarEnfermos() {
    enfermos.forEach((enfermos, i) => {
        console.log(`${i + 1}. Nome do enfermo: ${enfermos.nome} Médico: ${enfermos.medico} Data: ${enfermos.data} Horário: ${enfermos.horario}`)
    })
}

function atualizarEnfermos() {
    if (enfermos.length <= 0) {
        console.log('Nenhum enfermo cadastrado.')
        executar()
    } else {
        listarEnfermos()
        rl.question('Digite o número do enfermo que deseja editar: ', (numero) => {
            const enfermo = enfermos[parseInt(numero) - 1]
            rl.question('Digite o novo nome do enfermo: ', (nome) => {
                rl.question('Digite o novo nome do medico: ', (medico) => {
                    rl.question('Digite a nova data: ', (data) => {
                        rl.question('Digite o novo horário: ', (horario) => {
                    enfermo.nome = nome
                    enfermo.medico = medico
                    enfermo.data = data
                    enfermo.horario = horario
                    console.log('Enfermo editado com sucesso!')
                    executar()
                })
            })
        })
    })
        })
    }
}

function removerEnfermo() {
    if (enfermos.length <= 0) {
        console.log('Nenhum enfermo cadastrado.')
        executar()
    } else {
        listarEnfermos()
        rl.question('Digite o número do enfermo que deseja remover: ', (numero) => {
            enfermos.splice(parseInt(numero) - 1, 1)
            console.log('Enfermo removido com sucesso!')
            executar()
        })
    }
}