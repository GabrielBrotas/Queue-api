import Queue from '../providers/Queue.js'

class UserController {

    constructor() {}

    async post(req, res) {
        const { name, email, password } = req.body

        const user = {
            name,
            email,
            password
        };

        // Adicionar job RegistrationMail na fila 
        await Queue.add('RegistrationMail', { user })
        await Queue.add('UserReport', { user })

        return res.status(200).json(user)
    }

}

export { UserController }