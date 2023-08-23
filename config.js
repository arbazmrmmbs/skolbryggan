var config = {}

// config.port				 = 8999;
config.mysql_host		 = 'localhost';
config.mysql_user		 = 'root';
config.mysql_password	 = 'root';
config.mysql_database	 = 'skolvryggan_db';
config.URL_UPLOAD		 = '/home/marbletopsco/public_html/suited-admin/node/uploads';
config.FCMKEY            = 'AAAAYjjbBm0:APA91bE8hjBtmMQm8ccBH35v9261_yXW352Tjl_SeuQA9doJta4YJhxegOrKtjN5sjVAoTfZKIZvkdZ2G5aO3AxucFpW1k7pVbNwbHLFG81dWqRkkofI2Tx2nvScLrOmf-gZJ_IhRzmP';
config.appUrl	 	 	 = 'http://localhost:'+config.port;
config.SiteUrl	 	 	 = 'http://localhost:8999/';
config.REFFERAMOUNT      =  '100';
config.imageFilePath 	 = 'uploads/';

config.secretSalt 		 = 'DYhG93b0qyJfIxfs2guVoUubWwvniR2G0FgaC9mi12apc123';
config.DEBUG		     = 1;
config.rootUrl  	     = process.env.ROOT_URL  || 'https://localhost:'+config.port+'/';
config.SITE_TITLE        = 'Suited-Tutor';
config.offerurl 	 = 'https://api.test.superpayments.com/v2/offers';
config.paymentt 	 = 'https://api.test.superpayments.com/v2/payments';
config.successurl  = 'https://suited-admin.mrmmbs.com/front/success';
config.cancelurl  = 'https://suited-admin.mrmmbs.com/front/cancel';
config.failureurl  = 'https://suited-admin.mrmmbs.com/front/failure';

config.secretSalt 		 = 'DYhG93b0qyJfIxfs2guVoUubWwvniR2G0FgaC9mi12apc123';
config.stripe 		     = 'sk_test_vkkv0lY4BZpPK9zJQy3ymlrH';
config.endpoint 		 = 'whsec_835111c047037bb3f7a7fd28ae653fdbf9ac2fc6824b03ba7853b85bed2f4c5b';

module.exports 			 = config;
