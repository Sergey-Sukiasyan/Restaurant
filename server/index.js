const app = require('./config/app.js');
require('dotenv').config();

// Static
require('./config/static.js');

// BodyParser
require('./config/bodyParser.js');

// CORS
require('./config/cors.js');

// JSON
require('./config/json.js');

// COOKIE 
require('./config/cookieParser.js');

// SESSION
require('./config/session.js');

// CSRF TOKEN
require('./config/csrf.js');

// Middleware
require('./app/middleware/kernel.js');

// Routes
require('./routes/root_router.js');

// App Run

(async function () {
    try {
        app.listen(process.env.NODE_PORT, () => {
            console.log(`Server is running on ${process.env.NODE_PORT} port !!!`);
        });

    } catch(e) {
        console.log(e);
    }
})();