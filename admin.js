var request = require("request");
var config = require("./config");

var FUNCTIONS = require("./functions.js");

var moment = require("moment");
var multiparty = require("multiparty");
var randomstring = require("random-string");
const { ADMINDB } = require("./config");
var secretSalt = config.secretSalt;

var SITE_TITLE = config.SITE_TITLE;
var nodemailer = require("nodemailer");
const { json } = require("body-parser");
// var smtpConfig = {
//     host: 'smtp.gmail.com',
//     port: 587,
//     auth: {
//       user: 'developer.darpan@gmail.com', // Your email id
//       pass: 'daksh147' // Your password 
//     }
// };
							var transporter = nodemailer.createTransport({
								host: "mail.mrmmbs.com",
								type: "SMTP",
								port: 465,
								secure: true,
								auth: {
								  user: "test@mrmmbs.com",
								  pass: "Admin@2023"
								}
							  });
// var transporter = nodemailer.createTransport(smtpConfig);
//Adminwithdraw_payment_data
module.exports.admin_login = admin_login;

module.exports.forgot_password = forgot_password;
module.exports.admin_change_password = admin_change_password;
module.exports.update_admin_profile = update_admin_profile;
module.exports.country_list = country_list;
module.exports.withdraw_payment_request = withdraw_payment_request;
module.exports.withdraw_payment_data = withdraw_payment_data;

module.exports.checkValidateEmailEmpProfile = checkValidateEmailEmpProfile;
//Banners
module.exports.banner_list = banner_list;
module.exports.add_banner_image = add_banner_image;
module.exports.banner_details = banner_details;
module.exports.update_banner_status = update_banner_status;

//CMS
module.exports.cms_list = cms_list;
module.exports.add_cms = add_cms;
module.exports.update_cms_status = update_cms_status;
module.exports.cms_details = cms_details;

//USERS

module.exports.user_list = user_list;
module.exports.add_user = add_user;
module.exports.update_user = update_user;
module.exports.user_details = user_details;
module.exports.teacher_payout_earning_update = teacher_payout_earning_update;
module.exports.enquiries_list = enquiries_list;
module.exports.delete_enquiries = delete_enquiries;
module.exports.update_user_status = update_user_status;
module.exports.update_user_verified_status = update_user_verified_status;

//faq

module.exports.faqs_list = faqs_list;
module.exports.add_faqs = add_faqs;
module.exports.faqs_details = faqs_details;
module.exports.update_faqs_status = update_faqs_status;

//category

module.exports.category_list = category_list;
module.exports.category_dropdown_list = category_dropdown_list;
module.exports.add_category = add_category;
module.exports.category_details = category_details;
module.exports.update_category_status = update_category_status;

//testimonials

module.exports.student_testimonials_list = student_testimonials_list;
module.exports.add_student_testimonials = add_student_testimonials;
module.exports.student_testimonials_details = student_testimonials_details;
module.exports.update_student_testimonials_status = update_student_testimonials_status;

//Courses
module.exports.courses_list = courses_list;
module.exports.courses_dropdown_list = courses_dropdown_list;
module.exports.add_courses = add_courses;
module.exports.courses_details = courses_details;
module.exports.update_courses_status = update_courses_status;
module.exports.view_course_info = view_course_info;

//Role access
module.exports.role_access_list = role_access_list;
module.exports.add_role_access = add_role_access;
module.exports.update_role_access = update_role_access;
module.exports.update_role_access_status = update_role_access_status;
module.exports.role_details = role_details;


module.exports.sub_admin_list = sub_admin_list;
module.exports.add_subadmin = add_subadmin;
module.exports.update_subadmin = update_subadmin;
module.exports.update_subadmin_status = update_subadmin_status;
module.exports.subadmin_details = subadmin_details;
module.exports.parent_child_list = parent_child_list;


module.exports.age_group_list = age_group_list;
module.exports.age_group_list_dropdown = age_group_list_dropdown;
module.exports.add_age_group = add_age_group;
module.exports.age_group_details = age_group_details;
module.exports.update_age_group_status = update_age_group_status;

module.exports.update_profile_image = update_profile_image;

module.exports.course_chapters_list = course_chapters_list;
module.exports.course_chapters_dropdown_list = course_chapters_dropdown_list;
module.exports.add_course_chapter = add_course_chapter;
module.exports.course_chapter_details = course_chapter_details;
module.exports.update_course_chapters_status = update_course_chapters_status;


module.exports.course_achievement_list = course_achievement_list;
module.exports.add_course_achievement = add_course_achievement;
module.exports.course_achievement_details = course_achievement_details;
module.exports.update_course_achievement_status = update_course_achievement_status;


module.exports.classes_list = classes_list;
module.exports.classes_dropdown_list = classes_dropdown_list;
module.exports.add_classes = add_classes;
module.exports.classes_details = classes_details;
module.exports.update_classes_status = update_classes_status;

//activities

module.exports.activities_list = activities_list;
module.exports.add_activities = add_activities;
module.exports.activities_details = activities_details;
module.exports.update_activities_status = update_activities_status;


module.exports.quizzes_list = quizzes_list;
module.exports.quizzes_dropdown_list = quizzes_dropdown_list;
module.exports.add_quizzes = add_quizzes;
module.exports.quizzes_details = quizzes_details;
module.exports.update_quizzes_status = update_quizzes_status;

module.exports.quizzes_questions_list = quizzes_questions_list;
module.exports.add_quizzes_questions = add_quizzes_questions;
module.exports.quizzes_questions_details = quizzes_questions_details;
module.exports.update_quizzes_questions_status = update_quizzes_questions_status;

module.exports.projects_list = projects_list;
module.exports.projects_dropdown_list = projects_dropdown_list;
module.exports.add_project = add_project;
module.exports.project_details = project_details;
module.exports.update_projects_status = update_projects_status;


module.exports.chapter_lessons_list = chapter_lessons_list;
module.exports.add_chapter_lesson = add_chapter_lesson;
module.exports.chapter_lesson_details = chapter_lesson_details;
module.exports.update_chapter_lessons_status = update_chapter_lessons_status;


module.exports.get_site_settings = get_site_settings;
module.exports.update_site_settings = update_site_settings;
// module.exports.update_site_settings_access_token = update_site_settings_access_token;


//content_blocks
module.exports.content_blocks_list = content_blocks_list;
module.exports.add_content_blocks = add_content_blocks;
module.exports.content_blocks_details = content_blocks_details;
module.exports.update_content_blocks_status = update_content_blocks_status;

module.exports.generate_teacher_slots = generate_teacher_slots;

module.exports.update_demo_class_settings = update_demo_class_settings;
module.exports.info_demo_class_settings = info_demo_class_settings;

module.exports.blogs_list = blogs_list;
module.exports.add_blog = add_blog;
module.exports.update_blog_status = update_blog_status;
module.exports.newsletters_list = newsletters_list;
module.exports.newsletters_get_data = newsletters_get_data;
module.exports.newsletters_update = newsletters_update;

module.exports.supports_list = supports_list;
module.exports.delete_support_request = delete_support_request;
module.exports.delete_newsletter_request = delete_newsletter_request;

module.exports.admin_demo_class_list = admin_demo_class_list;
module.exports.admin_booked_class_list = admin_booked_class_list;
module.exports.course_subscription_list = course_subscription_list;
module.exports.teacher_payout_details = teacher_payout_details;
module.exports.teacher_payout_earning = teacher_payout_earning;
module.exports.teachers_dropdown_list = teachers_dropdown_list;
module.exports.create_adjustment = create_adjustment;
module.exports.get_chat_group = get_chat_group;
module.exports.add_time_slot = add_time_slot;
module.exports.teacher_payout_request_pay = teacher_payout_request_pay;
module.exports.teacher_payout_detail_admin_section = teacher_payout_detail_admin_section;
module.exports.contact_us_inquiry = contact_us_inquiry;
module.exports.faqs_list_admin = faqs_list_admin;

var weekday = new Array(
	"Sunday",
	"Monday",
	"Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
  );
  //var tday = weekday[ToDate.getDay()];
var ToDate = new Date();
var Curdate=ToDate.getFullYear()+"-"+parseInt(ToDate.getMonth()+1)+"-"+ToDate.getDate();
var CurTime=ToDate.getHours()+":"+ToDate.getMinutes()+":"+ToDate.getSeconds();
console.log("-CurTime-");
console.log(Curdate + "-" + CurTime);

var smtpConfig = {
  host: "smtp.gmail.com",
  port: 465,
  auth: {
    user: "darpan@yopmail.com", // Your email id
    pass: "Info@321", // Your password
  },
};
function contact_us_inquiry(userdata, pool, callback) {
    console.log(userdata);
    var resultJson = '';
    var Query = '';
    var first_name = '';
    var last_name = '';
    var email = ''; // Duplicate variable name removed
    var contact = '';
    var description = '';
    var file = '';

    if (typeof userdata.first_name != 'undefined' && userdata.first_name != '') {
        first_name = userdata.first_name;
    }
    if (typeof userdata.last_name != 'undefined' && userdata.last_name != '') {
        last_name = userdata.last_name;
    }
    if (typeof userdata.email != 'undefined' && userdata.email != '') {
        email = userdata.email;
    }
    if (typeof userdata.type != 'undefined' && userdata.type != '') {
        type = userdata.type;
    }
	
    if (typeof userdata.mobile != 'undefined' && userdata.mobile != '') {
        contact = userdata.mobile;
    }
    if (typeof userdata.comment != 'undefined' && userdata.comment != '') {
        description = userdata.comment;
    }

    pool.getConnection(function (err, connection) {
        if (err) {
            resultJson = '{"replyCode":"error","replyMsg":"' + err.message + '","cmd":"contact_us_inquiry"}\n';
            callback(200, null, resultJson);
            return;
        }

        var Query = 'INSERT INTO enquiries SET first_name="' + first_name + '",last_name="' + last_name + '",file="' + file + '",email="' + email + '",contact="' + contact + '",description="' + description + '"';
        console.log(Query);

        connection.query(Query, function (err, rate) {
            connection.release();

            if (err) {
                resultJson = '{"replyCode":"error","replyMsg":"' + err.message + '","cmd":"contact_us_inquiry"}\n';
                callback(200, null, resultJson);
                return;
            } else {
                resultJson = '{"replyCode":"success","replyMsg":"contactus enquiry send successfully","cmd":"contact_us_inquiry"}\n';
                callback(200, null, resultJson);
                return;
            }
        });
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
//Users

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
		console.log('s', Query);
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



function checkValidateStudent(userdata, pool, callback) {
	var resultJson = '';
	var Hashids = require('hashids');

	var email = '';
	var mobile = '';
	var id = '';
	if (typeof userdata.email != 'undefined' && userdata.email != '') {
		email = userdata.email;
	}

	if (typeof userdata.mobile != 'undefined' && userdata.mobile != '') {
		mobile = userdata.mobile;
	}

	if (typeof userdata.id != 'undefined' && userdata.id != '') {
		id = userdata.id;
	}
	pool.getConnection(function (err, connection) {
		if(email !=''){
			Query = 'SELECT * FROM users WHERE email="' + email + '"';
			
		}else{
			Query = 'SELECT * FROM users WHERE id="' + id + '"';

		}
		console.log('s', Query);
		connection.query(Query, function (err, usersEmail) {
			if (err) {
				console.log(err.message);
				connection.release();
				callback(false, usersEmail);
			} else {
				if (usersEmail.length > 0) {
					connection.release();
					callback(true, usersEmail);
				} else {
					connection.release();
					callback(false, usersEmail);
				}

			}
		});
	});
}
/*
 * function name :- forgotPassword
 * Description :- to set the user password when user get forgot his password
 * Created :- 11-04-22
 */
function forgot_password(userdata, pool, callback) {
  var resultJson = "";
  var strJson = "";
  var sha1 = require("sha1");
  var Hashids = require("hashids"),
    hashids = new Hashids(secretSalt);

  var email = "";
  if (typeof userdata.email != "undefined" && userdata.email != "") {
    email = userdata.email;
  }

  pool.getConnection(function (err, connection) {
    //console.log('Query : SELECT * from users where email="' + email + '"');
    squery = 'SELECT users.* from users WHERE users.email="' + email + '"';
    connection.query(squery, function (err, results) {
      if (!err) {
        if (results.length > 0) {
          if (results[0].status == "1") {
            var secureCode = Math.floor(10000000 + Math.random() * 99999999);
            secureCode = secureCode.toString().substring(0, 6);
            secureCode = parseInt(secureCode);
            // secureCode = 123456;
            console.log(secureCode);
            var reset_code = secureCode;
            var hash_newpassword = sha1(secretSalt + reset_code);

            var message = "";
            message += "Your new password is  " + secureCode + "  \n\n";

            connection.query(
              'UPDATE users SET password = "' +hash_newpassword +'" WHERE email = "' +email +'"',
              function (errs, updated) {
                if (errs) {
                  resultJson =
                    '{"replyCode":"error","replyMsg":"' +
                    errs.message +
                    '","cmd":"forgotPassword"}\n';
                  connection.release();
                  callback(400, null, resultJson);
                  return;
                } else {
                  connection.query(
                    'SELECT * FROM email_templates WHERE email_type = "forgot_password"',
                    function (err, resultTemplate) {
                      if (resultTemplate.length > 0) {
                        var nodemailer = require("nodemailer");
                        var message = resultTemplate[0].message;
                        var name = results[0].fullName;
                        var email = results[0].email;
                        message = message.replace("[fullname]", name);
                        message = message.replace("[EMAIL]", email);
                        message = message.replace("[PASSWORD]", reset_code);
                        message = message.replace("[sitename]", SITE_TITLE);

                        // setup e-mail data with unicode symbols
                        var mailOptions = {
                          from: SITE_TITLE + " <info@suited-tutor.com>", // sender address
                          to: email, // list of receivers
                          subject: resultTemplate[0].subject, // Subject line
                          html: message, // html body
                        };
                        //from: smtpMailUser,
				// 		var transporter = nodemailer.createTransport(smtpConfig);

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
                              var id = hashids.encode(results[0].id);
                              resultJson =
                                '{"replyCode":"success", "data":' +
                                JSON.stringify(results[0]) +
                                ',"sid":"' +
                                id +
                                '","replyMsg":"You will get new password on your mail inbox, Please check."}\n';
                              connection.release();
                              callback(200, null, resultJson);
                              return;
                            }
                          }
                        );
                      }
                    }
                  );
                }
              }
            );
          } else {
            resultJson =
              '{"replyCode":"error","replyMsg":"Your are not authorized .","cmd":"forgotPassword"}\n';
            connection.release();
            callback(200, null, resultJson);
            return;
          }
        } else {
          resultJson =
            '{"replyCode":"error","replyMsg":"The email you entered does not exist.","cmd":"forgotPassword"}\n';
          connection.release();
          callback(200, null, resultJson);
          return;
        }
      } else {
        resultJson =
          '{"replyCode":"error","replyMsg":"' +
          err.message +
          '","cmd":"forgotPassword"}\n';
        connection.release();
        callback(400, null, resultJson);
        return;
      }
    });
  });
}

/*
 * function name :- changePassword
 * Description :- This will come in use when user want to change his password
 * Created :- 17052017
 */

//09-04-2023
// function admin_change_password(userdata, pool, callback) {
//   var resultJson = "";
//   var strJson = "";
//   var sha1 = require("sha1");
//   var Hashids = require("hashids"),
//     hashids = new Hashids(secretSalt);
//   var sid = "";
//   var password = "";
//   var current_password = "";

//   if (typeof userdata.sid != "undefined" && userdata.sid != "") {
//     sid = userdata.sid;
//   }

//   if (typeof userdata.password != "undefined" && userdata.password != "") {
//     password = userdata.password;
//   }
//   if (
//     typeof userdata.current_password != "undefined" &&
//     userdata.current_password != ""
//   ) {
//     current_password = userdata.current_password;
//   }
//   console.log(userdata);
//   pool.getConnection(function (err, connection) {
//     var uid = hashids.decode(sid);
//     var hash_newpassword = sha1(secretSalt + password);

//     var hash_oldpassword = sha1(secretSalt + current_password);
//     console.log('SELECT password FROM users WHERE id = "' + uid + '"');
//     connection.query(
//       'SELECT password FROM users WHERE id = "' + uid + '"',
//       function (err, user) {
//         if (err) {
//           resultJson =
//             '{"replyCode":"error","replyMsg":"' +
//             err.message +
//             '","cmd":"changePassword"}\n';
//           connection.release();
//           callback(400, null, resultJson);
//           return;
//         } else {
//           if (user.length > 0) {
//             if (user[0].password == hash_oldpassword) {
//               connection.query(
//                 'UPDATE users SET password = "' +
//                   hash_newpassword +
//                   '" WHERE id = "' +
//                   uid +
//                   '"',
//                 function (errs, done) {
//                   if (errs) {
//                     resultJson =
//                       '{"replyCode":"error","replyMsg":"' +
//                       errs.message +
//                       '","cmd":"changePassword"}\n';
//                     connection.release();
//                     callback(400, null, resultJson);
//                     return;
//                   } else {
//                     resultJson =
//                       '{"replyCode":"success","replyMsg":"Password has been changed successfully","cmd":"changePassword"}\n';
//                     connection.release();
//                     callback(200, null, resultJson);
//                     return;
//                   }
//                 }
//               );
//             } else {
//               resultJson =
//                 '{"replyCode":"error","replyMsg":"Old Password is not correct","cmd":"changePassword"}\n';
//               connection.release();
//               callback(200, null, resultJson);
//               return;
//             }
//           } else {
//             resultJson =
//               '{"replyCode":"error","replyMsg":"Old Password is not correct","cmd":"changePassword"}\n';
//             connection.release();
//             callback(200, null, resultJson);
//             return;
//           }
//         }
//       }
//     );
//   });
// }

//Admin

function admin_change_password(userdata, pool, callback) {
	var resultJson = "";
	var strJson = "";
	var sha1 = require("sha1");
	var Hashids = require("hashids"),
	  hashids = new Hashids(secretSalt);
	var uid = "";
	var password = "";
	var current_password = "";
  
	if (typeof userdata.uid != "undefined" && userdata.uid != "") {
	  uid = userdata.uid;
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
  // 	if(sid!=''){
  //   var uid = hashids.decode(sid);}
	
	var hash_newpassword = sha1(secretSalt + password);
  
	var hash_oldpassword = sha1(secretSalt + current_password);
	console.log('SELECT password FROM users WHERE id = "' + uid + '"');
	var squery='SELECT password FROM users WHERE id = "' + uid + '"'
	connection.query(squery,function (err, user) {
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
			} else {
			  resultJson =
				'{"replyCode":"error","replyMsg":"Old Password is not correct","cmd":"changePassword"}\n';
			  connection.release();
			  callback(200, null, resultJson);
			  return;
			}
		  } else {
			resultJson =
			  '{"replyCode":"error","replyMsg":"Old Password is not correct","cmd":"changePassword"}\n';
			connection.release();
			callback(200, null, resultJson);
			return;
		  }
		}
	  }
	);
  });
  }
function admin_login(userdata, pool, callback) {
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

    squery='SELECT users.* from users WHERE email="'+email+'" AND password="'+hash_password+'" AND status="1" AND role_id="1"';
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
            var id = hashids.encode(results[0].id);
            ResultArray = results[0];

            console.log("-------------------");
            resultJson =
              '{"replyCode":"success","replyMsg": "success", "data":' +
              JSON.stringify(ResultArray) +
              ',"cmd":"login admin"}\n';
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

function update_admin_profile(userdata, pool, callback) {
  var sha1 = require("sha1");
  var resultJson = "";
  var strJson = "";
  var name = "";
  var email = "";
  var phone = "";
  var id = "";

  var ConQuery = "";

  if (typeof userdata.email != "undefined" && userdata.email != "") {
    email = userdata.email;
  }
  if (typeof userdata.name != "undefined" && userdata.name != "") {
    name = userdata.name;
  }

  if (typeof userdata.phone != "undefined" && userdata.phone != "") {
    phone = userdata.phone;
  }

  if (typeof userdata.id != "undefined" && userdata.id != "") {
    id = userdata.id;
  } else {
    resultJson =
      '{"replyCode":"error","replyMsg":"Your uid is not Correct","cmd":"update_subadmin"}\n';
    callback(200, null, resultJson);
    return;
  }

  var Uquery = "";

  console.log("----------");
  console.log(userdata);

  pool.getConnection(function (err, connection) {
    Uquery='UPDATE users SET email="'+email+'",name = "'+name+'",phone = "'+phone+'" WHERE id = '+id;
    connection.query(Uquery, function (errinsert, resultinsert) {
      if (!errinsert) {
        resultJson =
          '{"replyCode":"success","replyMsg":"Profile Updated Successfully"}\n';
        connection.release();
        callback(200, null, resultJson);
        return;
      } else {
        resultJson =
          '{"replyCode":"error","replyMsg":"' +
          errinsert.message +
          '","cmd":"Update_profile"}\n';
        connection.release();
        callback(200, null, resultJson);
        return;
      }
    });
  });
}

function add_banner_image(userdata, pool, callback) {
  var resultJson = "";
  var type = "0"; //0-Home Page,1-Offer page Top,2-offer page Mid,3-Other
  var image = "";
  var id = "";

  if (typeof userdata.id != "undefined" && userdata.id != "") {
    id = userdata.id;
  }

  if (typeof userdata.image != "undefined" && userdata.image != "") {
    image = userdata.image;
  }
  if (typeof userdata.type != "undefined" && userdata.type != "") {
    type = userdata.type;
  }

  /* ESTABLISH CONNECTION TO DATABASE */
  pool.getConnection(function (err, connection) {
    if (id != "") {
     var queryinsert='UPDATE banners SET type="'+type+'",image="'+image+'" where banners.id="'+id+'"';
    } else {
    var queryinsert='INSERT INTO banners SET type="'+type+'",image="'+image+'",created= NOW()';
    }
    console.log(queryinsert);
    connection.query(queryinsert, function (errinsert, resultinsert) {
      if (!errinsert) {
        resultJson =
          '{"replyCode":"success","replyMsg":"Banner updated successfully","cmd":"Banner"}\n';
        connection.release();
        callback(200, null, resultJson);
        return;
      } else {
        resultJson =
          '{"replyCode":"error","replyMsg":"' +
          errinsert.message +
          '","cmd":"Banner"}\n';
        console.log("res-suceess");
        connection.release();
        callback(400, null, resultJson);
        return;
      }
    });
  });
}

/* Banner details */
function banner_details(userdata, pool, callback) {
  var resultJson = "";
  var Cquery = "";
  var id = "";

  if (typeof userdata.id != "undefined" && userdata.id != "") {
    id = userdata.id;
  }

  pool.getConnection(function (err, connection) {
    Cquery = "SELECT banners.* FROM banners WHERE banners.id = " + id + "";

    console.log(Cquery);
    connection.query(Cquery, function (err, ordData) {
      if (err) {
        resultJson =
          '{"replyCode":"error","replyMsg":"' +
          err.message +
          '","cmd":"banners"}\n';
        connection.release();
        callback(200, null, resultJson);
        return;
      } else {
        resultJson =
          '{"replyCode":"success","replyMsg":"Banner Details","data":' +
          JSON.stringify(ordData[0]) +
          ',"cmd":"banners"}\n';
        console.log("res-suceess");
        connection.release();
        callback(200, null, resultJson);
        return;
      }
    });
  });
}

/* banner list */
function banner_list(userdata, pool, callback) {
  var resultJson = "";
  var strJson = "";
  var keyword = "";
  var Keyconditoin = "";
  var result = [];
  var is_admin = "1";
  var type = "1";
  
  if (typeof userdata.keyword != "undefined" && userdata.keyword != "") {
    keyword = userdata.keyword;
  }
  if (typeof userdata.is_admin != "undefined" && userdata.is_admin != "") {
    is_admin = userdata.is_admin;
  }
  if (typeof userdata.type != "undefined" && userdata.type != "") {
    type = userdata.type;
  }

  pool.getConnection(function (err, connection) {
    if (is_admin == "0") {
      var Catquery =
        'SELECT banners.* FROM banners WHERE banners.status ="1" AND type="'+type+'" ORDER BY banners.id DESC';
    } else {
      var Catquery =
        'SELECT banners.* FROM banners WHERE banners.status ="1" ORDER BY banners.id DESC';
    }
console.log(Catquery)
    connection.query(Catquery, function (err, result) {
      if (err) {
        resultJson='{"replyCode":"error","replyMsg":"'+err.message+'","cmd":"sub_admin_list"}\n';
        connection.release();
        callback(200, null, resultJson);
        return;
      } else {
        resultJson='{"replyCode":"success","replyMsg":"Banner list","data":'+JSON.stringify(result)+', "cmd":"sub_admin_list"}\n';
        console.log("res-suceess");
        connection.release();
        callback(200, null, resultJson);
        return;
      }
    });
  });
}

//update banner status
function update_banner_status(userdata, pool, callback) {
  var resultJson = "";
  var strJson = "";

  var Cquery = "";
  var id = "";
  var status = ""; //0-inactive,1-active,2-delete

  if (typeof userdata.id != "undefined" && userdata.id != "") {
    id = userdata.id;
  }

  if (typeof userdata.status != "undefined" && userdata.status != "") {
    status = userdata.status;
  }
  pool.getConnection(function (err, connection) {
    squery =
      'UPDATE banners SET status = "' + status + '" WHERE id = "' + id + '"';
    connection.query(squery, function (errselect, resultselect) {
      if (!errselect) {
        console.log(resultselect);
        resultJson =
          '{"replyCode":"success","replyMsg":"Record status updated successfully","cmd":"update_banner_status"}\n';
        connection.release();
        callback(200, null, resultJson);
        return;
      } else {
        resultJson =
          '{"replyCode":"error","replyMsg":"' +
          errselect.message +
          '","cmd":"update_banner_status"}\n';
        connection.release();
        callback(200, null, resultJson);
        return;
      }
    });
  });
}

// CMS

function cms_list(userdata, pool, callback) {
  var resultJson = "";

  var keyword = "";
  var Keyconditoin = "";
  if (typeof userdata.keyword != "undefined" && userdata.keyword != "") {
    keyword = userdata.keyword;
  }

  pool.getConnection(function (err, connection) {
    if (keyword != "") {
      Keyconditoin = ' AND cms.title LIKE  "%' + keyword + '%"';
    }
    detailsquery ='SELECT cms.* from cms where cms.status !="2" ' + Keyconditoin + "";
    console.log("detailsquery", detailsquery);
    connection.query(detailsquery, function (errSelDetails, resSelDetails) {
      if (errSelDetails) {
       resultJson='{"replyCode":"error","replyMsg":"'+errSelDetails.message+'","cmd":"cms_list"}\n';
        connection.release();
        callback(200, null, resultJson);
        return;
      } else {
       resultJson='{"replyCode":"success","replyMsg":"Details found successfully .","data":'+JSON.stringify(resSelDetails)+',"cmd":"cms_list"}\n';
        console.log("res-suceess");
        connection.release();
        callback(200, null, resultJson);
        return;
      }
    });
  });
}

function add_cms(userdata, pool, callback) {
  var resultJson = "";
  var title = "";
  var slug = "";
  var description = "";
  var meta_title = "";
  var meta_keyword = "";
  var meta_description = "";
  var id = "";

  if (typeof userdata.id != "undefined" && userdata.id != "") {
    id = userdata.id;
  }
  if (typeof userdata.title != "undefined" && userdata.title != "") {
    title = userdata.title;
  }
  if (typeof userdata.meta_title != "undefined" && userdata.meta_title != "") {
    meta_title = userdata.meta_title;
  }
  if (typeof userdata.meta_keyword != "undefined" && userdata.meta_keyword != "") {
    meta_keyword = userdata.meta_keyword;
  }
  if (typeof userdata.meta_description != "undefined" && userdata.meta_description != "") {
    meta_description = userdata.meta_description;
  }

  if (typeof userdata.slug != "undefined" && userdata.slug != "") {
    slug = userdata.slug.replace(/"/g, "'");
  }
  if (
    typeof userdata.description != "undefined" &&
    userdata.description != ""
  ) {
    description = userdata.description.replace(/"/g, "'");
  }

  /* ESTABLISH CONNECTION TO DATABASE */
  pool.getConnection(function (err, connection) {
    if (id != "") {
      var queryinsert='UPDATE cms SET title="'+title+'",slug="'+slug+'",description="'+description+'",meta_description="'+meta_description+'",meta_keyword="'+meta_keyword+'",meta_title="'+meta_title+'" where cms.id="'+id+'"';
    } else {
      var queryinsert='INSERT INTO cms SET title="'+title+'",slug="'+slug+'",description="'+description+'",meta_description="'+meta_description+'",meta_keyword="'+meta_keyword+'",meta_title="'+meta_title+'",created= NOW()';
    }
    console.log(queryinsert);
    connection.query(queryinsert, function (errinsert, resultinsert) {
      if (!errinsert) {
        resultJson =
          '{"replyCode":"success","replyMsg":"CMS updated successfully","cmd":"cms"}\n';
        connection.release();
        callback(200, null, resultJson);
        return;
      } else {
        resultJson =
          '{"replyCode":"error","replyMsg":"' +
          errinsert.message +
          '","cmd":"cms"}\n';
        console.log("res-suceess");
        connection.release();
        callback(400, null, resultJson);
        return;
      }
    });
  });
}

/*cms details*/
function cms_details(userdata, pool, callback) {
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
      var Catquery = 'SELECT * FROM cms WHERE id="' + id + '"';
    } else {
      var Catquery = 'SELECT * FROM cms WHERE slug="' + slug + '"';
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

// Update stsutus
function update_cms_status(userdata, pool, callback) {
  var resultJson = "";
  var id = "";
  var status = "0"; //0-inactive , 1-active , 2- delete
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
    Uquery = 'UPDATE cms SET status="' + status + '" WHERE id = ' + id + "";
    connection.query(Uquery, function (errinsert) {
      if (!errinsert) {
        resultJson =
          '{"replyCode":"success","replyMsg":"Status chenged Successfully","cmd":"cms"}';
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

// Teacher
// add teacher
// function add_user(userdata, pool, callback) {
//   var resultJson = "";
//   var strJson = "";
//   var sha1 = require("sha1");
//   var Hashids = require("hashids"),
//     hashids = new Hashids(secretSalt);

//   var name = "";
//   var last_name = "";
//   var email = "";
//   var image = "";
//   var password = "";
//   var role_id = "3"; //1-admin,2-student,3-teacher,4-subadmin
//   var phone = "";
//   var phone_code = "";
//   var gender = "1"; //	1-male,2-female,3-other
//   var age = "0";
//   var pcode = "";
//   var time_zone = "";
//   var job_type = "1"; //1-fulltime,2-parttime
//   var dob = "0000-00-00";
//   var work_experience = "0";
//   var parents_name = "";
//   var school_name = "";
//   var subscription_type = "0"; //0-trail,1-paid
//   var school_code = "";
//   var age_group_id = "";
//   var rate = "0";
//   var country = "";
//   var city = "";
//   var state = "";
//   var parent_id = "0";
//   var featured = "0";
//   var reId = "0";

//   if (typeof userdata.city != "undefined" && userdata.city != "") {
//     city = userdata.city;
//   }
  
//   if (typeof userdata.state != "undefined" && userdata.state != "") {
//     state = userdata.state;
//   }
//   if (typeof userdata.email != "undefined" && userdata.email != "") {
//     email = userdata.email;
//   }

//   if (typeof userdata.rate != "undefined" && userdata.rate != "") {
//     rate = userdata.rate;
//   }
//   if (typeof userdata.password != "undefined" && userdata.password != "") {
//     password = userdata.password;
//   }
//   if (typeof userdata.name != "undefined" && userdata.name != "") {
//     name = userdata.name;
//   }
//   if (typeof userdata.last_name != "undefined" && userdata.last_name != "") {
//     last_name = userdata.last_name;
//   }

//   if (typeof userdata.phone != "undefined" && userdata.phone != "") {
//     phone = userdata.phone;
//   }
//   if (typeof userdata.phone_code != "undefined" && userdata.phone_code != "") {
//     phone_code = userdata.phone_code;
//   }
//   if (typeof userdata.gender != "undefined" && userdata.gender != "") {
//     gender = userdata.gender;
//   }

//   if (typeof userdata.age != "undefined" && userdata.age != "") {
//     age = userdata.age;
//   }
//   if (typeof userdata.pcode != "undefined" && userdata.pcode != "") {
//     pcode = userdata.pcode;
//   }

//   if (typeof userdata.time_zone != "undefined" && userdata.time_zone != "") {
//     time_zone = userdata.time_zone;
//   }

//   if (typeof userdata.job_type != "undefined" && userdata.job_type != "") {
//     job_type = userdata.job_type;
//   }
//   if (typeof userdata.dob != "undefined" && userdata.dob != "") {
//     dob = userdata.dob;
//   }
//   if (
//     typeof userdata.work_experience != "undefined" &&
//     userdata.work_experience != ""
//   ) {
//     work_experience = userdata.work_experience;
//   }
//   if (typeof userdata.role_id != "undefined" && userdata.role_id != "") {
//     role_id = userdata.role_id;
//   }

//   if (typeof userdata.image != "undefined" && userdata.image != "") {
//     image = userdata.image;
//   }
//   if (
//     typeof userdata.parents_name != "undefined" &&
//     userdata.parents_name != ""
//   ) {
//     parents_name = userdata.parents_name;
//   }
//   if (
//     typeof userdata.school_name != "undefined" &&
//     userdata.school_name != ""
//   ) {
//     school_name = userdata.school_name;
//   }
//   if (
//     typeof userdata.subscription_type != "undefined" &&
//     userdata.subscription_type != ""
//   ) {
//     subscription_type = userdata.subscription_type;
//   }
//   if (
//     typeof userdata.school_code != "undefined" &&
//     userdata.school_code != ""
//   ) {
//     school_code = userdata.school_code;
//   }
//   if (
//     typeof userdata.age_group_id != "undefined" &&
//     userdata.age_group_id != ""
//   ) {
//     age_group_id = userdata.age_group_id;
//   }
//   if (
//     typeof userdata.country != "undefined" &&
//     userdata.country != ""
//   ) {
//     country = userdata.country;
//   }
//   if (
//     typeof userdata.parent_id != "undefined" &&
//     userdata.parent_id != ""
//   ) {
//     parent_id = userdata.parent_id;
//   }
//   if (    typeof userdata.featured != "undefined" &&    userdata.featured != ""  ) {
//     featured = userdata.featured;
//   }
//   if (typeof userdata.reId != "undefined" &&    userdata.reId != ""  ) {
//     reId = userdata.reId;
//   }else{
//     reId = 0;

//   }

//   /* ESTABLISH CONNECTION TO DATABASE */
//   pool.getConnection(function (err, connection) {
//     var hash_password = sha1(secretSalt + userdata.password);

//     connection.query(
//       'SELECT * from users where email = "' + email + '" AND email != ""',
//       function (erremail, resultsemail) {
//         if (!erremail) {
//           var pagingCount1 = resultsemail.length;
//           console.log(userdata);
//           console.log(pagingCount1);
//           if (pagingCount1 > 0) {
//             var user_id = resultsemail[0].id;
//             if (resultsemail[0].status == "1") {
//               resultJson =
//                 '{"replyCode":"error","replyMsg":"Email already Registered, please try with different email address","cmd":"sign_up"}\n';
//               connection.release();
//               callback(200, null, resultJson);
//               return;
//             } else {
//               resultJson =
//                 '{"replyCode":"error","replyMsg":"Your account not Verified or Deativiated.","cmd":"sign_up"}\n';
//               connection.release();
//               callback(200, null, resultJson);
//               return;
//             }
//           } else {
//           var queryinsert='INSERT INTO users SET parent_id="'+parent_id+'",email="'+email+'",name = "'+name+'",last_name = "'+last_name+'", password = "'+hash_password+'",phone = "'+phone+'",phone_code = "'+phone_code+'",role_id="'+role_id+'",gender="'+gender+'",age="'+age+'",pcode="'+pcode+'",age_group_id="'+age_group_id+'",time_zone="'+time_zone+'",job_type="'+job_type+'",dob="'+dob+'",work_experience="'+work_experience+'",image="'+image+'",subscription_type="'+subscription_type+'",parents_name="'+parents_name+'",school_name="'+school_name+'",school_code="'+school_code+'",rate="'+rate+'",country="'+country+'",state="'+state+'",city="'+city+'",status="1",verified="1",reId="'+reId+'",created= NOW()';

//             console.log(queryinsert);
//             connection.query(queryinsert, function (errinsert, resultinsert) {
//               if (!errinsert) {
// 				var user_id = resultinsert.insertId;
//                 if (role_id == "3") {

//                   var checkShecduleDate =
//                     'SELECT * from demo_class_settings where id = "2" ';
//                   console.log(checkShecduleDate);
//                   connection.query(
//                     checkShecduleDate,
//                     function (errSchedule, resultsSchedule) {
//                       if (errSchedule) {
//                         resultJson =
//                           '{"replyCode":"error","replyMsg":"' +
//                           errSchedule.message +
//                           '","cmd":"sign_up"}\n';
//                         connection.release();
//                         callback(200, null, resultJson);
//                         return;
//                       } else {
//                         console.log("resultsSchedule", resultsSchedule[0]);
//                         console.log("Curdate", Curdate);
//                         var teacher_id = user_id;
//                         var NewSchDate = "";
//                         for (var i = 0; i <= 7; i++) {
//                           //repeating code here:
//                           var myDate = new Date();
//                           myDate.setDate(myDate.getDate() + i);
//                           NewSchDate =
//                             myDate.getFullYear() +
//                             "-" +
//                             parseInt(myDate.getMonth() + 1) +
//                             "-" +
//                             myDate.getDate();

//                           var tday = weekday[myDate.getDay()];
//                           tday = tday.toLowerCase();
//                           tday = tday.toString(); //console.log(tday);
//                           console.log(NewSchDate);
//                           if (resultsSchedule[0][tday] == "1") {
//                             console.log("yes");
//                           var datequery='INSERT INTO user_time_schedule SET teacher_id="'+teacher_id+'",schedule_date = "'+NewSchDate+'", available = "1",holiday = "0",status="1",created= NOW()';
//                           } else {
//                             console.log("no");
//                             var datequery='INSERT INTO user_time_schedule SET teacher_id="'+teacher_id+'",schedule_date = "'+NewSchDate+'", available = "0",holiday = "1",status="1",created= NOW()';
//                           }
//                           connection.query(
//                             datequery,
//                             function (errinsertDAte, resultinsertDate) {
//                               if (!errinsertDAte) {
//                                 var dateId = resultinsertDate.insertId;
//                                 // console.log('--time_from---',resultsSchedule[0].time_from);
//                                 // console.log('--time_to---',resultsSchedule[0].time_to);
//                                 // console.log('--class_duration---',resultsSchedule[0].class_duration);
//                                 var startTime = resultsSchedule[0].time_from;
//                                 var endTime = resultsSchedule[0].time_to;
//                                 var interval =
//                                   resultsSchedule[0].class_duration;
//                                 while (startTime <= endTime) {
//                                   startTimeTo = startTime;
//                                   startTime = addMinutes(startTime, interval);
//                                   endTimeTo = addMinutes(startTimeTo, interval);
//                                   console.log(
//                                     "Time-slot-startTimeTo",
//                                     startTimeTo
//                                   );
//                                   console.log("Time-slot-endTimeTo", endTimeTo);

//                                   console.log("Tdate", NewSchDate);
//                                   var TimeInsertquery='INSERT INTO user_time_schedule_slots SET schedule_id="'+dateId+'",teacher_id="'+teacher_id+'",time_from="'+startTimeTo+'",time_to="'+endTimeTo+'",available = "0",holiday = "0",status="1",created= NOW()';
//                                   connection.query(TimeInsertquery);
//                                 }
//                               } else {
//                                 resultJson =
//                                   '{"replyCode":"error","replyMsg":"' +
//                                   errinsertDAte.message +
//                                   '","cmd":"sign_up"}\n';
//                                 connection.release();
//                                 callback(200, null, resultJson);
//                                 return;
//                               }
//                             }
//                           );
//                         }
// 						connection.query('SELECT * from users where id = "' + user_id + '" ',
// 							function (errUser, resultsUser) {
// 							  if (!errUser) {
// 								var sid = hashids.encode(resultsUser[0].id);
// 								resultJson =
// 								'{"replyCode":"success","replyMsg":"Registered successfully","data":'+JSON.stringify(resultsUser[0])+',"uid":"'+user_id+'","sid":"'+sid+'"}\n';
// 								connection.release();
// 								callback(200, null, resultJson);
// 								return;
// 							  }else{
// 								resultJson =
//                                   '{"replyCode":"error","replyMsg":"' +
//                                   errUser.message +
//                                   '","cmd":"sign_up"}\n';
//                                 connection.release();
//                                 callback(200, null, resultJson);
//                                 return;
// 							  }
// 						})
                       
//                       }
//                     }
//                   );
//                 } else {
// 					connection.query('SELECT * from users where id = "' + user_id + '" ',
// 						function (errUser, resultsUser) {
// 							if (!errUser) {
// 								var sid = hashids.encode(resultsUser[0].id);
// 								resultJson =
// 								'{"replyCode":"success","replyMsg":"Registered successfully","data":'+JSON.stringify(resultsUser[0])+',"uid":"'+user_id+'","sid":"'+sid+'"}\n';
// 								connection.release();
// 								callback(200, null, resultJson);
// 								return;
// 							}else{
// 							resultJson =
// 								'{"replyCode":"error","replyMsg":"' +
// 								errUser.message +
// 								'","cmd":"sign_up"}\n';
// 							connection.release();
// 							callback(200, null, resultJson);
// 							return;
// 							}
// 					})
                  
//                 }

// 				{
// 					connection.query(
// 						'SELECT * FROM email_templates WHERE email_type = "registration_user"',
// 						function (err, resultTemplate) {
// 						  if (resultTemplate.length > 0) {
// 							console.log('length',resultTemplate.length);
// 							var nodemailer = require("nodemailer");
// 							var message = resultTemplate[0].message;
// 							var sender_email = resultTemplate[0].sender_email;
// 							var name = userdata.name;
							
// 							var last_name = userdata.last_name;
// 							var email = userdata.email;
						
							
							
// 							message = message.replace("[username]", name + last_name);
							
// 							// message = message.replace("[phone]", phone);
// 							// message = message.replace("[url]",`<a href=${url}></a>`);
						   
					
	
// 							// setup e-mail data with unicode symbols
// 							var mailOptions = {
// 							  from: email,// sender address
// 							  to: email,sender_email, // list of receivers
// 							  subject: resultTemplate[0].subject, // Subject line
// 							  html: message, // html body
// 							};
// 							//from: smtpMailUser,
// 							console.log('in mail box')
// 							// var transporter = nodemailer.createTransport(smtpConfig);
// 							var transporter = nodemailer.createTransport({
// 								host: "sandbox.smtp.mailtrap.io",
// 								port: 2525,
// 								auth: {
// 								  user: "afd7c9e31c132b",
// 								  pass: "682818e51399e3"
// 								}
// 							  });
	
// 							transporter.sendMail(
// 							  mailOptions
							 
// 							);
// 						  }
// 						}
// 					  );
					
// 				}


//               } else {
//                 resultJson='{"replyCode":"error","replyMsg":"'+errinsert.message+'","cmd":"sign_up"}\n';
//                 console.log("res-suceess");
//                 connection.release();
//                 callback(400, null, resultJson);
//                 return;
//               }
//             });
//           }
//         } else {
//           resultJson='{"replyCode":"error","replyMsg":"'+err.message+'","cmd":"sign_up"}\n';
//           connection.release();
//           callback(400, null, resultJson);
//           return;
//         }
//       }
//     );
//   });
// }
function add_user(userdata, pool, callback) {
  var resultJson = "";
  var strJson = "";
  var sha1 = require("sha1");
  var Hashids = require("hashids"),
    hashids = new Hashids(secretSalt);

  var name = "";
  var last_name = "";
  var email = "";
  var image = "";
  var password = "";
  var role_id = "3"; //1-admin,2-student,3-teacher,4-subadmin
  var phone = "";
  var phone_code = "";
  var gender = "1"; //	1-male,2-female,3-other
  var age = "0";
  var pcode = "";
  var time_zone = "";
  var job_type = "1"; //1-fulltime,2-parttime
  var dob = "0000-00-00";
  var work_experience = "0";
  var parents_name = "";
  var school_name = "";
  var subscription_type = "0"; //0-trail,1-paid
  var school_code = "";
  var age_group_id = "";
  var rate = "0";
  var country = "";
  var city = "";
  var news_letter = "";
  var state = "";
  var parent_id = "0";
  var featured = "0";
  var reId = "0";

  if (typeof userdata.news_letter != "undefined" && userdata.news_letter != "") {
    news_letter = userdata.news_letter;
  }

  if (typeof userdata.city != "undefined" && userdata.city != "") {
    city = userdata.city;
  }
  
  if (typeof userdata.state != "undefined" && userdata.state != "") {
    state = userdata.state;
  }
  if (typeof userdata.email != "undefined" && userdata.email != "") {
    email = userdata.email;
  }

  if (typeof userdata.rate != "undefined" && userdata.rate != "") {
    rate = userdata.rate;
  }
  if (typeof userdata.password != "undefined" && userdata.password != "") {
    password = userdata.password;
  }
  if (typeof userdata.name != "undefined" && userdata.name != "") {
    name = userdata.name;
  }
  if (typeof userdata.last_name != "undefined" && userdata.last_name != "") {
    last_name = userdata.last_name;
  }

  if (typeof userdata.phone != "undefined" && userdata.phone != "") {
    phone = userdata.phone;
  }
  if (typeof userdata.phone_code != "undefined" && userdata.phone_code != "") {
    phone_code = userdata.phone_code;
  }
  if (typeof userdata.gender != "undefined" && userdata.gender != "") {
    gender = userdata.gender;
  }

  if (typeof userdata.age != "undefined" && userdata.age != "") {
    age = userdata.age;
  }
  if (typeof userdata.pcode != "undefined" && userdata.pcode != "") {
    pcode = userdata.pcode;
  }

  if (typeof userdata.time_zone != "undefined" && userdata.time_zone != "") {
    time_zone = userdata.time_zone;
  }

  if (typeof userdata.job_type != "undefined" && userdata.job_type != "") {
    job_type = userdata.job_type;
  }
  if (typeof userdata.dob != "undefined" && userdata.dob != "") {
    dob = userdata.dob;
  }
  if (
    typeof userdata.work_experience != "undefined" &&
    userdata.work_experience != ""
  ) {
    work_experience = userdata.work_experience;
  }
  if (typeof userdata.role_id != "undefined" && userdata.role_id != "") {
    role_id = userdata.role_id;
  }

  if (typeof userdata.image != "undefined" && userdata.image != "") {
    image = userdata.image;
  }
  if (
    typeof userdata.parents_name != "undefined" &&
    userdata.parents_name != ""
  ) {
    parents_name = userdata.parents_name;
  }
  if (
    typeof userdata.school_name != "undefined" &&
    userdata.school_name != ""
  ) {
    school_name = userdata.school_name;
  }
  if (
    typeof userdata.subscription_type != "undefined" &&
    userdata.subscription_type != ""
  ) {
    subscription_type = userdata.subscription_type;
  }
  if (
    typeof userdata.school_code != "undefined" &&
    userdata.school_code != ""
  ) {
    school_code = userdata.school_code;
  }
  if (
    typeof userdata.age_group_id != "undefined" &&
    userdata.age_group_id != ""
  ) {
    age_group_id = userdata.age_group_id;
  }
  if (
    typeof userdata.country != "undefined" &&
    userdata.country != ""
  ) {
    country = userdata.country;
  }
  if (
    typeof userdata.parent_id != "undefined" &&
    userdata.parent_id != ""
  ) {
    parent_id = userdata.parent_id;
  }
  if (    typeof userdata.featured != "undefined" &&    userdata.featured != ""  ) {
    featured = userdata.featured;
  }
  if (typeof userdata.reId != "undefined" &&    userdata.reId != ""  ) {
    reId = userdata.reId;
  }else{
    reId = 0;

  }

  /* ESTABLISH CONNECTION TO DATABASE */
  pool.getConnection(function (err, connection) {
    var hash_password = sha1(secretSalt + userdata.password);

    connection.query(
      'SELECT * from users where email = "' + email + '" AND email != ""',
      function (erremail, resultsemail) {
        if (!erremail) {
          var pagingCount1 = resultsemail.length;
          console.log(userdata);
          console.log(pagingCount1);
          if (pagingCount1 > 0) {
            var user_id = resultsemail[0].id;
            if (resultsemail[0].status == "1") {
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
           var queryinsert='INSERT INTO users SET parent_id="'+parent_id+'",email="'+email+'",news_letter="'+news_letter+'",name = "'+name+'",last_name = "'+last_name+'", password = "'+hash_password+'",phone = "'+phone+'",phone_code = "'+phone_code+'",role_id="'+role_id+'",gender="'+gender+'",age="'+age+'",pcode="'+pcode+'",age_group_id="'+age_group_id+'",time_zone="'+time_zone+'",job_type="'+job_type+'",dob="'+dob+'",work_experience="'+work_experience+'",image="'+image+'",subscription_type="'+subscription_type+'",parents_name="'+parents_name+'",school_name="'+school_name+'",school_code="'+school_code+'",rate="'+rate+'",country="'+country+'",state="'+state+'",city="'+city+'",status="1",verified="1",reId="'+reId+'",created= NOW()';

            console.log(queryinsert);
            connection.query(queryinsert, function (errinsert, resultinsert) {
              if (!errinsert) {
				var user_id = resultinsert.insertId;
                if (role_id == "3") {

                  var checkShecduleDate ='SELECT * from demo_class_settings where id = "2" ';
                  console.log(checkShecduleDate);
                  connection.query(
                    checkShecduleDate,
                    function (errSchedule, resultsSchedule) {
                      if (errSchedule) {
                        resultJson =
                          '{"replyCode":"error","replyMsg":"' +
                          errSchedule.message +
                          '","cmd":"sign_up"}\n';
                        connection.release();
                        callback(200, null, resultJson);
                        return;
                      } else {
                        console.log("resultsSchedule", resultsSchedule[0]);
                        console.log("Curdate", Curdate);
                        var teacher_id = user_id;
                        var NewSchDate = "";
                        for (var i = 0; i <= 7; i++) {
                          //repeating code here:
                          var myDate = new Date();
                          myDate.setDate(myDate.getDate() + i);
                          NewSchDate =
                            myDate.getFullYear() +
                            "-" +
                            parseInt(myDate.getMonth() + 1) +
                            "-" +
                            myDate.getDate();

                          var tday = weekday[myDate.getDay()];
                          tday = tday.toLowerCase();
                          tday = tday.toString(); //console.log(tday);
                          console.log(NewSchDate);
                          if (resultsSchedule[0][tday] == "1") {
                            console.log("yes");
                           var datequery='INSERT INTO user_time_schedule SET teacher_id="'+teacher_id+'",schedule_date = "'+NewSchDate+'", available = "1",holiday = "0",status="1",created= NOW()';
                          } else {
                            console.log("no");
                            var datequery='INSERT INTO user_time_schedule SET teacher_id="'+teacher_id+'",schedule_date = "'+NewSchDate+'", available = "0",holiday = "1",status="1",created= NOW()';
                          }
                          connection.query(
                            datequery,
                            function (errinsertDAte, resultinsertDate) {
                              if (!errinsertDAte) {
                                var dateId = resultinsertDate.insertId;
                                // console.log('--time_from---',resultsSchedule[0].time_from);
                                // console.log('--time_to---',resultsSchedule[0].time_to);
                                // console.log('--class_duration---',resultsSchedule[0].class_duration);
                                var startTime = resultsSchedule[0].time_from;
                                var endTime = resultsSchedule[0].time_to;
                                var interval =
                                  resultsSchedule[0].class_duration;
                                while (startTime <= endTime) {
                                  startTimeTo = startTime;
                                  startTime = addMinutes(startTime, interval);
                                  endTimeTo = addMinutes(startTimeTo, interval);
                                  console.log(
                                    "Time-slot-startTimeTo",
                                    startTimeTo
                                  );
                                  console.log("Time-slot-endTimeTo", endTimeTo);

                                  console.log("Tdate", NewSchDate);
                                  var TimeInsertquery='INSERT INTO user_time_schedule_slots SET schedule_id="'+dateId+'",teacher_id="'+teacher_id+'",time_from="'+startTimeTo+'",time_to="'+endTimeTo+'",available = "0",holiday = "0",status="1",created= NOW()';
                                  connection.query(TimeInsertquery);
                                }
                              } else {
                                resultJson =
                                  '{"replyCode":"error","replyMsg":"' +
                                  errinsertDAte.message +
                                  '","cmd":"sign_up"}\n';
                                connection.release();
                                callback(200, null, resultJson);
                                return;
                              }
                            }
                          );
                        }
						connection.query('SELECT * from users where id = "' + user_id + '" ',
							function (errUser, resultsUser) {
							  if (!errUser) {
								var sid = hashids.encode(resultsUser[0].id);
								resultJson =
								'{"replyCode":"success","replyMsg":"Registered successfully","data":'+JSON.stringify(resultsUser[0])+',"uid":"'+user_id+'","sid":"'+sid+'"}\n';
								connection.release();
								callback(200, null, resultJson);
								return;
							  }else{
								resultJson =
                                  '{"replyCode":"error","replyMsg":"' +
                                  errUser.message +
                                  '","cmd":"sign_up"}\n';
                                connection.release();
                                callback(200, null, resultJson);
                                return;
							  }
						})
                       
                      }
                    }
                  );
                } else {
					connection.query('SELECT * from users where id = "' + user_id + '" ',
						function (errUser, resultsUser) {
							if (!errUser) {
								var sid = hashids.encode(resultsUser[0].id);
								resultJson =
								'{"replyCode":"success","replyMsg":"Registered successfully","data":'+JSON.stringify(resultsUser[0])+',"uid":"'+user_id+'","sid":"'+sid+'"}\n';
								connection.release();
								callback(200, null, resultJson);
								return;
							}else{
							resultJson =
								'{"replyCode":"error","replyMsg":"' +
								errUser.message +
								'","cmd":"sign_up"}\n';
							connection.release();
							callback(200, null, resultJson);
							return;
							}
					})
                  
                }

				{
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
							var email = userdata.email;
						
							
							
							message = message.replace("[username]", name + last_name);
							
							// message = message.replace("[phone]", phone);
							// message = message.replace("[url]",`<a href=${url}></a>`);
						   
					
	
							// setup e-mail data with unicode symbols
							var mailOptions = {
							  from: sender_email,// sender address
							  to: email,sender_email, // list of receivers
							  subject: resultTemplate[0].subject, // Subject line
							  html: message, // html body
							};
							//from: smtpMailUser,
							console.log(mailOptions,'in mail box')
							// var transporter = nodemailer.createTransport(smtpConfig);
				// 			var transporter = nodemailer.createTransport({
				// 				host: "mail.mrmmbs.com",
				// 				type: "SMTP",
				// 				port: 465,
				// 				secure: true,
				// 				auth: {
				// 				  user: "test@mrmmbs.com",
				// 				  pass: "Admin@2023"
				// 				}
				// 			  });
	
							transporter.sendMail(
							  mailOptions
							 
							);
				// 			console.log(transporter,'email testing')
						  }
						}
					  );
					
				}


              } else {
                resultJson='{"replyCode":"error","replyMsg":"'+errinsert.message+'","cmd":"sign_up"}\n';
                console.log("res-suceess");
                connection.release();
                callback(400, null, resultJson);
                return;
              }
            });
          }
        } else {
          resultJson='{"replyCode":"error","replyMsg":"'+err.message+'","cmd":"sign_up"}\n';
          connection.release();
          callback(400, null, resultJson);
          return;
        }
      }
    );
  });
}

function addMinutes(time, minsToAdd) {
  function D(J) {
    return (J < 10 ? "0" : "") + J;
  }
  var piece = time.split(":");
  var mins = piece[0] * 60 + +piece[1] + +minsToAdd;

  return D(((mins % (24 * 60)) / 60) | 0) + ":" + D(mins % 60);
} //this is work

//09-04-2023
// function update_user(userdata, pool, callback) {
  
//   	var strJson = "";
//   var sha1 = require("sha1");
//   var Hashids = require("hashids"),
// 	hashids = new Hashids(secretSalt);
	
//   var resultJson = "";
//   var strJson = "";

//   var name = "";
//   var last_name = "";
//   var email = "";
//   var password = "";
//   var role_id = "3"; //1-admin,2-student,3-teacher,4-subadmin
//   var phone = "";
//   var phone_code = "";
//   var gender = ""; //	1-male,2-female,3-other
//   var age = "";
//   var pcode = "";
  
//   var city = "";
//   var state = "";
//   var job_type = "";
//   var dob = "";
//   var image = "";
//   var work_experience = "";
//   var parents_name = "";
//   var school_name = "";
//   var subscription_type = "0"; //0-trail,1-paid
//   var age_group_id = "";
//   var class_name = "";
//   var rate = "";
//   var id = "";
//   var country = "";
//   var description = "";
//   var parent_id = "0";
//   var featured = "0";
//   var hash_newpassword = sha1(secretSalt + password);
//   if (typeof userdata.featured != "undefined" && userdata.featured != "") {
//     featured = userdata.featured;
//   }
//   if (typeof userdata.email != "undefined" && userdata.email != "") {
//     email = userdata.email;
//   }
//   if (typeof userdata.hash_newpassword != "undefined" && userdata.hash_newpassword != "") {
//     hash_newpassword = userdata.hash_newpassword;
//   }
//   if (typeof userdata.name != "undefined" && userdata.name != "" && userdata.name != null ) {
//     name = userdata.name;
	
//   }
//   if (typeof userdata.last_name != "undefined" && userdata.last_name != "") {
//     last_name = userdata.last_name;
//   }

//   if (typeof userdata.phone != "undefined" && userdata.phone != "") {
//     phone = userdata.phone;
//   }
//   if (typeof userdata.phone_code != "undefined" && userdata.phone_code != "") {
//     phone_code = userdata.phone_code;
//   }
//   if (typeof userdata.gender != "undefined" && userdata.gender != "") {
//     gender = userdata.gender;
//   }

//   if (typeof userdata.age != "undefined" && userdata.age != "" && userdata.age != 0) {
//     age = userdata.age;
//   }else{
// 	age = null;
//   }
//   if (typeof userdata.pcode != "undefined" && userdata.pcode != "" && userdata.pcode != null) {
//     pcode = userdata.pcode;
//   }else{
// 	pcode = '0';
//   }

//   if (typeof userdata.city != "undefined" && userdata.city != "") {
//     city = userdata.city;
//   }
//   if (typeof userdata.state != "undefined" && userdata.state != "") {
//     state = userdata.state;
//   }

//   if (typeof userdata.job_type != "undefined" && userdata.job_type != "") {
//     job_type = userdata.job_type;
//   }
//   if (typeof userdata.dob != "undefined" && userdata.dob != "") {
//     dob = userdata.dob;
//   }
//   if (
//     typeof userdata.work_experience != "undefined" &&
//     userdata.work_experience != ""
//   ) {
//     work_experience = userdata.work_experience;
//   }else{
// 	work_experience = 0;
//   }
//   if (typeof userdata.role_id != "undefined" && userdata.role_id != "") {
//     role_id = userdata.role_id;
//   }
//   if (typeof userdata.image != "undefined" && userdata.image != "") {
//     image = userdata.image;
//   }
//   if (typeof userdata.parent_id != "undefined" && userdata.parent_id != "") {
//     parent_id = userdata.parent_id;
//   }

//   if (
//     typeof userdata.parents_name != "undefined" &&
//     userdata.parents_name != ""
//   ) {
//     parents_name = userdata.parents_name;
//   }
//   if (
//     typeof userdata.school_name != "undefined" &&
//     userdata.school_name != ""
//   ) {
//     school_name = userdata.school_name;
//   }
//   if (
//     typeof userdata.subscription_type != "undefined" &&
//     userdata.subscription_type != ""
//   ) {
//     subscription_type = userdata.subscription_type;
//   }
//   if (
//     typeof userdata.age_group_id != "undefined" &&
//     userdata.age_group_id != ""
//   ) {
//     age_group_id = userdata.age_group_id;
//   }else{
// 	age_group_id = 0;
//   }
//   if (typeof userdata.class_name != "undefined" && userdata.class_name != "") {
//     class_name = userdata.class_name;
//   }
//   if (typeof userdata.rate != "undefined" && userdata.rate != "") {
//     rate = userdata.rate;
//   }
//   if (typeof userdata.country != "undefined" && userdata.country != "") {
//     country = userdata.country;
//   }
//   if (typeof userdata.description != "undefined" && userdata.description != "") {
//     description = userdata.description;
//   }

//   if (typeof userdata.id != "undefined" && userdata.id != "") {
//     id = userdata.id;
//   } else {
//     resultJson =
//       '{"replyCode":"error","replyMsg":"Your uid is not Correct","cmd":"update_subadmin"}\n';
//     callback(200, null, resultJson);
//     return;
//   }

//   var Uquery = "";

//   console.log("----------");
//   console.log(userdata);

//   pool.getConnection(function (err, connection) {
//     checkValidateEmailEmpProfile(userdata, pool, function (responseEmail) {
//       console.log(responseEmail);
//       if (responseEmail == false) {
        
// 		Uquery='UPDATE users SET parent_id="'+parent_id+'",email="'+email+'",name = "'+name+'",password = "'+hash_newpassword+'",last_name = "'+last_name+'",phone = "'+phone+'",phone_code = "'+phone_code+'",role_id="'+role_id+'",gender="'+gender+'",age='+age+',pcode='+pcode+',age_group_id='+age_group_id+',city="'+city+'",state="'+state+'",job_type="'+job_type+'",dob="'+dob+'",image="'+image+'",work_experience="'+work_experience+'",subscription_type="'+subscription_type+'",parents_name="'+parents_name+'",school_name="'+school_name+'",class_name="'+class_name+'",rate="'+rate+'",country="'+country+'",description="'+description+'",featured="'+featured+'"  WHERE id = '+id;

//         connection.query(Uquery, function (errinsert, resultinsert) {
//           if (!errinsert) {
//             var teacher_id = id;
//             resultJson =
//             '{"replyCode":"success","replyMsg":"Profile Updated Successfully"}\n';
//             connection.release();
//             callback(200, null, resultJson);
//             return;
//           } else {
//             resultJson='{"replyCode":"error","replyMsg":"'+errinsert.message+'","cmd":"Update_profile"}\n';
//             connection.release();
//             callback(200, null, resultJson);
//             return;
//           }
//         });
//       } else {
//         resultJson =
//           '{"replyCode":"error","replyMsg":"Email already Taken, please try with different email address ","cmd":"Update_profile"}\n';
//         console.log("res-suceess");
//         connection.release();
//         callback(200, null, resultJson);
//       }
//     });
//   });
// }
function update_user(userdata, pool, callback) {
  
	var strJson = "";
var sha1 = require("sha1");
var Hashids = require("hashids"),
  hashids = new Hashids(secretSalt);
  
var resultJson = "";
var strJson = "";

var name = "";
var last_name = "";
var email = "";
var password = "";
var role_id = "3"; //1-admin,2-student,3-teacher,4-subadmin
var phone = "";
var phone_code = "";
var gender = ""; //	1-male,2-female,3-other
var age = "";
var pcode = "";

var city = "";
var state = "";
var job_type = "";
var dob = "";
var image = "";
var work_experience = "";
var parents_name = "";
var parent_last_name = "";
var parent_email = "";
var parent_phone = "";
var school_name = "";
var subscription_type = "0"; //0-trail,1-paid
var age_group_id = "";
var class_name = "";
var rate = "";
var id = "";
var bio = "";
var country = "";
var description = "";
var parent_id = "0";
var featured = "0";
var hash_newpassword = sha1(secretSalt + password);
if (typeof userdata.featured != "undefined" && userdata.featured != "") {
  featured = userdata.featured;
}
if (typeof userdata.email != "undefined" && userdata.email != "") {
  email = userdata.email;
}
if (typeof userdata.hash_newpassword != "undefined" && userdata.hash_newpassword != "") {
  hash_newpassword = userdata.hash_newpassword;
}
if (typeof userdata.name != "undefined" && userdata.name != "" && userdata.name != null ) {
  name = userdata.name;
  
}
if (typeof userdata.last_name != "undefined" && userdata.last_name != "") {
  last_name = userdata.last_name;
}

if (typeof userdata.phone != "undefined" && userdata.phone != "") {
  phone = userdata.phone;
}
if (typeof userdata.phone_code != "undefined" && userdata.phone_code != "") {
  phone_code = userdata.phone_code;
}
if (typeof userdata.gender != "undefined" && userdata.gender != "") {
  gender = userdata.gender;
}

if (typeof userdata.age != "undefined" && userdata.age != "" && userdata.age != 0) {
  age = userdata.age;
}else{
  age = null;
}
if (typeof userdata.pcode != "undefined" && userdata.pcode != "" && userdata.pcode != null) {
  pcode = userdata.pcode;
}else{
  pcode = '0';
}

if (typeof userdata.city != "undefined" && userdata.city != "") {
  city = userdata.city;
}
if (typeof userdata.state != "undefined" && userdata.state != "") {
  state = userdata.state;
}

if (typeof userdata.job_type != "undefined" && userdata.job_type != "") {
  job_type = userdata.job_type;
}else{
  job_type = 0;
}
if (typeof userdata.dob != "undefined" && userdata.dob != "") {
  dob = userdata.dob;
}
if (
  typeof userdata.work_experience != "undefined" &&
  userdata.work_experience != ""
) {
  work_experience = userdata.work_experience;
}else{
  work_experience = 0;
}
if (typeof userdata.role_id != "undefined" && userdata.role_id != "") {
  role_id = userdata.role_id;
}
if (typeof userdata.bio != "undefined" && userdata.bio != "") {
  bio = userdata.bio;
}
if (typeof userdata.image != "undefined" && userdata.image != "") {
  image = userdata.image;
}
if (typeof userdata.parent_id != "undefined" && userdata.parent_id != "") {
  parent_id = userdata.parent_id;
}
if (typeof userdata.parent_last_name != "undefined" && userdata.parent_last_name != "") {
  parent_last_name = userdata.parent_last_name;
}
if (typeof userdata.parent_email != "undefined" && userdata.parent_email != "") {
  parent_email = userdata.parent_email;
}
if (typeof userdata.parent_phone != "undefined" && userdata.parent_phone != "") {
  parent_phone = userdata.parent_phone;
}

if (
  typeof userdata.parents_name != "undefined" &&
  userdata.parents_name != ""
) {
  parents_name = userdata.parents_name;
}
if (
  typeof userdata.school_name != "undefined" &&
  userdata.school_name != ""
) {
  school_name = userdata.school_name;
}
if (
  typeof userdata.subscription_type != "undefined" &&
  userdata.subscription_type != ""
) {
  subscription_type = userdata.subscription_type;
}
if (
  typeof userdata.age_group_id != "undefined" &&
  userdata.age_group_id != ""
) {
  age_group_id = userdata.age_group_id;
}else{
  age_group_id = 0;
}
if (typeof userdata.class_name != "undefined" && userdata.class_name != "") {
  class_name = userdata.class_name;
}
if (typeof userdata.rate != "undefined" && userdata.rate != "") {
  rate = userdata.rate;
}
if (typeof userdata.country != "undefined" && userdata.country != "") {
  country = userdata.country;
}
if (typeof userdata.description != "undefined" && userdata.description != "") {
  description = userdata.description;
}

if (typeof userdata.id != "undefined" && userdata.id != "") {
  id = userdata.id;
} else {
  resultJson =
	'{"replyCode":"error","replyMsg":"Your uid is not Correct","cmd":"update_subadmin"}\n';
  callback(200, null, resultJson);
  return;
}

var Uquery = "";

console.log("----------");
console.log(userdata);

pool.getConnection(function (err, connection) {
  checkValidateEmailEmpProfile(userdata, pool, function (responseEmail) {
	console.log(responseEmail);
	if (responseEmail == false) {
	  
	  Uquery='UPDATE users SET parent_id="'+parent_id+'",parent_last_name="'+parent_last_name+'",parent_email="'+parent_email+'",parent_phone="'+parent_phone+'",bio="'+bio+'",email="'+email+'",name = "'+name+'",password = "'+hash_newpassword+'",last_name = "'+last_name+'",phone = "'+phone+'",phone_code = "'+phone_code+'",role_id="'+role_id+'",gender="'+gender+'",age='+age+',pcode='+pcode+',age_group_id='+age_group_id+',city="'+city+'",state="'+state+'",job_type="'+job_type+'",dob="'+dob+'",image="'+image+'",work_experience="'+work_experience+'",subscription_type="'+subscription_type+'",parents_name="'+parents_name+'",school_name="'+school_name+'",class_name="'+class_name+'",rate="'+rate+'",country="'+country+'",description="'+description+'",featured="'+featured+'"  WHERE id = "'+id+'"';
console.log(Uquery,'UqueryUquery')
connection.query(Uquery, function (errinsert, resultinsert) {
		if (!errinsert) {
		  var teacher_id = id;
		  resultJson =
		  '{"replyCode":"success","replyMsg":"Profile Updated Successfully"}\n';
		  connection.release();
		  callback(200, null, resultJson);
		  return;
		} else {
		  resultJson='{"replyCode":"error","replyMsg":"'+errinsert.message+'","cmd":"Update_profile"}\n';
		  connection.release();
		  callback(200, null, resultJson);
		  return;
		}
	  });
	} else {
	  resultJson =
		'{"replyCode":"error","replyMsg":"Email already Taken, please try with different email address ","cmd":"Update_profile"}\n';
	  console.log("res-suceess");
	  connection.release();
	  callback(200, null, resultJson);
	}
  });
});
}
//user status
function update_user_status(userdata, pool, callback) {
  var resultJson = "";
  var strJson = "";
// console.log(userdata.status,'update_user_status');
  var Cquery = "";
  var id = "";
  var status = ""; //0-inactive,1-active,2-delete
  var Uquery = "";
  var reason=""

  if (typeof userdata.id != "undefined" && userdata.id != "") {
    id = userdata.id;
  }
  if (typeof userdata.reason != "undefined" && userdata.reason != "") {
    reason = userdata.reason;
  }

  if (typeof userdata.status != "undefined" && userdata.status != "") {
    status = userdata.status;
  }
  pool.getConnection(function (err, connection) {
    Uquery =   'UPDATE users SET status = "' + status + '",reason = "' + reason + '" WHERE id = "' + id + '"';
    connection.query(Uquery, function (errselect, resultselect) {
      if (!errselect) {
        console.log(resultselect);
        resultJson =
          '{"replyCode":"success","replyMsg":"Record status updated successfully","cmd":"update_subadmin_status"}\n';
        connection.release();
        callback(200, null, resultJson);
        return;
      } else {
        resultJson =
          '{"replyCode":"error","replyMsg":"' +
          errselect.message +
          '","cmd":"update_subadmin_status"}\n';
        connection.release();
        callback(200, null, resultJson);
        return;
      }
    });
  });
}
function teacher_payout_earning_update(userdata, pool, callback) {
  var resultJson = "";
  var strJson = "";
console.log(userdata.status,'teacher_payout_earning_update');
  var Cquery = "";
  var id = "";
  var paid = ""; //0-inactive,1-active,2-delete
  var Uquery = "";

  if (typeof userdata.id != "undefined" && userdata.id != "") {
    id = userdata.id;
  }

  if (typeof userdata.paid != "undefined" && userdata.paid != "") {
    paid = userdata.paid;
  }
  pool.getConnection(function (err, connection) {
    Uquery =   'UPDATE teachers_payout SET paid = "' + paid + '" WHERE id = "' + id + '"';
    connection.query(Uquery, function (errselect, resultselect) {
      if (!errselect) {
        console.log(resultselect);
        resultJson =
          '{"replyCode":"success","replyMsg":"Record paid updated successfully","cmd":"update_subadmin_paid"}\n';
        connection.release();
        callback(200, null, resultJson);
        return;
      } else {
        resultJson =
          '{"replyCode":"error","replyMsg":"' +
          errselect.message +
          '","cmd":"update_subadmin_status"}\n';
        connection.release();
        callback(200, null, resultJson);
        return;
      }
    });
  });
}

//user status
function update_user_verified_status(userdata, pool, callback) {
  var resultJson = "";
  var strJson = "";

  var Cquery = "";
  var id = "";
  var verified = ""; //0-inactive,1-active,2-delete

  if (typeof userdata.id != "undefined" && userdata.id != "") {
    id = userdata.id;
  }

  if (typeof userdata.verified != "undefined" && userdata.verified != "") {
    verified = userdata.verified;
  }
  pool.getConnection(function (err, connection) {
    squery =
      'UPDATE users SET verified = "' + verified + '" WHERE id = "' + id + '"';
    connection.query(squery, function (errselect, resultselect) {
      if (!errselect) {
        console.log(resultselect);
        resultJson =
          '{"replyCode":"success","replyMsg":"Record status updated successfully","cmd":"update_subadmin_status"}\n';
        connection.release();
        callback(200, null, resultJson);
        return;
      } else {
        resultJson =
          '{"replyCode":"error","replyMsg":"' +
          errselect.message +
          '","cmd":"update_subadmin_status"}\n';
        connection.release();
        callback(200, null, resultJson);
        return;
      }
    });
  });
}

/* user List */
function user_list(userdata, pool, callback) {
  var resultJson = "";
  var strJson = "";
  var keyword = "";
  var role_id = "3";
  var learning = "";
  var school_code = "";
  var Keyconditoin = ' users.status !="2" ';
  var result = [];
  var start = "0";
  var limit = "";
  var limitStr='';
  var subscribed = "";
  if (typeof userdata.keyword != "undefined" && userdata.keyword != "") {
    keyword = userdata.keyword;
  }
  if (typeof userdata.role_id != "undefined" && userdata.role_id != "") {
    role_id = userdata.role_id;
  }
  if (typeof userdata.learning != "undefined" && userdata.learning != "") {
    learning = userdata.learning;
  }

  if (
    typeof userdata.school_code != "undefined" &&
    userdata.school_code != ""
  ) {
    school_code = userdata.school_code;
  }

  if (typeof userdata.start != "undefined" && userdata.start != "") {
    start = userdata.start;
  }
  if (typeof userdata.limit != "undefined" && userdata.limit != "") {
    limit = userdata.limit;
  }

  if (typeof userdata.subscribed != "undefined" && userdata.subscribed != "") {
    subscribed = userdata.subscribed;
  }

  if (limit != "") {
    limitStr = "LIMIT " + start + ", " + limit + "";
  }
  pool.getConnection(function (err, connection) {
    if (keyword != "") {
      Keyconditoin += ' AND users.name LIKE  "%' + keyword + '%" OR users.last_name LIKE  "%' + keyword + '%" OR users.phone LIKE  "%' + keyword + '%" OR users.email LIKE  "%' + keyword + '%"';
    }

    if (role_id != "") {
      Keyconditoin += ' AND users.role_id ="' + role_id + '"';
    }

    if (learning != "") {
      Keyconditoin += ' AND users.learning ="' + learning + '"';
    }
    if (school_code != "") {
      Keyconditoin += ' AND users.school_code ="' + school_code + '"';
    }
    if (subscribed != "") {
      if (subscribed == "0") {
        Keyconditoin +=
          ' AND (SELECT COUNT(id) from student_course_subscription where student_course_subscription.student_id=users.id AND student_course_subscription.status="1") =0';
      } else {
        Keyconditoin +=
          ' AND (SELECT COUNT(id) from student_course_subscription where student_course_subscription.student_id=users.id AND student_course_subscription.status="1") >=1';
      }
    }

    var Catquery ='SELECT users.*,(SELECT COUNT(id) from student_course_subscription where student_course_subscription.student_id=users.id AND student_course_subscription.status="1") as subscribed,age_group.title FROM users LEFT JOIN age_group as age_group ON age_group.id = users.age_group_id  WHERE  ' +Keyconditoin +" ORDER BY users.id DESC " +limitStr + "";

    console.log("Catquery", Catquery);

    var countquery =
      "SELECT count(*) as count from users WHERE " + Keyconditoin + "";
    // console.log('countquery::::::::::::::::----------',countquery)
    connection.query(countquery, function (err, responsecount) {
      // console.log('responsecount::::::::::::::::----------',responsecount)
      if (responsecount && responsecount[0].count > 0) {
        connection.query(Catquery, function (err, result) {
          if (err) {
            resultJson='{"replyCode":"error","replyMsg":"'+err.message+'","cmd":"user_list"}\n';
            connection.release();
            callback(200, null, resultJson);
            return;
          } else {
            if (result.length > 0) {
                resultJson='{"replyCode":"success","replyMsg":"User list","data":'+JSON.stringify(result)+',"totalCount":'+responsecount[0].count+', "cmd":"user_list"}\n';
                console.log("res-suceess");
                connection.release();
                callback(200, null, resultJson);
                return;
            } else {
              resultJson =
                '{"replyCode":"success","replyMsg":"No Record found.","data":[], "cmd":"view_classes_info"}\n';
              console.log("res-suceess");
              connection.release();
              callback(200, null, resultJson);
              return;
            }
          }
        });
      } else {
        resultJson =
          '{"replyCode":"success","replyMsg":"user_list","data":[], "cmd":"user_list"}\n';
        console.log(resultJson);
        connection.release();
        callback(200, null, resultJson);
        return;
      }
    });
  });
}

/* User details */
function user_details(userdata, pool, callback) {
  var Hashids = require("hashids"),
    hashids = new Hashids(secretSalt);

  var resultJson = "";
  var Cquery = "";
  var id = "";

  if (typeof userdata.id != "undefined" && userdata.id != "") {
    id = userdata.id;
  }

  pool.getConnection(function (err, connection) {
      //10-04-2023
    // Cquery = "SELECT users.* FROM users WHERE users.id = " + id + " " ;
    Cquery = "SELECT users.*,(SELECT ROUND(AVG (reviews.rating),1) from reviews WHERE reviews.teacher_id=users.id AND reviews.status = '1') as avg_rating FROM users WHERE users.id = " + id + " " ;

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

// faqs
function faqs_list_admin(userdata, pool, callback) {
  var resultJson = "";
  var type = ""; //type 1-teacher,2-student
  var keyword = "";
  var Keyconditoin = "";
  var start = '0';
  var limit = '20';
  var limitStr ='';
  var isAdmin = '1';

	if (typeof userdata.start != 'undefined' && userdata.start != '') {
		start = userdata.start;
	}

	if (typeof userdata.limit != 'undefined' && userdata.limit != '') {
		limit = userdata.limit;
	}
  if (typeof userdata.keyword != "undefined" && userdata.keyword != "") {
    keyword = userdata.keyword;
  }
  if (typeof userdata.type != "undefined" && userdata.type != "") {
    type = userdata.type;
  }
  if (typeof userdata.isAdmin != 'undefined' && userdata.isAdmin != '') {
	isAdmin = userdata.isAdmin;
  }
  
	
	if(limit !=''){
		limitStr='LIMIT '+start+', '+limit+'';
	}	
  pool.getConnection(function (err, connection) {
    if (keyword != "") {
      Keyconditoin += ' AND faqs.question LIKE  "%' + keyword + '%"';
    }
    if (type != "") {
      Keyconditoin += ' AND faqs.type="' + type + '"';
    }
	
	
		detailsquery = 'SELECT faqs.* from faqs where faqs.status !="2"  ' + Keyconditoin + ' '+limitStr+'';
	
    console.log("detailsquery", detailsquery);
    connection.query(detailsquery, function (errSelDetails, resSelDetails) {
      if (errSelDetails) {
        resultJson='{"replyCode":"error","replyMsg":"'+errSelDetails.message+'","cmd":"faqs_list"}\n';
        connection.release();
        callback(200, null, resultJson);
        return;
      } else {
        resultJson='{"replyCode":"success","replyMsg":"Details found successfully .","data":'+JSON.stringify(resSelDetails)+',"cmd":"faqs_list"}\n';
        console.log("res-suceess");
        connection.release();
        callback(200, null, resultJson);
        return;
      }
    });
  });
}
function faqs_list(userdata, pool, callback) {
  var resultJson = "";
  var type = ""; //type 1-teacher,2-student
  var keyword = "";
  var Keyconditoin = "";
  var start = '0';
  var limit = '20';
  var limitStr ='';
  var isAdmin = '1';

	if (typeof userdata.start != 'undefined' && userdata.start != '') {
		start = userdata.start;
	}

	if (typeof userdata.limit != 'undefined' && userdata.limit != '') {
		limit = userdata.limit;
	}
  if (typeof userdata.keyword != "undefined" && userdata.keyword != "") {
    keyword = userdata.keyword;
  }
  if (typeof userdata.type != "undefined" && userdata.type != "") {
    type = userdata.type;
  }
  if (typeof userdata.isAdmin != 'undefined' && userdata.isAdmin != '') {
	isAdmin = userdata.isAdmin;
  }
  
	
	if(limit !=''){
		limitStr='LIMIT '+start+', '+limit+'';
	}	
  pool.getConnection(function (err, connection) {
    if (keyword != "") {
      Keyconditoin += ' AND faqs.question LIKE  "%' + keyword + '%"';
    }
    if (type != "") {
      Keyconditoin += ' AND faqs.type="' + type + '"';
    }
	
	if(isAdmin !='0'){
		detailsquery = 'SELECT faqs.* from faqs where faqs.status ="1"  ' + Keyconditoin + '';
	}else{
		detailsquery = 'SELECT faqs.* from faqs where faqs.status !="2"  ' + Keyconditoin + ' '+limitStr+'';
	}
    console.log("detailsquery", detailsquery);
    connection.query(detailsquery, function (errSelDetails, resSelDetails) {
      if (errSelDetails) {
        resultJson='{"replyCode":"error","replyMsg":"'+errSelDetails.message+'","cmd":"faqs_list"}\n';
        connection.release();
        callback(200, null, resultJson);
        return;
      } else {
        resultJson='{"replyCode":"success","replyMsg":"Details found successfully .","data":'+JSON.stringify(resSelDetails)+',"cmd":"faqs_list"}\n';
        console.log("res-suceess");
        connection.release();
        callback(200, null, resultJson);
        return;
      }
    });
  });
}

function add_faqs(userdata, pool, callback) {
  var resultJson = "";
  var question = "";
  var answer = "";
  var type = "1"; //1-teacher,2-student
  var id = "";

  if (typeof userdata.id != "undefined" && userdata.id != "") {
    id = userdata.id;
  }
  if (typeof userdata.question != "undefined" && userdata.question != "") {
    question = userdata.question;
  }

  if (typeof userdata.answer != "undefined" && userdata.answer != "") {
    answer = userdata.answer;
  }
  if (typeof userdata.type != "undefined" && userdata.type != "") {
    type = userdata.type;
  }

  /* ESTABLISH CONNECTION TO DATABASE */
  pool.getConnection(function (err, connection) {
    if (id != "") {
      var queryinsert='UPDATE faqs SET question="'+question+'",type="'+type+'",answer="'+answer+'" where faqs.id="'+id+'"';
    } else {
     var queryinsert='INSERT INTO faqs SET question="'+question+'",type="'+type+'",answer="'+answer+'",created= NOW()';
    }
    console.log(queryinsert);
    connection.query(queryinsert, function (errinsert, resultinsert) {
      if (!errinsert) {
        resultJson =
          '{"replyCode":"success","replyMsg":"faqs updated successfully","cmd":"faqs"}\n';
        connection.release();
        callback(200, null, resultJson);
        return;
      } else {
        resultJson='{"replyCode":"error","replyMsg":"'+errinsert.message+'","cmd":"faqs"}\n';
        console.log("res-suceess");
        connection.release();
        callback(400, null, resultJson);
        return;
      }
    });
  });
}

/*faqs details*/
function faqs_details(userdata, pool, callback) {
  var resultJson = "";
  var id = "";

  if (typeof userdata.id != "undefined" && userdata.id != "") {
    id = userdata.id;
  }

  console.log("----------");
  console.log(userdata);

  pool.getConnection(function (err, connection) {
    var Catquery = 'SELECT * FROM faqs WHERE id="' + id + '"';
    console.log("qq", Catquery);
    connection.query(Catquery, function (errinsert, resultinsert) {
      if (!errinsert) {
       resultJson='{"replyCode":"success","replyMsg":"faqss details","data":'+JSON.stringify(resultinsert)+"}\n";
        connection.release();
        callback(200, null, resultJson);
        return;
      } else {
        resultJson='{"replyCode":"error","replyMsg":"'+errinsert.message+'","cmd":"faqss"}\n';
        connection.release();
        callback(200, null, resultJson);
        return;
      }
    });
  });
}

// Update status
function update_faqs_status(userdata, pool, callback) {
  var resultJson = "";
  var id = "";
  var status = "0"; //0-inactive , 1-active , 2- delete
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
    Uquery = 'UPDATE faqs SET status="' + status + '" WHERE id = ' + id + "";
    connection.query(Uquery, function (errinsert) {
      if (!errinsert) {
        resultJson =
          '{"replyCode":"success","replyMsg":"Status chenged Successfully","cmd":"faqss"}';
        connection.release();
        callback(200, null, resultJson);
        return;
      } else {
        resultJson='{"replyCode":"error","replyMsg":"'+errinsert.message+'","cmd":"faqss"}\n';
        connection.release();
        callback(200, null, resultJson);
        return;
      }
    });
  });
}

//category

/* Category List */
function category_list(userdata, pool, callback) {
  var resultJson = "";
  var Hashids = require("hashids"),
  hashids = new Hashids(secretSalt);
  var keyword = "";
  var Keyconditoin = "";
  var learning = "0";
  var start = "0";
  var limit = "";
  var limitStr='';
  if (typeof userdata.learning != "undefined" && userdata.learning != "") {
    learning = userdata.learning;
  }

  if (learning != "") {
    Keyconditoin = ' AND categories.learning = "' + learning + '"';
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
  
  if (limit != "") {
    limitStr = "LIMIT " + start + ", " + limit + "";
  }
  pool.getConnection(function (err, connection) {
    if (keyword != "") {
      Keyconditoin = ' AND categories.name LIKE  "%' + keyword + '%"';
    }
    var countquery='SELECT count(*) as count from categories WHERE categories.status !="2" '+Keyconditoin;
    connection.query(countquery, function (err, responsecount) {
      if (responsecount[0].count > 0) {
        var Catquery='SELECT categories.*  FROM categories WHERE categories.status !="2" '+Keyconditoin+' ORDER BY name ASC '+limitStr+'';
   
        console.log("Catquery", Catquery);
    
        connection.query(Catquery, function (err, res) {
          if (err) {
            resultJson='{"replyCode":"error","replyMsg":"'+err.message+'","cmd":"category_list"}\n';
            connection.release();
            callback(200, null, resultJson);
            return;
          } else {
            resultJson='{"replyCode":"success","replyMsg":"Category list", "data":'+JSON.stringify(res)+',"totalCount":'+responsecount[0].count+',"cmd":"category_list"}\n';
            console.log("res-suceess");
            connection.release();
            callback(200, null, resultJson);
            return;
          }
        });
      } else {
        resultJson =
          '{"replyCode":"success","replyMsg":"category_list","data":[], "cmd":"category_list"}\n';
        console.log(resultJson);
        connection.release();
        callback(200, null, resultJson);
        return;
      }
    });
  });
}

function category_dropdown_list(userdata, pool, callback) {
  var resultJson = "";
  var Hashids = require("hashids"),
  hashids = new Hashids(secretSalt);
  var keyword = "";
  var Keyconditoin = "";
  var learning = "0";
  if (typeof userdata.learning != "undefined" && userdata.learning != "") {
    learning = userdata.learning;
  }

  if (learning != "") {
    Keyconditoin = ' AND categories.learning = "' + learning + '"';
  }

  if (typeof userdata.keyword != "undefined" && userdata.keyword != "") {
    keyword = userdata.keyword;
  }

  pool.getConnection(function (err, connection) {
    if (keyword != "") {
      Keyconditoin = ' AND categories.name LIKE  "%' + keyword + '%"';
    }
    var Catquery='SELECT categories.*  FROM categories WHERE categories.status ="1" '+Keyconditoin+" ORDER BY name ASC";
    console.log("Catquery", Catquery);
    connection.query(Catquery, function (err, res) {
      if (err) {
        resultJson='{"replyCode":"error","replyMsg":"'+err.message+'","cmd":"category_list"}\n';
        connection.release();
        callback(200, null, resultJson);
        return;
      } else {
        resultJson='{"replyCode":"success","replyMsg":"Category list", "data":'+JSON.stringify(res)+',"cmd":"category_list"}\n';
        console.log("res-suceess");
        connection.release();
        callback(200, null, resultJson);
        return;
      }
    });
  });
}

function add_category(userdata, pool, callback) {
  var resultJson = "";
  var name = "";
  var image = "";
  var id = "";
  var learning = "0";
  if (typeof userdata.learning != "undefined" && userdata.learning != "") {
    learning = userdata.learning;
  }

  if (typeof userdata.id != "undefined" && userdata.id != "") {
    id = userdata.id;
  }
  if (typeof userdata.name != "undefined" && userdata.name != "") {
    name = userdata.name;
  }
  if (typeof userdata.image != "undefined" && userdata.image != "") {
    image = userdata.image;
  }

  /* ESTABLISH CONNECTION TO DATABASE */
  pool.getConnection(function (err, connection) {
    alias = name.toLowerCase();
    if (id != "") {
      var queryinsert='UPDATE categories SET name="'+name+'",image="'+image+'",learning="'+learning+'" where categories.id="'+id+'"';
    } else {
      var queryinsert='INSERT INTO categories SET name="'+name+'",image="'+image+'",learning="'+learning+'",created= NOW()';
    }
    console.log(queryinsert);
    connection.query(queryinsert, function (errinsert, resultinsert) {
      if (!errinsert) {
        resultJson='{"replyCode":"success","replyMsg":"Category updated successfully","cmd":"Category"}\n';
        connection.release();
        callback(200, null, resultJson);
        return;
      } else {
        resultJson='{"replyCode":"error","replyMsg":"'+errinsert.message+'","cmd":"Category"}\n';
        console.log("res-suceess");
        connection.release();
        callback(400, null, resultJson);
        return;
      }
    });
  });
}

// Update stsutus
function update_category_status(userdata, pool, callback) {
  var resultJson = "";
  var id = "";
  var status = "0"; //0-inactive , 1-active , 2- delete
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
    Uquery='UPDATE categories SET status="'+status+'" WHERE id = '+id;
    connection.query(Uquery, function (errinsert) {
      if (!errinsert) {
        resultJson='{"replyCode":"success","replyMsg":"Status chenged Successfully","cmd":"update_status_client"}';
        connection.release();
        callback(200, null, resultJson);
        return;
      } else {
        resultJson='{"replyCode":"error","replyMsg":"'+errinsert.message+'","cmd":"update_status_client"}\n';
        connection.release();
        callback(200, null, resultJson);
        return;
      }
    });
  });
}

/*category details*/
function category_details(userdata, pool, callback) {
  var resultJson = "";
  var id = "";

  if (typeof userdata.id != "undefined" && userdata.id != "") {
    id = userdata.id;
  }

  console.log("----------");
  console.log(userdata);

  pool.getConnection(function (err, connection) {
    var Catquery = 'SELECT * FROM categories WHERE id="' + id + '"';
    console.log("qq", Catquery);
    connection.query(Catquery, function (errinsert, resultinsert) {
      if (!errinsert) {
        if (resultinsert.length > 0) {
          var res = resultinsert[0];
        } else {
          var res = [];
        }
        resultJson='{"replyCode":"success","replyMsg":"category details","data":'+JSON.stringify(res)+"}\n";
        connection.release();
        callback(200, null, resultJson);
        return;
      } else {
        resultJson='{"replyCode":"error","replyMsg":"'+errinsert.message+'","cmd":"category_details"}\n';
        connection.release();
        callback(200, null, resultJson);
        return;
      }
    });
  });
}



//student testimonials

function student_testimonials_list(userdata, pool, callback) {
	var resultJson = '';
	var keyword = '';
	var Keyconditoin = ' student_testimonials.status !="2" ';
	var learning = '';
	var start = '0';
	var limit = '';
  var limitStr='';

	if (typeof userdata.keyword != 'undefined' && userdata.keyword != '') {
		keyword = userdata.keyword;
	}
	if (typeof userdata.learning != 'undefined' && userdata.learning != '') {
		learning = userdata.learning;
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
		if (keyword != '') {
			Keyconditoin += ' AND student_testimonials.student_name LIKE  "%' + keyword + '%" OR student_testimonials.parent_name LIKE  "%' + keyword + '%" OR student_testimonials.message LIKE  "%' + keyword + '%" OR student_testimonials.student_class LIKE  "%' + keyword + '%" OR student_testimonials.parent_designation LIKE  "%' + keyword + '%"';
		}
		if (learning != '') {
			Keyconditoin += ' AND student_testimonials.learning ="' + learning + '"';
		}
   
   
		var countquery = 'SELECT count(*) as count from student_testimonials WHERE ' + Keyconditoin + '';
    connection.query(countquery, function (err, responsecount) {
      if (responsecount[0].count > 0) {
          detailsquery = 'SELECT student_testimonials.* from student_testimonials where ' + Keyconditoin + ' '+limitStr+'';
		
          console.log('detailsquery', detailsquery);
          connection.query(detailsquery, function (errSelDetails, resSelDetails) {
            if (errSelDetails) {
              resultJson='{"replyCode":"error","replyMsg":"'+errSelDetails.message+'","cmd":"student_testimonials_list"}\n';
              connection.release();
              callback(200, null, resultJson);
              return;
            } else {
             resultJson='{"replyCode":"success","replyMsg":"Details found successfully .","data":'+JSON.stringify(resSelDetails)+',"totalCount":'+responsecount[0].count+',"cmd":"student_testimonials_list"}\n';
              console.log('res-suceess');
              connection.release();
              callback(200, null, resultJson);
              return;
            }
          });
        } else {
            resultJson = '{"replyCode":"success","replyMsg":"student_testimonials_list","data":[], "cmd":"student_testimonials_list"}\n';
            console.log(resultJson);
            connection.release();
            callback(200, null, resultJson);
            return;
        }
    });
	});
}

function add_student_testimonials(userdata, pool, callback) {
	var resultJson = '';
	var student_name = '';
	var image = '';
	var message = '';
	var age = '';
	var student_class = '';
	var parent_name = '';
	var parent_designation = '';
	var learning = '0';
	var id = '';

	if (typeof userdata.parent_name != 'undefined' && userdata.parent_name != '') {
		parent_name = userdata.parent_name;
	}
	if (typeof userdata.parent_designation != 'undefined' && userdata.parent_designation != '') {
		parent_designation = userdata.parent_designation;
	}
	if (typeof userdata.id != 'undefined' && userdata.id != '') {
		id = userdata.id;
	}
	if (typeof userdata.student_name != 'undefined' && userdata.student_name != '') {
		student_name = userdata.student_name;
	}

	if (typeof userdata.image != 'undefined' && userdata.image != '') {
		image = userdata.image;
	}
	if (typeof userdata.message != 'undefined' && userdata.message != '') {
		message = userdata.message;
	}
	if (typeof userdata.age != 'undefined' && userdata.age != '') {
		age = userdata.age;
	}
	if (typeof userdata.student_class != 'undefined' && userdata.student_class != '') {
		student_class = userdata.student_class;
	}
	if (typeof userdata.learning != 'undefined' && userdata.learning != '') {
		learning = userdata.learning;
	}

	/* ESTABLISH CONNECTION TO DATABASE */
	pool.getConnection(function (err, connection) {
		if (id != '') {
			var queryinsert = 'UPDATE student_testimonials SET student_name="' + student_name + '",image="' + image + '",message="' + message + '",age="' + age + '",student_class="' + student_class + '",learning="' + learning + '",parent_name="' + parent_name + '",parent_designation="' + parent_designation + '" where student_testimonials.id="' + id + '"';
		} else {
			var queryinsert = 'INSERT INTO student_testimonials SET student_name="' + student_name + '",image="' + image + '",message="' + message + '",age="' + age + '",student_class="' + student_class + '",learning="' + learning + '",parent_name="' + parent_name + '",parent_designation="' + parent_designation + '",created= NOW()';
		}
		console.log(queryinsert);
		connection.query(queryinsert, function (errinsert, resultinsert) {
			if (!errinsert) {
				resultJson =
					'{"replyCode":"success","replyMsg":"student_testimonials updated successfully","cmd":"student_testimonials"}\n';
				connection.release();
				callback(200, null, resultJson);
				return;
			} else {
				resultJson =
					'{"replyCode":"error","replyMsg":"' + errinsert.message + '","cmd":"student_testimonials"}\n';
				console.log('res-suceess');
				connection.release();
				callback(400, null, resultJson);
				return;
			}
		});
	});
}

/*student_testimonials details*/
function student_testimonials_details(userdata, pool, callback) {
	var resultJson = '';
	var id = '';

	if (typeof userdata.id != 'undefined' && userdata.id != '') {
		id = userdata.id;
	}

	console.log('----------');
	console.log(userdata);

	pool.getConnection(function (err, connection) {
		var Catquery = 'SELECT * FROM student_testimonials WHERE id="' + id + '"';
		console.log('qq', Catquery);
		connection.query(Catquery, function (errinsert, resultinsert) {
			if (!errinsert) {
				resultJson='{"replyCode":"success","replyMsg":"student_testimonialss details","data":'+JSON.stringify(resultinsert)+"}\n";
				connection.release();
				callback(200, null, resultJson);
				return;
			} else {
				resultJson='{"replyCode":"error","replyMsg":"'+errinsert.message+'","cmd":"student_testimonialss"}\n';
				connection.release();
				callback(200, null, resultJson);
				return;
			}
		});
	});
}

// Update status
function update_student_testimonials_status(userdata, pool, callback) {
	var resultJson = '';
	var id = '';
	var status = '0'; //0-inactive , 1-active , 2- delete
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
		Uquery = 'UPDATE student_testimonials SET status="' + status + '" WHERE id = ' + id + '';
		connection.query(Uquery, function (errinsert) {
			if (!errinsert) {
				resultJson ='{"replyCode":"success","replyMsg":"Status chenged Successfully","cmd":"student_testimonialss"}';
				connection.release();
				callback(200, null, resultJson);
				return;
			} else {
				resultJson ='{"replyCode":"error","replyMsg":"' + errinsert.message + '","cmd":"student_testimonialss"}\n';
				connection.release();
				callback(200, null, resultJson);
				return;
			}
		});
	});
}

//Courses

//courses

function courses_list(userdata, pool, callback) {
	var resultJson = '';
	var learning = '';
	var Keyconditoin = '';
	var keyword = '';
	var created_by = '';
	var category_id= '';
	var age_group_id = '';
	var start = '0';
	var limit = '';

	if (typeof userdata.keyword != 'undefined' && userdata.keyword != '') {
		keyword = userdata.keyword;
	}
	if (typeof userdata.category_id != 'undefined' && userdata.category_id != '') {
		category_id = userdata.category_id;
	}
	if (typeof userdata.age_group_id != 'undefined' && userdata.age_group_id != '') {
		age_group_id = userdata.age_group_id;
	}

	if (typeof userdata.learning != 'undefined' && userdata.learning != '') {
		learning = userdata.learning;
	}
	if (typeof userdata.start != 'undefined' && userdata.start != '') {
		start = userdata.start;
	}
	if (typeof userdata.limit != 'undefined' && userdata.limit != '') {
		limit = userdata.limit;
	}
	if (typeof userdata.created_by != 'undefined' && userdata.created_by != '') {
		created_by = userdata.created_by;
	}


	pool.getConnection(function (err, connection) {
		if (keyword != '') {
			Keyconditoin += ' AND courses.course_name LIKE  "%' + keyword + '%"';
		}
		if (age_group_id != '') {
			Keyconditoin += ' AND courses.age_group_id ="' + age_group_id + '"';
		}
		if (category_id != '') {
			Keyconditoin += ' AND courses.category_id ="' + category_id + '"';
		}
		if (created_by != '') {
			Keyconditoin += ' AND courses.created_by ="' + created_by + '"';
		}

		if (limit != '') {
			detailsquery =
				'SELECT courses.*,rec_courses.course_name as rec_course_name,age_group.title as age_group_title from courses as courses LEFT JOIN age_group as age_group ON age_group.id = courses.age_group_id LEFT JOIN courses as rec_courses ON rec_courses.id = courses.recommended_course_id where courses.status !="2" ' +
				Keyconditoin +
				' LIMIT ' + start + ', ' + limit + '';
		} else {
			detailsquery =
				'SELECT courses.*,rec_courses.course_name as rec_course_name,age_group.title as age_group_title from courses as courses LEFT JOIN age_group as age_group ON age_group.id = courses.age_group_id LEFT JOIN courses as rec_courses ON rec_courses.id = courses.recommended_course_id where courses.status !="2" ' +
				Keyconditoin +
				'';
		}
		var countquery = 'SELECT count(*) as count from courses WHERE courses.status !="2" ' +
			Keyconditoin +
			'';


		console.log('detailsquery', detailsquery);

		connection.query(countquery, function (err, responsecount) {
			if (responsecount[0].count > 0) {
				connection.query(detailsquery, function (errSelDetails, resSelDetails) {
					if (errSelDetails) {
						resultJson = '{"replyCode":"error","replyMsg":"' + errSelDetails.message + '","cmd":"courses_list"}\n';
						connection.release();
						callback(200, null, resultJson);
						return;
					} else {
						resultJson =
							'{"replyCode":"success","replyMsg":"Details found successfully .","data":' +
							JSON.stringify(resSelDetails) +
							',"totalCount":' + responsecount[0].count + ',"cmd":"courses_list"}\n';
						console.log('res-suceess');
						connection.release();
						callback(200, null, resultJson);
						return;
					}
				});
			} else {
				resultJson = '{"replyCode":"success","replyMsg":"courses_list","data":[], "cmd":"courses_list"}\n';
				console.log(resultJson);
				connection.release();
				callback(200, null, resultJson);
				return;
			}
		});


	});
}

function courses_dropdown_list(userdata, pool, callback) {
	var resultJson = '';
	var learning = '0';
	var keyword = '';
	var Keyconditoin = '';
	if (typeof userdata.keyword != 'undefined' && userdata.keyword != '') {
		keyword = userdata.keyword;
	}
	if (typeof userdata.learning != 'undefined' && userdata.learning != '') {
		learning = userdata.learning;
	}
	pool.getConnection(function (err, connection) {
		if (keyword != '') {
			Keyconditoin = ' AND courses.course_name LIKE  "%' + keyword + '%"';
		}
		if (learning != '') {
			Keyconditoin = ' AND courses.learning = "' + learning + '"';
		}

		detailsquery = 'SELECT courses.* from courses where courses.status ="1" ' + Keyconditoin + '';
		console.log('detailsquery', detailsquery);
		connection.query(detailsquery, function (errSelDetails, resSelDetails) {
			if (errSelDetails) {
				resultJson = '{"replyCode":"error","replyMsg":"' + errSelDetails.message + '","cmd":"courses_list"}\n';
				connection.release();
				callback(200, null, resultJson);
				return;
			} else {
				resultJson =
					'{"replyCode":"success","replyMsg":"Details found successfully .","data":' +
					JSON.stringify(resSelDetails) +
					',"cmd":"courses_list"}\n';
				//console.log('res-suceess');
				connection.release();
				callback(200, null, resultJson);
				return;
			}
		});
	});
}

function add_courses(userdata, pool, callback) {
	var resultJson = '';
	var course_name = '';
	var description = '';
	var image = '';
	var course_type = ''; //1-live,2-self learn
	var allow_random_view = '0'; //0-no,1-yes
	var created_by = '';
	var recommended_course_id = '';
	var id = '';
	var age_group_id = '';
	var category_id = '';

	var dummy_rating = '0';
	var sub_title = '';
	var course_hours = '0';
	var lectures = '0';
	var by_teacher_name = '';
	var learn_video = '';
	var video_url = '';

	var amount = '';
	var requirement_description = '';

	var curriculum = '';
	var hands_on_activities = '';
	var tag = '';
	var price_per_classes = '';
	var fake_price = '';
	var discount = '';
	var no_of_classes = '';
	var featured = '0';
	var priority = '0';
	var learning = '0';
	var course_term1 = '';
	var course_term2 = '';
	var course_term3 = '';
	var course_detail = '';

	var product_hsn = '';
	var product_cost = '';
	var product_gst = '';
	var service_hsn = '';
	var service_cost = '';
	var service_gst = '';
	var referrer = '';
	var referee = '';
	var bonus = '';
	var bonus_at = '';
	var value_type = '';
	var terms = '';
	var assessment='';
	var robotics_type='';
	var curriculum_doc='';

	if (typeof userdata.terms != 'undefined' && userdata.terms != '') {
		//terms = userdata.terms;
		terms = userdata.terms.replace(/"/g, "'");
	}
	if (typeof userdata.referrer != 'undefined' && userdata.referrer != '') {
		referrer = userdata.referrer;
	}
	if (typeof userdata.referee != 'undefined' && userdata.referee != '') {
		referee = userdata.referee;
	}
	if (typeof userdata.bonus != 'undefined' && userdata.bonus != '') {
		bonus = userdata.bonus;
	}
	if (typeof userdata.bonus_at != 'undefined' && userdata.bonus_at != '') {
		bonus_at = userdata.bonus_at;
	}
	if (typeof userdata.value_type != 'undefined' && userdata.value_type != '') {
		value_type = userdata.value_type;
	}
	if (typeof userdata.dummy_rating != 'undefined' && userdata.dummy_rating != '') {
		dummy_rating = userdata.dummy_rating;
	}
	if (typeof userdata.product_hsn != 'undefined' && userdata.product_hsn != '') {
		product_hsn = userdata.product_hsn;
	}
	if (typeof userdata.product_cost != 'undefined' && userdata.product_cost != '') {
		product_cost = userdata.product_cost;
	}
	if (typeof userdata.product_gst != 'undefined' && userdata.product_gst != '') {
		product_gst = userdata.product_gst;
	}
	if (typeof userdata.service_hsn != 'undefined' && userdata.service_hsn != '') {
		service_hsn = userdata.service_hsn;
	}
	if (typeof userdata.service_cost != 'undefined' && userdata.service_cost != '') {
		service_cost = userdata.service_cost;
	}
	if (typeof userdata.service_gst != 'undefined' && userdata.service_gst != '') {
		service_gst = userdata.service_gst;
	}


	if (typeof userdata.course_term1 != 'undefined' && userdata.course_term1 != '') {
		course_term1 = userdata.course_term1;
	}
	if (typeof userdata.course_term2 != 'undefined' && userdata.course_term2 != '') {
		course_term2 = userdata.course_term2;
	}
	if (typeof userdata.course_term3 != 'undefined' && userdata.course_term3 != '') {
		course_term3 = userdata.course_term3;
	}
	if (typeof userdata.sub_title != 'undefined' && userdata.sub_title != '') {
		sub_title = userdata.sub_title;
	}
	if (typeof userdata.course_hours != 'undefined' && userdata.course_hours != '') {
		course_hours = userdata.course_hours;
	}
	if (typeof userdata.lectures != 'undefined' && userdata.lectures != '') {
		lectures = userdata.lectures;
	}
	if (typeof userdata.by_teacher_name != 'undefined' && userdata.by_teacher_name != '') {
		by_teacher_name = userdata.by_teacher_name;
	}
	if (typeof userdata.id != 'undefined' && userdata.id != '') {
		id = userdata.id;
	}

	if (typeof userdata.age_group_id != 'undefined' && userdata.age_group_id != '') {
		age_group_id = userdata.age_group_id;
	}

	if (typeof userdata.course_name != 'undefined' && userdata.course_name != '') {
		course_name = userdata.course_name;
	}

	if (typeof userdata.description != 'undefined' && userdata.description != '') {
		description = userdata.description.replace(/"/g, "'");
	}
	if (typeof userdata.course_detail != 'undefined' && userdata.course_detail != '') {
		course_detail = userdata.course_detail.replace(/"/g, "'");
	}
	if (typeof userdata.course_type != 'undefined' && userdata.course_type != '') {
		course_type = userdata.course_type;
	}
	if (typeof userdata.created_by != 'undefined' && userdata.created_by != '') {
		created_by = userdata.created_by;
	}
	if (typeof userdata.image != 'undefined' && userdata.image != '') {
		image = userdata.image;
	}
	if (typeof userdata.allow_random_view != 'undefined' && userdata.allow_random_view != '') {
		allow_random_view = userdata.allow_random_view;
	}
	if (typeof userdata.recommended_course_id != 'undefined' && userdata.recommended_course_id != '') {
		recommended_course_id = userdata.recommended_course_id;
	}
	if (typeof userdata.learn_video != 'undefined' && userdata.learn_video != '') {
		learn_video = userdata.learn_video;
	}
	if (typeof userdata.video_url != 'undefined' && userdata.video_url != '') {
		video_url = userdata.video_url;
	}

	if (typeof userdata.requirement_description != 'undefined' && userdata.requirement_description != '') {
		requirement_description = userdata.requirement_description;
	}

	if (typeof userdata.amount != 'undefined' && userdata.amount != '') {
		amount = userdata.amount;
	}
	if (typeof userdata.curriculum != 'undefined' && userdata.curriculum != '') {
		//curriculum = userdata.curriculum;
		curriculum = userdata.curriculum.replace(/"/g, "'");
	}
	if (typeof userdata.hands_on_activities != 'undefined' && userdata.hands_on_activities != '') {
		//hands_on_activities = userdata.hands_on_activities;
    hands_on_activities = userdata.hands_on_activities.replace(/"/g, "'");
	}
	if (typeof userdata.tag != 'undefined' && userdata.tag != '') {
		tag = userdata.tag;
	}
	if (typeof userdata.price_per_classes != 'undefined' && userdata.price_per_classes != '') {
		price_per_classes = userdata.price_per_classes;
	}
	if (typeof userdata.fake_price != 'undefined' && userdata.fake_price != '') {
		fake_price = userdata.fake_price;
	}
	if (typeof userdata.discount != 'undefined' && userdata.discount != '') {
		discount = userdata.discount;
	}

	if (typeof userdata.no_of_classes != 'undefined' && userdata.no_of_classes != '') {
		no_of_classes = userdata.no_of_classes;
	}
	if (typeof userdata.featured != 'undefined' && userdata.featured != '') {
		featured = userdata.featured;
	}
	if (typeof userdata.priority != 'undefined' && userdata.priority != '') {
		priority = userdata.priority;
	}
	if (typeof userdata.learning != 'undefined' && userdata.learning != '') {
		learning = userdata.learning;
	}
	if (typeof userdata.assessment != 'undefined' && userdata.assessment != '') {
		assessment = userdata.assessment;
	}
	if (typeof userdata.robotics_type != 'undefined' && userdata.robotics_type != '') {
		robotics_type = userdata.robotics_type;
	}
	
	if (typeof userdata.curriculum_doc != 'undefined' && userdata.curriculum_doc != '') {
		curriculum_doc = userdata.curriculum_doc;
	}
	if (typeof userdata.category_id != 'undefined' && userdata.category_id != '') {
		category_id = userdata.category_id;
	}

	/* ESTABLISH CONNECTION TO DATABASE */
	pool.getConnection(function (err, connection) {
		if (id != '') {
			var queryinsert = 'UPDATE courses SET course_name="' + course_name + '",description="' + description + '",image="",course_detail="' + course_detail + '",image="' + image + '",course_type="' + course_type + '",allow_random_view="' + allow_random_view + '",created_by="' + created_by + '",recommended_course_id="' + recommended_course_id + '",age_group_id="' + age_group_id + '",dummy_rating="' + dummy_rating + '",sub_title="' + sub_title + '",course_hours="' + course_hours + '",lectures="' + lectures + '",by_teacher_name="' + by_teacher_name + '",learn_video="' + learn_video + '",video_url="' + video_url + '",requirement_description="' + requirement_description + '",amount="' + amount + '",curriculum="' + curriculum + '",hands_on_activities="' + hands_on_activities + '",tag="' + tag + '",price_per_classes="' + price_per_classes + '",fake_price="' + fake_price + '",discount="' + discount + '",no_of_classes="' + no_of_classes + '",featured="' + featured + '",priority="' + priority + '",course_term1="' + course_term1 + '",course_term2="' + course_term2 + '",course_term3="' + course_term3 + '",learning="' + learning + '",product_hsn="' + product_hsn + '",service_hsn="' + service_hsn + '",product_cost="' + product_cost + '",service_cost="' + service_cost + '",product_gst="' + product_gst + '",service_gst="' + service_gst + '",referrer="' + referrer + '",referee="' + referee + '",bonus="' + bonus + '",bonus_at="' + bonus_at + '",value_type="' + value_type + '",terms="' + terms + '",robotics_type="'+robotics_type+'",curriculum_doc="'+curriculum_doc+'",category_id="'+category_id+'" where courses.id="' + id + '"';
		} else {
			var queryinsert = 'INSERT INTO courses SET course_name="' + course_name + '",description="' + description + '",course_detail="' + course_detail + '",image="' + image + '",course_type="' + course_type + '",allow_random_view="' + allow_random_view + '",created_by="' + created_by + '",recommended_course_id="' + recommended_course_id + '",age_group_id="' + age_group_id + '",dummy_rating="' + dummy_rating + '",sub_title="' + sub_title + '",course_hours="' + course_hours + '",lectures="' + lectures + '",by_teacher_name="' + by_teacher_name + '",learn_video="' + learn_video + '",video_url="' + video_url + '",requirement_description="' + requirement_description + '",amount="' + amount + '",curriculum="' + curriculum + '",hands_on_activities="' + hands_on_activities + '",tag="' + tag + '",price_per_classes="' + price_per_classes + '",fake_price="' + fake_price + '",discount="' + discount + '",no_of_classes="' + no_of_classes + '",featured="' + featured + '",priority="' + priority + '",course_term1="' + course_term1 + '",course_term2="' + course_term2 + '",course_term3="' + course_term3 + '",learning="' + learning + '",product_hsn="' + product_hsn + '",service_hsn="' + service_hsn + '",product_cost="' + product_cost + '",service_cost="' + service_cost + '",product_gst="' + product_gst + '",service_gst="' + service_gst + '",referrer="' + referrer + '",referee="' + referee + '",bonus="' + bonus + '",bonus_at="' + bonus_at + '",value_type="' + value_type + '",terms="' + terms + '",robotics_type="'+robotics_type+'",curriculum_doc="'+curriculum_doc+'",category_id="'+category_id+'",created= NOW()';
		}
		console.log('queryinsert:::::-----------------',queryinsert);
		connection.query(queryinsert, function (errinsert, resultinsert) {
			console.log('resultinsert::::',resultinsert);
			if (!errinsert) {
				if(assessment !=""){
					console.log('InsertRes',resultinsert)
					if(id !=''){
						var course_id = id;
					}else{
						var course_id = resultinsert.insertId;
					}
					DeleteQuery='DELETE FROM courses_assessment WHERE course_id="'+course_id+'"';
					console.log('DeleteQuery',DeleteQuery);
					connection.query(DeleteQuery);

					async.eachSeries(assessment, function(rec2, loop2){
						console.log("in user result array");
						
						console.log('assesment-id',rec2);
						Uquery = 'INSERT INTO courses_assessment SET course_id="'+course_id+'",assessment_id="'+rec2+'"';
						
						console.log('Uquery',Uquery)
						connection.query(Uquery, function(errPre, Predetails){
							if(errPre){
								console.log('errPre.message',errPre.message)
								loop2();
							}else{
								loop2();
							}
						})
						
					},function(errInsert){
						if(errInsert){
							resultJson = '{"replyCode":"error","replyMsg":"'+errInsert.message+'", "cmd":"send"}';
							console.log(resultJson);
							connection.release();
							callback(200, null, resultJson);
							return;
						}else{
							
							resultJson = '{"replyCode":"success","replyMsg":"courses updated successfully", "cmd":"send"}';
							console.log(resultJson);
							connection.release();
							callback(200, null, resultJson);
							return;
						}
					})
					
				}else{
					resultJson = '{"replyCode":"success","replyMsg":"courses updated successfully","cmd":"courses"}\n';
					connection.release();
					callback(200, null, resultJson);
					return;

				}
			} else {
				resultJson = '{"replyCode":"error","replyMsg":"' + errinsert.message + '","cmd":"courses"}\n';
				console.log('res-suceess');
				connection.release();
				callback(400, null, resultJson);
				return;
			}
		});
		
	});
}

/*courses details*/
function courses_details(userdata, pool, callback) {
	var resultJson = '';
	var id = '';

	if (typeof userdata.id != 'undefined' && userdata.id != '') {
		id = userdata.id;
	}

	console.log('----------');
	console.log(userdata);

	pool.getConnection(function (err, connection) {
		var Catquery = 'SELECT * FROM courses WHERE id="' + id + '"';
		console.log('qq', Catquery);
		connection.query(Catquery, function (errinsert, resultinsert) {
			if (!errinsert) {
        resultJson =
        '{"replyCode":"success","replyMsg":"coursess details","data":' +
        JSON.stringify(resultinsert) +
        '}\n';
        connection.release();
        callback(200, null, resultJson);
        return;
				
			} else {
				resultJson = '{"replyCode":"error","replyMsg":"' + errinsert.message + '","cmd":"coursess"}\n';
				connection.release();
				callback(200, null, resultJson);
				return;
			}
		});
	});
}

// Update status
function update_courses_status(userdata, pool, callback) {
	var resultJson = '';
	var id = '';
	var status = '0'; //0-inactive , 1-active , 2- delete
	var Uquery = '';

	if (typeof userdata.id != 'undefined' && userdata.id != '') {
		id = userdata.id;
	}

	if (typeof userdata.status != 'undefined' && userdata.status != '') {
		status = userdata.status;
	}

	//console.log('----------');
	//console.log(userdata);

	pool.getConnection(function (err, connection) {
		Uquery = 'UPDATE courses SET status="' + status + '" WHERE id = ' + id + '';
		connection.query(Uquery, function (errinsert) {
			if (!errinsert) {
				resultJson = '{"replyCode":"success","replyMsg":"Status chenged Successfully","cmd":"coursess"}';
				connection.release();
				callback(200, null, resultJson);
				return;
			} else {
				resultJson = '{"replyCode":"error","replyMsg":"' + errinsert.message + '","cmd":"coursess"}\n';
				connection.release();
				callback(200, null, resultJson);
				return;
			}
		});
	});
}

function view_course_info(userdata, pool, callback) {
	var resultJson = '';
	var id = '';

	if (typeof userdata.id != 'undefined' && userdata.id != '') {
		id = userdata.id;
	}

	console.log('----------');
	console.log(userdata);

	pool.getConnection(function (err, connection) {
		var Catquery = 'SELECT * FROM courses WHERE id="' + id + '"';
		console.log('qq', Catquery);
		connection.query(Catquery, function (errinsert, resPro) {
			if (!errinsert) {
				if (resPro.length > 0) {
					var i = 0;
					async.eachSeries(
						resPro,
						function (rec2, loop2) {
							var course_id = rec2.id;
							console.log('course_id', course_id);
					  	proiMGquery='SELECT course_chapters.* from course_chapters where course_chapters.course_id="'+course_id+'" AND course_chapters.status="1"';
							console.log('proiMGquery', proiMGquery);
							connection.query(proiMGquery, function (errSelpiMG, respROiMG) {
								if (errSelpiMG) {
									console.log('errSelpiMG', errSelpiMG);

									loop2();
								} else {
									resPro[i].chapters = respROiMG;
									loop2();
								}
								i = i + 1;
							});
						},
						function (errSelPro) {
							if (errSelPro) {
								console.log('errSelPro', errSelPro);
								resultJson =
									'{"replyCode":"error","replyMsg":"' +
									errSelPro.message +
									'","cmd":"view_classes_info"}\n';
								connection.release();
								callback(200, null, resultJson);
								return;
							} else {
								resultJson =
									'{"replyCode":"success","replyMsg":"Details found successfully .","data":' +
									JSON.stringify(resPro) +
									',"cmd":"view_classes_info"}\n';
								console.log('res-suceess');
								connection.release();
								callback(200, null, resultJson);
								return;
							}
						}
					);
				} else {
					resultJson =
						'{"replyCode":"success","replyMsg":"No Record found.","data":[], "cmd":"view_classes_info"}\n';
					console.log('res-suceess');
					connection.release();
					callback(200, null, resultJson);
					return;
				}
			} else {
				resultJson = '{"replyCode":"error","replyMsg":"' + errinsert.message + '","cmd":"view_classes_info"}\n';
				connection.release();
				callback(200, null, resultJson);
				return;
			}
		});
	});
}


/* Role access List */
function role_access_list(userdata, pool, callback) {
	var resultJson = '';
	var strJson = '';
	var keyword = '';
	var Keyconditoin = '';
	var result = [];
	if (typeof userdata.keyword != 'undefined' && userdata.keyword != '') {
		keyword = userdata.keyword;
	}

	pool.getConnection(function (err, connection) {
		if (keyword != '') {
			Keyconditoin = ' AND role_access.role_title LIKE  "%' + keyword + '%"';
		}
		var Catquery = 'SELECT * FROM role_access WHERE status !="2"  ' + Keyconditoin + ' ORDER BY role_title ASC';

		connection.query(Catquery, function (err, result) {
			if (err) {
				resultJson = '{"replyCode":"error","replyMsg":"' + err.message + '","cmd":"role_access_list"}\n';
				connection.release();
				callback(200, null, resultJson);
				return;
			} else {
				resultJson =
					'{"replyCode":"success","replyMsg":"Role access list","data":' +
					JSON.stringify(result) +
					', "cmd":"role_access_list"}\n';
				console.log('res-suceess');
				connection.release();
				callback(200, null, resultJson);
				return;
			}
		});
	});
}

function add_role_access(userdata, pool, callback) {
	var resultJson = '';
	var strJson = '';

	var role_title = '';

	if (typeof userdata.role_title != 'undefined' && userdata.role_title != '') {
		role_title = userdata.role_title;
	}

	/* ESTABLISH CONNECTION TO DATABASE */
	pool.getConnection(function (err, connection) {
		var queryinsert = 'INSERT INTO role_access SET role_title="' + role_title + '",status="1",created= NOW()';

		console.log(queryinsert);
		connection.query(queryinsert, function (errinsert, resultinsert) {
			if (!errinsert) {
				resultJson = '{"replyCode":"success","replyMsg":"Role Access added successfully"}\n';
				connection.release();
				callback(200, null, resultJson);
				return;
			} else {
				resultJson = '{"replyCode":"error","replyMsg":"' + errinsert.message + '","cmd":"add_role_access"}\n';
				console.log('res-suceess');
				connection.release();
				callback(400, null, resultJson);
				return;
			}
		});
	});
}

function update_role_access(userdata, pool, callback) {
	var resultJson = '';
	var strJson = '';

	var role_title = '';

	if (typeof userdata.id != 'undefined' && userdata.id != '') {
		id = userdata.id;
	}
	if (typeof userdata.role_title != 'undefined' && userdata.role_title != '') {
		role_title = userdata.role_title;
	}

	/* ESTABLISH CONNECTION TO DATABASE */
	pool.getConnection(function (err, connection) {
		var queryinsert = 'UPDATE role_access SET role_title="' + role_title + '" WHERE id = "' + id + '"';
		console.log(queryinsert);
		connection.query(queryinsert, function (errinsert, resultinsert) {
			if (!errinsert) {
				resultJson =
					'{"replyCode":"success","replyMsg":"Role Access updated successfully","cmd":"update_role_access"}\n';
				connection.release();
				callback(200, null, resultJson);
				return;
			} else {
				resultJson =
					'{"replyCode":"error","replyMsg":"' + errinsert.message + '","cmd":"update_role_access"}\n';
				console.log('res-suceess');
				connection.release();
				callback(400, null, resultJson);
				return;
			}
		});
	});
}

//update_role_access_status
function update_role_access_status(userdata, pool, callback) {
	var resultJson = '';
	var strJson = '';

	var Cquery = '';
	var id = '';
	var status = ''; //0-inactive,1-active,2-delete

	if (typeof userdata.id != 'undefined' && userdata.id != '') {
		id = userdata.id;
	}
	if (typeof userdata.status != 'undefined' && userdata.status != '') {
		status = userdata.status;
	}
	pool.getConnection(function (err, connection) {
		squery = 'UPDATE role_access SET status = "' + status + '" WHERE id = "' + id + '"';
		connection.query(squery, function (errselect, resultselect) {
			if (!errselect) {
				console.log(resultselect);
				resultJson =
					'{"replyCode":"success","replyMsg":"Record status updated successfully","cmd":"update_role_access_status"}\n';
				connection.release();
				callback(200, null, resultJson);
				return;
			} else {
				resultJson =
					'{"replyCode":"error","replyMsg":"' + errselect.message + '","cmd":"update_role_access_status"}\n';
				connection.release();
				callback(200, null, resultJson);
				return;
			}
		});
	});
}

function role_access_list(userdata, pool, callback) {
	var resultJson = '';
	var strJson = '';
	var keyword = '';
	var Keyconditoin = '';
	var result = [];
	if (typeof userdata.keyword != 'undefined' && userdata.keyword != '') {
		keyword = userdata.keyword;
	}

	pool.getConnection(function (err, connection) {
		if (keyword != '') {
			Keyconditoin = ' AND role_access.role_title LIKE  "%' + keyword + '%"';
		}
		var Catquery = 'SELECT * FROM role_access WHERE status !="2"  ' + Keyconditoin + ' ORDER BY role_title ASC';

		connection.query(Catquery, function (err, result) {
			if (err) {
				resultJson = '{"replyCode":"error","replyMsg":"' + err.message + '","cmd":"role_access_list"}\n';
				connection.release();
				callback(200, null, resultJson);
				return;
			} else {
				resultJson =
					'{"replyCode":"success","replyMsg":"Role access list","data":' +
					JSON.stringify(result) +
					', "cmd":"role_access_list"}\n';
				console.log('res-suceess');
				connection.release();
				callback(200, null, resultJson);
				return;
			}
		});
	});
}

/* Role details */
function role_details(userdata, pool, callback) {
	var resultJson = '';
	var Cquery = '';
	var id = '';

	if (typeof userdata.id != 'undefined' && userdata.id != '') {
		id = userdata.id;
	}

	pool.getConnection(function (err, connection) {
		Cquery = 'SELECT role_access.* FROM role_access WHERE role_access.id = ' + id + '';

		console.log(Cquery);
		connection.query(Cquery, function (err, ordData) {
			if (err) {
				resultJson = '{"replyCode":"error","replyMsg":"' + err.message + '","cmd":"role_details"}\n';
				connection.release();
				callback(200, null, resultJson);
				return;
			} else {
				resultJson =
					'{"replyCode":"success","replyMsg":"Role Details","data":' +
					JSON.stringify(ordData[0]) +
					',"cmd":"role_details"}\n';
				console.log('res-suceess');
				connection.release();
				callback(200, null, resultJson);
				return;
			}
		});
	});
}



// sub admin Module
// add subadmin
function add_subadmin(userdata, pool, callback) {
	var resultJson = '';
	var strJson = '';
	var sha1 = require('sha1');
	var Hashids = require('hashids'),
		hashids = new Hashids(secretSalt);

	var name = '';
	var email = '';
	var password = '';
	var role_id = '4';
	var role_access_id = '';
	var phone = '';

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

	if (typeof userdata.phone != 'undefined' && userdata.phone != '') {
		phone = userdata.phone;
	}
	if (typeof userdata.role_access_id != 'undefined' && userdata.role_access_id != '') {
		role_access_id = userdata.role_access_id;
	}

	/* ESTABLISH CONNECTION TO DATABASE */
	pool.getConnection(function (err, connection) {
		var hash_password = sha1(secretSalt + userdata.password);

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
					var queryinsert='INSERT INTO users SET email="'+email+'",name = "'+name+'", password = "'+hash_password+'",phone = "'+phone+'",role_id="4",role_access_id="'+role_access_id+'",status="1",verified="1",created= NOW()';

					console.log(queryinsert);
					connection.query(queryinsert, function (errinsert, resultinsert) {
						if (!errinsert) {
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

function update_subadmin(userdata, pool, callback) {
	var sha1 = require('sha1');
	var resultJson = '';
	var strJson = '';
	var name = '';
	var email = '';
	var role_id = '4';
	var role_access_id = '';
	var phone = '';
	var password = '';
	var id = '';

	var ConQuery = '';

	if (typeof userdata.email != 'undefined' && userdata.email != '') {
		email = userdata.email;
	}
	if (typeof userdata.name != 'undefined' && userdata.name != '') {
		name = userdata.name;
	}

	if (typeof userdata.phone != 'undefined' && userdata.phone != '') {
		phone = userdata.phone;
	}
	if (typeof userdata.role_access_id != 'undefined' && userdata.role_access_id != '') {
		role_access_id = userdata.role_access_id;
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
				if (password != '') {
					var hash_password=sha1(secretSalt+password);Uquery='UPDATE users SET email="'+email+'",name = "'+name+'",phone = "'+phone+'",role_access_id="'+role_access_id+'",password="'+hash_password+'" WHERE id = '+id;
				} else {
					Uquery='UPDATE users SET email="'+email+'",name = "'+name+'",phone = "'+phone+'",role_access_id="'+role_access_id+'" WHERE id = '+id;
				}

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

//update_subadmin_status
function update_subadmin_status(userdata, pool, callback) {
	var resultJson = '';
	var strJson = '';

	var Cquery = '';
	var id = '';
	var status = ''; //0-inactive,1-active,2-delete

	if (typeof userdata.id != 'undefined' && userdata.id != '') {
		id = userdata.id;
	}

	if (typeof userdata.status != 'undefined' && userdata.status != '') {
		status = userdata.status;
	}
	pool.getConnection(function (err, connection) {
		squery = 'UPDATE users SET status = "' + status + '" WHERE id = "' + id + '"';
		connection.query(squery, function (errselect, resultselect) {
			if (!errselect) {
				console.log(resultselect);
				resultJson =
					'{"replyCode":"success","replyMsg":"Record status updated successfully","cmd":"update_subadmin_status"}\n';
				connection.release();
				callback(200, null, resultJson);
				return;
			} else {
				resultJson =
					'{"replyCode":"error","replyMsg":"' + errselect.message + '","cmd":"update_subadmin_status"}\n';
				connection.release();
				callback(200, null, resultJson);
				return;
			}
		});
	});
}

/* Sub admin List */
function sub_admin_list(userdata, pool, callback) {
	var resultJson = '';
	var strJson = '';
	var keyword = '';
	var Keyconditoin = '';
	var result = [];

	
	if (typeof userdata.keyword != 'undefined' && userdata.keyword != '') {
		keyword = userdata.keyword;
	}

	pool.getConnection(function (err, connection) {
		if (keyword != '') {
			Keyconditoin = ' AND users.name LIKE  "%' + keyword + '%"';
		}
		var Catquery =
			'SELECT users.*,role_access.role_title FROM users as users LEFT JOIN role_access as role_access ON role_access.id = users.role_access_id WHERE users.status !="2" AND users.role_id="4" ' +
			Keyconditoin +
			' ORDER BY users.name ASC';

		connection.query(Catquery, function (err, result) {
			if (err) {
				resultJson = '{"replyCode":"error","replyMsg":"' + err.message + '","cmd":"sub_admin_list"}\n';
				connection.release();
				callback(200, null, resultJson);
				return;
			} else {
				resultJson =
					'{"replyCode":"success","replyMsg":"Sub admin list","data":' +
					JSON.stringify(result) +
					', "cmd":"sub_admin_list"}\n';
				console.log('res-suceess');
				connection.release();
				callback(200, null, resultJson);
				return;
			}
		});
	});
}

/* Sub admin details */
function subadmin_details(userdata, pool, callback) {
	var resultJson = '';
	var Cquery = '';
	var id = '';

	if (typeof userdata.id != 'undefined' && userdata.id != '') {
		id = userdata.id;
	}

	pool.getConnection(function (err, connection) {
		Cquery = 'SELECT users.* FROM users WHERE users.id = ' + id + '';

		console.log(Cquery);
		connection.query(Cquery, function (err, ordData) {
			if (err) {
				resultJson = '{"replyCode":"error","replyMsg":"' + err.message + '","cmd":"subadmin_details"}\n';
				connection.release();
				callback(200, null, resultJson);
				return;
			} else {
				resultJson =
					'{"replyCode":"success","replyMsg":"Sub admin Details","data":' +
					JSON.stringify(ordData[0]) +
					',"cmd":"subadmin_details"}\n';
				console.log('res-suceess');
				connection.release();
				callback(200, null, resultJson);
				return;
			}
		});
	});
}



function parent_child_list(id, pool, callback) {
	var resultJson = '';
	var Cquery = '';
	// var id = '';

	// if (typeof id.id != 'undefined' && id.id != '') {
	// 	id = id.id;
	// }
console.log('fffffffffffffffffff',id.id,'ddd' );
	pool.getConnection(function (err, connection) {
	
		Cquery = 'SELECT users.* FROM users WHERE users.parent_id ='+id.id+'';
	
		
		console.log(Cquery);
		connection.query(Cquery, function (err, ordData) {
			if (err) {
				resultJson = '{"replyCode":"error","replyMsg":"' + err.message + '","cmd":"parent_child_list"}\n';
				connection.release();
				callback(200, null, resultJson);
				return;
			} else {
				resultJson =
					'{"replyCode":"success","replyMsg":"Sub admin Details","data":' +
					JSON.stringify(ordData[0]) +
					',"cmd":"parent_child_list"}\n';
				console.log('res-suceess');
				connection.release();
				callback(200, null, resultJson);
				return;
			}
		});
	});
}


// age group
function age_group_list(userdata, pool, callback) {
	var resultJson = '';

	var keyword = '';
	var Keyconditoin = '';
	var learning = '0';
	var priority = '';
	if (typeof userdata.learning != 'undefined' && userdata.learning != '') {
		learning = userdata.learning;
	}

	if (typeof userdata.keyword != 'undefined' && userdata.keyword != '') {
		keyword = userdata.keyword;
	}
	if (typeof userdata.priority != 'undefined' && userdata.priority != '') {
		priority = userdata.priority;
	}

	pool.getConnection(function (err, connection) {
		if (keyword != '') {
			Keyconditoin += ' AND age_group.title LIKE  "%' + keyword + '%"';
		}
		if (priority != '') {
			Keyconditoin += ' AND age_group.priority = "' + priority + '"';
		}

		if (learning != '') {
			Keyconditoin += ' AND age_group.learning LIKE  "' + learning + '"';
		}
		console.log(keyword)
		detailsquery='SELECT age_group.* from age_group where age_group.status !="2" '+Keyconditoin+" ORDER BY age_group.priority ASC";
		console.log('detailsquery', detailsquery);
		connection.query(detailsquery, function (errSelDetails, resSelDetails) {
			if (errSelDetails) {
				resultJson =
					'{"replyCode":"error","replyMsg":"' + errSelDetails.message + '","cmd":"age_group_list"}\n';
				connection.release();
				callback(200, null, resultJson);
				return;
			} else {
				resultJson =
					'{"replyCode":"success","replyMsg":"Details found successfully .","data":' +
					JSON.stringify(resSelDetails) +
					',"cmd":"age_group_list"}\n';
				console.log('res-suceess');
				connection.release();
				callback(200, null, resultJson);
				return;
			}
		});
	});
}

// age group dropdown
function age_group_list_dropdown(userdata, pool, callback) {
	var resultJson = '';

	var keyword = '';
	var Keyconditoin = '';
	var learning = '0';
	if (typeof userdata.learning != 'undefined' && userdata.learning != '') {
		learning = userdata.learning;
	}
	if (typeof userdata.keyword != 'undefined' && userdata.keyword != '') {
		keyword = userdata.keyword;
	}

	pool.getConnection(function (err, connection) {
		if (keyword != '') {
			Keyconditoin += ' AND age_group.title LIKE  "%' + keyword + '%"';
		}

		if (learning != '') {
			Keyconditoin = ' AND age_group.learning LIKE  "' + learning + '"';
		}
		detailsquery ='SELECT age_group.* from age_group where age_group.status ="1" ' +Keyconditoin +' ORDER BY age_group.priority ASC';
		connection.query(detailsquery, function (errSelDetails, resSelDetails) {
			if (errSelDetails) {
				resultJson ='{"replyCode":"error","replyMsg":"' + errSelDetails.message + '","cmd":"age_group_list"}\n';
				connection.release();
				callback(200, null, resultJson);
				return;
			} else {
				resultJson =
					'{"replyCode":"success","replyMsg":'+JSON.stringify(resSelDetails)+',"data":' +
					JSON.stringify(resSelDetails) +
					',"cmd":"age_group_list"}\n';
				console.log('res-suceess');
				connection.release();
				callback(200, null, resultJson);
				return;
			}
		});
	});
}

function add_age_group(userdata, pool, callback) {
	var resultJson = '';
	var course_id = '';
	var title = '';
	var age_from = '';
	var age_to = '';
	var priority = '';
	var id = '';
	var learning = '0';
	var orientation = '';
	var thumbnail1 = '';
	var thumbnail2 = '';
	var thumbnail3 = '';
	var pdf = '';
	var video_1 = '';
	var video_2 = '';

	if (typeof userdata.learning != 'undefined' && userdata.learning != '') {
		learning = userdata.learning;
	}

	if (typeof userdata.id != 'undefined' && userdata.id != '') {
		id = userdata.id;
	}

	if (typeof userdata.title != 'undefined' && userdata.title != '') {
		title = userdata.title;
	}

	if (typeof userdata.age_from != 'undefined' && userdata.age_from != '') {
		age_from = userdata.age_from;
	}

	if (typeof userdata.age_to != 'undefined' && userdata.age_to != '') {
		age_to = userdata.age_to;
	}

	if (typeof userdata.priority != 'undefined' && userdata.priority != '') {
		priority = userdata.priority;
	}

	if (typeof userdata.orientation != 'undefined' && userdata.orientation != '') {
		orientation = userdata.orientation;
	}

	if (typeof userdata.thumbnail1 != 'undefined' && userdata.thumbnail1 != '') {
		thumbnail1 = userdata.thumbnail1;
	}
	if (typeof userdata.thumbnail2 != 'undefined' && userdata.thumbnail2 != '') {
		thumbnail2 = userdata.thumbnail2;
	}
	if (typeof userdata.thumbnail3 != 'undefined' && userdata.thumbnail3 != '') {
		thumbnail3 = userdata.thumbnail3;
	}
	if (typeof userdata.pdf != 'undefined' && userdata.pdf != '') {
		pdf = userdata.pdf;
	}
	if (typeof userdata.video_1 != 'undefined' && userdata.video_1 != '') {
		video_1 = userdata.video_1;
	}
	if (typeof userdata.video_2 != 'undefined' && userdata.video_2 != '') {
		video_2 = userdata.video_2;
	}
	/* ESTABLISH CONNECTION TO DATABASE */
	pool.getConnection(function (err, connection) {
		if (id != '') {
			var queryinsert='UPDATE age_group SET title="'+title+'",age_from="'+age_from+'",age_to="'+age_to+'",priority="'+priority+'",orientation="'+orientation+'",learning="'+learning+'",thumbnail1="'+thumbnail1+'",thumbnail2="'+thumbnail2+'",thumbnail3="'+thumbnail3+'",pdf="'+pdf+'",video_1="'+video_1+'",video_2="'+video_2+'" where age_group.id="'+id+'"';
		} else {
			var queryinsert='INSERT INTO age_group SET title="'+title+'",age_from="'+age_from+'",age_to="'+age_to+'",priority="'+priority+'",orientation="'+orientation+'",learning="'+learning+'",thumbnail1="'+thumbnail1+'",thumbnail2="'+thumbnail2+'",thumbnail3="'+thumbnail3+'",pdf="'+pdf+'",video_1="'+video_1+'",video_2="'+video_2+'",created= NOW()';
		}
		console.log(queryinsert);
		connection.query(queryinsert, function (errinsert, resultinsert) {
			if (!errinsert) {
				resultJson = '{"replyCode":"success","replyMsg":"age_group updated successfully","cmd":"age_group"}\n';
				connection.release();
				callback(200, null, resultJson);
				return;
			} else {
				resultJson = '{"replyCode":"error","replyMsg":"' + errinsert.message + '","cmd":"age_group"}\n';
				console.log('res-suceess');
				connection.release();
				callback(400, null, resultJson);
				return;
			}
		});
	});
}

/*age_group details*/
function age_group_details(userdata, pool, callback) {
	var resultJson = '';
	var id = '';

	if (typeof userdata.id != 'undefined' && userdata.id != '') {
		id = userdata.id;
	}

	console.log('----------');
	console.log(userdata);

	pool.getConnection(function (err, connection) {
		var Catquery = 'SELECT * FROM age_group WHERE id="' + id + '"';
		console.log('qq', Catquery);
		connection.query(Catquery, function (errinsert, resultinsert) {
			if (!errinsert) {
				resultJson =
					'{"replyCode":"success","replyMsg":"age_groups details","data":' +
					JSON.stringify(resultinsert) +
					'}\n';
				connection.release();
				callback(200, null, resultJson);
				return;
			} else {
				resultJson = '{"replyCode":"error","replyMsg":"' + errinsert.message + '","cmd":"age_groups"}\n';
				connection.release();
				callback(200, null, resultJson);
				return;
			}
		});
	});
}

// Update status
function update_age_group_status(userdata, pool, callback) {
	var resultJson = '';
	var id = '';
	var status = '0'; //0-inactive , 1-active , 2- delete
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
		Uquery = 'UPDATE age_group SET status="' + status + '" WHERE id = ' + id + '';
		connection.query(Uquery, function (errinsert) {
			if (!errinsert) {
				resultJson = '{"replyCode":"success","replyMsg":"Status chenged Successfully","cmd":"age_groups"}';
				connection.release();
				callback(200, null, resultJson);
				return;
			} else {
				resultJson = '{"replyCode":"error","replyMsg":"' + errinsert.message + '","cmd":"age_groups"}\n';
				connection.release();
				callback(200, null, resultJson);
				return;
			}
		});
	});
}


//update profile image

function update_profile_image(userdata, pool, callback){
	var resultJson = '';
	var strJson = '';
	
	var Cquery = '';
	var id = '';
	var image =''; 
	
	if (typeof userdata.id != 'undefined' && userdata.id != '') {
		id =userdata.id;
	}

	if (typeof userdata.image != 'undefined' && userdata.image != '') {
		image = userdata.image;
	}
	pool.getConnection(function (err, connection) {
		
		squery ='UPDATE users SET image = "'+image+'" WHERE id = "'+id+'"';
		connection.query(squery, function(errselect, resultselect){
			if(!errselect){
				console.log(resultselect);
				resultJson = '{"replyCode":"success","replyMsg":"Profile image updated successfully","cmd":"update_profile_image"}\n';
				connection.release();
				callback(200, null, resultJson);
				return;
			}else{
				resultJson = '{"replyCode":"error","replyMsg":"'+errselect.message+'","cmd":"update_profile_image"}\n';
				connection.release();
				callback(200, null, resultJson);
				return;
			}
		});
	});	
}


// Chapters

function course_chapters_list(userdata, pool, callback) {
	var resultJson = '';
	var course_id = '';
	var keyword = '';
	var start = '0';
	var limit = '';
	var Keyconditoin = ' course_chapters.status !="2"';
	if (typeof userdata.keyword != 'undefined' && userdata.keyword != '') {
		keyword = userdata.keyword;
	}
	if (typeof userdata.course_id != 'undefined' && userdata.course_id != '') {
		course_id = userdata.course_id;
	}
	if (typeof userdata.start != 'undefined' && userdata.start != '') {
		start = userdata.start;
	}
	if (typeof userdata.limit != 'undefined' && userdata.limit != '') {
		limit = userdata.limit;
	}
	pool.getConnection(function (err, connection) {
		if (keyword != '') {
			Keyconditoin += ' AND course_chapters.chapter_title LIKE  "%' + keyword + '%"';
		}
		if (course_id != '') {
			Keyconditoin += ' AND course_chapters.course_id="' + course_id + '"';
		}
		if (limit != '') {
			detailsquery = 'SELECT course_chapters.* from course_chapters where ' + Keyconditoin + '  LIMIT ' + start + ', ' + limit + '';
		} else {
			detailsquery = 'SELECT course_chapters.* from course_chapters where ' + Keyconditoin + '';
		}

		console.log('detailsquery', detailsquery);

		var countquery = 'SELECT count(*) as count from course_chapters WHERE ' + Keyconditoin + '';


		connection.query(countquery, function (err, responsecount) {
			if (responsecount[0].count > 0) {
				connection.query(detailsquery, function (errSelDetails, resSelDetails) {
					if (errSelDetails) {
						resultJson =
							'{"replyCode":"error","replyMsg":"' + errSelDetails.message + '","cmd":"course_chapter"}\n';
						connection.release();
						callback(200, null, resultJson);
						return;
					} else {
						resultJson =
							'{"replyCode":"success","replyMsg":"Details found successfully .","data":' +
							JSON.stringify(resSelDetails) +
							',"totalCount":' + responsecount[0].count + ',"cmd":"course_chapter"}\n';
						console.log('res-suceess');
						connection.release();
						callback(200, null, resultJson);
						return;
					}
				});
			} else {
				resultJson = '{"replyCode":"success","replyMsg":"course_chapter","data":[], "cmd":"course_chapter"}\n';
				console.log(resultJson);
				connection.release();
				callback(200, null, resultJson);
				return;
			}
		});


	});
}

function course_chapters_dropdown_list(userdata, pool, callback) {
	var resultJson = '';
	var course_id = '';
	var keyword = '';
	var Keyconditoin = ' course_chapters.status ="1"';
	if (typeof userdata.keyword != 'undefined' && userdata.keyword != '') {
		keyword = userdata.keyword;
	}
	if (typeof userdata.course_id != 'undefined' && userdata.course_id != '') {
		course_id = userdata.course_id;
	}

	pool.getConnection(function (err, connection) {
		if (keyword != '') {
			Keyconditoin += ' AND course_chapters.chapter_title LIKE  "%' + keyword + '%"';
		}
		if (course_id != '') {
			Keyconditoin += ' AND course_chapters.course_id="' + course_id + '"';
		}

		detailsquery = 'SELECT course_chapters.* from course_chapters where ' + Keyconditoin + '';
		console.log('detailsquery', detailsquery);
		connection.query(detailsquery, function (errSelDetails, resSelDetails) {
			if (errSelDetails) {
				resultJson =
					'{"replyCode":"error","replyMsg":"' + errSelDetails.message + '","cmd":"course_chapter"}\n';
				connection.release();
				callback(200, null, resultJson);
				return;
			} else {
				resultJson =
					'{"replyCode":"success","replyMsg":"Details found successfully .","data":' +
					JSON.stringify(resSelDetails) +
					',"cmd":"course_chapter"}\n';
				console.log('res-suceess');
				connection.release();
				callback(200, null, resultJson);
				return;
			}
		});
	});
}

function add_course_chapter(userdata, pool, callback) {
	var resultJson = '';
	var course_id = '';
	var chapter_title = '';
	var chapter_description = '';
	var s_no = '';
	var allow_random = '0';
	var created_by = '';
	var course_type = '2';
	var image = '';
	var id = '';

	if (typeof userdata.id != 'undefined' && userdata.id != '') {
		id = userdata.id;
	}

	if (typeof userdata.chapter_title != 'undefined' && userdata.chapter_title != '') {
		chapter_title = userdata.chapter_title;
	}
	if (typeof userdata.course_id != 'undefined' && userdata.course_id != '') {
		course_id = userdata.course_id;
	}

	if (typeof userdata.chapter_description != 'undefined' && userdata.chapter_description != '') {
		chapter_description = userdata.chapter_description.replace(/"/g, "'");
	}
	if (typeof userdata.s_no != 'undefined' && userdata.s_no != '') {
		s_no = userdata.s_no;
	}
	if (typeof userdata.allow_random != 'undefined' && userdata.allow_random != '') {
		allow_random = userdata.allow_random;
	}

	if (typeof userdata.created_by != 'undefined' && userdata.created_by != '') {
		created_by = userdata.created_by;
	}
	if (typeof userdata.course_type != 'undefined' && userdata.course_type != '') {
		course_type = userdata.course_type;
	}
	if (typeof userdata.image != 'undefined' && userdata.image != '') {
		image = userdata.image;
	}

	/* ESTABLISH CONNECTION TO DATABASE */
	pool.getConnection(function (err, connection) {
		if (id != '') {
			var queryinsert='UPDATE course_chapters SET course_id="'+course_id+'",chapter_title="'+chapter_title+'",chapter_description="'+chapter_description+'",s_no="'+s_no+'",allow_random="'+allow_random+'",created_by="'+created_by+'",course_type="'+course_type+'",image="'+image+'" where course_chapters.id="'+id+'"';
		} else {
			var queryinsert='INSERT INTO course_chapters SET course_id="'+course_id+'",chapter_title="'+chapter_title+'",chapter_description="'+chapter_description+'",s_no="'+s_no+'",allow_random="'+allow_random+'",created_by="'+created_by+'",course_type="'+course_type+'",image="'+image+'",created= NOW()';
		}
		console.log(queryinsert);
		connection.query(queryinsert, function (errinsert, resultinsert) {
			if (!errinsert) {
				resultJson =
					'{"replyCode":"success","replyMsg":"Chapter updated successfully","cmd":"course_chapters"}\n';
				connection.release();
				callback(200, null, resultJson);
				return;
			} else {
				resultJson = '{"replyCode":"error","replyMsg":"' + errinsert.message + '","cmd":"course_chapters"}\n';
				console.log('res-suceess');
				connection.release();
				callback(400, null, resultJson);
				return;
			}
		});
	});
}

/*course_chapters details*/
function course_chapter_details(userdata, pool, callback) {
	var resultJson = '';
	var id = '';

	if (typeof userdata.id != 'undefined' && userdata.id != '') {
		id = userdata.id;
	}

	console.log('----------');
	console.log(userdata);

	pool.getConnection(function (err, connection) {
		var Catquery = 'SELECT * FROM course_chapters WHERE id="' + id + '"';
		console.log('qq', Catquery);
		connection.query(Catquery, function (errinsert, resultinsert) {
			if (!errinsert) {
				resultJson =
					'{"replyCode":"success","replyMsg":"Project details","data":' +
					JSON.stringify(resultinsert) +
					'}\n';
				connection.release();
				callback(200, null, resultJson);
				return;
			} else {
				resultJson = '{"replyCode":"error","replyMsg":"' + errinsert.message + '","cmd":"course_chapterss"}\n';
				connection.release();
				callback(200, null, resultJson);
				return;
			}
		});
	});
}

// Update status
function update_course_chapters_status(userdata, pool, callback) {
	var resultJson = '';
	var id = '';
	var status = '0'; //0-inactive , 1-active , 2- delete
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
		Uquery = 'UPDATE course_chapters SET status="' + status + '" WHERE id = ' + id + '';
		connection.query(Uquery, function (errinsert) {
			if (!errinsert) {
				resultJson =
					'{"replyCode":"success","replyMsg":"Status chenged Successfully","cmd":"course_chapterss"}';
				connection.release();
				callback(200, null, resultJson);
				return;
			} else {
				resultJson = '{"replyCode":"error","replyMsg":"' + errinsert.message + '","cmd":"course_chapterss"}\n';
				connection.release();
				callback(200, null, resultJson);
				return;
			}
		});
	});
}


// course achievement

function course_achievement_list(userdata, pool, callback) {
	var resultJson = '';
	var keyword = '';
	var course_id = '';
	var Keyconditoin = '';
	var start = '0';
	var type = ''; //0-achivement,1-activities,2-skills,3-certificates
	var limit = '';
	if (typeof userdata.keyword != 'undefined' && userdata.keyword != '') {
		keyword = userdata.keyword;
	}
	if (typeof userdata.course_id != 'undefined' && userdata.course_id != '') {
		course_id = userdata.course_id;
	}

	if (typeof userdata.start != 'undefined' && userdata.start != '') {
		start = userdata.start;
	}
	if (typeof userdata.limit != 'undefined' && userdata.limit != '') {
		limit = userdata.limit;
	}
	if (typeof userdata.type != 'undefined' && userdata.type != '') {
		type = userdata.type;
	}
	pool.getConnection(function (err, connection) {
		if (keyword != '') {
			Keyconditoin = ' AND course_achievement.title LIKE  "%' + keyword + '%"';
		}
		
		if (type != '') {
			Keyconditoin = ' AND course_achievement.type ="' + type + '"';
		}

		if (limit != '') {
			detailsquery='SELECT course_achievement.* from course_achievement where course_achievement.status !="2" AND course_achievement.course_id="'+course_id+'" '+Keyconditoin+" LIMIT "+start+", "+limit;
		} else {
			detailsquery='SELECT course_achievement.* from course_achievement where course_achievement.status !="2" AND course_achievement.course_id="'+course_id+'" '+Keyconditoin;
		}

		console.log('detailsquery', detailsquery);

		var countquery='SELECT count(*) as count from course_achievement where course_achievement.status !="2" AND course_achievement.course_id="'+course_id+'" '+Keyconditoin;


		connection.query(countquery, function (err, responsecount) {
			if (responsecount[0].count > 0) {
				connection.query(detailsquery, function (errSelDetails, resSelDetails) {
					if (errSelDetails) {
						resultJson='{"replyCode":"error","replyMsg":"'+errSelDetails.message+'","cmd":"course_achievement_list"}\n';
						connection.release();
						callback(200, null, resultJson);
						return;
					} else {
						resultJson='{"replyCode":"success","replyMsg":"Details found successfully .","data":'+JSON.stringify(resSelDetails)+',"totalCount":'+responsecount[0].count+',"cmd":"course_achievement_list"}\n';
						console.log('res-suceess');
						connection.release();
						callback(200, null, resultJson);
						return;
					}
				});
			} else {
				resultJson = '{"replyCode":"success","replyMsg":"course_achievement_list","data":[], "cmd":"course_achievement_list"}\n';
				console.log(resultJson);
				connection.release();
				callback(200, null, resultJson);
				return;
			}
		});


	});
}

function add_course_achievement(userdata, pool, callback) {
	var resultJson = '';
	var title = '';
	var image = '';
	var course_id = '';
	var type = '0'; //0-achivement,1-activities,2-skills,3-certificates
	var id = '';

	if (typeof userdata.id != 'undefined' && userdata.id != '') {
		id = userdata.id;
	}
	if (typeof userdata.title != 'undefined' && userdata.title != '') {
		title = userdata.title;
	}

	if (typeof userdata.image != 'undefined' && userdata.image != '') {
		image = userdata.image;
	}
	if (typeof userdata.course_id != 'undefined' && userdata.course_id != '') {
		course_id = userdata.course_id;
	}
	if (typeof userdata.type != 'undefined' && userdata.type != '') {
		type = userdata.type;
	}

	/* ESTABLISH CONNECTION TO DATABASE */
	pool.getConnection(function (err, connection) {
		if (id != '') {
			var queryinsert='UPDATE course_achievement SET title="'+title+'",image="'+image+'",course_id="'+course_id+'",type="'+type+'" where course_achievement.id="'+id+'"';
		} else {
			var queryinsert='INSERT INTO course_achievement SET title="'+title+'",image="'+image+'",course_id="'+course_id+'",type="'+type+'",created= NOW()';
		}
		console.log(queryinsert);
		connection.query(queryinsert, function (errinsert, resultinsert) {
			if (!errinsert) {
				resultJson='{"replyCode":"success","replyMsg":"course_achievement updated successfully","cmd":"course_achievement"}\n';
				connection.release();
				callback(200, null, resultJson);
				return;
			} else {
				resultJson='{"replyCode":"error","replyMsg":"'+errinsert.message+'","cmd":"course_achievement"}\n';
				console.log('res-suceess');
				connection.release();
				callback(400, null, resultJson);
				return;
			}
		});
	});
}

/*course_achievement details*/
function course_achievement_details(userdata, pool, callback) {
	var resultJson = '';
	var id = '';

	if (typeof userdata.id != 'undefined' && userdata.id != '') {
		id = userdata.id;
	}

	console.log('----------');
	console.log(userdata);

	pool.getConnection(function (err, connection) {
		var Catquery = 'SELECT * FROM course_achievement WHERE id="' + id + '"';
		console.log('qq', Catquery);
		connection.query(Catquery, function (errinsert, resultinsert) {
			if (!errinsert) {
				resultJson =
					'{"replyCode":"success","replyMsg":"course_achievements details","data":' +
					JSON.stringify(resultinsert) +
					'}\n';
				connection.release();
				callback(200, null, resultJson);
				return;
			} else {
				resultJson =
					'{"replyCode":"error","replyMsg":"' + errinsert.message + '","cmd":"course_achievements"}\n';
				connection.release();
				callback(200, null, resultJson);
				return;
			}
		});
	});
}

// Update status
function update_course_achievement_status(userdata, pool, callback) {
	var resultJson = '';
	var id = '';
	var status = '0'; //0-inactive , 1-active , 2- delete
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
		Uquery = 'UPDATE course_achievement SET status="' + status + '" WHERE id = ' + id + '';
		connection.query(Uquery, function (errinsert) {
			if (!errinsert) {
				resultJson =
					'{"replyCode":"success","replyMsg":"Status chenged Successfully","cmd":"course_achievements"}';
				connection.release();
				callback(200, null, resultJson);
				return;
			} else {
				resultJson =
					'{"replyCode":"error","replyMsg":"' + errinsert.message + '","cmd":"course_achievements"}\n';
				connection.release();
				callback(200, null, resultJson);
				return;
			}
		});
	});
}


//classes

function classes_list(userdata, pool, callback) {
	var resultJson = '';

	var course_id = '';
	var keyword = '';
	var Keyconditoin = ' classes.status !="2"';
	var learning = '0';
	var start = '0';
	var categoryId = '';
	var limit = '';

	if (typeof userdata.learning != 'undefined' && userdata.learning != '') {
		learning = userdata.learning;
	}

	if (typeof userdata.keyword != 'undefined' && userdata.keyword != '') {
		keyword = userdata.keyword;
	}
	if (typeof userdata.course_id != 'undefined' && userdata.course_id != '') {
		course_id = userdata.course_id;
	}
	if (typeof userdata.start != 'undefined' && userdata.start != '') {
		start = userdata.start;
	}
	if (typeof userdata.limit != 'undefined' && userdata.limit != '') {
		limit = userdata.limit;
	}
	if (typeof userdata.categoryId != 'undefined' && userdata.categoryId != '') {
		categoryId = userdata.categoryId;
	}
	pool.getConnection(function (err, connection) {
		if (keyword != '') {
		Keyconditoin+=' AND (classes.class_number LIKE  "%'+keyword+'%" OR  classes.class_topic LIKE  "%'+keyword+'%")';
		}
		if (categoryId != '') {
			Keyconditoin += ' AND classes.category_id = "' + categoryId + '"';
		}
		if (learning != '') {
			Keyconditoin += ' AND classes.learning = "' + learning + '"';
		}
		if (limit != '') {
			detailsquery = 'SELECT classes.* from classes  where  ' + Keyconditoin + ' LIMIT ' + start + ', ' + limit + '';
		} else {
			detailsquery = 'SELECT classes.* from classes  where  ' + Keyconditoin + '';
		}

		console.log('detailsquery', detailsquery);
		var countquery = 'SELECT count(*) as count from classes WHERE ' + Keyconditoin + '';


		connection.query(countquery, function (err, responsecount) {
			if (responsecount[0].count > 0) {
				connection.query(detailsquery, function (errSelDetails, resSelDetails) {
					if (errSelDetails) {
						resultJson = '{"replyCode":"error","replyMsg":"' + errSelDetails.message + '","cmd":"classes_list"}\n';
						connection.release();
						callback(200, null, resultJson);
						return;
					} else {
						resultJson =
							'{"replyCode":"success","replyMsg":"Details found successfully .","data":' +
							JSON.stringify(resSelDetails) +
							',"totalCount":' + responsecount[0].count + ',"cmd":"classes_list"}\n';
						console.log('res-suceess');
						connection.release();
						callback(200, null, resultJson);
						return;
					}
				});
			} else {
				resultJson = '{"replyCode":"success","replyMsg":"classes_list","data":[], "cmd":"classes_list"}\n';
				console.log(resultJson);
				connection.release();
				callback(200, null, resultJson);
				return;
			}
		});


	});
}

function classes_dropdown_list(userdata, pool, callback) {
	var resultJson = '';

	var course_id = '';
	var keyword = '';
	var category_id = '';
	var Keyconditoin = ' classes.status ="1"';
	var learning = '0';
	if (typeof userdata.learning != 'undefined' && userdata.learning != '') {
		learning = userdata.learning;
	}
	if (typeof userdata.keyword != 'undefined' && userdata.keyword != '') {
		keyword = userdata.keyword;
	}
	if (typeof userdata.course_id != 'undefined' && userdata.course_id != '') {
		course_id = userdata.course_id;
	}
	if (typeof userdata.category_id != 'undefined' && userdata.category_id != '') {
		category_id = userdata.category_id;
	}

	pool.getConnection(function (err, connection) {
		if (keyword != '') {
			Keyconditoin+=' AND (classes.class_number LIKE  "%'+keyword+'%" OR  classes.class_topic LIKE  "%'+keyword+'%")';
		}
		if (category_id != '') {
			Keyconditoin += ' AND classes.category_id ="' + category_id + '"';
		}

		if (learning != '') {
			Keyconditoin += ' AND classes.learning = "' + learning + '"';
		}

		detailsquery = 'SELECT classes.* from classes  where  ' + Keyconditoin + '';
		console.log('detailsquery', detailsquery);
		connection.query(detailsquery, function (errSelDetails, resSelDetails) {
			if (errSelDetails) {
				resultJson = '{"replyCode":"error","replyMsg":"' + errSelDetails.message + '","cmd":"classes_list"}\n';
				connection.release();
				callback(200, null, resultJson);
				return;
			} else {
				resultJson =
					'{"replyCode":"success","replyMsg":"Details found successfully .","data":' +
					JSON.stringify(resSelDetails) +
					',"cmd":"classes_list"}\n';
				console.log('res-suceess');
				connection.release();
				callback(200, null, resultJson);
				return;
			}
		});
	});
}

function add_classes(userdata, pool, callback) {
	var resultJson = '';
	var class_number = '';
	var class_topic = '';
	var class_description = '';
	var class_requirement = '';
	var class_summary_pdf = '';
	var video = '';
	var image = '';
	var video_url = '';
	var points = '0';
	var teacher_document = '';
	var category_id = '';
	var id = '';
	var learning = '0';
	var type = '0';
	var feedback_id = '';
	var outcomes = '';
	var zoom_link = '';
	var robotics_type = '';
	var class_name = '';

	if (typeof userdata.zoom_link != 'undefined' && userdata.zoom_link != '') {
		zoom_link = userdata.zoom_link;
	}
	if (typeof userdata.robotics_type != 'undefined' && userdata.robotics_type != '') {
		robotics_type = userdata.robotics_type;
	}
	if (typeof userdata.class_name != 'undefined' && userdata.class_name != '') {
		class_name = userdata.class_name;
	}
	if (typeof userdata.learning != 'undefined' && userdata.learning != '') {
		learning = userdata.learning;
	}
	if (typeof userdata.id != 'undefined' && userdata.id != '') {
		id = userdata.id;
	}

	if (typeof userdata.class_number != 'undefined' && userdata.class_number != '') {
		class_number = userdata.class_number;
	}

	if (typeof userdata.class_topic != 'undefined' && userdata.class_topic != '') {
		class_topic = userdata.class_topic;
	}
	if (typeof userdata.feedback_id != 'undefined' && userdata.feedback_id != '') {
		feedback_id = userdata.feedback_id;
	}

	if (typeof userdata.class_description != 'undefined' && userdata.class_description != '') {
		class_description = userdata.class_description.replace(/"/g, "'");
	}
	if (typeof userdata.class_requirement != 'undefined' && userdata.class_requirement != '') {
		class_requirement = userdata.class_requirement.replace(/"/g, "'");
	}

	if (typeof userdata.class_summary_pdf != 'undefined' && userdata.class_summary_pdf != '') {
		class_summary_pdf = userdata.class_summary_pdf;
	}

	if (typeof userdata.points != 'undefined' && userdata.points != '') {
		points = userdata.points;
	}

	if (typeof userdata.teacher_document != 'undefined' && userdata.teacher_document != '') {
		teacher_document = userdata.teacher_document;
	}

	if (typeof userdata.video != 'undefined' && userdata.video != '') {
		video = userdata.video;
	}
	if (typeof userdata.video_url != 'undefined' && userdata.video_url != '') {
		video_url = userdata.video_url;
	}
	if (typeof userdata.category_id != 'undefined' && userdata.category_id != '') {
		category_id = userdata.category_id;
	}
	if (typeof userdata.image != 'undefined' && userdata.image != '') {
		image = userdata.image;
	}
	if (typeof userdata.type != 'undefined' && userdata.type != '') {
		type = userdata.type;
	}
	if (typeof userdata.outcomes != 'undefined' && userdata.outcomes != '') {
		
		outcomes = userdata.outcomes.replace(/"/g, "'");
	}

	/* ESTABLISH CONNECTION TO DATABASE */
	pool.getConnection(function (err, connection) {
		if (id != '') {
			var queryinsert='UPDATE classes SET class_number="'+class_number+'",class_description="'+class_description+'",class_requirement="'+class_requirement+'",class_topic="'+class_topic+'",feedback_id="'+feedback_id+'",class_summary_pdf="'+class_summary_pdf+'",points="'+points+'",teacher_document="'+teacher_document+'",video="'+video+'",video_url="'+video_url+'",image="'+image+'",category_id="'+category_id+'",learning="'+learning+'",type="'+type+'",outcomes="'+outcomes+'",class_name="'+class_name+'",zoom_link="'+zoom_link+'",robotics_type="'+robotics_type+'" where classes.id="'+id+'"';
		} else {
			var queryinsert='INSERT INTO classes SET class_number="'+class_number+'",class_description="'+class_description+'",class_requirement="'+class_requirement+'",class_topic="'+class_topic+'",feedback_id="'+feedback_id+'",class_summary_pdf="'+class_summary_pdf+'",points="'+points+'",teacher_document="'+teacher_document+'",video="'+video+'",video_url="'+video_url+'",image="'+image+'",category_id="'+category_id+'",learning="'+learning+'",type="'+type+'",outcomes="'+outcomes+'",class_name="'+class_name+'",zoom_link="'+zoom_link+'",robotics_type="'+robotics_type+'",status="1",created= NOW()';
		}

		console.log(queryinsert);
		connection.query(queryinsert, function (errinsert, resultinsert) {
			if (!errinsert) {
				resultJson = '{"replyCode":"success","replyMsg":"classes updated successfully","cmd":"classes"}\n';
				connection.release();
				callback(200, null, resultJson);
				return;
			} else {
				resultJson = '{"replyCode":"error","replyMsg":"' + errinsert.message + '","cmd":"classes"}\n';
				console.log('res-suceess');
				connection.release();
				callback(400, null, resultJson);
				return;
			}
		});
	});
}

/*classes details*/
function classes_details(userdata, pool, callback) {
	var resultJson = '';
	var id = '';

	if (typeof userdata.id != 'undefined' && userdata.id != '') {
		id = userdata.id;
	}

	console.log('----------');
	console.log(userdata);

	pool.getConnection(function (err, connection) {
		var Catquery = 'SELECT * FROM classes WHERE id="' + id + '"';
		console.log('qq', Catquery);
		connection.query(Catquery, function (errinsert, resultinsert) {
			if (!errinsert) {
				resultJson =
					'{"replyCode":"success","replyMsg":"classess details","data":' +
					JSON.stringify(resultinsert) +
					'}\n';
				connection.release();
				callback(200, null, resultJson);
				return;
			} else {
				resultJson = '{"replyCode":"error","replyMsg":"' + errinsert.message + '","cmd":"classess"}\n';
				connection.release();
				callback(200, null, resultJson);
				return;
			}
		});
	});
}

/*classes details*/
function view_course_info(userdata, pool, callback) {
	var resultJson = '';
	var id = '';

	if (typeof userdata.id != 'undefined' && userdata.id != '') {
		id = userdata.id;
	}

	console.log('----------');
	console.log(userdata);

	pool.getConnection(function (err, connection) {
		var Catquery = 'SELECT * FROM courses WHERE id="' + id + '"';
		console.log('qq', Catquery);
		connection.query(Catquery, function (errinsert, resPro) {
			if (!errinsert) {
				if (resPro.length > 0) {
					var i = 0;
					async.eachSeries(
						resPro,
						function (rec2, loop2) {
							var course_id = rec2.id;
							console.log('course_id', course_id);
							proiMGquery='SELECT course_chapters.* from course_chapters where course_chapters.course_id="'+course_id+'" AND course_chapters.status="1"';
							console.log('proiMGquery', proiMGquery);
							connection.query(proiMGquery, function (errSelpiMG, respROiMG) {
								if (errSelpiMG) {
									console.log('errSelpiMG', errSelpiMG);

									loop2();
								} else {
									resPro[i].chapters = respROiMG;
									loop2();
								}
								i = i + 1;
							});
						},
						function (errSelPro) {
							if (errSelPro) {
								console.log('errSelPro', errSelPro);
								resultJson =
									'{"replyCode":"error","replyMsg":"' +
									errSelPro.message +
									'","cmd":"view_classes_info"}\n';
								connection.release();
								callback(200, null, resultJson);
								return;
							} else {
								resultJson =
									'{"replyCode":"success","replyMsg":"Details found successfully .","data":' +
									JSON.stringify(resPro) +
									',"cmd":"view_classes_info"}\n';
								console.log('res-suceess');
								connection.release();
								callback(200, null, resultJson);
								return;
							}
						}
					);
				} else {
					resultJson =
						'{"replyCode":"success","replyMsg":"No Record found.","data":[], "cmd":"view_classes_info"}\n';
					console.log('res-suceess');
					connection.release();
					callback(200, null, resultJson);
					return;
				}
			} else {
				resultJson = '{"replyCode":"error","replyMsg":"' + errinsert.message + '","cmd":"view_classes_info"}\n';
				connection.release();
				callback(200, null, resultJson);
				return;
			}
		});
	});
}

// Update status
function update_classes_status(userdata, pool, callback) {
	var resultJson = '';
	var id = '';
	var status = '0'; //0-inactive , 1-active , 2- delete
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
		Uquery = 'UPDATE classes SET status="' + status + '" WHERE id = ' + id + '';
		connection.query(Uquery, function (errinsert) {
			if (!errinsert) {
				resultJson = '{"replyCode":"success","replyMsg":"Status chenged Successfully","cmd":"classess"}';
				connection.release();
				callback(200, null, resultJson);
				return;
			} else {
				resultJson = '{"replyCode":"error","replyMsg":"' + errinsert.message + '","cmd":"classess"}\n';
				connection.release();
				callback(200, null, resultJson);
				return;
			}
		});
	});
}


// activities

function activities_list(userdata, pool, callback) {
	var resultJson = '';

	var keyword = '';
	var type = '';
	var course_chapter_id = '';
	var start = '0';
	var limit = '';

	var Keyconditoin = ' activities.status !="2"';
	if (typeof userdata.keyword != 'undefined' && userdata.keyword != '') {
		keyword = userdata.keyword;
	}
	if (typeof userdata.type != 'undefined' && userdata.type != '') {
		type = userdata.type;
	}
	if (typeof userdata.course_chapter_id != 'undefined' && userdata.course_chapter_id != '') {
		course_chapter_id = userdata.course_chapter_id;
	}
	if (typeof userdata.start != 'undefined' && userdata.start != '') {
		start = userdata.start;
	}
	if (typeof userdata.limit != 'undefined' && userdata.limit != '') {
		limit = userdata.limit;
	}
	pool.getConnection(function (err, connection) {
		if (keyword != '') {
			Keyconditoin += ' AND activities.activity_title LIKE  "%' + keyword + '%"';
		}
		if (type != '') {
			Keyconditoin += ' AND activities.type ="' + type + '"';
		}

		if (course_chapter_id != '') {
			Keyconditoin += ' AND activities.chapter_id ="' + course_chapter_id + '"';
		}
		if (limit != '') {
			detailsquery = 'SELECT activities.* from activities where  ' + Keyconditoin + ' LIMIT ' + start + ', ' + limit + '';
		} else {
			detailsquery = 'SELECT activities.* from activities where  ' + Keyconditoin + '';
		}
		console.log('detailsquery', detailsquery);

		var countquery = 'SELECT count(*) as count from activities WHERE ' + Keyconditoin + '';


		connection.query(countquery, function (err, responsecount) {
			if (responsecount[0].count > 0) {
				connection.query(detailsquery, function (errSelDetails, resSelDetails) {
					if (errSelDetails) {
						resultJson =
							'{"replyCode":"error","replyMsg":"' + errSelDetails.message + '","cmd":"activities_list"}\n';
						connection.release();
						callback(200, null, resultJson);
						return;
					} else {
						resultJson =
							'{"replyCode":"success","replyMsg":"Details found successfully .","data":' +
							JSON.stringify(resSelDetails) +
							',"totalCount":' + responsecount[0].count + ',"cmd":"activities_list"}\n';
						console.log('res-suceess');
						connection.release();
						callback(200, null, resultJson);
						return;
					}
				});
			} else {
				resultJson = '{"replyCode":"success","replyMsg":"activities_list","data":[], "cmd":"activities_list"}\n';
				console.log(resultJson);
				connection.release();
				callback(200, null, resultJson);
				return;
			}
		});



	});
}

function add_activities(userdata, pool, callback) {
	var resultJson = '';
	var activity_title = '';
	var activity_description = '';
	var chapter_id = '';
	var type = '1'; //'1'-student,2-teacher,3-parent,4-project
	var id = '';

	if (typeof userdata.id != 'undefined' && userdata.id != '') {
		id = userdata.id;
	}
	if (typeof userdata.activity_title != 'undefined' && userdata.activity_title != '') {
		activity_title = userdata.activity_title;
	}

	if (typeof userdata.activity_description != 'undefined' && userdata.activity_description != '') {
		activity_description = userdata.activity_description.replace(/"/g, "'");
	}

	if (typeof userdata.type != 'undefined' && userdata.type != '') {
		type = userdata.type;
	}

	if (typeof userdata.chapter_id != 'undefined' && userdata.chapter_id != '') {
		chapter_id = userdata.chapter_id;
	}

	/* ESTABLISH CONNECTION TO DATABASE */
	pool.getConnection(function (err, connection) {
		if (id != '') {
			var queryinsert =
				'UPDATE activities SET activity_title="' +
				activity_title +
				'",activity_description="' +
				activity_description +
				'",chapter_id="' +
				chapter_id +
				'",type="' +
				type +
				'" where activities.id="' +
				id +
				'"';
		} else {
			var queryinsert =
				'INSERT INTO activities SET activity_title="' +
				activity_title +
				'",activity_description="' +
				activity_description +
				'",chapter_id="' +
				chapter_id +
				'",type="' +
				type +
				'",created= NOW()';
		}
		console.log(queryinsert);
		connection.query(queryinsert, function (errinsert, resultinsert) {
			if (!errinsert) {
				resultJson =
					'{"replyCode":"success","replyMsg":"activities updated successfully","cmd":"activities"}\n';
				connection.release();
				callback(200, null, resultJson);
				return;
			} else {
				resultJson = '{"replyCode":"error","replyMsg":"' + errinsert.message + '","cmd":"activities"}\n';
				console.log('res-suceess');
				connection.release();
				callback(400, null, resultJson);
				return;
			}
		});
	});
}

/*activities details*/
function activities_details(userdata, pool, callback) {
	var resultJson = '';
	var id = '';

	if (typeof userdata.id != 'undefined' && userdata.id != '') {
		id = userdata.id;
	}

	console.log('----------');
	console.log(userdata);

	pool.getConnection(function (err, connection) {
		var Catquery = 'SELECT * FROM activities WHERE id="' + id + '"';
		console.log('qq', Catquery);
		connection.query(Catquery, function (errinsert, resultinsert) {
			if (!errinsert) {
				if (resultinsert.length > 0) {
					var res = resultinsert[0];
				} else {
					var res = [];
				}
				resultJson =
					'{"replyCode":"success","replyMsg":"activities details","data":' + JSON.stringify(res) + '}\n';
				connection.release();
				callback(200, null, resultJson);
				return;
			} else {
				resultJson = '{"replyCode":"error","replyMsg":"' + errinsert.message + '","cmd":"activities"}\n';
				connection.release();
				callback(200, null, resultJson);
				return;
			}
		});
	});
}

// Update status
function update_activities_status(userdata, pool, callback) {
	var resultJson = '';
	var id = '';
	var status = '0'; //0-inactive , 1-active , 2- delete
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
		Uquery = 'UPDATE activities SET status="' + status + '" WHERE id = ' + id + '';
		connection.query(Uquery, function (errinsert) {
			if (!errinsert) {
				resultJson = '{"replyCode":"success","replyMsg":"Status chenged Successfully","cmd":"activities"}';
				connection.release();
				callback(200, null, resultJson);
				return;
			} else {
				resultJson = '{"replyCode":"error","replyMsg":"' + errinsert.message + '","cmd":"activities"}\n';
				connection.release();
				callback(200, null, resultJson);
				return;
			}
		});
	});
}


// Quiz

function quizzes_list(userdata, pool, callback) {
	var resultJson = '';

	var keyword = '';
	var start = '0';
	var limit = '';
	var created_by='';
	var learning='';

	var Keyconditoin = ' quizzes.status !="2"';
	if (typeof userdata.keyword != 'undefined' && userdata.keyword != '') {
		keyword = userdata.keyword;
	}
	if (typeof userdata.learning != 'undefined' && userdata.learning != '') {
		learning = userdata.learning;
	}
	if (typeof userdata.start != 'undefined' && userdata.start != '') {
		start = userdata.start;
	}
	if (typeof userdata.limit != 'undefined' && userdata.limit != '') {
		limit = userdata.limit;
	}
	if (typeof userdata.created_by != 'undefined' && userdata.created_by != '') {
		created_by = userdata.created_by;
	}
	pool.getConnection(function (err, connection) {
		if (keyword != '') {
			Keyconditoin += ' AND quizzes.quiz_title LIKE  "%' + keyword + '%" or users.name LIKE  "%' + keyword + '%" OR users.last_name LIKE  "%' + keyword + '%" OR categories.name LIKE  "%' + keyword + '%"';
		}
		if (created_by != '') {
			Keyconditoin += ' AND quizzes.created_by = "' + created_by + '"';
		}

		if (limit != '') {
			detailsquery = 'SELECT quizzes.*,users.name as firstname, categories.name as subjectname ,users.last_name as lastname,age_group.title as level_title from quizzes  LEFT JOIN categories as categories ON categories.id = quizzes.category_id  LEFT JOIN age_group as age_group ON age_group.id = quizzes.level_id LEFT JOIN users as users ON users.id = quizzes.created_by where ' + Keyconditoin + ' LIMIT ' + start + ', ' + limit + '';
		} else {
			detailsquery = 'SELECT quizzes.*,age_group.title as level_title from quizzes LEFT JOIN age_group as age_group ON age_group.id = quizzes.level_id  where ' + Keyconditoin + '';
		}

		console.log('detailsquery', detailsquery);

		var countquery = 'SELECT count(*) as count from quizzes LEFT JOIN users as users ON users.id = quizzes.created_by LEFT JOIN categories as categories ON categories.id = quizzes.category_id WHERE ' + Keyconditoin + '';


		connection.query(countquery, function (err, responsecount) {
			if (responsecount[0].count > 0) {
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
							',"totalCount":' + responsecount[0].count + ',"cmd":"quizzes_list"}\n';
						console.log('res-suceess');
						connection.release();
						callback(200, null, resultJson);
						return;
					}
				});
			} else {
				resultJson = '{"replyCode":"success","replyMsg":"quizzes_list","data":[], "cmd":"quizzes_list"}\n';
				console.log(resultJson);
				connection.release();
				callback(200, null, resultJson);
				return;
			}
		});


	});
}

function quizzes_dropdown_list(userdata, pool, callback) {
	var resultJson = '';

	var keyword = '';
	var category_id = '';
	var Keyconditoin = ' quizzes.status ="1"';
	if (typeof userdata.keyword != 'undefined' && userdata.keyword != '') {
		keyword = userdata.keyword;
	}
	if (typeof userdata.category_id != 'undefined' && userdata.category_id != '') {
		category_id = userdata.category_id;
	}

	pool.getConnection(function (err, connection) {
		if (keyword != '') {
			Keyconditoin += ' AND quizzes.quiz_title LIKE  "%' + keyword + '%"';
		}
		if (category_id != '') {
			Keyconditoin += ' AND quizzes.category_id ="' + category_id + '"';
		}

		detailsquery = 'SELECT quizzes.* from quizzes where ' + Keyconditoin + '';
		console.log('detailsquery', detailsquery);
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

// function add_quizzes(userdata, pool, callback) {
// 	var resultJson = '';
// 	var quiz_title = '';
// 	var quiz_description = '';
// 	var level_id = '';
// 	var category_id = '';
// 	var exam_date = '';
// 	var exam_time = '';
// 	var question_doc = '';
// 	var answer_doc = '';
// 	var created_by = '';
// 	var learning = '';
// 	var id = '';
// console.log('add_quizzes',userdata);
// 	if (typeof userdata.level_id != 'undefined' && userdata.level_id != '') {
// 		level_id = userdata.level_id;
// 	}
// 	if (typeof userdata.exam_date != 'undefined' && userdata.exam_date != '') {
// 		exam_date = userdata.exam_date;
// 	}
// 	if (typeof userdata.exam_time != 'undefined' && userdata.exam_time != '') {
// 		exam_time = userdata.exam_time;
// 	}
// 	if (typeof userdata.question_doc != 'undefined' && userdata.question_doc != '') {
// 		question_doc = userdata.question_doc;
// 	}
// 	if (typeof userdata.answer_doc != 'undefined' && userdata.answer_doc != '') {
// 		answer_doc = userdata.answer_doc;
// 	}
// 	if (typeof userdata.id != 'undefined' && userdata.id != '') {
// 		id = userdata.id;
// 	}
// 	if (typeof userdata.category_id != 'undefined' && userdata.category_id != '') {
// 		category_id = userdata.category_id;
// 	}

// 	if (typeof userdata.quiz_title != 'undefined' && userdata.quiz_title != '') {
// 		quiz_title = userdata.quiz_title;
// 	}

// 	if (typeof userdata.quiz_description != 'undefined' && userdata.quiz_description != '') {
// 		quiz_description = userdata.quiz_description.replace(/"/g, "'");
// 	}

// 	if (typeof userdata.created_by != 'undefined' && userdata.created_by != '') {
// 		created_by = userdata.created_by;
// 	}
// 	if (typeof userdata.learning != 'undefined' && userdata.learning != '') {
// 		learning = userdata.learning;
// 	}

// 	/* ESTABLISH CONNECTION TO DATABASE */
// 	pool.getConnection(function (err, connection) {
// 		if (id != '') {
// 			var queryinsert='UPDATE quizzes SET quiz_title="'+quiz_title+'",quiz_description="'+quiz_description+'",category_id="'+category_id+'",answer_doc="'+answer_doc+'",question_doc="'+question_doc+'",exam_time="'+exam_time+'",exam_date="'+exam_date+'",level_id="'+level_id+'",created_by="'+created_by+'" where quizzes.id="'+id+'"'; //learning="'+learning+'",
// 		} else {
// 			var queryinsert='INSERT INTO quizzes SET quiz_title="'+quiz_title+'",quiz_description="'+quiz_description+'",category_id="'+category_id+'",created_by="'+created_by+'",answer_doc="'+answer_doc+'",question_doc="'+question_doc+'",exam_time="'+exam_time+'",exam_date="'+exam_date+'",level_id="'+level_id+'",created= NOW()'; //learning="'+learning+'",
// 		}
// 		console.log(queryinsert);
// 		connection.query(queryinsert, function (errinsert, resultinsert) {
// 			if (errinsert) 
// 			{
// 			// 	resultJson = '{"replyCode":"success","replyMsg":"quiz updated successfully","cmd":"quizzes"}\n';
// 			// 	connection.release();
// 			// 	callback(200, null, resultJson);
// 			// 	return;
// 			// } else 
// 			// {
// 				resultJson = '{"replyCode":"error","replyMsg":"' + errinsert.message + '","cmd":"quizzes"}\n';
// 				console.log('res-suceess');
// 				connection.release();
// 				callback(400, null, resultJson);
// 				return;
// 			}
// 			else{
// 				console.log('teacher id is',[created_by]);
// 				connection.query('SELECT student_id from student_booked_classes WHERE teacher_id = "'+created_by +'"', function (errD, TData) {
// 					console.log(JSON.stringify(TData[1].student_id),TData.length,'studentidd');
// 					if (errD) {
// 						resultJson = '{"replyCode":"error","replyMsg":"' + errD.message + '","cmd":"teacher details"}\n';
// 						connection.release();
// 						callback(200, null, resultJson);
// 						return;
// 					}
// 					else{
// 						// resultJson = '{"replyCode":"success","replyMsg":"quiz updated successfully","data":"'+ TData+'","cmd":"quizzes"}\n';
// 						// // 	connection.release();
// 						// // 	callback(200, null, resultJson);
// 						// // 	return;
// 						var sql = "INSERT INTO customers (name, address) VALUES ?";

// 						for ( var j = 0; j < TData.length ; j++ ) {
// 						connection.query('INSERT INTO student_quizzes VALUES student_id="'+JSON.stringify(TData[j].student_id),TData.length+'",teacher_id = "'+created_by +'"', function (errD, TData) {


// 							if (errD) {
// 								resultJson = '{"replyCode":"error","replyMsg":"' + errD.message + '","cmd":"teacher details"}\n';
// 								// connection.release();
// 								// callback(200, null, resultJson);
// 								return;
// 							}
// 							else{
// 								resultJson = '{"replyCode":"success","replyMsg":"quiz updated successfully","data":"'+ TData+'","cmd":"quizzes"}\n';
// 									connection.release();
// 									callback(200, null, resultJson);
// 									return;
// 							}
// 							})}
// 					}
// 					})
// 				}
// 		});
// 	});
// }
function add_quizzes(userdata, pool, callback) {
	var resultJson = '';
	var quiz_title = '';
	var quiz_description = '';
	var level_id = '';
	var category_id = '';
	var exam_date = '';
	var exam_time = '';
	var question_doc = '';
	var answer_doc = '';
	var created_by = '';
	var learning = '';
	var id = '';

	if (typeof userdata.level_id != 'undefined' && userdata.level_id != '') {
		level_id = userdata.level_id;
	}
	if (typeof userdata.exam_date != 'undefined' && userdata.exam_date != '') {
		exam_date = userdata.exam_date;
	}
	if (typeof userdata.exam_time != 'undefined' && userdata.exam_time != '') {
		exam_time = userdata.exam_time;
	}
	if (typeof userdata.question_doc != 'undefined' && userdata.question_doc != '') {
		question_doc = userdata.question_doc;
	}
	if (typeof userdata.answer_doc != 'undefined' && userdata.answer_doc != '') {
		answer_doc = userdata.answer_doc;
	}
	if (typeof userdata.id != 'undefined' && userdata.id != '') {
		id = userdata.id;
	}
	if (typeof userdata.category_id != 'undefined' && userdata.category_id != '') {
		category_id = userdata.category_id;
	}

	if (typeof userdata.quiz_title != 'undefined' && userdata.quiz_title != '') {
		quiz_title = userdata.quiz_title;
	}

	if (typeof userdata.quiz_description != 'undefined' && userdata.quiz_description != '') {
		quiz_description = userdata.quiz_description.replace(/"/g, "'");
	}

	if (typeof userdata.created_by != 'undefined' && userdata.created_by != '') {
		created_by = userdata.created_by;
	}
	if (typeof userdata.learning != 'undefined' && userdata.learning != '') {
		learning = userdata.learning;
	}

	/* ESTABLISH CONNECTION TO DATABASE */
	pool.getConnection(function (err, connection) {
		// if (id != '') {
		// 	var queryinsert='UPDATE quizzes SET quiz_title="'+quiz_title+'",quiz_description="'+quiz_description+'",category_id="'+category_id+'",learning="'+learning+'",answer_doc="'+answer_doc+'",question_doc="'+question_doc+'",exam_time="'+exam_time+'",exam_date="'+exam_date+'",level_id="'+level_id+'",created_by="'+created_by+'" where quizzes.id="'+id+'"';
		// } else {
		// 	var queryinsert='INSERT INTO quizzes SET quiz_title="'+quiz_title+'",quiz_description="'+quiz_description+'",category_id="'+category_id+'",learning="'+learning+'",created_by="'+created_by+'",answer_doc="'+answer_doc+'",question_doc="'+question_doc+'",exam_time="'+exam_time+'",exam_date="'+exam_date+'",level_id="'+level_id+'",created= NOW()';
		// }
		if (id != '') {
						var queryinsert='UPDATE quizzes SET quiz_title="'+quiz_title+'",quiz_description="'+quiz_description+'",category_id="'+category_id+'",answer_doc="'+answer_doc+'",question_doc="'+question_doc+'",exam_time="'+exam_time+'",exam_date="'+exam_date+'",level_id="'+level_id+'",created_by="'+created_by+'" where quizzes.id="'+id+'"'; //learning="'+learning+'",
					} else {
						var queryinsert='INSERT INTO quizzes SET quiz_title="'+quiz_title+'",quiz_description="'+quiz_description+'",category_id="'+category_id+'",created_by="'+created_by+'",answer_doc="'+answer_doc+'",question_doc="'+question_doc+'",exam_time="'+exam_time+'",exam_date="'+exam_date+'",level_id="'+level_id+'",created= NOW()'; //learning="'+learning+'",
					}
		console.log(queryinsert);
		connection.query(queryinsert, function (errinsert, resultinsert) {
			if (!errinsert) {
				resultJson = '{"replyCode":"success","replyMsg":"quiz added successfully","cmd":"quizzes"}\n';
				connection.release();
				callback(200, null, resultJson);
				return;
			} else {
				resultJson = '{"replyCode":"error","replyMsg":"' + errinsert.message + '","cmd":"quizzes"}\n';
				console.log('res-suceess');
				connection.release();
				callback(400, null, resultJson);
				return;
			}
		});
	});
}

/*quizzes details*/
function quizzes_details(userdata, pool, callback) {
	var resultJson = '';
	var id = '';

	if (typeof userdata.id != 'undefined' && userdata.id != '') {
		id = userdata.id;
	}

	console.log('----------');
	console.log(userdata);

	pool.getConnection(function (err, connection) {
		var Catquery = 'SELECT * FROM quizzes WHERE id="' + id + '"';
		console.log('qq', Catquery);
		connection.query(Catquery, function (errinsert, resultinsert) {
			if (!errinsert) {
				resultJson =
					'{"replyCode":"success","replyMsg":"quiz details","data":' + JSON.stringify(resultinsert) + '}\n';
				connection.release();
				callback(200, null, resultJson);
				return;
			} else {
				resultJson = '{"replyCode":"error","replyMsg":"' + errinsert.message + '","cmd":"quizzess"}\n';
				connection.release();
				callback(200, null, resultJson);
				return;
			}
		});
	});
}

// Update status
function update_quizzes_status(userdata, pool, callback) {
	var resultJson = '';
	var id = '';
	var status = '0'; //0-inactive , 1-active , 2- delete
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
		Uquery = 'UPDATE quizzes SET status="' + status + '" WHERE id = ' + id + '';
		connection.query(Uquery, function (errinsert) {
			if (!errinsert) {
				resultJson = '{"replyCode":"success","replyMsg":"Status chenged Successfully","cmd":"quizzess"}';
				connection.release();
				callback(200, null, resultJson);
				return;
			} else {
				resultJson = '{"replyCode":"error","replyMsg":"' + errinsert.message + '","cmd":"quizzess"}\n';
				connection.release();
				callback(200, null, resultJson);
				return;
			}
		});
	});
}

// quiz questions

function quizzes_questions_list(userdata, pool, callback) {
	var resultJson = '';

	var keyword = '';
	var Keyconditoin = ' quizzes_questions.status !="2"';
	var quizz_id = '';
	if (typeof userdata.keyword != 'undefined' && userdata.keyword != '') {
		keyword = userdata.keyword;
	}

	if (typeof userdata.quizz_id != 'undefined' && userdata.quizz_id != '') {
		quizz_id = userdata.quizz_id;
	}

	pool.getConnection(function (err, connection) {
		if (keyword != '') {
			Keyconditoin += ' AND quizzes_questions.question_title LIKE  "%' + keyword + '%"';
		}

		if (quizz_id != '') {
			Keyconditoin += ' AND quizzes_questions.quizz_id = "' + quizz_id + '"';
		}

		detailsquery = 'SELECT quizzes_questions.* from quizzes_questions where ' + Keyconditoin + '';
		console.log('detailsquery', detailsquery);
		connection.query(detailsquery, function (errSelDetails, resSelDetails) {
			if (errSelDetails) {
				resultJson =
					'{"replyCode":"error","replyMsg":"' + errSelDetails.message + '","cmd":"quizzes_questions_list"}\n';
				connection.release();
				callback(200, null, resultJson);
				return;
			} else {
				resultJson =
					'{"replyCode":"success","replyMsg":"Details found successfully .","data":' +
					JSON.stringify(resSelDetails) +
					',"cmd":"quizzes_questions_list"}\n';
				console.log('res-suceess');
				connection.release();
				callback(200, null, resultJson);
				return;
			}
		});
	});
}

function add_quizzes_questions(userdata, pool, callback) {
	var resultJson = '';
	var quizz_id = '';
	var question_number = '';
	var question_title = '';
	var question_description = '';
	var option1 = '';
	var option2 = '';
	var option3 = '';
	var option4 = '';
	var answer = '';
	var created_by = '';

	var question_image = '';
	var points = '0';
	var answer_description = '';
	var option1_image = '';
	var option2_image = '';
	var option3_image = '';
	var option4_image = '';
	var id = '';

	if (typeof userdata.id != 'undefined' && userdata.id != '') {
		id = userdata.id;
	}

	if (typeof userdata.question_number != 'undefined' && userdata.question_number != '') {
		question_number = userdata.question_number;
	}

	if (typeof userdata.question_title != 'undefined' && userdata.question_title != '') {
		question_title = userdata.question_title.replace(/"/g, "'");
	}

	if (typeof userdata.question_description != 'undefined' && userdata.question_description != '') {
		question_description = userdata.question_description.replace(/"/g, "'");
	}
	if (typeof userdata.quizz_id != 'undefined' && userdata.quizz_id != '') {
		quizz_id = userdata.quizz_id;
	}
	if (typeof userdata.option1 != 'undefined' && userdata.option1 != '') {
		option1 = userdata.option1.replace(/"/g, "'");
	}
	if (typeof userdata.option2 != 'undefined' && userdata.option2 != '') {
		option2 = userdata.option2.replace(/"/g, "'");
	}
	if (typeof userdata.option3 != 'undefined' && userdata.option3 != '') {
		option3 = userdata.option3.replace(/"/g, "'");
	}
	if (typeof userdata.option4 != 'undefined' && userdata.option4 != '') {
		option4 = userdata.option4.replace(/"/g, "'");
	}
	if (typeof userdata.answer != 'undefined' && userdata.answer != '') {
		answer = userdata.answer.replace(/"/g, "'");
	}

	if (typeof userdata.created_by != 'undefined' && userdata.created_by != '') {
		created_by = userdata.created_by;
	}

	if (typeof userdata.question_image != 'undefined' && userdata.question_image != '') {
		question_image = userdata.question_image;
	}
	if (typeof userdata.points != 'undefined' && userdata.points != '') {
		points = userdata.points;
	}
	if (typeof userdata.answer_description != 'undefined' && userdata.answer_description != '') {
		answer_description = userdata.answer_description.replace(/"/g, "'");
	}
	if (typeof userdata.option1_image != 'undefined' && userdata.option1_image != '') {
		option1_image = userdata.option1_image;
	}
	if (typeof userdata.option2_image != 'undefined' && userdata.option2_image != '') {
		option2_image = userdata.option2_image;
	}
	if (typeof userdata.option3_image != 'undefined' && userdata.option3_image != '') {
		option3_image = userdata.option3_image;
	}
	if (typeof userdata.option4_image != 'undefined' && userdata.option4_image != '') {
		option4_image = userdata.option4_image;
	}

	/* ESTABLISH CONNECTION TO DATABASE */
	pool.getConnection(function (err, connection) {
		if (id != '') {
			var queryinsert =
				'UPDATE quizzes_questions SET question_number="' +
				question_number +
				'",question_title="' +
				question_title +
				'",question_description="' +
				question_description +
				'",option1="' +
				option1 +
				'",option2="' +
				option2 +
				'",option3="' +
				option3 +
				'",option4="' +
				option4 +
				'",answer="' +
				answer +
				'",created_by="' +
				created_by +
				'",quizz_id="' +
				quizz_id +
				'",question_image="' +
				question_image +
				'",points="' +
				points +
				'",answer_description="' +
				answer_description +
				'",option1_image="' +
				option1_image +
				'",option2_image="' +
				option2_image +
				'",option3_image="' +
				option3_image +
				'",option4_image="' +
				option4_image +
				'" where quizzes_questions.id="' +
				id +
				'"';
		} else {
			var queryinsert =
				'INSERT INTO quizzes_questions SET question_number="' +
				question_number +
				'",question_title="' +
				question_title +
				'",question_description="' +
				question_description +
				'",option1="' +
				option1 +
				'",option2="' +
				option2 +
				'",option3="' +
				option3 +
				'",option4="' +
				option4 +
				'",answer="' +
				answer +
				'",created_by="' +
				created_by +
				'",quizz_id="' +
				quizz_id +
				'",question_image="' +
				question_image +
				'",points="' +
				points +
				'",answer_description="' +
				answer_description +
				'",option1_image="' +
				option1_image +
				'",option2_image="' +
				option2_image +
				'",option3_image="' +
				option3_image +
				'",option4_image="' +
				option4_image +
				'",created= NOW()';
		}
		console.log(queryinsert);
		connection.query(queryinsert, function (errinsert, resultinsert) {
			if (!errinsert) {
				resultJson =
					'{"replyCode":"success","replyMsg":"quiz updated successfully","cmd":"quizzes_questions"}\n';
				connection.release();
				callback(200, null, resultJson);
				return;
			} else {
				resultJson = '{"replyCode":"error","replyMsg":"' + errinsert.message + '","cmd":"quizzes_questions"}\n';
				console.log('res-suceess');
				connection.release();
				callback(400, null, resultJson);
				return;
			}
		});
	});
}

/*quizzes_questions details*/
function quizzes_questions_details(userdata, pool, callback) {
	var resultJson = '';
	var id = '';

	if (typeof userdata.id != 'undefined' && userdata.id != '') {
		id = userdata.id;
	}

	console.log('----------');
	console.log(userdata);

	pool.getConnection(function (err, connection) {
		var Catquery = 'SELECT * FROM quizzes_questions WHERE id="' + id + '"';
		console.log('qq', Catquery);
		connection.query(Catquery, function (errinsert, resultinsert) {
			if (!errinsert) {
				resultJson =
					'{"replyCode":"success","replyMsg":"quiz details","data":' + JSON.stringify(resultinsert) + '}\n';
				connection.release();
				callback(200, null, resultJson);
				return;
			} else {
				resultJson =
					'{"replyCode":"error","replyMsg":"' + errinsert.message + '","cmd":"quizzes_questionss"}\n';
				connection.release();
				callback(200, null, resultJson);
				return;
			}
		});
	});
}

// Update status
function update_quizzes_questions_status(userdata, pool, callback) {
	var resultJson = '';
	var id = '';
	var status = '0'; //0-inactive , 1-active , 2- delete
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
		Uquery = 'UPDATE quizzes_questions SET status="' + status + '" WHERE id = ' + id + '';
		connection.query(Uquery, function (errinsert) {
			if (!errinsert) {
				resultJson =
					'{"replyCode":"success","replyMsg":"Status chenged Successfully","cmd":"quizzes_questionss"}';
				connection.release();
				callback(200, null, resultJson);
				return;
			} else {
				resultJson =
					'{"replyCode":"error","replyMsg":"' + errinsert.message + '","cmd":"quizzes_questionss"}\n';
				connection.release();
				callback(200, null, resultJson);
				return;
			}
		});
	});
}

// Projects

function projects_list(userdata, pool, callback) {
	var resultJson = '';

	var keyword = '';
	var start = '0';
	var limit = '';
	var created_by ='';
	var Keyconditoin = ' projects.status !="2"';
	if (typeof userdata.keyword != 'undefined' && userdata.keyword != '') {
		keyword = userdata.keyword;
	}
	if (typeof userdata.start != 'undefined' && userdata.start != '') {
		start = userdata.start;
	}
	if (typeof userdata.limit != 'undefined' && userdata.limit != '') {
		limit = userdata.limit;
	}
	if (typeof userdata.created_by != 'undefined' && userdata.created_by != '') {
		created_by = userdata.created_by;
	}
	pool.getConnection(function (err, connection) {
		if (keyword != '') {
			Keyconditoin += ' AND projects.project_title LIKE  "%' + keyword + '%"';
		}
		
		if (created_by != '') {
			Keyconditoin += ' AND projects.created_by  ="' + created_by + '"';
		}

		if (limit != '') {
			detailsquery = 'SELECT projects.* from projects where ' + Keyconditoin + ' LIMIT ' + start + ', ' + limit + '';
		} else {
			detailsquery = 'SELECT projects.* from projects where ' + Keyconditoin + '';
		}

		console.log('detailsquery', detailsquery);
		var countquery = 'SELECT count(*) as count from projects WHERE ' + Keyconditoin + '';


		connection.query(countquery, function (err, responsecount) {
			if (responsecount[0].count > 0) {
				connection.query(detailsquery, function (errSelDetails, resSelDetails) {
					if (errSelDetails) {
						resultJson = '{"replyCode":"error","replyMsg":"' + errSelDetails.message + '","cmd":"projects_list"}\n';
						connection.release();
						callback(200, null, resultJson);
						return;
					} else {
						resultJson =
							'{"replyCode":"success","replyMsg":"Details found successfully .","data":' +
							JSON.stringify(resSelDetails) +
							',"totalCount":' + responsecount[0].count + ',"cmd":"projects_list"}\n';
						console.log('res-suceess');
						connection.release();
						callback(200, null, resultJson);
						return;
					}
				});
			} else {
				resultJson = '{"replyCode":"success","replyMsg":"projects_list","data":[], "cmd":"projects_list"}\n';
				console.log(resultJson);
				connection.release();
				callback(200, null, resultJson);
				return;
			}
		});


	});
}

function projects_dropdown_list(userdata, pool, callback) {
	var resultJson = '';

	var keyword = '';
	var category_id = '';
	var Keyconditoin = ' projects.status ="1"';
	if (typeof userdata.keyword != 'undefined' && userdata.keyword != '') {
		keyword = userdata.keyword;
	}
	if (typeof userdata.category_id != 'undefined' && userdata.category_id != '') {
		category_id = userdata.category_id;
	}

	pool.getConnection(function (err, connection) {
		if (keyword != '') {
			Keyconditoin += ' AND projects.project_title LIKE  "%' + keyword + '%"';
		}

		if (category_id != '') {
			Keyconditoin += ' AND projects.category_id = "' + category_id + '"';
		}

		detailsquery = 'SELECT projects.* from projects where ' + Keyconditoin + '';
		console.log('detailsquery', detailsquery);
		connection.query(detailsquery, function (errSelDetails, resSelDetails) {
			if (errSelDetails) {
				resultJson = '{"replyCode":"error","replyMsg":"' + errSelDetails.message + '","cmd":"projects_list"}\n';
				connection.release();
				callback(200, null, resultJson);
				return;
			} else {
				resultJson =
					'{"replyCode":"success","replyMsg":"Details found successfully .","data":' +
					JSON.stringify(resSelDetails) +
					',"cmd":"projects_list"}\n';
				console.log('res-suceess');
				connection.release();
				callback(200, null, resultJson);
				return;
			}
		});
	});
}

function add_project(userdata, pool, callback) {
	var resultJson = '';
	var project_title = '';
	var description = '';
	var link_url = '';
	var video = '';
	var earn_points = '0';
	var created_by = '';
	var id = '';
	var category_id = '';
	var image = '';

	if (typeof userdata.id != 'undefined' && userdata.id != '') {
		id = userdata.id;
	}

	if (typeof userdata.project_title != 'undefined' && userdata.project_title != '') {
		project_title = userdata.project_title;
	}

	if (typeof userdata.description != 'undefined' && userdata.description != '') {
		description = userdata.description.replace(/"/g, "'");
	}
	if (typeof userdata.link_url != 'undefined' && userdata.link_url != '') {
		link_url = userdata.link_url;
	}
	if (typeof userdata.earn_points != 'undefined' && userdata.earn_points != '') {
		earn_points = userdata.earn_points;
	}
	if (typeof userdata.video != 'undefined' && userdata.video != '') {
		video = userdata.video;
	}

	if (typeof userdata.created_by != 'undefined' && userdata.created_by != '') {
		created_by = userdata.created_by;
	}
	if (typeof userdata.category_id != 'undefined' && userdata.category_id != '') {
		category_id = userdata.category_id;
	}
	if (typeof userdata.image != 'undefined' && userdata.image != '') {
		image = userdata.image;
	}

	/* ESTABLISH CONNECTION TO DATABASE */
	pool.getConnection(function (err, connection) {
		if (id != '') {
			var queryinsert =
				'UPDATE projects SET project_title="' +
				project_title +
				'",description="' +
				description +
				'",link_url="' +
				link_url +
				'",earn_points="' +
				earn_points +
				'",created_by="' +
				created_by +
				'",video="' +
				video +
				'",category_id="' +
				category_id +
				'",image="' +
				image +
				'" where projects.id="' +
				id +
				'"';
		} else {
			var queryinsert =
				'INSERT INTO projects SET project_title="' +
				project_title +
				'",description="' +
				description +
				'",link_url="' +
				link_url +
				'",earn_points="' +
				earn_points +
				'",created_by="' +
				created_by +
				'",video="' +
				video +
				'",category_id="' +
				category_id +
				'",image="' +
				image +
				'",created= NOW()';
		}
		console.log(queryinsert);
		connection.query(queryinsert, function (errinsert, resultinsert) {
			if (!errinsert) {
				resultJson = '{"replyCode":"success","replyMsg":"Project updated successfully","cmd":"projects"}\n';
				connection.release();
				callback(200, null, resultJson);
				return;
			} else {
				resultJson = '{"replyCode":"error","replyMsg":"' + errinsert.message + '","cmd":"projects"}\n';
				console.log('res-suceess');
				connection.release();
				callback(400, null, resultJson);
				return;
			}
		});
	});
}

/*projects details*/
function project_details(userdata, pool, callback) {
	var resultJson = '';
	var id = '';
	var refrence_id = '0';
	if (typeof userdata.id != 'undefined' && userdata.id != '') {
		id = userdata.id;
	}

	if (typeof userdata.refrence_id != 'undefined' && userdata.refrence_id != '') {
		refrence_id = userdata.refrence_id;
	}

	console.log('----------');
	console.log(userdata);

	pool.getConnection(function (err, connection) {
		var Catquery =
			'SELECT projects.*,(SELECT classes.class_summary_pdf from classes where classes.id="' +
			refrence_id +
			'") as class_summary_pdf FROM projects  WHERE projects.id="' +
			id +
			'"';
		console.log('qq', Catquery);
		connection.query(Catquery, function (errinsert, resultinsert) {
			if (!errinsert) {
				resultJson =
					'{"replyCode":"success","replyMsg":"Project details","data":' +
					JSON.stringify(resultinsert) +
					'}\n';
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

// Update status
function update_projects_status(userdata, pool, callback) {
	var resultJson = '';
	var id = '';
	var status = '0'; //0-inactive , 1-active , 2- delete
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
		Uquery = 'UPDATE projects SET status="' + status + '" WHERE id = ' + id + '';
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


// lessons

function chapter_lessons_list(userdata, pool, callback) {
	var resultJson = '';
	var course_chapter_id = '';
	var keyword = '';
	var start = '0';
	var limit = '';
	var Keyconditoin = ' chapter_lessons.status !="2"';
	if (typeof userdata.keyword != 'undefined' && userdata.keyword != '') {
		keyword = userdata.keyword;
	}
	if (typeof userdata.course_chapter_id != 'undefined' && userdata.course_chapter_id != '') {
		course_chapter_id = userdata.course_chapter_id;
	}
	if (typeof userdata.start != 'undefined' && userdata.start != '') {
		start = userdata.start;
	}
	if (typeof userdata.limit != 'undefined' && userdata.limit != '') {
		limit = userdata.limit;
	}
	pool.getConnection(function (err, connection) {
		if (keyword != '') {
			Keyconditoin += ' AND chapter_lessons.lesson_title LIKE  "%' + keyword + '%"';
		}
		if (course_chapter_id != '') {
			Keyconditoin += ' AND chapter_lessons.course_chapter_id="' + course_chapter_id + '"';
		}
		if (limit != '') {
			detailsquery = 'SELECT chapter_lessons.* from chapter_lessons where ' + Keyconditoin + '  LIMIT ' + start + ', ' + limit + '';
		} else {
			detailsquery = 'SELECT chapter_lessons.* from chapter_lessons where ' + Keyconditoin + '';
		}

		console.log('detailsquery', detailsquery);

		var countquery = 'SELECT count(*) as count from chapter_lessons WHERE ' + Keyconditoin + '';


		connection.query(countquery, function (err, responsecount) {
			if (responsecount[0].count > 0) {
				connection.query(detailsquery, function (errSelDetails, resSelDetails) {
					if (errSelDetails) {
						resultJson =
							'{"replyCode":"error","replyMsg":"' + errSelDetails.message + '","cmd":"course_chapter"}\n';
						connection.release();
						callback(200, null, resultJson);
						return;
					} else {
						resultJson =
							'{"replyCode":"success","replyMsg":"Details found successfully .","data":' +
							JSON.stringify(resSelDetails) +
							',"totalCount":' + responsecount[0].count + ',"cmd":"course_chapter"}\n';
						console.log('res-suceess');
						connection.release();
						callback(200, null, resultJson);
						return;
					}
				});
			} else {
				resultJson = '{"replyCode":"success","replyMsg":"course_chapter","data":[], "cmd":"course_chapter"}\n';
				console.log(resultJson);
				connection.release();
				callback(200, null, resultJson);
				return;
			}
		});


	});
}

function add_chapter_lesson(userdata, pool, callback) {
	var resultJson = '';
	var course_chapter_id = '';
	var lesson_title = '';
	var lesson_description = '';
	var type = ''; //1-class,2-project,3-quiz
	var refrence_id = '';
	var category_id = '';
	var created_by = '';
	var s_no = '';

	var start_time = '';
	var end_time = '';
	var day = '';
	var featured = '';
	var requirements = '';

	var id = '';

	if (typeof userdata.id != 'undefined' && userdata.id != '') {
		id = userdata.id;
	}

	if (typeof userdata.lesson_title != 'undefined' && userdata.lesson_title != '') {
		lesson_title = userdata.lesson_title.replace(/"/g, "'");
	}
	if (typeof userdata.course_chapter_id != 'undefined' && userdata.course_chapter_id != '') {
		course_chapter_id = userdata.course_chapter_id;
	}

	if (typeof userdata.lesson_description != 'undefined' && userdata.lesson_description != '') {
		lesson_description = userdata.lesson_description.replace(/"/g, "'");
	}
	if (typeof userdata.type != 'undefined' && userdata.type != '') {
		type = userdata.type;
	}
	if (typeof userdata.refrence_id != 'undefined' && userdata.refrence_id != '') {
		refrence_id = userdata.refrence_id;
	}

	if (typeof userdata.created_by != 'undefined' && userdata.created_by != '') {
		created_by = userdata.created_by;
	}
	if (typeof userdata.category_id != 'undefined' && userdata.category_id != '') {
		category_id = userdata.category_id;
	}

	if (typeof userdata.s_no != 'undefined' && userdata.s_no != '') {
		s_no = userdata.s_no;
	}

	if (typeof userdata.start_time != 'undefined' && userdata.start_time != '') {
		start_time = userdata.start_time;
	}

	if (typeof userdata.end_time != 'undefined' && userdata.end_time != '') {
		end_time = userdata.end_time;
	}

	if (typeof userdata.day != 'undefined' && userdata.day != '') {
		day = userdata.day;
	}

	if (typeof userdata.featured != 'undefined' && userdata.featured != '') {
		featured = userdata.featured;
	}

	if (typeof userdata.requirements != 'undefined' && userdata.requirements != '') {
		requirements = userdata.requirements.replace(/"/g, "'");;
	}

	/* ESTABLISH CONNECTION TO DATABASE */
	pool.getConnection(function (err, connection) {
		if (id != '') {
			var queryinsert =
				'UPDATE chapter_lessons SET course_chapter_id="' +
				course_chapter_id +
				'",lesson_title="' +
				lesson_title +
				'",lesson_description="' +
				lesson_description +
				'",type="' +
				type +
				'",refrence_id="' +
				refrence_id +
				'",created_by="' +
				created_by +
				'",s_no="' +
				s_no +
				'",category_id="' +
				category_id +
				'",start_time="' +
				start_time +
				'",end_time="' +
				end_time +
				'",day="' +
				day +
				'",featured="' +
				featured +
				'",requirements="' +
				requirements +
				'" where chapter_lessons.id="' +
				id +
				'"';
		} else {
			var queryinsert =
				'INSERT INTO chapter_lessons SET course_chapter_id="' +
				course_chapter_id +
				'",lesson_title="' +
				lesson_title +
				'",lesson_description="' +
				lesson_description +
				'",type="' +
				type +
				'",refrence_id="' +
				refrence_id +
				'",created_by="' +
				created_by +
				'",s_no="' +
				s_no +
				'",category_id="' +
				category_id +
				'",start_time="' +
				start_time +
				'",end_time="' +
				end_time +
				'",day="' +
				day +
				'",featured="' +
				featured +
				'",requirements="' +
				requirements +
				'",created= NOW()';
		}
		console.log(queryinsert);
		connection.query(queryinsert, function (errinsert, resultinsert) {
			if (!errinsert) {
				resultJson =
					'{"replyCode":"success","replyMsg":"Lesson updated successfully","cmd":"chapter_lessons"}\n';
				connection.release();
				callback(200, null, resultJson);
				return;
			} else {
				resultJson = '{"replyCode":"error","replyMsg":"' + errinsert.message + '","cmd":"chapter_lessons"}\n';
				console.log('res-suceess');
				connection.release();
				callback(400, null, resultJson);
				return;
			}
		});
	});
}

/*chapter_lessons details*/
function chapter_lesson_details(userdata, pool, callback) {
	var resultJson = '';
	var id = '';

	if (typeof userdata.id != 'undefined' && userdata.id != '') {
		id = userdata.id;
	}

	console.log('----------');
	console.log(userdata);

	pool.getConnection(function (err, connection) {
		var Catquery = 'SELECT chapter_lessons.*,course_chapters.course_id FROM chapter_lessons  LEFT JOIN course_chapters as course_chapters ON course_chapters.id = chapter_lessons.course_chapter_id WHERE chapter_lessons.id="' + id + '"';
		console.log('qq', Catquery);
		connection.query(Catquery, function (errinsert, resultinsert) {
			if (!errinsert) {
				resultJson =
					'{"replyCode":"success","replyMsg":"Project details","data":' +
					JSON.stringify(resultinsert) +
					'}\n';
				connection.release();
				callback(200, null, resultJson);
				return;
			} else {
				resultJson = '{"replyCode":"error","replyMsg":"' + errinsert.message + '","cmd":"chapter_lessonss"}\n';
				connection.release();
				callback(200, null, resultJson);
				return;
			}
		});
	});
}

/*course_chapters details*/
function view_chapter_lessons_info(userdata, pool, callback) {
	var resultJson = '';
	var course_chapter_id = '';

	if (typeof userdata.course_chapter_id != 'undefined' && userdata.course_chapter_id != '') {
		course_chapter_id = userdata.course_chapter_id;
	}

	console.log('----------');
	console.log(userdata);

	pool.getConnection(function (err, connection) {
		var Catquery = 'SELECT * FROM course_chapters WHERE id="' + course_chapter_id + '"';
		console.log('qq', Catquery);
		connection.query(Catquery, function (errinsert, resPro) {
			if (!errinsert) {
				if (resPro.length > 0) {
					var Detquery =
						'SELECT * FROM chapter_lessons WHERE course_chapter_id="' +
						course_chapter_id +
						'" AND status="1"';
					console.log('qq', Detquery);
					connection.query(Detquery, function (errinsertDet, resProDet) {
						if (!errinsertDet) {
							resPro.lessons = resProDet;
							var i = 0;
							async.eachSeries(
								resProDet,
								function (rec2, loop2) {
									var refrence_id = rec2.refrence_id;
									var type = rec2.type; //1-class,2-project,3-quiz
									console.log('refrence_id', refrence_id);
									if (type == '3') {
										lessonConQuery =
											'SELECT quizzes.* from quizzes where quizzes.id="' + refrence_id + '"';
									} else if (type == '2') {
										lessonConQuery =
											'SELECT projects.* from projects where projects.id="' + refrence_id + '"';
									} else {
										lessonConQuery =
											'SELECT classes.* from classes where classes.id="' + refrence_id + '"';
									}

									console.log('lessonConQuery', lessonConQuery);
									connection.query(lessonConQuery, function (errContent, resContent) {
										if (errContent) {
											console.log('errSelpiMG', errContent);

											loop2();
										} else {
											resProDet[i].content = resContent;
											loop2();
										}
										i = i + 1;
									});
								},
								function (errSelPro) {
									if (errSelPro) {
										console.log('errSelPro', errSelPro);
										resultJson =
											'{"replyCode":"error","replyMsg":"' +
											errSelPro.message +
											'","cmd":"view_chapter_lessons_info"}\n';
										connection.release();
										callback(200, null, resultJson);
										return;
									} else {
										resultJson =
											'{"replyCode":"success","replyMsg":"Details found successfully .","data":' +
											JSON.stringify(resPro) +
											',"lessons":' +
											JSON.stringify(resProDet) +
											',"cmd":"view_chapter_lessons_info"}\n';
										console.log('res-suceess');
										connection.release();
										callback(200, null, resultJson);
										return;
									}
								}
							);
						} else {
							resultJson =
								'{"replyCode":"error","replyMsg":"' +
								errinsertDet.message +
								'","cmd":"view_chapter_lessons_info"}\n';
							connection.release();
							callback(200, null, resultJson);
							return;
						}
					});
				} else {
					resultJson =
						'{"replyCode":"success","replyMsg":"No Record found.","data":[], "cmd":"view_chapter_lessons_info"}\n';
					console.log('res-suceess');
					connection.release();
					callback(200, null, resultJson);
					return;
				}
			} else {
				resultJson =
					'{"replyCode":"error","replyMsg":"' + errinsert.message + '","cmd":"view_chapter_lessons_info"}\n';
				connection.release();
				callback(200, null, resultJson);
				return;
			}
		});
	});
}

// Update status
function update_chapter_lessons_status(userdata, pool, callback) {
	var resultJson = '';
	var id = '';
	var status = '0'; //0-inactive , 1-active , 2- delete
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
		Uquery = 'UPDATE chapter_lessons SET status="' + status + '" WHERE id = ' + id + '';
		connection.query(Uquery, function (errinsert) {
			if (!errinsert) {
				resultJson =
					'{"replyCode":"success","replyMsg":"Status chenged Successfully","cmd":"chapter_lessonss"}';
				connection.release();
				callback(200, null, resultJson);
				return;
			} else {
				resultJson = '{"replyCode":"error","replyMsg":"' + errinsert.message + '","cmd":"chapter_lessonss"}\n';
				connection.release();
				callback(200, null, resultJson);
				return;
			}
		});
	});
}


//update site settings

function update_site_settings(userdata, pool, callback) {
	var resultJson = '';
	var support_email = '';
	var support_contact = ''; 
	var watsapp_number = ''; 
	var fb_link = '';
	var twitter_link = '';
	var insta_link = '';
	var linkedin_link = '';
	var opensea_link = '';
	var wechat_link = '';
	var line_link = '';
	var glassdoor_link = '';
	var indeed_link = '';
	var video_link = '';
	var google_map_link = '';
	var address = '';
	var copyright_text = '';
	var logo = '';
	var footer_logo = '';
	var fevicon_image = '';
	var inner_page_banner = '';
	var id = '';

	var meta_title='';
	var meta_keyword='';
	var meta_description='';
	var commission_class='';
	var commission_course='';
// 	var access_token_time='';
	var access_token='';

	
	if (typeof userdata.commission_class != 'undefined' && userdata.commission_class != '') {
		commission_class = userdata.commission_class;
	}
	if (typeof userdata.commission_course != 'undefined' && userdata.commission_course != '' &&  userdata.commission_course != '0') {
		commission_course = userdata.commission_course;
	}
// 	if (typeof userdata.access_token_time != 'undefined' && userdata.access_token_time != '') {
// 		access_token_time = userdata.access_token_time;
// 	}
//	if (typeof userdata.access_token != 'undefined' && userdata.access_token != '') {
//		access_token = userdata.access_token;
//	}
	if (typeof userdata.wechat_link != 'undefined' && userdata.wechat_link != '') {
		wechat_link = userdata.wechat_link;
	}
	if (typeof userdata.line_link != 'undefined' && userdata.line_link != '') {
		line_link = userdata.line_link;
	}
	if (typeof userdata.glassdoor_link != 'undefined' && userdata.glassdoor_link != '') {
		glassdoor_link = userdata.glassdoor_link;
	}
	if (typeof userdata.indeed_link != 'undefined' && userdata.indeed_link != '') {
		indeed_link = userdata.indeed_link;
	}
	if (typeof userdata.meta_title != 'undefined' && userdata.meta_title != '') {
		meta_title = userdata.meta_title;
	}
	if (typeof userdata.meta_keyword != 'undefined' && userdata.meta_keyword != '') {
		meta_keyword = userdata.meta_keyword;
	}
	if (typeof userdata.meta_description != 'undefined' && userdata.meta_description != '') {
		meta_description = userdata.meta_description;
	}

	if (typeof userdata.id != 'undefined' && userdata.id != '') {
		id = userdata.id;
	}

	if (typeof userdata.fb_link != 'undefined' && userdata.fb_link != '') {
		fb_link = userdata.fb_link;
	}
	if (typeof userdata.support_contact != 'undefined' && userdata.support_contact != '') {
		support_contact = userdata.support_contact;
	}
	if (typeof userdata.watsapp_number != 'undefined' && userdata.watsapp_number != '') {
		watsapp_number = userdata.watsapp_number;
	}
	
	if (typeof userdata.support_email != 'undefined' && userdata.support_email != '') {
		support_email = userdata.support_email;
	}
	if (typeof userdata.twitter_link != 'undefined' && userdata.twitter_link != '') {
		twitter_link = userdata.twitter_link;
	}
	
	if (typeof userdata.linkedin_link != 'undefined' && userdata.linkedin_link != '') {
		linkedin_link = userdata.linkedin_link;
	}
	if (typeof userdata.opensea_link != 'undefined' && userdata.opensea_link != '') {
		opensea_link = userdata.opensea_link;
	}
	
	if (typeof userdata.video_link != 'undefined' && userdata.video_link != '') {
		video_link = userdata.video_link;
	}
	if (typeof userdata.google_map_link != 'undefined' && userdata.google_map_link != '') {
		google_map_link = userdata.google_map_link;
	}

	if (typeof userdata.address != 'undefined' && userdata.address != '') {
		address = userdata.address;
	}
	if (typeof userdata.copyright_text != 'undefined' && userdata.copyright_text != '') {
		copyright_text = userdata.copyright_text;
	}

	if (typeof userdata.insta_link != 'undefined' && userdata.insta_link != '') {
		insta_link = userdata.insta_link;
	}
	if (typeof userdata.logo != 'undefined' && userdata.logo != '') {
		logo = userdata.logo;
	}
	if (typeof userdata.footer_logo != 'undefined' && userdata.footer_logo != '') {
		footer_logo = userdata.footer_logo;
	}
	if (typeof userdata.fevicon_image != 'undefined' && userdata.fevicon_image != '') {
		fevicon_image = userdata.fevicon_image;
	}
	if (typeof userdata.inner_page_banner != 'undefined' && userdata.inner_page_banner != '') {
		inner_page_banner = userdata.inner_page_banner;
	}

	/* ESTABLISH CONNECTION TO DATABASE */
	pool.getConnection(function (err, connection) {
		var queryinsert ='UPDATE site_settings SET support_contact="' + support_contact + '",watsapp_number="'+watsapp_number+'",fb_link="' + fb_link + '",support_email="'+support_email+'",twitter_link="'+twitter_link+'",linkedin_link="'+linkedin_link+'",opensea_link="'+opensea_link+'",video_link="'+video_link+'",google_map_link="'+google_map_link+'",address="'+address+'",insta_link="'+insta_link+'",meta_title="'+meta_title+'",meta_keyword="'+meta_keyword+'",meta_description="'+meta_description+'",copyright_text="'+copyright_text+'",logo="'+logo+'",footer_logo="'+footer_logo+'",fevicon_image="'+fevicon_image+'",inner_page_banner="'+inner_page_banner+'",wechat_link="'+wechat_link+'",line_link="'+line_link+'",glassdoor_link="'+glassdoor_link+'",indeed_link="'+indeed_link+'",commission_course="'+commission_course+'",commission_class="'+commission_class+'" where site_settings.id="' + id + '"';//,access_token_time="'+access_token_time+'"
		
		console.log(queryinsert);
		connection.query(queryinsert, function (errinsert, resultinsert) {
			if (!errinsert) {
				resultJson = '{"replyCode":"success","replyMsg":"Setting changes have been successful","cmd":"product"}\n';
				connection.release();
				callback(200, null, resultJson);
				return;
			} else {
				resultJson = '{"replyCode":"error","replyMsg":"' + errinsert.message + '","cmd":"product"}\n';
				console.log('res-suceess');
				connection.release();
				callback(400, null, resultJson);
				return;
			}
		});
	});
}
// function update_site_settings_access_token(userdata, pool, callback) {

// 	var access_token_time='';
// 	var access_token='';

	
	
// 	if (typeof userdata.access_token_time != 'undefined' && userdata.access_token_time != '') {
// 		access_token_time = userdata.access_token_time;
// 	}
// 	if (typeof userdata.access_token != 'undefined' && userdata.access_token != '') {
// 		access_token = userdata.access_token;
// 	}


// 	/* ESTABLISH CONNECTION TO DATABASE */
// 	pool.getConnection(function (err, connection) {
// 		var queryinsert ='UPDATE site_settings SET access_token="'+access_token+'",access_token_time="'+access_token_time+'", where site_settings.id="' + id + '"';
		
// 		console.log(queryinsert);
// 		connection.query(queryinsert, function (errinsert, resultinsert) {
// 			if (!errinsert) {
// 				resultJson = '{"replyCode":"success","replyMsg":"Setting changes have been successful","cmd":"product"}\n';
// 				connection.release();
// 				callback(200, null, resultJson);
// 				return;
// 			} else {
// 				resultJson = '{"replyCode":"error","replyMsg":"' + errinsert.message + '","cmd":"product"}\n';
// 				console.log('res-suceess');
// 				connection.release();
// 				callback(400, null, resultJson);
// 				return;
// 			}
// 		});
// 	});
// }

/* get site settings */
function get_site_settings(userdata, pool, callback) {
	var resultJson = '';
	var Cquery = '';
	var id = '';

	if (typeof userdata.id != 'undefined' && userdata.id != '') {
		id = userdata.id;
	}

	pool.getConnection(function (err, connection) {
		Cquery = 'SELECT site_settings.* FROM site_settings WHERE site_settings.id = ' + id + '';

		console.log(Cquery);
		connection.query(Cquery, function (err, ordData) {
			if (err) {
				resultJson = '{"replyCode":"error","replyMsg":"' + err.message + '","cmd":"site_settings"}\n';
				connection.release();
				callback(200, null, resultJson);
				return;
			} else {
				resultJson =
					'{"replyCode":"success","replyMsg":"site settings Details","data":' +
					JSON.stringify(ordData[0]) +
					',"cmd":"site_settings"}\n';
				console.log('res-suceess');
				connection.release();
				callback(200, null, resultJson);
				return;
			}
		});
	});
}


//Content Blolck

function content_blocks_list(userdata, pool, callback) {
	var resultJson = '';
	var start = '0';
	var limit = '20';
	var limitStr ='';
	var keyword='';
	var Keyconditoin='';
    if (typeof userdata.keyword != 'undefined' && userdata.keyword != '') {
		keyword = userdata.keyword;
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
	
	if(keyword !=''){
		Keyconditoin +='AND content_blocks.title LIKE "%'+keyword+'%"';
	}
	pool.getConnection(function (err, connection) {
		var Catquery = 'SELECT * FROM content_blocks WHERE status !="2" '+Keyconditoin+' ORDER BY created ASC '+limitStr+'';
		connection.query(Catquery, function (err, res) {
			if(err){
				resultJson = '{"replyCode":"error","replyMsg":"' + err.message + '","cmd":"content_blocks"}\n';
				connection.release();
				callback(400, null, resultJson);
				return;
			}else{
				if (res.length > 0) {
					resultJson = '{"replyCode":"success","replyMsg":"content_blocks list","data":' + JSON.stringify(res) + ', "cmd":"content_blocks"}\n';
					connection.release();
					callback(200, null, resultJson);
					return;
				} else {
					resultJson = '{"replyCode":"success","replyMsg":"content_blocks","data":[], "cmd":"content_blocks"}\n';
					console.log(resultJson);
					connection.release();
					callback(200, null, resultJson);
					return;
				}
			}
		});
		
	});
}

function add_content_blocks(userdata, pool, callback) {
	var resultJson = '';
	var title = '';
	var content = '';
	var position = '';
	var video_url = '';
	var id = '';

	if (typeof userdata.id != 'undefined' && userdata.id != '') {
		id = userdata.id;
	}
	if (typeof userdata.title != 'undefined' && userdata.title != '') {
		title = userdata.title;
	}

	if (typeof userdata.content != 'undefined' && userdata.content != '') {
		//content = userdata.content;
		content = userdata.content.replace(/"/g, "'");
	}
	if (typeof userdata.position != 'undefined' && userdata.position != '') {
		position = userdata.position;
	}
	if (typeof userdata.video_url != 'undefined' && userdata.video_url != '') {
		video_url = userdata.video_url;
	}

	/* ESTABLISH CONNECTION TO DATABASE */
	pool.getConnection(function (err, connection) {
		if (id != '') {
			var queryinsert = 'UPDATE content_blocks SET title="' + title + '",content="' + content + '",position="'+position+'",video_url="'+video_url+'" where content_blocks.id="' + id + '"';
		} else {
			var queryinsert = 'INSERT INTO content_blocks SET title="' + title + '",content="' + content + '",position="'+position+'",video_url="'+video_url+'",created= NOW()';
		}
		// console.log(queryinsert);
		connection.query(queryinsert, function (errinsert, resultinsert) {
			if (!errinsert) {
				resultJson = '{"replyCode":"success","replyMsg":"Faq updated successfully","cmd":"content_blocks"}\n';
				connection.release();
				callback(200, null, resultJson);
				return;
			} else {
				resultJson = '{"replyCode":"error","replyMsg":"' + errinsert.message + '","cmd":"content_blocks"}\n';
				// console.log(resultJson);
				connection.release();
				callback(400, null, resultJson);
				return;
			}
		});
	});
}

/*content_blocks details*/
function content_blocks_details(userdata, pool, callback) {
	var resultJson = '';
	var id = '';

	if (typeof userdata.id != 'undefined' && userdata.id != '') {
		id = userdata.id;
	}
	pool.getConnection(function (err, connection) {
		var Catquery = 'SELECT * FROM content_blocks WHERE id="' + id + '"';
		// console.log('qq',Catquery)
		connection.query(Catquery, function (errinsert, resultinsert) {
			if (!errinsert) {
				if (resultinsert.length > 0) {
					var res = resultinsert[0];
				} else {
					var res = [];
				}
				resultJson = '{"replyCode":"success","replyMsg":"content_blocks details","data":' + JSON.stringify(res) + '}\n';
				connection.release();
				callback(200, null, resultJson);
				return;
			} else {
				resultJson = '{"replyCode":"error","replyMsg":"' + errinsert.message + '","cmd":"content_blocks"}\n';
				connection.release();
				callback(200, null, resultJson);
				return;
			}
		});
	});
}

// Update status
function update_content_blocks_status(userdata, pool, callback) {
	var resultJson = '';
	var id = '';
	var status = '0'; //0-inactive , 1-active , 2- delete
	var Uquery = '';
	if (typeof userdata.id != 'undefined' && userdata.id != '') {
		id = userdata.id;
	}
	if (typeof userdata.status != 'undefined' && userdata.status != '') {
		status = userdata.status;
	}
	pool.getConnection(function (err, connection) {
		Uquery = 'UPDATE content_blocks SET status="' + status + '" WHERE id = ' + id + '';
		connection.query(Uquery, function (errinsert) {
			if (!errinsert) {
				resultJson = '{"replyCode":"success","replyMsg":"Status chenged Successfully","cmd":"content_blocks"}';
				connection.release();
				callback(200, null, resultJson);
				return;
			} else {
				resultJson = '{"replyCode":"error","replyMsg":"' + errinsert.message + '","cmd":"content_blocks"}\n';
				connection.release();
				callback(200, null, resultJson);
				return;
			}
		});
	});
}

// Update status
function generate_teacher_slots(userdata, pool, callback) {
	var resultJson = '';
	var user_id = '';
	
	var Uquery = '';
	if (typeof userdata.user_id != 'undefined' && userdata.user_id != '') {
		user_id = userdata.user_id;
	}
	
	pool.getConnection(function (err, connection) {
		var checkShecduleDate = 'SELECT * from demo_class_settings where id = "2" ';
		console.log(checkShecduleDate);
		connection.query(checkShecduleDate, function (errSchedule, resultsSchedule) {
			if (errSchedule) {
				resultJson='{"replyCode":"error","replyMsg":"'+errSchedule.message+'","cmd":"generate_teacher_slots"}\n';
				connection.release();
				callback(200, null, resultJson);
				return;
			} else {
				console.log('resultsSchedule', resultsSchedule[0]);
				console.log('Curdate', Curdate);
				var teacher_id = user_id;
				var NewSchDate = '';
				for (var i = 0; i <= 29; i++) {
					//repeating code here:
					var myDate = new Date();
					myDate.setDate(myDate.getDate() + i);
					NewSchDate=myDate.getFullYear()+"-"+parseInt(myDate.getMonth()+1)+"-"+myDate.getDate();

					var tday = weekday[myDate.getDay()];
					tday = tday.toLowerCase();
					tday = tday.toString(); //console.log(tday);
					console.log(NewSchDate);
					if (resultsSchedule[0][tday] == '1') {
						console.log('yes');
						var datequery='INSERT INTO user_time_schedule SET teacher_id="'+teacher_id+'",schedule_date = "'+NewSchDate+'", available = "1",holiday = "0",status="1",created= NOW()';
					} else {
						console.log('no');
						var datequery='INSERT INTO user_time_schedule SET teacher_id="'+teacher_id+'",schedule_date = "'+NewSchDate+'", available = "0",holiday = "1",status="1",created= NOW()';
					}
					connection.query(datequery, function (errinsertDAte, resultinsertDate) {
						if (!errinsertDAte) {
							var dateId = resultinsertDate.insertId;
							// console.log('--time_from---',resultsSchedule[0].time_from);
							// console.log('--time_to---',resultsSchedule[0].time_to);
							// console.log('--class_duration---',resultsSchedule[0].class_duration);
							var startTime = resultsSchedule[0].time_from;
							var endTime = resultsSchedule[0].time_to;
							var interval = resultsSchedule[0].class_duration;
							while (startTime <= endTime) {
								startTimeTo = startTime;
								startTime = addMinutes(startTime, interval);
								endTimeTo = addMinutes(startTimeTo, interval);
								console.log('Time-slot-startTimeTo', startTimeTo);
								console.log('Time-slot-endTimeTo', endTimeTo);

								console.log('Tdate', NewSchDate);
								var TimeInsertquery =
									'INSERT INTO user_time_schedule_slots SET schedule_id="' +
									dateId +
									'",teacher_id="' +
									teacher_id +
									'",time_from="' +
									startTimeTo +
									'",time_to="' +
									endTimeTo +
									'",available = "0",holiday = "0",status="1",created= NOW()';
								connection.query(TimeInsertquery);
							}
						} else {
							resultJson =
								'{"replyCode":"error","replyMsg":"' +
								errinsertDAte.message +
								'","cmd":"sign_up"}\n';
							connection.release();
							callback(200, null, resultJson);
							return;
						}
					});
				}
				resultJson = '{"replyCode":"success","replyMsg":"Registered successfully"}\n';
				connection.release();
				callback(200, null, resultJson);
				return;
			}
		})
	});
}


function info_demo_class_settings(userdata, pool, callback) {
	var resultJson = '';
	var Cquery = '';
	var res = '';
	var id = '1'; //1-demo class,2-techer class

	if (typeof userdata.id != 'undefined' && userdata.id != '') {
		id = userdata.id;
	}

	console.log('Curdate--', Curdate);
	pool.getConnection(function (err, connection) {
		Cquery = 'SELECT demo_class_settings.* FROM demo_class_settings WHERE demo_class_settings.id = "' + id + '"';

		console.log(Cquery);
		connection.query(Cquery, function (err, ordData) {
			if (err) {
				resultJson = '{"replyCode":"error","replyMsg":"' + err.message + '","cmd":"demo_class_settings"}\n';
				connection.release();
				callback(200, null, resultJson);
				return;
			} else {
				if (ordData.length > 0) {
					res = ordData[0];
				} else {
					res = [];
				}
				resultJson =
					'{"replyCode":"success","replyMsg":"demo_class_settings","data":' +
					JSON.stringify(res) +
					',"cmd":"demo_class_settings"}\n';
				console.log('res-suceess');
				connection.release();
				callback(200, null, resultJson);
				return;
			}
		});
	});
}
//update demo class shedule

function update_demo_class_settings(userdata, pool, callback) {
	var resultJson = '';
	var id = '1'; //1-demo class,2-techer class

	var time_from = '00:00:00';
	var time_to = '00:00:00';
	var monday = '1';
	var tuesday = '1';
	var wednesday = '1';
	var thursday = '1';
	var friday = '1';
	var saturday = '1';
	var sunday = '1';
	var class_duration = '30';
	var slots_per_week = '1';
	var demo_class_payout = '0.00';
	var paid_class_payout = '0.00';
	var class_penelaty = '0.00';
	var minimum_amount = '0.00';
	var min_slots_per_month = '1';
	var conversion_amount = '0.00';
	var project_feedback = '0.00';
	var teacher_feedback = '0.00';
	var shipping_days = '0';
	var teacher_demo_url = '';

	var Uquery = '';

	if (typeof userdata.id != 'undefined' && userdata.id != '') {
		id = userdata.id;
	}
	if (typeof userdata.time_from != 'undefined' && userdata.time_from != '') {
		time_from = userdata.time_from;
	}
	if (typeof userdata.time_to != 'undefined' && userdata.time_to != '') {
		time_to = userdata.time_to;
	}
	if (typeof userdata.monday != 'undefined' && userdata.monday != '') {
		monday = userdata.monday;
	}

	if (typeof userdata.tuesday != 'undefined' && userdata.tuesday != '') {
		tuesday = userdata.tuesday;
	}

	if (typeof userdata.wednesday != 'undefined' && userdata.wednesday != '') {
		wednesday = userdata.wednesday;
	}

	if (typeof userdata.thursday != 'undefined' && userdata.thursday != '') {
		thursday = userdata.thursday;
	}

	if (typeof userdata.friday != 'undefined' && userdata.friday != '') {
		friday = userdata.friday;
	}

	if (typeof userdata.saturday != 'undefined' && userdata.saturday != '') {
		saturday = userdata.saturday;
	}
	if (typeof userdata.sunday != 'undefined' && userdata.sunday != '') {
		sunday = userdata.sunday;
	}
	if (typeof userdata.class_duration != 'undefined' && userdata.class_duration != '') {
		class_duration = userdata.class_duration;
	}
	if (typeof userdata.slots_per_week != 'undefined' && userdata.slots_per_week != '') {
		slots_per_week = userdata.slots_per_week;
	}
	if (typeof userdata.demo_class_payout != 'undefined' && userdata.demo_class_payout != '') {
		demo_class_payout = userdata.demo_class_payout;
	}
	if (typeof userdata.paid_class_payout != 'undefined' && userdata.paid_class_payout != '') {
		paid_class_payout = userdata.paid_class_payout;
	}
	if (typeof userdata.class_penelaty != 'undefined' && userdata.class_penelaty != '') {
		class_penelaty = userdata.class_penelaty;
	}
	if (typeof userdata.minimum_amount != 'undefined' && userdata.minimum_amount != '') {
		minimum_amount = userdata.minimum_amount;
	}
	if (typeof userdata.min_slots_per_month != 'undefined' && userdata.min_slots_per_month != '') {
		min_slots_per_month = userdata.min_slots_per_month;
	}
	if (typeof userdata.conversion_amount != 'undefined' && userdata.conversion_amount != '') {
		conversion_amount = userdata.conversion_amount;
	}
	if (typeof userdata.project_feedback != 'undefined' && userdata.project_feedback != '') {
		project_feedback = userdata.project_feedback;
	}
	if (typeof userdata.teacher_feedback != 'undefined' && userdata.teacher_feedback != '') {
		teacher_feedback = userdata.teacher_feedback;
	}
	if (typeof userdata.shipping_days != 'undefined' && userdata.shipping_days != '') {
		shipping_days = userdata.shipping_days;
	}
	if (typeof userdata.teacher_demo_url != 'undefined' && userdata.teacher_demo_url != '') {
		teacher_demo_url = userdata.teacher_demo_url;
	}

	console.log('----------');
	console.log(userdata);

	pool.getConnection(function (err, connection) {
		Uquery='UPDATE demo_class_settings SET time_from="'+time_from+'",time_to="'+time_to+'",monday="'+monday+'",tuesday="'+tuesday+'",wednesday="'+wednesday+'",thursday="'+thursday+'",friday="'+friday+'",saturday="'+saturday+'",sunday="'+sunday+'",class_duration="'+class_duration+'",slots_per_week="'+slots_per_week+'",demo_class_payout="'+demo_class_payout+'",paid_class_payout="'+paid_class_payout+'",class_penelaty="'+class_penelaty+'",minimum_amount="'+minimum_amount+'",min_slots_per_month="'+min_slots_per_month+'",conversion_amount="'+conversion_amount+'",project_feedback="'+project_feedback+'",teacher_feedback="'+teacher_feedback+'",shipping_days="'+shipping_days+'",teacher_demo_url="'+teacher_demo_url+'" WHERE id = '+id;
		console.log('Uquery', Uquery),
			connection.query(Uquery, function (errinsert) {
				if (!errinsert) {
					resultJson =
						'{"replyCode":"success","replyMsg":"Status chenged Successfully","cmd":"demo_class_settings"}';
					connection.release();
					callback(200, null, resultJson);
					return;
				} else {
					resultJson =
						'{"replyCode":"error","replyMsg":"' + errinsert.message + '","cmd":"demo_class_settings"}\n';
					connection.release();
					callback(200, null, resultJson);
					return;
				}
			});
	});
}


//blogs

function blogs_list(userdata, pool, callback) {
	var resultJson = "";
  
	var Keyconditoin = "";
	var keyword = "";
		var start_date=""
		var type=""
// var end_date=""

	

	if (typeof userdata.start_date != 'undefined' && userdata.start_date != '') {
		start_date = userdata.start_date;
	}
	if (typeof userdata.type != 'undefined' && userdata.type != '') {
		type = userdata.type;
	}
	if (typeof userdata.keyword != 'undefined' && userdata.keyword != '') {
		keyword = userdata.keyword;
	}
 

		  if(start_date!='' ){
                 Keyconditoin +='And blog.created_at >= "'+start_date+'" '
             }
		  if(type!='' ){
                 Keyconditoin +='And type = "'+type+'" '
             }
 if (keyword != "") {
		Keyconditoin += ' AND blog.title LIKE  "%' + keyword + '%"';
	  }
	pool.getConnection(function (err, connection) {
		if (typeof userdata.start != 'undefined' && userdata.start != '') {
			start = userdata.start;
		}
	
// 	if (typeof userdata.keyword != "undefined" && userdata.keyword != "") {
// 	  keyword = userdata.keyword;
// 	}
	
	pool.getConnection(function (err, connection) {
	 
	  detailsquery ='SELECT blog.*,users.name from blog LEFT JOIN users as users ON users.id = blog.user_id where blog.status !="2"' + Keyconditoin + "";
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
})
}



function add_blog(userdata, pool, callback) {
	var resultJson = '';
	var title = '';
	var body = '';
	var slug = '';
	var image = '';
	var meta_title = '';
	var meta_keyword = '';
	var meta_description = '';
	var featured = '0';
	var type = '0'; //'0-student,1-teaher,2-parent'
	var id = '';

	if (typeof userdata.id != 'undefined' && userdata.id != '') {
		id = userdata.id;
	}
	if (typeof userdata.type != 'undefined' && userdata.type != '') {
		type = userdata.type;
	}
	if (typeof userdata.featured != 'undefined' && userdata.featured != '') {
		featured = userdata.featured;
	}
	if (typeof userdata.title != 'undefined' && userdata.title != '') {
		title = userdata.title;
	}

	if (typeof userdata.body != 'undefined' && userdata.body != '') {
		//body = userdata.body;
		body = userdata.body.replace(/"/g, "'");
	}
	if (typeof userdata.slug != 'undefined' && userdata.slug != '') {
		slug = userdata.slug;
	}
	if (typeof userdata.image != 'undefined' && userdata.image != '') {
		image = userdata.image;
	}
	if (typeof userdata.meta_title != 'undefined' && userdata.meta_title != '') {
		meta_title = userdata.meta_title;
	}
	if (typeof userdata.meta_keyword != 'undefined' && userdata.meta_keyword != '') {
		meta_keyword = userdata.meta_keyword;
	}
	if (typeof userdata.meta_description != 'undefined' && userdata.meta_description != '') {
		meta_description = userdata.meta_description;
	}

	/* ESTABLISH CONNECTION TO DATABASE */
	pool.getConnection(function (err, connection) {
		if (id != '') {
			var queryinsert = 'UPDATE blog SET title="' + title + '",body="' + body + '",slug="'+slug+'",image="'+image+'",meta_title="'+meta_title+'",meta_keyword="'+meta_keyword+'",meta_description="'+meta_description+'",type="'+type+'",featured="'+featured+'" where blog.id="' + id + '"';
		} else {
			var queryinsert = 'INSERT INTO blog SET title="' + title + '",body="' + body + '",slug="'+slug+'",image="'+image+'",meta_title="'+meta_title+'",meta_keyword="'+meta_keyword+'",meta_description="'+meta_description+'",type="'+type+'",featured="'+featured+'",created_at= NOW(),updated_at= NOW()';
		}
		// console.log(queryinsert);
		connection.query(queryinsert, function (errinsert, resultinsert) {
			if (!errinsert) {
				resultJson = '{"replyCode":"success","replyMsg":"blog updated successfully","cmd":"blogs"}\n';
				connection.release();
				callback(200, null, resultJson);
				return;
			} else {
				resultJson = '{"replyCode":"error","replyMsg":"' + errinsert.message + '","cmd":"blogs"}\n';
				// console.log(resultJson);
				connection.release();
				callback(400, null, resultJson);
				return;
			}
		});
	});
}



// Update stsutus
function update_blog_status(userdata, pool, callback) {
	var resultJson = "";
	var id = "";
	var status = "0"; //0-inactive , 1-active , 2- delete
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
	  Uquery='UPDATE blog SET status="'+status+'" WHERE id = '+id;
	  connection.query(Uquery, function (errinsert) {
		if (!errinsert) {
		  resultJson='{"replyCode":"success","replyMsg":"Status chenged Successfully","cmd":"update blog status"}';
		  connection.release();
		  callback(200, null, resultJson);
		  return;
		} else {
		  resultJson='{"replyCode":"error","replyMsg":"'+errinsert.message+'","cmd":"update blog status"}\n';
		  connection.release();
		  callback(200, null, resultJson);
		  return;
		}
	  });
	});
}
  


/* newsletters list */
function newsletters_update(userdata, pool, callback) {
var id=""
var full_name=""
var email=""
var phone=""

	if (typeof userdata.id != 'undefined' && userdata.id != '') {
		id = userdata.id;
	}
	if (typeof userdata.full_name != 'undefined' && userdata.full_name != '') {
		full_name = userdata.full_name;
	}
	if (typeof userdata.email != 'undefined' && userdata.email != '') {
		email = userdata.email;
	}
	if (typeof userdata.phone != 'undefined' && userdata.phone != '') {
		phone = userdata.phone;
	}


	/* ESTABLISH CONNECTION TO DATABASE */
	pool.getConnection(function (err, connection) {
		if (id != '') {
			var queryinsert = 'UPDATE newsletters SET full_name="' + full_name + '",email="' + email + '",phone="'+phone+'" where newsletters.id="' + id + '"';
		} else {
			var queryinsert = 'INSERT INTO  newsletters SET full_name="' + full_name + '",email="' + email + '",phone="'+phone+'"';
		}
		console.log(queryinsert);
		connection.query(queryinsert, function (errinsert, resultinsert) {
			if (!errinsert) {
				resultJson = '{"replyCode":"success","replyMsg":"News Letters added successfully","cmd":"blogs"}\n';
				connection.release();
				callback(200, null, resultJson);
				return;
			} else {
				resultJson = '{"replyCode":"error","replyMsg":"' + errinsert.message + '","cmd":"blogs"}\n';
				// console.log(resultJson);
				connection.release();
				callback(400, null, resultJson);
				return;
			}
		});
	});
}
function newsletters_list(userdata, pool, callback) {
  var resultJson = "";
  var keyword = "";
  var keycondition = 'users.news_letter != "0"';

  if (typeof userdata.keyword !== 'undefined' && userdata.keyword !== '') {
    keyword = userdata.keyword;
    keycondition += ' AND (users.name LIKE "%' + keyword + '%" OR users.phone LIKE "%' + keyword + '%" OR users.last_name LIKE "%' + keyword + '%" OR users.email LIKE "%' + keyword + '%")';
  }

  pool.getConnection(function (err, connection) {
    var Catquery = 'SELECT users.name, users.last_name, users.phone, users.email FROM users WHERE ' + keycondition;

    connection.query(Catquery, function (err, result) {
      if (err) {
        resultJson = '{"replyCode":"error","replyMsg":"' + err.message + '","cmd":"newsletters_list"}\n';
        connection.release();
        callback(200, null, resultJson);
        return;
      } else {
        resultJson = '{"replyCode":"success","replyMsg":"newsletters list","data":' + JSON.stringify(result) + ', "cmd":"newsletters_list"}\n';
        console.log("res-success");
        connection.release();
        callback(200, null, resultJson);
        return;
      }
    });
  });
}
function newsletters_get_data(userdata, pool, callback) {
	var resultJson = "";
	var id=""
		if (typeof userdata.id != 'undefined' && userdata.id != '') {
		id = userdata.id;
	}
	console.log(userdata.keyword)
	pool.getConnection(function (err, connection) {
	  
	  if(userdata.keyword != ''){
	        var Catquery ='SELECT * FROM newsletters where id="'+id+'"';	      
	  }else{
	      	var Catquery ='SELECT newsletters.* FROM newsletters ORDER BY newsletters.created DESC';
	  }

  
	  connection.query(Catquery, function (err, result) {
		if (err) {
		  resultJson='{"replyCode":"error","replyMsg":"'+err.message+'","cmd":"newsletters_list"}\n';
		  connection.release();
		  callback(200, null, resultJson);
		  return;
		} else {
		  resultJson='{"replyCode":"success","replyMsg":"newsletters list","data":'+JSON.stringify(result)+', "cmd":"newsletters_list"}\n';
		  console.log("res-suceess");
		  connection.release();
		  callback(200, null, resultJson);
		  return;
		}
	  });
	});
}


/* supports list */
function supports_list(userdata, pool, callback) {
	var resultJson = "";
		var keyword = '';
		var Keyconditoin = '';

	if (typeof userdata.keyword != 'undefined' && userdata.keyword != '') {
		keyword = userdata.keyword;
	}
	if (keyword != '') {
		Keyconditoin += ' AND users.name LIKE  "%' + keyword + '%"';
	}
	
	
	pool.getConnection(function (err, connection) {
	  
	var Catquery ='SELECT supports.*,users.name,users.email,users.phone,users.last_name FROM supports LEFT JOIN users as users ON users.id = supports.user_id where supports.status !="2" '+Keyconditoin+' ORDER BY supports.created DESC';
  console.log(Catquery);
	  connection.query(Catquery, function (err, result) {
		if (err) {
		  resultJson='{"replyCode":"error","replyMsg":"'+err.message+'","cmd":"supports_list"}\n';
		  connection.release();
		  callback(200, null, resultJson);
		  return;
		} else {
		  resultJson='{"replyCode":"success","replyMsg":"supports list","data":'+JSON.stringify(result)+', "cmd":"supports_list"}\n';
		  console.log("res-suceess");
		  connection.release();
		  callback(200, null, resultJson);
		  return;
		}
	  });
	});
}


// Update stsutus
function delete_support_request(userdata, pool, callback) {
	var resultJson = "";
	var id = "";
	var status = "0"; //0-inactive , 1-active , 2- delete
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
	  Uquery='UPDATE supports SET status="'+status+'" WHERE id = '+id;
	  connection.query(Uquery, function (errinsert) {
		if (!errinsert) {
		  resultJson='{"replyCode":"success","replyMsg":"Status chenged Successfully","cmd":"update supports status"}';
		  connection.release();
		  callback(200, null, resultJson);
		  return;
		} else {
		  resultJson='{"replyCode":"error","replyMsg":"'+errinsert.message+'","cmd":"update supports status"}\n';
		  connection.release();
		  callback(200, null, resultJson);
		  return;
		}
	  });
	});
}

// Update stsutus
function delete_newsletter_request(userdata, pool, callback) {
	var resultJson = "";
	var id = "";
	var status = "0"; //0-inactive , 1-active , 2- delete
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
	  Uquery='DELETE FROM newsletters WHERE id = '+id;
	  connection.query(Uquery, function (errinsert) {
		if (!errinsert) {
		  resultJson='{"replyCode":"success","replyMsg":"Status chenged Successfully","cmd":"update newsletters status"}';
		  connection.release();
		  callback(200, null, resultJson);
		  return;
		} else {
		  resultJson='{"replyCode":"error","replyMsg":"'+errinsert.message+'","cmd":"update newsletters status"}\n';
		  connection.release();
		  callback(200, null, resultJson);
		  return;
		}
	  });
	});
}



// function admin_demo_class_list(userdata, pool, callback) {
// 	var resultJson = '';
// 	var Cquery = '';
// 	var res = '';
// 	var keyword = '';
// 	var learning = '';
// 	var start = '0';
// 	var limit = '';
// 	var subject_id = '';

// 	var Keyconditoin = ' student_booked_classes.status != "2"';
// 	if (typeof userdata.keyword != 'undefined' && userdata.keyword != '') {
// 		keyword = userdata.keyword;
// 	}
// 	if (typeof userdata.id != 'undefined' && userdata.id != '') {
// 		id = userdata.id;
// 	}
// 	if (typeof userdata.subject_id != 'undefined' && userdata.subject_id != '') {
// 		subject_id = userdata.subject_id;
// 	}

// 	if (typeof userdata.learning != 'undefined' && userdata.learning != '') {
// 		learning = userdata.learning;
// 	}

// 	if (keyword != '') {
// 		Keyconditoin += ' AND student_name LIKE  "%' + keyword + '%"';
// 	}
// 	if (subject_id != '') {
// 		Keyconditoin += ' AND student_booked_classes.subject_id ="' + subject_id + '%"';
// 	}

// 	if (typeof userdata.start != 'undefined' && userdata.start != '') {
// 		start = userdata.start;
// 	}
// 	if (typeof userdata.limit != 'undefined' && userdata.limit != '') {
// 		limit = userdata.limit;
// 	}
// 	console.log('Curdate--', Curdate);
// 	pool.getConnection(function (err, connection) {

// 		Cquery =
// 			'SELECT student_booked_classes.*,teacher.name as teacher_name,user_time_schedule_slots.time_from,user_time_schedule_slots.time_to,subjects.name,age_group.title,course_chapters.chapter_title,teacher.id as teacher_id,student.name as student_name,student.id as student_id,student.phone as student_phone,student.parents_name,student.parents_name as school_name,student.age,student.email,(SELECT age_group.title from age_group WHERE age_group.id=student.age) as age_group,(SELECT student_booked_classes.schedule_slot_date from student_booked_classes WHERE student_booked_classes.schedule_slot_date >="' +Curdate +'"  AND student_booked_classes.status="1" LIMIT 1) as pending FROM student_booked_classes as student_booked_classes  LEFT JOIN users as student ON student.id = student_booked_classes.student_id LEFT JOIN users as teacher ON teacher.id = student_booked_classes.teacher_id LEFT JOIN categories as subjects ON subjects.id = student_booked_classes.subject_id  LEFT JOIN age_group as age_group ON age_group.id = student_booked_classes.level_id LEFT JOIN course_chapters as course_chapters ON course_chapters.id = student_booked_classes.chapter_id LEFT JOIN user_time_schedule_slots as user_time_schedule_slots ON user_time_schedule_slots.id = student_booked_classes.slot_id WHERE student_booked_classes.class_type="1" and ' +
// 			Keyconditoin +' ORDER BY student_booked_classes.id DESC LIMIT '+start+', '+limit+'';
// 		console.log(Cquery);

// 		var countquery = 'SELECT count(*) as count from student_booked_classes WHERE ' + Keyconditoin + '';
    

//     connection.query(countquery, function (err, responsecount) {
//         if (responsecount[0].count > 0) {
// 			connection.query(Cquery, function (err, ordData) {
// 				if (err) {
// 					resultJson = '{"replyCode":"error","replyMsg":"' + err.message + '","cmd":"admin_demo_class_list"}\n';
// 					connection.release();
// 					callback(200, null, resultJson);
// 					return;
// 				} else {
// 					if (ordData.length > 0) {
// 						res = ordData;
// 					} else {
// 						res = [];
// 					}
// 					resultJson =
// 						'{"replyCode":"success","replyMsg":"demo class list","data":' +
// 						JSON.stringify(res) +
// 						',"totalCount":' +responsecount[0].count+',"cmd":"admin_demo_class_list"}\n';
// 					console.log('res-suceess');
// 					connection.release();
// 					callback(200, null, resultJson);
// 					return;
// 				}
// 			});
//         } else {
//             resultJson = '{"replyCode":"success","replyMsg":"admin_demo_class_list","data":[], "cmd":"admin_demo_class_list"}\n';
//             console.log(resultJson);
//             connection.release();
//             callback(200, null, resultJson);
//             return;
//         }
//     });

		
// 	});
// }
function admin_demo_class_list(userdata, pool, callback) {
	var resultJson = '';
	var Cquery = '';
	var res = '';
	var keyword = '';
	var learning = '';
	var start = '0';
	var limit = '';
	var subject_id = '';

	var Keyconditoin = ' student_booked_classes.status != "2"';
	if (typeof userdata.keyword != 'undefined' && userdata.keyword != '') {
		keyword = userdata.keyword;
	}
	if (typeof userdata.id != 'undefined' && userdata.id != '') {
		id = userdata.id;
	}
	if (typeof userdata.subject_id != 'undefined' && userdata.subject_id != '') {
		subject_id = userdata.subject_id;
	}

	if (typeof userdata.learning != 'undefined' && userdata.learning != '') {
		learning = userdata.learning;
	}

	if (keyword != '') {
		Keyconditoin += ' AND student.name LIKE  "%' + keyword + '%"  OR subjects.name LIKE  "%' + keyword + '%" OR  student.last_name LIKE  "%' + keyword + '%" OR  student.phone LIKE  "%' + keyword + '%" OR student.email LIKE  "%' + keyword + '%" OR  teacher.name LIKE  "%' + keyword + '%" OR teacher.last_name LIKE  "%' + keyword + '%"  OR age_group.title LIKE  "%' + keyword + '%"';
	}
	if (subject_id != '') {
		Keyconditoin += ' AND student_booked_classes.subject_id ="' + subject_id + '%"';
	}

	if (typeof userdata.start != 'undefined' && userdata.start != '') {
		start = userdata.start;
	}
	if (typeof userdata.limit != 'undefined' && userdata.limit != '') {
		limit = userdata.limit;
	}
	console.log('Curdate--', Curdate);
	pool.getConnection(function (err, connection) {

		Cquery =
			'SELECT student_booked_classes.*,teacher.name as teacher_name,user_time_schedule_slots.time_from,user_time_schedule_slots.time_to,subjects.name,age_group.title,course_chapters.chapter_title,teacher.id as teacher_id,student.name as student_name,student.id as student_id,student.phone as student_phone,student.parents_name,student.parents_name as school_name,student.age,student.email,(SELECT age_group.title from age_group WHERE age_group.id=student.age) as age_group,(SELECT student_booked_classes.schedule_slot_date from student_booked_classes WHERE student_booked_classes.schedule_slot_date >="' +Curdate +'"  AND student_booked_classes.status="1" LIMIT 1) as pending FROM student_booked_classes as student_booked_classes  LEFT JOIN users as student ON student.id = student_booked_classes.student_id LEFT JOIN users as teacher ON teacher.id = student_booked_classes.teacher_id LEFT JOIN categories as subjects ON subjects.id = student_booked_classes.subject_id  LEFT JOIN age_group as age_group ON age_group.id = student_booked_classes.level_id LEFT JOIN course_chapters as course_chapters ON course_chapters.id = student_booked_classes.chapter_id LEFT JOIN user_time_schedule_slots as user_time_schedule_slots ON user_time_schedule_slots.id = student_booked_classes.slot_id WHERE student_booked_classes.class_type="1" and ' +
			Keyconditoin +' ORDER BY student_booked_classes.id DESC LIMIT '+start+', '+limit+'';
		console.log(Cquery);

		var countquery = 'SELECT count(*) as count from student_booked_classes LEFT JOIN users as student ON student.id = student_booked_classes.student_id LEFT JOIN users as teacher ON teacher.id = student_booked_classes.teacher_id LEFT JOIN categories as subjects ON subjects.id = student_booked_classes.subject_id  LEFT JOIN age_group as age_group ON age_group.id = student_booked_classes.level_id   WHERE ' + Keyconditoin + '';
    

    connection.query(countquery, function (err, responsecount) {
        if (responsecount[0].count > 0) {
			connection.query(Cquery, function (err, ordData) {
				if (err) {
					resultJson = '{"replyCode":"error","replyMsg":"' + err.message + '","cmd":"admin_demo_class_list"}\n';
					connection.release();
					callback(200, null, resultJson);
					return;
				} else {
					if (ordData.length > 0) {
						res = ordData;
					} else {
						res = [];
					}
					resultJson =
						'{"replyCode":"success","replyMsg":"demo class list","data":' +
						JSON.stringify(res) +
						',"totalCount":' +responsecount[0].count+',"cmd":"admin_demo_class_list"}\n';
					console.log('res-suceess');
					connection.release();
					callback(200, null, resultJson);
					return;
				}
			});
        } else {
            resultJson = '{"replyCode":"success","replyMsg":"admin_demo_class_list","data":[], "cmd":"admin_demo_class_list"}\n';
            console.log(resultJson);
            connection.release();
            callback(200, null, resultJson);
            return;
        }
    });

		
	});
}
// function admin_booked_class_list(userdata, pool, callback) {
// 	var resultJson = '';
// 	var Cquery = '';
// 	var res = '';
// 	var keyword = '';
// 	var learning = '';
// 	var start = '0';
// 	var limit = '';
// 	var subject_id = '';

// 	var Keyconditoin = ' student_booked_classes.status != "2"';
// 	if (typeof userdata.keyword != 'undefined' && userdata.keyword != '') {
// 		keyword = userdata.keyword;
// 	}
// 	if (typeof userdata.id != 'undefined' && userdata.id != '') {
// 		id = userdata.id;
// 	}
// 	if (typeof userdata.subject_id != 'undefined' && userdata.subject_id != '') {
// 		subject_id = userdata.subject_id;
// 	}

// 	if (typeof userdata.learning != 'undefined' && userdata.learning != '') {
// 		learning = userdata.learning;
// 	}

// 	if (keyword != '') {
// 		Keyconditoin += ' AND student_name LIKE  "%' + keyword + '%"';
// 	}
// 	if (subject_id != '') {
// 		Keyconditoin += ' AND student_booked_classes.subject_id ="' + subject_id + '%"';
// 	}

// 	if (typeof userdata.start != 'undefined' && userdata.start != '') {
// 		start = userdata.start;
// 	}
// 	if (typeof userdata.limit != 'undefined' && userdata.limit != '') {
// 		limit = userdata.limit;
// 	}
// 	console.log('Curdate--', Curdate);
// 	pool.getConnection(function (err, connection) {

// 		Cquery =
// 			'SELECT student_booked_classes.*,teacher.name as teacher_name,user_time_schedule_slots.time_from,user_time_schedule_slots.time_to,subjects.name,age_group.title,course_chapters.chapter_title,teacher.id as teacher_id,student.name as student_name,student.id as student_id,student.phone as student_phone,student.parents_name,student.parents_name as school_name,student.age,student.email,(SELECT age_group.title from age_group WHERE age_group.id=student.age) as age_group,(SELECT student_booked_classes.schedule_slot_date from student_booked_classes WHERE student_booked_classes.schedule_slot_date >="' +Curdate +'"  AND student_booked_classes.status="1" LIMIT 1) as pending FROM student_booked_classes as student_booked_classes  LEFT JOIN users as student ON student.id = student_booked_classes.student_id LEFT JOIN users as teacher ON teacher.id = student_booked_classes.teacher_id LEFT JOIN categories as subjects ON subjects.id = student_booked_classes.subject_id  LEFT JOIN age_group as age_group ON age_group.id = student_booked_classes.level_id LEFT JOIN course_chapters as course_chapters ON course_chapters.id = student_booked_classes.chapter_id LEFT JOIN user_time_schedule_slots as user_time_schedule_slots ON user_time_schedule_slots.id = student_booked_classes.slot_id WHERE student_booked_classes.class_type="0" and' +
// 			Keyconditoin +' ORDER BY student_booked_classes.id DESC LIMIT '+start+', '+limit+'';
// 		console.log(Cquery);

// 		var countquery = 'SELECT count(*) as count from student_booked_classes WHERE ' + Keyconditoin + '';
    

//     connection.query(countquery, function (err, responsecount) {
//         if (responsecount[0].count > 0) {
// 			connection.query(Cquery, function (err, ordData) {
// 				if (err) {
// 					resultJson = '{"replyCode":"error","replyMsg":"' + err.message + '","cmd":"admin_booked_class_list"}\n';
// 					connection.release();
// 					callback(200, null, resultJson);
// 					return;
// 				} else {
// 					if (ordData.length > 0) {
// 						res = ordData;
// 					} else {
// 						res = [];
// 					}
// 					resultJson =
// 						'{"replyCode":"success","replyMsg":"demo class list","data":' +
// 						JSON.stringify(res) +
// 						',"totalCount":' +responsecount[0].count+',"cmd":"admin_booked_class_list"}\n';
// 					console.log('res-suceess');
// 					connection.release();
// 					callback(200, null, resultJson);
// 					return;
// 				}
// 			});
//         } else {
//             resultJson = '{"replyCode":"success","replyMsg":"admin_demo_class_list","data":[], "cmd":"admin_booked_class_list"}\n';
//             console.log(resultJson);
//             connection.release();
//             callback(200, null, resultJson);
//             return;
//         }
//     });

		
// 	});
// }
function admin_booked_class_list(userdata, pool, callback) {
	var resultJson = '';
	var Cquery = '';
	var res = '';
	var keyword = '';
	var learning = '';
	var start = '0';
	var limit = '';
	var subject_id = '';

	var Keyconditoin = ' student_booked_classes.status != "2"';
	if (typeof userdata.keyword != 'undefined' && userdata.keyword != '') {
		keyword = userdata.keyword;
	}
	if (typeof userdata.id != 'undefined' && userdata.id != '') {
		id = userdata.id;
	}
	if (typeof userdata.subject_id != 'undefined' && userdata.subject_id != '') {
		subject_id = userdata.subject_id;
	}

	if (typeof userdata.learning != 'undefined' && userdata.learning != '') {
		learning = userdata.learning;
	}

	if (keyword != '') {
		Keyconditoin += ' AND student.name LIKE  "%' + keyword + '%"  OR subjects.name LIKE  "%' + keyword + '%" OR  student.last_name LIKE  "%' + keyword + '%" OR  student.phone LIKE  "%' + keyword + '%" OR student.email LIKE  "%' + keyword + '%" OR  teacher.name LIKE  "%' + keyword + '%" OR teacher.last_name LIKE  "%' + keyword + '%"  OR age_group.title LIKE  "%' + keyword + '%"';
	}
	if (subject_id != '') {
		Keyconditoin += ' AND student_booked_classes.subject_id ="' + subject_id + '%"';
	}

	if (typeof userdata.start != 'undefined' && userdata.start != '') {
		start = userdata.start;
	}
	if (typeof userdata.limit != 'undefined' && userdata.limit != '') {
		limit = userdata.limit;
	}
	console.log('Curdate--', Curdate);
	pool.getConnection(function (err, connection) {

		Cquery =
			'SELECT student_booked_classes.*,teacher.name as teacher_name,user_time_schedule_slots.time_from,user_time_schedule_slots.time_to,subjects.name,age_group.title,course_chapters.chapter_title,teacher.id as teacher_id,student.name as student_name,student.id as student_id,student.phone as student_phone,student.parents_name,student.parents_name as school_name,student.age,student.email,(SELECT age_group.title from age_group WHERE age_group.id=student.age) as age_group,(SELECT student_booked_classes.schedule_slot_date from student_booked_classes WHERE student_booked_classes.schedule_slot_date >="' +Curdate +'"  AND student_booked_classes.status="1" LIMIT 1) as pending FROM student_booked_classes as student_booked_classes  LEFT JOIN users as student ON student.id = student_booked_classes.student_id LEFT JOIN users as teacher ON teacher.id = student_booked_classes.teacher_id LEFT JOIN categories as subjects ON subjects.id = student_booked_classes.subject_id  LEFT JOIN age_group as age_group ON age_group.id = student_booked_classes.level_id LEFT JOIN course_chapters as course_chapters ON course_chapters.id = student_booked_classes.chapter_id LEFT JOIN user_time_schedule_slots as user_time_schedule_slots ON user_time_schedule_slots.id = student_booked_classes.slot_id WHERE student_booked_classes.class_type="0" and ' +
			Keyconditoin +' ORDER BY student_booked_classes.id DESC LIMIT '+start+', '+limit+'';
		console.log(Cquery);

		var countquery = 'SELECT count(*) as count from student_booked_classes LEFT JOIN users as student ON student.id = student_booked_classes.student_id LEFT JOIN users as teacher ON teacher.id = student_booked_classes.teacher_id LEFT JOIN categories as subjects ON subjects.id = student_booked_classes.subject_id  LEFT JOIN age_group as age_group ON age_group.id = student_booked_classes.level_id   WHERE ' + Keyconditoin + '';
    

    connection.query(countquery, function (err, responsecount) {
        if (responsecount[0].count > 0) {
			connection.query(Cquery, function (err, ordData) {
				if (err) {
					resultJson = '{"replyCode":"error","replyMsg":"' + err.message + '","cmd":"admin_booked_class_list"}\n';
					connection.release();
					callback(200, null, resultJson);
					return;
				} else {
					if (ordData.length > 0) {
						res = ordData;
					} else {
						res = [];
					}
					resultJson =
						'{"replyCode":"success","replyMsg":"demo class list","data":' +
						JSON.stringify(res) +
						',"totalCount":' +responsecount[0].count+',"cmd":"admin_booked_class_list"}\n';
					console.log('res-suceess');
					connection.release();
					callback(200, null, resultJson);
					return;
				}
			});
        } else {
            resultJson = '{"replyCode":"success","replyMsg":"admin_demo_class_list","data":[], "cmd":"admin_booked_class_list"}\n';
            console.log(resultJson);
            connection.release();
            callback(200, null, resultJson);
            return;
        }
    });

		
	});
}


// Course subscription list

function course_subscription_list(userdata, pool, callback) {
	var resultJson = '';
	var strJson = '';
	var keyword = '';
	var learning = '0';
	var Keyconditoin = ' student_course_subscription.status !="2" ';
	var result = [];
	var start = '0';
	var limit = '';



	if (typeof userdata.keyword != 'undefined' && userdata.keyword != '') {
		keyword = userdata.keyword;
	}
	if (typeof userdata.learning != 'undefined' && userdata.learning != '') {
		learning = userdata.learning;
	}
	if (typeof userdata.start != 'undefined' && userdata.start != '') {
		start = userdata.start;
	}
	if (typeof userdata.limit != 'undefined' && userdata.limit != '') {
		limit = userdata.limit;
	}
	pool.getConnection(function (err, connection) {
		if (keyword != '') {
			Keyconditoin += ' AND (teacher.name LIKE  "%' + keyword + '%" OR student.name LIKE  "%' + keyword + '%")';
		}
		if (learning != '') {
			Keyconditoin += ' AND courses.learning ="' + learning + '"';
		}
		if(limit != ''){
			var Catquery =
			'SELECT student_course_subscription.*,age_group.title as age_group_title,courses.learning,courses.course_name,teacher.name as teacher_name,courses.age_group_id ,teacher.id as teacher_id,student.name as student_name,student.email as student_email,student.phone as student_phone,student.RelatedProspectId as RelatedProspectId,student.id as student_id,student.phone as student_phone,student.parents_name,student.parents_name as school_name FROM student_course_subscription as student_course_subscription LEFT JOIN users as student ON student.id = student_course_subscription.student_id LEFT JOIN users as teacher ON teacher.id = student_course_subscription.teacher_id  LEFT JOIN courses as courses ON courses.id = student_course_subscription.course_id LEFT JOIN age_group as age_group ON age_group.id = courses.age_group_id WHERE  ' + Keyconditoin + ' ORDER BY student_course_subscription.student_id ASC,student_course_subscription.id ASC LIMIT '+start+', '+limit+'';
		}else{
			var Catquery =
			'SELECT student_course_subscription.*,courses.learning,courses.course_name,teacher.name as teacher_name,teacher.id as teacher_id,student.name as student_name,student.email as student_email,student.phone as student_phone,student.RelatedProspectId as RelatedProspectId,student.id as student_id,student.phone as student_phone,student.parents_name,student.parents_name as school_name FROM student_course_subscription as student_course_subscription LEFT JOIN users as student ON student.id = student_course_subscription.student_id LEFT JOIN users as teacher ON teacher.id = student_course_subscription.teacher_id LEFT JOIN courses as courses ON courses.id = student_course_subscription.course_id WHERE  ' +Keyconditoin +
			' ORDER BY student_course_subscription.student_id ASC,student_course_subscription.id ASC ';
		}
		
		var countquery = 'SELECT count(student_course_subscription.id) as count FROM student_course_subscription as student_course_subscription LEFT JOIN users as student ON student.id = student_course_subscription.student_id LEFT JOIN users as teacher ON teacher.id = student_course_subscription.teacher_id  LEFT JOIN courses as courses ON courses.id = student_course_subscription.course_id LEFT JOIN age_group as age_group ON age_group.id = courses.age_group_id WHERE  ' +Keyconditoin +'';
		console.log('countquery',countquery);
		connection.query(countquery, function (err, responsecount) {
			if (responsecount.length > 0) {
				console.log('Catquery::::::::',Catquery);
				connection.query(Catquery, function (err, result) {
					if (err) {
						resultJson =
							'{"replyCode":"error","replyMsg":"' + err.message + '","cmd":"course_subscription_list"}\n';
						connection.release();
						callback(200, null, resultJson);
						return;
					} else {
						resultJson =
							'{"replyCode":"success","replyMsg":"subscription list","data":' +
							JSON.stringify(result) +
							',"totalCount":' +responsecount[0].count+', "cmd":"course_subscription_list"}\n';
						console.log('res-suceess');
						connection.release();
						callback(200, null, resultJson);
						return;
					}
				});
			} else {
				resultJson = '{"replyCode":"success","replyMsg":"course_subscription_list","data":[], "cmd":"course_subscription_list"}\n';
				console.log(resultJson);
				connection.release();
				callback(200, null, resultJson);
				return;
			}
		});
		
	});
}



function teacher_payout_earning(userdata, pool, callback) {
	var teacher_id = '';
	var keyword = '';
	var Keyconditoin = '';
	var keyword = '';
	var learning = '';
	var start = '0';
	var limit = '';
	console.log(userdata,'userdata_userdata');
	if (typeof userdata.teacher_id != 'undefined' && userdata.teacher_id != '') {
		teacher_id = userdata.teacher_id;
	}
	
	if (typeof userdata.keyword != 'undefined' && userdata.keyword != '') {
		keyword = userdata.keyword;
	}

	pool.getConnection(function (err, connection) {
		if (keyword != '') {
			Keyconditoin += 'where users.name LIKE  "%' + keyword + '%" OR users.email LIKE  "%' + keyword + '%" OR users.Phone  LIKE  "%' + keyword + '%" ';
		}
		if (typeof userdata.start != 'undefined' && userdata.start != '') {
			start = userdata.start;
		}
		if (typeof userdata.limit != 'undefined' && userdata.limit != '') {
			limit = userdata.limit;
		}
if(userdata.name =='teacher_payout_earning')
{
			var Catquery = 'SELECT teacher_id, SUM(amount) as amount,users.name,users.last_name,users.email,users.phone FROM teachers_payout JOIN users as users ON users.id=teacher_id '+Keyconditoin+' GROUP BY teacher_id  DESC LIMIT '+start+', '+limit+' ';

}else{
    	if (keyword != '') {
			Keyconditoin += ' OR stu.name  LIKE  "%' + keyword + '%" OR stu.last_name  LIKE  "%' + keyword + '%" OR amount  LIKE  "%' + keyword + '%" OR student_booked_class_id  LIKE  "%' + keyword + '%"';
		}
		var Catquery = 'SELECT teachers_payout.* ,users.name,users.last_name,users.email,users.phone,stu.name as studentname,stu.last_name as studentlast,stu.phone as studentphone from teachers_payout JOIN users as users ON users.id = teachers_payout.teacher_id JOIN users as stu on stu.id= teachers_payout.student_id  '+Keyconditoin+' ORDER BY teachers_payout.id DESC LIMIT '+start+', '+limit+'' ;
		// var Catquery = 'SELECT  teachers_payout.* ,users.name,users.last_name,users.email,users.phone from teachers_payout JOIN users as users ON users.id = teachers_payout.teacher_id' ;
		// var Catquery = 'SELECT teacher_id, SUM(amount) as sum_score,users.name,users.last_name,users.email,users.phone FROM teachers_payout JOIN users as users ON users.id=teacher_id GROUP BY teacher_id';
}
		connection.query(Catquery, function (err, result) {
			if (err) {
				resultJson = '{"replyCode":"error","replyMsg":"' + err.message + '","cmd":"teachers_dropdown_list"}\n';
				connection.release();
				callback(200, null, resultJson);
				return;
			} else {
				resultJson =
					'{"replyCode":"success","replyMsg":"teachers list","data":' +
					JSON.stringify(result) +
					', "cmd":"teachers_dropdown_list"}\n';
				console.log('res-suceess');
				connection.release();
				callback(200, null, resultJson);
				return;
			}
		});
	});

}
function enquiries_list(userdata, pool, callback) {
	var teacher_id = '';
	var keyword = '';
	var Keyconditoin = '';
	var keyword = '';
	var learning = '';
	var start = '0';
	var limit = '';
	console.log(userdata,'userdata_userdata');
	if (typeof userdata.teacher_id != 'undefined' && userdata.teacher_id != '') {
		teacher_id = userdata.teacher_id;
	}
	
	if (typeof userdata.keyword != 'undefined' && userdata.keyword != '') {
		keyword = userdata.keyword;
	}

	pool.getConnection(function (err, connection) {
		if (keyword != '') {
			Keyconditoin += 'where  first_name LIKE  "%' + keyword + '%" OR last_name LIKE  "%' + keyword + '%"';
		}
		if (typeof userdata.start != 'undefined' && userdata.start != '') {
			start = userdata.start;
		}
		if (typeof userdata.limit != 'undefined' && userdata.limit != '') {
			limit = userdata.limit;
		}

		var Catquery = 'SELECT *  from enquiries '+Keyconditoin+' ORDER BY id DESC LIMIT '+start+', '+limit+' ' ;
		var Catquery2 = 'SELECT *  from enquiries '+Keyconditoin+' ORDER BY id DESC  ' ;
		connection.query(Catquery2, function (err, result2) {
console.log(result2.length,'hello');
		connection.query(Catquery, function (err, result) {
			if (err) {
				resultJson = '{"replyCode":"error","replyMsg":"' + err.message + '","cmd":"enquiries_list"}\n';
				connection.release();
				callback(200, null, resultJson);
				return;
			} else {
				resultJson =
					'{"replyCode":"success","replyMsg":"teachers list","data":'+JSON.stringify(result)+',"totalCount":'+result2.length+',"cmd":"enquiries_list"}\n';
				console.log('res-suceess');
				connection.release();
				callback(200, null, resultJson);
				return;
			}
		});
	});
	});

}
function delete_enquiries(userdata, pool, callback) {
	var id = '';

	console.log(userdata,'userdata_userdata');
	if (typeof userdata.id != 'undefined' && userdata.id != '') {
		id = userdata.id;
	}


	pool.getConnection(function (err, connection) {
	
// DELETE FROM `student_booked_classes` WHERE `student_booked_classes`.`id` = 33"
		var Catquery = 'DELETE FROM  enquiries where id="'+id+'" ' ;

		connection.query(Catquery, function (err, result) {
			if (err) {
				resultJson = '{"replyCode":"error","replyMsg":"' + err.message + '","cmd":"enquiries_list"}\n';
				connection.release();
				callback(200, null, resultJson);
				return;
			} else {
				resultJson =
					'{"replyCode":"success","replyMsg":"Recourd deleted Successfully","data":' +
					JSON.stringify(result) +
					', "cmd":"enquiries_list"}\n';
				console.log('res-suceess');
				connection.release();
				callback(200, null, resultJson);
				return;
			}
		});
	});

}
//09-04-2023
// function teacher_payout_details(userdata, pool, callback) {
// 	var sha1 = require('sha1');
// 	var Hashids = require('hashids'),
// 		hashids = new Hashids(secretSalt);
// 	var resultJson = '';
// 	var teacher_id = '';
// 	var month = '';
// 	var year = '';
// 	var Keyconditoin_teacher = ' role_id="3" AND status="1"';
// 	var Keyconditoin_payout = ' paid !="4"';
// 	var Keyconditoin = '';
// 	var keyword = '';
// 	var learning = '';
// 	var start = '0';
// 	var limit = '';
// 	var resultJson = '';
// 	var status = '';


// 	if (typeof userdata.teacher_id != 'undefined' && userdata.teacher_id != '') {
// 		teacher_id = userdata.teacher_id;
// 	}

// 	if (typeof userdata.month != 'undefined' && userdata.month != '') {
// 		month = userdata.month;
// 	}
// 	if (typeof userdata.year != 'undefined' && userdata.year != '') {
// 		year = userdata.year;
// 	}

// 	pool.getConnection(function (err, connection) {
// 		if (typeof userdata.start != 'undefined' && userdata.start != '') {
// 			start = userdata.start;
// 		}
// 		if (typeof userdata.limit != 'undefined' && userdata.limit != '') {
// 			limit = userdata.limit;
// 		}
// 		if (teacher_id != '') {
// 			Keyconditoin_teacher += ' AND users.id = "' + teacher_id + '"';
// 		}

// 		teacherssquery =
// 			'SELECT users.*,(SELECT SUM(amount) from teachers_payout where class_type="1" AND teachers_payout.teacher_id = users.id AND MONTH(created) = "' +
// 			month +
// 			'" AND YEAR(created) = "' +
// 			year +
// 			'") as paid_class_total,(SELECT COUNT(id) from teachers_payout where class_type="1" AND teachers_payout.teacher_id = users.id AND MONTH(created) = "' +
// 			month +
// 			'" AND YEAR(created) = "' +
// 			year +
// 			'") as paid_class_count,(SELECT SUM(amount) from teachers_payout where class_type="2" AND teachers_payout.teacher_id = users.id AND MONTH(created) = "' +
// 			month +
// 			'" AND YEAR(created) = "' +
// 			year +
// 			'") as demo_class_total,(SELECT COUNT(id) from teachers_payout where class_type="2" AND teachers_payout.teacher_id = users.id AND MONTH(created) = "' +
// 			month +
// 			'" AND YEAR(created) = "' +
// 			year +
// 			'") as demo_class_count,(SELECT SUM(amount) from teachers_payout where class_type="3" AND teachers_payout.teacher_id = users.id AND MONTH(created) = "' +
// 			month +
// 			'" AND YEAR(created) = "' +
// 			year +
// 			'") as penalty_total,(SELECT COUNT(id) from teachers_payout where class_type="3" AND teachers_payout.teacher_id = users.id AND MONTH(created) = "' +
// 			month +
// 			'" AND YEAR(created) = "' +
// 			year +
// 			'") as penalty_count,(SELECT SUM(amount) from teachers_payout where class_type="4" AND teachers_payout.teacher_id = users.id AND MONTH(created) = "' +
// 			month +
// 			'" AND YEAR(created) = "' +
// 			year +
// 			'") as adjustment,(SELECT SUM(amount) from teachers_payout where class_type="5" AND teachers_payout.teacher_id = users.id AND MONTH(created) = "' +
// 			month +
// 			'" AND YEAR(created) = "' +
// 			year +
// 			'") as conversion_total,(SELECT COUNT(id) from teachers_payout where class_type="5" AND teachers_payout.teacher_id = users.id AND MONTH(created) = "' +
// 			month +
// 			'" AND YEAR(created) = "' +
// 			year +
// 			'") as conversion_count,(SELECT SUM(amount) from teachers_payout where class_type="6" AND teachers_payout.teacher_id = users.id AND MONTH(created) = "' +
// 			month +
// 			'" AND YEAR(created) = "' +
// 			year +
// 			'") as project_feedback_total,(SELECT COUNT(id) from teachers_payout where class_type="6" AND teachers_payout.teacher_id = users.id AND MONTH(created) = "' +
// 			month +
// 			'" AND YEAR(created) = "' +
// 			year +
// 			'") as project_feedback_count,(SELECT SUM(amount) from teachers_payout where class_type="7" AND teachers_payout.teacher_id = users.id AND MONTH(created) = "' +
// 			month +
// 			'" AND YEAR(created) = "' +
// 			year +
// 			'") as teacher_feedback_total,(SELECT COUNT(id) from teachers_payout where class_type="7" AND teachers_payout.teacher_id = users.id AND MONTH(created) = "' +
// 			month +
// 			'" AND YEAR(created) = "' +
// 			year +
// 			'") as project_feedback_count,(SELECT demo_class_settings.minimum_amount from demo_class_settings where demo_class_settings.id="2") as minimum_amount,(SELECT demo_class_settings.min_slots_per_month from demo_class_settings where demo_class_settings.id="2") as min_slots_per_month,(SELECT COUNT(id) from user_time_schedule_slots where user_time_schedule_slots.teacher_id=users.id AND user_time_schedule_slots.mark_availability="1" AND MONTH(created) = "' +
// 			month +
// 			'" AND YEAR(created) = "' +
// 			year +
// 			'") as teachers_slots_per_month from users where ' +
// 			Keyconditoin_teacher +
// 			' ';
// 		console.log('teacherssquery', teacherssquery);

// 		connection.query(teacherssquery, function (errTeacher, resTeacher) {
// 			if (errTeacher) {
// 				resultJson =
// 					'{"replyCode":"error","replyMsg":"' + errTeacher.message + '","cmd":"teacher_payout_details"}\n';
// 				connection.release();
// 				callback(200, null, resultJson);
// 				return;
// 			} else {
// 				if (resTeacher.length > 0) {
// 					var i = 0;
// 					async.eachSeries(
// 						resTeacher,
// 						function (rec2, loop2) {
// 							var tea_id = rec2.id;
// 							console.log('tea_id', tea_id);
// 							Keyconditoin_payout += ' AND teachers_payout.teacher_id = "' + tea_id + '"';
// 							if (month != '') {
// 								Keyconditoin_payout +=
// 									' AND MONTH(created) = "' + month + '" AND YEAR(created) = "' + year + '"';
// 							}
// 							proiMGquery =
// 								'SELECT teachers_payout.* from teachers_payout where ' + Keyconditoin_payout + '';
// 							console.log('proiMGquery', proiMGquery);
// 							connection.query(proiMGquery, function (errSelpiMG, respROiMG) {
// 								if (errSelpiMG) {
// 									console.log('errSelpiMG', errSelpiMG);

// 									loop2();
// 								} else {
// 									resTeacher[i].payout = respROiMG;
// 									loop2();
// 								}
// 								i = i + 1;
// 							});
// 						},
// 						function (errSelPro) {
// 							if (errSelPro) {
// 								console.log('errSelPro', errSelPro);
// 								resultJson =
// 									'{"replyCode":"error","replyMsg":"' +
// 									errSelPro.message +
// 									'","cmd":"teacher_payout_details"}\n';
// 								connection.release();
// 								callback(200, null, resultJson);
// 								return;
// 							} else {
// 								resultJson =
// 									'{"replyCode":"success","replyMsg":"Details found successfully .","data":' +
// 									JSON.stringify(resTeacher) +
// 									',"cmd":"teacher_payout_details"}\n';
// 								console.log('res-suceess');
// 								connection.release();
// 								callback(200, null, resultJson);
// 								return;
// 							}
// 						}
// 					);
// 				} else {
// 					resultJson =
// 						'{"replyCode":"success","replyMsg":"No Record found.","data":[], "cmd":"teacher_payout_details"}\n';
// 					console.log('res-suceess');
// 					connection.release();
// 					callback(200, null, resultJson);
// 					return;
// 				}
// 			}
// 		});
// 	});
// }
// function teacher_payout_details(userdata, pool, callback) {
// 	var sha1 = require('sha1');
// 	var Hashids = require('hashids'),
// 		hashids = new Hashids(secretSalt);
// 	var resultJson = '';
// 	var teacher_id = '';
// 	var month = '';
// 	var year = '';
// 	var Keyconditoin_teacher = ' role_id="3" AND status="1"';
// 	var Keyconditoin_payout = ' paid !="4"';
// 	var Keyconditoin = '';
// 	var keyword = '';
// 	var learning = '';
// 	var start = '0';
// 	var limit = '';
// 	var resultJson = '';
// 	var status = '';
// var from_date=""
// var to_date=""

// 	if (typeof userdata.teacher_id != 'undefined' && userdata.teacher_id != '') {
// 		teacher_id = userdata.teacher_id;
// 	}

// 	if (typeof userdata.month != 'undefined' && userdata.month != '') {
// 		month = userdata.month;
// 	}
// 	if (typeof userdata.year != 'undefined' && userdata.year != '') {
// 		year = userdata.year;
// 	}
// 	if (typeof userdata.from_date != 'undefined' && userdata.from_date != '') {
// 		from_date = userdata.from_date;
// 	}
// 	if (typeof userdata.to_date != 'undefined' && userdata.to_date != '') {
// 		to_date = userdata.to_date;
// 	}

// 	pool.getConnection(function (err, connection) {
// 		if (typeof userdata.start != 'undefined' && userdata.start != '') {
// 			start = userdata.start;
// 		}
// 		if (typeof userdata.limit != 'undefined' && userdata.limit != '') {
// 			limit = userdata.limit;
// 		}
// 		if (teacher_id != '') {
// 			Keyconditoin_teacher += ' AND users.id = "' + teacher_id + '"';
// 		}
// if(from_date!='' && to_date!=''){
//  keyword ='And teachers_payout.created BETWEEN '+from_date+' AND '+to_date +''

// }
// 		teacherssquery ="SELECT teachers_payout.*,users.name,users.last_name FROM teachers_payout as teachers_payout join users as users on users.id=teachers_payout.student_id WHERE teachers_payout.teacher_id='"+teacher_id +"' '"+ keyword+"' "

// 			/*'SELECT users.*,(SELECT SUM(amount) from teachers_payout where class_type="1" AND teachers_payout.teacher_id = users.id AND MONTH(created) = "' +
// 			month +
// 			'" AND YEAR(created) = "' +
// 			year +
// 			'") as paid_class_total,(SELECT COUNT(id) from teachers_payout where class_type="1" AND teachers_payout.teacher_id = users.id AND MONTH(created) = "' +
// 			month +
// 			'" AND YEAR(created) = "' +
// 			year +
// 			'") as paid_class_count,(SELECT SUM(amount) from teachers_payout where class_type="2" AND teachers_payout.teacher_id = users.id AND MONTH(created) = "' +
// 			month +
// 			'" AND YEAR(created) = "' +
// 			year +
// 			'") as demo_class_total,(SELECT COUNT(id) from teachers_payout where class_type="2" AND teachers_payout.teacher_id = users.id AND MONTH(created) = "' +
// 			month +
// 			'" AND YEAR(created) = "' +
// 			year +
// 			'") as demo_class_count,(SELECT SUM(amount) from teachers_payout where class_type="3" AND teachers_payout.teacher_id = users.id AND MONTH(created) = "' +
// 			month +
// 			'" AND YEAR(created) = "' +
// 			year +
// 			'") as penalty_total,(SELECT COUNT(id) from teachers_payout where class_type="3" AND teachers_payout.teacher_id = users.id AND MONTH(created) = "' +
// 			month +
// 			'" AND YEAR(created) = "' +
// 			year +
// 			'") as penalty_count,(SELECT SUM(amount) from teachers_payout where class_type="4" AND teachers_payout.teacher_id = users.id AND MONTH(created) = "' +
// 			month +
// 			'" AND YEAR(created) = "' +
// 			year +
// 			'") as adjustment,(SELECT SUM(amount) from teachers_payout where class_type="5" AND teachers_payout.teacher_id = users.id AND MONTH(created) = "' +
// 			month +
// 			'" AND YEAR(created) = "' +
// 			year +
// 			'") as conversion_total,(SELECT COUNT(id) from teachers_payout where class_type="5" AND teachers_payout.teacher_id = users.id AND MONTH(created) = "' +
// 			month +
// 			'" AND YEAR(created) = "' +
// 			year +
// 			'") as conversion_count,(SELECT SUM(amount) from teachers_payout where class_type="6" AND teachers_payout.teacher_id = users.id AND MONTH(created) = "' +
// 			month +
// 			'" AND YEAR(created) = "' +
// 			year +
// 			'") as project_feedback_total,(SELECT COUNT(id) from teachers_payout where class_type="6" AND teachers_payout.teacher_id = users.id AND MONTH(created) = "' +
// 			month +
// 			'" AND YEAR(created) = "' +
// 			year +
// 			'") as project_feedback_count,(SELECT SUM(amount) from teachers_payout where class_type="7" AND teachers_payout.teacher_id = users.id AND MONTH(created) = "' +
// 			month +
// 			'" AND YEAR(created) = "' +
// 			year +
// 			'") as teacher_feedback_total,(SELECT COUNT(id) from teachers_payout where class_type="7" AND teachers_payout.teacher_id = users.id AND MONTH(created) = "' +
// 			month +
// 			'" AND YEAR(created) = "' +
// 			year +
// 			'") as project_feedback_count,(SELECT demo_class_settings.minimum_amount from demo_class_settings where demo_class_settings.id="2") as minimum_amount,(SELECT demo_class_settings.min_slots_per_month from demo_class_settings where demo_class_settings.id="2") as min_slots_per_month,(SELECT COUNT(id) from user_time_schedule_slots where user_time_schedule_slots.teacher_id=users.id AND user_time_schedule_slots.mark_availability="1" AND MONTH(created) = "' +
// 			month +
// 			'" AND YEAR(created) = "' +
// 			year +
// 			'") as teachers_slots_per_month,(SELECT SUM(amount) FROM teachers_payout WHERE teachers_payout.teacher_id = users.id) as totalamount from users where ' +
// 			Keyconditoin_teacher + keyword +' ORDER BY id DESC LIMIT '+start+', '+limit+' ';*/
// 		console.log('teacherssquery', teacherssquery);

// 		connection.query(teacherssquery, function (errTeacher, resTeacher) {
// 			if (errTeacher) {
// 				resultJson =
// 					'{"replyCode":"error","replyMsg":"' + errTeacher.message + '","cmd":"teacher_payout_details"}\n';
// 				connection.release();
// 				callback(200, null, resultJson);
// 				return;
// 			} else {
// 				if (resTeacher.length > 0) {
// 					var i = 0;
// 					async.eachSeries(
// 						resTeacher,
// 						function (rec2, loop2) {
// 							var tea_id = rec2.id;
// 							console.log('tea_id', tea_id);
// 							Keyconditoin_payout += ' AND teachers_payout.teacher_id = "' + tea_id + '"';
// 							if (month != '') {
// 								Keyconditoin_payout +=
// 									' AND MONTH(created) = "' + month + '" AND YEAR(created) = "' + year + '"';
// 							}
// 							proiMGquery =
// 								'SELECT teachers_payout.* from teachers_payout where ' + Keyconditoin_payout + '';
// 							console.log('proiMGquery', proiMGquery);
// 							connection.query(proiMGquery, function (errSelpiMG, respROiMG) {
// 								if (errSelpiMG) {
// 									console.log('errSelpiMG', errSelpiMG);

// 									loop2();
// 								} else {
// 									resTeacher[i].payout = respROiMG;
// 									loop2();
// 								}
// 								i = i + 1;
// 							});
// 						},
// 						function (errSelPro) {
// 							if (errSelPro) {
// 								console.log('errSelPro', errSelPro);
// 								resultJson =
// 									'{"replyCode":"error","replyMsg":"' +
// 									errSelPro.message +
// 									'","cmd":"teacher_payout_details"}\n';
// 								connection.release();
// 								callback(200, null, resultJson);
// 								return;
// 							} else {
// 								resultJson =
// 									'{"replyCode":"success","replyMsg":"Details found successfully .","data":' +
// 									JSON.stringify(resTeacher) +
// 									',"cmd":"teacher_payout_details"}\n';
// 								console.log('res-suceess');
// 								connection.release();
// 								callback(200, null, resultJson);
// 								return;
// 							}
// 						}
// 					);
// 				} else {
// 					resultJson =
// 						'{"replyCode":"success","replyMsg":"No Record found.","data":[], "cmd":"teacher_payout_details"}\n';
// 					console.log('res-suceess');
// 					connection.release();
// 					callback(200, null, resultJson);
// 					return;
// 				}
// 			}
// 		});
// 	});
// }
function teacher_payout_details(userdata, pool, callback) {
	var sha1 = require('sha1');
	var Hashids = require('hashids'),
		hashids = new Hashids(secretSalt);
	var resultJson = '';
	var teacher_id = '';
	var month = '';
	var year = '';
	var Keyconditoin_teacher = ' role_id="3" AND status="1"';
	var Keyconditoin_payout = ' paid !="4"';
	var Keyconditoin = '';
	var keyword = '';
	var learning = '';
	var start = '0';
	var limit = '';
	var resultJson = '';
	var status = '';
	var limitStr=''
var start_date=""
var end_date=""
var paid=""

	if (typeof userdata.teacher_id != 'undefined' && userdata.teacher_id != '') {
		teacher_id = userdata.teacher_id;
	}

	if (typeof userdata.month != 'undefined' && userdata.month != '') {
		month = userdata.month;
	}
	if (typeof userdata.paid != 'undefined' && userdata.paid != '') {
		paid = userdata.paid;
	}
	if (typeof userdata.year != 'undefined' && userdata.year != '') {
		year = userdata.year;
	}
	if (typeof userdata.start_date != 'undefined' && userdata.start_date != '') {
		start_date = userdata.start_date;
	}
	if (typeof userdata.end_date != 'undefined' && userdata.end_date != '') {
		end_date = userdata.end_date;
	}

	pool.getConnection(function (err, connection) {
		if (typeof userdata.start != 'undefined' && userdata.start != '') {
			start = userdata.start;
		}
		if (typeof userdata.limit != 'undefined' && userdata.limit != '') {
			limit = userdata.limit;
		}
		if (teacher_id != '') {
			Keyconditoin_teacher += ' AND users.id = "' + teacher_id + '"';
		}
if(start_date!='' && end_date!=''){
 keyword ='And teachers_payout.created BETWEEN "'+start_date+'" AND "'+end_date +'"'

}
 if (limit != "") {
    limitStr = "LIMIT " + start + ", " + limit + "";
  }
// if(paid !=''){
//  keyword +='And teachers_payout.paid= "+paid+"'

// }
        
		teacherssquery1 ="select *,(select SUM(amount)from teachers_payout where paid=1 and teacher_id='"+teacher_id+"' "+keyword+") as Total,(select users.name from users where users.id=teachers_payout.student_id) as student_name,(select users.last_name from users where users.id=teachers_payout.student_id) as student_last from teachers_payout where paid=1 and teacher_id='"+teacher_id+"' "+keyword+""
		teacherssquery ="select *,(select SUM(amount)from teachers_payout where paid=1 and teacher_id='"+teacher_id+"' "+keyword+") as Total,(select users.name from users where users.id=teachers_payout.student_id) as student_name,(select users.last_name from users where users.id=teachers_payout.student_id) as student_last from teachers_payout where paid=1 and teacher_id='"+teacher_id+"' "+keyword+" "+limitStr+""
	
		console.log('teacherssquery', teacherssquery);

		connection.query(teacherssquery1, function (errTeacher, resTeacher1) {
		connection.query(teacherssquery, function (errTeacher, resTeacher) {
			if (errTeacher) {
				resultJson =
					'{"replyCode":"error","replyMsg":"' + errTeacher.message + '","cmd":"teacher_payout_details"}\n';
				connection.release();
				callback(200, null, resultJson);
				return;
			} else {
				resultJson =
				'{"replyCode":"success","replyMsg":"Details found successfully .","data":' +
				JSON.stringify(resTeacher) +
				',"count_total":' +
				JSON.stringify(resTeacher1.length) +
				',"cmd":"teacher_payout_details"}\n';
			console.log('res-suceess');
			connection.release();
			callback(200, null, resultJson);
			return;
		}
			
		});
		});
	});
}
function teacher_payout_detail_admin_section(userdata, pool, callback) {
	var sha1 = require('sha1');
	var Hashids = require('hashids'),
		hashids = new Hashids(secretSalt);
	var resultJson = '';
	var teacher_id = '';
	var month = '';
	var year = '';
	var Keyconditoin_teacher = '';
	var Keyconditoin_payout = ' paid !="4"';
	var Keyconditoin = '';
	var keyword = '';
	var learning = '';
	var start = '0';
	var limit = '';
	var resultJson = '';
	var status = '';
	var limitStr=''
var start_date=""
var end_date=""
var paid=""

	if (typeof userdata.teacher_id != 'undefined' && userdata.teacher_id != '') {
		teacher_id = userdata.teacher_id;
	}

	if (typeof userdata.month != 'undefined' && userdata.month != '') {
		month = userdata.month;
	}
	if (typeof userdata.paid != 'undefined' && userdata.paid != '') {
		paid = userdata.paid;
	}
	if (typeof userdata.year != 'undefined' && userdata.year != '') {
		year = userdata.year;
	}
	if (typeof userdata.start_date != 'undefined' && userdata.start_date != '') {
		start_date = userdata.start_date;
	}
	if (typeof userdata.end_date != 'undefined' && userdata.end_date != '') {
		end_date = userdata.end_date;
	}

	pool.getConnection(function (err, connection) {
		if (typeof userdata.start != 'undefined' && userdata.start != '') {
			start = userdata.start;
		}
		if (typeof userdata.limit != 'undefined' && userdata.limit != '') {
			limit = userdata.limit;
		}
	
		if (teacher_id != '') {
 			Keyconditoin_teacher += ' AND teacher_id = "' + teacher_id + '"';
	}
	
if(start_date!='' && end_date!=''){
 keyword ='And created BETWEEN "'+start_date+'" AND "'+end_date +'"'

}
 if (limit != "") {
    limitStr = "LIMIT " + start + ", " + limit + "";
  }
  console.log(start_date,end_date,keyword)

// if(paid !=''){
//  keyword +='And teachers_payout.paid= "+paid+"'

// }
        
		teacherssquery1 ="select *,(select SUM(amount)from teachers_payout where paid=1 and teacher_id='"+teacher_id+"' "+keyword+") as Total,(select users.name from users where users.id=teachers_payout.teacher_id) as teacher_name,(select users.phone_code from users where users.id=teachers_payout.teacher_id) as phone_code ,(select users.phone from users where users.id=teachers_payout.teacher_id) as phone,(select users.last_name from users where users.id=teachers_payout.teacher_id) as teacher_last_name from teachers_payout where paid=1 "+Keyconditoin_teacher+" "+keyword+""
		teacherssquery ="select *,(select SUM(amount)from teachers_payout where paid=1 and teacher_id='"+teacher_id+"' "+keyword+") as Total,(select users.phone_code from users where users.id=teachers_payout.teacher_id) as phone_code ,(select users.phone from users where users.id=teachers_payout.teacher_id) as phone,(select users.name from users where users.id=teachers_payout.teacher_id) as teacher_name,(select users.last_name from users where users.id=teachers_payout.teacher_id) as teacher_last_name from teachers_payout where paid=1  "+Keyconditoin_teacher+" "+keyword+" "+limitStr+""
	
		console.log('teacherssquery', teacherssquery);

		connection.query(teacherssquery1, function (errTeacher, resTeacher1) {
		connection.query(teacherssquery, function (errTeacher, resTeacher) {
			if (errTeacher) {
				resultJson =
					'{"replyCode":"error","replyMsg":"' + errTeacher.message + '","cmd":"teacher_payout_details"}\n';
				connection.release();
				callback(200, null, resultJson);
				return;
			} else {
				resultJson =
				'{"replyCode":"success","replyMsg":"Details found successfully .","data":' +
				JSON.stringify(resTeacher) +
				',"count_total":' +
				JSON.stringify(resTeacher1.length) +
				',"cmd":"teacher_payout_details"}\n';
			console.log('res-suceess');
			connection.release();
			callback(200, null, resultJson);
			return;
		}
			
		});
		});
	});
}

function teachers_dropdown_list(userdata, pool, callback) {
	var resultJson = '';
	var strJson = '';
	var keyword = '';
	var Keyconditoin = ' users.status ="1" AND users.verified ="1" AND role_id="3" ';
	var result = [];

	if (typeof userdata.keyword != 'undefined' && userdata.keyword != '') {
		keyword = userdata.keyword;
	}

	pool.getConnection(function (err, connection) {
		if (keyword != '') {
			Keyconditoin += ' AND users.name LIKE  "%' + keyword + '%"';
		}

		var Catquery = 'SELECT users.* FROM users  WHERE  ' + Keyconditoin + ' ORDER BY users.name ASC';

		connection.query(Catquery, function (err, result) {
			if (err) {
				resultJson = '{"replyCode":"error","replyMsg":"' + err.message + '","cmd":"teachers_dropdown_list"}\n';
				connection.release();
				callback(200, null, resultJson);
				return;
			} else {
				resultJson =
					'{"replyCode":"success","replyMsg":"teachers list","data":' +
					JSON.stringify(result) +
					', "cmd":"teachers_dropdown_list"}\n';
				console.log('res-suceess');
				connection.release();
				callback(200, null, resultJson);
				return;
			}
		});
	});
}


// create adjustment

function create_adjustment(userdata, pool, callback) {
	var resultJson = '';
	var teacher_id = '';
	var amount = '0';
	var created = '0';
	var Uquery = '';

	if (typeof userdata.teacher_id != 'undefined' && userdata.teacher_id != '') {
		teacher_id = userdata.teacher_id;
	}

	if (typeof userdata.amount != 'undefined' && userdata.amount != '') {
		amount = userdata.amount;
	}
	if (typeof userdata.created != 'undefined' && userdata.created != '') {
		created = userdata.created;
	}

	console.log('----------');
	console.log(userdata);

	pool.getConnection(function (err, connection) {
		Uquery='INSERT into teachers_payout SET amount="'+amount+'",class_type="4",teacher_id="'+teacher_id+'",created="'+created+'"';
		connection.query(Uquery, function (errinsert) {
			if (!errinsert) {
				resultJson =
					'{"replyCode":"success","replyMsg":"Status chenged Successfully","cmd":"create_adjustment"}';
				connection.release();
				callback(200, null, resultJson);
				return;
			} else {
				resultJson = '{"replyCode":"error","replyMsg":"' + errinsert.message + '","cmd":"create_adjustment"}\n';
				connection.release();
				callback(200, null, resultJson);
				return;
			}
		});
	});
}


/*Create chat group*/
function get_chat_group(userdata, pool, callback){
	var resultJson = '';
	var Query='';
	var to_user_id='';
	var from_user_id='';
	if (typeof userdata.to_user_id != 'undefined' && userdata.to_user_id != '') {
		to_user_id = userdata.to_user_id;
	}
	if (typeof userdata.from_user_id != 'undefined' && userdata.from_user_id != '') {
		from_user_id = userdata.from_user_id;
	}
	
	pool.getConnection(function (err, connection) {
			
		Query='SELECT * from chat_group WHERE (from_user ="'+from_user_id+'" AND to_user="'+to_user_id+'") OR (from_user ="'+to_user_id+'" AND to_user="'+from_user_id+'") LIMIT 1';
		console.log(Query);
		connection.query(Query, function(err, res){
			if(err){
				resultJson = '{"replyCode":"error","replyMsg":"'+err.message+'","cmd":"chat group"}\n';
				connection.release();
				callback(200, null, resultJson);
				return;
			}else{
				
				resultJson = '{"replyCode":"success","data":'+JSON.stringify(res) +',"replyMsg":" chat group created succefully","cmd":"invitation"}\n';
				console.log(resultJson);
				connection.release();
				callback(200, null, resultJson);
				return;	
			}
		})
	});
}
// function add_time_slot(userdata, pool, callback){
// 	console.log(userdata,'userdata');
// 	pool.getConnection(function (err, connection) {
// 		var checkShecduleDate =
// 		'SELECT * from demo_class_settings where id = "2" ';
// 	  console.log(checkShecduleDate);
// 	  connection.query(
// 		checkShecduleDate,
// 		function (errSchedule, resultsSchedule) {
// 			if(!errSchedule){
// 	var teacher_id = userdata.id;
// 	var NewSchDate = "";

// 	// for (var i = 0; i <= 7; i++) {
// 	  //repeating code here:
// 	  var myDate = new Date(userdata.date);
// 	  console.log(typeof myDate,'sdfasd')
// 	  myDate.setDate(myDate.getDate() + 0);
// 	  NewSchDate =
// 		myDate.getFullYear() +
// 		"-" +
// 		parseInt(myDate.getMonth() + 1) +
// 		"-" +
// 		myDate.getDate();

// 	  var tday = weekday[myDate.getDay()];
// 	  tday = tday.toLowerCase();
// 	  tday = tday.toString(); //console.log(tday);
// 	  console.log(NewSchDate);
	
// 	   var datequeryorg='INSERT INTO user_time_schedule SET teacher_id="'+teacher_id+'",schedule_date = "'+NewSchDate+'", available = "1",holiday = "0",status="1",created= NOW()';
// 	   var datequery='SELECT * FROM user_time_schedule Where teacher_id="'+teacher_id+'" AND schedule_date = "'+NewSchDate+'"';
// 	   connection.query(
// 		datequery,
// 		function (errinsertDAte, resultinsertDate) {
// 			console.log(errinsertDAte, resultinsertDate?.length);
// 			// return{errinsertDAte, resultinsertDate}
// 			if(resultinsertDate?.length==0){
// 	  connection.query(
// 		datequeryorg,
// 		function (errinsertDAte, resultinsertDate) {
// 			console.log(errinsertDAte,resultinsertDate);
// 		  if (!errinsertDAte) {
// 			var dateId = resultinsertDate.insertId;
// 			// console.log('--time_from---',resultsSchedule[0].time_from);
// 			// console.log('--time_to---',resultsSchedule[0].time_to);
// 			// console.log('--class_duration---',resultsSchedule[0].class_duration);
// 			var startTime = resultsSchedule[0].time_from;
// 			var endTime = resultsSchedule[0].time_to;
// 			var interval =
// 			  resultsSchedule[0].class_duration;
// 			while (startTime <= endTime) {
// 			  startTimeTo = startTime;
// 			  startTime = addMinutes(startTime, interval);
// 			  endTimeTo = addMinutes(startTimeTo, interval);
// 			  console.log(
// 				"Time-slot-startTimeTo",
// 				startTimeTo
// 			  );
// 			  console.log("Time-slot-endTimeTo", endTimeTo);

// 			  console.log("Tdate", NewSchDate);
// 			  var TimeInsertquery='INSERT INTO user_time_schedule_slots SET schedule_id="'+dateId+'",teacher_id="'+teacher_id+'",time_from="'+startTimeTo+'",time_to="'+endTimeTo+'",available = "0",holiday = "0",status="1",created= NOW()';
// 			  connection.query(TimeInsertquery);
			
// 		  } 
// 		  resultJson =
// 		  '{"replyCode":"success","replyMsg":"Slot Created Successfully"}\n';
// 		connection.release();
// 		callback(200, null, resultJson);
// 		return;
// 		} else {
// 			resultJson =
// 			  '{"replyCode":"error","replyMsg":"' +
// 			  errinsertDAte.message +
// 			  '","cmd":"sign_up"}\n';
// 			connection.release();
// 			callback(200, null, resultJson);
// 			return;
// 		  }
// 		}
// 	  );
	  
// 	}else{
// 		resultJson =
// 		'{"replyCode":"success2","replyMsg":"Allready created"}\n';
// 	  connection.release();
// 	  callback(200, null, resultJson);
// 	}
// 	 } );
// 	// }   
// 	}   
// })
// })
// }
// function add_time_slot(userdata, pool, callback){
// 	console.log(userdata,'userdata');
// 	pool.getConnection(function (err, connection) {
		
// 		var checkShecduleDate ='SELECT * from demo_class_settings where id = "2" ';
// 		console.log(checkShecduleDate);
// 		connection.query(
// 		  checkShecduleDate,
// 		  function (errSchedule, resultsSchedule) {
// 			if (errSchedule) {
// 			  resultJson =
// 				'{"replyCode":"error","replyMsg":"' +
// 				errSchedule.message +
// 				'","cmd":"sign_up"}\n';
// 			  connection.release();
// 			  callback(200, null, resultJson);
// 			  return;
// 			} else {
// 			  console.log("resultsSchedule", resultsSchedule[0]);
// 			  console.log("Curdate", Curdate);
// 			  var teacher_id = userdata.id;
// 			  var NewSchDate = "";
// 			  for (var i = 0; i <= 7; i++) {
// 				//repeating code here:
// 				var myDate = new Date(userdata.date);
// 				myDate.setDate(myDate.getDate() + i);
// 				NewSchDate =
// 				  myDate.getFullYear() +
// 				  "-" +
// 				  parseInt(myDate.getMonth() + 1) +
// 				  "-" +
// 				  myDate.getDate();

// 				var tday = weekday[myDate.getDay()];
// 				tday = tday.toLowerCase();
// 				tday = tday.toString(); //console.log(tday);
// 				console.log(NewSchDate);
// 				var datequeryorg='INSERT INTO user_time_schedule SET teacher_id="'+teacher_id+'",schedule_date = "'+NewSchDate+'", available = "1",holiday = "0",status="1",created= NOW()';
// 				var datequery='SELECT * FROM user_time_schedule Where teacher_id="'+teacher_id+'" AND schedule_date = "'+NewSchDate+'"';
// 				connection.query(
// 				 datequery,
// 				 function (errinsertDAte, resultinsertDate) {
// 					 console.log(errinsertDAte, resultinsertDate?.length);
// 					 // return{errinsertDAte, resultinsertDate}
// 					 if(resultinsertDate?.length==0){
// 			   connection.query(
// 				 datequeryorg,
// 				  function (errinsertDAte, resultinsertDate) {
// 					if (!errinsertDAte) {
// 					  var dateId = resultinsertDate.insertId;
// 					  // console.log('--time_from---',resultsSchedule[0].time_from);
// 					  // console.log('--time_to---',resultsSchedule[0].time_to);
// 					  // console.log('--class_duration---',resultsSchedule[0].class_duration);
// 					  var startTime = resultsSchedule[0].time_from;
// 					  var endTime = resultsSchedule[0].time_to;
// 					  var interval =
// 						resultsSchedule[0].class_duration;
// 					  while (startTime <= endTime) {
// 						startTimeTo = startTime;
// 						startTime = addMinutes(startTime, interval);
// 						endTimeTo = addMinutes(startTimeTo, interval);
// 						console.log(
// 						  "Time-slot-startTimeTo",
// 						  startTimeTo
// 						);
// 						console.log("Time-slot-endTimeTo", endTimeTo);

// 						console.log("Tdate", NewSchDate);
// 						var TimeInsertquery='INSERT INTO user_time_schedule_slots SET schedule_id="'+dateId+'",teacher_id="'+teacher_id+'",time_from="'+startTimeTo+'",time_to="'+endTimeTo+'",available = "0",holiday = "0",status="1",created= NOW()';
// 						connection.query(TimeInsertquery);
						
// 					    }
// 						resultJson = '{"replyCode":"success","replyMsg":"","cmd":"Date"}\n';
// 					    connection.release();
// 					    callback(200, null, resultJson);
// 					    return;
// 					}
// 				  }
// 				);
// 					 }
// 				  }
// 				);
// 			  }
			
			 
// 			}
// 		  }
// 		);
// })
// }
function add_time_slot(userdata, pool, callback){
	var Hashids = require("hashids"),

    hashids = new Hashids(secretSalt);

	pool.getConnection(function (err, connection) {

	var checkShecduleDate ='SELECT * from demo_class_settings where id = "2" ';
	console.log(checkShecduleDate);
	connection.query(
	  checkShecduleDate,
	  function (errSchedule, resultsSchedule) {
		if (errSchedule) {
		  resultJson =
			'{"replyCode":"error","replyMsg":"' +
			errSchedule.message +
			'","cmd":"sign_up"}\n';
		  connection.release();
		  callback(200, null, resultJson);
		  return;
		} else {
		  console.log("resultsSchedule", resultsSchedule[0]);
		  console.log("Curdate", Curdate);
		  var teacher_id = userdata.id;
		  var NewSchDate = "";
		  for (var i = 0; i <= 7; i++) {
			//repeating code here:
			var myDate = new Date(userdata.date);
			myDate.setDate(myDate.getDate() + i);
			NewSchDate =
			  myDate.getFullYear() +
			  "-" +
			  parseInt(myDate.getMonth() + 1) +
			  "-" +
			  myDate.getDate();

			var tday = weekday[myDate.getDay()];
			tday = tday.toLowerCase();
			tday = tday.toString(); //console.log(tday);
			console.log(NewSchDate);
			if (resultsSchedule[0][tday] == "1") {
			  console.log("yes");
			 var datequery='INSERT INTO user_time_schedule SET teacher_id="'+teacher_id+'",schedule_date = "'+NewSchDate+'", available = "1",holiday = "0",status="1",created= NOW()';
			} else {
			  console.log("no");
			  var datequery='INSERT INTO user_time_schedule SET teacher_id="'+teacher_id+'",schedule_date = "'+NewSchDate+'", available = "0",holiday = "1",status="1",created= NOW()';
			}
			connection.query(
			  datequery,
			  function (errinsertDAte, resultinsertDate) {
				if (!errinsertDAte) {
				  var dateId = resultinsertDate.insertId;
				  // console.log('--time_from---',resultsSchedule[0].time_from);
				  // console.log('--time_to---',resultsSchedule[0].time_to);
				  // console.log('--class_duration---',resultsSchedule[0].class_duration);
				  var startTime = resultsSchedule[0].time_from;
				  var endTime = resultsSchedule[0].time_to;
				  var interval =
					resultsSchedule[0].class_duration;
				  while (startTime <= endTime) {
					startTimeTo = startTime;
					startTime = addMinutes(startTime, interval);
					endTimeTo = addMinutes(startTimeTo, interval);
					console.log(
					  "Time-slot-startTimeTo",
					  startTimeTo
					);
					console.log("Time-slot-endTimeTo", endTimeTo);

					console.log("Tdate", NewSchDate);
					var TimeInsertquery='INSERT INTO user_time_schedule_slots SET schedule_id="'+dateId+'",teacher_id="'+teacher_id+'",time_from="'+startTimeTo+'",time_to="'+endTimeTo+'",available = "0",holiday = "0",status="1",created= NOW()';
					connection.query(TimeInsertquery);
				  }
				} else {
				  resultJson =
					'{"replyCode":"error","replyMsg":"' +
					errinsertDAte.message +
					'","cmd":"sign_up"}\n';
				  connection.release();
				  callback(200, null, resultJson);
				  return;
				}
			  }
			);
		  }
		  connection.query('SELECT * from users where id = "' + teacher_id + '" ',
			  function (errUser, resultsUser) {
				if (!errUser) {
				  var sid = hashids.encode(resultsUser[0].id);
				  resultJson =
				  '{"replyCode":"success","replyMsg":"Slot registerd successfully"}\n';
				  connection.release();
				  callback(200, null, resultJson);
				  return;
				}else{
				  resultJson =
					'{"replyCode":"error","replyMsg":"' +
					errUser.message +
					'","cmd":"sign_up"}\n';
				  connection.release();
				  callback(200, null, resultJson);
				  return;
				}
		  })
		 
		}
	  }
	);
})
}
function withdraw_payment_request(userdata, pool, callback){
    var teacher_id = '';
    var req_amount= '';
    var teacher_name= '';

	console.log(userdata,'userdata_userdata');
	if (typeof userdata.teacher_id != 'undefined' && userdata.teacher_id != '') {
		teacher_id = userdata.teacher_id;
	}
	if (typeof userdata.teacher_name != 'undefined' && userdata.teacher_name != '') {
		teacher_name = userdata.teacher_name;
	}
	
	if (typeof userdata.req_amount != 'undefined' && userdata.req_amount != '') {
		req_amount = userdata.req_amount;
	}

	pool.getConnection(function (err, connection) {



		var Catqueryfind = 'select * from withdraw_request where teacher_id="'+teacher_id+'"' ;
			connection.query(Catqueryfind, function (err, result) {
			    if(result.length){
		var Catquery = 'UPDATE withdraw_request SET  teacher_name="'+teacher_name+'", req_amount="'+req_amount+'", status="1" where teacher_id="'+teacher_id+'"'  ;
	}else{
	    
		var Catquery = 'INSERT INTO withdraw_request SET teacher_id="'+teacher_id+'",teacher_name="'+teacher_name+'", req_amount="'+req_amount+'", status="1"' ;
	
	}
		connection.query(Catquery, function (err, result) {
			if (err) {
				resultJson = '{"replyCode":"error","replyMsg":"' + err.message + '","cmd":"Error in Withdraw"}\n';
				connection.release();
				callback(200, null, resultJson);
				return;
			} else {
				resultJson =
					'{"replyCode":"success","replyMsg":"Withdraw request send successfully","data":' +
					JSON.stringify(result) +
					', "cmd":"teachers_dropdown_list"}\n';
				console.log('res-suceess');
				connection.release();
				callback(200, null, resultJson);
				return;
			}
		});
		});
	});
}
function withdraw_payment_data(userdata, pool, callback){
 	var teacher_id = '';
	var keyword = '';
	var Keyconditoin = '';
	var keyword = '';
	var learning = '';
	var start = '0';
	var limit = '';
	console.log(userdata,'userdata_userdata');
	if (typeof userdata.teacher_id != 'undefined' && userdata.teacher_id != '') {
		teacher_id = userdata.teacher_id;
	}
	
	if (typeof userdata.keyword != 'undefined' && userdata.keyword != '') {
		keyword = userdata.keyword;
	}

	pool.getConnection(function (err, connection) {
		if (keyword != '') {
			Keyconditoin += ' where users.name LIKE  "%' + keyword + '%" OR users.last_name LIKE  "%' + keyword + '%" OR users.phone LIKE  "%' + keyword + '%" OR users.email LIKE  "%' + keyword + '%" OR amount LIKE  "%' + keyword + '%" OR req_amount LIKE  "%' + keyword + '%"';
		}
		if (typeof userdata.start != 'undefined' && userdata.start != '') {
			start = userdata.start;
		}
		if (typeof userdata.limit != 'undefined' && userdata.limit != '') {
			limit = userdata.limit;
		}

			var Catquery = 'SELECT teachers_payout.teacher_id, withdraw_request.req_amount,withdraw_request.status, SUM(amount) as amount,users.name,users.last_name,users.email,users.phone FROM teachers_payout JOIN users as users ON users.id=teachers_payout.teacher_id JOIN withdraw_request as withdraw_request on withdraw_request.status!="0" and  withdraw_request.teacher_id=teachers_payout.teacher_id '+Keyconditoin+' GROUP BY teachers_payout.teacher_id  DESC LIMIT '+start+', '+limit+' ';

		connection.query(Catquery, function (err, result) {
			if (err) {
				resultJson = '{"replyCode":"error","replyMsg":"' + err.message + '","cmd":"teachers_dropdown_list"}\n';
				connection.release();
				callback(200, null, resultJson);
				return;
			} else {
				resultJson =
					'{"replyCode":"success","replyMsg":"teachers list","data":' +
					JSON.stringify(result) +
					', "cmd":"teachers_dropdown_list"}\n';
				console.log('res-suceess');
				connection.release();
				callback(200, null, resultJson);
				return;
			}
		});
	});

}
function teacher_payout_request_pay(userdata, pool, callback) {
  var resultJson = "";
  var strJson = "";
console.log(userdata.status,'teacher_payout_earning_update');
  var Cquery = "";
  var teacher_id = "";
  var amount = "";
  var paid = ""; //0-inactive,1-active,2-delete

  if (typeof userdata.teacher_id != "undefined" && userdata.teacher_id != "") {
    teacher_id = userdata.teacher_id;
  }
  if (typeof userdata.amount != "undefined" && userdata.amount != "") {
    amount = userdata.amount;
  }

  if (typeof userdata.paid != "undefined" && userdata.paid != "") {
    paid = userdata.paid;
  }
  pool.getConnection(function (err, connection) {
    Uquery =   'INSERT INTO teachers_payout SET teacher_id="'+teacher_id+'",student_id="Withdraw amount",paid="1", amount="'+-amount+'"';
    connection.query(Uquery, function (errselect, resultselect) {
      if (!errselect) {
        console.log(resultselect);
		var Catquery = 'UPDATE withdraw_request SET  status="2" where teacher_id="'+teacher_id+'"' ;
		    connection.query(Catquery);

        resultJson =
          '{"replyCode":"success","replyMsg":"Record paid updated successfully","cmd":"update_subadmin_paid"}\n';
        connection.release();
        callback(200, null, resultJson);
        return;
      } else {
        resultJson =
          '{"replyCode":"error","replyMsg":"' +
          errselect.message +
          '","cmd":"update_subadmin_status"}\n';
        connection.release();
        callback(200, null, resultJson);
        return;
      }
    });
  });
}