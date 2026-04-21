
const userAgent = navigator.userAgent;
const platform = navigator.platform;

localStorage.setItem("browserInfo", userAgent);
localStorage.setItem("osInfo", platform);

const browser = localStorage.getItem("browserInfo");
const os = localStorage.getItem("osInfo");

document.getElementById("footer").innerHTML = `
    <p><b>Браузер:</b> ${browser}</p>
    <p><b>Операційна система:</b> ${os}</p>
`;


fetch("https://jsonplaceholder.typicode.com/posts/2/comments") // зміни номер
    .then(res => res.json())
    .then(data => {
        data.forEach(comment => {
            const div = document.createElement("div");
            div.classList.add("comment");

            div.innerHTML = `
                <p><b>${comment.name}</b></p>
                <p>${comment.body}</p>
                <p>${comment.email}</p>
            `;

            document.getElementById("comments").appendChild(div);
        });
    });


setTimeout(() => {
    document.getElementById("modal").style.display = "flex";
}, 10000);

function closeModal() {
    document.getElementById("modal").style.display = "none";
}


function toggleTheme() {
    document.body.classList.toggle("light");

    if (document.body.classList.contains("light")) {
        localStorage.setItem("theme", "light");
    } else {
        localStorage.setItem("theme", "dark");
    }
}

function setThemeByTime() {
    const hour = new Date().getHours();

    if (hour >= 7 && hour < 21) {
        document.body.classList.add("light");
    }
}

window.onload = function () {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "light") {
        document.body.classList.add("light");
    } else if (!savedTheme) {
        setThemeByTime();
    }
};