let firebase = require('../configs/firebase')
const dbRef = firebase.firebaseRef()
const eventsRef = dbRef.child('Citas')

exports.create = (event) => {
  let key = eventsRef.push().key
  return eventsRef.child(key).set({
    id: key,
    name: event.name,
    day: event.day,
    user: event.user,
    location: event.location,
    doctor: event.doctor
  });
}
exports.update = (event) => {
  return eventsRef.child(event.id).update({
    id: event.id,
    name: event.name,
    day: event.day,
    user: event.user,
    location: event.location,
    doctor: event.doctor,
    status: event.status
  });
}
exports.delete = (event) => {
  console.log("model event", event.id, event);
  return eventsRef.child(event).remove();
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
