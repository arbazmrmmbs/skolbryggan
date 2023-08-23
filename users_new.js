var request = require("request");
var http 	= require("http");
var async = require("async");
var sql = require('mssql');
var config = require('./config');
var FUNCTIONS = require("./functions.js");

var moment = require('moment');
var multiparty   = require('multiparty');
var randomstring = require("random-string");
var smtpTransport = require('nodemailer-smtp-transport');
var nodemailer = require('nodemailer');

const { json } = require("body-parser");
var smtpConfig = {
    host: 'smtp.gmail.com',
    port: 587,
    auth: {
      user: 'developer.darpan@gmail.com', // Your email id
      pass: 'daksh147' // Your password 
    }
};

var transporter = nodemailer.createTransport(smtpConfig);
const crypto     = require('crypto');




// var smtpConfig = { 
//     // host: 'smtp.gmail.com',
//     // port: 587,
//     // auth: {
//     //   user: 'darpanupadhyay11@gmail.com', // Your email id
//     //   pass: 'daksh147' // Your password
//     // }
	
// 		host: "sandbox.smtp.mailtrap.io",
// 		port: 2525,
// 		auth: {
// 		  user: "afd7c9e31c132b",
// 		  pass: "682818e51399e3"
// 		}
// };

var secretSalt = config.secretSalt;
// var transporter = nodemailer.createTransport(smtpConfig);

module.exports.web_cms_list = web_cms_list;
module.exports.web_testimonials_list = web_testimonials_list;
module.exports.paymentscheck = paymentscheck;
module.exports.teachers_list = teachers_list;
module.exports.student_quizzes_upload = student_quizzes_upload;
module.exports.web_countries_list = web_countries_list;
module.exports.student_scorecard = student_scorecard;
module.exports.student_marks_upload_by_tutor = student_marks_upload_by_tutor;
module.exports.student_performance = student_performance;
module.exports.teacher_login = teacher_login;
module.exports.change_password = change_password;
module.exports.teacher_avalible = teacher_avalible;
module.exports.delete_teacher_educations = delete_teacher_educations;

module.exports.social_login = social_login;

module.exports.teacher_classes_list_complete = teacher_classes_list_complete;
module.exports.teacher_classes_list_upcoming = teacher_classes_list_upcoming;
module.exports.teacher_classes_list_cancel = teacher_classes_list_cancel;
module.exports.country_list = country_list;
module.exports.state_list = state_list;
module.exports.city_list = city_list;
module.exports.webhooks = webhooks;

module.exports.update_profile_address = update_profile_address;
module.exports.update_billing_address = update_billing_address;
module.exports.update_video_url = update_video_url;
module.exports.add_teacher_education = add_teacher_education;
module.exports.add_teacher_subjects = add_teacher_subjects;
module.exports.student_quiz_uploaded = student_quiz_uploaded;
module.exports.update_teacher_bio = update_teacher_bio;
module.exports.update_teacher_bio1 = update_teacher_bio1;
module.exports.add_teacher_certificate = add_teacher_certificate;
module.exports.update_bank_details = update_bank_details;

module.exports.teacher_details = teacher_details;
module.exports.teacher_schedule_days_list = teacher_schedule_days_list;
module.exports.teacher_schedule_slots_list = teacher_schedule_slots_list;
module.exports.update_schedule_day_status = update_schedule_day_status;
module.exports.update_schedule_slot_status = update_schedule_slot_status;
module.exports.update_verification_doc = update_verification_doc;

module.exports.teacher_subjects_list = teacher_subjects_list;

module.exports.book_slot_student = book_slot_student;
module.exports.slot_booking_details = slot_booking_details;
module.exports.cancle_slot_booking = cancle_slot_booking;
module.exports.teacher_classes_list = teacher_classes_list;
module.exports.referral_list = referral_list;

module.exports.student_teacher_schedule_days_list = student_teacher_schedule_days_list;
module.exports.student_teacher_schedule_slots_list = student_teacher_schedule_slots_list;
module.exports.students_classes_list = students_classes_list;
module.exports.students_classes_list_upcoming = students_classes_list_upcoming;
module.exports.students_classes_list_complete = students_classes_list_complete;
module.exports.students_classes_list_cancel = students_classes_list_cancel;
module.exports.parent_classes_list = parent_classes_list;
module.exports.parent_classes_list_complete = parent_classes_list_complete;
module.exports.parent_classes_list_upcoming = parent_classes_list_upcoming;
module.exports.parent_classes_list_cancel = parent_classes_list_cancel;
module.exports.create_review = create_review;
module.exports.update_reviews_status = update_reviews_status;
module.exports.complete_class_by_tutor = complete_class_by_tutor;
module.exports.user_documents_list = user_documents_list;
module.exports.user_documents_details = user_documents_details;
module.exports.add_user_documents = add_user_documents;
module.exports.update_user_documents_status = update_user_documents_status;

module.exports.mark_favourite = mark_favourite;
module.exports.add_parent = add_parent;
module.exports.delete_user = delete_user;
module.exports.update_parent = update_parent;
module.exports.parent_details = parent_details;
module.exports.student_fav_teacher_list = student_fav_teacher_list;

module.exports.web_blog_list = web_blog_list;
module.exports.blog_details = blog_details;
module.exports.checkValidateEmailEmpProfile = checkValidateEmailEmpProfile;
module.exports.student_courses_list = student_courses_list;
module.exports.student_booked_classess_data = student_booked_classess_data;
module.exports.aval_courses_list_for_student = aval_courses_list_for_student;
module.exports.check_student_subscription = check_student_subscription;
module.exports.student_subscription = student_subscription;
module.exports.student_classes_list = student_classes_list;
module.exports.student_projects_list = student_projects_list;
module.exports.student_quizzes_list = student_quizzes_list;
module.exports.student_quizzes_list_for_tutor = student_quizzes_list_for_tutor;
module.exports.parent_childs_list = parent_childs_list;

module.exports.create_support = create_support;
module.exports.save_user_invitation = save_user_invitation;
module.exports.user_invitation_list = user_invitation_list;


module.exports.chat_group_list = chat_group_list;
module.exports.chat_group_details = chat_group_details;
module.exports.payment_update_webhook = payment_update_webhook;

module.exports.create_chat_group = create_chat_group;
module.exports.send_chat_message = send_chat_message;
module.exports.update_chat_group = update_chat_group;
module.exports.add_chat_group_user = add_chat_group_user;
module.exports.user_drop_down = user_drop_down;
module.exports.cashbackOfferId = cashbackOfferId;
module.exports.tran_data = tran_data;
module.exports.success = success;
module.exports.teacher_review_rating = teacher_review_rating;
module.exports.teacher_review = teacher_review;
//Merithub
module.exports.generate_jwt = generate_jwt;
module.exports.merithub_users_list = merithub_users_list;
module.exports.merithub_new_classes = merithub_new_classes;
module.exports.update_merithub_client_id = update_merithub_client_id;
module.exports.update_merithub_class_links = update_merithub_class_links;
module.exports.update_merithub_studentclass_links = update_merithub_studentclass_links;
module.exports.merithub_new_users = merithub_new_users;
module.exports.count_complete_lession  = count_complete_lession ;
module.exports.add_bankdetail  = add_bankdetail ;
module.exports.findquizzes  = findquizzes ;
module.exports.delete_quizz  = delete_quizz ;
// module.exports.get_token = get_token;


//Atom Chat API
module.exports.createUser = createUser; //user
module.exports.listUsers = listUsers; //used
module.exports.getUser = getUser; //used
module.exports.getUserStatus = getUserStatus; //used
module.exports.deleteUser = deleteUser;
module.exports.updateUser = updateUser; //used
module.exports.addFriends = addFriends;  //used
module.exports.deleteFriends = deleteFriends; //used
module.exports.blockUser = blockUser; //used
module.exports.unblockUser = unblockUser; //used
module.exports.sendMessage = sendMessage; //used
module.exports.getMessages = getMessages; //used
module.exports.getGroupMessages = getGroupMessages; //used
module.exports.getUnreadMessageCounts = getUnreadMessageCounts;
module.exports.getUnreadMessageCountForGroups = getUnreadMessageCountForGroups;
module.exports.getCallHistory = getCallHistory;
module.exports.sendFile = sendFile;
module.exports.createGroup = createGroup; //used
module.exports.deleteGroup = deleteGroup; //used
module.exports.addUsersToGroup = addUsersToGroup; //used
module.exports.removeUsersFromGroup = removeUsersFromGroup;  //used
module.exports.getGroupList = getGroupList; //used
module.exports.getGroupUserList = getGroupUserList; //used
module.exports.banUsersFromGroup = banUsersFromGroup; //used
module.exports.unbanUsersFromGroup = unbanUsersFromGroup; //used
module.exports.updateGroup = updateGroup; //used
module.exports.kickUsersFromGroup = kickUsersFromGroup;  //used
module.exports.getCRID = getCRID;
module.exports.getGUID = getGUID;
module.exports.getCID = getCID;
module.exports.getUID = getUID;



function findquizzes(userdata, pool, callback) {
	var id = '';
	
	if (typeof userdata.id != 'undefined' && userdata.id != '') {
		id = userdata.id;
	}
	pool.getConnection(function (err, connection) {

	var detailsquery = 'SELECT quizzes.* from quizzes where  id=' + id + '';
	connection.query(detailsquery, function (errSelDetails, resSelDetails) {
		if (errSelDetails) {
			resultJson = '{"replyCode":"error","replyMsg":"' + errSelDetails.message + '","cmd":"quizzes_list"}\n';
			connection.release();
			callback(200, null, resultJson);
			return;
		} else {
			resultJson =
				'{"replyCode":"success","replyMsg":"Details found successfully .","data":' +
				JSON.stringify(resSelDetails) +
				',"cmd":"quizzes_list"}\n';
			console.log('res-suceess');
			connection.release();
			callback(200, null, resultJson);
			return;
		}
	});
});

}
const stripe = require("stripe")("sk_test_vkkv0lY4BZpPK9zJQy3ymlrH");

function checkValidateEmailEmpProfile(userdata, pool, callback) {
	var resultJson = '';
	var Hashids = require('hashids');

	var email = '';
	var id = '';
	if (typeof userdata.email != 'undefined' && userdata.email != '') {
		email = userdata.email;
	}
	if (typeof userdata.id != 'undefined' && userdata.id != '') {
		id = userdata.id;
	}
	pool.getConnection(function (err, connection) {
		Query = 'SELECT * FROM users WHERE email="' + email + '" AND email !=" " AND id != "' + id + '" ';
		connection.query(Query, function (err, usersEmail) {
			if (err) {
				resultJson =
					'{"replyCode":"error","replyMsg":"' + err.message + '","cmd":"checkValidateEmailEmpProfile"}\n';
				connection.release();
				callback(200, null, resultJson);
				return;
			} else {
				if (usersEmail.length > 0) {
					callback(true);
				} else {
					callback(false);
				}
			}
		});
	});
}

function payment_update_webhook(userdata, pool, callback){

console.log(userdata,'payment_webhook');
}
/* function cashbackOfferId(userdata, pool, callback) {
	console.log(userdata.id,'thisis id');
	// const fetch = require('node-fetch');
	const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));
	const url = ' https://api.superpayments.com/v2/offers';
	const options = {
	  method: 'POST',
	  headers: {
		accept: 'application/json',
		'content-type': 'application/json',
		// 'checkout-api-key': 'PSK_1xbaAukNaIyUYK8Y3V4yv3b56XSYNkw2dQf7QIbO'
		'checkout-api-key': 'PSK_SFdF2OxMibTEGrx0JMig0zcXmM4kJKle4924PvGk'
	  },
	  body: JSON.stringify({
		cart: {
		  items: [
			{
			  name: "narender",
			//   name: toString(userdata.id),
			  url: 'https://www.merchant.com/product1.html',
			  quantity: 3,
			  tname:"abcd",
			  sub:"subject",
			  minorUnitAmount:1000
			//   minorUnitAmount:userdata.amount
			}
		  ],
		  id: '120120'
		},
		minorUnitAmount:1000,
		page: 'ProductDetail',
		output: 'content',
		scheme: 'black-white',
		test: true
	  })
	};
	
	fetch(url, options)
	  .then(res => res.json())
	  .then(json => {console.log(json)
	console.log(json.cashbackOfferId,'df');
		const url = 'https://api.superpayments.com/v2/payments';
		const options = {
		  method: 'POST',
		  headers: {
			accept: 'application/json',
			'content-type': 'application/json',
			// 'checkout-api-key': 'PSK_QIdEPNqtrQrisCxmwoom-nPf3A4FErgsuiFoeYfZ'
			// 'checkout-api-key': 'PSK_1xbaAukNaIyUYK8Y3V4yv3b56XSYNkw2dQf7QIbO' //testing
			'checkout-api-key': 'PSK_SFdF2OxMibTEGrx0JMig0zcXmM4kJKle4924PvGk' //testing
			// 'checkout-api-key': 'PSK_3s6SbvkdznHTmxo5I0yMYJFLR_DuwzWgy6TrU6WT' //testing
			// 'checkout-api-key': 'PSK_wK7W_5TY3IQP_wrSHI2qrjPJvH7vLmynHsR2tmo8' //testing
			// PWH_6rG6_uJZgxDN3YVuJjZ2MJrXOp4W49FYjGHGOdlH  //testing
			//PSK_3s6SbvkdznHTmxo5I0yMYJFLR_DuwzWgy6TrU6WT  //testing
		  },
	
		  body: JSON.stringify({
			
			currency: 'GBP',
			name: 'Narender',
			cashbackOfferId: json.cashbackOfferId,
			// successUrl: paymentscheck(),
			
			successUrl: 'https://suited-admin.mrmmbs.com/fronts/success',
			cancelUrl: 'https://suited-admin.mrmmbs.com:8999/cancel',
			failureUrl: 'https://suited-admin.mrmmbs.com:8999/failure',
			minorUnitAmount:1000,
			externalReference: 'order101',
			test: false
		  })
		};
		
		fetch(url, options)
		  .then(
				res =>res.json()		
        	  )
		  .then(
			function(json){
				var url = json.redirectUrl
				
				resultJson='{"replyCode":"success","replyMsg":"cms details","data":'+JSON.stringify(url)+"}\n";
				
				callback(200, null, resultJson);
				return;
				//res.use(url)
					
			})
		  .catch(err => console.error('error:' + err)); 
	})
	  .catch(err => console.error('error:' + err));
}*/
/*function cashbackOfferId(userdata, pool, callback) {
	console.log(userdata.id,'thisis id');
	// const fetch = require('node-fetch');
	const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));
	const url = 'https://api.test.superpayments.com/v2/offers';
	const options = {
	  method: 'POST',
	  headers: {
		accept: 'application/json',
		'content-type': 'application/json',
		'checkout-api-key': 'PSK_SFdF2OxMibTEGrx0JMig0zcXmM4kJKle4924PvGk',
		'referer': '/payment-update-webhook'
	  },
	  body: JSON.stringify({
		cart: {
		  items: [
			{
			  name: "narender",
			//   name: toString(userdata.id),
			  url: 'https://www.merchant.com/product1.html',
			  quantity: 3,
			  tname:"abcd",
			  sub:"subject",
			  minorUnitAmount:1000
			//   minorUnitAmount:userdata.amount
			}
		  ],
		  id: '120120'
		},
		minorUnitAmount:1000,
		page: 'ProductDetail',
		output: 'content',
		scheme: 'black-white',
		test: true
	  })
	};
	
	fetch(url, options)
	  .then(res => res.json())
	  .then(json => {console.log(json)
	console.log(json.cashbackOfferId,'df');
		const url = 'https://api.test.superpayments.com/v2/payments';
		const options = {
		  method: 'POST',
		  headers: {
			accept: 'application/json',
			'content-type': 'application/json',
			'checkout-api-key': 'PSK_SFdF2OxMibTEGrx0JMig0zcXmM4kJKle4924PvGk' 
			
		  },
	
		  body: JSON.stringify({
			currency: 'GBP',
			name: 'Narender',
			cashbackOfferId: json.cashbackOfferId,
			             successUrl: 'https://suited-admin.mrmmbs.com/fronts/success',
						cancelUrl: 'https://suited-admin.mrmmbs.com/front/cancel',
						failureUrl: 'https://suited-admin.mrmmbs.com/front/failure',
			minorUnitAmount:1000,
			externalReference: 'order101',
			test: false
		  })
		};
		
		fetch(url, options)
		  .then(res => res.json())
		  .then(
			function(json){
				//var json = console.log(json)

				var url = json.redirectUrl
				console.log(url,'urlurl');

				resultJson='{"replyCode":"success","replyMsg":"cms details","data":'+JSON.stringify(url)+"}\n";
				
				callback(200, null, resultJson);
				return;
				//res.use(url)
					
			})
		  .catch(err => console.error('error:' + err)); 
	})
	  .catch(err => console.error('error:' + err));
}29-03-2023*/ 
function cashbackOfferId(userdata, pool, callback) {
	console.log(userdata.rate,'thisis id');
	// const fetch = require('node-fetch');
	const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));
	const url = config.offerurl;
	const options = {
	  method: 'POST',
	  headers: {
		accept: 'application/json',
		'content-type': 'application/json',
		'checkout-api-key': 'PSK_SFdF2OxMibTEGrx0JMig0zcXmM4kJKle4924PvGk'
		// 'referer': '/payment-update-webhook'
	  },
	  body: JSON.stringify({
		cart: {
		  items: [
			{
			  name: userdata.student_name,
			//   name: toString(userdata.id),
			  url: 'https://suited-admin.mrmmbs.com/front',
			  quantity: 1,
			  tname:userdata.teacher_id,
			  sub:"subject",
			  minorUnitAmount:Number(userdata.rate)
			//   minorUnitAmount:userdata.amount
			}
		  ],
		  id: '120120'
		},
		minorUnitAmount:Number(userdata.rate),
		page: 'ProductDetail',
		output: 'content',
		scheme: 'black-white',
		test: true
	  })
	};
	
	fetch(url, options)
	  .then(res => res.json())
	  .then(json => {console.log(json)
	console.log(json.cashbackOfferId,'df');
		const url = config.paymentt ;
		const options = {
		  method: 'POST',
		  headers: {
			accept: 'application/json',
			'content-type': 'application/json',
			'checkout-api-key': 'PSK_SFdF2OxMibTEGrx0JMig0zcXmM4kJKle4924PvGk' 
			
		  },
	
		  body: JSON.stringify({
			currency: 'GBP',
			name: userdata.student_name,
			cashbackOfferId: json.cashbackOfferId,
			             successUrl: config.successurl,
						cancelUrl: config.cancelurl,
						failureUrl: config.failureurl,
			minorUnitAmount:Number(userdata?.rate),
			externalReference: userdata.teacher_id,
			test: false
		  })
		};
		
		fetch(url, options)
		  .then(res => res.json())
		  .then(
			function(json){
				//var json = console.log(json)
				var url = json.redirectUrl
				console.log(JSON.stringify(json),'urlurl');
				resultJson='{"replyCode":"success","replyMsg":"cms details","data":'+JSON.stringify(json)+"}\n";
				
				callback(200, null, resultJson);
				return;
				//res.use(url)
					
			})
		  .catch(err => console.error('error:' + err)); 
	})
	  .catch(err => console.error('error:' + err));
}
function teacher_classes_list_complete(userdata, pool, callback){
	var sha1 = require('sha1');
	var Hashids = require("hashids"), hashids = new Hashids(secretSalt);
	var sid = '';
	var Keyconditoin = '';
	var keyword = '';
	var learning = '';
	var start = '0';
	var limit = '';
	var resultJson = '';
	var status = '';
	var start_date='';
	var end_date='';
	var start_time='';
	var end_time='';
	var limitStr='';
	var name=''

	if (typeof userdata.start_time != "undefined" && userdata.start_time != "") {
	  start_time = userdata.start_time;
	}
	if (typeof userdata.end_time != "undefined" && userdata.end_time != "") {
	  end_time = userdata.end_time;
	}
	
	if (typeof userdata.start_date != "undefined" && userdata.start_date != "") {
	  start_date = userdata.start_date;
	}
	
	if (typeof userdata.end_date != "undefined" && userdata.end_date != "") {
	  end_date = userdata.end_date;
	}
	
	if (typeof userdata.sid != 'undefined' && userdata.sid != '') {
		sid = userdata.sid;
	}
	if (typeof userdata.status != 'undefined' && userdata.status != '') {
		status = userdata.status;
	}
	if (typeof userdata.name != 'undefined' && userdata.name != '') {
		name = userdata.name;
	}
	console.log(userdata.start,'userdata');
	pool.getConnection(function (err, connection) {
			
		// var teacher_id=hashids.decode(sid);
		var Student_id=hashids.decode(sid);
		// if (Student_id != '') {
		// 	Keyconditoin += ' student_booked_classes.teacher_id ="'+Student_id+'" OR student_booked_classes.student_id ="'+Student_id+'"';
		// }
		if (name != '') {
			Keyconditoin += ' AND teacher.name LIKE  "%' + name + '%"';
		}
		if (typeof userdata.start != 'undefined' && userdata.start != '') {
			start = userdata.start;
		}
		if (typeof userdata.limit != 'undefined' && userdata.limit != '') {
			limit = userdata.limit;
		}
		if(limit !=''){
			limitStr='LIMIT '+start+', '+limit+'';
		}
		if(start_date !='' && end_date !="" && start_time!='' && end_time!='')
		{
		 Keyconditoin += ' AND schedule_slot_date  BETWEEN "'+start_date+'" AND "'+end_date+'"  AND user_time_schedule_slots.time_from BETWEEN "'+start_time+'" AND "'+end_time+'"';
        }
		if(start_date !='' && end_date !="" && start_time=='' && end_time=='')
		{
		 Keyconditoin += 'AND schedule_slot_date BETWEEN "'+start_date+'" AND "'+end_date+'"';
        }
		if(start_date !='' && end_date =="" && start_time!='' && end_time!='')
		{
		 Keyconditoin += ' AND schedule_slot_date  >= "'+start_date+'"  AND user_time_schedule_slots.time_from BETWEEN "'+start_time+'" AND "'+end_time+'"';
        }
		if(start_date =='' && end_date !="" && start_time!='' && end_time!='')
		{
		 Keyconditoin += ' AND schedule_slot_date  <="'+end_date+'"  AND user_time_schedule_slots.time_from BETWEEN "'+start_time+'" AND "'+end_time+'"';
        }
		if(start_date !='' && end_date =="" && start_time!='' && end_time!='')
		{
		 Keyconditoin += ' AND schedule_slot_date  >="'+start_date+'"  AND user_time_schedule_slots.time_from BETWEEN "'+start_time+'" AND "'+end_time+'"';
        }
		if(start_date =='' && end_date !="" && start_time=='' && end_time=='')
		{
		 Keyconditoin += ' AND schedule_slot_date  <="'+end_date+'" ';
        }
		if(start_date !='' && end_date =="" && start_time=='' && end_time=='')
		{
		 Keyconditoin += 'AND schedule_slot_date  >="'+start_date+'"  ';
        }

		detailsquery1 = 'SELECT student_booked_classes.*,student_booked_classes.id as booked_class_id,user_time_schedule_slots.time_from,student_booked_classes.class_type as class_type,(SELECT demo_class_payout from demo_class_settings where id="2") as demo_class_payout,(SELECT paid_class_payout from demo_class_settings where id="2") as paid_class_payout,user_time_schedule_slots.time_to,course_chapters.chapter_title,course_chapters.chapter_description,teacher.name as teacher_name,teacher.id as teacher_id,student.name as student_name,student.id as student_id,student.phone as student_phone,student.parents_name,student.parents_name as school_name from student_booked_classes as student_booked_classes LEFT JOIN users as student ON student.id = student_booked_classes.student_id LEFT JOIN users as teacher ON teacher.id = student_booked_classes.teacher_id  LEFT JOIN course_chapters as course_chapters ON course_chapters.id = student_booked_classes.chapter_id LEFT JOIN user_time_schedule_slots as user_time_schedule_slots ON user_time_schedule_slots.id = student_booked_classes.slot_id where student_booked_classes.status ="2" AND student_booked_classes.teacher_id ="'+Student_id+'"   '+Keyconditoin+' ';//user_time_schedule_slots.type as class_type
		detailsquery = 'SELECT student_booked_classes.*,student_booked_classes.id as booked_class_id,user_time_schedule_slots.time_from,student_booked_classes.class_type as class_type,(SELECT demo_class_payout from demo_class_settings where id="2") as demo_class_payout,(SELECT paid_class_payout from demo_class_settings where id="2") as paid_class_payout,user_time_schedule_slots.time_to,course_chapters.chapter_title,course_chapters.chapter_description,teacher.name as teacher_name,teacher.id as teacher_id,student.name as student_name,student.id as student_id,student.phone as student_phone,student.parents_name,student.parents_name as school_name from student_booked_classes as student_booked_classes LEFT JOIN users as student ON student.id = student_booked_classes.student_id LEFT JOIN users as teacher ON teacher.id = student_booked_classes.teacher_id  LEFT JOIN course_chapters as course_chapters ON course_chapters.id = student_booked_classes.chapter_id LEFT JOIN user_time_schedule_slots as user_time_schedule_slots ON user_time_schedule_slots.id = student_booked_classes.slot_id where student_booked_classes.status ="2" AND student_booked_classes.teacher_id ="'+Student_id+'"   '+Keyconditoin+' '+limitStr+'';//user_time_schedule_slots.type as class_type
		console.log('detailsquery123',detailsquery.count);
		connection.query(detailsquery1, function(errSelDetails1,resSelDetails1){
			console.log(resSelDetails1?.length,'xxx');
		connection.query(detailsquery, function(errSelDetails,resSelDetails){
			if(errSelDetails){
				resultJson = '{"replyCode":"error","replyMsg":"'+errSelDetails.message+'","cmd":"courses_list"}\n';
				connection.release();
				callback(200, null, resultJson);
				return;
			}else{
				
				
						resultJson = '{"replyCode":"success","replyMsg":"student lessons list","data":'+JSON.stringify(resSelDetails)+',"total_count":'+JSON.stringify(resSelDetails1.length)+',"cmd":"student_lessons_list"}\n';
						console.log('res-suceess');
						connection.release();
						callback(200, null, resultJson);
						return;	
						
					}
				
			
		});
		
		});
	});
}

function teacher_classes_list_upcoming(userdata, pool, callback){
	var sha1 = require('sha1');
	var Hashids = require("hashids"), hashids = new Hashids(secretSalt);
	var sid = '';
	var Keyconditoin = '';
	var keyword = '';
	var learning = '';
	var start = '0';
	var limit = '';
	var resultJson = '';
	var status = '';
	var start_date='';
	var end_date='';
	var start_time='';
	var end_time='';
	var limitStr='';
	var name=''

	if (typeof userdata.start_time != "undefined" && userdata.start_time != "") {
	  start_time = userdata.start_time;
	}
	if (typeof userdata.end_time != "undefined" && userdata.end_time != "") {
	  end_time = userdata.end_time;
	}
	
	if (typeof userdata.start_date != "undefined" && userdata.start_date != "") {
	  start_date = userdata.start_date;
	}
	
	if (typeof userdata.end_date != "undefined" && userdata.end_date != "") {
	  end_date = userdata.end_date;
	}
	
	if (typeof userdata.sid != 'undefined' && userdata.sid != '') {
		sid = userdata.sid;
	}
	if (typeof userdata.status != 'undefined' && userdata.status != '') {
		status = userdata.status;
	}
	if (typeof userdata.name != 'undefined' && userdata.name != '') {
		name = userdata.name;
	}
	console.log(userdata.start,'userdata');
	pool.getConnection(function (err, connection) {
			
		// var teacher_id=hashids.decode(sid);
		var Student_id=hashids.decode(sid);
		// if (Student_id != '') {
		// 	Keyconditoin += ' student_booked_classes.teacher_id ="'+Student_id+'" OR student_booked_classes.student_id ="'+Student_id+'"';
		// }
		if (name != '') {
			Keyconditoin += ' AND teacher.name LIKE  "%' + name + '%"';
		}
		if (typeof userdata.start != 'undefined' && userdata.start != '') {
			start = userdata.start;
		}
		if (typeof userdata.limit != 'undefined' && userdata.limit != '') {
			limit = userdata.limit;
		}
		if(limit !=''){
			limitStr='LIMIT '+start+', '+limit+'';
		}
		if(start_date !='' && end_date !="" && start_time!='' && end_time!='')
		{
		 Keyconditoin += ' AND schedule_slot_date  BETWEEN "'+start_date+'" AND "'+end_date+'"  AND user_time_schedule_slots.time_from BETWEEN "'+start_time+'" AND "'+end_time+'"';
        }
		if(start_date !='' && end_date !="" && start_time=='' && end_time=='')
		{
		 Keyconditoin += 'AND schedule_slot_date BETWEEN "'+start_date+'" AND "'+end_date+'"';
        }
		if(start_date !='' && end_date =="" && start_time!='' && end_time!='')
		{
		 Keyconditoin += ' AND schedule_slot_date  >= "'+start_date+'"  AND user_time_schedule_slots.time_from BETWEEN "'+start_time+'" AND "'+end_time+'"';
        }
		if(start_date =='' && end_date !="" && start_time!='' && end_time!='')
		{
		 Keyconditoin += ' AND schedule_slot_date  <="'+end_date+'"  AND user_time_schedule_slots.time_from BETWEEN "'+start_time+'" AND "'+end_time+'"';
        }
		if(start_date !='' && end_date =="" && start_time!='' && end_time!='')
		{
		 Keyconditoin += ' AND schedule_slot_date  >="'+start_date+'"  AND user_time_schedule_slots.time_from BETWEEN "'+start_time+'" AND "'+end_time+'"';
        }
		if(start_date =='' && end_date !="" && start_time=='' && end_time=='')
		{
		 Keyconditoin += ' AND schedule_slot_date  <="'+end_date+'" ';
        }
		if(start_date !='' && end_date =="" && start_time=='' && end_time=='')
		{
		 Keyconditoin += 'AND schedule_slot_date  >="'+start_date+'"  ';
        }

		detailsquery1 = 'SELECT student_booked_classes.*,student_booked_classes.id as booked_class_id,user_time_schedule_slots.time_from,student_booked_classes.class_type as class_type,(SELECT demo_class_payout from demo_class_settings where id="2") as demo_class_payout,(SELECT paid_class_payout from demo_class_settings where id="2") as paid_class_payout,user_time_schedule_slots.time_to,course_chapters.chapter_title,course_chapters.chapter_description,teacher.name as teacher_name,teacher.id as teacher_id,student.name as student_name,student.id as student_id,student.phone as student_phone,student.parents_name,student.parents_name as school_name from student_booked_classes as student_booked_classes LEFT JOIN users as student ON student.id = student_booked_classes.student_id LEFT JOIN users as teacher ON teacher.id = student_booked_classes.teacher_id  LEFT JOIN course_chapters as course_chapters ON course_chapters.id = student_booked_classes.chapter_id LEFT JOIN user_time_schedule_slots as user_time_schedule_slots ON user_time_schedule_slots.id = student_booked_classes.slot_id where  student_booked_classes.status ="1" AND  student_booked_classes.teacher_id ="'+Student_id+'"   '+Keyconditoin+' ';//user_time_schedule_slots.type as class_type
		detailsquery = 'SELECT student_booked_classes.*,student_booked_classes.id as booked_class_id,user_time_schedule_slots.time_from,student_booked_classes.class_type as class_type,(SELECT demo_class_payout from demo_class_settings where id="2") as demo_class_payout,(SELECT paid_class_payout from demo_class_settings where id="2") as paid_class_payout,user_time_schedule_slots.time_to,course_chapters.chapter_title,course_chapters.chapter_description,teacher.name as teacher_name,teacher.id as teacher_id,student.name as student_name,student.id as student_id,student.phone as student_phone,student.parents_name,student.parents_name as school_name from student_booked_classes as student_booked_classes LEFT JOIN users as student ON student.id = student_booked_classes.student_id LEFT JOIN users as teacher ON teacher.id = student_booked_classes.teacher_id  LEFT JOIN course_chapters as course_chapters ON course_chapters.id = student_booked_classes.chapter_id LEFT JOIN user_time_schedule_slots as user_time_schedule_slots ON user_time_schedule_slots.id = student_booked_classes.slot_id where student_booked_classes.status ="1" AND  student_booked_classes.teacher_id ="'+Student_id+'"   '+Keyconditoin+' '+limitStr+'';//user_time_schedule_slots.type as class_type
		console.log('detailsquery123',detailsquery.count);
		connection.query(detailsquery1, function(errSelDetails1,resSelDetails1){
			console.log(resSelDetails1?.length,'xxx');
		connection.query(detailsquery, function(errSelDetails,resSelDetails){
			if(errSelDetails){
				resultJson = '{"replyCode":"error","replyMsg":"'+errSelDetails.message+'","cmd":"courses_list"}\n';
				connection.release();
				callback(200, null, resultJson);
				return;
			}else{
				
				
						resultJson = '{"replyCode":"success","replyMsg":"student lessons list","data":'+JSON.stringify(resSelDetails)+',"total_count":'+JSON.stringify(resSelDetails1.length)+',"cmd":"student_lessons_list"}\n';
						console.log('res-suceess');
						connection.release();
						callback(200, null, resultJson);
						return;	
						
					}
				
			
		});
		
		});
	});
}

function teacher_classes_list_cancel(userdata, pool, callback){
	var sha1 = require('sha1');
	var Hashids = require("hashids"), hashids = new Hashids(secretSalt);
	var sid = '';
	var Keyconditoin = '';
	var keyword = '';
	var learning = '';
	var start = '0';
	var limit = '';
	var resultJson = '';
	var status = '';
	var start_date='';
	var end_date='';
	var start_time='';
	var end_time='';
	var limitStr='';
	var name=''

	if (typeof userdata.start_time != "undefined" && userdata.start_time != "") {
	  start_time = userdata.start_time;
	}
	if (typeof userdata.end_time != "undefined" && userdata.end_time != "") {
	  end_time = userdata.end_time;
	}
	
	if (typeof userdata.start_date != "undefined" && userdata.start_date != "") {
	  start_date = userdata.start_date;
	}
	
	if (typeof userdata.end_date != "undefined" && userdata.end_date != "") {
	  end_date = userdata.end_date;
	}
	
	if (typeof userdata.sid != 'undefined' && userdata.sid != '') {
		sid = userdata.sid;
	}
	if (typeof userdata.status != 'undefined' && userdata.status != '') {
		status = userdata.status;
	}
	if (typeof userdata.name != 'undefined' && userdata.name != '') {
		name = userdata.name;
	}
	console.log(userdata.start,'userdata');
	pool.getConnection(function (err, connection) {
			
		// var teacher_id=hashids.decode(sid);
		var Student_id=hashids.decode(sid);
		// if (Student_id != '') {
		// 	Keyconditoin += ' student_booked_classes.teacher_id ="'+Student_id+'" OR student_booked_classes.student_id ="'+Student_id+'"';
		// }
		if (name != '') {
			Keyconditoin += ' AND teacher.name LIKE  "%' + name + '%"';
		}
		if (typeof userdata.start != 'undefined' && userdata.start != '') {
			start = userdata.start;
		}
		if (typeof userdata.limit != 'undefined' && userdata.limit != '') {
			limit = userdata.limit;
		}
		if(limit !=''){
			limitStr='LIMIT '+start+', '+limit+'';
		}
		if(start_date !='' && end_date !="" && start_time!='' && end_time!='')
		{
		 Keyconditoin += ' AND schedule_slot_date  BETWEEN "'+start_date+'" AND "'+end_date+'"  AND user_time_schedule_slots.time_from BETWEEN "'+start_time+'" AND "'+end_time+'"';
        }
		if(start_date !='' && end_date !="" && start_time=='' && end_time=='')
		{
		 Keyconditoin += 'AND schedule_slot_date BETWEEN "'+start_date+'" AND "'+end_date+'"';
        }
		if(start_date !='' && end_date =="" && start_time!='' && end_time!='')
		{
		 Keyconditoin += ' AND schedule_slot_date  >= "'+start_date+'"  AND user_time_schedule_slots.time_from BETWEEN "'+start_time+'" AND "'+end_time+'"';
        }
		if(start_date =='' && end_date !="" && start_time!='' && end_time!='')
		{
		 Keyconditoin += ' AND schedule_slot_date  <="'+end_date+'"  AND user_time_schedule_slots.time_from BETWEEN "'+start_time+'" AND "'+end_time+'"';
        }
		if(start_date !='' && end_date =="" && start_time!='' && end_time!='')
		{
		 Keyconditoin += ' AND schedule_slot_date  >="'+start_date+'"  AND user_time_schedule_slots.time_from BETWEEN "'+start_time+'" AND "'+end_time+'"';
        }
		if(start_date =='' && end_date !="" && start_time=='' && end_time=='')
		{
		 Keyconditoin += ' AND schedule_slot_date  <="'+end_date+'" ';
        }
		if(start_date !='' && end_date =="" && start_time=='' && end_time=='')
		{
		 Keyconditoin += 'AND schedule_slot_date  >="'+start_date+'"  ';
        }

		detailsquery1 = 'SELECT student_booked_classes.*,student_booked_classes.id as booked_class_id,user_time_schedule_slots.time_from,student_booked_classes.class_type as class_type,(SELECT demo_class_payout from demo_class_settings where id="2") as demo_class_payout,(SELECT paid_class_payout from demo_class_settings where id="2") as paid_class_payout,user_time_schedule_slots.time_to,course_chapters.chapter_title,course_chapters.chapter_description,teacher.name as teacher_name,teacher.id as teacher_id,student.name as student_name,student.id as student_id,student.phone as student_phone,student.parents_name,student.parents_name as school_name from student_booked_classes as student_booked_classes LEFT JOIN users as student ON student.id = student_booked_classes.student_id LEFT JOIN users as teacher ON teacher.id = student_booked_classes.teacher_id  LEFT JOIN course_chapters as course_chapters ON course_chapters.id = student_booked_classes.chapter_id LEFT JOIN user_time_schedule_slots as user_time_schedule_slots ON user_time_schedule_slots.id = student_booked_classes.slot_id where student_booked_classes.status ="3" AND  student_booked_classes.teacher_id ="'+Student_id+'"   '+Keyconditoin+' ';//user_time_schedule_slots.type as class_type
		detailsquery = 'SELECT student_booked_classes.*,student_booked_classes.id as booked_class_id,user_time_schedule_slots.time_from,student_booked_classes.class_type as class_type,(SELECT demo_class_payout from demo_class_settings where id="2") as demo_class_payout,(SELECT paid_class_payout from demo_class_settings where id="2") as paid_class_payout,user_time_schedule_slots.time_to,course_chapters.chapter_title,course_chapters.chapter_description,teacher.name as teacher_name,teacher.id as teacher_id,student.name as student_name,student.id as student_id,student.phone as student_phone,student.parents_name,student.parents_name as school_name from student_booked_classes as student_booked_classes LEFT JOIN users as student ON student.id = student_booked_classes.student_id LEFT JOIN users as teacher ON teacher.id = student_booked_classes.teacher_id  LEFT JOIN course_chapters as course_chapters ON course_chapters.id = student_booked_classes.chapter_id LEFT JOIN user_time_schedule_slots as user_time_schedule_slots ON user_time_schedule_slots.id = student_booked_classes.slot_id where student_booked_classes.status ="3" AND  student_booked_classes.teacher_id ="'+Student_id+'"   '+Keyconditoin+' '+limitStr+'';//user_time_schedule_slots.type as class_type
		console.log('detailsquery123',detailsquery.count);
		connection.query(detailsquery1, function(errSelDetails1,resSelDetails1){
			console.log(resSelDetails1?.length,'xxx');
		connection.query(detailsquery, function(errSelDetails,resSelDetails){
			if(errSelDetails){
				resultJson = '{"replyCode":"error","replyMsg":"'+errSelDetails.message+'","cmd":"courses_list"}\n';
				connection.release();
				callback(200, null, resultJson);
				return;
			}else{
				
				
						resultJson = '{"replyCode":"success","replyMsg":"student lessons list","data":'+JSON.stringify(resSelDetails)+',"total_count":'+JSON.stringify(resSelDetails1.length)+',"cmd":"student_lessons_list"}\n';
						console.log('res-suceess');
						connection.release();
						callback(200, null, resultJson);
						return;	
						
					}
				
			
		});
		
		});
	});
}
function paymentscheck(userdata, pool, callback){
	console.log(userdata.transactionId,'paymentscheck');
	const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));

const url = config.paymentt+'/'+userdata.transactionId;
const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    'checkout-api-key': 'PSK_SFdF2OxMibTEGrx0JMig0zcXmM4kJKle4924PvGk'
  }
  
};


fetch(url, options)
  .then(res => res.json())
		  .then(  function(json){
			// console.log(json,'jsonjson');
					var url = json.redirectUrl
					pool.getConnection(function (err, connection) {
	let date_ob = new Date();
	if(json.transactionStatus === 'PaymentSuccess'){
		var Catquery = 'INSERT INTO teachers_payout SET student_id="' +  userdata.booked_class.tution_for + '",teacher_id="' + userdata.booked_class.teacher_id  + '", amount="' + userdata.booked_class.rate+ '",student_booked_class_id="' + userdata.booked_class.id+ '",paid="'+1+'"';

	}
else{
	var Catquery = 'INSERT INTO teachers_payout SET student_id="' +  userdata.booked_class.tution_for + '",teacher_id="' + userdata.booked_class.teacher_id  + '", amount="' + userdata.booked_class.rate+ '",student_booked_class_id="' + userdata.booked_class.id+ '",paid="'+0+'"';

}
						
						// var Catquery = 'INSERT INTO teachers_payout SET student_id="' + userdata + '",teacher_id="' + 111 + '", amount="' + json.transactionId + '"';
						connection.query(Catquery, function (err, res) {
							if(err){
								resultJson = '{"replyCode":"error","replyMsg":"' + err.message + '","cmd":"cms"}\n';
								connection.release();
								callback(400,resultJson);
								return;
							}else{
						Bookquery ='UPDATE user_time_schedule_slots SET available = "0",class_id="'+userdata.booked_class.id+'",type="1",status="1" WHERE id="'+userdata.slot_id+'"';
                                 connection.query(Bookquery)
					resultJson='{"replyCode":"success","replyMsg":"cms2 details","data":'+JSON.stringify(res)+"}\n";

									connection.release();
									callback(200, null);
									return;
								}
							
						});
					});
				
					// resultJson='{"replyCode":"success","replyMsg":"cms details","data":'+JSON.stringify(url)+"}\n";
					
					// callback(200, null, resultJson);
					// return;
					//res.use(url)
						
				})
// }
//   )
  .catch(function(err) {
	resultJson = '{"replyCode":"error","replyMsg":"' + err.message + '","cmd":"cms"}\n';
				connection.release();
				callback(400, null, resultJson);
				return;
  });
}

 function success(userdata, pool, callback){
	resultJson = '{"replyCode":"success","replyMsg":"cms list","data":' + JSON.stringify(userdata) + ', "cmd":"cms"}\n';
	callback(200, null, resultJson);

	};
async function webhooks(userdata, pool, callback){

	let date_ob = new Date();
    pool.getConnection(function (err, connection) {
					
        // var Catquery = 'INSERT INTO teachers_payout SET student_id=' + userdata.student_id + ',teacher_id=' + userdata.teacher_id + ', student_booked_class_id=' + userdata.id + '';
		
		if (err) {
            res.send({ success: false, message: 'database error', error: err });
            return;
        }

        connection.on('error', function(err) {
            res.send({ success: false, message: 'database error', error: err });
            return;
        });		
			var Catquery = 'INSERT INTO teachers_payout SET student_id="' +  userdata.student_id + '",teacher_id="' + userdata.teacher_id  + '", amount="' + userdata.rate+ '",student_booked_class_id="' + userdata.id+ '",created="'+date_ob+'",paid="'+1+'"';
			connection.query(Catquery, function (err, res) {
				if(err){
					resultJson = '{"replyCode":"error","replyMsg":"' + err.message + '","cmd":"cms"}\n';
					connection.release();
					// callback(400, null, resultJson);
					return;
				}else{
	Bookquery ='UPDATE user_time_schedule_slots SET available = "0",class_id="'+userdata.id+'",type="1",status="1" WHERE id="'+userdata.slot_id+'"';
    connection.query(Bookquery)
						connection.release();
						// callback(200, null);
						return;
					
				}
			});
		});
     
  
    }




function tran_data(userdata, pool, callback) {
	var id = '';
	if (typeof userdata.id != 'undefined' && userdata.id != '') {
		id = userdata.id;
	}
	pool.getConnection(function (err, connection) {
		var Catquery = 'SELECT * FROM teachers_payout WHERE teacher_id ="'+id+'" or student_id ="'+id+'"';
		connection.query(Catquery, function (err, res) {
			if(err){
				resultJson = '{"replyCode":"error","replyMsg":"' + err.message + '","cmd":"cms"}\n';
				connection.release();
				callback(400, null, resultJson);
				return;
			}else{
				if (res.length > 0) {
					resultJson = '{"replyCode":"success","replyMsg":"cms list","data":' + JSON.stringify(res) + ', "cmd":"cms"}\n';
					connection.release();
					callback(200, null, resultJson);
					return;
				} else {
					resultJson = '{"replyCode":"success","replyMsg":"cms","data":[], "cmd":"cms"}\n';
					connection.release();
					callback(200, null, resultJson);
					return;
				}
			}
		});
	});
}
// function paymentscheck(userdata, pool, callback){
// 	console.log('User data',userdata);
// 	console.log('success',123);
// 	var resultJson = '{"replyCode":"success","replyMsg":"cms","data":[], "cmd":"cms"}\n';
// 	callback(200, null, resultJson);
// 	return;
// 	}
function web_cms_list(userdata, pool, callback) {
	var resultJson = '';
	pool.getConnection(function (err, connection) {
		var Catquery = 'SELECT * FROM cms WHERE status ="1" AND show_menu="1"';
		connection.query(Catquery, function (err, res) {
			if(err){
				resultJson = '{"replyCode":"error","replyMsg":"' + err.message + '","cmd":"cms"}\n';
				connection.release();
				callback(400, null, resultJson);
				return;
			}else{
				if (res.length > 0) {
					resultJson = '{"replyCode":"success","replyMsg":"cms list","data":' + JSON.stringify(res) + ', "cmd":"cms"}\n';
					connection.release();
					callback(200, null, resultJson);
					return;
				} else {
					resultJson = '{"replyCode":"success","replyMsg":"cms","data":[], "cmd":"cms"}\n';
					console.log(resultJson);
					connection.release();
					callback(200, null, resultJson);
					return;
				}
			}
		});
	});
}


function web_testimonials_list(userdata, pool, callback) {
	var resultJson = '';
	var keyword = '';
	var Keyconditoin = ' student_testimonials.status ="1" ';
	var start = '0';
	var limit = '';
  	var limitStr='';

	if (typeof userdata.keyword != 'undefined' && userdata.keyword != '') {
		keyword = userdata.keyword;
	}
	
	if (typeof userdata.start != 'undefined' && userdata.start != '') {
		start = userdata.start;
	}
	if (typeof userdata.limit != 'undefined' && userdata.limit != '') {
		limit = userdata.limit;
	}
  
	if (limit != "") {
		limitStr = "LIMIT " + start + ", " + limit + "";
	}
	pool.getConnection(function (err, connection) {
		detailsquery = 'SELECT student_testimonials.* from student_testimonials where ' + Keyconditoin + ' '+limitStr+'';
		
          console.log('detailsquery', detailsquery);
          connection.query(detailsquery, function (errSelDetails, resSelDetails) {
            if (errSelDetails) {
              resultJson='{"replyCode":"error","replyMsg":"'+errSelDetails.message+'","cmd":"student_testimonials_list"}\n';
              connection.release();
              callback(200, null, resultJson);
              return;
            } else {
             resultJson='{"replyCode":"success","replyMsg":"Details found successfully .","data":'+JSON.stringify(resSelDetails)+',"cmd":"student_testimonials_list"}\n';
              console.log('res-suceess');
              connection.release();
              callback(200, null, resultJson);
              return;
            }
          });
	});
}

function teachers_list(userdata, pool, callback) {
	var resultJson = "";
	var strJson = "";
	var res = '';

	var keyword = "";
	var job_type = "";
	var age_group_id = "";
	var country_id = "";
	var rating = "";
	var rate = "";
    var languages=""
	var featured = "";
    var rate_m="";
	var Keyconditoin = ' users.status ="1" AND role_id="3" And rate>0';
	var result = [];
	var start = '0';
	var limit = '20';
	var limitStr='';
	var student_id='';
	var gender='';
	var country='';
	var city=''
	var state='';
	var category_id='';
	var start_date='';
	var end_date='';
	var start_time='';
	var end_time='';
	var pcode='';

	if (typeof userdata.start_time != "undefined" && userdata.start_time != "") {
	  start_time = userdata.start_time;
	}
	if (typeof userdata.pcode != "undefined" && userdata.pcode != "") {
	  pcode = userdata.pcode;
	}
	if (typeof userdata.end_time != "undefined" && userdata.end_time != "") {
	  end_time = userdata.end_time;
	}
	
	if (typeof userdata.start_date != "undefined" && userdata.start_date != "") {
	  start_date = userdata.start_date;
	}
	
	if (typeof userdata.end_date != "undefined" && userdata.end_date != "") {
	  end_date = userdata.end_date;
	}
	if (typeof userdata.category_id != "undefined" && userdata.category_id != "") {
		category_id = userdata.category_id;
	  }
	if (typeof userdata.keyword != "undefined" && userdata.keyword != "") {
	  keyword = userdata.keyword;
	}
	if (typeof userdata.featured != "undefined" && userdata.featured != "") {
	  featured = userdata.featured;
	}
	if (typeof userdata.job_type != "undefined" && userdata.job_type != "") {
	  job_type = userdata.job_type;
	}
	// if (typeof userdata.rate != "undefined" && userdata.rate != "") {
	//   rate = userdata.rate;
	// }
	if (typeof userdata.age_group_id != "undefined" && userdata.age_group_id != "") {
	  age_group_id = userdata.age_group_id;
	}
	if (typeof userdata.rating != "undefined" && userdata.rating != "") {
	  rating = userdata.rating;
	}
	if (typeof userdata.country_id != "undefined" && userdata.country_id != "") {
	  country_id = userdata.country_id;
	}
	if (typeof userdata.gender != "undefined" && userdata.gender != "") {
	  gender = userdata.gender;
	}

  
	if (typeof userdata.start != "undefined" && userdata.start != "") {
	  start = userdata.start;
	}
	if (typeof userdata.limit != "undefined" && userdata.limit != "") {
	  limit = userdata.limit;
	}
	if (typeof userdata.student_id != "undefined" && userdata.student_id != "") {
	  student_id = userdata.student_id;
	}
	if (typeof userdata.rate != "undefined" && userdata.rate != "") {
	  rate = userdata.rate;
	}
	if (typeof userdata.rate_m != "undefined" && userdata.rate_m != "") {
	  rate_m = userdata.rate_m;
	}
	if (typeof userdata.languages != "undefined" && userdata.languages != "") {
	  languages = userdata.languages;
	}
	if (typeof userdata.country != "undefined" && userdata.country != "") {
		country = userdata.country;
	}
	if (typeof userdata.city != "undefined" && userdata.city != "") {
		city = userdata.city;
	}
	if (typeof userdata.state != "undefined" && userdata.state != "") {
		state = userdata.state;
	}
  
  
	if(limit !=''){
		limitStr='LIMIT '+start+', '+limit+'';
	}	
	pool.getConnection(function (err, connection) {
		if (keyword != "") {
			Keyconditoin += ' AND users.name LIKE  "%' + keyword + '%"';
		}
		if (pcode != "") {
			Keyconditoin += ' AND users.pcode LIKE  "%' + pcode + '%"';
		}
		if (languages != "") {
			Keyconditoin += ' AND users.languages LIKE  "%' + languages + '%"';
		}
		if (category_id != "") {
			Keyconditoin += ' AND teacher_subjects.category_id="'+ category_id+'"';
		}
	
		// if (end_date != "") {
		// 	Keyconditoin += ' AND teacher_subjects.end_date="'+ end_date+'"';
		// }
		
		if (job_type != "") {
			Keyconditoin += ' AND users.job_type = "' + job_type + '"';
		}
		if (rate >=0 && rate_m >0) {
			Keyconditoin += ' AND users.rate BETWEEN  ' + rate + ' AND ' + rate_m + '';
		}
		
		if (featured != "") {
			Keyconditoin += ' AND users.featured = "' + featured + '"';
		}

		if (age_group_id != "") {
			Keyconditoin += ' AND users.age_group_id = "' + age_group_id + '"';
		}
		if (country_id != "") {
			Keyconditoin += ' AND users.country = "' + country_id + '"';
		}
		if (country != "") {
			Keyconditoin += ' AND users.country = "' + country + '"';
		}
		if (city != "") {
			Keyconditoin += ' AND users.city = "' + city + '"';
		}
		if (state != "") {
			Keyconditoin += ' AND users.state = "' + state + '"';
		}
// 		if (pcode != "") {
// 			Keyconditoin += ' AND users.pcode = "' + pcode + '"';
// 		}
		if (gender != "") {
			Keyconditoin += ' AND users.gender = "' + gender + '"';
		}
		if (gender != "") {
			Keyconditoin += ' AND users.gender = "' + gender + '"';
		}
		if (gender != "") {
			Keyconditoin += ' AND users.gender = "' + gender + '"';
		}
		if (gender != "") {
			Keyconditoin += ' AND users.gender = "' + gender + '"';
		}
		if (gender != "") {
			Keyconditoin += ' AND users.gender = "' + gender + '"';
		}
		if (rating != "") {
					Keyconditoin += ' AND (SELECT ROUND(AVG (teacher_review_rating.rating)) from teacher_review_rating WHERE teacher_review_rating.teacher_id=users.id) >='+rating+'';

		//	Keyconditoin += ' AND (SELECT ROUND(AVG (reviews.rating),1) from reviews WHERE reviews.teacher_id=users.id AND reviews.status = "1") >='+rating+'';
		}

		// var hhh = 'AND users.id IN (SELECT user_time_schedule_slots.teacher_id FROM `user_time_schedule_slots` join `user_time_schedule` as user_time_schedule on user_time_schedule.teacher_id=user_time_schedule_slots.teacher_id WHERE user_time_schedule_slots.`available` = 1 AND user_time_schedule.`available` = 1 GROUP BY user_time_schedule_slots.teacher_id)';
		if(start_date !='' && end_date !="" && start_time!='' && end_time!='')
		{
		 Keyconditoin += 'AND ( SELECT id from user_time_schedule_slots WHERE schedule_id IN (SELECT id FROM `user_time_schedule` WHERE user_time_schedule.teacher_id=users.id AND `schedule_date` BETWEEN "'+start_date+'" AND "'+end_date+'" AND available = 1) AND time_from BETWEEN "'+start_time+'" AND "'+end_time+'" AND available = 1 GROUP BY user_time_schedule_slots.teacher_id)';
        }
		if(start_date !=''  && end_date !="" && start_time=='' && end_time=='')
		{
		 Keyconditoin += 'AND ( SELECT id from user_time_schedule_slots WHERE schedule_id IN (SELECT id FROM `user_time_schedule` WHERE user_time_schedule.teacher_id=users.id AND `schedule_date` BETWEEN "'+start_date+'" AND "'+end_date+'" AND available = 1) AND  available = 1 GROUP BY user_time_schedule_slots.teacher_id)';
        }
		if(start_date !=''  && end_date =="" && start_time!='' && end_time!='')
		{
		 Keyconditoin += 'AND ( SELECT id from user_time_schedule_slots WHERE schedule_id IN (SELECT id FROM `user_time_schedule` WHERE user_time_schedule.teacher_id=users.id AND `schedule_date` >= "'+start_date+'" AND available = 1) AND time_from BETWEEN "'+start_time+'" AND "'+end_time+'" AND available = 1 GROUP BY user_time_schedule_slots.teacher_id)';
        }
		if(start_date ==''  && end_date !="" && start_time!='' && end_time!='')
		{
		 Keyconditoin += 'AND ( SELECT id from user_time_schedule_slots WHERE schedule_id IN (SELECT id FROM `user_time_schedule` WHERE user_time_schedule.teacher_id=users.id AND `schedule_date` <="'+end_date+'" AND available = 1) AND time_from BETWEEN "'+start_time+'" AND "'+end_time+'" AND available = 1 GROUP BY user_time_schedule_slots.teacher_id)';
        }
		if(start_date =='' && end_date !="" && start_time!='' && end_time!='')
		{
		 Keyconditoin += 'AND ( SELECT id from user_time_schedule_slots WHERE schedule_id IN (SELECT id FROM `user_time_schedule` WHERE user_time_schedule.teacher_id=users.id AND `schedule_date` <="'+end_date+'" AND available = 1) AND time_from BETWEEN "'+start_time+'" AND "'+end_time+'" AND available = 1 GROUP BY user_time_schedule_slots.teacher_id)';
        }
		if(start_date =='' && end_date !="" && start_time=='' && end_time=='')
		{
		 Keyconditoin += 'AND ( SELECT id from user_time_schedule_slots WHERE schedule_id IN (SELECT id FROM `user_time_schedule` WHERE user_time_schedule.teacher_id=users.id AND `schedule_date` <="'+end_date+'" AND available = 1) AND available = 1 GROUP BY user_time_schedule_slots.teacher_id)';
        }
		if(start_date !='' && end_date =="" && start_time=='' && end_time=='')
		{
		 Keyconditoin += 'AND ( SELECT id from user_time_schedule_slots WHERE schedule_id IN (SELECT id FROM `user_time_schedule` WHERE user_time_schedule.teacher_id=users.id AND `schedule_date` >="'+start_date+'" AND available = 1) AND  available = 1 GROUP BY user_time_schedule_slots.teacher_id)';
        }
		var Catquery ='SELECT DISTINCT users.*,countries.name as country_name,(SELECT ROUND(AVG (teacher_review_rating.rating)) from teacher_review_rating WHERE teacher_review_rating.teacher_id=users.id) as avg_rating,(SELECT count(*) from user_favourites WHERE user_favourites.user_id="'+student_id+'" AND user_favourites.teacher_id=users.id) as favourite FROM users LEFT JOIN countries as countries ON countries.id = users.country LEFT JOIN teacher_subjects on teacher_subjects.user_id=users.id  WHERE  ' +Keyconditoin +' '+limitStr+'';
		var countquery = 'SELECT DISTINCT users.*,countries.name as country_name,(SELECT ROUND(AVG (teacher_review_rating.rating)) from teacher_review_rating WHERE teacher_review_rating.teacher_id=users.id) as avg_rating,(SELECT count(*) from user_favourites WHERE user_favourites.user_id="'+student_id+'" AND user_favourites.teacher_id=users.id) as favourite FROM users LEFT JOIN countries as countries ON countries.id = users.country LEFT JOIN teacher_subjects on teacher_subjects.user_id=users.id  WHERE users.status ="1" AND role_id="3" And rate>0';
    

		connection.query(countquery, function (err, responsecount) {
			if (responsecount?.length > 0) {
		connection.query(Catquery, function (err, result) {
		if (err) {
			resultJson='{"replyCode":"error","replyMsg":"'+err.message+'","cmd":"user_list_tutor"}\n';
			connection.release();
			callback(200, null, resultJson);
			return;
		} else {
			if (result?.length > 0) {
				res = result;
			} else {
				res = [];
			}
				resultJson='{"replyCode":"success","replyMsg":"User list","data":' +
				JSON.stringify(res) +
				',"totalCount":' +responsecount.length+',"cmd":"user_list_tutor"}\n';
				console.log("res-suceess");
				connection.release();
				callback(200, null, resultJson);
				return;
			} 
			// else {
			// resultJson =
			// 	'{"replyCode":"success","replyMsg":"No Record found.","data":[], "cmd":"user_list"}\n';
			// console.log("res-suceess");
			// connection.release();
			// callback(200, null, resultJson);
			// return;
			// }
		// }
		});
	}else {
		resultJson = '{"replyCode":"success","replyMsg":"teacher_list","data":[], "cmd":"teacher_list"}\n';
		console.log(resultJson);
		connection.release();
		callback(200, null, resultJson);
		return;
	}
		});
	});
}
//09-04-2023
// function teachers_list(userdata, pool, callback) {
// 	var resultJson = "";
// 	var strJson = "";
// 	var keyword = "";
// 	var job_type = "";
// 	var age_group_id = "";
// 	var country_id = "";
// 	var rating = "";
// 	var featured = "";

// 	var Keyconditoin = ' users.status ="1" AND role_id="3"';
// 	var result = [];
// 	var start = "0";
// 	var limit = "";
// 	var limitStr='';
// 	var student_id='';
// 	var gender='';
// 	var country='';
// 	var city=''
// 	var state='';
// 	if (typeof userdata.keyword != "undefined" && userdata.keyword != "") {
// 	  keyword = userdata.keyword;
// 	}
// 	if (typeof userdata.featured != "undefined" && userdata.featured != "") {
// 	  featured = userdata.featured;
// 	}
// 	if (typeof userdata.job_type != "undefined" && userdata.job_type != "") {
// 	  job_type = userdata.job_type;
// 	}
// 		if (typeof userdata.gender != "undefined" && userdata.gender != "") {
// 	  gender = userdata.gender;
// 	}
// 	if (typeof userdata.age_group_id != "undefined" && userdata.age_group_id != "") {
// 	  age_group_id = userdata.age_group_id;
// 	}
// 	if (typeof userdata.rating != "undefined" && userdata.rating != "") {
// 	  rating = userdata.rating;
// 	}
// 	if (typeof userdata.country_id != "undefined" && userdata.country_id != "") {
// 	  country_id = userdata.country_id;
// 	}

  
// 	if (typeof userdata.start != "undefined" && userdata.start != "") {
// 	  start = userdata.start;
// 	}
// 	if (typeof userdata.limit != "undefined" && userdata.limit != "") {
// 	  limit = userdata.limit;
// 	}
// 	if (typeof userdata.student_id != "undefined" && userdata.student_id != "") {
// 	  student_id = userdata.student_id;
// 	}
//   	if (typeof userdata.country != "undefined" && userdata.country != "") {
// 		country = userdata.country;
// 	}
// 	if (typeof userdata.city != "undefined" && userdata.city != "") {
// 		city = userdata.city;
// 	}
// 	if (typeof userdata.state != "undefined" && userdata.state != "") {
// 		state = userdata.state;
// 	}
  
// 	if (limit != "") {
// 	  limitStr = "LIMIT " + start + ", " + limit + "";
// 	}
// 	pool.getConnection(function (err, connection) {
// 		if (keyword != "") {
// 			Keyconditoin += ' AND users.name LIKE  "%' + keyword + '%"';
// 		}
		
// 		if (job_type != "") {
// 			Keyconditoin += ' AND users.job_type = "' + job_type + '"';
// 		}
// 			if (gender != "") {
// 			Keyconditoin += ' AND users.gender = "' + gender + '"';
// 		}
		
// 		if (featured != "") {
// 			Keyconditoin += ' AND users.featured = "' + featured + '"';
// 		}

// 		if (age_group_id != "") {
// 			Keyconditoin += ' AND users.age_group_id = "' + age_group_id + '"';
// 		}
// 		if (country_id != "") {
// 			Keyconditoin += ' AND users.country = "' + country_id + '"';
// 		}
// 		if (country != "") {
// 			Keyconditoin += ' AND users.country = "' + country + '"';
// 		}
// 		if (city != "") {
// 			Keyconditoin += ' AND users.city = "' + city + '"';
// 		}
// 		if (state != "") {
// 			Keyconditoin += ' AND users.state = "' + state + '"';
// 		}
// 		if (rating != "") {
// 			Keyconditoin += ' AND (SELECT ROUND(AVG (teacher_review_rating.rating)) from teacher_review_rating WHERE teacher_review_rating.teacher_id=users.id) >='+rating+'';
// 		}

// 		var Catquery ='SELECT users.*,countries.name as country_name,(SELECT ROUND(AVG (teacher_review_rating.rating)) from teacher_review_rating WHERE teacher_review_rating.teacher_id=users.id ) as avg_rating,(SELECT count(*) from user_favourites WHERE user_favourites.user_id="'+student_id+'" AND user_favourites.teacher_id=users.id) as favourite FROM users LEFT JOIN countries as countries ON countries.id = users.country WHERE  ' +Keyconditoin +" ORDER BY users.id DESC " +limitStr + "";
  
// 		connection.query(Catquery, function (err, result) {
// 		if (err) {
// 			resultJson='{"replyCode":"error","replyMsg":"'+err.message+'","cmd":"user_list"}\n';
// 			connection.release();
// 			callback(200, null, resultJson);
// 			return;
// 		} else {
// 			if (result.length > 0) {
// 				resultJson='{"replyCode":"success","replyMsg":"User list","data":'+JSON.stringify(result)+', "cmd":"user_list"}\n';
// 				console.log("res-suceess");
// 				connection.release();
// 				callback(200, null, resultJson);
// 				return;
// 			} else {
// 			resultJson =
// 				'{"replyCode":"success","replyMsg":"No Record found.","data":[], "cmd":"user_list"}\n';
// 			console.log("res-suceess");
// 			connection.release();
// 			callback(200, null, resultJson);
// 			return;
// 			}
// 		}
// 		});
// 	});
// }
// function student_quizzes_upload(userdata, pool, callback) {
// 	var resultJson = "";
// 	var strJson = "";
// 	var keyword = "";

// 	var Keyconditoin = ' users.status ="1" AND role_id="3"';
// 	var result = [];
// 	var start = "0";
// 	var limit = "";
// 	var limitStr='';
// 	var student_id='';
// 	if (typeof userdata.keyword != "undefined" && userdata.keyword != "") {
// 	  keyword = userdata.keyword;
// 	}
	
	
	
	

 
// 	if (typeof userdata.student_id != "undefined" && userdata.student_id != "") {
// 	  student_id = userdata.student_id;
// 	}
  
  
// 	if (typeof userdata.start != "undefined" && userdata.start != "") {
// 		start = userdata.start;
// 	  }
// 	  if (typeof userdata.limit != "undefined" && userdata.limit != "") {
// 		limit = userdata.limit;
// 	  }
// 	  if (limit != "") {
// 		limitStr = "LIMIT " + start + ", " + limit + "";
// 	  }
// 	pool.getConnection(function (err, connection) {
// 		// if (keyword != "") {
// 		// 	Keyconditoin += ' AND users.name LIKE  "%' + keyword + '%"';
// 		// }
// 		// if (student_id != "") {
// 		// 	Keyconditoin += ' AND users.country = "' + student_id + '"';
// 		// }
		
	

// 		var Catquery ="SELECT  quizzes.question_doc, quizzes.id,quizzes.quiz_title,quizzes.created_by,quizzes.category_id,quizzes.exam_date,quizzes.exam_time, student_booked_classes.student_id FROM `quizzes` JOIN student_booked_classes as student_booked_classes  on student_booked_classes.teacher_id=quizzes.created_by WHERE student_booked_classes.student_id='" +student_id+ " ORDER BY quizzes.id DESC "+limitStr+"'";
  
// 		connection.query(Catquery, function (err, result) {
// 		if (err) {
// 			resultJson='{"replyCode":"error","replyMsg":"'+err.message+'","cmd":"user_list"}\n';
// 			connection.release();
// 			callback(200, null, resultJson);
// 			return;
// 		} else {
// 			if (result.length > 0) {
// 				resultJson='{"replyCode":"success","replyMsg":"User list","data":'+JSON.stringify(result)+', "cmd":"user_list"}\n';
// 				console.log("res-suceess");
// 				connection.release();
// 				callback(200, null, resultJson);
// 				return;
// 			} else {
// 			resultJson =
// 				'{"replyCode":"success","replyMsg":"No Record found.","data":[], "cmd":"user_list"}\n';
// 			console.log("res-suceess");
// 			connection.release();
// 			callback(200, null, resultJson);
// 			return;
// 			}
// 		}
// 		});
// 	});
// }
function student_quizzes_upload(userdata, pool, callback) {
	var resultJson = "";
	var strJson = "";
	var keyword = "";
	var ress = "";
	var Keyconditoin = ' users.status ="1" AND role_id="3"';
	var result = [];
	var start = "0";
	var limit = "";
	var limitStr='';
	var student_id='';
	var start_date='';
	var end_date='';
	if (typeof userdata.start_date != "undefined" && userdata.start_date != "") {
	  start_date = userdata.start_date;
	}
	
	if (typeof userdata.end_date != "undefined" && userdata.end_date != "") {
	  end_date = userdata.end_date;
	}
	if (typeof userdata.keyword != "undefined" && userdata.keyword != "") {
	  keyword = userdata.keyword;
	}
	
	
	
	if(start_date !='' && end_date !="" )
		{
		 Keyconditoin += 'AND quizzes.exam_date BETWEEN "'+start_date+'" AND "'+end_date+'"';
        }
	if(start_date !='' && end_date =="" )
		{
		 Keyconditoin += 'AND quizzes.exam_date >= "'+start_date+'" ';
        }
	if(start_date !='' && end_date !="" )
		{
		 Keyconditoin += 'AND quizzes.exam_date <="'+end_date+'"';
        }
 
	if (typeof userdata.student_id != "undefined" && userdata.student_id != "") {
	  student_id = userdata.student_id;
	}
  
	if (typeof userdata.start != "undefined" && userdata.start != "") {
		start = userdata.start;
	  }
	  if (typeof userdata.limit != "undefined" && userdata.limit != "") {
		limit = userdata.limit;
	  }
	  if (limit != "") {
		limitStr = "LIMIT " + start + ", " + limit + "";
	  }
	
	pool.getConnection(function (err, connection) {			
		var Catquery ="SELECT quizzes.question_doc, quizzes.id,quizzes.quiz_title,quizzes.created_by,quizzes.category_id,quizzes.exam_date,quizzes.exam_time, student_booked_classes.student_id FROM `quizzes` JOIN student_booked_classes as student_booked_classes on student_booked_classes.teacher_id=quizzes.created_by WHERE student_booked_classes.student_id='" +student_id+ "''"+Keyconditoin+"''"+limitStr+"' group by id";
		var countquery = "SELECT  quizzes.question_doc, quizzes.id,quizzes.quiz_title,quizzes.created_by,quizzes.category_id,quizzes.exam_date,quizzes.exam_time, student_booked_classes.student_id FROM `quizzes` JOIN student_booked_classes as student_booked_classes  on student_booked_classes.teacher_id=quizzes.created_by WHERE student_booked_classes.student_id='" +student_id+ "' GROUP by  quizzes.id";
    
		connection.query(countquery, function (err, responsecount) {
			console.log(responsecount.length,'asda');
			if (responsecount.length > 0) {
		connection.query(Catquery, function (err, result) {
		if (err) {
			resultJson='{"replyCode":"error","replyMsg":"'+err.message+'","cmd":"user_list_quize"}\n';
			connection.release();
			callback(200, null, resultJson);
			return;
		}  else {
			if (result.length > 0) {
				ress = result;
			} else {
				ress = [];
			}
				resultJson='{"replyCode":"success","replyMsg":"User list","data":'+JSON.stringify(ress) +
				',"totalCount":' +responsecount.length+', "cmd":"user_list_quize"}\n';
				console.log("res-suceess");
				connection.release();
				callback(200, null, resultJson);
				return;
			}
		// 	 else {
		// 	resultJson =
		// 		'{"replyCode":"success","replyMsg":"No Record found.","data":[], "cmd":"user_list"}\n';
		// 	console.log("res-suceess");
		// 	connection.release();
		// 	callback(200, null, resultJson);
		// 	return;
		// 	}
		// }
		});
	}
		});
	});
}



function web_countries_list(userdata, pool, callback) {
	var resultJson = '';
	pool.getConnection(function (err, connection) {
		var Catquery = 'SELECT * FROM countries WHERE status ="1"';
		connection.query(Catquery, function (err, res) {
			if(err){
				resultJson = '{"replyCode":"error","replyMsg":"' + err.message + '","cmd":"countries"}\n';
				connection.release();
				callback(400, null, resultJson);
				return;
			}else{
				if (res.length > 0) {
					resultJson = '{"replyCode":"success","replyMsg":"countries list","data":' + JSON.stringify(res) + ', "cmd":"countries"}\n';
					connection.release();
					callback(200, null, resultJson);
					return;
				} else {
					resultJson = '{"replyCode":"success","replyMsg":"countries","data":[], "cmd":"countries"}\n';
					console.log(resultJson);
					connection.release();
					callback(200, null, resultJson);
					return;
				}
			}
		});
	});
}

function student_marks_upload_by_tutor(userdata, pool, callback){
var l_understanding =0;
var remory_retention =0;
var analytical_skills =0;
var problem_solving =0;
var mindfullness =0;
var engagement =0;
var willingness =0;
var persaverance =0;
var collaboration ='';
var strengths ='';
var Improvement ='';
var moving_forward ='';
var t_ans ='';
var s_ans = '';
var classs = '';
var teacher_name = '';
var teacher_id = '';
var student_id = '';
	if (typeof userdata.l_understanding != "undefined" && userdata.l_understanding != "") {
	  l_understanding = userdata.l_understanding;
	}
	if (typeof userdata.remory_retention != "undefined" && userdata.remory_retention != "") {
	  remory_retention = userdata.remory_retention;
	}
	if (typeof userdata.analytical_skills != "undefined" && userdata.analytical_skills != "") {
	  analytical_skills = userdata.analytical_skills;
	}
	if (typeof userdata.problem_solving != "undefined" && userdata.problem_solving != "") {
	  problem_solving = userdata.problem_solving;
	}
	if (typeof userdata.mindfullness != "undefined" && userdata.mindfullness != "") {
	  mindfullness = userdata.mindfullness;
	}
	if (typeof userdata.engagement != "undefined" && userdata.engagement != "") {
	  engagement = userdata.engagement;
	}
	if (typeof userdata.willingness != "undefined" && userdata.willingness != "") {
	  willingness = userdata.willingness;
	}
	if (typeof userdata.persaverance != "undefined" && userdata.persaverance != "") {
	  persaverance = userdata.persaverance;
	}
	if (typeof userdata.collaboration != "undefined" && userdata.collaboration != "") {
	  collaboration = userdata.collaboration;
	}
	if (typeof userdata.strengths != "undefined" && userdata.strengths != "") {
	  strengths = userdata.strengths;
	}
	if (typeof userdata.Improvement != "undefined" && userdata.Improvement != "") {
	  Improvement = userdata.Improvement;
	}
	if (typeof userdata.moving_forward != "undefined" && userdata.moving_forward != "") {
	  moving_forward = userdata.moving_forward;
	}
	if (typeof userdata.t_ans != "undefined" && userdata.t_ans != "") {
	  t_ans = userdata.t_ans;
	}

	if (typeof userdata.s_ans != "undefined" && userdata.s_ans != "") {
	  s_ans = userdata.s_ans;
	}
	if (typeof userdata.student_id != "undefined" && userdata.student_id != "") {
	  student_id = userdata.student_id;
	}
	if (typeof userdata.teacher_id != "undefined" && userdata.teacher_id != "") {
	  teacher_id = userdata.teacher_id;
	}
	if (typeof userdata.teacher_name != "undefined" && userdata.teacher_name != "") {
	  teacher_name = userdata.teacher_name;
	}
	if (typeof userdata.classs != "undefined" && userdata.classs != "") {
		classs = userdata.classes;
	}
	
	pool.getConnection(function (err, connection) {
		var Catquery = 'SELECT * FROM student_scorecard WHERE teacher_id ="'+teacher_id+'"';
		connection.query(Catquery, function (err, res) {


		if (res.length>0) {
			var queryinsert = 'UPDATE student_scorecard SET student_id="' + student_id + '",classes="' + classs + '",teacher_name="' + teacher_name + '",s_ans="' + s_ans + '",t_ans="' + t_ans + '",moving_forward="' + moving_forward + '",Improvement="' + Improvement + '",strengths="' + strengths + '",collaboration="' + collaboration + '",persaverance="' + persaverance + '",willingness="' + willingness + '",engagement="' + engagement + '",mindfullness="' + mindfullness + '",analytical_skills="' + analytical_skills + '",remory_retention="' + remory_retention + '",l_understanding="' + l_understanding + '",problem_solving="' + problem_solving + '" where student_scorecard.teacher_id="' + teacher_id + '"';
		} else {
		var queryinsert = 'INSERT INTO student_scorecard SET student_id="' + student_id + '",classes="' + classs + '",teacher_name="' + teacher_name + '",teacher_id="' + teacher_id + '",s_ans="' + s_ans + '",t_ans="' + t_ans + '",moving_forward="' + moving_forward + '",Improvement="' + Improvement + '",strengths="' + strengths + '",collaboration="' + collaboration + '",persaverance="' + persaverance + '",willingness="' + willingness + '",engagement="' + engagement + '",mindfullness="' + mindfullness + '",analytical_skills="' + analytical_skills + '",remory_retention="' + remory_retention + '",l_understanding="' + l_understanding + '",problem_solving="' + problem_solving + '"';

		}
		connection.query(queryinsert, function (errinsert, resultinsert) {
			console.log(resultinsert,'resultinsert');
			if (!errinsert) {
				resultJson = '{"replyCode":"success","replyMsg":"Tutor education updated successfully","cmd":"during Markes uploaded "}\n';
				connection.release();
				callback(200, null, resultJson);
				return;
			} else {
				resultJson = '{"replyCode":"error","replyMsg":"' + errinsert.message + '","cmd":"Markes uploaded education error"}\n';
				console.log('res-suceess');
				connection.release();
				callback(400, null, resultJson);
				return;
			}
		});
	})

		
	});;
}
function social_login(userdata, pool, callback) {
	var resultJson = "";
	var sha1 = require("sha1");
	var Hashids = require("hashids"),
	  hashids = new Hashids(secretSalt);
	var ResultArray = "";
	var email = "";
  
	if (typeof userdata.email != "undefined" && userdata.email != "") {
	  email = userdata.email;
	} else {
	  resultJson =
		'{"replyCode":"error","replyMsg":"Please insert registered email","cmd":"login"}\n';
	  callback(200, null, resultJson);
	  return;
	}
  
	console.log("userdata", userdata);
	pool.getConnection(function (err, connection) {
		// var hash_password = sha1(secretSalt + userdata.password);
  
	  squery='SELECT users.* from users WHERE email="'+email+'" AND status="1"';
	  console.log("ss", squery);
	  connection.query(squery, function (err, results) {
		if (!err) {
		  if (results.length > 0) {
			if (results[0].status != 1) {
			  resultJson =
				'{"replyCode":"error","replyMsg":"You are not Authorized","cmd":"login"}\n';
			  connection.release();
			  callback(200, null, resultJson);
			  return;
			} else {
			  var sid = hashids.encode(results[0].id);
			  ResultArray = results[0];
  
			  console.log("-------------------");
			 resultJson='{"replyCode":"success","replyMsg": "success", "data":'+JSON.stringify(ResultArray)+',"sid":"'+sid+'","cmd":"login admin"}\n';
			  connection.release();
			  callback(200, null, resultJson);
			  return;
			}
		  } else {
			resultJson =
			  '{"replyCode":"error","replyMsg":"Please check your login credentials.","cmd":"login"}\n';
			connection.release();
			callback(200, null, resultJson);
			return;
		  }
		} else {
		  resultJson =
			'{"replyCode":"error","replyMsg":"' +
			err.message +
			'","cmd":"login"}\n';
		  connection.release();
		  callback(400, null, resultJson);
		  return;
		}
	  });
	});
}
function student_scorecard(userdata, pool, callback) {
	var resultJson = '';
	var start = '0';
	var limit = '';
	student_id='';
	if (typeof userdata.student_id != "undefined" && userdata.student_id != "") {
		student_id = userdata.student_id;
	  }
  if (typeof userdata.start != "undefined" && userdata.start != "") {
		start = userdata.start;
	  }
	  if (typeof userdata.limit != "undefined" && userdata.limit != "") {
		limit = userdata.limit;
	  }
	  if (limit != "") {
		limitStr = "LIMIT " + start + ", " + limit + "";
	  }
	pool.getConnection(function (err, connection) {
		var Catquery = 'SELECT student_scorecard.*, users.name,users.last_name FROM student_scorecard JOIN users as users on users.id=student_scorecard.teacher_id WHERE student_scorecard.student_id="'+student_id+' ORDER BY users.name DESC ' +limitStr +' "';
		connection.query(Catquery, function (err, res) {
			if(err){
				resultJson = '{"replyCode":"error","replyMsg":"' + err.message + '","cmd":"student_scorecard"}\n';
				connection.release();
				callback(400, null, resultJson);
				return;
			}else{
				if (res.length > 0) {
					resultJson = '{"replyCode":"success","replyMsg":"student scorecard list","data":' + JSON.stringify(res) + ', "cmd":"student_scorecard"}\n';
					connection.release();
					callback(200, null, resultJson);
					return;
				} else {
					resultJson = '{"replyCode":"success","replyMsg":"data is incorect","data":[], "cmd":"student_scorecard"}\n';
					console.log(resultJson);
					connection.release();
					callback(200, null, resultJson);
					return;
				}
			}
		});
	});
}
function student_performance(userdata, pool, callback) {
	var resultJson = '';
	
	teacher_id='';
	if (typeof userdata.teacher_id != "undefined" && userdata.teacher_id != "") {
		teacher_id = userdata.teacher_id;
	  }
	pool.getConnection(function (err, connection) {
		var Catquery = 'SELECT users.name as student_name,users.last_name as stu_last_name,student_scorecard.l_understanding,student_scorecard.remory_retention,student_scorecard.problem_solving,student_scorecard.analytical_skills,student_scorecard.mindfullness,student_scorecard.engagement,student_scorecard.willingness,student_scorecard.persaverance FROM student_scorecard join users as users on users.id=student_scorecard.student_id WHERE student_scorecard.teacher_id ="'+teacher_id+'"';
		connection.query(Catquery, function (err, res) {
			if(err){
				resultJson = '{"replyCode":"error","replyMsg":"' + err.message + '","cmd":"student_scorecard"}\n';
				connection.release();
				callback(400, null, resultJson);
				return;
			}else{
				if (res.length > 0) {
					resultJson = '{"replyCode":"success","replyMsg":"student scorecard list","data":' + JSON.stringify(res) + ', "cmd":"student_scorecard"}\n';
					connection.release();
					callback(200, null, resultJson);
					return;
				} else {
					resultJson = '{"replyCode":"success","replyMsg":"data is incorect","data":[], "cmd":"student_scorecard"}\n';
					console.log(resultJson);
					connection.release();
					callback(200, null, resultJson);
					return;
				}
			}
		});
	});
}
function student_quizzes_list_for_tutor(userdata, pool, callback) {
	var resultJson = '';
	
	teacher_id='';
	if (typeof userdata.teacher_id != "undefined" && userdata.teacher_id != "") {
		teacher_id = userdata.teacher_id;
	  }
	pool.getConnection(function (err, connection) {
		var Catquery = 'SELECT * FROM student_quizzes WHERE teacher_id ="'+teacher_id+'"';
		connection.query(Catquery, function (err, res) {
			if(err){
				resultJson = '{"replyCode":"error","replyMsg":"' + err.message + '","cmd":"student_scorecard"}\n';
				connection.release();
				callback(400, null, resultJson);
				return;
			}else{
				if (res.length > 0) {
					resultJson = '{"replyCode":"success","replyMsg":"student scorecard list","data":' + JSON.stringify(res) + ', "cmd":"student_scorecard"}\n';
					connection.release();
					callback(200, null, resultJson);
					return;
				} else {
					resultJson = '{"replyCode":"success","replyMsg":"data is incorect","data":[], "cmd":"student_scorecard"}\n';
					console.log(resultJson);
					connection.release();
					callback(200, null, resultJson);
					return;
				}
			}
		});
	});
}
// function teacher_list_for_parent(userdata, pool, callback) {
// 	var resultJson = '';
// 	pool.getConnection(function (err, connection) {
// 		var Catquery = 'SELECT * FROM countries WHERE status ="1"';
// 		connection.query(Catquery, function (err, res) {
// 			if(err){
// 				resultJson = '{"replyCode":"error","replyMsg":"' + err.message + '","cmd":"countries"}\n';
// 				connection.release();
// 				callback(400, null, resultJson);
// 				return;
// 			}else{
// 				if (res.length > 0) {
// 					resultJson = '{"replyCode":"success","replyMsg":"countries list","data":' + JSON.stringify(res) + ', "cmd":"countries"}\n';
// 					connection.release();
// 					callback(200, null, resultJson);
// 					return;
// 				} else {
// 					resultJson = '{"replyCode":"success","replyMsg":"countries","data":[], "cmd":"countries"}\n';
// 					console.log(resultJson);
// 					connection.release();
// 					callback(200, null, resultJson);
// 					return;
// 				}
// 			}
// 		});
// 	});
// }
//  function invite(userdata, pool, callback){
// 	var data=userdata.id
	
// let base64data = data.toString('base64');
	

// 	$request->session()->put('reId', base64data);


// }



function teacher_login(userdata, pool, callback) {
	var resultJson = "";
	var sha1 = require("sha1");
	var Hashids = require("hashids"),
	  hashids = new Hashids(secretSalt);
	var ResultArray = "";
	var email = "";
  
	if (typeof userdata.email != "undefined" && userdata.email != "") {
	  email = userdata.email;
	} else {
	  resultJson =
		'{"replyCode":"error","replyMsg":"Please insert registered email","cmd":"login"}\n';
	  callback(200, null, resultJson);
	  return;
	}
  
	console.log("userdata", userdata);
	pool.getConnection(function (err, connection) {
		var hash_password = sha1(secretSalt + userdata.password);
  
	  squery='SELECT users.* from users WHERE email="'+email+'" AND password="'+hash_password+'"';
	  console.log("ss", squery);
	  connection.query(squery, function (err, results) {
		if (!err) {
		  if (results.length > 0) {
			if (results[0].status != 1) {
			  resultJson =
				'{"replyCode":"error","replyMsg":"You are not Authorized","cmd":"login"}\n';
			  connection.release();
			  callback(200, null, resultJson);
			  return;   
			} else {
			  var sid = hashids.encode(results[0].id);
			  ResultArray = results[0];
  
			  console.log("-------------------");
			 resultJson='{"replyCode":"success","replyMsg": "success", "data":'+JSON.stringify(ResultArray)+',"sid":"'+sid+'","cmd":"login admin"}\n';
			  connection.release();
			  callback(200, null, resultJson);
			  return;
			}
		  } else {
			resultJson =
			  '{"replyCode":"error1","replyMsg":"Please check your login credentials.","data":'+JSON.stringify(err)+',"cmd":"login"}\n';
			connection.release();
			callback(200, null, resultJson);
			return;
		  }
		} else {
		  resultJson =
			'{"replyCode":"error","replyMsg":"' +
			err.message +
			'","cmd":"login"}\n';
		  connection.release();
		  callback(400, null, resultJson);
		  return;
		}
	  });
	});
}

//09-04-2023
// function change_password(userdata, pool, callback) {
// 	var resultJson = "";
// 	var strJson = "";
// 	var sha1 = require("sha1");
// 	var Hashids = require("hashids"),
// 	  hashids = new Hashids(secretSalt);
	  
// 	var sid = "";
// 	var password = "";
// 	var current_password = "";
  
// 	if (typeof userdata.sid != "undefined" && userdata.sid != "") {
// 	  sid = userdata.sid;
// 	}
  
// 	if (typeof userdata.password != "undefined" && userdata.password != "") {
// 	  password = userdata.password;
// 	}
// 	if (
// 	  typeof userdata.current_password != "undefined" &&
// 	  userdata.current_password != ""
// 	) {
// 	  current_password = userdata.current_password;
// 	}
// 	console.log(userdata);
// 	pool.getConnection(function (err, connection) {
// 	  var uid = hashids.decode(sid);
// 	  var hash_newpassword = sha1(secretSalt + password);
  
// 	  var hash_oldpassword = sha1(secretSalt + current_password);
// 	  console.log('SELECT password FROM users WHERE id = "' + uid + '"');
// 	  connection.query(
// 		'SELECT password FROM users WHERE id = "' + uid + '"',
// 		function (err, user) {
// 		  if (err) {
// 			resultJson =
// 			  '{"replyCode":"error","replyMsg":"' +
// 			  err.message +
// 			  '","cmd":"changePassword"}\n';
// 			connection.release();
// 			callback(400, null, resultJson);
// 			return;
// 		  } else {
// 			if (user.length > 0) {
// 			  if (user[0].password == hash_oldpassword) {
// 				connection.query(
// 				  'UPDATE users SET password = "' +
// 					hash_newpassword +
// 					'" WHERE id = "' +
// 					uid +
// 					'"',
// 				  function (errs, done) {
// 					if (errs) {
// 					  resultJson =
// 						'{"replyCode":"error","replyMsg":"' +
// 						errs.message +
// 						'","cmd":"changePassword"}\n';
// 					  connection.release();
// 					  callback(400, null, resultJson);
// 					  return;
// 					} else {
// 					  resultJson =
// 						'{"replyCode":"success","replyMsg":"Password has been changed successfully","cmd":"changePassword"}\n';
// 					  connection.release();
// 					  callback(200, null, resultJson);
// 					  return;
// 					}
// 				  }
// 				);
// 			  } else {
// 				resultJson =
// 				  '{"replyCode":"error","replyMsg":"Old Password is not correct","cmd":"changePassword"}\n';
// 				connection.release();
// 				callback(200, null, resultJson);
// 				return;
// 			  }
// 			} else {
// 			  resultJson =
// 				'{"replyCode":"error","replyMsg":"Old Password is not correct","cmd":"changePassword"}\n';
// 			  connection.release();
// 			  callback(200, null, resultJson);
// 			  return;
// 			}
// 		  }
// 		}
// 	  );
// 	});
// }
function change_password(userdata, pool, callback) {
	var resultJson = "";
	var strJson = "";
	var sha1 = require("sha1");
	var Hashids = require("hashids"),
	  hashids = new Hashids(secretSalt);
	  
	var sid = "";
	var id = "";
	var password = "";
	var current_password = "";
  
	if (typeof userdata.sid != "undefined" && userdata.sid != "") {
	  sid = userdata.sid;
	}
	if (typeof userdata.id != "undefined" && userdata.id != "") {
	  id = userdata.id;
	}
  
	if (typeof userdata.password != "undefined" && userdata.password != "") {
	  password = userdata.password;
	}
	if (
	  typeof userdata.current_password != "undefined" &&
	  userdata.current_password != ""
	) {
	  current_password = userdata.current_password;
	}
	console.log(userdata);
	pool.getConnection(function (err, connection) {
		if(sid!=''){
	  var uid = hashids.decode(sid);}
	  
	  var hash_newpassword = sha1(secretSalt + password);
  
	  var hash_oldpassword = sha1(secretSalt + current_password);
	  console.log('SELECT password FROM users WHERE id = "' + uid + '"');
	  connection.query(
		'SELECT password FROM users WHERE id = "' + uid + '"',
		function (err, user) {
			console.log(user,'1111');
		  if (err) {
			resultJson =
			  '{"replyCode":"error","replyMsg":"' +
			  err.message +
			  '","cmd":"changePassword"}\n';
			connection.release();
			callback(400, null, resultJson);
			return;
		  } else {
			if (user.length > 0) {
			  if (user[0].password == hash_oldpassword) {
				connection.query(
				  'UPDATE users SET password = "' +
					hash_newpassword +
					'" WHERE id = "' +
					uid +
					'"',
				  function (errs, done) {
					if (errs) {
					  resultJson =
						'{"replyCode":"error","replyMsg":"' +
						errs.message +
						'","cmd":"changePassword"}\n';
					  connection.release();
					  callback(400, null, resultJson);
					  return;
					} else {
					  resultJson =
						'{"replyCode":"success","replyMsg":"Password has been changed successfully","cmd":"changePassword"}\n';
					  connection.release();
					  callback(200, null, resultJson);
					  return;
					}
				  }
				);
			  }
			  else {
				resultJson =
				  '{"replyCode":"error","replyMsg":"The old password seems to be incorrect","cmd":"changePassword"}\n';
				connection.release();
				callback(200, null, resultJson);
				return;
			  }
			} else {
			  resultJson =
				'{"replyCode":"error","replyMsg":"The old password seems to be incorrect","cmd":"changePassword"}\n';
			  connection.release();
			  callback(200, null, resultJson);
			  return;
			}
		  }
		}
	  );
	});
}

function country_list(userdata, pool, callback) {
	var resultJson = '';

	var keyword = '';
	var Keyconditoin = '';

	if (typeof userdata.keyword != 'undefined' && userdata.keyword != '') {
		keyword = userdata.keyword;
	}

	pool.getConnection(function (err, connection) {
		if (keyword != '') {
			Keyconditoin += ' AND countries.name LIKE  "%' + keyword + '%"';
		}

		detailsquery='SELECT countries.* from countries where countries.id !="0" '+Keyconditoin+" ORDER BY countries.name ASC";
		console.log('detailsquery', detailsquery);
		connection.query(detailsquery, function (errSelDetails, resSelDetails) {
			if (errSelDetails) {
				resultJson =
					'{"replyCode":"error","replyMsg":"' + errSelDetails.message + '","cmd":"countries"}\n';
				connection.release();
				callback(200, null, resultJson);
				return;
			} else {
				resultJson =
					'{"replyCode":"success","replyMsg":"Details found successfully .","data":' +
					JSON.stringify(resSelDetails) +
					',"cmd":"countries"}\n';
				console.log('res-suceess');
				connection.release();
				callback(200, null, resultJson);
				return;
			}
		});
	});
}

function state_list(userdata, pool, callback) {
	var resultJson = '';

	var keyword = '';
	var country_id = '0';
	var Keyconditoin = '';

	if (typeof userdata.keyword != 'undefined' && userdata.keyword != '') {
		keyword = userdata.keyword;
	}
	if (typeof userdata.country_id != 'undefined' && userdata.country_id != '') {
		country_id = userdata.country_id;
	}

	pool.getConnection(function (err, connection) {
		if (keyword != '') {
			Keyconditoin += ' AND states.name LIKE  "%' + keyword + '%"';
		}
		if (country_id != '') {
			Keyconditoin += ' AND states.country_id ="' + country_id + '"';
		}

		detailsquery='SELECT states.* from states where states.id !="0" '+Keyconditoin+" ORDER BY states.name ASC";
		console.log('detailsquery', detailsquery);
		connection.query(detailsquery, function (errSelDetails, resSelDetails) {
			if (errSelDetails) {
				resultJson =
					'{"replyCode":"error","replyMsg":"' + errSelDetails.message + '","cmd":"state_list"}\n';
				connection.release();
				callback(200, null, resultJson);
				return;
			} else {
				resultJson =
					'{"replyCode":"success","replyMsg":"Details found successfully .","data":' +
					JSON.stringify(resSelDetails) +
					',"cmd":"state_list"}\n';
				console.log('res-suceess');
				connection.release();
				callback(200, null, resultJson);
				return;
			}
		});
	});
}


function city_list(userdata, pool, callback) {
	var resultJson = '';

	var keyword = '';
	var state_id = '0';
	var Keyconditoin = '';

	if (typeof userdata.keyword != 'undefined' && userdata.keyword != '') {
		keyword = userdata.keyword;
	}
	if (typeof userdata.state_id != 'undefined' && userdata.state_id != '') {
		state_id = userdata.state_id;
	}

	pool.getConnection(function (err, connection) {
		if (keyword != '') {
			Keyconditoin += ' AND cities.name LIKE  "%' + keyword + '%"';
		}
		if (state_id != '') {
			Keyconditoin += ' AND cities.state_id ="' + state_id + '"';
		}

		detailsquery='SELECT cities.* from cities where cities.id !="0" '+Keyconditoin+" ORDER BY cities.name ASC";
		console.log('detailsquery', detailsquery);
		connection.query(detailsquery, function (errSelDetails, resSelDetails) {
			if (errSelDetails) {
				resultJson='{"replyCode":"error","replyMsg":"'+errSelDetails.message+'","cmd":"city_list"}\n',connection.release(),callback(200,null,resultJson);
				return;
			} else {
				resultJson='{"replyCode":"success","replyMsg":"Details found successfully .","data":'+JSON.stringify(resSelDetails)+',"cmd":"city_list"}\n';
				console.log('res-suceess');
				connection.release();
				callback(200, null, resultJson);
				return;
			}
		});
	});
}


function update_profile_address(userdata, pool, callback){
	var resultJson = '';
	var strJson = '';
	var sha1 = require('sha1');
	var Hashids = require("hashids"), hashids = new Hashids(secretSalt);
	
	var user_id='';
	var address = '';
	var city = '';
	var pcode = '';
	var state= ''; 
	var country= '';
	var time_zone= '';
	

	if (typeof userdata.user_id != 'undefined' && userdata.user_id != '') {
		user_id = userdata.user_id;
	}
	
	if (typeof userdata.address != 'undefined' && userdata.address != '') {
		address = userdata.address;
	}
	
	if (typeof userdata.state != 'undefined' && userdata.state != '') {
		state = userdata.state;
	}
	if (typeof userdata.pcode != 'undefined' && userdata.pcode != '') {
		pcode = userdata.pcode;
	}
	
	if (typeof userdata.country != 'undefined' && userdata.country != '') {
		country = userdata.country;
	}
	
	if (typeof userdata.city != 'undefined' && userdata.city != '') {
		city = userdata.city;
	}
	if (typeof userdata.time_zone != 'undefined' && userdata.time_zone != '') {
		time_zone = userdata.time_zone;
	}
	
	/* ESTABLISH CONNECTION TO DATABASE */
	pool.getConnection(function (err, connection) {
		var queryinsert = 'UPDATE users SET address = "'+address+'",state="'+state+'",pcode="'+pcode+'",country="'+country+'",city="'+city+'",time_zone="'+time_zone+'" where id="'+user_id+'"';
								
		
		console.log(queryinsert);
		connection.query(queryinsert, function(errinsert, resultinsert){
			if(!errinsert){
				
				resultJson = '{"replyCode":"success","replyMsg":"Address updated successfully."}\n';
				connection.release();
				callback(200, null, resultJson);
				return;
			}else{
				
				resultJson = '{"replyCode":"error","replyMsg":"'+errinsert.message+'","cmd":"update_teacher_profile"}\n';
				console.log('res-suceess');
				connection.release();
				callback(400, null, resultJson);
				return;
			}
		});
	});
}

//add teacher qualification
function add_teacher_education(userdata, pool, callback) {
	var resultJson = '';
	var user_id = ''; 
	var university = '';
	var degree = '';
	var completion_year = '';
	var id = '';

	if (typeof userdata.id != 'undefined' && userdata.id != '') {
		id = userdata.id;
	}

	if (typeof userdata.university != 'undefined' && userdata.university != '') {
		university = userdata.university;
	}
	if (typeof userdata.user_id != 'undefined' && userdata.user_id != '') {
		user_id = userdata.user_id;
	}
	if (typeof userdata.degree != 'undefined' && userdata.degree != '') {
		degree = userdata.degree;
	}
	if (typeof userdata.completion_year != 'undefined' && userdata.completion_year != '') {
		completion_year = userdata.completion_year;
	}
	

	/* ESTABLISH CONNECTION TO DATABASE */
	pool.getConnection(function (err, connection) {
		if (id != '') {
			var queryinsert = 'UPDATE teacher_educations SET user_id="' + user_id + '",university="' + university + '",degree="'+degree+'",completion_year="'+completion_year+'" where teacher_educations.id="' + id + '"';
		} else {
			var queryinsert = 'INSERT INTO teacher_educations SET user_id="' + user_id + '",university="' + university + '",degree="'+degree+'",completion_year="'+completion_year+'"';
		}
		console.log(queryinsert);
		connection.query(queryinsert, function (errinsert, resultinsert) {
			if (!errinsert) {
				resultJson = '{"replyCode":"success","replyMsg":"Tutor education updated successfully","cmd":"Tutor education"}\n';
				connection.release();
				callback(200, null, resultJson);
				return;
			} else {
				resultJson = '{"replyCode":"error","replyMsg":"' + errinsert.message + '","cmd":"Tutor education"}\n';
				console.log('res-suceess');
				connection.release();
				callback(400, null, resultJson);
				return;
			}
		});
		
	});
}


//add teacher qualification
function update_teacher_bio(userdata, pool, callback) {
	var resultJson = '';
	var user_id = ''; 
	var qualification_certifications = ''; 
	var work_experience = '';
	var bio = '';
        var self_intro = '';
	var achievement = '';
	var languages = '';
	var Completed_l = '';
	var age_group_id='';
	var job_type='';
	var rate='';
	
	if (typeof userdata.work_experience != 'undefined' && userdata.work_experience != '') {
		work_experience = userdata.work_experience;
	}
		if (typeof userdata.age_group_id != 'undefined' && userdata.age_group_id != '') {
		age_group_id = userdata.age_group_id;
	}
	if (typeof userdata.job_type != 'undefined' && userdata.job_type != '') {
		job_type = userdata.job_type;
	}
	if (typeof userdata.rate != 'undefined' && userdata.rate != '') {
		rate = userdata.rate;
	}
	if (typeof userdata.user_id != 'undefined' && userdata.user_id != '') {
		user_id = userdata.user_id;
	}
	if (typeof userdata.bio != 'undefined' && userdata.bio != '') {
		bio = userdata.bio;
	}
	if (typeof userdata.self_intro != 'undefined' && userdata.self_intro != '') {
		self_intro = userdata.self_intro;
	}
	if (typeof userdata.achievement != 'undefined' && userdata.achievement != '') {
		achievement = userdata.achievement;
	}
	if (typeof userdata.Completed_l != 'undefined' && userdata.Completed_l != '') {
		Completed_l = userdata.Completed_l;
	}
	
	if (typeof userdata.languages != 'undefined' && userdata.languages != '') {
		languages = userdata.languages;
	}
	if (typeof userdata.qualification_certifications != 'undefined' && userdata.qualification_certifications != '') {
		qualification_certifications = userdata.qualification_certifications;
	}
		

	/* ESTABLISH CONNECTION TO DATABASE */
	pool.getConnection(function (err, connection) {
		var queryinsert = 'UPDATE users SET work_experience="' + work_experience + '",bio="'+bio+'",age_group_id="'+age_group_id+'",job_type="'+job_type+'",rate="'+rate+'",self_intro="'+self_intro+'",Completed_l="'+Completed_l+'",achievement="'+achievement+'",qualification_certifications="'+qualification_certifications+'",languages="'+languages+'" where users.id="' + user_id + '"';
		
		console.log(queryinsert);
		connection.query(queryinsert, function (errinsert, resultinsert) {
			if (!errinsert) {
				resultJson = '{"replyCode":"success","replyMsg":"Tutor details updated successfully","data":'+JSON.stringify(resultinsert) +',"cmd":"Tutor education"}\n';
				connection.release();
				callback(200, null, resultJson);
				return;
			} else {
				resultJson = '{"replyCode":"error","replyMsg":"' + errinsert.message + '","cmd":"Tutor details"}\n';
				console.log('res-suceess');
				connection.release();
				callback(400, null, resultJson);
				return;
			}
		});
		
	});
}
function update_teacher_bio1(userdata, pool, callback) {
	var resultJson = '';
	var user_id = ''; 
	var work_experience = '';
	var bio = '';
		var achievement = '';
	var qualification_certifications = ''; 
	var languages = '';
	var Completed_l = '';

        var self_intro = '';
	var age_group_id='';
	var job_type='';
	var rate='';
	
	if (typeof userdata.work_experience != 'undefined' && userdata.work_experience != '') {
		work_experience = userdata.work_experience;
	}
	


	if (typeof userdata.user_id != 'undefined' && userdata.user_id != '') {
		user_id = userdata.user_id;
	}
	if (typeof userdata.bio != 'undefined' && userdata.bio != '') {
		bio = userdata.bio;
	}
	
	if (typeof userdata.achievement != 'undefined' && userdata.achievement != '') {
		achievement = userdata.achievement;
	}
	if (typeof userdata.Completed_l != 'undefined' && userdata.Completed_l != '') {
		Completed_l = userdata.Completed_l;
	}
	
	if (typeof userdata.languages != 'undefined' && userdata.languages != '') {
		languages = userdata.languages;
	}
	if (typeof userdata.qualification_certifications != 'undefined' && userdata.qualification_certifications != '') {
		qualification_certifications = userdata.qualification_certifications;
	}
		

	/* ESTABLISH CONNECTION TO DATABASE */
	pool.getConnection(function (err, connection) {
		var queryinsert = 'UPDATE users SET work_experience="' + work_experience + '",bio="'+bio+'",Completed_l="'+Completed_l+'",achievement="'+achievement+'",qualification_certifications="'+qualification_certifications+'",languages="'+languages+'" where users.id="' + user_id + '"';
		
		console.log(queryinsert);
		connection.query(queryinsert, function (errinsert, resultinsert) {
			if (!errinsert) {
				resultJson = '{"replyCode":"success","replyMsg":"Tutor education updated successfully","data":'+JSON.stringify(resultinsert) +',"cmd":"Tutor education"}\n';
				connection.release();
				callback(200, null, resultJson);
				return;
			} else {
				resultJson = '{"replyCode":"error","replyMsg":"' + errinsert.message + '","cmd":"Tutor education"}\n';
				console.log('res-suceess');
				connection.release();
				callback(400, null, resultJson);
				return;
			}
		});
		
	});
}


//add teacher certificate
function add_teacher_certificate(userdata, pool, callback) {
	var resultJson = '';
	var user_id = ''; 
	var certificate_title = '';
	var completion_year = '';
	var id = '';

	if (typeof userdata.id != 'undefined' && userdata.id != '') {
		id = userdata.id;
	}

	if (typeof userdata.certificate_title != 'undefined' && userdata.certificate_title != '') {
		certificate_title = userdata.certificate_title;
	}
	if (typeof userdata.user_id != 'undefined' && userdata.user_id != '') {
		user_id = userdata.user_id;
	}
	
	if (typeof userdata.completion_year != 'undefined' && userdata.completion_year != '') {
		completion_year = userdata.completion_year;
	}
	

	/* ESTABLISH CONNECTION TO DATABASE */
	pool.getConnection(function (err, connection) {
		if (id != '') {
			var queryinsert = 'UPDATE teacher_certificates SET user_id="' + user_id + '",certificate_title="' + certificate_title + '",completion_year="'+completion_year+'" where teacher_certificates.id="' + id + '"';
		} else {
			var queryinsert = 'INSERT INTO teacher_certificates SET user_id="' + user_id + '",certificate_title="' + certificate_title + '",completion_year="'+completion_year+'"';
		}
		console.log(queryinsert);
		connection.query(queryinsert, function (errinsert, resultinsert) {
			if (!errinsert) {
				resultJson = '{"replyCode":"success","replyMsg":"Tutor certificate updated successfully","cmd":"Tutor certificate"}\n';
				connection.release();
				callback(200, null, resultJson);
				return;
			} else {
				resultJson = '{"replyCode":"error","replyMsg":"' + errinsert.message + '","cmd":"Tutor certificate"}\n';
				console.log('res-suceess');
				connection.release();
				callback(400, null, resultJson);
				return;
			}
		});
		
	});
}


//add bank details
function update_bank_details(userdata, pool, callback) {
	var resultJson = '';
	var user_id = ''; 
	var bank_acc_number = '';
	var bank_details = '';
	
	if (typeof userdata.bank_details != 'undefined' && userdata.bank_details != '') {
		bank_details = userdata.bank_details;
	}
	if (typeof userdata.bank_acc_number != 'undefined' && userdata.bank_acc_number != '') {
		bank_acc_number = userdata.bank_acc_number;
	}
	if (typeof userdata.user_id != 'undefined' && userdata.user_id != '') {
		user_id = userdata.user_id;
	}
	
	/* ESTABLISH CONNECTION TO DATABASE */
	pool.getConnection(function (err, connection) {
		var queryinsert = 'UPDATE users SET bank_details="' + bank_details + '",bank_acc_number="'+bank_acc_number+'" where users.id="' + user_id + '"';
		
		console.log(queryinsert);
		connection.query(queryinsert, function (errinsert, resultinsert) {
			if (!errinsert) {
				resultJson = '{"replyCode":"success","replyMsg":"Bank details updated successfully","cmd":"Bank details"}\n';
				connection.release();
				callback(200, null, resultJson);
				return;
			} else {
				resultJson = '{"replyCode":"error","replyMsg":"' + errinsert.message + '","cmd":"Bank details"}\n';
				console.log('res-suceess');
				connection.release();
				callback(400, null, resultJson);
				return;
			}
		});
		
	});
}

//add bank details
function update_verification_doc(userdata, pool, callback) {
	var resultJson = '';
	var user_id = ''; 
	var verification_doc = '';
	
	if (typeof userdata.verification_doc != 'undefined' && userdata.verification_doc != '') {
		verification_doc = userdata.verification_doc;
	}
	if (typeof userdata.user_id != 'undefined' && userdata.user_id != '') {
		user_id = userdata.user_id;
	}
	
	/* ESTABLISH CONNECTION TO DATABASE */
	pool.getConnection(function (err, connection) {
		var queryinsert = 'UPDATE users SET verification_doc="'+verification_doc+'" where users.id="' + user_id + '"';
		
		console.log(queryinsert);
		connection.query(queryinsert, function (errinsert, resultinsert) {
			if (!errinsert) {
				resultJson = '{"replyCode":"success","replyMsg":"Details updated successfully","cmd":"Bank details"}\n';
				connection.release();
				callback(200, null, resultJson);
				return;
			} else {
				resultJson = '{"replyCode":"error","replyMsg":"' + errinsert.message + '","cmd":"Bank details"}\n';
				console.log('res-suceess');
				connection.release();
				callback(400, null, resultJson);
				return;
			}
		});
		
	});
}


//add teacher subjects
function add_teacher_subjects(userdata, pool, callback) {
	var resultJson = '';
	var user_id = ''; 
	var category_id= '';
	var level = '';
	var hourly_rate = '';
	var profile_rate = '';
	var description = '';
	var id = '';

	if (typeof userdata.id != 'undefined' && userdata.id != '') {
		id = userdata.id;
	}

	if (typeof userdata.category_id!= 'undefined' && userdata.category_id!= '') {
		category_id= userdata.category_id
	}
	if (typeof userdata.user_id != 'undefined' && userdata.user_id != '') {
		user_id = userdata.user_id;
	}
	if (typeof userdata.level != 'undefined' && userdata.level != '') {
		level = userdata.level;
	}
	if (typeof userdata.hourly_rate != 'undefined' && userdata.hourly_rate != '') {
		hourly_rate = userdata.hourly_rate;
	}
	if (typeof userdata.profile_rate != 'undefined' && userdata.profile_rate != '') {
		profile_rate = userdata.profile_rate;
	}
	if (typeof userdata.description != 'undefined' && userdata.description != '') {
		description = userdata.description;
	}
	

	/* ESTABLISH CONNECTION TO DATABASE */
	pool.getConnection(function (err, connection) {
		if (id != '') {
			var queryinsert = 'UPDATE teacher_subjects SET user_id="' + user_id + '",category_id="' + category_id+ '",level="'+level+'",hourly_rate="'+hourly_rate+'",profile_rate="'+profile_rate+'",description="'+description+'" where teacher_subjects.id="' + id + '"';
		} else {
			var queryinsert = 'INSERT INTO teacher_subjects SET user_id="' + user_id + '",category_id="' + category_id+ '",level="'+level+'",hourly_rate="'+hourly_rate+'",profile_rate="'+profile_rate+'",description="'+description+'"';
		}
		console.log(queryinsert);
		connection.query(queryinsert, function (errinsert, resultinsert) {
			if (!errinsert) {
				resultJson = '{"replyCode":"success","replyMsg":"Tutor subjects updated successfully","cmd":"Tutor subjects"}\n';
				connection.release();
				callback(200, null, resultJson);
				return;
			} else {
				resultJson = '{"replyCode":"error","replyMsg":"' + errinsert.message + '","cmd":"Tutor subjects"}\n';
				console.log('res-suceess');
				connection.release();
				callback(400, null, resultJson);
				return;
			}
		});
		
	});
}
//09-04-2023
// function student_quiz_uploaded(userdata, pool, callback) {
// 	var resultJson = '';
// 	var answer_doc = ''; 
//     var teacher_id='';
// 	var student_id='';
// 	var quiz_id='';
// 	var quiz_title='';
// 	var category_id='';
// 	var upload_date='';
	 

	

// 	if (typeof userdata.category_id!= 'undefined' && userdata.category_id!= '') {
// 		category_id= userdata.category_id
// 	}
// 	if (typeof userdata.answer_doc != 'undefined' && userdata.answer_doc != '') {
// 		answer_doc = userdata.answer_doc;
// 	}
// 	if (typeof userdata.teacher_id != 'undefined' && userdata.teacher_id != '') {
// 		teacher_id = userdata.teacher_id;
// 	}
// 	if (typeof userdata.student_id != 'undefined' && userdata.student_id != '') {
// 		student_id = userdata.student_id;
// 	}
// 	if (typeof userdata.quiz_id != 'undefined' && userdata.quiz_id != '') {
// 		quiz_id = userdata.quiz_id;
// 	}
// 	if (typeof userdata.quiz_title != 'undefined' && userdata.quiz_title != '') {
// 		quiz_title = userdata.quiz_title;
// 	}
// 	if (typeof userdata.upload_date != 'undefined' && userdata.upload_date != '') {
// 		upload_date = userdata.upload_date;
// 	}
	

// 	/* ESTABLISH CONNECTION TO DATABASE */
// 	pool.getConnection(function (err, connection) {
		
// 			var queryinsert = 'INSERT INTO student_quizzes SET category_id="' + category_id + '",answer_doc="' + answer_doc+ '",teacher_id="'+teacher_id+'",student_id="'+student_id+'",quiz_id="'+quiz_id+'",quiz_title="'+quiz_title+'",upload_date="' + upload_date+ '"';
		
// 		console.log(queryinsert);
// 		connection.query(queryinsert, function (errinsert, resultinsert) {
// 			if (!errinsert) {
// 				resultJson = '{"replyCode":"success","replyMsg":"Answer sheet uploaded successfully","cmd":"Student Quiz Uploaded"}\n';
// 				connection.release();
// 				callback(200, null, resultJson);
// 				return;
// 			} else {
// 				resultJson = '{"replyCode":"error","replyMsg":"' + errinsert.message + '","cmd":"Student Quiz Uploaded"}\n';
// 				console.log('res-suceess');
// 				connection.release();
// 				callback(400, null, resultJson);
// 				return;
// 			}
// 		});
		
// 	});
// }
function student_quiz_uploaded(userdata, pool, callback) {
	var resultJson = '';
	var answer_doc = ''; 
    var teacher_id='';
	var student_id='';
	var quiz_id='';
	var quiz_title='';
	var category_id='';
	var upload_date='';
	var student_name=''; 

	

	if (typeof userdata.category_id!= 'undefined' && userdata.category_id!= '') {
		category_id= userdata.category_id
	}
	if (typeof userdata.student_name!= 'undefined' && userdata.student_name!= '') {
		student_name= userdata.student_name
	}
	if (typeof userdata.answer_doc != 'undefined' && userdata.answer_doc != '') {
		answer_doc = userdata.answer_doc;
	}
	if (typeof userdata.teacher_id != 'undefined' && userdata.teacher_id != '') {
		teacher_id = userdata.teacher_id;
	}
	if (typeof userdata.student_id != 'undefined' && userdata.student_id != '') {
		student_id = userdata.student_id;
	}
	if (typeof userdata.quiz_id != 'undefined' && userdata.quiz_id != '') {
		quiz_id = userdata.quiz_id;
	}
	if (typeof userdata.quiz_title != 'undefined' && userdata.quiz_title != '') {
		quiz_title = userdata.quiz_title;
	}
	if (typeof userdata.upload_date != 'undefined' && userdata.upload_date != '') {
		upload_date = userdata.upload_date;
	}
	

	/* ESTABLISH CONNECTION TO DATABASE */
	pool.getConnection(function (err, connection) {
		
			var queryinsert = 'INSERT INTO student_quizzes SET category_id="' + category_id + '",answer_doc="' + answer_doc+ '",student_name="' + student_name+ '",teacher_id="'+teacher_id+'",student_id="'+student_id+'",quiz_id="'+quiz_id+'",quiz_title="'+quiz_title+'",upload_date="' + upload_date+ '"';
			var queryinsert11 = 'select * from student_quizzes where student_id="'+student_id+'" AND quiz_id="'+quiz_id+'"';
			connection.query(queryinsert11, function (errinsert, resultinsert) {
		if(!resultinsert.length){
		console.log(queryinsert);
		connection.query(queryinsert, function (errinsert, resultinsert) {
			if (!errinsert) {
				resultJson = '{"replyCode":"success","replyMsg":"Answer sheet uploaded successfully","cmd":"Student Quiz Uploaded"}\n';
				connection.release();
				callback(200, null, resultJson);
				return;
			} else {
				resultJson = '{"replyCode":"error","replyMsg":"' + errinsert.message + '","cmd":"Student Quiz Uploaded"}\n';
				console.log('res-suceess');
				connection.release();
				callback(400, null, resultJson);
				return;
			}
		});
	}
	else{
		resultJson = '{"replyCode":"success","replyMsg":"Quiz allready Uploaded"}\n';
				console.log('res-suceess');
				connection.release();
				callback(200, null, resultJson);
				return;
	}
		});
		
	});
}



/*teacher subjects details*/
function teacher_subjects_list(userdata, pool, callback) {
	var resultJson = '';
	var user_id = '';

	if (typeof userdata.user_id != 'undefined' && userdata.user_id != '') {
		user_id = userdata.user_id;
	}

	console.log('----------');
	console.log(userdata);

	pool.getConnection(function (err, connection) {
	  var Catquery = 'SELECT teacher_subjects.*,age_group.title as level_name,categories.name as subject_name FROM teacher_subjects  LEFT JOIN categories as categories ON categories.id = teacher_subjects.category_id LEFT JOIN age_group as age_group ON age_group.id = teacher_subjects.level WHERE teacher_subjects.user_id="' + user_id + '"';

// 	var Catquery = 'SELECT teacher_subjects.*,categories.name as subject_name FROM teacher_subjects  LEFT JOIN categories as categories ON categories.id = teacher_subjects.category_id WHERE teacher_subjects.user_id="' + user_id + '"';
		console.log('qq', Catquery);
		connection.query(Catquery, function (errinsert, resultinsert) {
			if (!errinsert) {
				resultJson =
					'{"replyCode":"success","replyMsg":"teacher_subjects details","data":' +
					JSON.stringify(resultinsert) +
					'}\n';
				connection.release();
				callback(200, null, resultJson);
				return;
			} else {
				resultJson = '{"replyCode":"error","replyMsg":"' + errinsert.message + '","cmd":"teacher_subjects"}\n';
				connection.release();
				callback(200, null, resultJson);
				return;
			}
		});
	});
}


/* Teachers details */
function teacher_details(userdata, pool, callback) {
	var Hashids = require("hashids"), hashids = new Hashids(secretSalt);
	
	var resultJson = '';
	var Cquery = '';
	var student_id = '';
	var user_id = '';

	if (typeof userdata.student_id != 'undefined' && userdata.student_id != '') {
		student_id = userdata.student_id;
	}
	if (typeof userdata.user_id != 'undefined' && userdata.user_id != '') {
		user_id = userdata.user_id;
	}

	pool.getConnection(function (err, connection) {
// 		Cquery = 'SELECT users.*,countries.name as country_name,states.name as state_name,cities.name as city_name,(SELECT count(*) from user_favourites WHERE user_favourites.user_id="'+student_id+'" AND user_favourites.teacher_id=users.id) as favourite FROM users LEFT JOIN countries as countries ON countries.id = users.country LEFT JOIN states as states ON states.id = users.state LEFT JOIN cities as cities ON cities.id = users.city  WHERE users.id = "' + user_id + '"';
// 		Cquery = 'SELECT users.*,(AVG (teacher_review_rating.rating)) from teacher_review_rating WHERE teacher_review_rating.teacher_id=users.id) as avg_rating,countries.name as country_name,states.name as state_name,cities.name as city_name,(SELECT count(*) from user_favourites WHERE user_favourites.user_id="'+student_id+'" AND user_favourites.teacher_id=users.id) as favourite FROM users LEFT JOIN countries as countries ON countries.id = users.country LEFT JOIN states as states ON states.id = users.state LEFT JOIN cities as cities ON cities.id = users.city  WHERE users.id = "' + user_id + '"';
		Cquery = 'SELECT users.*,(SELECT ROUND(AVG (teacher_review_rating.rating)) from teacher_review_rating WHERE teacher_review_rating.teacher_id=users.id ) as avg_rating,countries.name as country_name,states.name as state_name,cities.name as city_name,(SELECT count(*) from user_favourites WHERE user_favourites.user_id="'+student_id+'" AND user_favourites.teacher_id=users.id) as favourite FROM users LEFT JOIN countries as countries ON countries.id = users.country LEFT JOIN states as states ON states.id = users.state LEFT JOIN cities as cities ON cities.id = users.city  WHERE users.id = "' + user_id + '"';

		console.log(Cquery);
		connection.query(Cquery, function (err, ordData) {
			if (err) {
				resultJson = '{"replyCode":"error","replyMsg":"' + err.message + '","cmd":"teacher details"}\n';
				connection.release();
				callback(200, null, resultJson);
				return;
			} else {
				connection.query('SELECT  teacher_certificates.*  from teacher_certificates WHERE  teacher_certificates.user_id = "' + user_id + '"', function (errD, TData) {
					if (errD) {
						resultJson = '{"replyCode":"error","replyMsg":"' + errD.message + '","cmd":"teacher details"}\n';
						connection.release();
						callback(200, null, resultJson);
						return;
					} else {
						connection.query('SELECT  teacher_educations.* from teacher_educations WHERE  teacher_educations.user_id = "' + user_id + '"', function (errEdu, EDTData) {
							if (errEdu) {
								resultJson = '{"replyCode":"error","replyMsg":"' + errEdu.message + '","cmd":"teacher details"}\n';
								connection.release();
								callback(200, null, resultJson);
								return;
							} else {
							
								connection.query('SELECT  reviews.*,users.name,users.image from reviews LEFT JOIN users as users ON users.id = reviews.student_id WHERE reviews.teacher_id = "' + user_id + '" AND reviews.status !="2"', function (errRev, ReviewData) {
									if (errRev) {
										resultJson = '{"replyCode":"error","replyMsg":"' + errRev.message + '","cmd":"teacher details"}\n';
										connection.release();
										callback(200, null, resultJson);
										return;
									} else {
										var Catquerys = 'SELECT teacher_subjects.*,age_group.title as level_name,categories.name as subject_name FROM teacher_subjects  LEFT JOIN categories as categories ON categories.id = teacher_subjects.category_id LEFT JOIN age_group as age_group ON age_group.id = teacher_subjects.level WHERE teacher_subjects.user_id="' + user_id + '"';
										connection.query(Catquerys, function (errSb, sbData) {
											if (errSb) {
												resultJson = '{"replyCode":"error","replyMsg":"' + errSb.message + '","cmd":"teacher details"}\n';
												connection.release();
												callback(200, null, resultJson);
												return;
											} else {
												if(TData.length>0){
													ordData[0].certificates=TData;
												}else{
													ordData[0].certificates=[];
												}
												if(EDTData.length>0){
													ordData[0].educations=EDTData;
												}else{
													ordData[0].educations=[];
												}
												if(ReviewData.length>0){
													ordData[0].reviews=ReviewData;
												}else{
													ordData[0].reviews=[];
												}
												if(sbData.length>0){
													ordData[0].subjects=sbData;
												}else{
													ordData[0].subjects=[];
												}
						
												var sid = hashids.encode(ordData[0].id);
												resultJson='{"replyCode":"success","replyMsg":"Teacher Details","data":'+JSON.stringify(ordData[0])+',"sid":"'+sid+'","cmd":"teacher details"}\n';
												console.log('res-suceess');
												connection.release();
												callback(200, null, resultJson);
												return;
											}
										})
									}
								})
							}
						})
					}
				})
			}
		});
	});
}



// teacher week days list

function teacher_schedule_days_list(userdata, pool, callback){
	var resultJson = '';
	var Hashids = require("hashids"), hashids = new Hashids(secretSalt);
	var user_id ='';//
	
	var Cquery = '';
	var res ='';

	if (typeof userdata.user_id != 'undefined' && userdata.user_id != '') {
		user_id = userdata.user_id;
	}
	var ToDate = new Date();
	var Curdate=ToDate.getFullYear()+"-"+parseInt(ToDate.getMonth()+1)+"-"+ToDate.getDate();
	var CurTime=ToDate.getHours()+":"+ToDate.getMinutes()+":"+ToDate.getSeconds();
	console.log('Curdate--',Curdate)
	pool.getConnection(function (err, connection) {
		var teacher_id = user_id;
		
		Cquery='SELECT user_time_schedule.* from user_time_schedule WHERE user_time_schedule.status != "2" AND user_time_schedule.teacher_id="'+teacher_id+'" AND schedule_date >="'+Curdate+'"  ORDER BY `id` DESC limit 7';
			
		console.log(Cquery);
		connection.query(Cquery, function(err, resPro){
			if(err){
				resultJson = '{"replyCode":"error","replyMsg":"'+err.message+'","cmd":"teacher_schedule_days_list"}\n';
				connection.release();
				callback(200, null, resultJson);
				return;
			}else{

				if(resPro.length >0){
					var i = 0;
					async.eachSeries(resPro,function(rec2, loop2){
						var schedule_id = rec2.id;
						console.log('schedule_id',schedule_id);
						Cquery='SELECT user_time_schedule_slots.* from user_time_schedule_slots WHERE user_time_schedule_slots.status != "2" AND user_time_schedule_slots.teacher_id="'+teacher_id+'" AND user_time_schedule_slots.schedule_id="'+schedule_id+'"';
						console.log('Cquery',Cquery);
						connection.query(Cquery, function(errSelpiMG,respROiMG){
							if(errSelpiMG){
								console.log('errSelpiMG',errSelpiMG);
								loop2();
							}else{
								resPro[i].slots=respROiMG;
								loop2();
							}
							i=i+1;
						});
					},function(errSelPro){
						if(errSelPro){
							console.log('errSelPro',errSelPro);
							resultJson = '{"replyCode":"error","replyMsg":"'+errSelPro.message+'","cmd":"teacher_schedule_days_list"}\n';
							connection.release();
							callback(200, null, resultJson);
							return;
						}else{
							resultJson = '{"replyCode":"success","replyMsg":"Details found successfully .","data":'+JSON.stringify(resPro)+',"cmd":"teacher_schedule_days_list"}\n';
							console.log('res-suceess');
							connection.release();
							callback(200, null, resultJson);
							return;
						}
					});
				}else{
					resultJson = '{"replyCode":"success","replyMsg":"No Record found.","data":[], "cmd":"teacher_schedule_days_list"}\n';
					console.log('res-suceess');
					connection.release();
					callback(200, null, resultJson);
					return;
				}
			}
		})
	});
}

function teacher_schedule_slots_list(userdata, pool, callback){
	var resultJson = '';
	var Hashids = require("hashids"), hashids = new Hashids(secretSalt);
	var user_id ='';//
	var schedule_id='';
	var Cquery = '';
	var res ='';

	if (typeof userdata.user_id != 'undefined' && userdata.user_id != '') {
		user_id = userdata.user_id;
	}

	if (typeof userdata.schedule_id != 'undefined' && userdata.schedule_id != '') {
		schedule_id = userdata.schedule_id;
	}
	var ToDate = new Date();
	var Curdate=ToDate.getFullYear()+"-"+parseInt(ToDate.getMonth()+1)+"-"+ToDate.getDate();
	var CurTime=ToDate.getHours()+":"+ToDate.getMinutes()+":"+ToDate.getSeconds();
	console.log('Curdate--',Curdate)
	pool.getConnection(function (err, connection) {
		var teacher_id = user_id;
		
		Cquery='SELECT user_time_schedule_slots.* from user_time_schedule_slots WHERE user_time_schedule_slots.status != "2" AND user_time_schedule_slots.teacher_id="'+teacher_id+'" AND user_time_schedule_slots.schedule_id="'+schedule_id+'"';
			
		console.log(Cquery);
		connection.query(Cquery, function(err, ordData){
			if(err){
				resultJson = '{"replyCode":"error","replyMsg":"'+err.message+'","cmd":"teacher_schedule_slots_list"}\n';
				connection.release();
				callback(200, null, resultJson);
				return;
			}else{
				if(ordData.length>0){
					res =ordData;
				}else{
					res	=[];
				}						
				resultJson = '{"replyCode":"success","replyMsg":"slots list","data":'+JSON.stringify(res)+',"cmd":"teacher_schedule_slots_list"}\n';
				console.log('res-suceess');
				connection.release();
				callback(200, null, resultJson);
				return;	
			}
		})
	});
}

//update schedule day
function update_schedule_day_status(userdata, pool, callback){
	var resultJson = '';
	var strJson = '';
	
	var Cquery = '';
	var id = '';
	var available =''; //0-no,1-yes
	
	if (typeof userdata.id != 'undefined' && userdata.id != '') {
		id =userdata.id;
	}
	if (typeof userdata.available != 'undefined' && userdata.available != '') {
		available = userdata.available;
	}
	pool.getConnection(function (err, connection) {
		
		squery ='UPDATE user_time_schedule SET available = "'+available+'" WHERE id = "'+id+'"';
		connection.query(squery, function(errselect, resultselect){
			if(!errselect){
				console.log(resultselect);
				resultJson = '{"replyCode":"success","replyMsg":"Record status updated successfully","cmd":"user_time_schedule"}\n';
				connection.release();
				callback(200, null, resultJson);
				return;
			}else{
				resultJson = '{"replyCode":"error","replyMsg":"'+errselect.message+'","cmd":"user_time_schedule"}\n';
				connection.release();
				callback(200, null, resultJson);
				return;
			}
		});
	});	
}

// update schedule slot
function update_schedule_slot_status(userdata, pool, callback){
	var resultJson = '';
	var strJson = '';
	
	var Cquery = '';
	var id = '';
	var available =''; //0-no,1-yes
	
	if (typeof userdata.id != 'undefined' && userdata.id != '') {
		id =userdata.id;
	}
	if (typeof userdata.available != 'undefined' && userdata.available != '') {
		available = userdata.available;
	}
	pool.getConnection(function (err, connection) {
		Cquery='SELECT user_time_schedule_slots.* from user_time_schedule_slots WHERE  user_time_schedule_slots.id="'+id+'"';
			
		console.log(Cquery);
		connection.query(Cquery, function(err, ordData){
			if(err){
				resultJson = '{"replyCode":"error","replyMsg":"'+err.message+'","cmd":"teacher_schedule_slots_list"}\n';
				connection.release();
				callback(200, null, resultJson);
				return;
			}else{
				if(ordData[0].class_id !="" && ordData[0].class_id !=null){
					resultJson = '{"replyCode":"error","replyMsg":" you can not change status for this slot","cmd":"update_schedule_slot_status"}\n';
					connection.release();
					callback(200, null, resultJson);
					return;
				}else{
					squery ='UPDATE user_time_schedule_slots SET available = "'+available+'",mark_availability = "'+available+'" WHERE id = "'+id+'"';
					connection.query(squery, function(errselect, resultselect){
						if(!errselect){
							console.log(resultselect);
							resultJson = '{"replyCode":"success","replyMsg":"Record status updated successfully","cmd":"update_schedule_slot_status"}\n';
							connection.release();
							callback(200, null, resultJson);
							return;
						}else{
							resultJson = '{"replyCode":"error","replyMsg":"'+errselect.message+'","cmd":"update_schedule_slot_status"}\n';
							connection.release();
							callback(200, null, resultJson);
							return;
						}
					});
				}
			}
		})
		
	});	
}



// book slot
function book_slot_student(userdata, pool, callback){
	var resultJson = '';
	var Cquery = '';
	var res ='';
	var sha1 = require('sha1');
	var Hashids = require("hashids"), hashids = new Hashids(secretSalt);
	var sid = '';
	var rate = '';

	var teacher_id = '';
	var slot_id = '';
	var level_id = '';
	var schedule_slot_date = '';
	var parents_name = 'Parent';
	var student_name = '';
	var schedule_slot_time = '';
	var phone = '';
	var subject_id = '';
	var tution_for = '';
	var tution_frequency = '';
var class_type = '';
	console.log(userdata,'asdfa');
	// return userdata;
	if (typeof userdata.class_type != 'undefined' && userdata.class_type != '') {
		class_type = userdata.class_type;
	}
	
	if (typeof userdata.sid != 'undefined' && userdata.sid != '') {
		sid = userdata.sid;
	}
	if (typeof userdata.rate != 'undefined' && userdata.rate != '') {
		rate = userdata.rate;
	}
	if (typeof userdata.teacher_id != 'undefined' && userdata.teacher_id != '') {
		teacher_id = userdata.teacher_id;
	}
	if (typeof userdata.slot_id != 'undefined' && userdata.slot_id != '') {
		slot_id = userdata.slot_id;
	}
	if (typeof userdata.level_id != 'undefined' && userdata.level_id != '') {
		level_id = userdata.level_id;
	}
	if (typeof userdata.schedule_slot_date != 'undefined' && userdata.schedule_slot_date != '') {
		schedule_slot_date = userdata.schedule_slot_date;
	}
	if (typeof userdata.parents_name != 'undefined' && userdata.parents_name != '') {
		parents_name = userdata.parents_name;
	}
	if (typeof userdata.student_name != 'undefined' && userdata.student_name != '') {
		student_name = userdata.student_name;
	}
	if (typeof userdata.schedule_slot_time != 'undefined' && userdata.schedule_slot_time != '') {
		schedule_slot_time = userdata.schedule_slot_time;
	}
	if (typeof userdata.phone != 'undefined' && userdata.phone != '') {
		phone = userdata.phone;
	}
	if (typeof userdata.subject_id != 'undefined' && userdata.subject_id != '') {
		subject_id = userdata.subject_id;
	}
	if (typeof userdata.tution_for != 'undefined' && userdata.tution_for != '') {
		tution_for = userdata.tution_for;
	}
	if (typeof userdata.tution_frequency != 'undefined' && userdata.tution_frequency != '') {
		tution_frequency = userdata.tution_frequency;
	}

	pool.getConnection(function (err, connection) {
		var student_id=hashids.decode(sid);
		

Cquery='SELECT user_time_schedule_slots.* FROM user_time_schedule_slots WHERE user_time_schedule_slots.holiday = "0" AND user_time_schedule_slots.available="1" AND user_time_schedule_slots.teacher_id="'+teacher_id+'" AND user_time_schedule_slots.id="'+slot_id+'"';
		console.log(Cquery);
		connection.query(Cquery, function(err, ordData){
			if(err){

				resultJson = '{"replyCode":"error","replyMsg":"'+err.message+'","cmd":"book_slot_student"}\n';
				connection.release();
				callback(200, null, resultJson);
				return;

			}else{
				if(ordData.length > 0){
					squery ='INSERT INTO student_booked_classes SET teacher_id = "'+teacher_id+'",student_id="'+student_id+'",class_type="'+class_type+'",slot_id="'+slot_id+'",level_id="'+level_id+'",schedule_slot_date="'+schedule_slot_date+'",subject_id="'+subject_id+'",rate="'+rate+'",tution_for="'+tution_for+'",tution_frequency="'+tution_frequency+'",status="1",created=NOW()';
					connection.query(squery, function(errselect, resultselect){
						if(!errselect){
							console.log(resultselect);
							var booked_class_id = resultselect.insertId;
							if(class_type==1){
							Bookquery ='UPDATE user_time_schedule_slots SET available = "0",class_id="'+booked_class_id+'",type="1",status="1" WHERE id="'+slot_id+'"';
							connection.query(Bookquery);}

							// resultJson = '{"replyCode":"success","replyMsg":"Slot booked successfully","cmd":"book_slot_student","data":'+JSON.stringify(booked_class_id)+'}\n';
							// connection.release();
							// callback(200, null, resultJson);
							// return;

							connection.query('SELECT * from student_booked_classes where id = "' + booked_class_id + '" ',
								function (errUser, resultsUser) {
									if (!errUser) {
									resultJson =
									'{"replyCode":"success","replyMsg":"Class booked successfully","data":'+JSON.stringify(resultsUser[0])+',"booked_class_id":"'+booked_class_id+'"}\n';
									connection.release();
									callback(200, null, resultJson);
									return;
									}else{
									resultJson =
										'{"replyCode":"error","replyMsg":"' +
										errUser.message +
										'","cmd":"book class"}\n';
									connection.release();
									callback(200, null, resultJson);
									return;
									}
							})
						
						}else{
							resultJson = '{"replyCode":"error","replyMsg":"'+errselect.message+'","cmd":"book_slot_student"}\n';
							connection.release();
							callback(200, null, resultJson);
							return;
						}
					});
				}else{
					resultJson = '{"replyCode":"error","replyMsg":"Slot is not available , Please select other","cmd":"book_slot_student"}\n';
					connection.release();
					callback(200, null, resultJson);
					return;
				}
				
			}
		})
	});
}

// chapter booking details

function slot_booking_details(userdata, pool, callback){
	var sha1 = require('sha1');
	var Hashids = require("hashids"), hashids = new Hashids(secretSalt);
	var sid = '';
	var resultJson = '';
	
	var booked_class_id='';	
	
	if (typeof userdata.sid != 'undefined' && userdata.sid != '') {
		sid = userdata.sid;
	}
	
	if (typeof userdata.booked_class_id != 'undefined' && userdata.booked_class_id != '') {
		booked_class_id = userdata.booked_class_id;
	}
	
	pool.getConnection(function (err, connection) {
		var student_id=hashids.decode(sid);
		
		detailsquery = 'SELECT student_booked_classes.*,user_time_schedule_slots.time_from,user_time_schedule_slots.time_to,course_chapters.chapter_title,course_chapters.chapter_description,teacher.name as teacher_name,teacher.id as teacher_id,student.name as student_name,student.id as student_id,student.phone as student_phone,student.parents_name,student.parents_name as school_name from student_booked_classes as student_booked_classes LEFT JOIN users as student ON student.id = student_booked_classes.student_id LEFT JOIN users as teacher ON teacher.id = student_booked_classes.teacher_id  LEFT JOIN course_chapters as course_chapters ON course_chapters.id = student_booked_classes.chapter_id LEFT JOIN user_time_schedule_slots as user_time_schedule_slots ON user_time_schedule_slots.id = student_booked_classes.slot_id where student_booked_classes.id ="'+booked_class_id+'" ';
		console.log('detailsquery',detailsquery);
		connection.query(detailsquery, function(errSelDetails,resSelDetails){
			if(errSelDetails){
				resultJson = '{"replyCode":"error","replyMsg":"'+errSelDetails.message+'","cmd":"courses_list"}\n';
				connection.release();
				callback(200, null, resultJson);
				return;
			}else{
				resultJson = '{"replyCode":"success","replyMsg":"Details found successfully .","data":'+JSON.stringify(resSelDetails)+',"cmd":"courses_list"}\n';
				console.log('res-suceess');
				connection.release();
				callback(200, null, resultJson);
				return;
			}
		});
	});
}


// cancle slot booking

function cancle_slot_booking(userdata, pool, callback){
	var resultJson = '';
	var strJson = '';
	var Hashids = require("hashids"), hashids = new Hashids(secretSalt);
	var Cquery = '';
	var booked_class_id = '';
	var slot_id = '';
	var teacher_id = '';
	var schedule_date = '';
	var time_from = '';
	var student_id = '';
	var reason = '';
	
	if (typeof userdata.student_id != 'undefined' && userdata.student_id != '') {
		student_id =userdata.student_id;
	}
	if (typeof userdata.booked_class_id != 'undefined' && userdata.booked_class_id != '') {
		booked_class_id =userdata.booked_class_id;
	}
	if (typeof userdata.slot_id != 'undefined' && userdata.slot_id != '') {
		slot_id =userdata.slot_id;
	}
	if (typeof userdata.teacher_id != 'undefined' && userdata.teacher_id != '') {
		teacher_id = userdata.teacher_id;
	}
	if (typeof userdata.schedule_date != 'undefined' && userdata.schedule_date != '') {
		schedule_date = userdata.schedule_date;
	}
	if (typeof userdata.time_from != 'undefined' && userdata.time_from != '') {
		time_from = userdata.time_from;
	}
	if (typeof userdata.reason != 'undefined' && userdata.reason != '') {
		reason = userdata.reason;
	}
	//   HTTP Method: DELETE
    //   Endpoint: https://class1.meritgraph.com/v1/{CLIENT_ID}/{CLASS_ID}
    //   Content Type: application/json
    //   Header: "Authorization": Bearer {AccessToken}
	var header = {
		'Authorization': userdata.access_token,
		'content-type': 'application/json'
	}
	console.log(userdata,'userdata.access');
	request.delete(
		{
			url:'https://class1.meritgraph.com/v1/ca2h72lonhcgtq9dq6s0/'+userdata.classId,
			headers: header
		},
		
			function(error, response, body){
				console.log(response.body.message,'response');
	if(response.body.message=='success'){
	pool.getConnection(function (err, connection) {
		var ToDate = new Date();
		var Curdate=ToDate.getFullYear()+"-"+parseInt(ToDate.getMonth()+1)+"-"+ToDate.getDate();
		var CurTime=ToDate.getHours()+":"+ToDate.getMinutes()+":"+ToDate.getSeconds();
		console.log('Curdate--',Curdate)
		console.log('curdate',Curdate+' '+CurTime);
		console.log('curdate',schedule_date+' '+time_from);
		var cdate = Curdate+' '+CurTime;
		var sdate = schedule_date+' '+time_from;
		var date1 = new Date(cdate); 
		var date2 = new Date(sdate); 
		var timeDiff = Math.abs(date2.getTime() - date1.getTime()); 
		var HoursDiif = Math.ceil(timeDiff / (1000 * 3600)); 
		console.log('timeDiff',timeDiff);
		console.log('HoursDiif',HoursDiif);
		if(HoursDiif>=24){
			console.log('HoursDiif---',HoursDiif);
			squery ='UPDATE student_booked_classes SET status = "3",canceled_by="'+student_id+'",reason="'+reason+'" WHERE id = "'+booked_class_id+'"';
			connection.query(squery, function(errselect, resultselect){
				if(!errselect){
					sLotquery ='UPDATE user_time_schedule_slots SET available = "1",class_id = NULL WHERE id = "'+slot_id+'"';
					console.log(sLotquery);
					connection.query(sLotquery);
					resultJson = '{"replyCode":"success","replyMsg":"Class canceled successfully","cmd":"cancle_slot_booking"}\n';
					connection.release();
					callback(200, null, resultJson);
					return;
				}else{
					resultJson = '{"replyCode":"error","replyMsg":"'+errselect.message+'","cmd":"cancle_slot_booking"}\n';
					connection.release();
					callback(200, null, resultJson);
					return;
				}
			});
		}else{
			resultJson = '{"replyCode":"error","replyMsg":"Sorry you can not cancle this class now.","cmd":"cancle_slot_booking"}\n';
			connection.release();
			callback(200, null, resultJson);
			return;
		}
	});	
}
else{
	resultJson = '{"replyCode":"error","replyMsg":"Sorry you can not cancle this class now.","cmd":"cancle_slot_booking"}\n';
			callback(200, null, resultJson);
			return;
}
}
)
}


// teacher classes list
function referral_list(userdata, pool, callback){
	var id = '';
	var status = '';
	console.log(userdata,'referd');
	if (typeof userdata.user_id != 'undefined' && userdata.user_id != '') {
		id = userdata.user_id;
	}
	// if (typeof userdata.status != 'undefined' && userdata.status != '') {
	// 	status = userdata.status;
	// }
	
	pool.getConnection(function (err, connection) {
		Uquery = 'SELECT * FROM users where reId="'+ id+'"';
		connection.query(Uquery, function (errinsert,resultselect) {
			console.log(resultselect[0],'resultselect[]');
			if (!errinsert) {
				resultJson = '{"replyCode":"success","replyMsg":"Status chenged Successfully","data":'+JSON.stringify(resultselect)+',"cmd":"projectss"}';
				connection.release();
				callback(200, null, resultJson);
				return;
			} else {
				resultJson = '{"replyCode":"error","replyMsg":"' + errinsert.message + '","cmd":"projectss"}\n';
				connection.release();
				callback(200, null, resultJson);
				return;
			}
		});
	});

}

//09-04-2023
// function teacher_classes_list(userdata, pool, callback){
// 	var sha1 = require('sha1');
// 	var Hashids = require("hashids"), hashids = new Hashids(secretSalt);
// 	var sid = '';
// 	var Keyconditoin = '';
// 	var keyword = '';
// 	var learning = '';
// 	var start = '0';
// 	var limit = '';
// 	var resultJson = '';
// 	var status = '';

	
// 	if (typeof userdata.sid != 'undefined' && userdata.sid != '') {
// 		sid = userdata.sid;
// 	}
// 	if (typeof userdata.status != 'undefined' && userdata.status != '') {
// 		status = userdata.status;
// 	}
// 	console.log(userdata.start,'userdata');
// 	pool.getConnection(function (err, connection) {
// 		var teacher_id=hashids.decode(sid);
// 		var Student_id=hashids.decode(sid);
// 		if (keyword != '') {
// 			Keyconditoin += ' AND users.name LIKE  "%' + keyword + '%"';
// 		}
// 		if (typeof userdata.start != 'undefined' && userdata.start != '') {
// 			start = userdata.start;
// 		}
// 		if (typeof userdata.limit != 'undefined' && userdata.limit != '') {
// 			limit = userdata.limit;
// 		}

// 		detailsquery = 'SELECT student_booked_classes.*,student_booked_classes.id as booked_class_id,user_time_schedule_slots.time_from,student_booked_classes.class_type as class_type,(SELECT demo_class_payout from demo_class_settings where id="2") as demo_class_payout,(SELECT paid_class_payout from demo_class_settings where id="2") as paid_class_payout,user_time_schedule_slots.time_to,course_chapters.chapter_title,course_chapters.chapter_description,teacher.name as teacher_name,teacher.id as teacher_id,student.name as student_name,student.id as student_id,student.phone as student_phone,student.parents_name,student.parents_name as school_name from student_booked_classes as student_booked_classes LEFT JOIN users as student ON student.id = student_booked_classes.student_id LEFT JOIN users as teacher ON teacher.id = student_booked_classes.teacher_id  LEFT JOIN course_chapters as course_chapters ON course_chapters.id = student_booked_classes.chapter_id LEFT JOIN user_time_schedule_slots as user_time_schedule_slots ON user_time_schedule_slots.id = student_booked_classes.slot_id where student_booked_classes.teacher_id ="'+teacher_id+'" OR student_booked_classes.student_id ="'+Student_id+'" GROUP BY booked_class_id DESC LIMIT '+start+', '+limit+' ';//user_time_schedule_slots.type as class_type
// 		console.log('detailsquery',detailsquery);
// 		connection.query(detailsquery, function(errSelDetails,resSelDetails){
// 			if(errSelDetails){
// 				resultJson = '{"replyCode":"error","replyMsg":"'+errSelDetails.message+'","cmd":"courses_list"}\n';
// 				connection.release();
// 				callback(200, null, resultJson);
// 				return;
// 			}else{
// 				console.log('resSelDetails',resSelDetails);
// 				var i = 0;
// 				async.eachSeries(resSelDetails,function(rec2, loop2){
// 					var ToDate = new Date();
// 					var weekday=new Array("Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday");
// 					//var tday = weekday[ToDate.getDay()];
// 					var Curdate =ToDate.getFullYear()+"-"+ parseInt(ToDate.getMonth()+1)+"-"+ ToDate.getDate();
// 					var CurTime = ToDate.getHours() + ":" + ToDate.getMinutes() +":" + ToDate.getSeconds();

// 					console.log('-CurTime-',CurTime);
// 					console.log(Curdate+'-'+CurTime);

// 					var dt = new Date();

// 					dt.setMinutes( dt.getMinutes() - 15 );
// 					var ButtonShowTime = dt.getHours() + ":" + dt.getMinutes()+":" + ToDate.getSeconds();
// 					console.log('ButtonShowTime',ButtonShowTime);
// 					var slot_id = rec2.slot_id;
// 					console.log('slot_id',slot_id);
// 					console.log('ButtonShowTime',ButtonShowTime);
// 					squery='SELECT SUBTIME(user_time_schedule_slots.time_from, "00:15:00") as button_show,user_time_schedule_slots.time_from,user_time_schedule_slots.time_to,(SELECT COUNT(user_time_schedule_slots.id) FROM user_time_schedule_slots WHERE user_time_schedule_slots.id = '+slot_id+' AND (SELECT SUBTIME(user_time_schedule_slots.time_from, "00:15:00")) <="'+CurTime+'" AND user_time_schedule_slots.time_to >="'+CurTime+'") as show_button FROM user_time_schedule_slots WHERE user_time_schedule_slots.id = '+slot_id+'';
// 					console.log('squery-time-slot',squery);
// 					connection.query(squery, function(errContent,resContent){
// 						if(errContent){
// 							console.log('errSelpiMG',errContent);
							
// 							loop2();
// 						}else{
// 							if(resContent.length>0){
// 								resSelDetails[i].time_slots=resContent[0];
// 							}else{
// 								resSelDetails[i].time_slots=[];
// 							}
// 							loop2();
// 						}
// 						i=i+1;
// 					});
					
// 				},function(errinsertDet){
// 					if(errinsertDet){
// 						resultJson = '{"replyCode":"error","replyMsg":"'+errinsertDet.message+'","cmd":"mark_chapter_complete"}\n';
// 						connection.release();
// 						callback(200, null, resultJson);
// 						return;
// 					}else{
// 						resultJson = '{"replyCode":"success","replyMsg":"student lessons list","data":'+JSON.stringify(resSelDetails)+',"cmd":"student_lessons_list"}\n';
// 						console.log('res-suceess');
// 						connection.release();
// 						callback(200, null, resultJson);
// 						return;	
						
// 					}
// 				});
// 			}
// 		});
// 	});
// }



//teachers slots
// function teacher_classes_list(userdata, pool, callback){
// 	var sha1 = require('sha1');
// 	var Hashids = require("hashids"), hashids = new Hashids(secretSalt);
// 	var sid = '';
// 	var Keyconditoin = '';
// 	var keyword = '';
// 	var learning = '';
// 	var start = '0';
// 	var limit = '';
// 	var resultJson = '';
// 	var status = '';
// 	var start_date='';
// 	var end_date='';
// 	var start_time='';
// 	var end_time='';
// 	var limitStr='';

// 	if (typeof userdata.start_time != "undefined" && userdata.start_time != "") {
// 	  start_time = userdata.start_time;
// 	}
// 	if (typeof userdata.end_time != "undefined" && userdata.end_time != "") {
// 	  end_time = userdata.end_time;
// 	}
	
// 	if (typeof userdata.start_date != "undefined" && userdata.start_date != "") {
// 	  start_date = userdata.start_date;
// 	}
	
// 	if (typeof userdata.end_date != "undefined" && userdata.end_date != "") {
// 	  end_date = userdata.end_date;
// 	}
	
// 	if (typeof userdata.sid != 'undefined' && userdata.sid != '') {
// 		sid = userdata.sid;
// 	}
// 	if (typeof userdata.status != 'undefined' && userdata.status != '') {
// 		status = userdata.status;
// 	}
// 	console.log(userdata.start,'userdata');
// 	pool.getConnection(function (err, connection) {
			
// 		// var teacher_id=hashids.decode(sid);
// 		var Student_id=hashids.decode(sid);
// 		// if (Student_id != '') {
// 		// 	Keyconditoin += ' student_booked_classes.teacher_id ="'+Student_id+'" OR student_booked_classes.student_id ="'+Student_id+'"';
// 		// }
// 		if (keyword != '') {
// 			Keyconditoin += ' AND users.name LIKE  "%' + keyword + '%"';
// 		}
// 		if (typeof userdata.start != 'undefined' && userdata.start != '') {
// 			start = userdata.start;
// 		}
// 		if (typeof userdata.limit != 'undefined' && userdata.limit != '') {
// 			limit = userdata.limit;
// 		}
// 			if(limit !=''){
// 			limitStr='LIMIT '+start+', '+limit+'';
// 		}
// 		if(start_date !='' && end_date !="" && start_time!='' && end_time!='')
// 		{
// 		 Keyconditoin += ' AND student_booked_classes.schedule_slot_date  BETWEEN "'+start_date+'" AND "'+end_date+'"  AND user_time_schedule_slots.time_from BETWEEN "'+start_time+'" AND "'+end_time+'"';
//         }
// 		if(start_date !='' && end_date !="" && start_time=='' && end_time=='')
// 		{
// 		 Keyconditoin += 'AND student_booked_classes.schedule_slot_date BETWEEN "'+start_date+'" AND "'+end_date+'"';
//         }
// 		if(start_date !='' && end_date =="" && start_time!='' && end_time!='')
// 		{
// 		 Keyconditoin += ' AND student_booked_classes.schedule_slot_date  >= "'+start_date+'"  AND user_time_schedule_slots.time_from BETWEEN "'+start_time+'" AND "'+end_time+'"';
//         }
// 		if(start_date =='' && end_date !="" && start_time!='' && end_time!='')
// 		{
// 		 Keyconditoin += ' AND student_booked_classes.schedule_slot_date  <="'+end_date+'"  AND user_time_schedule_slots.time_from BETWEEN "'+start_time+'" AND "'+end_time+'"';
//         }
// 		if(start_date !='' && end_date =="" && start_time!='' && end_time!='')
// 		{
// 		 Keyconditoin += ' AND student_booked_classes.schedule_slot_date  >="'+start_date+'"  AND user_time_schedule_slots.time_from BETWEEN "'+start_time+'" AND "'+end_time+'"';
//         }
// 		if(start_date =='' && end_date !="" && start_time=='' && end_time=='')
// 		{
// 		 Keyconditoin += ' AND student_booked_classes.schedule_slot_date  <="'+end_date+'" ';
//         }
// 		if(start_date !='' && end_date =="" && start_time=='' && end_time=='')
// 		{
// 		 Keyconditoin += 'AND student_booked_classes.schedule_slot_date  >="'+start_date+'"  ';
//         }


// 		detailsquery = 'SELECT student_booked_classes.*,student_booked_classes.id as booked_class_id,user_time_schedule_slots.time_from,student_booked_classes.class_type as class_type,(SELECT demo_class_payout from demo_class_settings where id="2") as demo_class_payout,(SELECT paid_class_payout from demo_class_settings where id="2") as paid_class_payout,user_time_schedule_slots.time_to,course_chapters.chapter_title,course_chapters.chapter_description,teacher.name as teacher_name,teacher.id as teacher_id,student.name as student_name,student.id as student_id,student.phone as student_phone,student.parents_name,student.parents_name as school_name from student_booked_classes as student_booked_classes LEFT JOIN users as student ON student.id = student_booked_classes.student_id LEFT JOIN users as teacher ON teacher.id = student_booked_classes.teacher_id  LEFT JOIN course_chapters as course_chapters ON course_chapters.id = student_booked_classes.chapter_id LEFT JOIN user_time_schedule_slots as user_time_schedule_slots ON user_time_schedule_slots.id = student_booked_classes.slot_id where  student_booked_classes.teacher_id ="'+Student_id+'"   '+Keyconditoin+' LIMIT '+start+', '+limit+'';//user_time_schedule_slots.type as class_type
// 		console.log('detailsquery',detailsquery);
// 		connection.query(detailsquery, function(errSelDetails,resSelDetails){
// 			if(errSelDetails){
// 				resultJson = '{"replyCode":"error","replyMsg":"'+errSelDetails.message+'","cmd":"courses_list"}\n';
// 				connection.release();
// 				callback(200, null, resultJson);
// 				return;
// 			}else{
				
				
// 						resultJson = '{"replyCode":"success","replyMsg":"student lessons list","data":'+JSON.stringify(resSelDetails)+',"cmd":"student_lessons_list"}\n';
// 						console.log('res-suceess');
// 						connection.release();
// 						callback(200, null, resultJson);
// 						return;	
						
// 					}
				
			
// 		});
// 	});
// }
//09-04-2023
function teacher_classes_list(userdata, pool, callback){
	var sha1 = require('sha1');
	var Hashids = require("hashids"), hashids = new Hashids(secretSalt);
	var sid = '';
	var Keyconditoin = '';
	var keyword = '';
	var learning = '';
	var start = '0';
	var limit = '';
	var resultJson = '';
	var status = '';
	var start_date='';
	var end_date='';
	var start_time='';
	var end_time='';
	var limitStr='';
	var name=''

	if (typeof userdata.start_time != "undefined" && userdata.start_time != "") {
	  start_time = userdata.start_time;
	}
	if (typeof userdata.end_time != "undefined" && userdata.end_time != "") {
	  end_time = userdata.end_time;
	}
	
	if (typeof userdata.start_date != "undefined" && userdata.start_date != "") {
	  start_date = userdata.start_date;
	}
	
	if (typeof userdata.end_date != "undefined" && userdata.end_date != "") {
	  end_date = userdata.end_date;
	}
	
	if (typeof userdata.sid != 'undefined' && userdata.sid != '') {
		sid = userdata.sid;
	}
	if (typeof userdata.status != 'undefined' && userdata.status != '') {
		status = userdata.status;
	}
	if (typeof userdata.name != 'undefined' && userdata.name != '') {
		name = userdata.name;
	}
	console.log(userdata.start,'userdata');
	pool.getConnection(function (err, connection) {
			
		// var teacher_id=hashids.decode(sid);
		var Student_id=hashids.decode(sid);
		// if (Student_id != '') {
		// 	Keyconditoin += ' student_booked_classes.teacher_id ="'+Student_id+'" OR student_booked_classes.student_id ="'+Student_id+'"';
		// }
		if (name != '') {
			Keyconditoin += ' AND teacher.name LIKE  "%' + name + '%"';
		}
		if (typeof userdata.start != 'undefined' && userdata.start != '') {
			start = userdata.start;
		}
		if (typeof userdata.limit != 'undefined' && userdata.limit != '') {
			limit = userdata.limit;
		}
		if(limit !=''){
			limitStr='LIMIT '+start+', '+limit+'';
		}
		if(start_date !='' && end_date !="" && start_time!='' && end_time!='')
		{
		 Keyconditoin += ' AND schedule_slot_date  BETWEEN "'+start_date+'" AND "'+end_date+'"  AND user_time_schedule_slots.time_from BETWEEN "'+start_time+'" AND "'+end_time+'"';
        }
		if(start_date !='' && end_date !="" && start_time=='' && end_time=='')
		{
		 Keyconditoin += 'AND schedule_slot_date BETWEEN "'+start_date+'" AND "'+end_date+'"';
        }
		if(start_date !='' && end_date =="" && start_time!='' && end_time!='')
		{
		 Keyconditoin += ' AND schedule_slot_date  >= "'+start_date+'"  AND user_time_schedule_slots.time_from BETWEEN "'+start_time+'" AND "'+end_time+'"';
        }
		if(start_date =='' && end_date !="" && start_time!='' && end_time!='')
		{
		 Keyconditoin += ' AND schedule_slot_date  <="'+end_date+'"  AND user_time_schedule_slots.time_from BETWEEN "'+start_time+'" AND "'+end_time+'"';
        }
		if(start_date !='' && end_date =="" && start_time!='' && end_time!='')
		{
		 Keyconditoin += ' AND schedule_slot_date  >="'+start_date+'"  AND user_time_schedule_slots.time_from BETWEEN "'+start_time+'" AND "'+end_time+'"';
        }
		if(start_date =='' && end_date !="" && start_time=='' && end_time=='')
		{
		 Keyconditoin += ' AND schedule_slot_date  <="'+end_date+'" ';
        }
		if(start_date !='' && end_date =="" && start_time=='' && end_time=='')
		{
		 Keyconditoin += 'AND schedule_slot_date  >="'+start_date+'"  ';
        }

		detailsquery1 = 'SELECT student_booked_classes.*,student_booked_classes.id as booked_class_id,user_time_schedule_slots.time_from,student_booked_classes.class_type as class_type,(SELECT demo_class_payout from demo_class_settings where id="2") as demo_class_payout,(SELECT paid_class_payout from demo_class_settings where id="2") as paid_class_payout,user_time_schedule_slots.time_to,course_chapters.chapter_title,course_chapters.chapter_description,teacher.name as teacher_name,teacher.id as teacher_id,student.name as student_name,student.id as student_id,student.phone as student_phone,student.parents_name,student.parents_name as school_name from student_booked_classes as student_booked_classes LEFT JOIN users as student ON student.id = student_booked_classes.student_id LEFT JOIN users as teacher ON teacher.id = student_booked_classes.teacher_id  LEFT JOIN course_chapters as course_chapters ON course_chapters.id = student_booked_classes.chapter_id LEFT JOIN user_time_schedule_slots as user_time_schedule_slots ON user_time_schedule_slots.id = student_booked_classes.slot_id where  student_booked_classes.teacher_id ="'+Student_id+'"   '+Keyconditoin+' ';//user_time_schedule_slots.type as class_type
		detailsquery = 'SELECT student_booked_classes.*,student_booked_classes.id as booked_class_id,user_time_schedule_slots.time_from,student_booked_classes.class_type as class_type,(SELECT demo_class_payout from demo_class_settings where id="2") as demo_class_payout,(SELECT paid_class_payout from demo_class_settings where id="2") as paid_class_payout,user_time_schedule_slots.time_to,course_chapters.chapter_title,course_chapters.chapter_description,teacher.name as teacher_name,teacher.id as teacher_id,student.name as student_name,student.id as student_id,student.phone as student_phone,student.parents_name,student.parents_name as school_name from student_booked_classes as student_booked_classes LEFT JOIN users as student ON student.id = student_booked_classes.student_id LEFT JOIN users as teacher ON teacher.id = student_booked_classes.teacher_id  LEFT JOIN course_chapters as course_chapters ON course_chapters.id = student_booked_classes.chapter_id LEFT JOIN user_time_schedule_slots as user_time_schedule_slots ON user_time_schedule_slots.id = student_booked_classes.slot_id where  student_booked_classes.teacher_id ="'+Student_id+'"   '+Keyconditoin+' '+limitStr+'';//user_time_schedule_slots.type as class_type
		console.log('detailsquery123',detailsquery.count);
		connection.query(detailsquery1, function(errSelDetails1,resSelDetails1){
			console.log(resSelDetails1?.length,'xxx');
		connection.query(detailsquery, function(errSelDetails,resSelDetails){
			if(errSelDetails){
				resultJson = '{"replyCode":"error","replyMsg":"'+errSelDetails.message+'","cmd":"courses_list"}\n';
				connection.release();
				callback(200, null, resultJson);
				return;
			}else{
				
				
						resultJson = '{"replyCode":"success","replyMsg":"student lessons list","data":'+JSON.stringify(resSelDetails)+',"total_count":'+JSON.stringify(resSelDetails1.length)+',"cmd":"student_lessons_list"}\n';
						console.log('res-suceess');
						connection.release();
						callback(200, null, resultJson);
						return;	
						
					}
				
			
		});
		
		});
	});
}
function students_classes_list(userdata, pool, callback){
	var sha1 = require('sha1');
	var Hashids = require("hashids"), hashids = new Hashids(secretSalt);
	var sid = '';
	var Keyconditoin = '';
	var keyword = '';
	var learning = '';
	var start = '0';
	var limit = '';
	var resultJson = '';
	var status = '';
	var start_date='';
	var end_date='';
	var start_time='';
	var end_time='';
	var limitStr='';
	var name=''

	if (typeof userdata.start_time != "undefined" && userdata.start_time != "") {
	  start_time = userdata.start_time;
	}
	if (typeof userdata.end_time != "undefined" && userdata.end_time != "") {
	  end_time = userdata.end_time;
	}
	
	if (typeof userdata.start_date != "undefined" && userdata.start_date != "") {
	  start_date = userdata.start_date;
	}
	
	if (typeof userdata.end_date != "undefined" && userdata.end_date != "") {
	  end_date = userdata.end_date;
	}
	
	if (typeof userdata.sid != 'undefined' && userdata.sid != '') {
		sid = userdata.sid;
	}
	if (typeof userdata.status != 'undefined' && userdata.status != '') {
		status = userdata.status;
	}
	if (typeof userdata.name != 'undefined' && userdata.name != '') {
		name = userdata.name;
	}
	console.log(userdata.start,'userdata');
	pool.getConnection(function (err, connection) {
			
		// var teacher_id=hashids.decode(sid);
		var Student_id=hashids.decode(sid);
		// if (Student_id != '') {
		// 	Keyconditoin += ' student_booked_classes.teacher_id ="'+Student_id+'" OR student_booked_classes.student_id ="'+Student_id+'"';
		// }
		if (name != '') {
			Keyconditoin += ' AND teacher.name LIKE  "%' + name + '%"';
		}
		if (typeof userdata.start != 'undefined' && userdata.start != '') {
			start = userdata.start;
		}
		if (typeof userdata.limit != 'undefined' && userdata.limit != '') {
			limit = userdata.limit;
		}
		if(limit !=''){
			limitStr='LIMIT '+start+', '+limit+'';
		}
		if(start_date !='' && end_date !="" && start_time!='' && end_time!='')
		{
		 Keyconditoin += ' AND student_booked_classes.schedule_slot_date  BETWEEN "'+start_date+'" AND "'+end_date+'"  AND user_time_schedule_slots.time_from BETWEEN "'+start_time+'" AND "'+end_time+'"';
        }
		if(start_date !='' && end_date !="" && start_time=='' && end_time=='')
		{
		 Keyconditoin += 'AND student_booked_classes.schedule_slot_date BETWEEN "'+start_date+'" AND "'+end_date+'"';
        }
		if(start_date !='' && end_date =="" && start_time!='' && end_time!='')
		{
		 Keyconditoin += ' AND student_booked_classes.schedule_slot_date  >= "'+start_date+'"  AND user_time_schedule_slots.time_from BETWEEN "'+start_time+'" AND "'+end_time+'"';
        }
		if(start_date =='' && end_date !="" && start_time!='' && end_time!='')
		{
		 Keyconditoin += ' AND student_booked_classes.schedule_slot_date  <="'+end_date+'"  AND user_time_schedule_slots.time_from BETWEEN "'+start_time+'" AND "'+end_time+'"';
        }
		if(start_date !='' && end_date =="" && start_time!='' && end_time!='')
		{
		 Keyconditoin += ' AND student_booked_classes.schedule_slot_date  >="'+start_date+'"  AND user_time_schedule_slots.time_from BETWEEN "'+start_time+'" AND "'+end_time+'"';
        }
		if(start_date =='' && end_date !="" && start_time=='' && end_time=='')
		{
		 Keyconditoin += ' AND student_booked_classes.schedule_slot_date  <="'+end_date+'" ';
        }
		if(start_date !='' && end_date =="" && start_time=='' && end_time=='')
		{
		 Keyconditoin += 'AND student_booked_classes.schedule_slot_date  >="'+start_date+'"  ';
        }

		detailsquery1 = 'SELECT student_booked_classes.*,student_booked_classes.id as booked_class_id,user_time_schedule_slots.time_from,student_booked_classes.class_type as class_type,(SELECT demo_class_payout from demo_class_settings where id="2") as demo_class_payout,(SELECT paid_class_payout from demo_class_settings where id="2") as paid_class_payout,user_time_schedule_slots.time_to,course_chapters.chapter_title,course_chapters.chapter_description,teacher.name as teacher_name,teacher.id as teacher_id,student.name as student_name,student.id as student_id,student.phone as student_phone,student.parents_name,student.parents_name as school_name from student_booked_classes as student_booked_classes LEFT JOIN users as student ON student.id = student_booked_classes.student_id LEFT JOIN users as teacher ON teacher.id = student_booked_classes.teacher_id  LEFT JOIN course_chapters as course_chapters ON course_chapters.id = student_booked_classes.chapter_id LEFT JOIN user_time_schedule_slots as user_time_schedule_slots ON user_time_schedule_slots.id = student_booked_classes.slot_id where  student_booked_classes.student_id ="'+Student_id+'"   '+Keyconditoin+' ';//user_time_schedule_slots.type as class_type
		detailsquery = 'SELECT student_booked_classes.*,student_booked_classes.id as booked_class_id,user_time_schedule_slots.time_from,student_booked_classes.class_type as class_type,(SELECT demo_class_payout from demo_class_settings where id="2") as demo_class_payout,(SELECT paid_class_payout from demo_class_settings where id="2") as paid_class_payout,user_time_schedule_slots.time_to,course_chapters.chapter_title,course_chapters.chapter_description,teacher.name as teacher_name,teacher.id as teacher_id,student.name as student_name,student.id as student_id,student.phone as student_phone,student.parents_name,student.parents_name as school_name from student_booked_classes as student_booked_classes LEFT JOIN users as student ON student.id = student_booked_classes.student_id LEFT JOIN users as teacher ON teacher.id = student_booked_classes.teacher_id  LEFT JOIN course_chapters as course_chapters ON course_chapters.id = student_booked_classes.chapter_id LEFT JOIN user_time_schedule_slots as user_time_schedule_slots ON user_time_schedule_slots.id = student_booked_classes.slot_id where  student_booked_classes.student_id ="'+Student_id+'"   '+Keyconditoin+' '+limitStr+'';//user_time_schedule_slots.type as class_type
		console.log('detailsquery123',detailsquery.count);
		connection.query(detailsquery1, function(errSelDetails1,resSelDetails1){
			console.log(resSelDetails1?.length,'xxx');
		connection.query(detailsquery, function(errSelDetails,resSelDetails){
			if(errSelDetails){
				resultJson = '{"replyCode":"error","replyMsg":"'+errSelDetails.message+'","cmd":"courses_list"}\n';
				connection.release();
				callback(200, null, resultJson);
				return;
			}else{
				
				
						resultJson = '{"replyCode":"success","replyMsg":"student lessons list","data":'+JSON.stringify(resSelDetails)+',"total_count":'+JSON.stringify(resSelDetails1.length)+',"cmd":"student_lessons_list"}\n';
						console.log('res-suceess');
						connection.release();
						callback(200, null, resultJson);
						return;	
						
					}
				
			
		});
		
		});
	});
}
function students_classes_list_complete(userdata, pool, callback){
	var sha1 = require('sha1');
	var Hashids = require("hashids"), hashids = new Hashids(secretSalt);
	var sid = '';
	var Keyconditoin = '';
	var keyword = '';
	var learning = '';
	var start = '0';
	var limit = '';
	var resultJson = '';
	var status = '';
	var start_date='';
	var end_date='';
	var start_time='';
	var end_time='';
	var limitStr='';
	var name=''

	if (typeof userdata.start_time != "undefined" && userdata.start_time != "") {
	  start_time = userdata.start_time;
	}
	if (typeof userdata.end_time != "undefined" && userdata.end_time != "") {
	  end_time = userdata.end_time;
	}
	
	if (typeof userdata.start_date != "undefined" && userdata.start_date != "") {
	  start_date = userdata.start_date;
	}
	
	if (typeof userdata.end_date != "undefined" && userdata.end_date != "") {
	  end_date = userdata.end_date;
	}
	
	if (typeof userdata.sid != 'undefined' && userdata.sid != '') {
		sid = userdata.sid;
	}
	if (typeof userdata.status != 'undefined' && userdata.status != '') {
		status = userdata.status;
	}
	if (typeof userdata.name != 'undefined' && userdata.name != '') {
		name = userdata.name;
	}
	console.log(userdata.start,'userdata');
	pool.getConnection(function (err, connection) {
			
		// var teacher_id=hashids.decode(sid);
		var Student_id=hashids.decode(sid);
		// if (Student_id != '') {
		// 	Keyconditoin += ' student_booked_classes.teacher_id ="'+Student_id+'" OR student_booked_classes.student_id ="'+Student_id+'"';
		// }
		if (name != '') {
			Keyconditoin += ' AND teacher.name LIKE  "%' + name + '%"';
		}
		if (typeof userdata.start != 'undefined' && userdata.start != '') {
			start = userdata.start;
		}
		if (typeof userdata.limit != 'undefined' && userdata.limit != '') {
			limit = userdata.limit;
		}
		if(limit !=''){
			limitStr='LIMIT '+start+', '+limit+'';
		}
		if(start_date !='' && end_date !="" && start_time!='' && end_time!='')
		{
		 Keyconditoin += ' AND student_booked_classes.schedule_slot_date  BETWEEN "'+start_date+'" AND "'+end_date+'"  AND user_time_schedule_slots.time_from BETWEEN "'+start_time+'" AND "'+end_time+'"';
        }
		if(start_date !='' && end_date !="" && start_time=='' && end_time=='')
		{
		 Keyconditoin += 'AND student_booked_classes.schedule_slot_date BETWEEN "'+start_date+'" AND "'+end_date+'"';
        }
		if(start_date !='' && end_date =="" && start_time!='' && end_time!='')
		{
		 Keyconditoin += ' AND student_booked_classes.schedule_slot_date  >= "'+start_date+'"  AND user_time_schedule_slots.time_from BETWEEN "'+start_time+'" AND "'+end_time+'"';
        }
		if(start_date =='' && end_date !="" && start_time!='' && end_time!='')
		{
		 Keyconditoin += ' AND student_booked_classes.schedule_slot_date  <="'+end_date+'"  AND user_time_schedule_slots.time_from BETWEEN "'+start_time+'" AND "'+end_time+'"';
        }
		if(start_date !='' && end_date =="" && start_time!='' && end_time!='')
		{
		 Keyconditoin += ' AND student_booked_classes.schedule_slot_date  >="'+start_date+'"  AND user_time_schedule_slots.time_from BETWEEN "'+start_time+'" AND "'+end_time+'"';
        }
		if(start_date =='' && end_date !="" && start_time=='' && end_time=='')
		{
		 Keyconditoin += ' AND student_booked_classes.schedule_slot_date  <="'+end_date+'" ';
        }
		if(start_date !='' && end_date =="" && start_time=='' && end_time=='')
		{
		 Keyconditoin += 'AND student_booked_classes.schedule_slot_date  >="'+start_date+'"  ';
        }

		detailsquery1 = 'SELECT student_booked_classes.*,student_booked_classes.id as booked_class_id,user_time_schedule_slots.time_from,student_booked_classes.class_type as class_type,(SELECT demo_class_payout from demo_class_settings where id="2") as demo_class_payout,(SELECT paid_class_payout from demo_class_settings where id="2") as paid_class_payout,user_time_schedule_slots.time_to,course_chapters.chapter_title,course_chapters.chapter_description,teacher.name as teacher_name,teacher.id as teacher_id,student.name as student_name,student.id as student_id,student.phone as student_phone,student.parents_name,student.parents_name as school_name from student_booked_classes as student_booked_classes LEFT JOIN users as student ON student.id = student_booked_classes.student_id LEFT JOIN users as teacher ON teacher.id = student_booked_classes.teacher_id  LEFT JOIN course_chapters as course_chapters ON course_chapters.id = student_booked_classes.chapter_id LEFT JOIN user_time_schedule_slots as user_time_schedule_slots ON user_time_schedule_slots.id = student_booked_classes.slot_id where student_booked_classes.status =2 AND student_booked_classes.student_id ="'+Student_id+'"   '+Keyconditoin+' ';//user_time_schedule_slots.type as class_type
		detailsquery = 'SELECT student_booked_classes.*,student_booked_classes.id as booked_class_id,user_time_schedule_slots.time_from,student_booked_classes.class_type as class_type,(SELECT demo_class_payout from demo_class_settings where id="2") as demo_class_payout,(SELECT paid_class_payout from demo_class_settings where id="2") as paid_class_payout,user_time_schedule_slots.time_to,course_chapters.chapter_title,course_chapters.chapter_description,teacher.name as teacher_name,teacher.id as teacher_id,student.name as student_name,student.id as student_id,student.phone as student_phone,student.parents_name,student.parents_name as school_name from student_booked_classes as student_booked_classes LEFT JOIN users as student ON student.id = student_booked_classes.student_id LEFT JOIN users as teacher ON teacher.id = student_booked_classes.teacher_id  LEFT JOIN course_chapters as course_chapters ON course_chapters.id = student_booked_classes.chapter_id LEFT JOIN user_time_schedule_slots as user_time_schedule_slots ON user_time_schedule_slots.id = student_booked_classes.slot_id where student_booked_classes.status =2 AND student_booked_classes.student_id ="'+Student_id+'"   '+Keyconditoin+' '+limitStr+'';//user_time_schedule_slots.type as class_type
		console.log('detailsquery123',detailsquery.count);
		connection.query(detailsquery1, function(errSelDetails1,resSelDetails1){
			console.log(resSelDetails1?.length,'xxx');
		connection.query(detailsquery, function(errSelDetails,resSelDetails){
			if(errSelDetails){
				resultJson = '{"replyCode":"error","replyMsg":"'+errSelDetails.message+'","cmd":"courses_list"}\n';
				connection.release();
				callback(200, null, resultJson);
				return;
			}else{
				
				
						resultJson = '{"replyCode":"success","replyMsg":"student lessons list","data":'+JSON.stringify(resSelDetails)+',"total_count":'+JSON.stringify(resSelDetails1.length)+',"cmd":"student_lessons_list"}\n';
						console.log('res-suceess');
						connection.release();
						callback(200, null, resultJson);
						return;	
						
					}
				
			
		});
		
		});
	});
}
function students_classes_list_upcoming(userdata, pool, callback){
	var sha1 = require('sha1');
	var Hashids = require("hashids"), hashids = new Hashids(secretSalt);
	var sid = '';
	var Keyconditoin = '';
	var keyword = '';
	var learning = '';
	var start = '0';
	var limit = '';
	var resultJson = '';
	var status = '';
	var start_date='';
	var end_date='';
	var start_time='';
	var end_time='';
	var limitStr='';
	var name=''

	if (typeof userdata.start_time != "undefined" && userdata.start_time != "") {
	  start_time = userdata.start_time;
	}
	if (typeof userdata.end_time != "undefined" && userdata.end_time != "") {
	  end_time = userdata.end_time;
	}
	
	if (typeof userdata.start_date != "undefined" && userdata.start_date != "") {
	  start_date = userdata.start_date;
	}
	
	if (typeof userdata.end_date != "undefined" && userdata.end_date != "") {
	  end_date = userdata.end_date;
	}
	
	if (typeof userdata.sid != 'undefined' && userdata.sid != '') {
		sid = userdata.sid;
	}
	if (typeof userdata.status != 'undefined' && userdata.status != '') {
		status = userdata.status;
	}
	if (typeof userdata.name != 'undefined' && userdata.name != '') {
		name = userdata.name;
	}
	console.log(userdata.start,'userdata');
	pool.getConnection(function (err, connection) {
			
		// var teacher_id=hashids.decode(sid);
		var Student_id=hashids.decode(sid);
		// if (Student_id != '') {
		// 	Keyconditoin += ' student_booked_classes.teacher_id ="'+Student_id+'" OR student_booked_classes.student_id ="'+Student_id+'"';
		// }
		if (name != '') {
			Keyconditoin += ' AND teacher.name LIKE  "%' + name + '%"';
		}
		if (typeof userdata.start != 'undefined' && userdata.start != '') {
			start = userdata.start;
		}
		if (typeof userdata.limit != 'undefined' && userdata.limit != '') {
			limit = userdata.limit;
		}
		if(limit !=''){
			limitStr='LIMIT '+start+', '+limit+'';
		}
		if(start_date !='' && end_date !="" && start_time!='' && end_time!='')
		{
		 Keyconditoin += ' AND student_booked_classes.schedule_slot_date  BETWEEN "'+start_date+'" AND "'+end_date+'"  AND user_time_schedule_slots.time_from BETWEEN "'+start_time+'" AND "'+end_time+'"';
        }
		if(start_date !='' && end_date !="" && start_time=='' && end_time=='')
		{
		 Keyconditoin += 'AND student_booked_classes.schedule_slot_date BETWEEN "'+start_date+'" AND "'+end_date+'"';
        }
		if(start_date !='' && end_date =="" && start_time!='' && end_time!='')
		{
		 Keyconditoin += ' AND student_booked_classes.schedule_slot_date  >= "'+start_date+'"  AND user_time_schedule_slots.time_from BETWEEN "'+start_time+'" AND "'+end_time+'"';
        }
		if(start_date =='' && end_date !="" && start_time!='' && end_time!='')
		{
		 Keyconditoin += ' AND student_booked_classes.schedule_slot_date  <="'+end_date+'"  AND user_time_schedule_slots.time_from BETWEEN "'+start_time+'" AND "'+end_time+'"';
        }
		if(start_date !='' && end_date =="" && start_time!='' && end_time!='')
		{
		 Keyconditoin += ' AND student_booked_classes.schedule_slot_date  >="'+start_date+'"  AND user_time_schedule_slots.time_from BETWEEN "'+start_time+'" AND "'+end_time+'"';
        }
		if(start_date =='' && end_date !="" && start_time=='' && end_time=='')
		{
		 Keyconditoin += ' AND student_booked_classes.schedule_slot_date  <="'+end_date+'" ';
        }
		if(start_date !='' && end_date =="" && start_time=='' && end_time=='')
		{
		 Keyconditoin += 'AND student_booked_classes.schedule_slot_date  >="'+start_date+'"  ';
        }

		detailsquery1 = 'SELECT student_booked_classes.*,(select name from categories where categories.id=student_booked_classes.subject_id) as subjectname,student_booked_classes.id as booked_class_id,user_time_schedule_slots.time_from,student_booked_classes.class_type as class_type,(SELECT demo_class_payout from demo_class_settings where id="2") as demo_class_payout,(SELECT paid_class_payout from demo_class_settings where id="2") as paid_class_payout,user_time_schedule_slots.time_to,course_chapters.chapter_title,course_chapters.chapter_description,teacher.name as teacher_name,teacher.id as teacher_id,student.name as student_name,student.id as student_id,student.phone as student_phone,student.parents_name,student.parents_name as school_name from student_booked_classes as student_booked_classes LEFT JOIN users as student ON student.id = student_booked_classes.student_id LEFT JOIN users as teacher ON teacher.id = student_booked_classes.teacher_id  LEFT JOIN course_chapters as course_chapters ON course_chapters.id = student_booked_classes.chapter_id LEFT JOIN user_time_schedule_slots as user_time_schedule_slots ON user_time_schedule_slots.id = student_booked_classes.slot_id where student_booked_classes.status =1 AND student_booked_classes.student_id ="'+Student_id+'"   '+Keyconditoin+' ';//user_time_schedule_slots.type as class_type
		detailsquery = 'SELECT student_booked_classes.*,(select name from categories where categories.id=student_booked_classes.subject_id) as subjectname,student_booked_classes.id as booked_class_id,user_time_schedule_slots.time_from,student_booked_classes.class_type as class_type,(SELECT demo_class_payout from demo_class_settings where id="2") as demo_class_payout,(SELECT paid_class_payout from demo_class_settings where id="2") as paid_class_payout,user_time_schedule_slots.time_to,course_chapters.chapter_title,course_chapters.chapter_description,teacher.name as teacher_name,teacher.id as teacher_id,student.name as student_name,student.id as student_id,student.phone as student_phone,student.parents_name,student.parents_name as school_name from student_booked_classes as student_booked_classes LEFT JOIN users as student ON student.id = student_booked_classes.student_id LEFT JOIN users as teacher ON teacher.id = student_booked_classes.teacher_id  LEFT JOIN course_chapters as course_chapters ON course_chapters.id = student_booked_classes.chapter_id LEFT JOIN user_time_schedule_slots as user_time_schedule_slots ON user_time_schedule_slots.id = student_booked_classes.slot_id where student_booked_classes.status =1 AND student_booked_classes.student_id ="'+Student_id+'"   '+Keyconditoin+' '+limitStr+'';//user_time_schedule_slots.type as class_type
		console.log('detailsquery123',detailsquery.count);
		connection.query(detailsquery1, function(errSelDetails1,resSelDetails1){
			console.log(resSelDetails1?.length,'xxx');
		connection.query(detailsquery, function(errSelDetails,resSelDetails){
			if(errSelDetails){
				resultJson = '{"replyCode":"error","replyMsg":"'+errSelDetails.message+'","cmd":"courses_list"}\n';
				connection.release();
				callback(200, null, resultJson);
				return;
			}else{
				
				
						resultJson = '{"replyCode":"success","replyMsg":"student lessons list","data":'+JSON.stringify(resSelDetails)+',"total_count":'+JSON.stringify(resSelDetails1.length)+',"cmd":"student_lessons_list"}\n';
						console.log('res-suceess');
						connection.release();
						callback(200, null, resultJson);
						return;	
						
					}
				
			
		});
		
		});
	});
}
function students_classes_list_cancel(userdata, pool, callback){
	var sha1 = require('sha1');
	var Hashids = require("hashids"), hashids = new Hashids(secretSalt);
	var sid = '';
	var Keyconditoin = '';
	var keyword = '';
	var learning = '';
	var start = '0';
	var limit = '';
	var resultJson = '';
	var status = '';
	var start_date='';
	var end_date='';
	var start_time='';
	var end_time='';
	var limitStr='';
	var name=''

	if (typeof userdata.start_time != "undefined" && userdata.start_time != "") {
	  start_time = userdata.start_time;
	}
	if (typeof userdata.end_time != "undefined" && userdata.end_time != "") {
	  end_time = userdata.end_time;
	}
	
	if (typeof userdata.start_date != "undefined" && userdata.start_date != "") {
	  start_date = userdata.start_date;
	}
	
	if (typeof userdata.end_date != "undefined" && userdata.end_date != "") {
	  end_date = userdata.end_date;
	}
	
	if (typeof userdata.sid != 'undefined' && userdata.sid != '') {
		sid = userdata.sid;
	}
	if (typeof userdata.status != 'undefined' && userdata.status != '') {
		status = userdata.status;
	}
	if (typeof userdata.name != 'undefined' && userdata.name != '') {
		name = userdata.name;
	}
	console.log(userdata.start,'userdata');
	pool.getConnection(function (err, connection) {
			
		// var teacher_id=hashids.decode(sid);
		var Student_id=hashids.decode(sid);
		// if (Student_id != '') {
		// 	Keyconditoin += ' student_booked_classes.teacher_id ="'+Student_id+'" OR student_booked_classes.student_id ="'+Student_id+'"';
		// }
		if (name != '') {
			Keyconditoin += ' AND teacher.name LIKE  "%' + name + '%"';
		}
		if (typeof userdata.start != 'undefined' && userdata.start != '') {
			start = userdata.start;
		}
		if (typeof userdata.limit != 'undefined' && userdata.limit != '') {
			limit = userdata.limit;
		}
		if(limit !=''){
			limitStr='LIMIT '+start+', '+limit+'';
		}
		if(start_date !='' && end_date !="" && start_time!='' && end_time!='')
		{
		 Keyconditoin += ' AND student_booked_classes.schedule_slot_date  BETWEEN "'+start_date+'" AND "'+end_date+'"  AND user_time_schedule_slots.time_from BETWEEN "'+start_time+'" AND "'+end_time+'"';
        }
		if(start_date !='' && end_date !="" && start_time=='' && end_time=='')
		{
		 Keyconditoin += 'AND student_booked_classes.schedule_slot_date BETWEEN "'+start_date+'" AND "'+end_date+'"';
        }
		if(start_date !='' && end_date =="" && start_time!='' && end_time!='')
		{
		 Keyconditoin += ' AND student_booked_classes.schedule_slot_date  >= "'+start_date+'"  AND user_time_schedule_slots.time_from BETWEEN "'+start_time+'" AND "'+end_time+'"';
        }
		if(start_date =='' && end_date !="" && start_time!='' && end_time!='')
		{
		 Keyconditoin += ' AND student_booked_classes.schedule_slot_date  <="'+end_date+'"  AND user_time_schedule_slots.time_from BETWEEN "'+start_time+'" AND "'+end_time+'"';
        }
		if(start_date !='' && end_date =="" && start_time!='' && end_time!='')
		{
		 Keyconditoin += ' AND student_booked_classes.schedule_slot_date  >="'+start_date+'"  AND user_time_schedule_slots.time_from BETWEEN "'+start_time+'" AND "'+end_time+'"';
        }
		if(start_date =='' && end_date !="" && start_time=='' && end_time=='')
		{
		 Keyconditoin += ' AND student_booked_classes.schedule_slot_date  <="'+end_date+'" ';
        }
		if(start_date !='' && end_date =="" && start_time=='' && end_time=='')
		{
		 Keyconditoin += 'AND student_booked_classes.schedule_slot_date  >="'+start_date+'"  ';
        }

		detailsquery1 = 'SELECT student_booked_classes.*,(select name from categories where categories.id=student_booked_classes.subject_id) as subjectname,student_booked_classes.id as booked_class_id,user_time_schedule_slots.time_from,student_booked_classes.class_type as class_type,(SELECT demo_class_payout from demo_class_settings where id="2") as demo_class_payout,(SELECT paid_class_payout from demo_class_settings where id="2") as paid_class_payout,user_time_schedule_slots.time_to,course_chapters.chapter_title,course_chapters.chapter_description,teacher.name as teacher_name,teacher.id as teacher_id,student.name as student_name,student.id as student_id,student.phone as student_phone,student.parents_name,student.parents_name as school_name from student_booked_classes as student_booked_classes LEFT JOIN users as student ON student.id = student_booked_classes.student_id LEFT JOIN users as teacher ON teacher.id = student_booked_classes.teacher_id  LEFT JOIN course_chapters as course_chapters ON course_chapters.id = student_booked_classes.chapter_id LEFT JOIN user_time_schedule_slots as user_time_schedule_slots ON user_time_schedule_slots.id = student_booked_classes.slot_id where student_booked_classes.status =3 AND student_booked_classes.student_id ="'+Student_id+'"   '+Keyconditoin+' ';//user_time_schedule_slots.type as class_type
		detailsquery = 'SELECT student_booked_classes.*,(select name from categories where categories.id=student_booked_classes.subject_id) as subjectname,student_booked_classes.id as booked_class_id,user_time_schedule_slots.time_from,student_booked_classes.class_type as class_type,(SELECT demo_class_payout from demo_class_settings where id="2") as demo_class_payout,(SELECT paid_class_payout from demo_class_settings where id="2") as paid_class_payout,user_time_schedule_slots.time_to,course_chapters.chapter_title,course_chapters.chapter_description,teacher.name as teacher_name,teacher.id as teacher_id,student.name as student_name,student.id as student_id,student.phone as student_phone,student.parents_name,student.parents_name as school_name from student_booked_classes as student_booked_classes LEFT JOIN users as student ON student.id = student_booked_classes.student_id LEFT JOIN users as teacher ON teacher.id = student_booked_classes.teacher_id  LEFT JOIN course_chapters as course_chapters ON course_chapters.id = student_booked_classes.chapter_id LEFT JOIN user_time_schedule_slots as user_time_schedule_slots ON user_time_schedule_slots.id = student_booked_classes.slot_id where student_booked_classes.status =3 AND student_booked_classes.student_id ="'+Student_id+'"   '+Keyconditoin+' '+limitStr+'';//user_time_schedule_slots.type as class_type
		console.log('detailsquery123',detailsquery.count);
		connection.query(detailsquery1, function(errSelDetails1,resSelDetails1){
			console.log(resSelDetails1?.length,'xxx');
		connection.query(detailsquery, function(errSelDetails,resSelDetails){
			if(errSelDetails){
				resultJson = '{"replyCode":"error","replyMsg":"'+errSelDetails.message+'","cmd":"courses_list"}\n';
				connection.release();
				callback(200, null, resultJson);
				return;
			}else{
				
				
						resultJson = '{"replyCode":"success","replyMsg":"student lessons list","data":'+JSON.stringify(resSelDetails)+',"total_count":'+JSON.stringify(resSelDetails1.length)+',"cmd":"student_lessons_list"}\n';
						console.log('res-suceess');
						connection.release();
						callback(200, null, resultJson);
						return;	
						
					}
				
			
		});
		
		});
	});
}
function parent_classes_list_complete(userdata, pool, callback){
	var sha1 = require('sha1');
	var Hashids = require("hashids"), hashids = new Hashids(secretSalt);
	var sid = '';
	var Keyconditoin = '';
	var keyword = '';
	var learning = '';
	var start = '0';
	var limit = '';
	var resultJson = '';
	var status = '';
	var start_date='';
	var end_date='';
	var start_time='';
	var end_time='';
	var limitStr='';
	var name=''

	if (typeof userdata.start_time != "undefined" && userdata.start_time != "") {
	  start_time = userdata.start_time;
	}
	if (typeof userdata.end_time != "undefined" && userdata.end_time != "") {
	  end_time = userdata.end_time;
	}
	
	if (typeof userdata.start_date != "undefined" && userdata.start_date != "") {
	  start_date = userdata.start_date;
	}
	
	if (typeof userdata.end_date != "undefined" && userdata.end_date != "") {
	  end_date = userdata.end_date;
	}
	
	if (typeof userdata.sid != 'undefined' && userdata.sid != '') {
		sid = userdata.sid;
	}
	if (typeof userdata.status != 'undefined' && userdata.status != '') {
		status = userdata.status;
	}
	if (typeof userdata.name != 'undefined' && userdata.name != '') {
		name = userdata.name;
	}
	console.log(userdata.start,'userdata');
	pool.getConnection(function (err, connection) {
			
		// var teacher_id=hashids.decode(sid);
		var Student_id=hashids.decode(sid);
		// if (Student_id != '') {
		// 	Keyconditoin += ' student_booked_classes.teacher_id ="'+Student_id+'" OR student_booked_classes.student_id ="'+Student_id+'"';
		// }
		if (name != '') {
			Keyconditoin += ' AND teacher.name LIKE  "%' + name + '%"';
		}
		if (typeof userdata.start != 'undefined' && userdata.start != '') {
			start = userdata.start;
		}
		if (typeof userdata.limit != 'undefined' && userdata.limit != '') {
			limit = userdata.limit;
		}
		if(limit !=''){
			limitStr='LIMIT '+start+', '+limit+'';
		}
		if(start_date !='' && end_date !="" && start_time!='' && end_time!='')
		{
		 Keyconditoin += ' AND schedule_slot_date  BETWEEN "'+start_date+'" AND "'+end_date+'"  AND user_time_schedule_slots.time_from BETWEEN "'+start_time+'" AND "'+end_time+'"';
        }
		if(start_date !='' && end_date !="" && start_time=='' && end_time=='')
		{
		 Keyconditoin += 'AND schedule_slot_date BETWEEN "'+start_date+'" AND "'+end_date+'"';
        }
		if(start_date !='' && end_date =="" && start_time!='' && end_time!='')
		{
		 Keyconditoin += ' AND schedule_slot_date  >= "'+start_date+'"  AND user_time_schedule_slots.time_from BETWEEN "'+start_time+'" AND "'+end_time+'"';
        }
		if(start_date =='' && end_date !="" && start_time!='' && end_time!='')
		{
		 Keyconditoin += ' AND schedule_slot_date  <="'+end_date+'"  AND user_time_schedule_slots.time_from BETWEEN "'+start_time+'" AND "'+end_time+'"';
        }
		if(start_date !='' && end_date =="" && start_time!='' && end_time!='')
		{
		 Keyconditoin += ' AND schedule_slot_date  >="'+start_date+'"  AND user_time_schedule_slots.time_from BETWEEN "'+start_time+'" AND "'+end_time+'"';
        }
		if(start_date =='' && end_date !="" && start_time=='' && end_time=='')
		{
		 Keyconditoin += ' AND schedule_slot_date  <="'+end_date+'" ';
        }
		if(start_date !='' && end_date =="" && start_time=='' && end_time=='')
		{
		 Keyconditoin += 'AND schedule_slot_date  >="'+start_date+'"  ';
        }

		detailsquery1 = 'SELECT student_booked_classes.*,(select name from categories where categories.id=student_booked_classes.subject_id) as subjectname,student_booked_classes.id as booked_class_id,user_time_schedule_slots.time_from,student_booked_classes.class_type as class_type,(SELECT demo_class_payout from demo_class_settings where id="2") as demo_class_payout,(SELECT paid_class_payout from demo_class_settings where id="2") as paid_class_payout,user_time_schedule_slots.time_to,course_chapters.chapter_title,course_chapters.chapter_description,teacher.name as teacher_name,teacher.id as teacher_id,student.name as student_name,student.id as student_id,student.phone as student_phone,student.parents_name,student.parents_name as school_name from student_booked_classes as student_booked_classes LEFT JOIN users as student ON student.id = student_booked_classes.student_id LEFT JOIN users as teacher ON teacher.id = student_booked_classes.teacher_id  LEFT JOIN course_chapters as course_chapters ON course_chapters.id = student_booked_classes.chapter_id LEFT JOIN user_time_schedule_slots as user_time_schedule_slots ON user_time_schedule_slots.id = student_booked_classes.slot_id where student_booked_classes.status ="2" AND student_booked_classes.student_id in (SELECT id from users where parent_id="'+Student_id+'") '+Keyconditoin+' ';//user_time_schedule_slots.type as class_type
		detailsquery = 'SELECT student_booked_classes.*,(select name from categories where categories.id=student_booked_classes.subject_id) as subjectname,student_booked_classes.id as booked_class_id,user_time_schedule_slots.time_from,student_booked_classes.class_type as class_type,(SELECT demo_class_payout from demo_class_settings where id="2") as demo_class_payout,(SELECT paid_class_payout from demo_class_settings where id="2") as paid_class_payout,user_time_schedule_slots.time_to,course_chapters.chapter_title,course_chapters.chapter_description,teacher.name as teacher_name,teacher.id as teacher_id,student.name as student_name,student.id as student_id,student.phone as student_phone,student.parents_name,student.parents_name as school_name from student_booked_classes as student_booked_classes LEFT JOIN users as student ON student.id = student_booked_classes.student_id LEFT JOIN users as teacher ON teacher.id = student_booked_classes.teacher_id  LEFT JOIN course_chapters as course_chapters ON course_chapters.id = student_booked_classes.chapter_id LEFT JOIN user_time_schedule_slots as user_time_schedule_slots ON user_time_schedule_slots.id = student_booked_classes.slot_id where  student_booked_classes.status ="2" AND student_booked_classes.student_id in (SELECT id from users where parent_id="'+Student_id+'") '+Keyconditoin+' '+limitStr+'';//user_time_schedule_slots.type as class_type
		console.log('detailsquery123',detailsquery.count);
		connection.query(detailsquery1, function(errSelDetails1,resSelDetails1){
			console.log(resSelDetails1?.length,'xxx');
		connection.query(detailsquery, function(errSelDetails,resSelDetails){
			if(errSelDetails){
				resultJson = '{"replyCode":"error","replyMsg":"'+errSelDetails.message+'","cmd":"courses_list"}\n';
				connection.release();
				callback(200, null, resultJson);
				return;
			}else{
				
				
						resultJson = '{"replyCode":"success","replyMsg":"parent lessons list","data":'+JSON.stringify(resSelDetails)+',"total_count":'+JSON.stringify(resSelDetails1.length)+',"cmd":"student_lessons_list"}\n';
						console.log('res-suceess');
						connection.release();
						callback(200, null, resultJson);
						return;	
						
					}
				
			
		});
		
		});
	});
}
function parent_classes_list_cancel(userdata, pool, callback){
	var sha1 = require('sha1');
	var Hashids = require("hashids"), hashids = new Hashids(secretSalt);
	var sid = '';
	var Keyconditoin = '';
	var keyword = '';
	var learning = '';
	var start = '0';
	var limit = '';
	var resultJson = '';
	var status = '';
	var start_date='';
	var end_date='';
	var start_time='';
	var end_time='';
	var limitStr='';
	var name=''

	if (typeof userdata.start_time != "undefined" && userdata.start_time != "") {
	  start_time = userdata.start_time;
	}
	if (typeof userdata.end_time != "undefined" && userdata.end_time != "") {
	  end_time = userdata.end_time;
	}
	
	if (typeof userdata.start_date != "undefined" && userdata.start_date != "") {
	  start_date = userdata.start_date;
	}
	
	if (typeof userdata.end_date != "undefined" && userdata.end_date != "") {
	  end_date = userdata.end_date;
	}
	
	if (typeof userdata.sid != 'undefined' && userdata.sid != '') {
		sid = userdata.sid;
	}
	if (typeof userdata.status != 'undefined' && userdata.status != '') {
		status = userdata.status;
	}
	if (typeof userdata.name != 'undefined' && userdata.name != '') {
		name = userdata.name;
	}
	console.log(userdata.start,'userdata');
	pool.getConnection(function (err, connection) {
			
		// var teacher_id=hashids.decode(sid);
		var Student_id=hashids.decode(sid);
		// if (Student_id != '') {
		// 	Keyconditoin += ' student_booked_classes.teacher_id ="'+Student_id+'" OR student_booked_classes.student_id ="'+Student_id+'"';
		// }
		if (name != '') {
			Keyconditoin += ' AND teacher.name LIKE  "%' + name + '%"';
		}
		if (typeof userdata.start != 'undefined' && userdata.start != '') {
			start = userdata.start;
		}
		if (typeof userdata.limit != 'undefined' && userdata.limit != '') {
			limit = userdata.limit;
		}
		if(limit !=''){
			limitStr='LIMIT '+start+', '+limit+'';
		}
		if(start_date !='' && end_date !="" && start_time!='' && end_time!='')
		{
		 Keyconditoin += ' AND schedule_slot_date  BETWEEN "'+start_date+'" AND "'+end_date+'"  AND user_time_schedule_slots.time_from BETWEEN "'+start_time+'" AND "'+end_time+'"';
        }
		if(start_date !='' && end_date !="" && start_time=='' && end_time=='')
		{
		 Keyconditoin += 'AND schedule_slot_date BETWEEN "'+start_date+'" AND "'+end_date+'"';
        }
		if(start_date !='' && end_date =="" && start_time!='' && end_time!='')
		{
		 Keyconditoin += ' AND schedule_slot_date  >= "'+start_date+'"  AND user_time_schedule_slots.time_from BETWEEN "'+start_time+'" AND "'+end_time+'"';
        }
		if(start_date =='' && end_date !="" && start_time!='' && end_time!='')
		{
		 Keyconditoin += ' AND schedule_slot_date  <="'+end_date+'"  AND user_time_schedule_slots.time_from BETWEEN "'+start_time+'" AND "'+end_time+'"';
        }
		if(start_date !='' && end_date =="" && start_time!='' && end_time!='')
		{
		 Keyconditoin += ' AND schedule_slot_date  >="'+start_date+'"  AND user_time_schedule_slots.time_from BETWEEN "'+start_time+'" AND "'+end_time+'"';
        }
		if(start_date =='' && end_date !="" && start_time=='' && end_time=='')
		{
		 Keyconditoin += ' AND schedule_slot_date  <="'+end_date+'" ';
        }
		if(start_date !='' && end_date =="" && start_time=='' && end_time=='')
		{
		 Keyconditoin += 'AND schedule_slot_date  >="'+start_date+'"  ';
        }

		detailsquery1 = 'SELECT student_booked_classes.*,(select name from categories where categories.id=student_booked_classes.subject_id) as subjectname,student_booked_classes.id as booked_class_id,user_time_schedule_slots.time_from,student_booked_classes.class_type as class_type,(SELECT demo_class_payout from demo_class_settings where id="2") as demo_class_payout,(SELECT paid_class_payout from demo_class_settings where id="2") as paid_class_payout,user_time_schedule_slots.time_to,course_chapters.chapter_title,course_chapters.chapter_description,teacher.name as teacher_name,teacher.id as teacher_id,student.name as student_name,student.id as student_id,student.phone as student_phone,student.parents_name,student.parents_name as school_name from student_booked_classes as student_booked_classes LEFT JOIN users as student ON student.id = student_booked_classes.student_id LEFT JOIN users as teacher ON teacher.id = student_booked_classes.teacher_id  LEFT JOIN course_chapters as course_chapters ON course_chapters.id = student_booked_classes.chapter_id LEFT JOIN user_time_schedule_slots as user_time_schedule_slots ON user_time_schedule_slots.id = student_booked_classes.slot_id where student_booked_classes.status ="3" AND  student_booked_classes.student_id in (SELECT id from users where parent_id="'+Student_id+'") '+Keyconditoin+' ';//user_time_schedule_slots.type as class_type
		detailsquery = 'SELECT student_booked_classes.*,(select name from categories where categories.id=student_booked_classes.subject_id) as subjectname,student_booked_classes.id as booked_class_id,user_time_schedule_slots.time_from,student_booked_classes.class_type as class_type,(SELECT demo_class_payout from demo_class_settings where id="2") as demo_class_payout,(SELECT paid_class_payout from demo_class_settings where id="2") as paid_class_payout,user_time_schedule_slots.time_to,course_chapters.chapter_title,course_chapters.chapter_description,teacher.name as teacher_name,teacher.id as teacher_id,student.name as student_name,student.id as student_id,student.phone as student_phone,student.parents_name,student.parents_name as school_name from student_booked_classes as student_booked_classes LEFT JOIN users as student ON student.id = student_booked_classes.student_id LEFT JOIN users as teacher ON teacher.id = student_booked_classes.teacher_id  LEFT JOIN course_chapters as course_chapters ON course_chapters.id = student_booked_classes.chapter_id LEFT JOIN user_time_schedule_slots as user_time_schedule_slots ON user_time_schedule_slots.id = student_booked_classes.slot_id where student_booked_classes.status ="3" AND  student_booked_classes.student_id in (SELECT id from users where parent_id="'+Student_id+'") '+Keyconditoin+' '+limitStr+'';//user_time_schedule_slots.type as class_type
		console.log('detailsquery123',detailsquery.count);
		connection.query(detailsquery1, function(errSelDetails1,resSelDetails1){
			console.log(resSelDetails1?.length,'xxx');
		connection.query(detailsquery, function(errSelDetails,resSelDetails){
			if(errSelDetails){
				resultJson = '{"replyCode":"error","replyMsg":"'+errSelDetails.message+'","cmd":"courses_list"}\n';
				connection.release();
				callback(200, null, resultJson);
				return;
			}else{
				
				
						resultJson = '{"replyCode":"success","replyMsg":"parent lessons list","data":'+JSON.stringify(resSelDetails)+',"total_count":'+JSON.stringify(resSelDetails1.length)+',"cmd":"student_lessons_list"}\n';
						console.log('res-suceess');
						connection.release();
						callback(200, null, resultJson);
						return;	
						
					}
				
			
		});
		
		});
	});
}
function parent_classes_list_upcoming(userdata, pool, callback){
	var sha1 = require('sha1');
	var Hashids = require("hashids"), hashids = new Hashids(secretSalt);
	var sid = '';
	var Keyconditoin = '';
	var keyword = '';
	var learning = '';
	var start = '0';
	var limit = '';
	var resultJson = '';
	var status = '';
	var start_date='';
	var end_date='';
	var start_time='';
	var end_time='';
	var limitStr='';
	var name=''

	if (typeof userdata.start_time != "undefined" && userdata.start_time != "") {
	  start_time = userdata.start_time;
	}
	if (typeof userdata.end_time != "undefined" && userdata.end_time != "") {
	  end_time = userdata.end_time;
	}
	
	if (typeof userdata.start_date != "undefined" && userdata.start_date != "") {
	  start_date = userdata.start_date;
	}
	
	if (typeof userdata.end_date != "undefined" && userdata.end_date != "") {
	  end_date = userdata.end_date;
	}
	
	if (typeof userdata.sid != 'undefined' && userdata.sid != '') {
		sid = userdata.sid;
	}
	if (typeof userdata.status != 'undefined' && userdata.status != '') {
		status = userdata.status;
	}
	if (typeof userdata.name != 'undefined' && userdata.name != '') {
		name = userdata.name;
	}
	console.log(userdata.start,'userdata');
	pool.getConnection(function (err, connection) {
			
		// var teacher_id=hashids.decode(sid);
		var Student_id=hashids.decode(sid);
		// if (Student_id != '') {
		// 	Keyconditoin += ' student_booked_classes.teacher_id ="'+Student_id+'" OR student_booked_classes.student_id ="'+Student_id+'"';
		// }
		if (name != '') {
			Keyconditoin += ' AND teacher.name LIKE  "%' + name + '%"';
		}
		if (typeof userdata.start != 'undefined' && userdata.start != '') {
			start = userdata.start;
		}
		if (typeof userdata.limit != 'undefined' && userdata.limit != '') {
			limit = userdata.limit;
		}
		if(limit !=''){
			limitStr='LIMIT '+start+', '+limit+'';
		}
		if(start_date !='' && end_date !="" && start_time!='' && end_time!='')
		{
		 Keyconditoin += ' AND schedule_slot_date  BETWEEN "'+start_date+'" AND "'+end_date+'"  AND user_time_schedule_slots.time_from BETWEEN "'+start_time+'" AND "'+end_time+'"';
        }
		if(start_date !='' && end_date !="" && start_time=='' && end_time=='')
		{
		 Keyconditoin += 'AND schedule_slot_date BETWEEN "'+start_date+'" AND "'+end_date+'"';
        }
		if(start_date !='' && end_date =="" && start_time!='' && end_time!='')
		{
		 Keyconditoin += ' AND schedule_slot_date  >= "'+start_date+'"  AND user_time_schedule_slots.time_from BETWEEN "'+start_time+'" AND "'+end_time+'"';
        }
		if(start_date =='' && end_date !="" && start_time!='' && end_time!='')
		{
		 Keyconditoin += ' AND schedule_slot_date  <="'+end_date+'"  AND user_time_schedule_slots.time_from BETWEEN "'+start_time+'" AND "'+end_time+'"';
        }
		if(start_date !='' && end_date =="" && start_time!='' && end_time!='')
		{
		 Keyconditoin += ' AND schedule_slot_date  >="'+start_date+'"  AND user_time_schedule_slots.time_from BETWEEN "'+start_time+'" AND "'+end_time+'"';
        }
		if(start_date =='' && end_date !="" && start_time=='' && end_time=='')
		{
		 Keyconditoin += ' AND schedule_slot_date  <="'+end_date+'" ';
        }
		if(start_date !='' && end_date =="" && start_time=='' && end_time=='')
		{
		 Keyconditoin += 'AND schedule_slot_date  >="'+start_date+'"  ';
        }

		detailsquery1 = 'SELECT student_booked_classes.*,(select name from categories where categories.id=student_booked_classes.subject_id) as subjectname,student_booked_classes.id as booked_class_id,user_time_schedule_slots.time_from,student_booked_classes.class_type as class_type,(SELECT demo_class_payout from demo_class_settings where id="2") as demo_class_payout,(SELECT paid_class_payout from demo_class_settings where id="2") as paid_class_payout,user_time_schedule_slots.time_to,course_chapters.chapter_title,course_chapters.chapter_description,teacher.name as teacher_name,teacher.id as teacher_id,student.name as student_name,student.id as student_id,student.phone as student_phone,student.parents_name,student.parents_name as school_name from student_booked_classes as student_booked_classes LEFT JOIN users as student ON student.id = student_booked_classes.student_id LEFT JOIN users as teacher ON teacher.id = student_booked_classes.teacher_id  LEFT JOIN course_chapters as course_chapters ON course_chapters.id = student_booked_classes.chapter_id LEFT JOIN user_time_schedule_slots as user_time_schedule_slots ON user_time_schedule_slots.id = student_booked_classes.slot_id where student_booked_classes.status ="1" AND  student_booked_classes.student_id in (SELECT id from users where parent_id="'+Student_id+'") '+Keyconditoin+' ';//user_time_schedule_slots.type as class_type
		detailsquery = 'SELECT student_booked_classes.*,(select name from categories where categories.id=student_booked_classes.subject_id) as subjectname,student_booked_classes.id as booked_class_id,user_time_schedule_slots.time_from,student_booked_classes.class_type as class_type,(SELECT demo_class_payout from demo_class_settings where id="2") as demo_class_payout,(SELECT paid_class_payout from demo_class_settings where id="2") as paid_class_payout,user_time_schedule_slots.time_to,course_chapters.chapter_title,course_chapters.chapter_description,teacher.name as teacher_name,teacher.id as teacher_id,student.name as student_name,student.id as student_id,student.phone as student_phone,student.parents_name,student.parents_name as school_name from student_booked_classes as student_booked_classes LEFT JOIN users as student ON student.id = student_booked_classes.student_id LEFT JOIN users as teacher ON teacher.id = student_booked_classes.teacher_id  LEFT JOIN course_chapters as course_chapters ON course_chapters.id = student_booked_classes.chapter_id LEFT JOIN user_time_schedule_slots as user_time_schedule_slots ON user_time_schedule_slots.id = student_booked_classes.slot_id where student_booked_classes.status ="1" AND student_booked_classes.student_id in (SELECT id from users where parent_id="'+Student_id+'") '+Keyconditoin+' '+limitStr+'';//user_time_schedule_slots.type as class_type
		console.log('detailsquery123',detailsquery.count);
		connection.query(detailsquery1, function(errSelDetails1,resSelDetails1){
			console.log(resSelDetails1?.length,'xxx');
		connection.query(detailsquery, function(errSelDetails,resSelDetails){
			if(errSelDetails){
				resultJson = '{"replyCode":"error","replyMsg":"'+errSelDetails.message+'","cmd":"courses_list"}\n';
				connection.release();
				callback(200, null, resultJson);
				return;
			}else{
				
				
						resultJson = '{"replyCode":"success","replyMsg":"parent lessons list","data":'+JSON.stringify(resSelDetails)+',"total_count":'+JSON.stringify(resSelDetails1.length)+',"cmd":"student_lessons_list"}\n';
						console.log('res-suceess');
						connection.release();
						callback(200, null, resultJson);
						return;	
						
					}
				
			
		});
		
		});
	});
}
function parent_classes_list(userdata, pool, callback){
	var sha1 = require('sha1');
	var Hashids = require("hashids"), hashids = new Hashids(secretSalt);
	var sid = '';
	var Keyconditoin = '';
	var keyword = '';
	var learning = '';
	var start = '0';
	var limit = '';
	var resultJson = '';
	var status = '';
	var start_date='';
	var end_date='';
	var start_time='';
	var end_time='';
	var limitStr='';
	var name=''

	if (typeof userdata.start_time != "undefined" && userdata.start_time != "") {
	  start_time = userdata.start_time;
	}
	if (typeof userdata.end_time != "undefined" && userdata.end_time != "") {
	  end_time = userdata.end_time;
	}
	
	if (typeof userdata.start_date != "undefined" && userdata.start_date != "") {
	  start_date = userdata.start_date;
	}
	
	if (typeof userdata.end_date != "undefined" && userdata.end_date != "") {
	  end_date = userdata.end_date;
	}
	
	if (typeof userdata.sid != 'undefined' && userdata.sid != '') {
		sid = userdata.sid;
	}
	if (typeof userdata.status != 'undefined' && userdata.status != '') {
		status = userdata.status;
	}
	if (typeof userdata.name != 'undefined' && userdata.name != '') {
		name = userdata.name;
	}
	console.log(userdata.start,'userdata');
	pool.getConnection(function (err, connection) {
			
		// var teacher_id=hashids.decode(sid);
		var Student_id=hashids.decode(sid);
		// if (Student_id != '') {
		// 	Keyconditoin += ' student_booked_classes.teacher_id ="'+Student_id+'" OR student_booked_classes.student_id ="'+Student_id+'"';
		// }
		if (name != '') {
			Keyconditoin += ' AND teacher.name LIKE  "%' + name + '%"';
		}
		if (typeof userdata.start != 'undefined' && userdata.start != '') {
			start = userdata.start;
		}
		if (typeof userdata.limit != 'undefined' && userdata.limit != '') {
			limit = userdata.limit;
		}
		if(limit !=''){
			limitStr='LIMIT '+start+', '+limit+'';
		}
		if(start_date !='' && end_date !="" && start_time!='' && end_time!='')
		{
		 Keyconditoin += ' AND schedule_slot_date  BETWEEN "'+start_date+'" AND "'+end_date+'"  AND user_time_schedule_slots.time_from BETWEEN "'+start_time+'" AND "'+end_time+'"';
        }
		if(start_date !='' && end_date !="" && start_time=='' && end_time=='')
		{
		 Keyconditoin += 'AND schedule_slot_date BETWEEN "'+start_date+'" AND "'+end_date+'"';
        }
		if(start_date !='' && end_date =="" && start_time!='' && end_time!='')
		{
		 Keyconditoin += ' AND schedule_slot_date  >= "'+start_date+'"  AND user_time_schedule_slots.time_from BETWEEN "'+start_time+'" AND "'+end_time+'"';
        }
		if(start_date =='' && end_date !="" && start_time!='' && end_time!='')
		{
		 Keyconditoin += ' AND schedule_slot_date  <="'+end_date+'"  AND user_time_schedule_slots.time_from BETWEEN "'+start_time+'" AND "'+end_time+'"';
        }
		if(start_date !='' && end_date =="" && start_time!='' && end_time!='')
		{
		 Keyconditoin += ' AND schedule_slot_date  >="'+start_date+'"  AND user_time_schedule_slots.time_from BETWEEN "'+start_time+'" AND "'+end_time+'"';
        }
		if(start_date =='' && end_date !="" && start_time=='' && end_time=='')
		{
		 Keyconditoin += ' AND schedule_slot_date  <="'+end_date+'" ';
        }
		if(start_date !='' && end_date =="" && start_time=='' && end_time=='')
		{
		 Keyconditoin += 'AND schedule_slot_date  >="'+start_date+'"  ';
        }

		detailsquery1 = 'SELECT student_booked_classes.*,(select name from categories where categories.id=student_booked_classes.subject_id) as subjectname,student_booked_classes.id as booked_class_id,user_time_schedule_slots.time_from,student_booked_classes.class_type as class_type,(SELECT demo_class_payout from demo_class_settings where id="2") as demo_class_payout,(SELECT paid_class_payout from demo_class_settings where id="2") as paid_class_payout,user_time_schedule_slots.time_to,course_chapters.chapter_title,course_chapters.chapter_description,teacher.name as teacher_name,teacher.id as teacher_id,student.name as student_name,student.id as student_id,student.phone as student_phone,student.parents_name,student.parents_name as school_name from student_booked_classes as student_booked_classes LEFT JOIN users as student ON student.id = student_booked_classes.student_id LEFT JOIN users as teacher ON teacher.id = student_booked_classes.teacher_id  LEFT JOIN course_chapters as course_chapters ON course_chapters.id = student_booked_classes.chapter_id LEFT JOIN user_time_schedule_slots as user_time_schedule_slots ON user_time_schedule_slots.id = student_booked_classes.slot_id where  student_booked_classes.student_id in (SELECT id from users where parent_id="'+Student_id+'") '+Keyconditoin+' ';//user_time_schedule_slots.type as class_type
		detailsquery = 'SELECT student_booked_classes.*,(select name from categories where categories.id=student_booked_classes.subject_id) as subjectname,student_booked_classes.id as booked_class_id,user_time_schedule_slots.time_from,student_booked_classes.class_type as class_type,(SELECT demo_class_payout from demo_class_settings where id="2") as demo_class_payout,(SELECT paid_class_payout from demo_class_settings where id="2") as paid_class_payout,user_time_schedule_slots.time_to,course_chapters.chapter_title,course_chapters.chapter_description,teacher.name as teacher_name,teacher.id as teacher_id,student.name as student_name,student.id as student_id,student.phone as student_phone,student.parents_name,student.parents_name as school_name from student_booked_classes as student_booked_classes LEFT JOIN users as student ON student.id = student_booked_classes.student_id LEFT JOIN users as teacher ON teacher.id = student_booked_classes.teacher_id  LEFT JOIN course_chapters as course_chapters ON course_chapters.id = student_booked_classes.chapter_id LEFT JOIN user_time_schedule_slots as user_time_schedule_slots ON user_time_schedule_slots.id = student_booked_classes.slot_id where  student_booked_classes.student_id in (SELECT id from users where parent_id="'+Student_id+'") '+Keyconditoin+' '+limitStr+'';//user_time_schedule_slots.type as class_type
		console.log('detailsquery123',detailsquery.count);
		connection.query(detailsquery1, function(errSelDetails1,resSelDetails1){
			console.log(resSelDetails1?.length,'xxx');
		connection.query(detailsquery, function(errSelDetails,resSelDetails){
			if(errSelDetails){
				resultJson = '{"replyCode":"error","replyMsg":"'+errSelDetails.message+'","cmd":"courses_list"}\n';
				connection.release();
				callback(200, null, resultJson);
				return;
			}else{
				
				
						resultJson = '{"replyCode":"success","replyMsg":"parent lessons list","data":'+JSON.stringify(resSelDetails)+',"total_count":'+JSON.stringify(resSelDetails1.length)+',"cmd":"student_lessons_list"}\n';
						console.log('res-suceess');
						connection.release();
						callback(200, null, resultJson);
						return;	
						
					}
				
			
		});
		
		});
	});
}
function student_teacher_schedule_days_list(userdata, pool, callback)
{
	var resultJson = '';
	var Hashids = require("hashids"), hashids = new Hashids(secretSalt);
	var teacher_id ='';//	
	var Cquery = '';
	var res ='';

	if (typeof userdata.teacher_id != 'undefined' && userdata.teacher_id != '') {
		teacher_id = userdata.teacher_id;
	}
	var ToDate = new Date();
	var Curdate=ToDate.getFullYear()+"-"+parseInt(ToDate.getMonth()+1)+"-"+ToDate.getDate();
	var CurTime=ToDate.getHours()+":"+ToDate.getMinutes()+":"+ToDate.getSeconds();
	console.log('Curdate--',Curdate)
	console.log('Curdate--',Curdate)
	pool.getConnection(function (err, connection) {

		Cquery='SELECT user_time_schedule.* from user_time_schedule WHERE user_time_schedule.status != "2" AND user_time_schedule.teacher_id="'+teacher_id+'" AND schedule_date >="'+Curdate+'"';
			
		console.log(Cquery);
		connection.query(Cquery, function(err, resPro){
			if(err){
				resultJson = '{"replyCode":"error","replyMsg":"'+err.message+'","cmd":"teacher_schedule_days_list"}\n';
				connection.release();
				callback(200, null, resultJson);
				return;
			}else{

				if(resPro.length >0){
					var i = 0;
					async.eachSeries(resPro,function(rec2, loop2){
						var schedule_id = rec2.id;
						console.log('schedule_id',schedule_id);
						Cquery='SELECT user_time_schedule_slots.* from user_time_schedule_slots WHERE user_time_schedule_slots.status != "2" AND user_time_schedule_slots.teacher_id="'+teacher_id+'" AND user_time_schedule_slots.schedule_id="'+schedule_id+'"';
						console.log('Cquery',Cquery);
						connection.query(Cquery, function(errSelpiMG,respROiMG){
							if(errSelpiMG){
								console.log('errSelpiMG',errSelpiMG);
								loop2();
							}else{
								resPro[i].slots=respROiMG;
								loop2();
							}
							i=i+1;
						});
					},function(errSelPro){
						if(errSelPro){
							console.log('errSelPro',errSelPro);
							resultJson = '{"replyCode":"error","replyMsg":"'+errSelPro.message+'","cmd":"teacher_schedule_days_list"}\n';
							connection.release();
							callback(200, null, resultJson);
							return;
						}else{
							resultJson = '{"replyCode":"success","replyMsg":"Details found successfully .","data":'+JSON.stringify(resPro)+',"cmd":"teacher_schedule_days_list"}\n';
							console.log('res-suceess');
							connection.release();
							callback(200, null, resultJson);
							return;
						}
					});
				}else{
					resultJson = '{"replyCode":"success","replyMsg":"No Record found.","data":[], "cmd":"teacher_schedule_days_list"}\n';
					console.log('res-suceess');
					connection.release();
					callback(200, null, resultJson);
					return;
				}
			}
		});
	});
}

function student_teacher_schedule_slots_list(userdata, pool, callback){
	var resultJson = '';
	var Hashids = require("hashids"), hashids = new Hashids(secretSalt);
	var teacher_id ='';//
	var schedule_id='';
	var Cquery = '';
	var res ='';

	if (typeof userdata.teacher_id != 'undefined' && userdata.teacher_id != '') {
		teacher_id = userdata.teacher_id;
	}

	if (typeof userdata.schedule_id != 'undefined' && userdata.schedule_id != '') {
		schedule_id = userdata.schedule_id;
	}
	var ToDate = new Date();
	var Curdate=ToDate.getFullYear()+"-"+parseInt(ToDate.getMonth()+1)+"-"+ToDate.getDate();
	var CurTime=ToDate.getHours()+":"+ToDate.getMinutes()+":"+ToDate.getSeconds();
	console.log('Curdate--',Curdate)
	console.log('Curdate--',Curdate)
	pool.getConnection(function (err, connection) {
		
		Cquery='SELECT user_time_schedule_slots.* from user_time_schedule_slots WHERE user_time_schedule_slots.status != "2" AND user_time_schedule_slots.teacher_id="'+teacher_id+'" AND user_time_schedule_slots.schedule_id="'+schedule_id+'"';
			
		console.log(Cquery);
		connection.query(Cquery, function(err, ordData){
			if(err){
				resultJson = '{"replyCode":"error","replyMsg":"'+err.message+'","cmd":"teacher_schedule_slots_list"}\n';
				connection.release();
				callback(200, null, resultJson);
				return;
			}else{
				if(ordData.length>0){
					res =ordData;
				}else{
					res	=[];
				}						
				resultJson = '{"replyCode":"success","replyMsg":"slots list","data":'+JSON.stringify(res)+',"cmd":"teacher_schedule_slots_list"}\n';
				console.log('res-suceess');
				connection.release();
				callback(200, null, resultJson);
				return;	
			}
		})
	});
}

//create review

/*Create Review Rating*/
function create_review(userdata, pool, callback){
	var resultJson = '';
	var strJson = '';
	var Hashids = require("hashids"), hashids = new Hashids(secretSalt);
	var Query='';
	var teacher_id='';
	var student_id='';
	var rating = '';
	var review = '';

	if (typeof userdata.teacher_id != 'undefined' && userdata.teacher_id != '') {
		teacher_id = userdata.teacher_id;
	}
	if (typeof userdata.rating != 'undefined' && userdata.rating != '') {
		rating = userdata.rating;
	}

	if (typeof userdata.review != 'undefined' && userdata.review != '') {
		review = userdata.review;
	}

	if (typeof userdata.student_id != 'undefined' && userdata.student_id != '') {
		student_id = userdata.student_id;
	}

	pool.getConnection(function (err, connection) {
		Query='SELECT id FROM reviews WHERE teacher_id ="'+teacher_id+'" AND student_id="'+student_id+'" AND status !="2"';
		
		console.log(Query);
		connection.query(Query, function(err, checkRate){
			if(err){
				resultJson = '{"replyCode":"error","replyMsg":"'+err.message+'","cmd":"rating"}\n';
				connection.release();
				callback(200, null, resultJson);
				return;
			}else{
				if(checkRate.length && checkRate[0].id != '' && checkRate[0].id != 0){
					Query = 'UPDATE reviews SET review="' + review + '",teacher_id="' + teacher_id + '",student_id="' + student_id + '",rating="' + rating + '",status="0",created=NOW() WHERE id = "'+checkRate[0].id+'" '
				}else{
					Query='INSERT INTO reviews SET review="' + review + '",teacher_id="' + teacher_id + '",student_id="' + student_id + '",rating="' + rating + '",status="0",created=NOW()';
						var Query2='SELECT name,last_name FROM users WHERE id ="'+student_id+'" ';
					connection.query(Query2, function(err, names){
			        var username = names[0].name+''+names[0].last_name
					var queryinsert = 'INSERT INTO teacher_review_rating SET stu_name="' + username + '",teacher_id="' + teacher_id + '",feedback="'+review+'",rating="'+rating+'"';
					
					connection.query(queryinsert)
					})
				}	
				console.log(Query);
				connection.query(Query, function(err, rate){
					if(err){
						resultJson = '{"replyCode":"error","replyMsg":"'+err.message+'","cmd":"rating"}\n';
						connection.release();
						callback(200, null, resultJson);
						return;
					}else{
						connection.query('SELECT ROUND(AVG (reviews.rating),1) as rating from reviews WHERE reviews.teacher_id="'+teacher_id+'" AND status !="2" ', function(err, rateData){
							if(err){
								resultJson = '{"replyCode":"error","replyMsg":"'+err.message+'","cmd":"rating"}\n';
								connection.release();
								callback(200, null, resultJson);
								return;
							}else{
								resultJson = '{"replyCode":"success","replyMsg":"rating succefull", "data":'+JSON.stringify(rateData[0])+',"cmd":"rating"}\n';
								console.log(resultJson);
								connection.release();
								callback(200, null, resultJson);
								return;	
							}
						})
					}
				})		
			}
		});	
	});
}



// Update status
function update_reviews_status(userdata, pool, callback) {
	var resultJson = '';
	var id = '';
	var status = '0'; //0-inactive , 1-approve , 2- delete
	var Uquery = '';

	if (typeof userdata.id != 'undefined' && userdata.id != '') {
		id = userdata.id;
	}

	if (typeof userdata.status != 'undefined' && userdata.status != '') {
		status = userdata.status;
	}

	console.log('----------');
	console.log(userdata);

	pool.getConnection(function (err, connection) {
		Uquery = 'UPDATE reviews SET status="' + status + '" WHERE id = ' + id + '';
		connection.query(Uquery, function (errinsert) {
			if (!errinsert) {
				resultJson = '{"replyCode":"success","replyMsg":"Status chenged Successfully","cmd":"projectss"}';
				connection.release();
				callback(200, null, resultJson);
				return;
			} else {
				resultJson = '{"replyCode":"error","replyMsg":"' + errinsert.message + '","cmd":"projectss"}\n';
				connection.release();
				callback(200, null, resultJson);
				return;
			}
		});
	});
}


// user documents

function user_documents_list(userdata, pool, callback) {
	var resultJson = "";
  
	var Keyconditoin = "";
	var keyword = "";
	var user_id = "";
	if (typeof userdata.keyword != "undefined" && userdata.keyword != "") {
	  keyword = userdata.keyword;
	}
	if (typeof userdata.user_id != "undefined" && userdata.user_id != "") {
	  user_id = userdata.user_id;
	}
  
	pool.getConnection(function (err, connection) {
	  if (keyword != "") {
		Keyconditoin = ' AND user_documents.document_name LIKE  "%' + keyword + '%"';
	  }
	  detailsquery ='SELECT user_documents.* from user_documents where user_documents.status !="2" AND user_id="'+user_id+'" ' + Keyconditoin + "";
	  console.log("detailsquery", detailsquery);
	  connection.query(detailsquery, function (errSelDetails, resSelDetails) {
		if (errSelDetails) {
		 resultJson='{"replyCode":"error","replyMsg":"'+errSelDetails.message+'","cmd":"user_documents_list"}\n';
		  connection.release();
		  callback(200, null, resultJson);
		  return;
		} else {
		 resultJson='{"replyCode":"success","replyMsg":"Details found successfully .","data":'+JSON.stringify(resSelDetails)+',"cmd":"user_documents_list"}\n';
		  console.log("res-suceess");
		  connection.release();
		  callback(200, null, resultJson);
		  return;
		}
	  });
	});
}
  
function add_user_documents(userdata, pool, callback) {
	var resultJson = "";
	var document_name = "";
	var document = "";
	var user_id = "";
	var id = "";
  
	if (typeof userdata.id != "undefined" && userdata.id != "") {
	  id = userdata.id;
	}
	if (typeof userdata.document_name != "undefined" && userdata.document_name != "") {
	  document_name = userdata.document_name;
	}
	
	if (typeof userdata.user_id != "undefined" && userdata.user_id != "") {
	  user_id = userdata.user_id;
	}
  
	if (typeof userdata.document != "undefined" && userdata.document != "") {
	  document = userdata.document;
	}
	
	/* ESTABLISH CONNECTION TO DATABASE */
	pool.getConnection(function (err, connection) {
	    		var checkqurey = 'SELECT * from user_documents where  document_name="' + document_name + '" and user_id="' + user_id + '"';
	    			  connection.query(checkqurey, function (errinsert, resultcheck) {
						console.log(resultcheck.length,"resultcheck");
	    			      if(resultcheck.length>0){
	    			          		var queryinsert='UPDATE user_documents SET document="'+document+'",status ="0" where document_name="'+document_name+'" and user_id="'+user_id+'"';
	    			      }else{
	    			          		var queryinsert='INSERT INTO user_documents SET document_name="'+document_name+'",document="'+document+'",user_id="'+user_id+'",created= NOW()';

	    			      }

	
	  console.log(queryinsert);
	  connection.query(queryinsert, function (errinsert, resultinsert) {
		if (!errinsert) {
		  resultJson =
			'{"replyCode":"success","replyMsg":"user documents updated successfully","cmd":"user_documents"}\n';
		  connection.release();
		  callback(200, null, resultJson);
		  return;
		} else {
		  resultJson =
			'{"replyCode":"error","replyMsg":"' +
			errinsert.message +
			'","cmd":"user_documents"}\n';
		  console.log("res-suceess");
		  connection.release();
		  callback(400, null, resultJson);
		  return;
		}
	  });
	  });
	});
  }
  
  /*user_documents details*/
  function user_documents_details(userdata, pool, callback) {
	var resultJson = "";
	var id = "";
  
	if (typeof userdata.id != "undefined" && userdata.id != "") {
	  id = userdata.id;
	}
	
  
	console.log("----------");
	console.log(userdata);
  
	pool.getConnection(function (err, connection) {
	var Catquery = 'SELECT * FROM user_documents WHERE id="' + id + '"';
	  console.log("qq", Catquery);
	  connection.query(Catquery, function (errinsert, resultinsert) {
		if (!errinsert) {
		  if (resultinsert.length > 0) {
			var res = resultinsert[0];
		  } else {
			var res = [];
		  }
		  resultJson='{"replyCode":"success","replyMsg":"user_documents details","data":'+JSON.stringify(res)+"}\n";
		  connection.release();
		  callback(200, null, resultJson);
		  return;
		} else {
		  resultJson='{"replyCode":"error","replyMsg":"'+errinsert.message+'","cmd":"user_documents"}\n';
		  connection.release();
		  callback(200, null, resultJson);
		  return;
		}
	  });
	});
  }
  
  // Update stsutus
function update_user_documents_status(userdata, pool, callback) {
	var resultJson = "";
	var id = "";
	var status = "0"; //0-un approve , 1-approved , 2- delete
	var Uquery = "";
  
	if (typeof userdata.id != "undefined" && userdata.id != "") {
	  id = userdata.id;
	}
  
	if (typeof userdata.status != "undefined" && userdata.status != "") {
	  status = userdata.status;
	}
  
	console.log("----------");
	console.log(userdata);
  
	pool.getConnection(function (err, connection) {
	  Uquery = 'UPDATE user_documents SET status="' + status + '" WHERE id = ' + id + "";
	  connection.query(Uquery, function (errinsert) {
		if (!errinsert) {
		  resultJson =
			'{"replyCode":"success","replyMsg":"Status chenged Successfully","cmd":"user_documents"}';
		  connection.release();
		  callback(200, null, resultJson);
		  return;
		} else {
		  resultJson='{"replyCode":"error","replyMsg":"'+errinsert.message+'","cmd":"user_documents"}\n';
		  connection.release();
		  callback(200, null, resultJson);
		  return;
		}
	  });
	});
}
 
// mark teacher fav

/* Favourite / Unfavourite teacher*/
function mark_favourite(userdata, pool, callback){
	var resultJson = '';
	var strJson = '';
	var Hashids = require("hashids"), hashids = new Hashids(secretSalt);
	var user_id = "";
	var teacher_id = "";
	var type = "1";//1-mark , 0- unmark
	
	if (typeof userdata.user_id != 'undefined' && userdata.user_id != '') {
		user_id = userdata.user_id;
	}
	if (typeof userdata.teacher_id != 'undefined' && userdata.teacher_id != '') {
		teacher_id = userdata.teacher_id;
	}
	if (typeof userdata.type != 'undefined' && userdata.type != '') {
		type = userdata.type.toString();
	}

	pool.getConnection(function (err, connection) {
		
		console.log(type);
		if(type=="1"){
			Query='INSERT INTO user_favourites SET teacher_id ="'+teacher_id+'",user_id = "'+user_id+'",created=NOW()';
		}else{
			Query='DELETE FROM user_favourites WHERE teacher_id="'+teacher_id+'" AND user_id = "'+user_id+'"';
		}
		console.log(Query);
		connection.query(Query, function(err, users){
			if(err){
				resultJson = '{"replyCode":"error","replyMsg":"'+err.message+'","cmd":"teacher_favourite"}\n';
				connection.release();
				callback(200, null, resultJson);
				return;
			}else{
				resultJson = '{"replyCode":"success","replyMsg":"Fav status updated", "cmd":"teacher_favourite"}\n';
				console.log(resultJson);
				connection.release();
				callback(200, null, resultJson);
				return;
			}
		});
	});
}

function delete_user(userdata, pool, callback) {
	var Hashids = require("hashids"),
	  hashids = new Hashids(secretSalt);
  
	var resultJson = "";
	var Cquery = "";
	var id = "";
  
	if (typeof userdata.id != "undefined" && userdata.id != "") {
	  id = userdata.id;
	}
  
	pool.getConnection(function (err, connection) {
	  Cquery = "DELETE users.* FROM users WHERE users.id = " + id + " " ;
	  
	  console.log(Cquery);
	  connection.query(Cquery, function (err, ordData) {
		if (err) {
		resultJson='{"replyCode":"error","replyMsg":"'+err.message+'","cmd":"subadmin_details"}\n';
		  connection.release();
		  callback(200, null, resultJson);
		  return;
		} else {
		  var sid = hashids.encode(ordData[0].id);
		  resultJson='{"replyCode":"success","replyMsg":"Sub admin Details","data":'+JSON.stringify(ordData[0])+',"sid":"'+sid+'","cmd":"subadmin_details"}\n';
		  console.log("res-suceess");
		  connection.release();
		  callback(200, null, resultJson);
		  return;
		}
	  });
	});
  }

//add parent

function add_parent(userdata, pool, callback) {
	var resultJson = '';
	var strJson = '';
	var sha1 = require('sha1');
	var Hashids = require('hashids'),
		hashids = new Hashids(secretSalt);

	var name = '';
	var last_name = '';
	var email = '';
	var password = '123456';
	var role_id = '5';
	var phone = '';
	var country = '';
	var sid = '';

	var ConQuery = '';

	if (typeof userdata.email != 'undefined' && userdata.email != '') {
		email = userdata.email;
	}
	if (typeof userdata.password != 'undefined' && userdata.password != '') {
		password = userdata.password;
	}
	if (typeof userdata.name != 'undefined' && userdata.name != '') {
		name = userdata.name;
	}
	if (typeof userdata.last_name != 'undefined' && userdata.last_name != '') {
		last_name = userdata.last_name;
	}

	if (typeof userdata.phone != 'undefined' && userdata.phone != '') {
		phone = userdata.phone;
	}
	if (typeof userdata.country != 'undefined' && userdata.country != '') {
		country = userdata.country;
	}
	if (typeof userdata.sid != 'undefined' && userdata.sid != '') {
		sid = userdata.sid;
	}


	/* ESTABLISH CONNECTION TO DATABASE */
	pool.getConnection(function (err, connection) {
		var hash_password = sha1(secretSalt + userdata.password);
		var uid = hashids.decode(sid);
		connection.query('SELECT * from users where email = "' + email + '" AND email != ""', function (
			erremail,
			resultsemail
		) {
			if (!erremail) {
				var pagingCount1 = resultsemail.length;
				console.log(userdata);
				console.log(pagingCount1);
				if (pagingCount1 > 0) {
					var user_id = resultsemail[0].id;
					if (resultsemail[0].status == '1') {
						resultJson =
							'{"replyCode":"error","replyMsg":"Email already Registered, please try with different email address","cmd":"sign_up"}\n';
						connection.release();
						callback(200, null, resultJson);
						return;
					} else {
						resultJson =
							'{"replyCode":"error","replyMsg":"Your account not Verified or Deativiated.","cmd":"sign_up"}\n';
						connection.release();
						callback(200, null, resultJson);
						return;
					}
				} else {
					var queryinsert='INSERT INTO users SET email="'+email+'",name = "'+name+'",last_name = "'+last_name+'", password = "'+hash_password+'",phone = "'+phone+'",role_id="5",country="'+country+'",status="1",verified="1",created= NOW()';

					console.log(queryinsert);
					connection.query(queryinsert, function (errinsert, resultinsert) {
						if (!errinsert) {
							connection.query('UPDATE users SET parent_id = "' +resultinsert.insertId +'" WHERE id = "' +uid +'"')
							resultJson = '{"replyCode":"success","replyMsg":"Registered successfully"}\n';
							connection.release();
							callback(200, null, resultJson);
							return;
						} else {
							resultJson =
								'{"replyCode":"error","replyMsg":"' + errinsert.message + '","cmd":"sign_up"}\n';
							console.log('res-suceess');
							connection.release();
							callback(400, null, resultJson);
							return;
						}
					});
				}
			} else {
				resultJson = '{"replyCode":"error","replyMsg":"' + err.message + '","cmd":"sign_up"}\n';
				connection.release();
				callback(400, null, resultJson);
				return;
			}
		});
	});
}

function update_parent(userdata, pool, callback) {
	var sha1 = require('sha1');
	var resultJson = '';
	var strJson = '';
	var name = '';
	var last_name = '';
	var email = '';
	var role_id = '5';
	var country = '';
	var phone = '';
	var id = '';

	var ConQuery = '';

	if (typeof userdata.email != 'undefined' && userdata.email != '') {
		email = userdata.email;
	}
	if (typeof userdata.name != 'undefined' && userdata.name != '') {
		name = userdata.name;
	}
	if (typeof userdata.last_name != 'undefined' && userdata.last_name != '') {
		last_name = userdata.last_name;
	}

	if (typeof userdata.phone != 'undefined' && userdata.phone != '') {
		phone = userdata.phone;
	}
	if (typeof userdata.country != 'undefined' && userdata.country != '') {
		country = userdata.country;
	}

	if (typeof userdata.password != 'undefined' && userdata.password != '') {
		password = userdata.password;
	}

	if (typeof userdata.id != 'undefined' && userdata.id != '') {
		id = userdata.id;
	} else {
		resultJson = '{"replyCode":"error","replyMsg":"Your uid is not Correct","cmd":"update_subadmin"}\n';
		callback(200, null, resultJson);
		return;
	}

	var Uquery = '';

	console.log('----------');
	console.log(userdata);

	pool.getConnection(function (err, connection) {
		checkValidateEmailEmpProfile(userdata, pool, function (responseEmail) {
			console.log(responseEmail);
			if (responseEmail == false) {
				Uquery='UPDATE users SET email="'+email+'",name = "'+name+'",last_name = "'+last_name+'",phone = "'+phone+'",country="'+country+'" WHERE id = '+id;

				connection.query(Uquery, function (errinsert, resultinsert) {
					if (!errinsert) {
						resultJson = '{"replyCode":"success","replyMsg":"Profile Updated Successfully"}\n';
						connection.release();
						callback(200, null, resultJson);
						return;
					} else {
						resultJson =
							'{"replyCode":"error","replyMsg":"' + errinsert.message + '","cmd":"Update_profile"}\n';
						connection.release();
						callback(200, null, resultJson);
						return;
					}
				});
			} else {
				resultJson =
					'{"replyCode":"error","replyMsg":"Email already Taken, please try with different email address ","cmd":"Update_profile"}\n';
				console.log('res-suceess');
				connection.release();
				callback(200, null, resultJson);
			}
		});
	});
}


function parent_details(userdata, pool, callback) {
	var resultJson = "";
	var Keyconditoin = "";
	var parent_id = "";
	
	if (typeof userdata.parent_id != "undefined" && userdata.parent_id != "") {
	  parent_id = userdata.parent_id;
	}
  
	pool.getConnection(function (err, connection) {
	 	
	  detailsquery ='SELECT users.* from users where users.status !="2" AND id="'+parent_id+'"';
	  console.log("detailsquery", detailsquery);
	  connection.query(detailsquery, function (errSelDetails, resSelDetails) {
		if (errSelDetails) {
		 resultJson='{"replyCode":"error","replyMsg":"'+errSelDetails.message+'","cmd":"user_documents_list"}\n';
		  connection.release();
		  callback(200, null, resultJson);
		  return;
		} else {
		 resultJson='{"replyCode":"success","replyMsg":"Details found successfully .","data":'+JSON.stringify(resSelDetails)+',"cmd":"user_documents_list"}\n';
		  console.log("res-suceess");
		  connection.release();
		  callback(200, null, resultJson);
		  return;
		}
	  });
	});
}


  
function student_fav_teacher_list(userdata, pool, callback) {
	var resultJson = "";
	var strJson = "";
	var keyword = "";
	var sid='';
	var start = "0";
	var limit = "";
	
	var Keyconditoin = ' users.status ="1" AND role_id="3"';
	var result = [];
	var limitStr='';
	if (typeof userdata.keyword != "undefined" && userdata.keyword != "") {
	  keyword = userdata.keyword;
	}
	if (typeof userdata.start != "undefined" && userdata.start != "") {
	  start = userdata.start;
	}
	if (typeof userdata.limit != "undefined" && userdata.limit != "") {
	  limit = userdata.limit;
	}
	if (typeof userdata.sid != "undefined" && userdata.sid != "") {
	  sid = userdata.sid;
	}
	
  
	if (limit != "") {
	  limitStr = "LIMIT " + start + ", " + limit + "";
	}
	pool.getConnection(function (err, connection) {
		if (keyword != "") {
			Keyconditoin += ' AND users.name LIKE  "%' + keyword + '%"';
		}
		var student_id = hashids.decode(sid);

		var Catquery ='SELECT user_favourites.id,users.*,(SELECT ROUND(AVG (reviews.rating),1) from reviews WHERE reviews.teacher_id=users.id AND reviews.status = "1") as avg_rating,(SELECT count(*) from user_favourites WHERE user_favourites.user_id="'+student_id+'" AND user_favourites.teacher_id=users.id) as favourite FROM users LEFT JOIN user_favourites as user_favourites ON user_favourites.teacher_id = users.id WHERE  user_favourites.user_id="'+student_id+'" ' +Keyconditoin +" ORDER BY users.id DESC " +limitStr + "";
  
		connection.query(Catquery, function (err, result) {
		if (err) {
			resultJson='{"replyCode":"error","replyMsg":"'+err.message+'","cmd":"user_list_fav"}\n';
			connection.release();
			callback(200, null, resultJson);
			return;
		} else {
			if (result.length > 0) {
				resultJson='{"replyCode":"success","replyMsg":"User list","data":'+JSON.stringify(result)+', "cmd":"user_list_fav"}\n';
				console.log("res-suceess");
				connection.release();
				callback(200, null, resultJson);
				return;
			} else {
			resultJson =
				'{"replyCode":"success","replyMsg":"No Record found.","data":[], "cmd":"user_list_fav"}\n';
			console.log("res-suceess");
			connection.release();
			callback(200, null, resultJson);
			return;
			}
		}
		});
	});
}

//blogs

function web_blog_list(userdata, pool, callback) {
	var resultJson = "";
  
	var Keyconditoin = "";
	var keyword = "";
	var featured = '';
	var type = ''; //'0-student,1-teaher,2-parent'

	if (typeof userdata.keyword != "undefined" && userdata.keyword != "") {
	  keyword = userdata.keyword;
	}
	if (typeof userdata.featured != "undefined" && userdata.featured != "") {
	  featured = userdata.featured;
	}
	if (typeof userdata.type != "undefined" && userdata.type != "") {
	  type = userdata.type;
	}
	
	pool.getConnection(function (err, connection) {
	  if (keyword != "") {
		Keyconditoin = ' AND blog.title LIKE  "%' + keyword + '%"';
	  }
	  if (featured != "") {
		Keyconditoin = ' AND blog.featured ="' + featured + '"';
	  }
	  if (type != "") {
		Keyconditoin = ' AND blog.type ="' + type + '"';
	  }
	  detailsquery ='SELECT blog.*,users.name,users.image as user_image from blog LEFT JOIN users as users ON users.id = blog.user_id  where blog.status ="1"' + Keyconditoin + "";
	  console.log("detailsquery", detailsquery);
	  connection.query(detailsquery, function (errSelDetails, resSelDetails) {
		if (errSelDetails) {
		 resultJson='{"replyCode":"error","replyMsg":"'+errSelDetails.message+'","cmd":"blog_list"}\n';
		  connection.release();
		  callback(200, null, resultJson);
		  return;
		} else {
		 resultJson='{"replyCode":"success","replyMsg":"Details found successfully .","data":'+JSON.stringify(resSelDetails)+',"cmd":"blog_list"}\n';
		  console.log("res-suceess");
		  connection.release();
		  callback(200, null, resultJson);
		  return;
		}
	  });
	});
}


/*blog details*/
function blog_details(userdata, pool, callback) {
	var resultJson = "";
	var id = "";
	var slug = "";
  
	if (typeof userdata.id != "undefined" && userdata.id != "") {
	  id = userdata.id;
	}
	if (typeof userdata.slug != "undefined" && userdata.slug != "") {
	  slug = userdata.slug;
	}
  
	console.log("----------");
	console.log(userdata);
  
	pool.getConnection(function (err, connection) {
	  if (id != "") {
		var Catquery = 'SELECT blog.*,users.name,users.image as user_image FROM blog LEFT JOIN users as users ON users.id = blog.user_id WHERE blog.id="' + id + '"';
	  } else {
		var Catquery = 'SELECT blog.*,users.name,users.image as user_image FROM blog LEFT JOIN users as users ON users.id = blog.user_id WHERE blog.slug="' + slug + '"';
	  }
	  console.log("qq", Catquery);
	  connection.query(Catquery, function (errinsert, resultinsert) {
		if (!errinsert) {
		  if (resultinsert.length > 0) {
			var res = resultinsert[0];
		  } else {
			var res = [];
		  }
		  resultJson='{"replyCode":"success","replyMsg":"cms details","data":'+JSON.stringify(res)+"}\n";
		  connection.release();
		  callback(200, null, resultJson);
		  return;
		} else {
		  resultJson='{"replyCode":"error","replyMsg":"'+errinsert.message+'","cmd":"cms"}\n';
		  connection.release();
		  callback(200, null, resultJson);
		  return;
		}
	  });
	});
}

function aval_courses_list_for_student(userdata, pool, callback) 
{
    var detailsquery=''
	pool.getConnection(function (err, connection) {
	detailsquery== 'SELECT courses.* from courses where courses.status ="1" ';
	connection.query(detailsquery, function (errSelDetails, resSelDetails) {
		console.log("ssssssssssssssssssssssss", resSelDetails);

		if (errSelDetails) {
		 resultJson='{"replyCode":"error","replyMsg":"'+errSelDetails.message+'","cmd":"aval_courses_list_for_student"}\n';
		  connection.release();
		  callback(200, null, resultJson);
		  return;
		} else {
		 resultJson='{"replyCode":"success","replyMsg":"Details found successfully .","data":'+JSON.stringify(resSelDetails)+',"cmd":"aval_courses_list_for_student"}\n';
		  console.log("res-suceess");
		  connection.release();
		  callback(200, null, resultJson);
		  return;
		}
	  });
	})
}
// student_booked_classes
function student_booked_classess_data(userdata, pool, callback) {
	var student_id = "";
	if (typeof userdata.student_id != "undefined" && userdata.student_id != "") {
		student_id = userdata.student_id;
	}
	pool.getConnection(function (err, connection) {
			
		// 'SELECT student_booked_classes.*,users.name as student_name,teachers.name as teacher_name,teachers.name as teacher_name,teachers.image as teacher_image,teachers.city 
		// as teacher_city,categories.name,categories.image,categories.status,categories.learning from student_booked_classes LEFT JOIN users as 
		// users ON users.id = student_booked_classes.student_id LEFT JOIN users as teachers ON teachers.id = 
		// student_booked_classes.teacher_id LEFT JOIN categories as categories ON categories.id = student_booked_classes.subject_id where student_booked_classes.status !="2" ' + Keyconditoin + "";
	 detailsquery = 'SELECT student_booked_classes.* from student_booked_classes where student_booked_classes.student_id="' + student_id + '"';
	//  detailsquery = 'SELECT student_booked_classes.*,users.name as student_name,teachers.name as teacher_name,teachers.name as teacher_name,teachers.image as teacher_image,teachers.city 	 as teacher_city,categories.name,categories.image,categories.status,categories.learning from student_booked_classes LEFT JOIN users as 	 users ON users.id ="' + student_id + '" LEFT JOIN users as teachers ON teachers.id = student_booked_classes.teacher_id LEFT JOIN categories as categories ON categories.id = student_booked_classes.subject_id where student_booked_classes.status !="2"';
	 connection.query(detailsquery, function (errSelDetails, resSelDetails) {
		if (errSelDetails) {
		 resultJson='{"replyCode":"error","replyMsg":"'+errSelDetails.message+'","cmd":"student_booked_classes"}\n';
		  connection.release();
		  callback(200, null, resultJson);
		  return;
		} else {
		 resultJson='{"replyCode":"success","replyMsg":"Details found successfully .","data":'+JSON.stringify(resSelDetails)+',"cmd":"student_booked_classes"}\n';
		  console.log("res-suceess");
		  connection.release();
		  callback(200, null, resultJson);
		  return;
		}
	  });
	})
}

function student_courses_list(userdata, pool, callback) {
	var resultJson = "";
  
	var Keyconditoin = "";
	var keyword = "";
	var student_id = "";
	var teacher_id = "";
	console.log('userdata',userdata)
	if (typeof userdata.keyword != "undefined" && userdata.keyword != "") {
	  keyword = userdata.keyword;
	}
	if (typeof userdata.student_id != "undefined" && userdata.student_id != "") {
	  student_id = userdata.student_id;
	}
	if (typeof userdata.teacher_id != "undefined" && userdata.teacher_id != "") {
	  teacher_id = userdata.teacher_id;
	}
  
	pool.getConnection(function (err, connection) {
	  if (keyword != "") {
		Keyconditoin = ' AND student_course_subscription.document_name LIKE  "%' + keyword + '%"';
	  }
	  
	  if (student_id != "") {
		Keyconditoin = ' AND student_course_subscription.student_id ="' + student_id + '"';
	  }
	  if (teacher_id != "") {
		Keyconditoin = ' AND student_course_subscription.teacher_id ="' + teacher_id + '"';
	  }

	  detailsquery ='SELECT student_course_subscription.*,users.name as student_name,teachers.name as teacher_name,teachers.name as teacher_name,teachers.image as teacher_image,teachers.city as teacher_city,courses.course_name,courses.description,courses.image,courses.dummy_rating,courses.no_of_classes from student_course_subscription LEFT JOIN users as users ON users.id = student_course_subscription.student_id LEFT JOIN users as teachers ON teachers.id = student_course_subscription.teacher_id LEFT JOIN courses as courses ON courses.id = student_course_subscription.course_id where student_course_subscription.status !="2" ' + Keyconditoin + "";
	  console.log("detailsquery", detailsquery);
	  connection.query(detailsquery, function (errSelDetails, resSelDetails) {
		console.log("ssssssssssssssssssssssss", resSelDetails);

		if (errSelDetails) {
		 resultJson='{"replyCode":"error","replyMsg":"'+errSelDetails.message+'","cmd":"student_course_subscription_list"}\n';
		  connection.release();
		  callback(200, null, resultJson);
		  return;
		} else {
		 resultJson='{"replyCode":"success","replyMsg":"Details found successfully .","data":'+JSON.stringify(resSelDetails)+',"cmd":"student_course_subscription_list"}\n';
		  console.log("res-suceess");
		  connection.release();
		  callback(200, null, resultJson);
		  return;
		}
	  });
	});
}



function check_student_subscription(userdata, pool, callback){
	var resultJson = '';
	var Cquery = '';
	var res ='';
	var sha1 = require('sha1');
	var Hashids = require("hashids"), hashids = new Hashids(secretSalt);
	var sid = '';
	
	if (typeof userdata.sid != 'undefined' && userdata.sid != '') {
		sid = userdata.sid;
	}

	pool.getConnection(function (err, connection) {
		var studentId = hashids.decode(sid);
		Cquery='SELECT student_course_subscription.*,courses.learning,courses.course_type,courses.course_name,courses.terms,courses.sub_title,courses.age_group_id,teacher.name as teacher_name,teacher.phone as teacher_phone,teacher.id as teacher_id,student.name as student_name,student.id as student_id,student.phone as student_phone,student.parents_name,student.parents_name as school_name FROM student_course_subscription as student_course_subscription  LEFT JOIN users as student ON student.id = student_course_subscription.student_id LEFT JOIN users as teacher ON teacher.id = student_course_subscription.teacher_id LEFT JOIN courses as courses ON courses.id = student_course_subscription.course_id WHERE student_course_subscription.student_id = '+studentId+' AND student_course_subscription.status="1" AND courses.course_type="1" ORDER BY student_course_subscription.id ASC';
		
		console.log(Cquery);
		connection.query(Cquery, function(err, ordData){
			if(err){
				resultJson = '{"replyCode":"error","replyMsg":"'+err.message+'","cmd":"check_student_subscription"}\n';
				connection.release();
				callback(200, null, resultJson);
				return;
			}else{
				var quey='SELECT COUNT(demo_class_requests.id) from demo_class_requests where demo_class_requests.user_id = '+studentId+'';
				console.log(quey);
				connection.query(quey, function(errD, ordD){
					if(errD){
						resultJson = '{"replyCode":"error","replyMsg":"'+errD.message+'","cmd":"check_student_subscription"}\n';
						connection.release();
						callback(200, null, resultJson);
						return;
					}else{
						if(ordData.length>0){
							res =ordData;
						}else{
							res	=[];
						}						
						resultJson = '{"replyCode":"success","replyMsg":"check_student_subscriptions","data":'+JSON.stringify(res)+',"demo":'+JSON.stringify(ordD)+',"cmd":"check_student_subscription"}\n';
						console.log('res-suceess');
						connection.release();
						callback(200, null, resultJson);
						return;	
					}
				})	
				
			}
		})
	});
}

function student_subscription(userdata, pool, callback){
	var resultJson = '';
	var course_id = '';
	var student_id = '';
	var transaction_id = '';
	var price = '0';
	var created_by = '';
	var parents_name = '';
	var student_name = '';
	var course_name = '';
	var phone = '';
	var course_start_date='0000-00-00';
	var learning='0';
	
	if (typeof userdata.id != 'undefined' && userdata.id != '') {
		id = userdata.id;
	}
	if (typeof userdata.course_id != 'undefined' && userdata.course_id != '') {
		course_id = userdata.course_id;
	}
	
	if (typeof userdata.student_id != 'undefined' && userdata.student_id != '') {
		student_id = userdata.student_id;
	}
	if (typeof userdata.transaction_id != 'undefined' && userdata.transaction_id != '') {
		transaction_id = userdata.transaction_id;
	}
	if (typeof userdata.created_by != 'undefined' && userdata.created_by != '') {
		created_by = userdata.created_by;
	}
	if (typeof userdata.price != 'undefined' && userdata.price != '') {
		price = userdata.price;
	}
	if (typeof userdata.parents_name != 'undefined' && userdata.parents_name != '') {
		parents_name = userdata.parents_name;
	}
	if (typeof userdata.student_name != 'undefined' && userdata.student_name != '') {
		student_name = userdata.student_name;
	}
	if (typeof userdata.course_name != 'undefined' && userdata.course_name != '') {
		course_name = userdata.course_name;
	}
	if (typeof userdata.phone != 'undefined' && userdata.phone != '') {
		phone = userdata.phone;
	}
	if (typeof userdata.course_start_date != 'undefined' && userdata.course_start_date != '') {
		course_start_date = userdata.course_start_date;
	}
	if (typeof userdata.learning != 'undefined' && userdata.learning != '') {
		learning = userdata.learning;
	}
	
	/* ESTABLISH CONNECTION TO DATABASE */
	pool.getConnection(function (err, connection) {

		var queryinsert ='INSERT INTO student_course_subscription SET course_id="'+course_id+'",student_id="'+student_id+'",transaction_id="'+transaction_id+'",price="'+price+'",course_start_date=NOW(),created_by="'+created_by+'",created= NOW()';
		console.log(queryinsert);
		connection.query(queryinsert, function(errinsert, resultinsert){
			if(!errinsert){
				resultJson = '{"replyCode":"success","replyMsg":"course subscribed successfully", "cmd":"register"}\n';
				console.log('res-suceess');
				connection.release();
				callback(200, null, resultJson);
				return;
			}else{
				resultJson = '{"replyCode":"error","replyMsg":"'+errinsert.message+'","cmd":"student_course_subscription"}\n';
				console.log('res-suceess');
				connection.release();
				callback(400, null, resultJson);
				return;
			}
		});
	});
}


function student_classes_list(userdata, pool, callback){
	var sha1 = require('sha1');
	var Hashids = require("hashids"), hashids = new Hashids(secretSalt);
	var resultJson = '';
	
	var student_id='';	
	
	if (typeof userdata.student_id != 'undefined' && userdata.student_id != '') {
		student_id = userdata.student_id;
	}
	
	pool.getConnection(function (err, connection) {
		
		detailsquery = 'SELECT student_booked_classes.*,user_time_schedule_slots.time_from,user_time_schedule_slots.time_to,course_chapters.chapter_title,course_chapters.chapter_description,teacher.name as teacher_name,teacher.id as teacher_id,student.name as student_name,student.id as student_id,student.phone as student_phone,student.parents_name,student.parents_name as school_name from student_booked_classes as student_booked_classes LEFT JOIN users as student ON student.id = student_booked_classes.student_id LEFT JOIN users as teacher ON teacher.id = student_booked_classes.teacher_id  LEFT JOIN course_chapters as course_chapters ON course_chapters.id = student_booked_classes.chapter_id LEFT JOIN user_time_schedule_slots as user_time_schedule_slots ON user_time_schedule_slots.id = student_booked_classes.slot_id where student_booked_classes.student_id ="'+student_id+'" ';
		console.log('detailsquery',detailsquery);
		connection.query(detailsquery, function(errSelDetails,resSelDetails){
			if(errSelDetails){
				resultJson = '{"replyCode":"error","replyMsg":"'+errSelDetails.message+'","cmd":"courses_list"}\n';
				connection.release();
				callback(200, null, resultJson);
				return;
			}else{
				resultJson = '{"replyCode":"success","replyMsg":"Details found successfully .","data":'+JSON.stringify(resSelDetails)+',"cmd":"courses_list"}\n';
				console.log('res-suceess');
				connection.release();
				callback(200, null, resultJson);
				return;
			}
		});
	});
}



// student project lists

function student_projects_list(userdata, pool, callback){
	var sha1 = require('sha1');
	var Hashids = require("hashids"), hashids = new Hashids(secretSalt);
	var resultJson = '';
	var sid = '';
	var in_review='0';	//1-in-review,2-review-complete,3-calnceled
	var Keyconditoin=' AND student_projects.status ="1"';
	if (typeof userdata.in_review != 'undefined' && userdata.in_review != '') {
		in_review = userdata.in_review;
	}
	if (typeof userdata.sid != 'undefined' && userdata.sid != '') {
		sid = userdata.sid;
	}

	if(in_review !=''){
		Keyconditoin +=' AND student_projects.in_review ="'+in_review+'"';
	}
	
	pool.getConnection(function (err, connection) {
		var student_id=hashids.decode(sid);
		//refrence_id
		detailsquery = 'SELECT student_projects.*,student_projects.id as student_project_id,projects.project_title,projects.earn_points,projects.image,projects.description as project_description,course_chapters.chapter_title,course_chapters.chapter_description,teacher.name as teacher_name,teacher.id as teacher_id,student.name as student_name,student.id as student_id,student.phone as student_phone,student.parents_name,student.parents_name as school_name from student_projects as student_projects LEFT JOIN users as student ON student.id = student_projects.student_id LEFT JOIN users as teacher ON teacher.id = student_projects.teacher_id  LEFT JOIN course_chapters as course_chapters ON course_chapters.id = student_projects.chapter_id LEFT JOIN projects as projects ON projects.id = student_projects.project_id where student_projects.student_id ="'+student_id+'" '+Keyconditoin+'';
		console.log('detailsquery',detailsquery);
		connection.query(detailsquery, function(errSelDetails,resSelDetails){
			if(errSelDetails){
				resultJson = '{"replyCode":"error","replyMsg":"'+errSelDetails.message+'","cmd":"student_projects_list"}\n';
				connection.release();
				callback(200, null, resultJson);
				return;
			}else{
				resultJson = '{"replyCode":"success","replyMsg":"Details found successfully .","data":'+JSON.stringify(resSelDetails)+',"cmd":"student_projects_list"}\n';
				console.log('res-suceess');
				connection.release();
				callback(200, null, resultJson);
				return;
			}
		});
	});
}


// student quiz list

function student_quizzes_list(userdata, pool, callback){
	var sha1 = require('sha1');
	var Hashids = require("hashids"), hashids = new Hashids(secretSalt);
	var resultJson = '';
	var sid = '';
	var in_review='0';	//1-in-review,2-review-complete,3-calnceled
	var Keyconditoin=' AND student_quizzes.status ="1"';
	if (typeof userdata.in_review != 'undefined' && userdata.in_review != '') {
		in_review = userdata.in_review;
	}
	if (typeof userdata.sid != 'undefined' && userdata.sid != '') {
		sid = userdata.sid;
	}

	if(in_review !=''){
		Keyconditoin +=' AND student_quizzes.in_review ="'+in_review+'"';
	}
	
	pool.getConnection(function (err, connection) {
		var student_id=hashids.decode(sid);
		
		detailsquery = 'SELECT student_quizzes.*,(SELECT SUM(quizzes_questions.points) from quizzes_questions where quizzes_questions.id = student_quizzes.quiz_id ) as total_points,quizzes.quiz_title,quizzes.quiz_description as project_description,course_chapters.chapter_title,course_chapters.chapter_description,teacher.name as teacher_name,teacher.id as teacher_id,student.name as student_name,student.id as student_id,student.phone as student_phone,student.parents_name,student.parents_name as school_name from student_quizzes as student_quizzes LEFT JOIN users as student ON student.id = student_quizzes.student_id LEFT JOIN users as teacher ON teacher.id = student_quizzes.teacher_id  LEFT JOIN course_chapters as course_chapters ON course_chapters.id = student_quizzes.chapter_id LEFT JOIN quizzes as quizzes ON quizzes.id = student_quizzes.quiz_id where student_quizzes.student_id ="'+student_id+'" '+Keyconditoin+'';
		console.log('detailsquery',detailsquery);
		connection.query(detailsquery, function(errSelDetails,resSelDetails){
			if(errSelDetails){
				resultJson = '{"replyCode":"error","replyMsg":"'+errSelDetails.message+'","cmd":"student_quizzes_list"}\n';
				connection.release();
				callback(200, null, resultJson);
				return;
			}else{
				resultJson = '{"replyCode":"success","replyMsg":"Details found successfully .","data":'+JSON.stringify(resSelDetails)+',"cmd":"student_quizzes_list"}\n';
				console.log('res-suceess');
				connection.release();
				callback(200, null, resultJson);
				return;
			}
		});
	});
}

/* parent child List */
function parent_childs_list(userdata, pool, callback) {
	var resultJson = "";
	var strJson = "";
	var keyword = "";
	var parent_id = "";
	var Keyconditoin = ' users.status !="2" ';
	
	if (typeof userdata.keyword != "undefined" && userdata.keyword != "") {
	  keyword = userdata.keyword;
	}
	if (typeof userdata.parent_id != "undefined" && userdata.parent_id != "") {
	  parent_id = userdata.parent_id;
	}
	
	pool.getConnection(function (err, connection) {
	  if (keyword != "") {
		Keyconditoin += ' AND users.name LIKE  "%' + keyword + '%"';
	  }
  
	  if (parent_id != "") {
		Keyconditoin += ' AND users.parent_id ="' + parent_id + '"';
	  }
  
	  var Catquery ='SELECT users.*,(SELECT COUNT(id) from student_course_subscription where student_course_subscription.student_id=users.id AND student_course_subscription.status="1") as subscribed,age_group.title FROM users LEFT JOIN age_group as age_group ON age_group.id = users.age_group_id  WHERE  ' +Keyconditoin +" ORDER BY users.id DESC";
  
	  console.log("Catquery", Catquery);
  
	  var countquery =
		"SELECT count(*) as count from users WHERE " + Keyconditoin + "";
	  // console.log('countquery::::::::::::::::----------',countquery)
	  connection.query(countquery, function (err, responsecount) {
		// console.log('responsecount::::::::::::::::----------',responsecount)
		if (responsecount && responsecount[0].count > 0) {
		  connection.query(Catquery, function (err, result) {
			if (err) {
			  resultJson='{"replyCode":"error","replyMsg":"'+err.message+'","cmd":"parent_childs_list"}\n';
			  connection.release();
			  callback(200, null, resultJson);
			  return;
			} else {
			  if (result.length > 0) {
				  resultJson='{"replyCode":"success","replyMsg":"User list","data":'+JSON.stringify(result)+',"totalCount":'+responsecount[0].count+', "cmd":"parent_childs_list"}\n';
				  console.log("res-suceess");
				  connection.release();
				  callback(200, null, resultJson);
				  return;
			  } else {
				resultJson =
				  '{"replyCode":"success","replyMsg":"No Record found.","data":[], "cmd":"parent_childs_list"}\n';
				console.log("res-suceess");
				connection.release();
				callback(200, null, resultJson);
				return;
			  }
			}
		  });
		} else {
		  resultJson =
			'{"replyCode":"success","replyMsg":"parent_childs_list","data":[], "cmd":"parent_childs_list"}\n';
		  console.log(resultJson);
		  connection.release();
		  callback(200, null, resultJson);
		  return;
		}
	  });
	});
}



/*Create Review Rating*/
function create_support(userdata, pool, callback){
	var resultJson = '';
	var Query='';
	var user_id='';
	var type=''; //1-student,2-parent,3-teahcer	
	var message = '';
	if (typeof userdata.user_id != 'undefined' && userdata.user_id != '') {
		user_id = userdata.id;
	}
	if (typeof userdata.message != 'undefined' && userdata.message != '') {
		message = userdata.message;
	}

	if (typeof userdata.type != 'undefined' && userdata.type != '') {
		type = userdata.type;
	}

	pool.getConnection(function (err, connection) {
			
		Query='INSERT INTO supports SET user_id="' + user_id + '",type="' + type + '",message="' + message + '",status="0",created=NOW()';
		console.log(Query);
		connection.query(Query, function(err, rate){
			if(err){
				resultJson = '{"replyCode":"error","replyMsg":"'+err.message+'","cmd":"support"}\n';
				connection.release();
				callback(200, null, resultJson);
				return;
			}else{
				connection.query(
                    'SELECT * FROM email_templates WHERE email_type = "registration_user"',
                    function (err, resultTemplate) {
                      if (resultTemplate.length > 0) {
						console.log('length',resultTemplate.length);
                        var nodemailer = require("nodemailer");
                        var message = resultTemplate[0].message;
                        var sender_email = resultTemplate[0].sender_email;
                        var name = userdata.name;
						
                        var last_name = userdata.last_name;
                        var email = userdata.user_email;
                        var msg = userdata.message;
                        
                        var user_email = userdata.user_email;
                        message = message.replace("[name]", name);
                        message = message.replace("[last_name]", last_name);
                        message = message.replace("[user_email]", user_email);
                        // message = message.replace("[phone]", phone);
                        message = message.replace("[msg]", msg);
                        // message = message.replace("[url]",`<a href=${url}></a>`);
                       
                

                        // setup e-mail data with unicode symbols
                        var mailOptions = {
                          from: user_email,// sender address
                          to: email,sender_email, // list of receivers
                          subject: resultTemplate[0].subject, // Subject line
                          html: message, // html body
                        };
                        //from: smtpMailUser,
						console.log('in mail box')
						// var transporter = nodemailer.createTransport(smtpConfig);

                        // send mail with defined transport object
                        transporter.sendMail(
                          mailOptions,
                          function (error, info) {
                            if (error) {
                              resultJson =
                                '{"replyCode":"error","replyMsg":"Error in sending email.","cmd":"enquiries"}\n';
                              connection.release();
							

                              callback(200, null, resultJson);
                              return;
                            } else {
                              var id = userdata.id;
                              resultJson =
                                '{"replyCode":"success", "data":' +
                                JSON.stringify(resultJson[0]) +
                                ',"sid":"' +
                                id +
                                '","replyMsg":"Mail send successfully."}\n';
							

                              connection.release();
                              callback(200, null, resultJson);
                              return;
                            }
                          }
                        );
                      }
                    }
                  );
				resultJson = '{"replyCode":"success","replyMsg":"support enquiry sent succefully","cmd":"support"}\n';
				
				
				callback(200, null, resultJson);
				return;	
			}
		})
	});
}



/*Create user invitation*/
function save_user_invitation(userdata, pool, callback){
	console.log(userdata);
	var resultJson = '';
	var Query='';
	var user_id='';
	var email = '';
	var name = '';
	var user_email = '';
	var phone = '';
	var email = '';

	if (typeof userdata.user_id != 'undefined' && userdata.user_id != '') {
		user_id = userdata.user_id;
	}
	if (typeof userdata.email != 'undefined' && userdata.email != '') {
		email = userdata.email;
	}



	pool.getConnection(function (err, connection) {
			
		Query='INSERT INTO user_invitations SET user_id="' + user_id + '",email="' + email + '",status="0",created=NOW()';
		console.log(Query);
		connection.query(Query, function(err, rate){
			if(err){
				resultJson = '{"replyCode":"error","replyMsg":"'+err.message+'","cmd":"invitation"}\n';
				connection.release();
				callback(200, null, resultJson);
				return;
			}else{
				
				
				connection.query(
                    'SELECT * FROM email_templates WHERE email_type = "referral_code"',
                    function (err, resultTemplate) {
                      if (resultTemplate.length > 0) {
						console.log('length',resultTemplate.length);
                        var nodemailer = require("nodemailer");
                        var message = resultTemplate[0].message;
                        var name = userdata.name;
                        var last_name = userdata.last_name;
                        var email = userdata.email;
                        var phone = userdata.phone;
                        var url = userdata.url;
                        var user_email = userdata.user_email;
                        message = message.replace("[name]", name);
                        message = message.replace("[last_name]", last_name);
                        message = message.replace("[user_email]", user_email);
                        message = message.replace("[phone]", phone);
                        message = message.replace("[email]", email);
                        message = message.replace("[url]",`<a href=${url}></a>`);
                       
                

                        // setup e-mail data with unicode symbols
                        // var mailOptions = {
                        //   from: user_email,// sender address
                        //   to: email, // list of receivers
                        //   subject: resultTemplate[0].subject, // Subject line
                        //   html: message, // html body
                        // };
                        //from: smtpMailUser,
						console.log('in mail box')
						// var transporter = nodemailer.createTransport(smtpConfig);

                        // send mail with defined transport object
                        transporter.sendMail(
                          mailOptions,
                          function (error, info) {
                            if (error) {
                              resultJson =
                                '{"replyCode":"error","replyMsg":"Error in sending email.","cmd":"enquiries"}\n';
                              connection.release();
							  console.log('narender',resultJson);

                              callback(200, null, resultJson);
                              return;
                            } else {
                              var id = userdata.id;
                              resultJson =
                                '{"replyCode":"success", "data":' +
                                JSON.stringify(results[0]) +
                                ',"sid":"' +
                                id +
                                '","replyMsg":"Mail send successfully."}\n';
								console.log('kumarr',esultJson);

                              connection.release();
                              callback(200, null, resultJson);
                              return;
                            }
                          }
                        );
                      }
                    }
                  );
				// resultJson = '{"replyCode":"success","replyMsg":" invitation sent succefully","cmd":"invitation"}\n';
				// console.log(resultJson);
				// connection.release();
				// callback(200, null, resultJson);
				// return;	
			}
		})
	});
}
//  function invite_friend(Request ){
// 	var reId = base64_decode(request.id);
// 	request.session().put('reId', $reId);
// 	return redirect()->to('en/p/register');

// }
//user invitation list

function user_invitation_list(userdata, pool, callback) {
	var resultJson = "";
	var user_id = "";
  
	if (typeof userdata.user_id != "undefined" && userdata.user_id != "") {
	  user_id = userdata.user_id;
	}
	
	console.log("----------");
	console.log("user id is", user_id);
  
	pool.getConnection(function (err, connection) {
		var Catquery = 'SELECT * FROM user_invitations WHERE user_id=' + user_id + '';	
		console.log("qq", Catquery);
		connection.query(Catquery, function (errinsert, resultinsert) {
			if (!errinsert) {
			if (resultinsert.length > 0) {
				var res = resultinsert;
			} else {
				var res = [];
			}
			resultJson='{"replyCode":"success","replyMsg":"cms details","data":'+JSON.stringify(res)+"}\n";
			connection.release();
			callback(200, null, resultJson);
			return;
			} else {
			resultJson='{"replyCode":"error","replyMsg":"'+errinsert.message+'","cmd":"cms"}\n';
			connection.release();
			callback(200, null, resultJson);
			return;
			}
		});
	});
}



function chat_group_list(userdata, pool, callback) {
	var resultJson = "";
	var user_id = "";
	var from_user = "";
	var start = '0';
	var limit = '';
	var keyword = "";
	var Keyconditoin = "";
	console.log(userdata,'chat_grop details');
  
	if (typeof userdata.user_id != "undefined" && userdata.user_id != "") {
	  user_id = userdata.user_id;
	}
	if (typeof userdata.keyword != "undefined" && userdata.keyword != "") {
		keyword = userdata.keyword;
	  }
	if (typeof userdata.start != "undefined" && userdata.start != "") {
			start = userdata.start;
		  }
		  if (typeof userdata.limit != "undefined" && userdata.limit != "") {
			limit = userdata.limit;
		  }
	
	console.log(userdata,'key');
  
	pool.getConnection(function (err, connection) {
	    	if (user_id != "" && from_user !="") {
			Keyconditoin += 'chat_group.to_user="' + user_id + '" AND chat_group.from_user="' + from_user + '"';
		}
		if (user_id != "") {
			Keyconditoin += 'chat_group_user.user_id="' + user_id + '"';
		}
		if (keyword != "" && keyword!=undefined) {
			Keyconditoin += ' and chat_group.group_name LIKE  "%' + keyword + '%"';
		}
		
		console.log(Keyconditoin,'Keyconditoin');
		var Catquery = 'SELECT chat_group.* FROM chat_group LEFT JOIN chat_group_user as chat_group_user ON chat_group_user.chat_group_id = chat_group.id WHERE ' +Keyconditoin;	
		console.log("qq", Catquery);
		connection.query(Catquery, function (errinsert, resPro) {
			if (!errinsert) {
				console.log('resPro',resPro);
				if(resPro.length >0){
					var i = 0;
					async.eachSeries(resPro,function(rec2, loop2){
						var chat_group_id = rec2.id;
						console.log('chat_group_id',chat_group_id);
						Cquery='SELECT chat_group_user.* from chat_group_user WHERE  chat_group_user.chat_group_id="'+chat_group_id+'"';
						console.log('Cquery',Cquery);
						connection.query(Cquery, function(errSelpiMG,respROiMG){
							if(errSelpiMG){
								console.log('errSelpiMG',errSelpiMG);
								loop2();
							}else{
								resPro[i].users=respROiMG;
								loop2();
							}
							i=i+1;
						});
					},function(errSelPro){
						if(errSelPro){
							console.log('errSelPro',errSelPro);
							resultJson = '{"replyCode":"error","replyMsg":"'+errSelPro.message+'","cmd":"chat_group_list"}\n';
							connection.release();
							callback(200, null, resultJson);
							return;
						}else{
							resultJson = '{"replyCode":"success","replyMsg":"Details found successfully .","data":'+JSON.stringify(resPro)+',"cmd":"chat_group_list"}\n';
							console.log('res-suceess');
							connection.release();
							callback(200, null, resultJson);
							return;
						}
					});
				}else{
					resultJson = '{"replyCode":"success","replyMsg":"No Record found.","data":[], "cmd":"chat_group_list"}\n';
					console.log('res-suceess');
					connection.release();
					callback(200, null, resultJson);
					return;
				}
			} else {
				resultJson='{"replyCode":"error","replyMsg":"'+errinsert.message+'","cmd":"chat group"}\n';
				connection.release();
				callback(200, null, resultJson);
				return;
			}
		});
	});
}




function chat_group_details(userdata, pool, callback) {
	var resultJson = "";
	var chat_group_id = "";
  
	if (typeof userdata.chat_group_id != "undefined" && userdata.chat_group_id != "") {
	  chat_group_id = userdata.chat_group_id;
	}
	
	console.log("----------");
	console.log(userdata);
  
	pool.getConnection(function (err, connection) {
		var Catquery = 'SELECT chat_group.* FROM chat_group WHERE chat_group.id="' + chat_group_id + '"';	
		console.log("qq", Catquery);
		connection.query(Catquery, function (errinsert, resPro) {
			if (!errinsert) {
				if(resPro.length >0){
					console.log('chat_group_id',chat_group_id);
					Cquery='SELECT chat_group_user.*,users.name,users.image from chat_group_user LEFT JOIN users as users ON users.id = chat_group_user.user_id  WHERE  chat_group_user.chat_group_id="'+chat_group_id+'"';
					console.log('Cquery',Cquery);
					connection.query(Cquery, function(errSelpiMG,respROiMG){
						if(errSelpiMG){
							console.log('errSelpiMG',errSelpiMG);
							resultJson='{"replyCode":"error","replyMsg":"'+errSelpiMG.message+'","cmd":"chat group"}\n';
							connection.release();
							callback(200, null, resultJson);
							return;
						}else{
							resPro[0].users=respROiMG;
							Chatquery='SELECT chat_group_message.*,users.name,users.image from chat_group_message LEFT JOIN users as users ON users.id = chat_group_message.user_id  WHERE  chat_group_message.chat_group_id="'+chat_group_id+'" order by id ASC';
							console.log('Chatquery',Chatquery);
							connection.query(Chatquery, function(errChatmsg,resChat){
								if(errChatmsg){
									console.log('errChatmsg',errChatmsg);
									resultJson='{"replyCode":"error","replyMsg":"'+errSelpiMG.message+'","cmd":"chat group"}\n';
									connection.release();
									callback(200, null, resultJson);
									return;
								}else{
								    if(resChat[resChat.length-1]?.sendby!=userdata.user_id){
									queryss='UPDATE `chat_group_message` SET `read_status` = "1" WHERE chat_group_id="'+chat_group_id+'"'
									connection.query(queryss)}
									resPro[0].chat=resChat;
									resultJson = '{"replyCode":"success","replyMsg":"Details found successfully .","data":'+JSON.stringify(resPro)+',"cmd":"chat_group_list"}\n';
									console.log('res-suceess');
									connection.release();
									callback(200, null, resultJson);
									return;
								}
							
							});
							
						}
					
					});
				}else{
					resultJson = '{"replyCode":"success","replyMsg":"No Record found.","data":[], "cmd":"chat_group_details"}\n';
					console.log('res-suceess');
					connection.release();
					callback(200, null, resultJson);
					return;
				}
			} else {
				resultJson='{"replyCode":"error","replyMsg":"'+errinsert.message+'","cmd":"chat group"}\n';
				connection.release();
				callback(200, null, resultJson);
				return;
			}
		});
	});
}


/*Create chat group*/
//09-04-2023
// function create_chat_group(userdata, pool, callback){
// 	var resultJson = '';
// 	var Query='';
// 	var group_name='';
// 	var from_user_id='';
// 	var to_user_id='';
// 	var for_multiple='';
// 	var student_name='';
// 	console.log(userdata,'user data');
// 	// return userdata;
//     console.log(userdata.user_id,'userdata');
// // return userdata;
// 	if (typeof userdata.group_name != 'undefined' && userdata.group_name != '') {
// 		group_name = userdata.group_name;
// 	}
// 	else
// 	{
// 		group_name='';
// 	}
// 	if (typeof userdata.user_id != 'undefined' && userdata.user_id != '') {
// 		from_user_id = userdata.user_id;
// 	}

// 	if (typeof userdata.to_user_id != 'undefined' && userdata.to_user_id != '') {
// 		to_user_id = userdata.to_user_id;
// 	}
// 	if (typeof userdata.for_multiple != 'undefined' && userdata.for_multiple != '') {
// 		for_multiple = userdata.for_multiple;
// 	}
// 	if (typeof userdata.student_name != 'undefined' && userdata.student_name != '') {
// 		student_name = userdata.student_name;
// 	}
	
	
// 	pool.getConnection(function (err, connection) {
// 			qureyselect='Select * from chat_group WHERE group_name="'+ group_name + '"';
// 				connection.query(qureyselect, function(err, rate){
// 				    console.log(rate,err,'lengthlength');
// 				    if(rate.length>0){
// 				    var chat_group_id =rate
				 
//             									resultJson = '{"replyCode":"success","replyMsg":"Details found successfully .","data":'+JSON.stringify(chat_group_id)+',"cmd":"chat_group_list"}\n';
//             									console.log('res-suceess');
//             									connection.release();
//             									callback(200, null, resultJson);
//             									return;
            			
		
// 				    }
			
//        else{
// 		Query='INSERT INTO chat_group SET group_name="' + group_name + '",student_name="' + student_name + '",for_multiple="' + for_multiple + '",from_user="' + from_user_id + '",to_user="'+to_user_id+'",created=NOW()';
		
// 		connection.query(Query, function(err, rate){
// 		    				    console.log(rate,err,'rate is');

// 			if(err){
		
// 				            resultJson = '{"replyCode":"error","replyMsg":"'+err.message+'","cmd":"chat group"}\n';
// 				            connection.release();
// 				            callback(200, null, resultJson);
// 				            return;
			
// 			}else{
// 				var chat_group_id=rate.insertId;
// 				Query1='INSERT INTO chat_group_user SET chat_group_id="' + chat_group_id + '",user_id="'+from_user_id+'",created=NOW()';
// 				connection.query(Query1);
				
// 				Query2='INSERT INTO chat_group_user SET chat_group_id="' + chat_group_id + '",user_id="'+to_user_id+'",created=NOW()';
// 				connection.query(Query2);

// 				resultJson = '{"replyCode":"success","replyMsg":" chat group created succefully","cmd":"invitation","chat_group_id":'+chat_group_id+'}\n';
// 				console.log(resultJson);
// 				connection.release();
// 				callback(200, null, resultJson);
// 				return;	
// 			}
// 		})
// }
// 	})
// 	});
// }
function create_chat_group(userdata, pool, callback){
	var resultJson = '';
	var Query='';
	var group_name='';
	var from_user_id='';
	var to_user_id='';
	var for_multiple='';
	var student_name='';
	console.log(userdata,'user data');
	// return userdata;
    console.log(userdata.user_id,'userdata');
// return userdata;
	if (typeof userdata.group_name != 'undefined' && userdata.group_name != '') {
		group_name = userdata.group_name;
	}
	else
	{
		group_name='';
	}
	if (typeof userdata.user_id != 'undefined' && userdata.user_id != '') {
		from_user_id = userdata.user_id;
	}

	if (typeof userdata.to_user_id != 'undefined' && userdata.to_user_id != '') {
		to_user_id = userdata.to_user_id;
	}
	if (typeof userdata.for_multiple != 'undefined' && userdata.for_multiple != '') {
		for_multiple = userdata.for_multiple;
	}
	if (typeof userdata.student_name != 'undefined' && userdata.student_name != '') {
		student_name = userdata.student_name;
	}
	
	
	pool.getConnection(function (err, connection) {
			// qureyselect='Select * from chat_group WHERE group_name="'+ group_name + '"';
			qureyselect='Select * from chat_group WHERE from_user="'+ from_user_id + '" and to_user="'+ to_user_id + '" ';
				connection.query(qureyselect, function(err, rate){
				    console.log(rate,err,'lengthlength');
				    if(rate.length){
				    var chat_group_id =rate[0].id
				 
            									resultJson = '{"replyCode":"success","replyMsg":"Details found successfully .","data":'+JSON.stringify(chat_group_id)+',"cmd":"chat_group_list"}\n';
            									console.log('res-suceess');
            									connection.release();
            									callback(200, null, resultJson);
            									return;
            			
		
				    }
			
       else{
		Query='INSERT INTO chat_group SET group_name="' + group_name + '",student_name="' + student_name + '",for_multiple="' + for_multiple + '",from_user="' + from_user_id + '",to_user="'+to_user_id+'",created=NOW()';
		
		connection.query(Query, function(err, rate){
		    				    console.log(rate,err,'rate is');

			if(err){
		
				            resultJson = '{"replyCode":"error","replyMsg":"'+err.message+'","cmd":"chat group"}\n';
				            connection.release();
				            callback(200, null, resultJson);
				            return;
			
			}else{
				var chat_group_id=rate.insertId;
				Query1='INSERT INTO chat_group_user SET chat_group_id="' + chat_group_id + '",user_id="'+from_user_id+'",created=NOW()';
				connection.query(Query1);
				
				Query2='INSERT INTO chat_group_user SET chat_group_id="' + chat_group_id + '",user_id="'+to_user_id+'",created=NOW()';
				connection.query(Query2);

				resultJson = '{"replyCode":"success","replyMsg":" chat group created succefully","cmd":"invitation","data":'+chat_group_id+'}\n';
				console.log(resultJson);
				connection.release();
				callback(200, null, resultJson);
				return;	
			}
		})
}
	})
	});
}


/*Create chat group member*/
function add_chat_group_user(userdata, pool, callback){
	var resultJson = '';
	var Query='';
	var chat_group_id='';
	var user_id='';
	if (typeof userdata.chat_group_id != 'undefined' && userdata.chat_group_id != '') {
		chat_group_id = userdata.chat_group_id;
	}
	if (typeof userdata.user_id != 'undefined' && userdata.user_id != '') {
		user_id = userdata.user_id;
	}
	
	pool.getConnection(function (err, connection) {
			
		Query='INSERT INTO chat_group_user SET chat_group_id="' + chat_group_id + '",user_id="'+user_id+'",created=NOW()';
		console.log(Query);
		connection.query(Query, function(err, rate){
			if(err){
				resultJson = '{"replyCode":"error","replyMsg":"'+err.message+'","cmd":"chat group"}\n';
				connection.release();
				callback(200, null, resultJson);
				return;
			}else{
				resultJson = '{"replyCode":"success","replyMsg":" chat group created succefully","cmd":"invitation"}\n';
				console.log(resultJson);
				connection.release();
				callback(200, null, resultJson);
				return;	
			}
		})
	});
}

/*Create chat group*/
function update_chat_group(userdata, pool, callback){
	var resultJson = '';
	var Query='';
	var group_id='';
	var group_name='';
	var group_icon='';

	if (typeof userdata.group_id != 'undefined' && userdata.group_id != '') {
		group_id = userdata.group_id;
	}
	if (typeof userdata.group_name != 'undefined' && userdata.group_name != '') {
		group_name = userdata.group_name;
	}
	if (typeof userdata.group_icon != 'undefined' && userdata.group_icon != '') {
		group_icon = userdata.group_icon;
	}
	
	pool.getConnection(function (err, connection) {
			
		Query='UPDATE chat_group SET group_name="' + group_name + '",group_icon="'+group_icon+'" where id="'+group_id+'"';
		console.log(Query);
		connection.query(Query, function(err, rate){
			if(err){
				resultJson = '{"replyCode":"error","replyMsg":"'+err.message+'","cmd":"chat group"}\n';
				connection.release();
				callback(200, null, resultJson);
				return;
			}else{
				resultJson = '{"replyCode":"success","replyMsg":" chat group updated succefully","cmd":"invitation"}\n';
				console.log(resultJson);
				connection.release();
				callback(200, null, resultJson);
				return;	
			}
		})
	});
}


/*Create chat message*/
// function send_chat_message(userdata, pool, callback){
// 	var resultJson = '';
// 	var Query='';
// 	var chat_group_id='';
// 	var user_id = '';
// 	var message = '';
// 	var doc = '';

// 	if (typeof userdata.chat_group_id != 'undefined' && userdata.chat_group_id != '') {
// 		chat_group_id = userdata.chat_group_id;
// 	}
// 	if (typeof userdata.user_id != 'undefined' && userdata.user_id != '') {
// 		user_id = userdata.user_id;
// 	}
// 	if (typeof userdata.message != 'undefined' && userdata.message != '') {
// 		message = userdata.message;
// 	}
// 	if (typeof userdata.doc != 'undefined' && userdata.doc != '') {
// 		doc = userdata.doc;
// 	}

// 	pool.getConnection(function (err, connection) {
			
// 		Query='INSERT INTO chat_group_message SET chat_group_id="' + chat_group_id + '",user_id="' + user_id + '",message="'+message+'",doc="'+doc+'",created=NOW()';
// 		console.log(Query);
// 		connection.query(Query, function(err, rate){
// 			if(err){
// 				resultJson = '{"replyCode":"error","replyMsg":"'+err.message+'","cmd":"chat message"}\n';
// 				connection.release();
// 				callback(200, null, resultJson);
// 				return;
// 			}else{
// 				Query1='UPDATE chat_group_user SET message="' + message + '",doc="'+doc+'" where user_id="'+user_id+'"';
// 				console.log(Query1);
// 				connection.query(Query1);
// 				resultJson = '{"replyCode":"success","replyMsg":" chat message sent succefully","cmd":"invitation"}\n';
// 				console.log(resultJson);
// 				connection.release();
// 				callback(200, null, resultJson);
// 				return;	
// 			}
// 		})
// 	});
// }
function send_chat_message(userdata, pool, callback){
	var resultJson = '';
	var Query='';
	var chat_group_id='';
	var user_id = '';
	var message = '';
	var doc = '';
	var sendby = '';

	if (typeof userdata.chat_group_id != 'undefined' && userdata.chat_group_id != '') {
		chat_group_id = userdata.chat_group_id;
	}
	if (typeof userdata.user_id != 'undefined' && userdata.user_id != '') {
		user_id = userdata.user_id;
	}
	if (typeof userdata.message != 'undefined' && userdata.message != '') {
		message = userdata.message;
	}
	if (typeof userdata.doc != 'undefined' && userdata.doc != '') {
		doc = userdata.doc;
	}
	if (typeof userdata.sendby != 'undefined' && userdata.sendby != '') {
		sendby = userdata.sendby;
	}

	pool.getConnection(function (err, connection) {
			
		Query='INSERT INTO chat_group_message SET chat_group_id="' + chat_group_id + '",user_id="' + user_id + '",message="'+message+'",doc="'+doc+'",sendby="'+sendby+'",created=NOW()';
		console.log(Query);
		connection.query(Query, function(err, rate){
			if(err){
				resultJson = '{"replyCode":"error","replyMsg":"'+err.message+'","cmd":"chat message"}\n';
				connection.release();
				callback(200, null, resultJson);
				return;
			}else{
				Query1='UPDATE chat_group_user SET message="' + message + '",doc="'+doc+'" where user_id="'+user_id+'"';
				console.log(Query1);
				connection.query(Query1);
				resultJson = '{"replyCode":"success","replyMsg":" chat message sent succefully","cmd":"invitation"}\n';
				console.log(resultJson);
				connection.release();
				callback(200, null, resultJson);
				return;	
			}
		})
	});
}



function update_billing_address(userdata, pool, callback){
	var resultJson = '';
	var strJson = '';
	var sha1 = require('sha1');
	var Hashids = require("hashids"), 
	hashids = new Hashids(secretSalt);
	
	
	var user_id='';
	var b_last_name = '';
	var b_name = '';
	var bcity = '';
	var bpcode = '';
	var bstate= ''; 
	var bcountry= '';
	var time_zone= '';
	var billing_address = '';
	

	if (typeof userdata.user_id != 'undefined' && userdata.user_id != '') {
		user_id = userdata.user_id;
	}
	
	
	
	if (typeof userdata.b_name != 'undefined' && userdata.b_name != '') {
		b_name = userdata.b_name;
	}
	if (typeof userdata.b_last_name != 'undefined' && userdata.b_last_name != '') {
		b_last_name = userdata.b_last_name;
	}
	if (typeof userdata.billing_address != 'undefined' && userdata.billing_address != '') {
		billing_address = userdata.billing_address;
	}
	if (typeof userdata.bcity != 'undefined' && userdata.bcity != '') {
		bcity = userdata.bcity;
	}
	if (typeof userdata.bpcode != 'undefined' && userdata.bpcode != '') {
		bpcode = userdata.bpcode;
	}
	if (typeof userdata.bstate != 'undefined' && userdata.bstate != '') {
		bstate = userdata.bstate;
	}
	if (typeof userdata.bcountry != 'undefined' && userdata.bcountry != '') {
		bcountry = userdata.bcountry;
	}
	
	/* ESTABLISH CONNECTION TO DATABASE */
	pool.getConnection(function (err, connection) {
		var queryinsert = 'UPDATE users SET billing_address = "'+billing_address+'",bcountry = "'+bcountry+'",b_last_name = "'+b_last_name+'",b_name = "'+b_name+'",bstate = "'+bstate+'",bpcode = "'+bpcode+'",bcity = "'+bcity+'" where id="'+user_id+'"';
								
		
		console.log(queryinsert);
		connection.query(queryinsert, function(errinsert, resultinsert){
			if(!errinsert){
				
				resultJson = '{"replyCode":"success","data":'+JSON.stringify(resultinsert)+', "replyMsg":"Billing Address updated successfully."}\n';
				connection.release();
				callback(200, null, resultJson);
				return;
			}else{
				
				resultJson = '{"replyCode":"error","replyMsg":"'+errinsert.message+'","cmd":"update_teacher_profile"}\n';
				console.log('res-suceess');
				connection.release();
				callback(400, null, resultJson);
				return;
			}
		});
	});
}


function update_video_url(userdata, pool, callback){
	var resultJson = '';
	var strJson = '';
	var sha1 = require('sha1');
	var Hashids = require("hashids"), hashids = new Hashids(secretSalt);
	
	var user_id='';
	var video_url = '';
	var image = '';
	

	if (typeof userdata.user_id != 'undefined' && userdata.user_id != '') {
		user_id = userdata.user_id;
	}
	
	if (typeof userdata.video_url != 'undefined' && userdata.video_url != '') {
		video_url = userdata.video_url;
	}
	if (typeof userdata.image != 'undefined' && userdata.image != '') {
		image = userdata.image;
	}
	
	
	/* ESTABLISH CONNECTION TO DATABASE */
	pool.getConnection(function (err, connection) {
		var queryinsert = 'UPDATE users SET video_url = "'+video_url+'",image="'+image+'" where id="'+user_id+'"';
								
		
		console.log(queryinsert);
		connection.query(queryinsert, function(errinsert, resultinsert){
			if(!errinsert){
				
				resultJson = '{"replyCode":"success","replyMsg":"Profile changes updated successfully."}\n';
				connection.release();
				callback(200, null, resultJson);
				return;
			}else{
				
				resultJson = '{"replyCode":"error","replyMsg":"'+errinsert.message+'","cmd":"update_teacher_profile"}\n';
				console.log('res-suceess');
				connection.release();
				callback(400, null, resultJson);
				return;
			}
		});
	});
}


function user_drop_down(userdata, pool, callback) {
	var resultJson = "";
	var Keyconditoin = "";
	var  keyword='';
	if (typeof userdata.keyword != "undefined" && userdata.keyword != "") {
		keyword = userdata.keyword;
	  }
	if (keyword != "") {
		Keyconditoin += ' AND users.name LIKE  "%' + keyword + '%"';
	  }
	pool.getConnection(function (err, connection) {
	 	
	  detailsquery ='SELECT users.* from users where users.status !="2" '+Keyconditoin+'';
	  console.log("detailsquery", detailsquery);
	  connection.query(detailsquery, function (errSelDetails, resSelDetails) {
		if (errSelDetails) {
		 resultJson='{"replyCode":"error","replyMsg":"'+errSelDetails.message+'","cmd":"user_documents_list"}\n';
		  connection.release();
		  callback(200, null, resultJson);
		  return;
		} else {
		 resultJson='{"replyCode":"success","replyMsg":"Details found successfully .","data":'+JSON.stringify(resSelDetails)+',"cmd":"user_documents_list"}\n';
		  console.log("res-suceess");
		  connection.release();
		  callback(200,null, resultJson);
		  return;
		}
	  });
	});
}

/////////////////////////////////////
// merithub
////////////////////////////////////

// generate_jwt();
function generate_jwt(userdata, pool, callback) {
	console.log('log');
	const toBase64 = obj => {
		const str = JSON.stringify (obj);
		return Buffer.from(str).toString ('base64');
	 };
	 const replaceSpecialChars = b64string => {
	   return b64string.replace (/[=+/]/g, charToBeReplaced => {
		 switch (charToBeReplaced) {
		   case '=':
			 return '';
		   case '+':
			 return '-';
		   case '/':
			 return '_';
		 }
	   });
	 };
	 
	
	 const createSignature =(jwtB64Header,jwtB64Payload,secret)=>{
		 let signature = crypto.createHmac ('sha256', secret);
		 signature.update (jwtB64Header + '.' + jwtB64Payload);
		 signature = signature.digest ('base64');
		 signature = replaceSpecialChars (signature);
		 return signature
	 }
	 
	 //console.log(createSignature,'JWT'); 
	 var header={"alg": "HS256","typ": "JWT"}
	 var Payload={ "aud":"https://serviceaccount1.meritgraph.com/v1/ca2h72lonhcgtq9dq6s0/api/token",
	   "iss":"ca2h72lonhcgtq9dq6s0",
	   "expiry": 360000
	 }
	 
	 var secret = "$2a$04$DracfrOKefi14WnZtJQauuUvig.Waau9Z4DbqCbQU7wH2sNMXqLW6"
	
	 const b64Header = toBase64 (header);
	 const en_headerstr = replaceSpecialChars(b64Header);
	 const b64Payload = toBase64 (Payload);
	 const en_payloadstr = replaceSpecialChars(b64Payload);
	 const signatures= createSignature(en_headerstr,en_payloadstr,secret);
	 const jsonWebToken = en_headerstr + '.' + en_payloadstr + '.' + signatures;
	 console.log(createSignature,'JWT'); 
	 console.log ("Final JWT is access_token :",jsonWebToken);
	 // var access_token = get_access_token(jsonWebToken); //get_token(jsonWebToken)


	 var options = {
		'method': 'POST',
		'url': 'https://serviceaccount1.meritgraph.com/v1/ca2h72lonhcgtq9dq6s0/api/token',
		'headers': {
		  'Content-Type': 'application/x-www-form-urlencoded'
		},
		form: {
		  'grant_type': 'urn:ietf:params:oauth:grant-type:jwt-bearer',
		  'assertion': 'Bearer '+jsonWebToken
		}
	  };
	  request(options, function (error, response) {
		//if (error) throw new Error(error);
		//console.log(response.body);
				resultJson=response.body;
		console.log("res-suceess");
		callback(200,null, resultJson);
		return;
	  });


	//   const fetch1 = require('node-fetch');
	//  const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));
	// var myHeaders = new fetch1.Headers();
	// myHeaders.append("Content-Type", "application/x-www-form-urlencoded");
	// var urlencoded = new URLSearchParams();

	// urlencoded.append('grant_type','urn:ietf:params:oauth:grant-type:jwt-bearer')
	// urlencoded.append('assertion','Bearer '+{jsonWebToken})

	// var requestOptions = {
	// 	method: 'POST',
	// 	headers: myHeaders,
	// 	body:urlencoded
	// };

	// fetch("https://serviceaccount1.meritgraph.com/v1/ca2h72lonhcgtq9dq6s0/api/token", requestOptions)
	// 	.then(function(response) {
	// 	resultJson=JSON.stringify(response);
	// 	console.log("res-suceess");
	// 	callback(200,null, resultJson);
	// 	return;
	// })
	// 	.then(function(result){ 
	// 	resultJson='{"replyCode":"success","replyMsg":"Token generated successfully .","data2":'+JSON.stringify(result)+',"cmd":"token"}\n';
	// 	console.log("res-suceess");
	// 	callback(200,null, resultJson);
	// 	return;
	
	// })
	// 	.catch(function(error) {
	// 		resultJson='{"replyCode":"error","replyMsg":"Token generated successfully .","data3":'+JSON.stringify(error)+',"cmd":"token"}\n';
	// 		console.log("res-suceess");
	// 		callback(200,null, resultJson);
	// 		return;
	// });

	 //get_access_token(jsonWebToken);
	//  var body1 = {
	//  "assertion": "Bearer {jsonWebToken}",
	//  "grant_type": "urn:ietf:params:oauth:grant-type:jwt-bearer"
	//  };


	//  var hr = {
	// 	'content-type': 'application/x-www-form-urlencoded'
	// }

	//  request.post(
		// {
			// url:'https://serviceaccount1.meritgraph.com/v1/ca2h72lonhcgtq9dq6s0/api/token',body1,hr
		// },
		// function(error, response, body){
		// 	// console.log(error);
		// 	// console.log(response);
		// 	console.log(body,response,'errror');

			
		// 	//console.log('body-accesstoken', body)
		// 	resultJson='{"replyCode":"success","replyMsg":"userslist .","data":'+JSON.stringify(response)+',"cmd":"token"}\n';
		// 	console.log("res-suceess");
		// 	callback(200,null, response);
		// 	return;
		// }
	// );


	//  request.post('https://serviceaccount1.meritgraph.com/v1/ca2h72lonhcgtq9dq6s0/api/token',body)
	//  .then(({statusCode, body, headers}) => {
	//  	console.log('body-accesstoken', body.access_token)
		
	
	//  	// console.log(statusCode, body, headers)
	//  })
	// .catch((e) => {
	// 	console.log(e);
	// 	resultJson='{"replyCode":"error","replyMsg":"Something went wrong while generating token","cmd":"token"}\n';
	// 	console.log("res-suceess");
	// 	callback(200,null, resultJson);
	// 	return;
	// });
	//  console.log ("Merithub access_token :",access_token);


}

// use.get('/:id', function(req, res) {
//     res.send('id: ' + req.params.id);
//     console.log(req.params.id);
// });

function get_access_token(userdata, pool, callback) {
	const fetch = require('node-fetch');
	// const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));
	var myHeaders = new fetch.Headers();
	myHeaders.append("Content-Type", "application/x-www-form-urlencoded");
	var urlencoded = new URLSearchParams();

	urlencoded.append('grant_type','urn:ietf:params:oauth:grant-type:jwt-bearer')
	urlencoded.append('assertion','Bearer '+{userdata})

	var requestOptions = {
		method: 'POST',
		headers: myHeaders,
		body:urlencoded
	};

	fetch("https://serviceaccount1.meritgraph.com/v1/ca2h72lonhcgtq9dq6s0/api/token", requestOptions)
		.then(function(response) {return response})
		.then(result => console.warn(result,'result'))
		.catch(error => console.log('error', error));
}
function merithub_users_list(userdata, pool, callback) {

	var headers = {
		'Authorization': 'Bearer '+userdata.access_token+'',
		'content-type': 'application/json'
	}
console.log(userdata.access_token,'userdata.access_token');
	request.get(
		{
			url:'https://serviceaccount1.meritgraph.com/v1/ca2h72lonhcgtq9dq6s0/users',
			json: {},
			headers: headers
		},
		function(error, response, body){
			// console.log(error);
			// console.log(response);
			console.log(body,response,'errror');

			
			//console.log('body-accesstoken', body)
			resultJson='{"replyCode":"success","replyMsg":"userslist .","data":'+JSON.stringify(response)+',"cmd":"token"}\n';
			console.log("res-suceess");
			callback(200,null, response);
			
			return;
		}
	);

	// curl.get('https://serviceaccount1.meritgraph.com/v1/ca2h72lonhcgtq9dq6s0/users')
	// .then(({statusCode, body, headers}) => {
	// 	console.log('body-accesstoken', body)
	// 	resultJson='{"replyCode":"success","replyMsg":"userslist .","data":'+body+',"cmd":"token"}\n';
	// 	console.log("res-suceess");
	// 	callback(200,null, resultJson);
	// 	return;
	// })
	// .catch((e) => {
	// 	console.log(e);
	// });
}


function merithub_new_classes(userdata, pool, callback) {

var header = {
	'Authorization': userdata.access_token,
	'content-type': 'application/json'
}
console.log(userdata,'userdata.access');
request.post(
	{
		url:'https://class1.meritgraph.com/v1/ca2h72lonhcgtq9dq6s0/'+userdata.userId,
		json: {
			"title" : userdata.book_class_data.tution_frequency,
			"startTime" : userdata.book_class_data.schedule_slot_date,
			"recordingDownload": false, 
			"duration" : 60,          
			"lang" : "en", 
			"timeZoneId" : "Asia/Kolkata",
			"description" : "This is  for"+ userdata.book_class_data.tution_for, 
			"type" : "oneTime",              
			"access" : "private", 
			"login" : false, 
			"layout" : "CR",
			"status" : "up", 
			"recording" : {
				"record" : true,   
				"autoRecord": false, 
				"recordingControl": true,
				"hideRecording":false
			},
			"participantControl" : {
				"write" : false, 
				"audio" : false, 
				"video" : false  
			},
			
		},
		headers: header
	},
		function(error, response, body){
		
			if(response.body.code !='timeAlreadyPassed'){
			console.log(JSON.stringify(response),'errrorS');
			var commonHostLink = '';
			var commonModeratorLink = '';
			var commonParticipantLink = '';
			var hostLink = '';
			var classId = '';
			var class_id = '';
			
		
			if (typeof  userdata.book_class_data.id != 'undefined' &&  userdata.book_class_data.id != '') {
				class_id =  userdata.book_class_data.id;
			}
			
			if (typeof response.body.classId != 'undefined' && response.body.classId != '') {
				classId = response.body.classId;
			}
			if (typeof response.body.commonLinks.commonHostLink != 'undefined' && response.body.commonLinks.commonHostLink != '') {
				commonHostLink = response.body.commonLinks.commonHostLink;
			}
			if (typeof response.body.commonLinks.commonModeratorLink != 'undefined' && response.body.commonLinks.commonModeratorLink != '') {
				commonModeratorLink = response.body.commonLinks.commonModeratorLink;
			}
			if (typeof response.body.commonLinks.commonParticipantLink != 'undefined' && response.body.commonLinks.commonParticipantLink != '') {
				commonParticipantLink = response.body.commonLinks.commonParticipantLink;
			}
			if (typeof response.body.hostLink != 'undefined' && response.body.hostLink != '') {
				hostLink = response.body.hostLink;
			}
			
			
			/* ESTABLISH CONNECTION TO DATABASE */
			pool.getConnection(function (err, connection) {
				var queryinsert = 'UPDATE student_booked_classes SET classId="'+classId+'",commonHostLink="'+commonHostLink+'",commonModeratorLink="'+commonModeratorLink+'",commonParticipantLink="'+commonParticipantLink+'",hostLink="'+hostLink+'" where id="'+class_id+'"';
										
				
				connection.query(queryinsert, function(errinsert, resultinsert){
					if(!errinsert){
					    pool.getConnection(function (err, connection) {
							var q1='select email,name,last_name from users where id IN  ("52183","52180")'
							connection.query(q1, function(errinsert, resultinsert){ 
								connection.query(
									'SELECT * FROM email_templates WHERE email_type = "invite_link"',
									function (err, resultTemplate) {
									  if (resultTemplate.length > 0) {
										var nodemailer = require("nodemailer");
										var message = resultTemplate[0].message;
										var sender_email = resultTemplate[0].sender_email;
										href="https://merithub.com/ca2h72lonhcgtq9dq6s0/sessions/view/{{myclasslist?.classId}}/{{myclasslist?.commonParticipantLink}}"

										var msg='https://merithub.com/ca2h72lonhcgtq9dq6s0/sessions/view/'+classId+'/'+hostLink;
										var maillist = [
											resultinsert[0].email,
											resultinsert[1].email,
											
										  ];                       
										
										message = message.replace("[student]", resultinsert[0].name+' '+ resultinsert[0].last_name);
										message = message.replace("[msg]", msg);
									  
									
										var mailOptions = {
										  from: sender_email,// sender address
										  to: maillist, // list of receivers
										  subject: resultTemplate[0].subject, // Subject line
										  html: message, // html body
										};
										console.log('in mail box')
										var transporter = nodemailer.createTransport(smtpConfig);
				
										transporter.sendMail(mailOptions)									
									  }
									}
								  );
								
								
								
							})		})
							if(userdata.book_class_data.class_type==1){
							Bookquery ='UPDATE user_time_schedule_slots SET available = "0",class_id="'+userdata.book_class_data.id+'",type="1",status="1" WHERE id="'+userdata.book_class_data.slot_id+'"';
							console.log(Bookquery,'Bookquery');
							connection.query(Bookquery);}
						
						resultJson = '{"replyCode":"success","replyMsg":"merithub class link updated successfully."}\n';
						connection.release();
						callback(200, null, resultJson);
						return;
					}else{
						
						resultJson = '{"replyCode":"error","replyMsg":"'+errinsert.message+'","cmd":"update_teacher_profile"}\n';
						console.log('res-suceess');
						connection.release();
						callback(400, null, resultJson);
						return;
					}
				});
			});}
			else{
				esultJson='{"replyCode":"success","replyMsg":"userslist .","data":'+JSON.stringify(response.body.message)+',"cmd":"token"}\n';
		console.log("res-suceess");
		callback(200,null, response);
		return
			}
		
	})


}

function update_merithub_client_id(userdata, pool, callback){
	var resultJson = '';
	var strJson = '';
	var sha1 = require('sha1');
	var Hashids = require("hashids"), hashids = new Hashids(secretSalt);
	
	var user_id='';
	var merithub_client_id = '';
	

	if (typeof userdata.user_id != 'undefined' && userdata.user_id != '') {
		user_id = userdata.user_id;
	}
	
	if (typeof userdata.merithub_client_id != 'undefined' && userdata.merithub_client_id != '') {
		merithub_client_id = userdata.merithub_client_id;
	}
	
	
	/* ESTABLISH CONNECTION TO DATABASE */
	pool.getConnection(function (err, connection) {
		var queryinsert = 'UPDATE users SET merithub_client_id="'+merithub_client_id+'" where id="'+user_id+'"';
								
		
		connection.query(queryinsert, function(errinsert, resultinsert){
			if(!errinsert){
				
				resultJson = '{"replyCode":"success","replyMsg":"merithub client id updated successfully."}\n';
				connection.release();
				callback(200, null, resultJson);
				return;
			}else{
				
				resultJson = '{"replyCode":"error","replyMsg":"'+errinsert.message+'","cmd":"update_teacher_profile"}\n';
				console.log('res-suceess');
				connection.release();
				callback(400, null, resultJson);
				return;
			}
		});
	});
}

function update_merithub_class_links(userdata, pool, callback){
	console.log(userdata,'userdata123');
	var header = {
		'Authorization': userdata.access_token,
		'content-type': 'application/json'
	}
	console.log(userdata,'userdata.access');
	request.put(
		{
			url:'https://class1.meritgraph.com/v1/ca2h72lonhcgtq9dq6s0/'+userdata.classId,//+userdata.classId,//cg8s52l22mmdppstso6g
			json: {
				"title" : userdata.tution_frequency?userdata.tution_frequency:'Lets Learn',
				"startTime" : userdata.schedule_slot_date,
				"recordingDownload": false, 
				"duration" : 60,          
				"lang" : "en", 
				"timeZoneId" : "Asia/Kolkata",
				"description" : "This is  for"+ userdata.tution_for, 
				"type" : "oneTime",              
				"access" : "private", 
				"login" : false, 
				"layout" : "CR",
				"status" : "up", 
				"recording" : {
					"record" : true,   
					"autoRecord": false, 
					"recordingControl": true,
					"hideRecording":false
				},
				"participantControl" : {
					"write" : false, 
					"audio" : false, 
					"video" : false  
				},
				
			},
			headers: header
		},
			function(error, response, body){
				
				
				
				if(response.body.message=='success'){
	var resultJson = '';
	var strJson = '';
	var sha1 = require('sha1');
	var Hashids = require("hashids"), hashids = new Hashids(secretSalt);
	
	var class_id='';

	var classId = '';
	var commonHostLink = '';
	var commonModeratorLink = '';
	var commonParticipantLink = '';
	var hostLink = '';
	

	if (typeof userdata.class_id != 'undefined' && userdata.class_id != '') {
		class_id = userdata.class_id;
	}
	
	if (typeof userdata.classId != 'undefined' && userdata.classId != '') {
		classId = userdata.classId;
	}
	if (typeof userdata.commonHostLink != 'undefined' && userdata.commonHostLink != '') {
		commonHostLink = userdata.commonHostLink;
	}
	if (typeof userdata.commonModeratorLink != 'undefined' && userdata.commonModeratorLink != '') {
		commonModeratorLink = userdata.commonModeratorLink;
	}
	if (typeof userdata.commonParticipantLink != 'undefined' && userdata.commonParticipantLink != '') {
		commonParticipantLink = userdata.commonParticipantLink;
	}
	if (typeof userdata.hostLink != 'undefined' && userdata.hostLink != '') {
		hostLink = userdata.hostLink;
	}
	
	
	/* ESTABLISH CONNECTION TO DATABASE */
	pool.getConnection(function (err, connection) {
		var queryinsert = 'UPDATE student_booked_classes SET classId="'+classId+'",commonHostLink="'+commonHostLink+'",commonModeratorLink="'+commonModeratorLink+'",commonParticipantLink="'+commonParticipantLink+'",hostLink="'+hostLink+'" where id="'+class_id+'"';
								
		
		connection.query(queryinsert, function(errinsert, resultinsert){
			if(!errinsert){
				
				resultJson = '{"replyCode":"success","replyMsg":"merithub class link updated successfully."}\n';
				connection.release();
				callback(200, null, resultJson);
				return;
			}else{
				
				resultJson = '{"replyCode":"error","replyMsg":"'+errinsert.message+'","cmd":"update_class"}\n';
				console.log('res-suceess');
				connection.release();
				callback(400, null, resultJson);
				return;
			}
		});
	});
}
else{
	resultJson = '{"replyCode":"error","replyMsg":"Cannot Reschedule","cmd":"update_class"}\n';

	// resultJson = '{"replyCode":"error","replyMsg":"'+response.body.message+'","cmd":"update_class"}\n';
			
	callback(200, null, resultJson);
	return;
}
})
}

function update_merithub_studentclass_links(userdata, pool, callback){
	var resultJson = '';
	var strJson = '';
	var sha1 = require('sha1');
	var Hashids = require("hashids"), hashids = new Hashids(secretSalt);
	
	var class_id='';

	var studentLink = '';
	
	if (typeof userdata.class_id != 'undefined' && userdata.class_id != '') {
		class_id = userdata.class_id;
	}
	
	if (typeof userdata.studentLink != 'undefined' && userdata.studentLink != '') {
		studentLink = userdata.studentLink;
	}
	
	/* ESTABLISH CONNECTION TO DATABASE */
	pool.getConnection(function (err, connection) {
		var queryinsert = 'UPDATE student_booked_classes SET studentLink="'+studentLink+'" where id="'+class_id+'"';
								
		
		connection.query(queryinsert, function(errinsert, resultinsert){
			if(!errinsert){
				
				resultJson = '{"replyCode":"success","replyMsg":"merithub class link updated successfully."}\n';
				connection.release();
				callback(200, null, resultJson);
				return;
			}else{
				
				resultJson = '{"replyCode":"error","replyMsg":"'+errinsert.message+'","cmd":"update_teacher_profile"}\n';
				console.log('res-suceess');
				connection.release();
				callback(400, null, resultJson);
				return;
			}
		});
	});



// new function 

}
function teacher_review_rating(userdata, pool, callback) {
	var stu_name = '';
	var teacher_id = ''; 
	var feedback = '';
	var rating = '';
	
	

	if (typeof userdata.teacher_id != 'undefined' && userdata.teacher_id != '') {
		teacher_id = userdata.teacher_id;
	}

	if (typeof userdata.stu_name != 'undefined' && userdata.stu_name != '') {
		stu_name = userdata.stu_name;
	}
	if (typeof userdata.feedback != 'undefined' && userdata.feedback != '') {
		feedback = userdata.feedback;
	}
	if (typeof userdata.rating != 'undefined' && userdata.rating != '') {
		rating = userdata.rating;
	}

	

	/* ESTABLISH CONNECTION TO DATABASE */
	pool.getConnection(function (err, connection) {
		
			var queryinsert = 'INSERT INTO teacher_review_rating SET stu_name="' + stu_name + '",teacher_id="' + teacher_id + '",feedback="'+feedback+'",rating="'+rating+'"';
		
		console.log(queryinsert);
		connection.query(queryinsert, function (errinsert, resultinsert) {
			if (!errinsert) {
				resultJson = '{"replyCode":"success","replyMsg":"Tutor education updated successfully","cmd":"Tutor teacher_review_rating"}\n';
				connection.release();
				callback(200, null, resultJson);
				return;
			} else {
				resultJson = '{"replyCode":"error","replyMsg":"' + errinsert.message + '","cmd":"Tutor teacher_review_rating"}\n';
				console.log('res-suceess');
				connection.release();
				callback(400, null, resultJson);
				return;
			}
		});
		
	});
}
function teacher_review(userdata, pool, callback) {
	console.log(userdata.id,'anny');
	var resultJson = '';

	var id = '';

	if (typeof userdata.id != 'undefined' && userdata.id != '') {
		id = userdata.id;
	}
	pool.getConnection(function (err, connection) {
		var Query = 'SELECT * FROM teacher_review_rating WHERE teacher_id = "' + id + '" ';
		connection.query(Query, function (err, usersEmail) {
			console.log(usersEmail,'datata');
			if (err) {
				resultJson =
					'{"replyCode":"error","replyMsg":"' + err.message + '","cmd":"teacher_review"}\n';
				connection.release();
				callback(200, null, resultJson);
				return;
			} else {
				resultJson='{"replyCode":"success","replyMsg":"cms2 details","data":'+JSON.stringify(usersEmail)+"}\n";
									connection.release();
									callback(200, null,resultJson);
									return;
			}
		});
	});
}
function teacher_avalible(userdata, pool, callback) {
	var resultJson = '';
	var user_id = '';

	if (typeof userdata.user_id != 'undefined' && userdata.user_id != '') {
		user_id = userdata.user_id;
	}

	console.log('----------');
	console.log(userdata,'aaassssss');

	pool.getConnection(function (err, connection) {
		var Catquery = 'SELECT * FROM user_time_schedule where available="1" AND teacher_id="' + user_id + '" LIMIT 5';
		console.log('qq', Catquery);
		connection.query(Catquery, function (errinsert, resultinsert) {
			console.log(resultinsert,errinsert,'resultinsert');
			if (!errinsert) {
				resultJson =
					'{"replyCode":"success","replyMsg":"teacher_subjects details","data":' +
					JSON.stringify(resultinsert) +
					'}\n';
				connection.release();
				callback(200, null, resultJson);
				return;
			} else {
				resultJson = '{"replyCode":"error","replyMsg":"' + errinsert.message + '","cmd":"teacher_subjects"}\n';
				connection.release();
				callback(200, null, resultJson);
				return;
			}
		});
	});
}
function delete_teacher_educations(userdata, pool, callback) {
	var Hashids = require("hashids"),
	  hashids = new Hashids(secretSalt);
  
	var resultJson = "";
	var Cquery = "";
	var id = "";
  
	if (typeof userdata.id != "undefined" && userdata.id != "") {
	  id = userdata.id;
	}
  
	pool.getConnection(function (err, connection) {
		// DELETE FROM teacher_educations WHERE teacher_educations.id = 2

	  Cquery = "DELETE teacher_educations.* FROM teacher_educations WHERE teacher_educations.id = " + id + " " ;
	  
	  console.log(Cquery);
	  connection.query(Cquery, function (err, ordData) {
		console.log(ordData,'isdata');
		if (err) {
		resultJson='{"replyCode":"error","replyMsg":"'+err.message+'","cmd":"deleted successfully"}\n';
		  connection.release();
		  callback(200, null, resultJson);
		  return;
		} else {
		  resultJson='{"replyCode":"success","replyMsg":"Sub admin Details","cmd":"deleted successfully"}\n';
		  console.log("res-suceess");
		  connection.release();
		  callback(200, null, resultJson);
		  return;
		}
	  });
	});
  }
  function complete_class_by_tutor(userdata, pool, callback){
	var id=''
	var status=''
	if (typeof userdata.id != 'undefined' && userdata.id != '') {
		id =userdata.id;
	}
	
	pool.getConnection(function (err, connection) {
		squery ='UPDATE student_booked_classes SET status = "2" WHERE id = "'+id+'"';
			connection.query(squery, function(errselect, resultselect){
				if(!errselect){
				
					resultJson = '{"replyCode":"success","replyMsg":"Class canceled successfully","cmd":"cancle_slot_booking"}\n';
					connection.release();
					callback(200, null, resultJson);
					return;
				}else{
					resultJson = '{"replyCode":"error","replyMsg":"'+errselect.message+'","cmd":"cancle_slot_booking"}\n';
					connection.release();
					callback(200, null, resultJson);
					return;
				}
			});
			});

}
function merithub_new_users(userdata, pool, callback) {
		console.log(userdata,'adsdasdASA');

		var header = {
			'Authorization': userdata.access_token,
			'content-type': 'application/json'
		}
		console.log(userdata,'userdata.access');
		var names=userdata.name+' '+userdata.last_name
		request.post(
			{
				url:'https://serviceaccount1.meritgraph.com/v1/ca2h72lonhcgtq9dq6s0/users',
				json: {
					"name" : names,
					"lang" : "en",			
					"clientUserId" : userdata.id+''+userdata.name, 
					"email" : userdata.email,
					"role" : "C",
					"permission" : "CJ"
					
				},
				headers: header
			},
				function(error, response, body){
				// 	
					if(body.userId)
					
				{
				    console.log(body,'adsdasd');
				    pool.getConnection(function (err, connection) {
						var queryinsert = 'UPDATE users SET merithub_client_id="'+body.userId+'" where id="'+userdata.id+'"';
												
						
						connection.query(queryinsert, function(errinsert, resultinsert12){
							if(!errinsert){}
				})
		})}
	})
	}
	function count_complete_lession(userdata, pool, callback) {
	console.log(userdata.id,'anny');
	var resultJson = '';

	var id = '';

	if (typeof userdata.id != 'undefined' && userdata.id != '') {
		id = userdata.id;
	}
	pool.getConnection(function (err, connection) {
		Query = 'SELECT count(status)  as total FROM `student_booked_classes` WHERE `status` = 1 AND teacher_id = "' + id + '" ';
		connection.query(Query, function (err, usersEmail) {
			console.log(usersEmail,'datata');
			if (err) {
				resultJson =
					'{"replyCode":"error","replyMsg":"' + err.message + '","cmd":"teacher_review"}\n';
				connection.release();
				callback(200, null, resultJson);
				return;
			} else {
				resultJson='{"replyCode":"success","replyMsg":"cms2 details","data":'+JSON.stringify(usersEmail[0])+"}\n";
									connection.release();
									callback(200, null,resultJson);
									return;
			}
		});
	});
}
function add_bankdetail(userdata, pool, callback){
	var resultJson = '';
	var strJson = '';
	var sha1 = require('sha1');
	var Hashids = require("hashids"), hashids = new Hashids(secretSalt);
	
	var user_id='';
	var acc_number='';
	var bank_sort_code='';
	var iban='';
	var bic='';
	
	

	if (typeof userdata.user_id != 'undefined' && userdata.user_id != '') {
		user_id = userdata.user_id;
	}

	if (typeof userdata.acc_number != 'undefined' && userdata.acc_number != '') {
		acc_number = userdata.acc_number;
	}

	if (typeof userdata.bank_sort_code != 'undefined' && userdata.bank_sort_code != '') {
		bank_sort_code = userdata.bank_sort_code;
	}

	if (typeof userdata.iban != 'undefined' && userdata.iban != '') {
		iban = userdata.iban;
	}

	if (typeof userdata.bic != 'undefined' && userdata.bic != '') {
		bic = userdata.bic;
	}
	
	
	
	/* ESTABLISH CONNECTION TO DATABASE */
	pool.getConnection(function (err, connection) {
		var queryinsert = 'UPDATE users SET acc_number="'+acc_number+'",bank_sort_code="'+bank_sort_code+'",iban="'+iban+'",bic="'+bic+'" where id="'+user_id+'"';
								
		
		console.log(queryinsert);
		connection.query(queryinsert, function(errinsert, resultinsert){
			if(!errinsert){
				
				resultJson = '{"replyCode":"success","replyMsg":"Details updated successfully."}\n';
				connection.release();
				callback(200, null, resultJson);
				return;
			}else{
				
				resultJson = '{"replyCode":"error","replyMsg":"'+errinsert.message+'","cmd":"update_teacher_profile"}\n';
				console.log('res-suceess');
				connection.release();
				callback(400, null, resultJson);
				return;
			}
		});
	});
}
function delete_quizz(userdata, pool, callback) {
	
	var id = "";

	if (typeof userdata.id != "undefined" && userdata.id != "") {
		id = userdata.id;
	}

	pool.getConnection(function (err, connection) {
		Cquery = "DELETE quizzes.* FROM quizzes WHERE quizzes.id = " + id + " ";

		console.log(Cquery);
		connection.query(Cquery, function (err, ordData) {
			if (err) {
				resultJson = '{"replyCode":"error","replyMsg":"' + err.message + '","cmd":"Question paper delete error"}\n';
				connection.release();
				callback(200, null, resultJson);
				return;
			} else {
				resultJson = '{"replyCode":"success","replyMsg":"Question paper delete successfully","cmd":"Question paper delete successfully"}\n';
				console.log("res-suceess");
				connection.release();
				callback(200, null, resultJson);
				return;
			}
		});
	});
}
function createUser(userdata, pool, callback) {
	var myHeaders = new Headers();
	myHeaders.append("api-key",config.apikey);
	var formdata = new FormData();
	formdata.append('UID', userdata.UID);
	formdata.append('name', userdata.name);
	formdata.append('role', userdata.role);
	var requestOptions = {
		method: 'POST',
		headers: myHeaders,
		body: formdata,
		redirect: 'follow'
	};
	fetch(config.atomurl+"/createUser", requestOptions)
		.then(response => response.text())
		.then((result) =>{
			console.log(result)
				callback(200, null, result);
				return;
		})
		.catch(error => {
				callback(200, null, error);
				return;
		});	
}
function listUsers(userdata, pool, callback) {
	var myHeaders = new Headers();
	myHeaders.append("api-key",config.apikey);
	var formdata = new FormData();
	formdata.append('offset', userdata?.offset);
	formdata.append('limit', userdata?.limit);
	var requestOptions = {
		method: 'POST',
		headers: myHeaders,
		body: formdata,
		redirect: 'follow'
	};
	fetch(config.atomurl+"/listUsers", requestOptions)
		.then(response => response.text())
		.then((result) =>{
			console.log(result)
				callback(200, null, result);
				return;
		})
		.catch(error => {
				callback(200, null, error);
				return;
		});	
}
function getUser(userdata, pool, callback) {
	var myHeaders = new Headers();
	myHeaders.append("api-key",config.apikey);
	var formdata = new FormData();
	formdata.append('UID', userdata?.UID);
	formdata.append('returnFriends', userdata?.returnFriends);
	formdata.append('returnJoinedGroups', userdata?.returnJoinedGroups);
	var requestOptions = {
		method: 'POST',
		headers: myHeaders,
		body: formdata,
		redirect: 'follow'
	};
	fetch(config.atomurl+"/getUser", requestOptions)
		.then(response => response.text())
		.then((result) =>{
			console.log(result)
				callback(200, null, result);
				return;
		})
		.catch(error => {
				callback(200, null, error);
				return;
		});	
}
function getUserStatus(userdata, pool, callback) {
	console.log("hello",userdata);
	// return
	var myHeaders = new Headers();
	myHeaders.append("api-key",config.apikey);
	var formdata = new FormData();
	formdata.append('UIDs', userdata?.UID);
	
	var requestOptions = {
		method: 'POST',
		headers: myHeaders,
		body: formdata,
		redirect: 'follow'
	};
	fetch(config.atomurl+"/getUserStatus", requestOptions)
		.then(response => response.text())
		.then((result) =>{
			console.log(result)
				callback(200, null, result);
				return;
		})
		.catch(error => {
				callback(200, null, error);
				return;
		});	
}
function deleteUser(userdata, pool, callback) {
	var myHeaders = new Headers();
	myHeaders.append("api-key",config.apikey);
	var formdata = new FormData();
	formdata.append('UID', userdata?.UID);
	
	var requestOptions = {
		method: 'POST',
		headers: myHeaders,
		body: formdata,
		redirect: 'follow'
	};
	fetch(config.atomurl+"/deleteUser", requestOptions)
		.then(response => response.text())
		.then((result) =>{
			console.log(result)
				callback(200, null, result);
				return;
		})
		.catch(error => {
				callback(200, null, error);
				return;
		});	
}
function updateUser(userdata, pool, callback) {
	var myHeaders = new Headers();
	myHeaders.append("api-key",config.apikey);
	var formdata = new FormData();
	formdata.append('UID', userdata?.UID);
	formdata.append('name', userdata?.name);
	formdata.append('avatarURL', userdata?.avatarURL);
	formdata.append('profileURL', userdata?.profileURL);
	formdata.append('email', userdata?.email);
	
	var requestOptions = {
		method: 'POST',
		headers: myHeaders,
		body: formdata,
		redirect: 'follow'
	};
	fetch(config.atomurl+"/updateUser", requestOptions)
		.then(response => response.text())
		.then((result) =>{
			console.log(result)
				callback(200, null, result);
				return;
		})
		.catch(error => {
				callback(200, null, error);
				return;
		});	
}
function addFriends(userdata, pool, callback) {
	var myHeaders = new Headers();
	myHeaders.append("api-key",config.apikey);
	var formdata = new FormData();
	console.log(userdata,'adfasf');

	formdata.append('friendsUID', userdata?.friendsUID);
	formdata.append('clearExisting', userdata?.clearExisting);
	formdata.append('UID', userdata?.UID);
	
	
	var requestOptions = {
		method: 'POST',
		headers: myHeaders,
		body: formdata,
		redirect: 'follow'
	};
	fetch(config.atomurl+"/addFriends", requestOptions)
		.then(response => response.text())
		.then((result) =>{
			console.log(result)
				callback(200, null, result);
				return;
		})
		.catch(error => {
				callback(200, null, error);
				return;
		});	
}
function deleteFriends(userdata, pool, callback) {
	console.log();
	var myHeaders = new Headers();
	myHeaders.append("api-key",config.apikey);
	var formdata = new FormData();
	formdata.append('friendsUID', userdata?.friendsUID);
	formdata.append('clearExisting', userdata?.clearExisting);
	formdata.append('UID', userdata?.UID);
	
	
	var requestOptions = {
		method: 'POST',
		headers: myHeaders,
		body: formdata,
		redirect: 'follow'
	};
	fetch(config.atomurl+"/deleteFriends", requestOptions)
		.then(response => response.text())
		.then((result) =>{
			console.log(result)
				callback(200, null, result);
				return;
		})
		.catch(error => {
				callback(200, null, error);
				return;
		});	
}
function blockUser(userdata, pool, callback) {
	var myHeaders = new Headers();
	myHeaders.append("api-key",config.apikey);
	var formdata = new FormData();
	formdata.append('receiverUID', userdata?.receiverUID);
	formdata.append('senderUID', userdata?.senderUID);
	
	
	var requestOptions = {
		method: 'POST',
		headers: myHeaders,
		body: formdata,
		redirect: 'follow'
	};
	fetch(config.atomurl+"/blockUser", requestOptions)
		.then(response => response.text())
		.then((result) =>{
			console.log(result)
				callback(200, null, result);
				return;
		})
		.catch(error => {
				callback(200, null, error);
				return;
		});	
}
function unblockUser(userdata, pool, callback) {
	var myHeaders = new Headers();
	myHeaders.append("api-key",config.apikey);
	var formdata = new FormData();
	formdata.append('receiverUID', userdata?.receiverUID);
	formdata.append('senderUID', userdata?.senderUID);
	
	
	var requestOptions = {
		method: 'POST',
		headers: myHeaders,
		body: formdata,
		redirect: 'follow'
	};
	fetch(config.atomurl+"/unblockUser", requestOptions)
		.then(response => response.text())
		.then((result) =>{
			console.log(result)
				callback(200, null, result);
				return;
		})
		.catch(error => {
				callback(200, null, error);
				return;
		});	
}
function sendMessage(userdata, pool, callback) {
	var myHeaders = new Headers();
	myHeaders.append("api-key",config.apikey);
	var formdata = new FormData();
	formdata.append('receiverUID', userdata?.receiverUID);
	formdata.append('senderUID', userdata?.senderUID);
	formdata.append('message', userdata?.message);
	formdata.append('isGroup', userdata?.isGroup);
	
	
	var requestOptions = {
		method: 'POST',
		headers: myHeaders,
		body: formdata,
		redirect: 'follow'
	};
	fetch(config.atomurl+"/sendMessage", requestOptions)
		.then(response => response.text())
		.then((result) =>{
			console.log(result)

				callback(200, null, result);
				return;
		})
		.catch(error => {
				callback(200, null, error);
				return;
		});	
}
function getMessages(userdata, pool, callback) {
	var myHeaders = new Headers();
	myHeaders.append("api-key",config.apikey);
	var formdata = new FormData();
	formdata.append('withUIDs', userdata?.withUIDs);
	formdata.append('UIDs', userdata?.UIDs);
	
	console.log("/getMessages/",userdata);
	var requestOptions = {
		method: 'POST',
		headers: myHeaders,
		body: formdata,
		redirect: 'follow'
	};
	fetch(config.atomurl+"/getMessages", requestOptions)
		.then(response => response.text())
		.then((result) =>{
			// console.log(result)
				callback(200, null, result);
				return;
		})
		.catch(error => {
				callback(200, null, error);
				return;
		});	
}
function getGroupMessages(userdata, pool, callback) {
	var myHeaders = new Headers();
	myHeaders.append("api-key",config.apikey);
	var formdata = new FormData();
	formdata.append('GUIDs', userdata?.GUIDs);
	formdata.append('limit', userdata?.limit);
	formdata.append('offset', userdata?.offset);
	
	var requestOptions = {
		method: 'POST',
		headers: myHeaders,
		body: formdata,
		redirect: 'follow'
	};
	fetch(config.atomurl+"/getGroupMessages", requestOptions)
		.then(response => response.text())
		.then((result) =>{
			console.log(result)
				callback(200, null, result);
				return;
		})
		.catch(error => {
				callback(200, null, error);
				return;
		});	
}
function getUnreadMessageCounts(userdata, pool, callback) {
	var myHeaders = new Headers();
	myHeaders.append("api-key",config.apikey);
	var formdata = new FormData();
	formdata.append('UID', userdata?.UID);
	
	
	var requestOptions = {
		method: 'POST',
		headers: myHeaders,
		body: formdata,
		redirect: 'follow'
	};
	fetch(config.atomurl+"/getUnreadMessageCounts", requestOptions)
		.then(response => response.text())
		.then((result) =>{
			console.log(result)
				callback(200, null, result);
				return;
		})
		.catch(error => {
				callback(200, null, error);
				return;
		});	
}
function getUnreadMessageCountForGroups(userdata, pool, callback) {
	var myHeaders = new Headers();
	myHeaders.append("api-key",config.apikey);
	var formdata = new FormData();
	formdata.append('UIDs', userdata?.UIDs);
	
	
	var requestOptions = {
		method: 'POST',
		headers: myHeaders,
		body: formdata,
		redirect: 'follow'
	};
	fetch(config.atomurl+"/getUnreadMessageCountForGroups", requestOptions)
		.then(response => response.text())
		.then((result) =>{
			console.log(result)
				callback(200, null, result);
				return;
		})
		.catch(error => {
				callback(200, null, error);
				return;
		});	
}
function getCallHistory(userdata, pool, callback) {
	var myHeaders = new Headers();
	myHeaders.append("api-key",config.apikey);
	var formdata = new FormData();
	formdata.append('UID', userdata?.UID);
	formdata.append('offset', userdata?.offset);
	formdata.append('limit', userdata?.limit);
	
	
	var requestOptions = {
		method: 'POST',
		headers: myHeaders,
		body: formdata,
		redirect: 'follow'
	};
	fetch(config.atomurl+"/getCallHistory", requestOptions)
		.then(response => response.text())
		.then((result) =>{
			console.log(result)
				callback(200, null, result);
				return;
		})
		.catch(error => {
				callback(200, null, error);
				return;
		});	
}
function sendFile(userdata, pool, callback) {
	var myHeaders = new Headers();
	myHeaders.append("api-key",config.apikey);
	var formdata = new FormData();
	formdata.append('receiverUID', userdata?.receiverUID);
	formdata.append('senderUID', userdata?.senderUID);
	
	formdata.append('file', userdata?.file);
	
	
	var requestOptions = {
		method: 'POST',
		headers: myHeaders,
		body: formdata,
		redirect: 'follow'
	};
	fetch(config.atomurl+"/sendFile", requestOptions)
		.then(response => response.text())
		.then((result) =>{
			console.log(result)
				callback(200, null, result);
				return;
		})
		.catch(error => {
				callback(200, null, error);
				return;
		});	
}
function createGroup(userdata, pool, callback) {
	var myHeaders = new Headers();
	myHeaders.append("api-key",config.apikey);
	var formdata = new FormData();
	formdata.append('GUID', userdata?.GUID);
	formdata.append('name', userdata?.name);
	formdata.append('type', userdata?.type);
	
	
	var requestOptions = {
		method: 'POST',
		headers: myHeaders,
		body: formdata,
		redirect: 'follow'
	};
	fetch(config.atomurl+"/createGroup", requestOptions)
		.then(response => response.text())
		.then((result) =>{
			console.log(result)
				callback(200, null, result);
				return;
		})
		.catch(error => {
				callback(200, null, error);
				return;
		});	
}
function deleteGroup(userdata, pool, callback) {
	var myHeaders = new Headers();
	myHeaders.append("api-key",config.apikey);
	var formdata = new FormData();
	formdata.append('GUID', userdata?.GUID);
	
	
	
	var requestOptions = {
		method: 'POST',
		headers: myHeaders,
		body: formdata,
		redirect: 'follow'
	};
	fetch(config.atomurl+"/deleteGroup", requestOptions)
		.then(response => response.text())
		.then((result) =>{
			console.log(result)
				callback(200, null, result);
				return;
		})
		.catch(error => {
				callback(200, null, error);
				return;
		});	
}
function addUsersToGroup(userdata, pool, callback) {
	var myHeaders = new Headers();
	myHeaders.append("api-key",config.apikey);
	var formdata = new FormData();
	formdata.append('GUID', userdata?.GUID);
	formdata.append('UIDs', userdata?.UIDs);
	formdata.append('clearExisting', userdata?.clearExisting);
	
	
	var requestOptions = {
		method: 'POST',
		headers: myHeaders,
		body: formdata,
		redirect: 'follow'
	};
	fetch(config.atomurl+"/addUsersToGroup", requestOptions)
		.then(response => response.text())
		.then((result) =>{
			console.log(result)
				callback(200, null, result);
				return;
		})
		.catch(error => {
				callback(200, null, error);
				return;
		});	
}
function addUsersToGroup(userdata, pool, callback) {
	var myHeaders = new Headers();
	myHeaders.append("api-key",config.apikey);
	var formdata = new FormData();
	formdata.append('GUID', userdata?.GUID);
	formdata.append('UIDs', userdata?.UIDs);
	formdata.append('clearExisting', userdata?.clearExisting);	
	
	var requestOptions = {
		method: 'POST',
		headers: myHeaders,
		body: formdata,
		redirect: 'follow'
	};
	fetch(config.atomurl+"/addUsersToGroup", requestOptions)
		.then(response => response.text())
		.then((result) =>{
			console.log(result)
				callback(200, null, result);
				return;
		})
		.catch(error => {
				callback(200, null, error);
				return;
		});	
}
function removeUsersFromGroup(userdata, pool, callback) {
	var myHeaders = new Headers();
	myHeaders.append("api-key",config.apikey);
	var formdata = new FormData();
	formdata.append('GUID', userdata?.GUID);
	formdata.append('UIDs', userdata?.UIDs);
	
	var requestOptions = {
		method: 'POST',
		headers: myHeaders,
		body: formdata,
		redirect: 'follow'
	};
	fetch(config.atomurl+"/removeUsersFromGroup", requestOptions)
		.then(response => response.text())
		.then((result) =>{
			console.log(result)
				callback(200, null, result);
				return;
		})
		.catch(error => {
				callback(200, null, error);
				return;
		});	
}
function getGroupList(userdata, pool, callback) {
	var myHeaders = new Headers();
	myHeaders.append("api-key",config.apikey);
	var formdata = new FormData();
	formdata.append('GUIDs', userdata?.GUIDs);
	
	var requestOptions = {
		method: 'POST',
		headers: myHeaders,
		body: formdata,
		redirect: 'follow'
	};
	fetch(config.atomurl+"/getGroupList", requestOptions)
		.then(response => response.text())
		.then((result) =>{
			console.log(result)
				callback(200, null, result);
				return;
		})
		.catch(error => {
				callback(200, null, error);
				return;
		});	
}
function getGroupUserList(userdata, pool, callback) {
	var myHeaders = new Headers();
	myHeaders.append("api-key",config.apikey);
	var formdata = new FormData();
	formdata.append('GUIDs', userdata?.GUIDs);
	
	var requestOptions = {
		method: 'POST',
		headers: myHeaders,
		body: formdata,
		redirect: 'follow'
	};
	fetch(config.atomurl+"/getGroupUserList", requestOptions)
		.then(response => response.text())
		.then((result) =>{
			console.log(result)
				callback(200, null, result);
				return;
		})
		.catch(error => {
				callback(200, null, error);
				return;
		});	
}
function banUsersFromGroup(userdata, pool, callback) {
	var myHeaders = new Headers();
	myHeaders.append("api-key",config.apikey);
	var formdata = new FormData();
	formdata.append('GUID', userdata?.GUID);
	formdata.append('UIDs', userdata?.UIDs);	
	var requestOptions = {
		method: 'POST',
		headers: myHeaders,
		body: formdata,
		redirect: 'follow'
	};
	fetch(config.atomurl+"/banUsersFromGroup", requestOptions)
		.then(response => response.text())
		.then((result) =>{
			console.log(result)
				callback(200, null, result);
				return;
		})
		.catch(error => {
				callback(200, null, error);
				return;
		});	
}
function unbanUsersFromGroup(userdata, pool, callback) {
	var myHeaders = new Headers();
	myHeaders.append("api-key",config.apikey);
	var formdata = new FormData();
	formdata.append('GUID', userdata?.GUID);
	formdata.append('UIDs', userdata?.UIDs);	
	var requestOptions = {
		method: 'POST',
		headers: myHeaders,
		body: formdata,
		redirect: 'follow'
	};
	fetch(config.atomurl+"/unbanUsersFromGroup", requestOptions)
		.then(response => response.text())
		.then((result) =>{
			console.log(result)
				callback(200, null, result);
				return;
		})
		.catch(error => {
				callback(200, null, error);
				return;
		});	
}
function updateGroup(userdata, pool, callback) {
	var myHeaders = new Headers();
	myHeaders.append("api-key",config.apikey);
	var formdata = new FormData();
	formdata.append('GUID', userdata?.GUID);
	formdata.append('name', userdata?.name);	
	var requestOptions = {
		method: 'POST',
		headers: myHeaders,
		body: formdata,
		redirect: 'follow'
	};
	fetch(config.atomurl+"/updateGroup", requestOptions)
		.then(response => response.text())
		.then((result) =>{
			console.log(result)
				callback(200, null, result);
				return;
		})
		.catch(error => {
				callback(200, null, error);
				return;
		});	
}
function kickUsersFromGroup(userdata, pool, callback) {
	var myHeaders = new Headers();
	myHeaders.append("api-key",config.apikey);
	var formdata = new FormData();
	formdata.append('GUID', userdata?.GUID);
	formdata.append('UIDs', userdata?.UIDs);	

	
	var requestOptions = {
		method: 'POST',
		headers: myHeaders,
		body: formdata,
		redirect: 'follow'
	};
	fetch(config.atomurl+"/kickUsersFromGroup", requestOptions)
		.then(response => response.text())
		.then((result) =>{
			console.log(result)
				callback(200, null, result);
				return;
		})
		.catch(error => {
				callback(200, null, error);
				return;
		});	
}
function getCRID(userdata, pool, callback) {
	var myHeaders = new Headers();
	myHeaders.append("api-key",config.apikey);
	var formdata = new FormData();
	formdata.append('GUID', userdata?.GUID);

	var requestOptions = {
		method: 'POST',
		headers: myHeaders,
		body: formdata,
		redirect: 'follow'
	};
	fetch(config.atomurl+"/getCRID", requestOptions)
		.then(response => response.text())
		.then((result) =>{
			console.log(result)
				callback(200, null, result);
				return;
		})
		.catch(error => {
				callback(200, null, error);
				return;
		});	
}
function getGUID(userdata, pool, callback) {
	var myHeaders = new Headers();
	myHeaders.append("api-key",config.apikey);
	var formdata = new FormData();
	formdata.append('CRID', userdata?.CRID);

	var requestOptions = {
		method: 'POST',
		headers: myHeaders,
		body: formdata,
		redirect: 'follow'
	};
	fetch(config.atomurl+"/getGUID", requestOptions)
		.then(response => response.text())
		.then((result) =>{
			console.log(result)
				callback(200, null, result);
				return;
		})
		.catch(error => {
				callback(200, null, error);
				return;
		});	
}
function getCID(userdata, pool, callback) {
	var myHeaders = new Headers();
	myHeaders.append("api-key",config.apikey);
	var formdata = new FormData();
	formdata.append('UID', userdata?.UID);

	var requestOptions = {
		method: 'POST',
		headers: myHeaders,
		body: formdata,
		redirect: 'follow'
	};
	fetch(config.atomurl+"/getCID", requestOptions)
		.then(response => response.text())
		.then((result) =>{
			console.log(result)
				callback(200, null, result);
				return;
		})
		.catch(error => {
				callback(200, null, error);
				return;
		});	
}
function getUID(userdata, pool, callback) {
	var myHeaders = new Headers();
	myHeaders.append("api-key",config.apikey);
	var formdata = new FormData();
	formdata.append('CID', userdata?.CID);

	var requestOptions = {
		method: 'POST',
		headers: myHeaders,
		body: formdata,
		redirect: 'follow'
	};
	fetch(config.atomurl+"/getUID", requestOptions)
		.then(response => response.text())
		.then((result) =>{
			console.log(result)
				callback(200, null, result);
				return;
		})
		.catch(error => {
				callback(200, null, error);
				return;
		});	
}

