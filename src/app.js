const express = require("express");
const Citas = require("./models/citas_model");
const Meds = require("./models/med_model");
const Feels = require("./models/feel_model");
const Signs = require("./models/sign_model");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors")

var sm = 0;

app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded())
app.use(bodyParser.urlencoded({
  extended: true
}));
app.get("/", (req, res) => {
	str = String("12/5").split('/')
	ans = parseFloat(str[0])/parseFloat(str[1])
  res.json({ msg: ans });
});
app.use

app.post("/api/cita/test", async (req, res) => {
  Citas.create({ name: "Test MS", day: "Test MS", user: "Test MS", location: "Test MS",doctor: "Test MS" })
    .then(() => {
      return res.json({ name: "Test MS", day: "Test MS", user: "Test MS", location: "Test MS",doctor: "Test MS" });
    });
  
});

app.post("/api/post/cita/", async (req, res) => {
  //str = String(req.query.name).split('/')
  let user = 'abuelito'
  let status = 'pending'
  Citas.create({ name: req.body.name, day: req.body.day, user: user, location: req.body.location, doctor:req.body.doctor, status: status })
    .then(() => {
      return res.json({ name: req.body.name, day: req.query.day, user: user, location: req.query.location,doctor:req.query.doctor, status: status });
    });
});
app.delete("/api/delete/cita/cita/:id", async (req, res) => {
  //str = String(req.body.name).split('/')
  console.log("id de delete", req.params.id);
  Citas.delete(req.params.id).then((response)=>{
    console.log('okey');
    return res.json(response);
  });
  //console.log(req);
  
});
app.put("/api/update/cita/:id", async (req, res) => {
  //str = String(req.query.name).split('/')
  let user = 'abuelito'
  let id = req.params.id;
  console.log('back', req.body)

  Citas.update({ id: id, name: req.body.name, day: req.body.day, user: user, location: req.body.location,doctor:req.body.doctor })
    .then(() => {
      return res.json({ id:id, name: req.body.name, day: req.body.day, user: user, location: req.body.location,doctor:req.body.doctor });
    });
});

app.put("/api/update/cita/status/:id", async(req, res) => {
  let id = req.params.id;
  console.log("back put", id, req.body)
  Citas.updateStatus({id: id, status: req.body.status})
  .then(() => {
    return res.json('cita edited');
  })
  .catch(() => {
    return err;
  })

}); 

app.get("/api/get/cita/cita/:id", async (req, res) => {
  //str = String(req.body.name).split('/')
  Citas.findById(req.params.id).then((response)=>{
    return res.json(response);
  });
  //console.log(req);
  
});
app.get("/api/get/cita/cita/:id", async (req, res) => {
  //str = String(req.body.name).split('/')
  Citas.findById(req.params.id).then((response)=>{
    return res.json(response);
  });
  //console.log(req);
  
});
app.get("/api/get/cita/user/:user", async (req, res) => {
  //str = String(req.body.name).split('/')
  Citas.findByUser(req.params.user).then((response)=>{
    return res.json(response);
  });
  //console.log(req);
  
});
app.get("/api/get/cita/all", async (req, res) => {
  //str = String(req.body.name).split('/')
  Citas.findAll().then((response)=>{
    return res.json(response);
  });
  //console.log(req);
  
});

//MEDICAMENTOS

app.post("/api/meds/test", async (req, res) => {
  Meds.create({ name: "Test MS", function: "Test MS", time: "Test MS", user: "Test MS"})
    .then(() => {
      return res.json({ name: "Test MS", function: "Test MS", time: "Test MS", user: "Test MS"});
    });
  
});

app.post("/api/post/meds/", async (req, res) => {
  //str = String(req.query.name).split('/')
  //console.log(req);
  let user = 'abuelito'
  let status = 'pending'
  Meds.create({ name: req.body.name, function: req.body.function, time: req.body.time, user: user, status: status})
    .then(() => {
      return res.json({ name: req.body.name, function: req.body.function, time: req.body.time, user: user, status: status});
    });
});

app.put("/api/update/meds/:id", async (req, res) => {
  //str = String(req.query.name).split('/')
  //console.log(req);
  let user = 'abuelito'
  let id = req.params.id;
  console.log('back', req.body)
  
  Meds.update({ id: id, name: req.body.name, function: req.body.function, time: req.body.time, user: user})
    .then(() => {
      return res.json({ id: id, name: req.body.name, function: req.body.function, time: req.body.time, user: user});
    });
  
});

app.put("/api/update/meds/status/:id", async(req, res) => {
  let id = req.params.id;
  console.log("back put", id, req.body)
  Citas.updateStatus({id: id, status: req.body.status})
  .then(() => {
    return res.json('meds edited');
  })
  .catch(() => {
    return err;
  })

}); 
// CAMBIAR MED_MODEL PARA QUE PUEDA EDITAR

app.get("/api/get/meds/cita/:id", async (req, res) => {
  //str = String(req.body.name).split('/')
  Meds.findById(req.params.id).then((response)=>{
    return res.json(response);
  });
  //console.log(req);
  
});

