var friends = require("../data/friends");

module.exports = function (app) {

    app.get("/api/friends", function (req, res) {
        console.log("get ruta api/friends")
        res.json(friends)
        ///
    });

    app.post('/api/friends', function (req, res) {

        var b = req.body;

        var total = 100;
        var totalActual = 60;
        var friend = 0;

        for (let i = 0; i < friends.length; i++) {

            total = 0;

            for (let y = 0; y < 10; y++) {

                total += Math.abs(parseInt(b.scores[y]) - parseInt(friends[i].scores[y]));

                if (total < totalActual) {
                    friend = i;
                    totalActual = total;
                };
            }

        };
        return res.json(friends[friend]);
        ///
    });
}