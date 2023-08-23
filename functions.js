// configs
var config = require("./config.js");
// node modules
fs  = require('fs-extra');

var FCMKEY = config.FCMKEY;

var request = require("request");
var FCM = require('fcm-node');
var serverKey = FCMKEY;
var fcm = new FCM(serverKey);


module.exports.sendMsg = sendMsg;
module.exports.saveFile = saveFile;
module.exports.sendNotifications = sendNotifications;
module.exports.sendNotificationsClient = sendNotificationsClient;



function sendMsg(phone,message) {

    var newMob='+91'+phone;
    //var newMob='+919672560009';
    request({       
        url: 'http://sms.smsmenow.in/sendsms.jsp?user=wingtm&password=f370df7be5XX&senderid=abcdef&mobiles='+newMob+'&sms='+message+'',
        //url: 'http://sms.smsmenow.in/sendsms.jsp?user=telehlt&password=de89bae420XX&senderid=TELHLT&mobiles='+newMob+'&sms='+message+'&unicode=1&responsein=xml',
        method: 'GET',
    }, function(error, response, body){
        if(error) {
            console.log(error);
            return true;
        } else {
            return true;
            
        }
    });
}

// general functions start
function saveFile(fileData, fileName, sub_folder) {

    var filePath = config.imageFilePath + '/' + fileName;

    if (fileData != '') {
        fs.writeFile(filePath, fileData, 'base64', function (err) {
            if (err) {
                console.log('Image not uploaded Error is: ', err);
                return false;
            } else {
                return true;
            }
        });
    } else {
        return true;
    }
}

function sendNotifications(deviceToken,uid,title,MsgBody,id,connection){
    
    var message = {
        to: deviceToken, 
        //collapse_key: 'your_collapse_key',
        
        notification: {
            title: 'Meeraksh notification', 
            body: MsgBody ,
            click_action : "FCM_PLUGIN_ACTIVITY",
            priority:"high",
            icon : "ic_stat_icon"
        },
        
        data: {  //you can send only notification or only data(or include both)
            id: id
        }
    };

    fcm.send(message, function(errPush, response){
        if (typeof uid != 'undefined' && uid != ''){
            console.log('dd')
            var Query ="INSERT INTO user_notifications set user_id='"+uid+"',title='"+title+"',notification='"+MsgBody+"',created=now(),modified=now()";
            console.log('Query',Query)
            connection.query(Query,function(err, save){
                if(err){
                    resultJson = '{"replyCode":"error","replyMsg":"'+err.message+'","cmd":"sendNotifications"}\n';
                  
                    return true;
                }else{
                    console.log('errPush',errPush);
                    console.log('response',response);
                    return true;
                }
            });
        }
      
    })
}

function sendNotificationsClient(deviceToken,uid,title,MsgBody,id,image,database_name,connection){
    
    var message = {
        to: deviceToken, 
        //collapse_key: 'your_collapse_key',
        
        notification: {
            title: 'Meeraksh notification', 
            body: MsgBody ,
            click_action : "FCM_PLUGIN_ACTIVITY",
            priority:"high",
            icon : "ic_stat_icon"
        },
        
        data: {  //you can send only notification or only data(or include both)
            id: id
        }
    };

    fcm.send(message, function(errPush, response){
        if (typeof uid != 'undefined' && uid != ''){
            console.log('dd')
            var Query ='INSERT INTO user_notifications set user_id="'+uid+'",title="'+title+'",notification="'+MsgBody+'",image="'+image+'",created=now(),modified=now()';
           
            console.log('Query',Query)
            connection.query(Query,function(err, save){
                if(err){
                    resultJson = '{"replyCode":"error","replyMsg":"'+err.message+'","cmd":"sendNotifications"}\n';
                  
                    return true;
                }else{
                    console.log('errPush',errPush);
                    console.log('response',response);
                    return true;
                }
            });
        }
      
    })
}