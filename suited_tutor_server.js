var request 		 		= require("request"),
	http 					= require("http"),
	util 					= require("util"),
	fs   					= require("fs-extra"),
	path                    = require('path');
	config 					= require('./config'),
	// PORT 					= config.port,
	Users 					= require('./users_new.js'),
	Admin                   = require('./admin.js'),
    async 					= require("async");
    var cors                = require('cors');
    var https                   = require("https");
// node modules
var logger 					= require('morgan');
var express 				= require('express');
var bodyParser				= require('body-parser');
var multiparty              = require('multiparty');
var randomstring 			= require("random-string");
var mysql 					= require('mysql');
var pool 					= mysql.createPool({
								host: config.mysql_host,
								user: config.mysql_user,
								password: config.mysql_password,
								database: config.mysql_database
								
                            });
                                         
var app = express();	
global.globalString=''						  
global.book_class_payment_student=''						  
pool.query('SELECT 1 + 1 AS solution', function(err, rows, fields) {
  if (err) throw err;
  console.log('The solution is: ', rows[0].solution);
});
//09-04-2023
// const stripe = require("stripe")("sk_test_vkkv0lY4BZpPK9zJQy3ymlrH");    
const stripe = require("stripe")(config.stripe);
                            

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});




// app.use(express.json());




app.use(express.static("public"));
app.use(bodyParser.json());
app.use(cors({ origin: true, credentials: true }));

// parse body data

app.use(logger('dev'));
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({limit: '50mb', extended: false}));
app.use(bodyParser.json({limit: '50mb'}));
app.use(cors());
// const stripe = require("stripe")("sk_test_51Mc1QjSAsqTNd0k5P4FZBLBJK7SEVWJtZIPr3oKyeI7zUEau61SohWCzAY0wFuAcWSyZaL2Ye0o6gU3YDJCqTQK900Yw3bJL0h");

//  var privateKey = fs.readFileSync('/home/marbletopsco/ssl/keys/c06a6_b99c7_f55095e0bc3f95c0c5db16b5eb2b706f.key').toString();
//  var certificate = fs.readFileSync('/home/marbletopsco/ssl/certs/suited_admin_mrmmbs_com_c06a6_b99c7_1694563199_b2f1db1d15f8b04798ada09f192686dc.crt').toString();
 
 //var ca = fs.readFileSync('/etc/pki/tls/certs/front.mrmmbsinfotech.com.bundle').toString();
//  var credentials = {key: privateKey, cert: certificate};

 var httpsServer = https.createServer( app);
 var  Server  = require("socket.io");
// const io = new Server(httpsServer, {
//     cors: {
//       origin: "*",
//       methods: ["GET", "POST"]
//     }
//   });
//   io.on('connection', (socket)=>{
//     socket.on('message', function(data){
//         console.log("data3",data.isGroup);
//         // return
//         Users.sendMessage(data, pool, function (http_status_code, err, response) {

//             if (err) {
//                 console.log(err);
//                 throw err;
//             }
//             if (config.DEBUG == 2)
//                 console.log(response,"this is responce");
//         });
//         io.emit('new message', JSON.stringify(data));
//         console.log(data.user + ' messaged :- ' + data.message);
//       })
// })
//  var server = httpsServer.listen(config.port, function () {
//      var host = server.address().address;
//      var port = server.address().port;
    
//      console.log(config.SITE_TITLE, ' server listening on port', port);
//  });


//  app.post("/checkout", async (req, res, next) => {
//     try {
//         const session = await stripe.checkout.sessions.create({
//         payment_method_types: ['card'],
//         shipping_address_collection: {
//         allowed_countries: ['IN'],
//         },
        
//            line_items:  req.body.items.map((item) => ({
//             price_data: {
//               currency: 'INR',
//               product_data: {
//                 name: item.name,
//                 images: [item.product]
//               },
//               unit_amount: item.price * 100,
//             },
//             quantity: item.quantity,
//           })),
//            mode: "payment",
//         //    success_url: "https://suited-admin.mrmmbs.com:8999/success.html",
//         //    success_url: "https://suited-admin.mrmmbs.com:8999/success.html",
//             success_url: "http://localhost:8999/success",
//            cancel_url: "http://localhost:8999/cancel.html",
//         });

//         globalString= session;
//         console.log(globalString,'globalString');
//         // res.redirect(session.url);
//         res.status(200).json(session);
//     } catch (error) {
//         next(error);
//     }
// });

// app.get('/success',async (req,res)=>{
// console.log(res);
//  var userdata = globalString;
//     Users.success(userdata, pool, function (http_status_code, err, response) {
        
//         if (err) {
//             console.log(err);
//             throw err;
//         }
//         if (config.DEBUG == 2)
//             console.log(response);
//         res.status(http_status_code).send(response);
//     });
// })
app.post('/teacher_avalible', function (req, res) {
    var userdata = req.body;
    Users.teacher_avalible(userdata, pool, function (http_status_code, err, response) {
        if (err) {
            console.log(err);
            throw err;
        }
        if (config.DEBUG == 2)
            console.log(response);
            res.status(http_status_code).send(response);
    });
});
app.post('/faqs_list_admin', function (req, res) {
    var userdata = req.body;
    Admin.faqs_list_admin(userdata, pool, function (http_status_code, err, response) {
        if (err) {
            console.log(err);
            throw err;
        }
        if (config.DEBUG == 2)
            console.log(response);
            res.status(http_status_code).send(response);
    });
});
app.post('/findquizzes', function (req, res) {
    var userdata = req.body;
    Users.findquizzes(userdata, pool, function (http_status_code, err, response) {
        if (err) {
            console.log(err);
            throw err;
        }
        if (config.DEBUG == 2)
            console.log(response);
            res.status(http_status_code).send(response);
    });
});
app.post('/delete_quizz', function (req, res) {
    var userdata = req.body;
    Users.delete_quizz(userdata, pool, function (http_status_code, err, response) {
        if (err) {
            console.log(err);
            throw err;
        }
        if (config.DEBUG == 2)
            console.log(response);
            res.status(http_status_code).send(response);
    });
});

app.post('/teacher_classes_list_upcoming', function (req, res) {
    var userdata = req.body;
    Users.teacher_classes_list_upcoming(userdata, pool, function (http_status_code, err, response) {
        if (err) {
            console.log(err);
            throw err;
        }
        if (config.DEBUG == 2)
            console.log(response);
            res.status(http_status_code).send(response);
    });
});
app.post('/teacher_classes_list_cancel', function (req, res) {
    var userdata = req.body;
    Users.teacher_classes_list_cancel(userdata, pool, function (http_status_code, err, response) {
        if (err) {
            console.log(err);
            throw err;
        }
        if (config.DEBUG == 2)
            console.log(response);
            res.status(http_status_code).send(response);
    });
});
app.post('/contact_us_inquiry', function (req, res) {
    console.log('Received data:', req.body); 
    var userdata = req.body;
    Admin.contact_us_inquiry(userdata, pool, function (http_status_code, err, response) {
        if (err) {
            console.log(err);
            throw err;
        }
        if (config.DEBUG == 2)
            console.log(response);
            res.status(http_status_code).send(response);
    });
});
app.post('/teacher_classes_list_complete', function (req, res) {
    var userdata = req.body;
    Users.teacher_classes_list_complete(userdata, pool, function (http_status_code, err, response) {
        if (err) {
            console.log(err);
            throw err;
        }
        if (config.DEBUG == 2)
            console.log(response);
            res.status(http_status_code).send(response);
    });
});

app.post('/add_bankdetail', function (req, res) {
    var userdata = req.body;
    Users.add_bankdetail(userdata, pool, function (http_status_code, err, response) {
        if (err) {
            console.log(err);
            throw err;
        }
        if (config.DEBUG == 2)
            console.log(response);
            res.status(http_status_code).send(response);
    });
});
app.post('/merithub_new_users', function (req, res) {
    var userdata = req.body;
    console.log('merithub_new_users',userdata);
    Users.merithub_new_users(userdata, pool, function (http_status_code, err, response) {
        if (err) {
            console.log(err);
            throw err;
        }
        if (config.DEBUG == 2)
            console.log(response);
            res.status(http_status_code).send(response);
    });
});
app.post('/count_complete_lession', function (req, res) {
    var userdata = req.body;
    Users.count_complete_lession(userdata, pool, function (http_status_code, err, response) {
        if (err) {
            console.log(err);
            throw err;
        }
        if (config.DEBUG == 2)
            console.log(response);
            res.status(http_status_code).send(response);
    });
});
app.post('/add_time_slot', function (req, res) {
    var userdata = req.body;
    Admin.add_time_slot(userdata, pool, function (http_status_code, err, response) {
        if (err) {
            console.log(err);
            throw err;
        }
        if (config.DEBUG == 2)
            console.log(response);
            res.status(http_status_code).send(response);
    });
});
app.post('/delete_enquiries', function (req, res) {
    var userdata = req.body;
    Admin.delete_enquiries(userdata, pool, function (http_status_code, err, response) {
        if (err) {
            console.log(err);
            throw err;
        }
        if (config.DEBUG == 2)
            console.log(response);
            res.status(http_status_code).send(response);
    });
});
app.post('/enquiries_list', function (req, res) {
    var userdata = req.body;
    Admin.enquiries_list(userdata, pool, function (http_status_code, err, response) {
        if (err) {
            console.log(err);
            throw err;
        }
        if (config.DEBUG == 2)
            console.log(response);
            res.status(http_status_code).send(response);
    });
});
app.get('/uploads/:filename', (req, res) => {
    console.log(req.params.filename,'req.params.filename');
    res.download(path.join(__dirname+'/uploads/' + req.params.filename));
});
app.get('/uploads', (req, res) => {
    res.send("not avalibale");
});
 app.post('fronts/success', bodyParser.raw({type: 'application/json'}), async (req, res) => {
    const payload = req.body;
    console.log(req.body,'payment_webhook');
    // console.log(payload.data.object.name,'adad');
    // const sig = request.headers['stripe-signature'];
    // userdata=book_class_payment_student;
    // if (payload.type === 'checkout.session.completed') {
        
    Users.payment_update_webhook(payload, pool, function (err, response) {
        
        if (err) {
            console.log(err);
            throw err;
        }
        if (config.DEBUG == 2)
            console.log(response);
        // res.status(http_status_code).send(response);
    });
  
       
    // }
  
    res.status(200).end();
  });
  //09-04-2023
