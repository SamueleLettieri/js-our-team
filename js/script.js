const element = document.getElementById("element")


const team = [
    {
        nome : "Wayne Barnett ",
        ruolo : "Founder & CEO ",
        foto : "wayne-barnett-founder-ceo.jpg ",
    },
    {
        nome : "Angela Caroll ",
        ruolo : "Chief Editor ",
        foto : "angela-caroll-chief-editor.jpg ",
    },
    {
        nome : "Walter Gordon ",
        ruolo : "Office Manager ",
        foto : "alter-gordon-office-manager.jpg ",
    },
    {
        nome : "Angela Lopez ",
        ruolo : "Social Media Manager ",
        foto : "angela-lopez-social-media-manager.jpg ",
    },
    {
        nome : "Scott Estrada ",
        ruolo : "Developer ",
        foto : "wayne-barnett-founder-ceo.jpg ",
    },
    {
        nome : "Barbara Ramos ",
        ruolo : "Graphic Designer ",
        foto : "barbara-ramos-graphic-designer.jpg ",
    },
]


for (let i = 0; i < team.length; i++){
    element.innerHTML += team[i].nome;
    element.innerHTML += team[i].ruolo;
    element.innerHTML += team[i].foto;
} 
