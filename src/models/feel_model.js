let firebase = require('../configs/firebase')
const dbRef = firebase.firebaseRef()
const eventsRef = dbRef.child('Sentimientos')

exports.create = (event) => {
  let key = eventsRef.push().key
  return eventsRef.child(key).set({
    id: key,
    day: event.day,
    feeling: event.feeling,
    user: event.user,
  });
}
exports.update = (event) => {
  return eventsRef.child(event.id).update({
    id: event.id,
    day: event.day,
    feeling: event.feeling,
    user: event.user,
  });
}
exports.delete = (id) => {
  return eventsRef.child(event.id).delete();
}

exports.findById = (id) => {
  return new Promise((resolve, reject) => {
    let event = null
    eventsRef.orderByChild('id').equalTo(id).on("value", function (snapshot) {
      snapshot.forEach(function (data) {
        event = data.val()
        if (event) {
          resolve(event)
        }
      })
      if (!snapshot.hasChildren()) {
        reject(null)
      }
    });
  });
}

exports.findAll = () => {
  return new Promise((resolve, reject) => {
    eventsRef.on("value", function (snapshot) {
      let events = snapshot.val()
      console.log(events)
      if (events) {
        resolve(events);
      } else {
        reject(null)
      }
    }, function (errorObject) {
      console.log("The read failed: " + errorObject.code);
    });
  })
}

exports.findFutureDate = (dateNow) => {
  return new Promise((resolve, reject) => {
    eventsRef.where("date", "<=", dateNow).get().on("value", function (snapshot) {
      let event = snapshot.val()
      snapshot.forEach(function (data) {
        event = data.val()
        if (event) {
          resolve(event)
        }
      })
      if (!snapshot.hasChildren()) {
        reject(null)
      }
    }); 
      
    
  })
}

exports.findByUser = (id) => {
  return new Promise((resolve, reject) => {
    eventsRef.orderByChild('user').equalTo(id).on("value", function (snapshot) {
      let events = snapshot.val()
      console.log(events)
      if (events) {
        resolve(events);
      } else {
        reject(null)
      }
    }, function (errorObject) {
      console.log("The read failed: " + errorObject.code);
    });
  })
}