// app.post("/create-checkout-session", async (request, response) => {
//     console.log('request',request.body.items);
//     book_class_payment_student=request.body.items
//     const { cart, email} = request.body;
 
  
//     const session = await stripe.checkout.sessions.create({
//       payment_method_types: ["card"],
//       shipping_address_collection: {
//         allowed_countries: ['US']
//       },
//       line_items: [
//         {
//           price_data: {
//             currency: 'pln',
//             product_data: {
//               name: book_class_payment_student.tution_frequency,
//             },
//             unit_amount: book_class_payment_student.student_id * 100,
//           },
//           quantity: 1,
//         },
//       ],
//       mode: 'payment',
//       success_url: "https://suited-admin.mrmmbs.com:8999/front4/success",
//            cancel_url: "https://suited-admin.mrmmbs.com:8999/front4/cancel",
//       metadata: {
//         email
//       }
//     });
//     console.log(session,['session']);
//     response.status(200).json({ id: session.id});
//   });
app.post("/create-checkout-session", async (request, response) => {
    console.log('request',request.body.items);
    book_class_payment_student=request.body.items
    const { cart, email} = request.body;
 
  
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: [
        {
          price_data: {
            currency: 'eur',
            product_data: {
              name: book_class_payment_student.tution_frequency,
            },
            unit_amount: book_class_payment_student.rate * 100,
          },
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: config.successurl,
           cancel_url: config.cancelurl,
      metadata: {
        email
      }
    });
    console.log(session,['session']);
    response.status(200).json({ id: session.id});
  });
  
  

  const endpointSecret = "whsec_835111c047037bb3f7a7fd28ae653fdbf9ac2fc6824b03ba7853b85bed2f4c5b";

  
  app.post('/webhooks', bodyParser.raw({type: 'application/json'}), async (req, res) => {
    const payload = req.body;
    console.log(payload.data.object.name,'adad');
    // const sig = request.headers['stripe-signature'];
    userdata=book_class_payment_student;
    if (payload.type === 'checkout.session.completed') {
        
    Users.webhooks(userdata, pool, function (err, response) {
        
        if (err) {
            console.log(err);
            throw err;
        }
        if (config.DEBUG == 2)
            console.log(response);
        // res.status(http_status_code).send(response);
    });
  
       
    }
  
    res.status(200).end();
  });
  app.post('/complete_class_by_tutor', function (req, res) {
    var userdata = req.body;
    Users.complete_class_by_tutor(userdata, pool, function (http_status_code, err, response) {
        if (err) {
            console.log(err);
            throw err;
        }
        if (config.DEBUG == 2)
            console.log(response);
            res.status(http_status_code).send(response);
    });
});
  app.post('/cashbackOfferId', function (req, res) {
    var userdata = req.body;
    Users.cashbackOfferId(userdata, pool, function (http_status_code, err, response) {
        
        if (err) {
            console.log(err);
            throw err;
        }
        if (config.DEBUG == 2)
            console.log(response);
        res.status(http_status_code).send(response);
    });
});
app.post('/delete_teacher_educations', function (req, res) {
    var userdata = req.body;
    Users.delete_teacher_educations(userdata, pool, function (http_status_code, err, response) {
        if (err) {
            console.log(err);
            throw err;
        }
        if (config.DEBUG == 2)
            console.log(response);
            res.status(http_status_code).send(response);
    });
});
app.post('/teacher_review_rating', function (req, res) {
    var userdata = req.body;
    Users.teacher_review_rating(userdata, pool, function (http_status_code, err, response) {
        
        if (err) {
            console.log(err);
            throw err;
        }
        if (config.DEBUG == 2)
            console.log(response);
        res.status(http_status_code).send(response);
    });
});
app.post('/students_classes_list', function (req, res) {
    var userdata = req.body;
    Users.students_classes_list(userdata, pool, function (http_status_code, err, response) {
        if (err) {
            console.log(err);
            throw err;
        }
        if (config.DEBUG == 2)
            console.log(response);
            res.status(http_status_code).send(response);
    });
});
app.post('/students_classes_list_upcoming', function (req, res) {
    var userdata = req.body;
    Users.students_classes_list_upcoming(userdata, pool, function (http_status_code, err, response) {
        if (err) {
            console.log(err);
            throw err;
        }
        if (config.DEBUG == 2)
            console.log(response);
            res.status(http_status_code).send(response);
    });
});
app.post('/students_classes_list_cancel', function (req, res) {
    var userdata = req.body;
    Users.students_classes_list_cancel(userdata, pool, function (http_status_code, err, response) {
        if (err) {
            console.log(err);
            throw err;
        }
        if (config.DEBUG == 2)
            console.log(response);
            res.status(http_status_code).send(response);
    });
});
app.post('/students_classes_list_complete', function (req, res) {
    var userdata = req.body;
    Users.students_classes_list_complete(userdata, pool, function (http_status_code, err, response) {
        if (err) {
            console.log(err);
            throw err;
        }
        if (config.DEBUG == 2)
            console.log(response);
            res.status(http_status_code).send(response);
    });
});
app.post('/parent_classes_list', function (req, res) {
    var userdata = req.body;
    Users.parent_classes_list(userdata, pool, function (http_status_code, err, response) {
        if (err) {
            console.log(err);
            throw err;
        }
        if (config.DEBUG == 2)
            console.log(response);
            res.status(http_status_code).send(response);
    });
});
app.post('/parent_classes_list_cancel', function (req, res) {
    var userdata = req.body;
    Users.parent_classes_list_cancel(userdata, pool, function (http_status_code, err, response) {
        if (err) {
            console.log(err);
            throw err;
        }
        if (config.DEBUG == 2)
            console.log(response);
            res.status(http_status_code).send(response);
    });
});
app.post('/parent_classes_list_complete', function (req, res) {
    var userdata = req.body;
    Users.parent_classes_list_complete(userdata, pool, function (http_status_code, err, response) {
        if (err) {
            console.log(err);
            throw err;
        }
        if (config.DEBUG == 2)
            console.log(response);
            res.status(http_status_code).send(response);
    });
});
app.post('/parent_classes_list_upcoming', function (req, res) {
    var userdata = req.body;
    Users.parent_classes_list_upcoming(userdata, pool, function (http_status_code, err, response) {
        if (err) {
            console.log(err);
            throw err;
        }
        if (config.DEBUG == 2)
            console.log(response);
            res.status(http_status_code).send(response);
    });
});
app.post('/teacher_review', function (req, res) {
    var userdata = req.body;
    Users.teacher_review(userdata, pool, function (http_status_code, err, response) {
        
        if (err) {
            console.log(err);
            throw err;
        }
        if (config.DEBUG == 2)
            console.log(response);
        res.status(http_status_code).send(response);
    });
});
app.use(function (req, res, next) {
    var userdata = req.body;
	if (config.DEBUG > 0)
        console.log('####################################### ' + req.url + ' API IS CALLED WITH DATA: ', userdata);
		console.log('headers',JSON.stringify(req.headers));
	fs.appendFile("postdata.txt",JSON.stringify(userdata), function(err22) {
    
    });

    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

/* upload file */
const multer = require('multer');
var storage = multer.diskStorage({
	destination: function (req, file, cb) {
	///var/www/html/mws/uploads
	// cb(null,config.URL_UPLOAD)
	cb(null,'./uploads/')
	},
	filename: function (req, file, cb) {
        console.log('file',file)
	//cb(null, file.fieldname + '-' + Date.now()+'.jpeg')
	cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
	}
})

var upload = multer({ storage: storage });
console.log(upload,'userimg');



app.post("/upload_file", upload.single('attachment'), function(req, res) {

console.log(req,res,'userimg');


	//return false;
	if(req.method=='POST'){
	console.log("req.body>>>>>>>attachment",req.body);
	//console.log("req>>>>>>>>>>>>>>>>>>",req);
	const file = req.file;
	console.log("file>>>>>>>>>>>>>>>>>",file);
	//return false;
		try {
			return res.send({status: true, msg: 'Record added succesfully.',name:file.filename })
		}catch (error) {
			console.log('err',error);
		}
	}
})

app.post('/admin_login', function (req, res) {
    var userdata = req.body;
    Admin.admin_login(userdata, pool, function (http_status_code, err, response) {
        
        if (err) {
            console.log(err);
            throw err;
        }
        if (config.DEBUG == 2)
            console.log(response);
        res.status(http_status_code).send(response);
    });
});

app.post('/forgot_password', function (req, res) {
    var userdata = req.body;
    Admin.forgot_password(userdata, pool, function (http_status_code, err, response) {
        
        if (err) {
            console.log(err);
            throw err;
        }
        if (config.DEBUG == 2)
            console.log(response);
            res.status(http_status_code).send(response);
    });
});

app.post('/admin_change_password', function (req, res) {
    var userdata = req.body;
    Admin.admin_change_password(userdata, pool, function (http_status_code, err, response) {
        if (err) {
            console.log(err);
            throw err;
        }
        if (config.DEBUG == 2)
            console.log(response);
            res.status(http_status_code).send(response);
    });
});

app.post('/update_admin_profile', function (req, res) {
    var userdata = req.body;
    Admin.update_admin_profile(userdata, pool, function (http_status_code, err, response) {
        if (err) {
            console.log(err);
            throw err;
        }
        if (config.DEBUG == 2)
            console.log(response);
            res.status(http_status_code).send(response);
    });
});


app.post('/banner_list', function (req, res) {
    var userdata = req.body;
    Admin.banner_list(userdata, pool, function (http_status_code, err, response) {
        if (err) {
            console.log(err);
            throw err;
        }
        if (config.DEBUG == 2)
            console.log(response);
            res.status(http_status_code).send(response);
    });
});


app.post('/add_banner_image', function (req, res) {
    var userdata = req.body;
    Admin.add_banner_image(userdata, pool, function (http_status_code, err, response) {
        if (err) {
            console.log(err);
            throw err;
        }
        if (config.DEBUG == 2)
            console.log(response);
            res.status(http_status_code).send(response);
    });
});

app.post('/banner_details', function (req, res) {
    var userdata = req.body;
    Admin.banner_details(userdata, pool, function (http_status_code, err, response) {
        if (err) {
            console.log(err);
            throw err;
        }
        if (config.DEBUG == 2)
            console.log(response);
            res.status(http_status_code).send(response);
    });
});

app.post('/update_banner_status', function (req, res) {
    var userdata = req.body;
    Admin.update_banner_status(userdata, pool, function (http_status_code, err, response) {
        if (err) {
            console.log(err);
            throw err;
        }
        if (config.DEBUG == 2)
            console.log(response);
            res.status(http_status_code).send(response);
    });
});
app.post('/delete_user', function (req, res) {
    var userdata = req.body;
    Admin.delete_user(userdata, pool, function (http_status_code, err, response) {
        if (err) {
            console.log(err);
            throw err;
        }
        if (config.DEBUG == 2)
            console.log(response);
            res.status(http_status_code).send(response);
    });
});
app.post('/parent_child_list', function (req, res) {
    var userdata = req.body;
    Admin.parent_child_list(userdata, pool, function (http_status_code, err, response) {
        if (err) {
            console.log(err);
            throw err;
        }
        if (config.DEBUG == 2)
            console.log(response);
            res.status(http_status_code).send(response);
    });
});
app.post('/withdraw_payment_request', function (req, res) {
    var userdata = req.body;
    Admin.withdraw_payment_request(userdata, pool, function (http_status_code, err, response) {
        if (err) {
            console.log(err);
            throw err;
        }
        if (config.DEBUG == 2)
            console.log(response);
            res.status(http_status_code).send(response);
    });
});
app.post('/teacher_payout_request_pay', function (req, res) {
    var userdata = req.body;
    Admin.teacher_payout_request_pay(userdata, pool, function (http_status_code, err, response) {
        if (err) {
            console.log(err);
            throw err;
        }
        if (config.DEBUG == 2)
            console.log(response);
            res.status(http_status_code).send(response);
    });
});
app.post('/withdraw_payment_data', function (req, res) {
    var userdata = req.body;
    Admin.withdraw_payment_data(userdata, pool, function (http_status_code, err, response) {
        if (err) {
            console.log(err);
            throw err;
        }
        if (config.DEBUG == 2)
            console.log(response);
            res.status(http_status_code).send(response);
    });
});
app.post('/cms_list', function (req, res) {
    var userdata = req.body;
    Admin.cms_list(userdata, pool, function (http_status_code, err, response) {
        if (err) {
            console.log(err);
            throw err;
        }
        if (config.DEBUG == 2)
            console.log(response);
            res.status(http_status_code).send(response);
    });
});

app.post('/add_cms', function (req, res) {
    var userdata = req.body;
    Admin.add_cms(userdata, pool, function (http_status_code, err, response) {
        if (err) {
            console.log(err);
            throw err;
        }
        if (config.DEBUG == 2)
            console.log(response);
            res.status(http_status_code).send(response);
    });
});

app.post('/update_cms_status', function (req, res) {
    var userdata = req.body;
    Admin.update_cms_status(userdata, pool, function (http_status_code, err, response) {
        if (err) {
            console.log(err);
            throw err;
        }
        if (config.DEBUG == 2)
            console.log(response);
            res.status(http_status_code).send(response);
    });
});

app.post('/cms_details', function (req, res) {
    var userdata = req.body;
    Admin.cms_details(userdata, pool, function (http_status_code, err, response) {
        if (err) {
            console.log(err);
            throw err;
        }
        if (config.DEBUG == 2)
            console.log(response);
            res.status(http_status_code).send(response);
    });
});


app.post('/add_user', function (req, res) {
    var userdata = req.body;
    Admin.add_user(userdata, pool, function (http_status_code, err, response) {
        if (err) {
            console.log(err);
            throw err;
        }
        if (config.DEBUG == 2)
            console.log(response);
            res.status(http_status_code).send(response);
    });
});

app.post('/update_user', function (req, res) {
    var userdata = req.body;
    Admin.update_user(userdata, pool, function (http_status_code, err, response) {
        if (err) {
            console.log(err);
            throw err;
        }
        if (config.DEBUG == 2)
            console.log(response);
            res.status(http_status_code).send(response);
    });
});
app.post('/referral_list', function (req, res) {
    var userdata = req.body;
    Users.referral_list(userdata, pool, function (http_status_code, err, response) {
        if (err) {
            console.log(err);
            throw err;
        }
        if (config.DEBUG == 2)
            console.log(response);
            res.status(http_status_code).send(response);
    });
});

app.post('/user_list', function (req, res) {
    var userdata = req.body;
    Admin.user_list(userdata, pool, function (http_status_code, err, response) {
        if (err) {
            console.log(err);
            throw err;
        }
        if (config.DEBUG == 2)
            console.log(response);
            res.status(http_status_code).send(response);
    });
});

app.post('/user_details', function (req, res) {
    var userdata = req.body;
    Admin.user_details(userdata, pool, function (http_status_code, err, response) {
        if (err) {
            console.log(err);
            throw err;
        }
        if (config.DEBUG == 2)
            console.log(response);
            res.status(http_status_code).send(response);
    });
});

app.post('/update_user_status', function (req, res) {
    var userdata = req.body;
    Admin.update_user_status(userdata, pool, function (http_status_code, err, response) {
        if (err) {
            console.log(err);
            throw err;
        }
        if (config.DEBUG == 2)
            console.log(response);
            res.status(http_status_code).send(response);
    });
});
app.post('/teacher_payout_earning_update', function (req, res) {
    var userdata = req.body;
    Admin.teacher_payout_earning_update(userdata, pool, function (http_status_code, err, response) {
        if (err) {
            console.log(err);
            throw err;
        }
        if (config.DEBUG == 2)
            console.log(response);
            res.status(http_status_code).send(response);
    });
});

app.post('/update_user_verified_status', function (req, res) {
    var userdata = req.body;
    Admin.update_user_verified_status(userdata, pool, function (http_status_code, err, response) {
        if (err) {
            console.log(err);
            throw err;
        }
        if (config.DEBUG == 2)
            console.log(response);
            res.status(http_status_code).send(response);
    });
});



app.post('/faqs_list', function (req, res) {
    var userdata = req.body;
    Admin.faqs_list(userdata, pool, function (http_status_code, err, response) {
        if (err) {
            console.log(err);
            throw err;
        }
        if (config.DEBUG == 2)
            console.log(response);
            res.status(http_status_code).send(response);
    });
});

app.post('/faqs_details', function (req, res) {
    var userdata = req.body;
    Admin.faqs_details(userdata, pool, function (http_status_code, err, response) {
        if (err) {
            console.log(err);
            throw err;
        }
        if (config.DEBUG == 2)
            console.log(response);
            res.status(http_status_code).send(response);
    });
});

app.post('/update_faqs_status', function (req, res) {
    var userdata = req.body;
    Admin.update_faqs_status(userdata, pool, function (http_status_code, err, response) {
        if (err) {
            console.log(err);
            throw err;
        }
        if (config.DEBUG == 2)
            console.log(response);
            res.status(http_status_code).send(response);
    });
});

app.post('/add_faqs', function (req, res) {
    var userdata = req.body;
    Admin.add_faqs(userdata, pool, function (http_status_code, err, response) {
        if (err) {
            console.log(err);
            throw err;
        }
        if (config.DEBUG == 2)
            console.log(response);
            res.status(http_status_code).send(response);
    });
});


app.post('/category_dropdown_list', function (req, res) {
    var userdata = req.body;
    Admin.category_dropdown_list(userdata, pool, function (http_status_code, err, response) {
        
        if (err) {
            console.log(err);
            throw err;
        }
        if (config.DEBUG == 2)
            console.log(response);
        res.status(http_status_code).send(response);
    });
});

app.post('/category_list', function (req, res) {
    var userdata = req.body;
    Admin.category_list(userdata, pool, function (http_status_code, err, response) {
        
        if (err) {
            console.log(err);
            throw err;
        }
        if (config.DEBUG == 2)
            console.log(response);
        res.status(http_status_code).send(response);
    });
});

app.post('/add_category', function (req, res) {
    var userdata = req.body;
    Admin.add_category(userdata, pool, function (http_status_code, err, response) {
        
        if (err) {
            console.log(err);
            throw err;
        }
        if (config.DEBUG == 2)
            console.log(response);
        res.status(http_status_code).send(response);
    });
});

app.post('/category_details', function (req, res) {
    var userdata = req.body;
    Admin.category_details(userdata, pool, function (http_status_code, err, response) {
        
        if (err) {
            console.log(err);
            throw err;
        }
        if (config.DEBUG == 2)
            console.log(response);
        res.status(http_status_code).send(response);
    });
});

app.post('/update_category_status', function (req, res) {
    var userdata = req.body;
    Admin.update_category_status(userdata, pool, function (http_status_code, err, response) {
        
        if (err) {
            console.log(err);
            throw err;
        }
        if (config.DEBUG == 2)
            console.log(response);
        res.status(http_status_code).send(response);
    });
});


app.post('/student_testimonials_list', function (req, res) {
    var userdata = req.body;
    Admin.student_testimonials_list(userdata, pool, function (http_status_code, err, response) {
        if (err) {
            console.log(err);
            throw err;
        }
        if (config.DEBUG == 2)
            console.log(response);
            res.status(http_status_code).send(response);
    });
});

app.post('/add_student_testimonials', function (req, res) {
    var userdata = req.body;
    Admin.add_student_testimonials(userdata, pool, function (http_status_code, err, response) {
        if (err) {
            console.log(err);
            throw err;
        }
        if (config.DEBUG == 2)
            console.log(response);
            res.status(http_status_code).send(response);
    });
});

app.post('/student_testimonials_details', function (req, res) {
    var userdata = req.body;
    Admin.student_testimonials_details(userdata, pool, function (http_status_code, err, response) {
        if (err) {
            console.log(err);
            throw err;
        }
        if (config.DEBUG == 2)
            console.log(response);
            res.status(http_status_code).send(response);
    });
});

app.post('/update_student_testimonials_status', function (req, res) {
    var userdata = req.body;
    Admin.update_student_testimonials_status(userdata, pool, function (http_status_code, err, response) {
        if (err) {
            console.log(err);
            throw err;
        }
        if (config.DEBUG == 2)
            console.log(response);
            res.status(http_status_code).send(response);
    });
});


app.post('/courses_list', function (req, res) {
    var userdata = req.body;
    Admin.courses_list(userdata, pool, function (http_status_code, err, response) {
        if (err) {
            console.log(err);
            throw err;
        }
        if (config.DEBUG == 2)
            console.log(response);
            res.status(http_status_code).send(response);
    });
});

app.post('/courses_dropdown_list', function (req, res) {
    var userdata = req.body;
    Admin.courses_dropdown_list(userdata, pool, function (http_status_code, err, response) {
        if (err) {
            console.log(err);
            throw err;
        }
        if (config.DEBUG == 2)
            console.log(response);
            res.status(http_status_code).send(response);
    });
});

app.post('/add_courses', function (req, res) {
    var userdata = req.body;
    Admin.add_courses(userdata, pool, function (http_status_code, err, response) {
        if (err) {
            console.log(err);
            throw err;
        }
        if (config.DEBUG == 2)
            console.log(response);
            res.status(http_status_code).send(response);
    });
});

app.post('/courses_details', function (req, res) {
    var userdata = req.body;
    Admin.courses_details(userdata, pool, function (http_status_code, err, response) {
        if (err) {
            console.log(err);
            throw err;
        }
        if (config.DEBUG == 2)
            console.log(response);
            res.status(http_status_code).send(response);
    });
});

app.post('/update_courses_status', function (req, res) {
    var userdata = req.body;
    Admin.update_courses_status(userdata, pool, function (http_status_code, err, response) {
        if (err) {
         //console.log(err);
            throw err;
        }
        if (config.DEBUG == 2)
           // console.log(response);
            res.status(http_status_code).send(response);
    });
});

app.post('/view_course_info', function (req, res) {
    var userdata = req.body;
    Admin.view_course_info(userdata, pool, function (http_status_code, err, response) {
        if (err) {
            console.log(err);
            throw err;
        }
        if (config.DEBUG == 2)
            console.log(response);
            res.status(http_status_code).send(response);
    });
});


app.post('/role_access_list', function (req, res) {
    var userdata = req.body;
    Admin.role_access_list(userdata, pool, function (http_status_code, err, response) {
        if (err) {
            console.log(err);
            throw err;
        }
        if (config.DEBUG == 2)
            console.log(response);
            res.status(http_status_code).send(response);
    });
});

app.post('/add_role_access', function (req, res) {
    var userdata = req.body;
    Admin.add_role_access(userdata, pool, function (http_status_code, err, response) {
        if (err) {
            console.log(err);
            throw err;
        }
        if (config.DEBUG == 2)
            console.log(response);
            res.status(http_status_code).send(response);
    });
});

app.post('/update_role_access', function (req, res) {
    var userdata = req.body;
    Admin.update_role_access(userdata, pool, function (http_status_code, err, response) {
        if (err) {
            console.log(err);
            throw err;
        }
        if (config.DEBUG == 2)
            console.log(response);
            res.status(http_status_code).send(response);
    });
});

app.post('/update_role_access_status', function (req, res) {
    var userdata = req.body;
    Admin.update_role_access_status(userdata, pool, function (http_status_code, err, response) {
        if (err) {
            console.log(err);
            throw err;
        }
        if (config.DEBUG == 2)
            console.log(response);
            res.status(http_status_code).send(response);
    });
});

app.post('/role_details', function (req, res) {
    var userdata = req.body;
    Admin.role_details(userdata, pool, function (http_status_code, err, response) {
        if (err) {
            console.log(err);
            throw err;
        }
        if (config.DEBUG == 2)
            console.log(response);
            res.status(http_status_code).send(response);
    });
});


app.post('/sub_admin_list', function (req, res) {
    var userdata = req.body;
    Admin.sub_admin_list(userdata, pool, function (http_status_code, err, response) {
        if (err) {
            console.log(err);
            throw err;
        }
        if (config.DEBUG == 2)
            console.log(response);
            res.status(http_status_code).send(response);
    });
});
app.post('/add_subadmin', function (req, res) {
    var userdata = req.body;
    Admin.add_subadmin(userdata, pool, function (http_status_code, err, response) {
        if (err) {
            console.log(err);
            throw err;
        }
        if (config.DEBUG == 2)
            console.log(response);
            res.status(http_status_code).send(response);
    });
});

app.post('/update_subadmin', function (req, res) {
    var userdata = req.body;
    Admin.update_subadmin(userdata, pool, function (http_status_code, err, response) {
        if (err) {
            console.log(err);
            throw err;
        }
        if (config.DEBUG == 2)
            console.log(response);
            res.status(http_status_code).send(response);
    });
});

app.post('/update_subadmin_status', function (req, res) {
    var userdata = req.body;
    Admin.update_subadmin_status(userdata, pool, function (http_status_code, err, response) {
        if (err) {
            console.log(err);
            throw err;
        }
        if (config.DEBUG == 2)
            console.log(response);
            res.status(http_status_code).send(response);
    });
});

app.post('/subadmin_details', function (req, res) {
    var userdata = req.body;
    Admin.subadmin_details(userdata, pool, function (http_status_code, err, response) {
        if (err) {
            console.log(err);
            throw err;
        }
        if (config.DEBUG == 2)
            console.log(response);
            res.status(http_status_code).send(response);
    });
});



app.post('/age_group_list', function (req, res) {
    var userdata = req.body;
    Admin.age_group_list(userdata, pool, function (http_status_code, err, response) {
        if (err) {
            console.log(err);
            throw err;
        }
        if (config.DEBUG == 2)
            console.log(response);
            res.status(http_status_code).send(response);
    });
});

app.post('/age_group_list_dropdown', function (req, res) {
    var userdata = req.body;
    Admin.age_group_list_dropdown(userdata, pool, function (http_status_code, err, response) {
        if (err) {
            console.log(err);
            throw err;
        }
        if (config.DEBUG == 2)
            console.log(response);
            res.status(http_status_code).send(response);
    });
});


app.post('/add_age_group', function (req, res) {
    var userdata = req.body;
    Admin.add_age_group(userdata, pool, function (http_status_code, err, response) {
        if (err) {
            console.log(err);
            throw err;
        }
        if (config.DEBUG == 2)
            console.log(response);
            res.status(http_status_code).send(response);
    });
});


app.post('/age_group_details', function (req, res) {
    var userdata = req.body;
    Admin.age_group_details(userdata, pool, function (http_status_code, err, response) {
        if (err) {
            console.log(err);
            throw err;
        }
        if (config.DEBUG == 2)
            console.log(response);
            res.status(http_status_code).send(response);
    });
});


app.post('/update_age_group_status', function (req, res) {
    var userdata = req.body;
    Admin.update_age_group_status(userdata, pool, function (http_status_code, err, response) {
        if (err) {
            console.log(err);
            throw err;
        }
        if (config.DEBUG == 2)
            console.log(response);
            res.status(http_status_code).send(response);
    });
});

app.post('/update_profile_image', function (req, res) {
    var userdata = req.body;
    Admin.update_profile_image(userdata, pool, function (http_status_code, err, response) {
        if (err) {
            console.log(err);
            throw err;
        }
        if (config.DEBUG == 2)
            console.log(response);
            res.status(http_status_code).send(response);
    });
});


app.post('/course_chapters_list', function (req, res) {
    var userdata = req.body;
    Admin.course_chapters_list(userdata, pool, function (http_status_code, err, response) {
        if (err) {
            console.log(err);
            throw err;
        }
        if (config.DEBUG == 2)
            console.log(response);
            res.status(http_status_code).send(response);
    });
});

app.post('/course_chapters_dropdown_list', function (req, res) {
    var userdata = req.body;
    Admin.course_chapters_dropdown_list(userdata, pool, function (http_status_code, err, response) {
        if (err) {
            console.log(err);
            throw err;
        }
        if (config.DEBUG == 2)
            console.log(response);
            res.status(http_status_code).send(response);
    });
});

app.post('/add_course_chapter', function (req, res) {
    var userdata = req.body;
    Admin.add_course_chapter(userdata, pool, function (http_status_code, err, response) {
        if (err) {
            console.log(err);
            throw err;
        }
        if (config.DEBUG == 2)
            console.log(response);
            res.status(http_status_code).send(response);
    });
});

app.post('/course_chapter_details', function (req, res) {
    var userdata = req.body;
    Admin.course_chapter_details(userdata, pool, function (http_status_code, err, response) {
        if (err) {
            console.log(err);
            throw err;
        }
        if (config.DEBUG == 2)
            console.log(response);
            res.status(http_status_code).send(response);
    });
});

app.post('/update_course_chapters_status', function (req, res) {
    var userdata = req.body;
    Admin.update_course_chapters_status(userdata, pool, function (http_status_code, err, response) {
        if (err) {
            console.log(err);
            throw err;
        }
        if (config.DEBUG == 2)
            console.log(response);
            res.status(http_status_code).send(response);
    });
});


app.post('/add_course_achievement', function (req, res) {
    var userdata = req.body;
    Admin.add_course_achievement(userdata, pool, function (http_status_code, err, response) {
        if (err) {
            console.log(err);
            throw err;
        }
        if (config.DEBUG == 2)
            console.log(response);
            res.status(http_status_code).send(response);
    });
});

app.post('/course_achievement_details', function (req, res) {
    var userdata = req.body;
    Admin.course_achievement_details(userdata, pool, function (http_status_code, err, response) {
        if (err) {
            console.log(err);
            throw err;
        }
        if (config.DEBUG == 2)
            console.log(response);
            res.status(http_status_code).send(response);
    });
});

app.post('/update_course_achievement_status', function (req, res) {
    var userdata = req.body;
    Admin.update_course_achievement_status(userdata, pool, function (http_status_code, err, response) {
        if (err) {
            console.log(err);
            throw err;
        }
        if (config.DEBUG == 2)
            console.log(response);
            res.status(http_status_code).send(response);
    });
});

app.post('/course_achievement_list', function (req, res) {
    var userdata = req.body;
    Admin.course_achievement_list(userdata, pool, function (http_status_code, err, response) {
        if (err) {
            console.log(err);
            throw err;
        }
        if (config.DEBUG == 2)
            console.log(response);
            res.status(http_status_code).send(response);
    });
});


app.post('/classes_list', function (req, res) {
    var userdata = req.body;
    Admin.classes_list(userdata, pool, function (http_status_code, err, response) {
        if (err) {
            console.log(err);
            throw err;
        }
        if (config.DEBUG == 2)
            console.log(response);
            res.status(http_status_code).send(response);
    });
});


app.post('/add_classes', function (req, res) {
    var userdata = req.body;
    Admin.add_classes(userdata, pool, function (http_status_code, err, response) {
        if (err) {
            console.log(err);
            throw err;
        }
        if (config.DEBUG == 2)
            console.log(response);
            res.status(http_status_code).send(response);
    });
});


app.post('/classes_details', function (req, res) {
    var userdata = req.body;
    Admin.classes_details(userdata, pool, function (http_status_code, err, response) {
        if (err) {
            console.log(err);
            throw err;
        }
        if (config.DEBUG == 2)
            console.log(response);
            res.status(http_status_code).send(response);
    });
});


app.post('/update_classes_status', function (req, res) {
    var userdata = req.body;
    Admin.update_classes_status(userdata, pool, function (http_status_code, err, response) {
        if (err) {
            console.log(err);
            throw err;
        }
        if (config.DEBUG == 2)
            console.log(response);
            res.status(http_status_code).send(response);
    });
});


app.post('/activities_list', function (req, res) {
    var userdata = req.body;
    Admin.activities_list(userdata, pool, function (http_status_code, err, response) {
        if (err) {
            console.log(err);
            throw err;
        }
        if (config.DEBUG == 2)
            console.log(response);
            res.status(http_status_code).send(response);
    });
});

app.post('/add_activities', function (req, res) {
    var userdata = req.body;
    Admin.add_activities(userdata, pool, function (http_status_code, err, response) {
        if (err) {
            console.log(err);
            throw err;
        }
        if (config.DEBUG == 2)
            console.log(response);
            res.status(http_status_code).send(response);
    });
});

app.post('/activities_details', function (req, res) {
    var userdata = req.body;
    Admin.activities_details(userdata, pool, function (http_status_code, err, response) {
        if (err) {
            console.log(err);
            throw err;
        }
        if (config.DEBUG == 2)
            console.log(response);
            res.status(http_status_code).send(response);
    });
});

app.post('/update_activities_status', function (req, res) {
    var userdata = req.body;
    Admin.update_activities_status(userdata, pool, function (http_status_code, err, response) {
        if (err) {
            console.log(err);
            throw err;
        }
        if (config.DEBUG == 2)
            console.log(response);
            res.status(http_status_code).send(response);
    });
});


app.post('/quizzes_list', function (req, res) {
    var userdata = req.body;
    Admin.quizzes_list(userdata, pool, function (http_status_code, err, response) {
        if (err) {
            console.log(err);
            throw err;
        }
        if (config.DEBUG == 2)
            console.log(response);
            res.status(http_status_code).send(response);
    });
});

app.post('/add_quizzes', function (req, res) {
    var userdata = req.body;
    Admin.add_quizzes(userdata, pool, function (http_status_code, err, response) {
        if (err) {
            console.log(err);
            throw err;
        }
        if (config.DEBUG == 2)
            console.log(response);
            res.status(http_status_code).send(response);
    });
});

app.post('/quizzes_details', function (req, res) {
    var userdata = req.body;
    Admin.quizzes_details(userdata, pool, function (http_status_code, err, response) {
        if (err) {
            console.log(err);
            throw err;
        }
        if (config.DEBUG == 2)
            console.log(response);
            res.status(http_status_code).send(response);
    });
});

app.post('/update_quizzes_status', function (req, res) {
    var userdata = req.body;
    Admin.update_quizzes_status(userdata, pool, function (http_status_code, err, response) {
        if (err) {
            console.log(err);
            throw err;
        }
        if (config.DEBUG == 2)
            console.log(response);
            res.status(http_status_code).send(response);
    });
});


app.post('/quizzes_questions_list', function (req, res) {
    var userdata = req.body;
    Admin.quizzes_questions_list(userdata, pool, function (http_status_code, err, response) {
        if (err) {
            console.log(err);
            throw err;
        }
        if (config.DEBUG == 2)
            console.log(response);
            res.status(http_status_code).send(response);
    });
});


app.post('/add_quizzes_questions', function (req, res) {
    var userdata = req.body;
    Admin.add_quizzes_questions(userdata, pool, function (http_status_code, err, response) {
        if (err) {
            console.log(err);
            throw err;
        }
        if (config.DEBUG == 2)
            console.log(response);
            res.status(http_status_code).send(response);
    });
});

app.post('/quizzes_dropdown_list', function (req, res) {
    var userdata = req.body;
    Admin.quizzes_dropdown_list(userdata, pool, function (http_status_code, err, response) {
        if (err) {
            console.log(err);
            throw err;
        }
        if (config.DEBUG == 2)
            console.log(response);
            res.status(http_status_code).send(response);
    });
});


app.post('/quizzes_questions_details', function (req, res) {
    var userdata = req.body;
    Admin.quizzes_questions_details(userdata, pool, function (http_status_code, err, response) {
        if (err) {
            console.log(err);
            throw err;
        }
        if (config.DEBUG == 2)
            console.log(response);
            res.status(http_status_code).send(response);
    });
});


app.post('/update_quizzes_questions_status', function (req, res) {
    var userdata = req.body;
    Admin.update_quizzes_questions_status(userdata, pool, function (http_status_code, err, response) {
        if (err) {
            console.log(err);
            throw err;
        }
        if (config.DEBUG == 2)
            console.log(response);
            res.status(http_status_code).send(response);
    });
});

app.post('/projects_list', function (req, res) {
    var userdata = req.body;
    Admin.projects_list(userdata, pool, function (http_status_code, err, response) {
        if (err) {
            console.log(err);
            throw err;
        }
        if (config.DEBUG == 2)
            console.log(response);
            res.status(http_status_code).send(response);
    });
});

app.post('/add_project', function (req, res) {
    var userdata = req.body;
    Admin.add_project(userdata, pool, function (http_status_code, err, response) {
        if (err) {
            console.log(err);
            throw err;
        }
        if (config.DEBUG == 2)
            console.log(response);
            res.status(http_status_code).send(response);
    });
});

app.post('/project_details', function (req, res) {
    var userdata = req.body;
    Admin.project_details(userdata, pool, function (http_status_code, err, response) {
        if (err) {
            console.log(err);
            throw err;
        }
        if (config.DEBUG == 2)
            console.log(response);
            res.status(http_status_code).send(response);
    });
});

app.post('/projects_dropdown_list', function (req, res) {
    var userdata = req.body;
    Admin.projects_dropdown_list(userdata, pool, function (http_status_code, err, response) {
        if (err) {
            console.log(err);
            throw err;
        }
        if (config.DEBUG == 2)
            console.log(response);
            res.status(http_status_code).send(response);
    });
});

app.post('/update_projects_status', function (req, res) {
    var userdata = req.body;
    Admin.update_projects_status(userdata, pool, function (http_status_code, err, response) {
        if (err) {
            console.log(err);
            throw err;
        }
        if (config.DEBUG == 2)
            console.log(response);
            res.status(http_status_code).send(response);
    });
});


app.post('/chapter_lessons_list', function (req, res) {
    var userdata = req.body;
    Admin.chapter_lessons_list(userdata, pool, function (http_status_code, err, response) {
        if (err) {
            console.log(err);
            throw err;
        }
        if (config.DEBUG == 2)
            console.log(response);
            res.status(http_status_code).send(response);
    });
});


app.post('/add_chapter_lesson', function (req, res) {
    var userdata = req.body;
    Admin.add_chapter_lesson(userdata, pool, function (http_status_code, err, response) {
        if (err) {
            console.log(err);
            throw err;
        }
        if (config.DEBUG == 2)
            console.log(response);
            res.status(http_status_code).send(response);
    });
});


app.post('/chapter_lesson_details', function (req, res) {
    var userdata = req.body;
    Admin.chapter_lesson_details(userdata, pool, function (http_status_code, err, response) {
        if (err) {
            console.log(err);
            throw err;
        }
        if (config.DEBUG == 2)
            console.log(response);
            res.status(http_status_code).send(response);
    });
});


app.post('/update_chapter_lessons_status', function (req, res) {
    var userdata = req.body;
    Admin.update_chapter_lessons_status(userdata, pool, function (http_status_code, err, response) {
        if (err) {
            console.log(err);
            throw err;
        }
        if (config.DEBUG == 2)
            console.log(response);
            res.status(http_status_code).send(response);
    });
});


app.post('/update_site_settings', function (req, res) {
    var userdata = req.body;
    Admin.update_site_settings(userdata, pool, function (http_status_code, err, response) {
        if (err) {
			console.log(err);
            throw err;
        }
        if (config.DEBUG == 2)
            console.log(response);
            res.status(http_status_code).send(response);
    });
});

// app.post('/update_site_settings_access_token', function (req, res) {
//     var userdata = req.body;
//     Admin.update_site_settings_access_token(userdata, pool, function (http_status_code, err, response) {
//         if (err) {
// 			console.log(err);
//             throw err;
//         }
//         if (config.DEBUG == 2)
//             console.log(response);
//             res.status(http_status_code).send(response);
//     });
// });

app.post('/get_site_settings', function (req, res) {
    var userdata = req.body;
    Admin.get_site_settings(userdata, pool, function (http_status_code, err, response) {
        if (err) {
			console.log(err);
            throw err;
        }
        if (config.DEBUG == 2)
            console.log(response);
            res.status(http_status_code).send(response);
    });
});


app.post('/web_cms_list', function (req, res) {
    var userdata = req.body;
    Users.web_cms_list(userdata, pool, function (http_status_code, err, response) {
        if (err) {
			console.log(err);
            throw err;
        }
        if (config.DEBUG == 2)
            console.log(response);
            res.status(http_status_code).send(response);
    });
});

app.post('/web_testimonials_list', function (req, res) {
    var userdata = req.body;
    Users.web_testimonials_list(userdata, pool, function (http_status_code, err, response) {
        if (err) {
			console.log(err);
            throw err;
        }
        if (config.DEBUG == 2)
            console.log(response);
            res.status(http_status_code).send(response);
    });
});

app.post('/teachers_list', function (req, res) {
    var userdata = req.body;
    Users.teachers_list(userdata, pool, function (http_status_code, err, response) {
        if (err) {
			console.log(err);
            throw err;
        }
        if (config.DEBUG == 2)
            console.log(response);
            res.status(http_status_code).send(response);
    });
});
app.post('/student_quizzes_upload', function (req, res) {
    var userdata = req.body;
    Users.student_quizzes_upload(userdata, pool, function (http_status_code, err, response) {
        if (err) {
			console.log(err);
            throw err;
        }
        if (config.DEBUG == 2)
            console.log(response);
            res.status(http_status_code).send(response);
    });
});

// app.get("/downloads", (req, res) => { 
//     const filePath = __dirname + '/uploads/' + req.body.image;
//     res.download(filePath, req.body.image);

// });

// app.post('/downloads', function(req, res){

//     var file = fs.readFileSync(__dirname + '/uploads/'+req.body.image, 'binary');
  
//     res.setHeader('Content-Length', file.length);
//     res.write(file, 'binary');
//     res.end();
//   });

// app.post('/downloads', function(req,res){
//     console.log(req,'filepath is');

//     filepath = path.join(__dirname,'uploads') +'/'+ req.body;
//     console.log(filepath,'filepath is');
//     res.sendFile(filepath);
// })
// app.get('/download',function(req,res,next){
//     res.download('./public/'+req.body,function(err){
//     if(err){
//     next(err);}
//     })
//     })
app.post('/content_blocks_list', function (req, res) {
    var userdata = req.body;
    Admin.content_blocks_list(userdata, pool, function (http_status_code, err, response) {
        if (err) {
			console.log(err);
            throw err;
        }
        if (config.DEBUG == 2)
            console.log(response);
            res.status(http_status_code).send(response);
    });
});

app.post('/add_content_blocks', function (req, res) {
    var userdata = req.body;
    Admin.add_content_blocks(userdata, pool, function (http_status_code, err, response) {
        if (err) {
			console.log(err);
            throw err;
        }
        if (config.DEBUG == 2)
            console.log(response);
            res.status(http_status_code).send(response);
    });
});

app.post('/content_blocks_details', function (req, res) {
    var userdata = req.body;
    Admin.content_blocks_details(userdata, pool, function (http_status_code, err, response) {
        if (err) {
			console.log(err);
            throw err;
        }
        if (config.DEBUG == 2)
            console.log(response);
            res.status(http_status_code).send(response);
    });
});

app.post('/update_content_blocks_status', function (req, res) {
    var userdata = req.body;
    Admin.update_content_blocks_status(userdata, pool, function (http_status_code, err, response) {
        if (err) {
			console.log(err);
            throw err;
        }
        if (config.DEBUG == 2)
            console.log(response);
            res.status(http_status_code).send(response);
    });
});


app.post('/web_countries_list', function (req, res) {
    var userdata = req.body;
    Users.web_countries_list(userdata, pool, function (http_status_code, err, response) {
        if (err) {
			console.log(err);
            throw err;
        }
        if (config.DEBUG == 2)
            console.log(response);
            res.status(http_status_code).send(response);
    });
});
app.post('/student_scorecard', function (req, res) {
    var userdata = req.body;
    Users.student_scorecard(userdata, pool, function (http_status_code, err, response) {
        if (err) {
			console.log(err);
            throw err;
        }
        if (config.DEBUG == 2)
            console.log(response);
            res.status(http_status_code).send(response);
    });
});
app.post('/student_performance', function (req, res) {
    var userdata = req.body;
    Users.student_performance(userdata, pool, function (http_status_code, err, response) {
        if (err) {
			console.log(err);
            throw err;
        }
        if (config.DEBUG == 2)
            console.log(response);
            res.status(http_status_code).send(response);
    });
});
app.post('/student_marks_upload_by_tutor', function (req, res) {
    var userdata = req.body;
    Users.student_marks_upload_by_tutor(userdata, pool, function (http_status_code, err, response) {
        if (err) {
			console.log(err);
            throw err;
        }
        if (config.DEBUG == 2)
            console.log(response);
            res.status(http_status_code).send(response);
    });
});

app.post('/teacher_login', function (req, res) {
    var userdata = req.body;
    Users.teacher_login(userdata, pool, function (http_status_code, err, response) {
        if (err) {
			console.log(err);
            throw err;
        }
        if (config.DEBUG == 2)
            console.log(response);
            res.status(http_status_code).send(response);
    });
});

app.post('/change_password', function (req, res) {
    var userdata = req.body;
    Users.change_password(userdata, pool, function (http_status_code, err, response) {
        if (err) {
			console.log(err);
            throw err;
        }
        if (config.DEBUG == 2)
            console.log(response);
            res.status(http_status_code).send(response);
    });
});


app.post('/country_list', function (req, res) {
    var userdata = req.body;
    Users.country_list(userdata, pool, function (http_status_code, err, response) {
        if (err) {
            console.log(err);
            throw err;
        }
        if (config.DEBUG == 2)
            console.log(response);
            res.status(http_status_code).send(response);
    });
});

app.post('/state_list', function (req, res) {
    var userdata = req.body;
    Users.state_list(userdata, pool, function (http_status_code, err, response) {
        if (err) {
            console.log(err);
            throw err;
        }
        if (config.DEBUG == 2)
            console.log(response);
            res.status(http_status_code).send(response);
    });
});

app.post('/city_list', function (req, res) {
    var userdata = req.body;
    Users.city_list(userdata, pool, function (http_status_code, err, response) {
        if (err) {
            console.log(err);
            throw err;
        }
        if (config.DEBUG == 2)
            console.log(response);
            res.status(http_status_code).send(response);
    });
});

app.post('/update_profile_address', function (req, res) {
    var userdata = req.body;
    Users.update_profile_address(userdata, pool, function (http_status_code, err, response) {
        if (err) {
            console.log(err);
            throw err;
        }
        if (config.DEBUG == 2)
            console.log(response);
            res.status(http_status_code).send(response);
    });
});

app.post('/add_teacher_education', function (req, res) {
    var userdata = req.body;
    Users.add_teacher_education(userdata, pool, function (http_status_code, err, response) {
        if (err) {
            console.log(err);
            throw err;
        }
        if (config.DEBUG == 2)
            console.log(response);
            res.status(http_status_code).send(response);
    });
});

app.post('/update_teacher_bio', function (req, res) {
    var userdata = req.body;
    Users.update_teacher_bio(userdata, pool, function (http_status_code, err, response) {
        if (err) {
            console.log(err);
            throw err;
        }
        if (config.DEBUG == 2)
            console.log(response);
            res.status(http_status_code).send(response);
    });
});
app.post('/update_teacher_bio1', function (req, res) {
    var userdata = req.body;
    Users.update_teacher_bio1(userdata, pool, function (http_status_code, err, response) {
        if (err) {
            console.log(err);
            throw err;
        }
        if (config.DEBUG == 2)
            console.log(response);
            res.status(http_status_code).send(response);
    });
});

app.post('/add_teacher_certificate', function (req, res) {
    var userdata = req.body;
    Users.add_teacher_certificate(userdata, pool, function (http_status_code, err, response) {
        if (err) {
            console.log(err);
            throw err;
        }
        if (config.DEBUG == 2)
            console.log(response);
            res.status(http_status_code).send(response);
    });
});

app.post('/update_bank_details', function (req, res) {
    var userdata = req.body;
    Users.update_bank_details(userdata, pool, function (http_status_code, err, response) {
        if (err) {
            console.log(err);
            throw err;
        }
        if (config.DEBUG == 2)
            console.log(response);
            res.status(http_status_code).send(response);
    });
});

app.post('/teacher_details', function (req, res) {
    var userdata = req.body;
    Users.teacher_details(userdata, pool, function (http_status_code, err, response) {
        if (err) {
            console.log(err);
            throw err;
        }
        if (config.DEBUG == 2)
            console.log(response);
            res.status(http_status_code).send(response);
    });
});

app.post('/generate_teacher_slots', function (req, res) {
    var userdata = req.body;
    Admin.generate_teacher_slots(userdata, pool, function (http_status_code, err, response) {
        if (err) {
            console.log(err);
            throw err;
        }
        if (config.DEBUG == 2)
            console.log(response);
            res.status(http_status_code).send(response);
    });
});

app.post('/teacher_schedule_days_list', function (req, res) {
    var userdata = req.body;
    Users.teacher_schedule_days_list(userdata, pool, function (http_status_code, err, response) {
        if (err) {
            console.log(err);
            throw err;
        }
        if (config.DEBUG == 2)
            console.log(response);
            res.status(http_status_code).send(response);
    });
});

app.post('/teacher_schedule_slots_list', function (req, res) {
    var userdata = req.body;
    Users.teacher_schedule_slots_list(userdata, pool, function (http_status_code, err, response) {
        if (err) {
            console.log(err);
            throw err;
        }
        if (config.DEBUG == 2)
            console.log(response);
            res.status(http_status_code).send(response);
    });
});

app.post('/update_schedule_day_status', function (req, res) {
    var userdata = req.body;
    Users.update_schedule_day_status(userdata, pool, function (http_status_code, err, response) {
        if (err) {
            console.log(err);
            throw err;
        }
        if (config.DEBUG == 2)
            console.log(response);
            res.status(http_status_code).send(response);
    });
});

app.post('/update_schedule_slot_status', function (req, res) {
    var userdata = req.body;
    Users.update_schedule_slot_status(userdata, pool, function (http_status_code, err, response) {
        if (err) {
            console.log(err);
            throw err;
        }
        if (config.DEBUG == 2)
            console.log(response);
            res.status(http_status_code).send(response);
    });
});

app.post('/update_verification_doc', function (req, res) {
    var userdata = req.body;
    Users.update_verification_doc(userdata, pool, function (http_status_code, err, response) {
        if (err) {
            console.log(err);
            throw err;
        }
        if (config.DEBUG == 2)
            console.log(response);
            res.status(http_status_code).send(response);
    });
});

app.post('/add_teacher_subjects', function (req, res) {
    var userdata = req.body;
    Users.add_teacher_subjects(userdata, pool, function (http_status_code, err, response) {
        if (err) {
            console.log(err);
            throw err;
        }
        if (config.DEBUG == 2)
            console.log(response);
            res.status(http_status_code).send(response);
    });
});
app.post('/student_quiz_uploaded', function (req, res) {
    var userdata = req.body;
    Users.student_quiz_uploaded(userdata, pool, function (http_status_code, err, response) {
        if (err) {
            console.log(err);
            throw err;
        }
        if (config.DEBUG == 2)
            console.log(response);
            res.status(http_status_code).send(response);
    });
});

app.post('/teacher_subjects_list', function (req, res) {
    var userdata = req.body;
    Users.teacher_subjects_list(userdata, pool, function (http_status_code, err, response) {
        if (err) {
            console.log(err);
            throw err;
        }
        if (config.DEBUG == 2)
            console.log(response);
            res.status(http_status_code).send(response);
    });
});


app.post('/info_demo_class_settings', function (req, res) {
    var userdata = req.body;
    Admin.info_demo_class_settings(userdata, pool, function (http_status_code, err, response) {
        if (err) {
            console.log(err);
            throw err;
        }
        if (config.DEBUG == 2)
            console.log(response);
            res.status(http_status_code).send(response);
    });
});

app.post('/update_demo_class_settings', function (req, res) {
    var userdata = req.body;
    Admin.update_demo_class_settings(userdata, pool, function (http_status_code, err, response) {
        if (err) {
            console.log(err);
            throw err;
        }
        if (config.DEBUG == 2)
            console.log(response);
            res.status(http_status_code).send(response);
    });
});


app.post('/book_slot_student', function (req, res) {
    var userdata = req.body;
    Users.book_slot_student(userdata, pool, function (http_status_code, err, response) {
        if (err) {
            console.log(err);
            throw err;
        }
        if (config.DEBUG == 2)
            console.log(response);
            res.status(http_status_code).send(response);
    });
});
app.post('/cancle_slot_booking', function (req, res) {
    var userdata = req.body;
    Users.cancle_slot_booking(userdata, pool, function (http_status_code, err, response) {
        if (err) {
            console.log(err);
            throw err;
        }
        if (config.DEBUG == 2)
            console.log(response);
            res.status(http_status_code).send(response);
    });
});
app.post('/slot_booking_details', function (req, res) {
    var userdata = req.body;
    Users.slot_booking_details(userdata, pool, function (http_status_code, err, response) {
        if (err) {
            console.log(err);
            throw err;
        }
        if (config.DEBUG == 2)
            console.log(response);
            res.status(http_status_code).send(response);
    });
});

app.post('/teacher_classes_list', function (req, res) {
    var userdata = req.body;
    Users.teacher_classes_list(userdata, pool, function (http_status_code, err, response) {
        if (err) {
            console.log(err);
            throw err;
        }
        if (config.DEBUG == 2)
            console.log(response);
            res.status(http_status_code).send(response);
    });
});



app.post('/student_teacher_schedule_days_list', function (req, res) {
    var userdata = req.body;
    Users.student_teacher_schedule_days_list(userdata, pool, function (http_status_code, err, response) {
        if (err) {
            console.log(err);
            throw err;
        }
        if (config.DEBUG == 2)
            console.log(response);
            res.status(http_status_code).send(response);
    });
});

app.post('/student_teacher_schedule_slots_list', function (req, res) {
    var userdata = req.body;
    Users.student_teacher_schedule_slots_list(userdata, pool, function (http_status_code, err, response) {
        if (err) {
            console.log(err);
            throw err;
        }
        if (config.DEBUG == 2)
            console.log(response);
            res.status(http_status_code).send(response);
    });
});

app.post('/create_review', function (req, res) {
    var userdata = req.body;
    Users.create_review(userdata, pool, function (http_status_code, err, response) {
        if (err) {
            console.log(err);
            throw err;
        }
        if (config.DEBUG == 2)
            console.log(response);
            res.status(http_status_code).send(response);
    });
});

app.post('/update_reviews_status', function (req, res) {
    var userdata = req.body;
    Users.update_reviews_status(userdata, pool, function (http_status_code, err, response) {
        if (err) {
            console.log(err);
            throw err;
        }
        if (config.DEBUG == 2)
            console.log(response);
            res.status(http_status_code).send(response);
    });
});

app.post('/user_documents_list', function (req, res) {
    var userdata = req.body;
    Users.user_documents_list(userdata, pool, function (http_status_code, err, response) {
        if (err) {
            console.log(err);
            throw err;
        }
        if (config.DEBUG == 2)
            console.log(response);
            res.status(http_status_code).send(response);
    });
});

app.post('/add_user_documents', function (req, res) {
    var userdata = req.body;
    Users.add_user_documents(userdata, pool, function (http_status_code, err, response) {
        if (err) {
            console.log(err);
            throw err;
        }
        if (config.DEBUG == 2)
            console.log(response);
            res.status(http_status_code).send(response);
    });
});

app.post('/user_documents_details', function (req, res) {
    var userdata = req.body;
    Users.user_documents_details(userdata, pool, function (http_status_code, err, response) {
        if (err) {
            console.log(err);
            throw err;
        }
        if (config.DEBUG == 2)
            console.log(response);
            res.status(http_status_code).send(response);
    });
});

app.post('/update_user_documents_status', function (req, res) {
    var userdata = req.body;
    Users.update_user_documents_status(userdata, pool, function (http_status_code, err, response) {
        if (err) {
            console.log(err);
            throw err;
        }
        if (config.DEBUG == 2)
            console.log(response);
            res.status(http_status_code).send(response);
    });
});

app.post('/mark_favourite', function (req, res) {
    var userdata = req.body;
    Users.mark_favourite(userdata, pool, function (http_status_code, err, response) {
        if (err) {
            console.log(err);
            throw err;
        }
        if (config.DEBUG == 2)
            console.log(response);
            res.status(http_status_code).send(response);
    });
});


app.post('/add_parent', function (req, res) {
    var userdata = req.body;
    Users.add_parent(userdata, pool, function (http_status_code, err, response) {
        if (err) {
            console.log(err);
            throw err;
        }
        if (config.DEBUG == 2)
            console.log(response);
            res.status(http_status_code).send(response);
    });
});


app.post('/update_parent', function (req, res) {
    var userdata = req.body;
    Users.update_parent(userdata, pool, function (http_status_code, err, response) {
        if (err) {
            console.log(err);
            throw err;
        }
        if (config.DEBUG == 2)
            console.log(response);
            res.status(http_status_code).send(response);
    });
});

app.post('/parent_details', function (req, res) {
    var userdata = req.body;
    Users.parent_details(userdata, pool, function (http_status_code, err, response) {
        if (err) {
            console.log(err);
            throw err;
        }
        if (config.DEBUG == 2)
            console.log(response);
            res.status(http_status_code).send(response);
    });
});

app.post('/student_fav_teacher_list', function (req, res) {
    var userdata = req.body;
    Users.student_fav_teacher_list(userdata, pool, function (http_status_code, err, response) {
        if (err) {
            console.log(err);
            throw err;
        }
        if (config.DEBUG == 2)
            console.log(response);
            res.status(http_status_code).send(response);
    });
});

app.post('/web_blog_list', function (req, res) {
    var userdata = req.body;
    Users.web_blog_list(userdata, pool, function (http_status_code, err, response) {
        if (err) {
            console.log(err);
            throw err;
        }
        if (config.DEBUG == 2)
            console.log(response);
            res.status(http_status_code).send(response);
    });
});

app.post('/blog_details', function (req, res) {
    var userdata = req.body;
    Users.blog_details(userdata, pool, function (http_status_code, err, response) {
        if (err) {
            console.log(err);
            throw err;
        }
        if (config.DEBUG == 2)
            console.log(response);
            res.status(http_status_code).send(response);
    });
});

app.post('/student_courses_list', function (req, res) {
    var userdata = req.body;
    Users.student_courses_list(userdata, pool, function (http_status_code, err, response) {
        if (err) {
            console.log(err);
            throw err;
        }
        if (config.DEBUG == 2)
            console.log(response);
            res.status(http_status_code).send(response);
    });
});
app.post('/student_booked_classess_data', function (req, res) {
    var userdata = req.body;
    Users.student_booked_classess_data(userdata, pool, function (http_status_code, err, response) {
        if (err) {
            console.log(err);
            throw err;
        }
        if (config.DEBUG == 2)
            console.log(response);
            res.status(http_status_code).send(response);
    });
});
app.post('/aval_courses_list_for_student', function (req, res) {
    var userdata = req.body;
    Users.aval_courses_list_for_student(userdata, pool, function (http_status_code, err, response) {
        if (err) {
            console.log(err);
            throw err;
        }
        if (config.DEBUG == 2)
            console.log(response);
            res.status(http_status_code).send(response);
    });
}); 

app.post('/check_student_subscription', function (req, res) {
    var userdata = req.body;
    Users.check_student_subscription(userdata, pool, function (http_status_code, err, response) {
        if (err) {
            console.log(err);
            throw err;
        }
        if (config.DEBUG == 2)
            console.log(response);
            res.status(http_status_code).send(response);
    });
});

app.post('/student_subscription', function (req, res) {
    var userdata = req.body;
    Users.student_subscription(userdata, pool, function (http_status_code, err, response) {
        if (err) {
            console.log(err);
            throw err;
        }
        if (config.DEBUG == 2)
            console.log(response);
            res.status(http_status_code).send(response);
    });
});


app.post('/student_classes_list', function (req, res) {
    var userdata = req.body;
    Users.student_classes_list(userdata, pool, function (http_status_code, err, response) {
        if (err) {
            console.log(err);
            throw err;
        }
        if (config.DEBUG == 2)
            console.log(response);
            res.status(http_status_code).send(response);
    });
});

app.post('/student_quizzes_list', function (req, res) {
    var userdata = req.body;
    Users.student_quizzes_list(userdata, pool, function (http_status_code, err, response) {
        if (err) {
            console.log(err);
            throw err;
        }
        if (config.DEBUG == 2)
            console.log(response);
            res.status(http_status_code).send(response);
    });
});
app.post('/student_quizzes_list_for_tutor', function (req, res) {
    var userdata = req.body;
    Users.student_quizzes_list_for_tutor(userdata, pool, function (http_status_code, err, response) {
        if (err) {
            console.log(err);
            throw err;
        }
        if (config.DEBUG == 2)
            console.log(response);
            res.status(http_status_code).send(response);
    });
});

app.post('/student_projects_list', function (req, res) {
    var userdata = req.body;
    Users.student_projects_list(userdata, pool, function (http_status_code, err, response) {
        if (err) {
            console.log(err);
            throw err;
        }
        if (config.DEBUG == 2)
            console.log(response);
            res.status(http_status_code).send(response);
    });
});

app.post('/parent_childs_list', function (req, res) {
    var userdata = req.body;
    Users.parent_childs_list(userdata, pool, function (http_status_code, err, response) {
        if (err) {
            console.log(err);
            throw err;
        }
        if (config.DEBUG == 2)
            console.log(response);
            res.status(http_status_code).send(response);
    });
});

app.post('/create_support', function (req, res) {
    var userdata = req.body;
    Users.create_support(userdata, pool, function (http_status_code, err, response) {
        if (err) {
            console.log(err);
            throw err;
        }
        if (config.DEBUG == 2)
            console.log(response);
            res.status(http_status_code).send(response);
    });
});

app.post('/blogs_list', function (req, res) {
    var userdata = req.body;
    Admin.blogs_list(userdata, pool, function (http_status_code, err, response) {
        if (err) {
            console.log(err);
            throw err;
        }
        if (config.DEBUG == 2)
            console.log(response);
            res.status(http_status_code).send(response);
    });
});

app.post('/add_blog', function (req, res) {
    var userdata = req.body;
    Admin.add_blog(userdata, pool, function (http_status_code, err, response) {
        if (err) {
            console.log(err);
            throw err;
        }
        if (config.DEBUG == 2)
            console.log(response);
            res.status(http_status_code).send(response);
    });
});

app.post('/update_blog_status', function (req, res) {
    var userdata = req.body;
    Admin.update_blog_status(userdata, pool, function (http_status_code, err, response) {
        if (err) {
            console.log(err);
            throw err;
        }
        if (config.DEBUG == 2)
            console.log(response);
            res.status(http_status_code).send(response);
    });
});

app.post('/newsletters_list', function (req, res) {
    var userdata = req.body;
    Admin.newsletters_list(userdata, pool, function (http_status_code, err, response) {
        if (err) {
            console.log(err);
            throw err;
        }
        if (config.DEBUG == 2)
            console.log(response);
            res.status(http_status_code).send(response);
    });
});
app.post('/newsletters_get_data', function (req, res) {
    var userdata = req.body;
    Admin.newsletters_get_data(userdata, pool, function (http_status_code, err, response) {
        if (err) {
            console.log(err);
            throw err;
        }
        if (config.DEBUG == 2)
            console.log(response);
            res.status(http_status_code).send(response);
    });
});
app.post('/newsletters_update', function (req, res) {
    var userdata = req.body;
    Admin.newsletters_update(userdata, pool, function (http_status_code, err, response) {
        if (err) {
            console.log(err);
            throw err;
        }
        if (config.DEBUG == 2)
            console.log(response);
            res.status(http_status_code).send(response);
    });
});

app.post('/supports_list', function (req, res) {
    var userdata = req.body;
    Admin.supports_list(userdata, pool, function (http_status_code, err, response) {
        if (err) {
            console.log(err);
            throw err;
        }
        if (config.DEBUG == 2)
            console.log(response);
            res.status(http_status_code).send(response);
    });
});

app.post('/delete_support_request', function (req, res) {
    var userdata = req.body;
    Admin.delete_support_request(userdata, pool, function (http_status_code, err, response) {
        if (err) {
            console.log(err);
            throw err;
        }
        if (config.DEBUG == 2)
            console.log(response);
            res.status(http_status_code).send(response);
    });
});


app.post('/delete_newsletter_request', function (req, res) {
    var userdata = req.body;
    Admin.delete_newsletter_request(userdata, pool, function (http_status_code, err, response) {
        if (err) {
            console.log(err);
            throw err;
        }
        if (config.DEBUG == 2)
            console.log(response);
            res.status(http_status_code).send(response);
    });
});


app.post('/save_user_invitation', function (req, res) {
    var userdata = req.body;
    Users.save_user_invitation(userdata, pool, function (http_status_code, err, response) {
        if (err) {
            console.log(err);
            throw err;
        }
        if (config.DEBUG == 2)
            console.log(response);
            res.status(http_status_code).send(response);
    });
});

app.post('/user_invitation_list', function (req, res) {
    var userdata = req.body;
    Users.user_invitation_list(userdata, pool, function (http_status_code, err, response) {
        if (err) {
            console.log(err);
            throw err;
        }
        if (config.DEBUG == 2)
            console.log(response);
            res.status(http_status_code).send(response);
    });
});

app.post('/update_billing_address', function (req, res) {
    var userdata = req.body;
    Users.update_billing_address(userdata, pool, function (http_status_code, err, response) {
        if (err) {
            console.log(err);
            throw err;
        }
        if (config.DEBUG == 2)
            console.log(response);
            res.status(http_status_code).send(response);
    });
});

app.post('/update_video_url', function (req, res) {
    var userdata = req.body;
    Users.update_video_url(userdata, pool, function (http_status_code, err, response) {
        if (err) {
            console.log(err);
            throw err;
        }
        if (config.DEBUG == 2)
            console.log(response);
            res.status(http_status_code).send(response);
    });
});

app.post('/admin_demo_class_list', function (req, res) {
    var userdata = req.body;
    Admin.admin_demo_class_list(userdata, pool, function (http_status_code, err, response) {
        if (err) {
            console.log(err);
            throw err;
        }
        if (config.DEBUG == 2)
            console.log(response);
            res.status(http_status_code).send(response);
    });
});
app.post('/admin_booked_class_list', function (req, res) {
    var userdata = req.body;
    Admin.admin_booked_class_list(userdata, pool, function (http_status_code, err, response) {
        if (err) {
            console.log(err);
            throw err;
        }
        if (config.DEBUG == 2)
            console.log(response);
            res.status(http_status_code).send(response);
    });
});

app.post('/course_subscription_list', function (req, res) {
    var userdata = req.body;
    Admin.course_subscription_list(userdata, pool, function (http_status_code, err, response) {
        if (err) {
            console.log(err);
            throw err;
        }
        if (config.DEBUG == 2)
            console.log(response);
            res.status(http_status_code).send(response);
    });
});

app.post('/teacher_payout_details', function (req, res) {
    var userdata = req.body;
    Admin.teacher_payout_details(userdata, pool, function (http_status_code, err, response) {
        if (err) {
            console.log(err);
            throw err;
        }
        if (config.DEBUG == 2)
            console.log(response);
            res.status(http_status_code).send(response);
    });
});
app.post('/teacher_payout_detail_admin_section', function (req, res) {
    var userdata = req.body;
    Admin.teacher_payout_detail_admin_section(userdata, pool, function (http_status_code, err, response) {
        if (err) {
            console.log(err);
            throw err;
        }
        if (config.DEBUG == 2)
            console.log(response);
            res.status(http_status_code).send(response);
    });
});
app.post('/teacher_payout_earning', function (req, res) {
    var userdata = req.body;
    Admin.teacher_payout_earning(userdata, pool, function (http_status_code, err, response) {
        if (err) {
            console.log(err);
            throw err;
        }
        if (config.DEBUG == 2)
            console.log(response);
            res.status(http_status_code).send(response);
    });
});


app.post('/teachers_dropdown_list', function (req, res) {
    var userdata = req.body;
    Admin.teachers_dropdown_list(userdata, pool, function (http_status_code, err, response) {
        if (err) {
            console.log(err);
            throw err;
        }
        if (config.DEBUG == 2)
            console.log(response);
            res.status(http_status_code).send(response);
    });
});

app.post('/create_chat_group', function (req, res) {
    var userdata = req.body;
    Users.create_chat_group(userdata, pool, function (http_status_code, err, response) {
        if (err) {
            console.log(err);
            throw err;
        }
        if (config.DEBUG == 2)
            console.log(response);
            res.status(http_status_code).send(response);
    });
});


app.post('/chat_group_list', function (req, res) {
    var userdata = req.body;
    Users.chat_group_list(userdata, pool, function (http_status_code, err, response) {
        if (err) {
            console.log(err);
            throw err;
        }
        if (config.DEBUG == 2)
            console.log(response);
            res.status(http_status_code).send(response);
    });
});

app.post('/chat_group_details', function (req, res) {
    var userdata = req.body;
    Users.chat_group_details(userdata, pool, function (http_status_code, err, response) {
        if (err) {
            console.log(err);
            throw err;
        }
        if (config.DEBUG == 2)
            console.log(response);
            res.status(http_status_code).send(response);
    });
});


app.post('/send_chat_message', function (req, res) {
    var userdata = req.body;
    Users.send_chat_message(userdata, pool, function (http_status_code, err, response) {
        if (err) {
            console.log(err);
            throw err;
        }
        if (config.DEBUG == 2)
            console.log(response);
            res.status(http_status_code).send(response);
    });
});


app.post('/update_chat_group', function (req, res) {
    var userdata = req.body;
    Users.update_chat_group(userdata, pool, function (http_status_code, err, response) {
        if (err) {
            console.log(err);
            throw err;
        }
        if (config.DEBUG == 2)
            console.log(response);
            res.status(http_status_code).send(response);
    });
});

app.post('/add_chat_group_user', function (req, res) {
    var userdata = req.body;
    Users.add_chat_group_user(userdata, pool, function (http_status_code, err, response) {
        if (err) {
            console.log(err);
            throw err;
        }
        if (config.DEBUG == 2)
            console.log(response);
            res.status(http_status_code).send(response);
    });
});

app.post('/user_drop_down', function (req, res) {
    var userdata = req.body;
    Users.user_drop_down(userdata, pool, function (http_status_code, err, response) {
        if (err) {
            console.log(err);
            throw err;
        }
        if (config.DEBUG == 2)
            console.log(response);
            res.status(http_status_code).send(response);
    });
});

app.post('/create_adjustment', function (req, res) {
    var userdata = req.body;
    Admin.create_adjustment(userdata, pool, function (http_status_code, err, response) {
        if (err) {
            console.log(err);
            throw err;
        }
        if (config.DEBUG == 2)
            console.log(response);
            res.status(http_status_code).send(response);
    });
});

app.post('/get_chat_group', function (req, res) {
    var userdata = req.body;
    Admin.get_chat_group(userdata, pool, function (http_status_code, err, response) {
        if (err) {
            console.log(err);
            throw err;
        }
        if (config.DEBUG == 2)
            console.log(response);
            res.status(http_status_code).send(response);
    });
});

app.post('/generate_jwt', function (req, res) {
    var userdata = req.body;
    Users.generate_jwt(userdata, pool, function (http_status_code, err, response) {
        if (err) {
            console.log(err);
            throw err;
        }
        if (config.DEBUG == 2)
            console.log(response);
            res.status(http_status_code).send(response);
    });
});

app.post('/merithub_users_list', function (req, res) {
    var userdata = req.body;
    Users.merithub_users_list(userdata, pool, function (http_status_code, err, response) {
        if (err) {
            console.log(err);
            throw err;
        }
        if (config.DEBUG == 2)
            console.log(response);
            res.status(http_status_code).send(response);
    });
});
app.post('/merithub_edit_class_list', function (req, res) {
    var userdata = req.body;
    Users.merithub_edit_class_list(userdata, pool, function (http_status_code, err, response) {
        if (err) {
            console.log(err);
            throw err;
        }
        if (config.DEBUG == 2)
            console.log(response);
            res.status(http_status_code).send(response);
    });
});
app.post('/merithub_new_classes', function (req, res) {
    var userdata = req.body;
    console.log('merithub_new_classes',userdata);
    Users.merithub_new_classes(userdata, pool, function (http_status_code, err, response) {
        if (err) {
            console.log(err);
            throw err;
        }
        if (config.DEBUG == 2)
            console.log(response);
            res.status(http_status_code).send(response);
    });
});


app.post('/update_merithub_client_id', function (req, res) {
    var userdata = req.body;
    Users.update_merithub_client_id(userdata, pool, function (http_status_code, err, response) {
        if (err) {
            console.log(err);
            throw err;
        }
        if (config.DEBUG == 2)
            console.log(response);
            res.status(http_status_code).send(response);
    });
});

app.post('/update_merithub_class_links', function (req, res) {
    var userdata = req.body;
    Users.update_merithub_class_links(userdata, pool, function (http_status_code, err, response) {
        if (err) {
            console.log(err);
            throw err;
        }
        if (config.DEBUG == 2)
            console.log(response);
            res.status(http_status_code).send(response);
    });
});

app.post('/update_merithub_studentclass_links', function (req, res) {
    var userdata = req.body;
    Users.update_merithub_studentclass_links(userdata, pool, function (http_status_code, err, response) {
        if (err) {
            console.log(err);
            throw err;
        }
        if (config.DEBUG == 2)
            console.log(response);
            res.status(http_status_code).send(response);
    });
});
app.post('/paymentscheck', function (req, res) {
    var userdata = req.body;
    Users.paymentscheck(userdata, pool, function (http_status_code, err, response) {
        if (err) {
            console.log(err);
            throw err;
        }
        if (config.DEBUG == 2)
            console.log(response);
            res.status(http_status_code).send(response);
})
});
app.post('/tran_data', function (req, res) {
    var userdata = 123;
    Users.tran_data(userdata, pool, function (http_status_code, err, response) {
        if (err) {
            console.log(err);
            throw err;
        }
        if (config.DEBUG == 2)
            console.log(response);
            res.status(http_status_code).send(response);
})
});

  app.post('/teacher_review_rating', function (req, res) {
    var userdata = req.body;
    Users.teacher_review_rating(userdata, pool, function (http_status_code, err, response) {
        
        if (err) {
            console.log(err);
            throw err;
        }
        if (config.DEBUG == 2)
            console.log(response);
        res.status(http_status_code).send(response);
    });
});
app.post('/teacher_review', function (req, res) {
    var userdata = req.body;
    Users.teacher_review(userdata, pool, function (http_status_code, err, response) {
        
        if (err) {
            console.log(err);
            throw err;
        }
        if (config.DEBUG == 2)
            console.log(response);
        res.status(http_status_code).send(response);
    });
});

app.post('/createUser', function (req, res) {
    var userdata = req.body;
    Users.createUser(userdata, pool, function (http_status_code, err, response) {

        if (err) {
            console.log(err);
            throw err;
        }
        if (config.DEBUG == 2)
            console.log(response);
        res.status(http_status_code).send(response);
    });
});
app.post('/listUsers', function (req, res) {
    var userdata = req.body;
    Users.listUsers(userdata, pool, function (http_status_code, err, response) {

        if (err) {
            console.log(err);
            throw err;
        }
        if (config.DEBUG == 2)
            console.log(response);
        res.status(http_status_code).send(response);
    });
});
app.post('/getUser', function (req, res) {
    var userdata = req.body;
    Users.getUser(userdata, pool, function (http_status_code, err, response) {

        if (err) {
            console.log(err);
            throw err;
        }
        if (config.DEBUG == 2)
            console.log(response);
        res.status(http_status_code).send(response);
    });
});
app.post('/getUser', function (req, res) {
    var userdata = req.body;
    Users.getUser(userdata, pool, function (http_status_code, err, response) {

        if (err) {
            console.log(err);
            throw err;
        }
        if (config.DEBUG == 2)
            console.log(response);
        res.status(http_status_code).send(response);
    });
});
app.post('/getUserStatus', function (req, res) {
    var userdata = req.body;
    Users.getUserStatus(userdata, pool, function (http_status_code, err, response) {

        if (err) {
            console.log(err);
            throw err;
        }
        if (config.DEBUG == 2)
            console.log(response);
        res.status(http_status_code).send(response);
    });
});
app.post('/deleteUser', function (req, res) {
    var userdata = req.body;
    Users.deleteUser(userdata, pool, function (http_status_code, err, response) {

        if (err) {
            console.log(err);
            throw err;
        }
        if (config.DEBUG == 2)
            console.log(response);
        res.status(http_status_code).send(response);
    });
});
app.post('/updateUser', function (req, res) {
    var userdata = req.body;
    Users.updateUser(userdata, pool, function (http_status_code, err, response) {

        if (err) {
            console.log(err);
            throw err;
        }
        if (config.DEBUG == 2)
            console.log(response);
        res.status(http_status_code).send(response);
    });
});
app.post('/addFriends', function (req, res) {
    var userdata = req.body;
    Users.addFriends(userdata, pool, function (http_status_code, err, response) {

        if (err) {
            console.log(err);
            throw err;
        }
        if (config.DEBUG == 2)
            console.log(response);
        res.status(http_status_code).send(response);
    });
});
app.post('/deleteFriends', function (req, res) {
    var userdata = req.body;
    Users.deleteFriends(userdata, pool, function (http_status_code, err, response) {

        if (err) {
            console.log(err);
            throw err;
        }
        if (config.DEBUG == 2)
            console.log(response);
        res.status(http_status_code).send(response);
    });
});
app.post('/blockUser', function (req, res) {
    var userdata = req.body;
    Users.blockUser(userdata, pool, function (http_status_code, err, response) {

        if (err) {
            console.log(err);
            throw err;
        }
        if (config.DEBUG == 2)
            console.log(response);
        res.status(http_status_code).send(response);
    });
});
app.post('/unblockUser', function (req, res) {
    var userdata = req.body;
    Users.unblockUser(userdata, pool, function (http_status_code, err, response) {

        if (err) {
            console.log(err);
            throw err;
        }
        if (config.DEBUG == 2)
            console.log(response);
        res.status(http_status_code).send(response);
    });
});
app.post('/sendMessage', function (req, res) {
    var userdata = req.body;
    Users.sendMessage(userdata, pool, function (http_status_code, err, response) {

        if (err) {
            console.log(err);
            throw err;
        }
        if (config.DEBUG == 2)
            console.log(response);
        res.status(http_status_code).send(response);
    });
});
app.post('/getMessages', function (req, res) {
    var userdata = req.body;
    Users.getMessages(userdata, pool, function (http_status_code, err, response) {

        if (err) {
            console.log(err);
            throw err;
        }
        if (config.DEBUG == 2)
            console.log(response);
        res.status(http_status_code).send(response);
    });
});
app.post('/getGroupMessages', function (req, res) {
    var userdata = req.body;
    Users.getGroupMessages(userdata, pool, function (http_status_code, err, response) {

        if (err) {
            console.log(err);
            throw err;
        }
        if (config.DEBUG == 2)
            console.log(response);
        res.status(http_status_code).send(response);
    });
});
app.post('/getUnreadMessageCounts', function (req, res) {
    var userdata = req.body;
    Users.getUnreadMessageCounts(userdata, pool, function (http_status_code, err, response) {

        if (err) {
            console.log(err);
            throw err;
        }
        if (config.DEBUG == 2)
            console.log(response);
        res.status(http_status_code).send(response);
    });
});
app.post('/getUnreadMessageCountForGroups', function (req, res) {
    var userdata = req.body;
    Users.getUnreadMessageCountForGroups(userdata, pool, function (http_status_code, err, response) {

        if (err) {
            console.log(err);
            throw err;
        }
        if (config.DEBUG == 2)
            console.log(response);
        res.status(http_status_code).send(response);
    });
});
app.post('/getCallHistory', function (req, res) {
    var userdata = req.body;
    Users.getCallHistory(userdata, pool, function (http_status_code, err, response) {

        if (err) {
            console.log(err);
            throw err;
        }
        if (config.DEBUG == 2)
            console.log(response);
        res.status(http_status_code).send(response);
    });
});
app.post('/sendFile', function (req, res) {
    var userdata = req.body;
    Users.sendFile(userdata, pool, function (http_status_code, err, response) {

        if (err) {
            console.log(err);
            throw err;
        }
        if (config.DEBUG == 2)
            console.log(response);
        res.status(http_status_code).send(response);
    });
});
app.post('/createGroup', function (req, res) {
    var userdata = req.body;
    Users.createGroup(userdata, pool, function (http_status_code, err, response) {

        if (err) {
            console.log(err);
            throw err;
        }
        if (config.DEBUG == 2)
            console.log(response);
        res.status(http_status_code).send(response);
    });
});
app.post('/deleteGroup', function (req, res) {
    var userdata = req.body;
    Users.deleteGroup(userdata, pool, function (http_status_code, err, response) {

        if (err) {
            console.log(err);
            throw err;
        }
        if (config.DEBUG == 2)
            console.log(response);
        res.status(http_status_code).send(response);
    });
});
app.post('/addUsersToGroup', function (req, res) {
    var userdata = req.body;
    Users.addUsersToGroup(userdata, pool, function (http_status_code, err, response) {

        if (err) {
            console.log(err);
            throw err;
        }
        if (config.DEBUG == 2)
            console.log(response);
        res.status(http_status_code).send(response);
    });
});
app.post('/removeUsersFromGroup', function (req, res) {
    var userdata = req.body;
    Users.removeUsersFromGroup(userdata, pool, function (http_status_code, err, response) {

        if (err) {
            console.log(err);
            throw err;
        }
        if (config.DEBUG == 2)
            console.log(response);
        res.status(http_status_code).send(response);
    });
});
app.post('/getGroupList', function (req, res) {
    var userdata = req.body;
    Users.getGroupList(userdata, pool, function (http_status_code, err, response) {

        if (err) {
            console.log(err);
            throw err;
        }
        if (config.DEBUG == 2)
            console.log(response);
        res.status(http_status_code).send(response);
    });
});
app.post('/getGroupUserList', function (req, res) {
    var userdata = req.body;
    Users.getGroupUserList(userdata, pool, function (http_status_code, err, response) {

        if (err) {
            console.log(err);
            throw err;
        }
        if (config.DEBUG == 2)
            console.log(response);
        res.status(http_status_code).send(response);
    });
});
app.post('/banUsersFromGroup', function (req, res) {
    var userdata = req.body;
    Users.banUsersFromGroup(userdata, pool, function (http_status_code, err, response) {

        if (err) {
            console.log(err);
            throw err;
        }
        if (config.DEBUG == 2)
            console.log(response);
        res.status(http_status_code).send(response);
    });
});
app.post('/unbanUsersFromGroup', function (req, res) {
    var userdata = req.body;
    Users.unbanUsersFromGroup(userdata, pool, function (http_status_code, err, response) {

        if (err) {
            console.log(err);
            throw err;
        }
        if (config.DEBUG == 2)
            console.log(response);
        res.status(http_status_code).send(response);
    });
});
app.post('/updateGroup', function (req, res) {
    var userdata = req.body;
    Users.updateGroup(userdata, pool, function (http_status_code, err, response) {

        if (err) {
            console.log(err);
            throw err;
        }
        if (config.DEBUG == 2)
            console.log(response);
        res.status(http_status_code).send(response);
    });
});
app.post('/kickUsersFromGroup', function (req, res) {
    var userdata = req.body;
    Users.kickUsersFromGroup(userdata, pool, function (http_status_code, err, response) {

        if (err) {
            console.log(err);
            throw err;
        }
        if (config.DEBUG == 2)
            console.log(response);
        res.status(http_status_code).send(response);
    });
});
app.post('/getCRID', function (req, res) {
    var userdata = req.body;
    Users.getCRID(userdata, pool, function (http_status_code, err, response) {

        if (err) {
            console.log(err);
            throw err;
        }
        if (config.DEBUG == 2)
            console.log(response);
        res.status(http_status_code).send(response);
    });
});
app.post('/getGUID', function (req, res) {
    var userdata = req.body;
    Users.getGUID(userdata, pool, function (http_status_code, err, response) {

        if (err) {
            console.log(err);
            throw err;
        }
        if (config.DEBUG == 2)
            console.log(response);
        res.status(http_status_code).send(response);
    });
});
app.post('/getCID', function (req, res) {
    var userdata = req.body;
    Users.getCID(userdata, pool, function (http_status_code, err, response) {

        if (err) {
            console.log(err);
            throw err;
        }
        if (config.DEBUG == 2)
            console.log(response);
        res.status(http_status_code).send(response);
    });
});
app.post('/getUID', function (req, res) {
    var userdata = req.body;
    Users.getUID(userdata, pool, function (http_status_code, err, response) {

        if (err) {
            console.log(err);
            throw err;
        }
        if (config.DEBUG == 2)
            console.log(response);
        res.status(http_status_code).send(response);
    });
});


// // set port, listen for requests
// const PORT = process.env.PORT || 8081;
// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}.`);
// });




module.exports = app;