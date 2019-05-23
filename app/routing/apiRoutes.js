var friends = require("../data/friends");

/* console.log("friends", friends); */

module.exports = function (app) {

    app.get("/api/friends", function (req, res) {
        console.log("get ruta api/friends")
        res.json(friends)
        ///
    });

    app.post('/api/friends', function (req, res) {
        /*      console.log("post ruta api/friends"); */
        var b = req.body;
        /*     console.log(b); */

        // buscar en arreglo friends el best matching   [3,2,1]   [3,5,1] = 2+3+2=7 / 0+3+0=3

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

        }
        console.log(friends[friend]);
        return res.json(friends[friend]);
        ///
    });
}