const tm = document.querySelector("#time");

const dt = new Date();

let min = dt.getUTCMinutes() + 30;
let hur = dt.getUTCHours() + 5;

if (min > 60) {
  hur += 1;
  min = dt.getUTCMinutes() - 30 ;
}
tm.innerHTML = `${hur} : ${min} `;

const contacts = document.querySelector(".contacts");

const ar = ["Jason", "Kevin", "Prof. Delson", "Meshach"];
const am = ["Hey", "Hello", "Guys! Do the Work", "HOLA"];

const msg =
  `Lorem ipsum dolor, sit amet consectetur 
  adipisicing elit. Suscipit facere deleniti
   qui ratione molestiae quaerat nemo maiores 
   reprehenderit enim veniam. Officia, repudiandae 
   est dicta quia at odio eaque earum adipisci`;

const data = fetch("https://reqres.in/api/users")
  .then((response) => response.json())
  .then((json) => {
    json.data.map((item, index) => {
      var cl = document.createElement("div");
      cl.className = "contacts-list";
      var dp = document.createElement("h1");
      dp.className = "dp";
      var cd = document.createElement("div");
      cd.className = "contact-details";
      var cn = document.createElement("h1");
      cn.className = "contact-name";
      var cm = document.createElement("p");
      cm.className = "contact-message";
      cd.appendChild(cn);
      cd.appendChild(cm);
      cl.appendChild(dp);
      cl.appendChild(cd);
      dp.textContent = item.first_name[0];
      cn.textContent = item.first_name;
      cm.textContent = msg.length > 35 ? msg.substring(0, 35) + " ..." : msg;
      contacts.appendChild(cl);
    });
  });

const default_chat_window = document.querySelector(".on_none_clicked");
const chat_window = document.querySelector(".chat-window");

default_chat_window.style.display = "none";


console.log(dp)
document.addEventListener(onmouseover , function(){
  // dp.style.color = "white"
  console.log("Mouse on evetn")
})