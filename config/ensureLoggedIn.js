module.exports = function(req, res, nextr) {
    if (!req.user) return res.status(401).json('Unauthorized');
    next();
}