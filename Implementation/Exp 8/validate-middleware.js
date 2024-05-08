const validate = (req, res, next) => {
    try {
        const { username, bool } = req.body;

        if (typeof username !== 'string') {
            throw new Error("Invalid username. Username variable must be a string.");
        }

        if (typeof bool !== 'boolean') {
            throw new Error("Invalid bool value. Bool variable must be a boolean.");
        }

        next();
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

module.exports = validate;
