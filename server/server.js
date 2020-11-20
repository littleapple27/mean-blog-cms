const path = require("path"),
	express = require("express"),
	bodyParser = require("body-parser"),
	mongoose = require('mongoose'),
	cors = require('cors'),
	createError = require('http-errors'),
	dbConfig = require('./db/db');


// Connecting with mongo db
mongoose.Promise = global.Promise;
mongoose.connect(dbConfig.db, {
	useUnifiedTopology: true,
	useCreateIndex: true,
	useNewUrlParser: true
}).then(() => {
		console.log('Database sucessfully connected')
	},
	error => {
		console.log('Database connection not established: ' + error)
	}
)

//Define route for registered user
const userRoute = require('./routes/user.route');
// Create new instance of the express server
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extended: false
}));
app.use(cors());

// Create link to Angular build directory
// The `ng build` command will save the result
// under the `dist` folder.
const publicDirectoryPath = path.join(__dirname, "../../client/dist/mean-blog-cms");
//Setup static directory to serve
app.use(express.static(publicDirectoryPath));
app.use('/', express.static(path.join(__dirname, '../../client/dist/mean-blog-cms')));
app.use('/api', userRoute)

// Set localhost
// Create port
const port = process.env.PORT || 3000;
app.listen(port, () => {
	console.log('Connected to port ' + port)
})

// Find 404 and hand over to error handler
app.use((req, res, next) => {
	next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
	console.error(err.message); // Log error message in server's console
	if (!err.statusCode) err.statusCode = 500; // If err has no specified error code, set error code to 'Internal Server Error (500)'
	res.status(err.statusCode).send(err.message); // All HTTP requests must have a response, so send back an error with its status code and message
});