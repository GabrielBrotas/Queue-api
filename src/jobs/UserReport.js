export default {
    key: 'UserReport', // um nome para o job, assim podemos identificar qual falhou, está sendo executado etc...
    handle({ data }) {
        const { user } = data

        console.log(`Report gerado de ${user.name}`)
    },
    options: {
        delay: 5000,
        priority: 2
    }
}

