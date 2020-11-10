let firebase = require('../configs/firebase')
const dbRef = firebase.firebaseRef()
const eventsRef = dbRef.child('Signos')

exports.create = (event) => {
  let key = eventsRef.push().key
  return eventsRef.child(key).set({
    id: key,
    day: event.day,
    date: event.date,
    pulse: event.pulse,
    sys: event.sys,
    user: event.user,
  });
}
exports.update = (event) => {
  return eventsRef.child(event.id).update({
    id: event.id,
    day: event.day,
    date: event.date,
    pulse: event.pulse,
    sys: event.sys,
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