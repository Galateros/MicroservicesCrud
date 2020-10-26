const express = require("express");
const Citas = require("./models/citas_model");
const Meds = require("./models/med_model");
const Feels = require("./models/feel_model");
const Signs = require("./models/sign_model");
const app = express();
const bodyParser = require("body-parser");

var sm = 0;

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
  console.log(req);
  Citas.create({ name: req.query.name, day: req.query.day, user: req.query.user, location: req.query.location,doctor:req.query.doctor })
    .then(() => {
      return res.json({ name: req.query.name, day: req.query.day, user: req.query.user, location: req.query.location,doctor:req.query.doctor });
    });
});
app.get("/api/get/cita/cita/:id", async (req, res) => {
  //str = String(req.query.name).split('/')
  Citas.findById(req.params.id).then((response)=>{
    return res.json(response);
  });
  //console.log(req);
  
});
app.get("/api/get/cita/user/:user", async (req, res) => {
  //str = String(req.query.name).split('/')
  Citas.findByUser(req.params.user).then((response)=>{
    return res.json(response);
  });
  //console.log(req);
  
});
app.get("/api/get/cita/all", async (req, res) => {
  //str = String(req.query.name).split('/')
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
  console.log(req);
  Meds.create({ name: req.query.name, function: req.query.function, time: req.query.time, user: req.query.user})
    .then(() => {
      return res.json({ name: req.query.name, function: req.query.function, time: req.query.time, user: req.query.user});
    });
});
app.get("/api/get/meds/cita/:id", async (req, res) => {
  //str = String(req.query.name).split('/')
  Meds.findById(req.params.id).then((response)=>{
    return res.json(response);
  });
  //console.log(req);
  
});
app.get("/api/get/meds/user/:user", async (req, res) => {
  //str = String(req.query.name).split('/')
  Meds.findByUser(req.params.user).then((response)=>{
    return res.json(response);
  });
  //console.log(req);
  
});
app.get("/api/get/meds/all", async (req, res) => {
  //str = String(req.query.name).split('/')
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
  console.log(req);
  Feels.create({day: req.query.day, feeling: req.query.feeling, user: req.query.user})
    .then(() => {
      return res.json({day: req.query.day, feeling: req.query.feeling, user: req.query.user});
    });
});
app.get("/api/get/feels/cita/:id", async (req, res) => {
  //str = String(req.query.name).split('/')
  Feels.findById(req.params.id).then((response)=>{
    return res.json(response);
  });
  //console.log(req);
  
});
app.get("/api/get/feels/user/:user", async (req, res) => {
  //str = String(req.query.name).split('/')
  Feels.findByUser(req.params.user).then((response)=>{
    return res.json(response);
  });
  //console.log(req);
  
});
app.get("/api/get/feels/all", async (req, res) => {
  //str = String(req.query.name).split('/')
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
  //str = String(req.query.name).split('/')
  console.log(req);
  Signs.create({day: req.query.day, date: req.query.date,pulse: req.query.pulse, sys: req.query.sys, user: req.query.user})
    .then(() => {
      return res.json({day: req.query.day, date: req.query.date,pulse: req.query.pulse, sys: req.query.sys, user: req.query.user});
    });
});
app.get("/api/get/signs/cita/:id", async (req, res) => {
  //str = String(req.query.name).split('/')
  Signs.findById(req.params.id).then((response)=>{
    return res.json(response);
  });
  //console.log(req);
  
});
app.get("/api/get/signs/user/:user", async (req, res) => {
  //str = String(req.query.name).split('/')
  Signs.findByUser(req.params.user).then((response)=>{
    return res.json(response);
  });
  //console.log(req);
  
});
app.get("/api/get/signs/all", async (req, res) => {
  //str = String(req.query.name).split('/')
  Signs.findAll().then((response)=>{
    return res.json(response);
  });
  //console.log(req);
  
});
signs

module.exports = app;
