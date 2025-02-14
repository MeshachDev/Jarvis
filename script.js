const tm = document.querySelector("#time");

const dt = new Date();

let min = dt.getUTCMinutes() + 30;
let hur = dt.getUTCHours() + 5;

if (min > 60) {
  hur += 1;
  min = dt.getUTCMinutes() - 30;
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

var chat_click = document.getElementsByClassName("contacts-list");
const chat_input = document.getElementById("chat_input")
const send_msg_btn = document.getElementById("bottom-bar-send-btn");
const display_chats = document.getElementById("dc")

console.log(display_chats)

const clicked = () => {
  if (chat_input.value === "") {
    chat_input.placeholder = "Enter a Message!"

  }
  else {
    console.log(chat_input.value)
    const snd_msg_box = document.createElement("div");
    snd_msg_box.className = "snd_msg_box";
    const snd_msg = document.createElement("p");
    snd_msg.className = "snd_msg";

    snd_msg.textContent = chat_input.value;
    snd_msg_box.appendChild(snd_msg)
    display_chats.appendChild(snd_msg_box);
    chat_input.value = "";
  }
}
send_msg_btn.addEventListener("click", clicked)
