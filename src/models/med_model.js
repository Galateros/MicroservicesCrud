let firebase = require('../configs/firebase')
const dbRef = firebase.firebaseRef()
const eventsRef = dbRef.child('Medicamentos')

exports.create = (event) => {
  let key = eventsRef.push().key
  return eventsRef.child(key).set({
    id: key,
    name: event.name,
    function: event.function,
    time: event.time,
    user: event.user,
    status: event.status
  });
}
exports.update = (event) => {
  console.log('update: ', event)
  return eventsRef.child(event.id).update({
    id: event.id,
    name: event.name,
    function: event.function,
    time: event.time,
    user: event.user,
  });
}

exports.updateStatus = (event) => {
  console.log('model', event, event.status);
  return eventsRef.child(event.id).update({
    status: event.status
  })
}

exports.delete = (event) => {
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


exports.findPending = () => {
  return new Promise((resolve, reject) => {
    eventsRef.orderByChild('status').equalTo('pending').on("value", function (snapshot) {
      snapshot.forEach(function (data) {
        let events = snapshot.val()
        if (events) {
          resolve(events)
        }
      })
      if (!snapshot.hasChildren()) {
        reject(null)
      }
    });
  });
}

exports.findCompleted = () => {
  return new Promise((resolve, reject) => {
    eventsRef.orderByChild('status').equalTo('completed').on("value", function (snapshot) {
      snapshot.forEach(function (data) {
        let events = snapshot.val()
        if (events) {
          resolve(events)
        }
      })
      if (!snapshot.hasChildren()) {
        reject(null)
      }
    });
  });
}

exports.findMissing = () => {
  return new Promise((resolve, reject) => {
    eventsRef.orderByChild('status').equalTo('missing').on("value", function (snapshot) {
      snapshot.forEach(function (data) {
        let events = snapshot.val()
        if (events) {
          resolve(events)
        }
      })
      if (!snapshot.hasChildren()) {
        reject(null)
      }
    });
  });
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