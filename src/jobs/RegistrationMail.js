import Mail from '../providers/Mail.js'

export default {
    key: 'RegistrationMail', // um nome para o job, assim podemos identificar qual falhou, está sendo executado etc...
    async handle({ data }) {
        const { user } = data

        await Mail.sendMail({
            from: "Queue test <queue@teste.com.br>",
            to: `${user.name} <${user.email}>`,
            subject: "Cadastro de usuário",
            html: `Olá, ${user.name}, esse é um teste de fila com envio de email !`
        })
    },
    options: {}
}