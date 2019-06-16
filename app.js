const express = require('express');
const stripe = require('stripe')('sk_test_7JdkLmRfrnyE4D0aQSfW1YI100JWLbWKNr');
const bodyParser = require('body-parser');
var cons = require('consolidate');
var path = require('path');

const app = express();


// view engine setup
app.engine('html', cons.swig)
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'html');

// Body Parser Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

// Set Static Folder
app.use(express.static(`${__dirname}/public`));

// Index Route
app.get('/', (req,res) => {
	res.render('index');
});

app.get('/success', (req,res) => {
	res.render('success');
});

// Charge Route
// app.post('/charge',(req, res) => {
// 	const amount = 20000;
// 	console.log("hi");
// 	//const ss=
// 	stripe.customers.create({
// 		email: req.body.stripeEmail,
// 		source: req.body.stripeToken
// 	})
// 	// ss.save(function(err,newEntry){
// 	// 	if(err){
// 	// 		res.json(err).status(400);
// 	// 	}else{

// 	// 	}
// 	// })
// 	  .then(customer => stripe.charges.create({
// 		amount,
// 		description: 'Premium fee to stay fit',
// 		currency: 'USD',
// 		customer:customer.id
// 	}))
// 	.then(charge => res.render('success'));	
// });

const port = 5000;

app.listen(port, () => {
	console.log(`Server started on port ${port}`);
});
  
 //  .then(customer => stripe.charges.create({
	// 	amount,
	// 	description: 'Premium fee to stay fit',
	// 	currency: 'USD',
	// 	customer:customer.id
	// }))
	// .then(charge => res.render('success'));