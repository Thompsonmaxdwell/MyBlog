const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp();

exports.CreateUserRecord = functions.auth.user().onCreate(user =>{
   admin.firestore().collection('UserRecord').doc(user.uid).set({
       Email : user.email,
       Uid : user.uid,
       Like : [],
       ProfileUrl : '',

   });
});

exports.UpdateUrl = functions.https.onCall((data, context) =>{
  
   return  admin.firestore().collection('UserRecord').doc(context.auth.uid).update({
      ProfileUrl :data.ImageUrl,
   });
});

// add admin 
exports.AdminPanel = functions.https.onCall(async(data, context) =>{
    if(data.email.length === 0){
      throw new functions.https.HttpsError(
         'invalid-argument',
        'Please fill in the  E-mail Field Sucker!!!... <img class="errror_img" src="./src/assets/img/erro.png" alt=""> ' 
      )
   }
   if(context.auth.token.admin !== true){
        throw new functions.https.HttpsError(
           'permission-denied',
           'Only  Admins can add Admins, Sucker!!!... <img class="errror_img" src="./src/assets/img/erro.png" alt=""> '
        )
   }
   let userUid =  await admin.auth().getUserByEmail(data.email)
     await  admin.auth().setCustomUserClaims(userUid.uid, {admin : true})
      return {message : `Congratulation ${data.email} has being made an admin`}
 
  
 
})

exports.removeAdmin = functions.https.onCall( async(data, context)=>{
   if(data.email.length === 0){
      throw new functions.https.HttpsError(
         'invalid-argument',
         'Please fill in the  E-mail Field Sucker!!!.. <img class="errror_img" src="./src/assets/img/erro.png" alt=""> ' 
      )
   }

     if(context.auth.token.moderator !== true){
        throw new functions.https.HttpsError(
           'permission-denied',
           'Only  Moderator can remove  Admins, Sucker!!!... <img class="errror_img" src="./src/assets/img/erro.png" alt=""> '
        )
   }
   let userUid = await admin.auth().getUserByEmail(data.email)
                 await  admin.auth().setCustomUserClaims(userUid.uid, {admin : null})
                 return {message : `${data.email} has being remove from admin`}

})

exports.addModerator = functions.https.onCall( async(data, context) =>{
   if(data.email.length === 0){
      throw new functions.https.HttpsError(
         'invalid-argument',
         'Please fill in the  E-mail Field Sucker!!!... <img class="errror_img" src="./src/assets/img/erro.png" alt=""> ' 
      )
   }

   
   if(context.auth.token.moderator !== true){
      throw new functions.https.HttpsError(
         'permission-denied',
         'Only  Moderator can add Moderator, Sucker!!!.. <img class="errror_img" src="./src/assets/img/erro.png" alt=""> '
      )
  }
           let userUid = await admin.auth().getUserByEmail(data.email)
            await  admin.auth().setCustomUserClaims(userUid.uid, {admin : true, moderator : true })
            return {message : `Congratulation ${data.email} has being made a moderator`}

})

exports.removeModerator = functions.https.onCall(async(data, context) =>{
   if(data.email.length === 0){
      throw new functions.https.HttpsError(
         'invalid-argument',
         'Please fill in the  E-mail Field Sucker!!!..  <img class="errror_img" src="./src/assets/img/erro.png" alt="">' 
      )
   }

   if(context.auth.token.moderator !== true){
      throw new functions.https.HttpsError(
         'permission-denied',
         'Only  Moderator can remove Moderator, Sucker!!!.. <img class="errror_img" src="./src/assets/img/erro.png" alt="">'
      )
 }


   let userUid = await admin.auth().getUserByEmail(data.email)
   await  admin.auth().setCustomUserClaims(userUid.uid, {admin : true, moderator : '' })
   return {message : ` ${data.email}  has being remove from Moderator`}
})


