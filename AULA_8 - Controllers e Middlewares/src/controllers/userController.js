const users = [];

const getAllUsers = ('/', (req, res) => {
    res.send(users);
});


const insertUser = ('/', (req, res) => {
    const user = req.body;
    users.push(user);
    res.status(201).send(user);
});

module.exports = {
    getAllUsers,
    insertUser
}