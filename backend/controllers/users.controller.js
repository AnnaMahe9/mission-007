const UserModel = require('../models/User');

module.exports.getUsers = async (req, res) => {
    const users = await UserModel.find();
    res.status(200).json(users)
};

module.exports.setUser = async (req, res) => {
    if (!req.body.username || !req.body.email || !req.body.password) {
        res.status(400).json({ message: "Merci de renseigner toutes les informations"})
    } else {
        try {
            const user = await UserModel.create({
                username: req.body.username,
                email: req.body.email,
                password: req.body.password
            })
            
            res.status(200).json(user).send()
            
        } catch (error) {
            res.status(500).json({ message: "Désolé, une erreur est survenue"}) 
        }
    }
}

module.exports.editUser = async (req, res) => {
    const user = await UserModel.findById(req.params.id)
    if (!user) {
        res.status(400).json({ message: "Cet utilisateur n'existe pas" })
    } else {
        const updateUser = await UserModel.findByIdAndUpdate(user, req.body, {new: true})
        res.status(200).json(updateUser)
    }
}

module.exports.deleteUser = async (req, res) => {
    const user = UserModel.findById(req.params.id)
    if (!user) {
        res.status(400).json({message: "Cet utilisateur n'existe pas"})
    } else  {
        await user.deleteOne();
        res.status(200).json({message: "Utilisateur supprimé"})
    }
}