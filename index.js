let express = require("express");

let app = express();
let dotenv = require("dotenv");
dotenv.config();

let session = require("express-session");
let mongoose = require("mongoose")
const { RouteControl } = require("./controllers/RouteControl");
app.use(require('body-parser')());
app.use(express.static(__dirname+"/public"));
app.set('views',__dirname+"/views");
app.set('view engine', 'pug');
app.use(session({
    secret: 'vertgrid',
    resave: true,
    saveUninitialized: false
  }));

app.use((req, res, next)=> {
  res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept,Authorization");
  res.header("Access-Control-Allow-Methods","PUT,DELETE,POST,GET,PATCH")
  next();
});


const port = process.env.PORT;
let mongoDevUrl = process.env.MONGO_DB_DEV ? process.env.MONGO_DB_DEV : "";
var mongodbURL = "";

if (process.env.NODE_ENV == 'production') {
    mongodbURL = process.env.MONGO_DB_PROD;
}
else {
    mongodbURL = process.env.MONGO_DB_DEV;
}
console.log(process.env.NODE_ENV);
console.log("url: ", mongodbURL);
try {
    mongoose.connect(mongodbURL);
}
catch (error) {
    throw error;
}
app.get("/", RouteControl.page.home);


app.listen(port, () => {
  console.log(`⚡️[server]:Multimail Server is running at https://localhost:${port}`);
});


