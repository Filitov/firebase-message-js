
//npm install firebase-admin --save

var admin = require('firebase-admin');

var serviceAccount = require('./service-account.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

var message = {
  'token': '',
  'notification': {
    'title': 'FCM Notification',
    'body': 'Notification from FCM'
  },
  'data':{
    'aa': 'bb',
    'cc': '100',
    'dd': 'this is a book'
  }
};

// Send a message to the device corresponding to the provided
// registration token.
admin.messaging().send(message)
  .then((response) => {
    // Response is a message ID string.
    console.log('Successfully sent message:', response);
    process.exit(0);
  })
  .catch((error) => {
    console.log('Error sending message:', error);
    process.exit(1);
  });