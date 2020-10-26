# MicroservicesCrud
 
#Ajax Function

try {
          var x = String(document.getElementById("example").value);
          fetch("http://localhost:3000/api/v1/example",{
                  method: 'POST',
                  body: JSON.stringify({ value: x }),
                  headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'}})
            .then(resp => resp.json())
            .then(results => {
              console.log(JSON.stringify(results))
              document.getElementById("search").value = results.name
              });
        } catch (e) {
          console.log(e);
        }

#Direcciones

/api/cita/test

/api/post/cita/

/api/get/cita/cita/:id

/api/get/cita/user/:user

/api/get/cita/all

/api/meds/test

/api/post/meds/

/api/get/meds/cita/:id

/api/get/meds/user/:user

/api/get/meds/all

/api/feels/test

/api/post/feels/

/api/get/feels/cita/:id

/api/get/feels/user/:user

/api/get/feels/all

/api/signs/test

/api/post/signs/

/api/get/signs/cita/:id

/api/get/signs/user/:user

/api/get/signs/all