app.delete("/api/delete/meds/cita/:id", async (req, res) => {
  //str = String(req.body.name).split('/')
  Meds.delete(req.params.id).then((response)=>{
    return res.json(response);
  });
  //console.log(req);
  
});

app.get("/api/get/meds/user/:user", async (req, res) => {
  //str = String(req.body.name).split('/')
  Meds.findByUser(req.params.user).then((response)=>{
    return res.json(response);
  });
  //console.log(req);
  
});
app.get("/api/get/meds/all", async (req, res) => {
  //str = String(req.body.name).split('/')
  Meds.findAll().then((response)=>{
    return res.json(response);
  });
  //console.log(req);
  
});



//Sentimientos

app.post("/api/feels/test", async (req, res) => {
  Feels.create({day: "Test MS", feeling: "Test MS", user: "Test MS"})
    .then(() => {
      return res.json({day: "Test MS", feeling: "Test MS", user: "Test MS"});
    });
  
});

app.post("/api/post/feels/", async (req, res) => {
  //str = String(req.query.name).split('/')

  var date = new Date();
  /*
  var month = dateObj.getMonth() + 1; //months from 1-12
  var day = dateObj.getDate();
  var year = dateObj.getFullYear();
  let date = day + '/' + month + '/' + year;
  */
  let user = 'abuelito1000';
  
  Feels.create({day: date, feeling: req.body.feeling, user: user})
    .then(() => {
      return res.json({day: date, feeling: req.body.feeling, user: user});
    });
});
app.post("/api/update/feels/", async (req, res) => {
  //str = String(req.query.name).split('/')

  var date = new Date();
  /*
  var month = dateObj.getMonth() + 1; //months from 1-12
  var day = dateObj.getDate();
  var year = dateObj.getFullYear();
  let date = day + '/' + month + '/' + year;
  */
  let user = 'abuelito1000';
  Feels.update({day: date, feeling: req.body.feeling, user: user})
    .then(() => {
      return res.json({day: date, feeling: req.body.feeling, user: user});
    });
});

app.get('/api/get/feels/future', async (req, res) => {
  var dateNow = new Date();
  Feels.findFutureDate(dateNow).then((response) => {
    return res.json(response);
  })

});


app.get("/api/get/feels/cita/:id", async (req, res) => {
  //str = String(req.body.name).split('/')
  Feels.findById(req.params.id).then((response)=>{
    return res.json(response);
  });
  //console.log(req);
  
});
app.get("/api/delete/feels/cita/:id", async (req, res) => {
  //str = String(req.body.name).split('/')
  Feels.delete(req.params.id).then((response)=>{
    return res.json(response);
  });
  //console.log(req);
  
});
app.get("/api/get/feels/user/:user", async (req, res) => {
  //str = String(req.body.name).split('/')
  Feels.findByUser(req.params.user).then((response)=>{
    return res.json(response);
  });
  //console.log(req);
  
});
app.get("/api/get/feels/all", async (req, res) => {
  //str = String(req.body.name).split('/')
  Feels.findAll().then((response)=>{
    return res.json(response);
  });
  //console.log(req);
  
});


//Sentimientos

app.post("/api/signs/test", async (req, res) => {
  Signs.create({day: "Test MS", date: "Test MS",pulse: "Test MS", sys: "Test MS", user: "Test MS"})
    .then(() => {
      return res.json({day: "Test MS", date: "Test MS",pulse: "Test MS", sys: "Test MS", user: "Test MS"});
    });
  
});

app.post("/api/post/signs/", async (req, res) => {
  //str = String(req.body.name).split('/')
  console.log(req);
  Signs.create({day: req.body.day, date: req.body.date,pulse: req.body.pulse, sys: req.body.sys, user: req.body.user})
    .then(() => {
      return res.json({day: req.body.day, date: req.body.date,pulse: req.body.pulse, sys: req.body.sys, user: req.body.user});
    });
});
app.post("/api/update/signs/", async (req, res) => {
  //str = String(req.body.name).split('/')
  console.log(req);
  Signs.update({day: req.body.day, date: req.body.date,pulse: req.body.pulse, sys: req.body.sys, user: req.body.user})
    .then(() => {
      return res.json({day: req.body.day, date: req.body.date,pulse: req.body.pulse, sys: req.body.sys, user: req.body.user});
    });
});
app.get("/api/get/signs/cita/:id", async (req, res) => {
  //str = String(req.body.name).split('/')
  Signs.findById(req.params.id).then((response)=>{
    return res.json(response);
  });
  //console.log(req);
  
});
app.get("/api/get/signs/user/:user", async (req, res) => {
  //str = String(req.body.name).split('/')
  Signs.findByUser(req.params.user).then((response)=>{
    return res.json(response);
  });
  //console.log(req);
  
});
app.get("/api/get/signs/all", async (req, res) => {
  //str = String(req.body.name).split('/')
  Signs.findAll().then((response)=>{
    return res.json(response);
  });
  //console.log(req);
  
});


module.exports = app;
