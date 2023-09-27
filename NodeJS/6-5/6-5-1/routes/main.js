module.exports = (app, fs) => {
    app.get('/', (req, res) => {
        res.render('test', {
            title: "MY HOMEPAGE",
            length: 5
        })
    });
}