
window.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('selectedTheme');
    if (savedTheme) switchTheme(savedTheme);
  });

  let themes = {
    "lobster-life":{
        "--active-color": "#B62B2B",
        "--info-color":"#FB9F13",
        "--theme-bg-color": "#F1797C",
        "--date-color":"#146CAA",
        "--font-color": "#4B1313",
        "--body-bg-color": "#FCDDD4",
        "--font-fam": "Lobster Two"
    },
    "classic":{
        "--active-color": "#FF335F",
        "--info-color":"#43A9A3",
        "--theme-bg-color": "#ECEEEF",
        "--date-color":"#818A91",
        "--font-color": "#373A3C",
        "--body-bg-color": "#FFFFFF",
        "--font-fam": "Lora"
    },
    "dark":{
        "--active-color": "#FF5277",
        "--info-color":"#43A9A3",
        "--theme-bg-color": "#373A3C",
        "--date-color":"#818A91",
        "--font-color": "#ECEEEF",
        "--body-bg-color": "#0E141B",
        "--font-fam": "Lora"
    },
    "moo-farm":{
        "--active-color": "#F582AE",
        "--info-color":"#8BD3DD",
        "--theme-bg-color": "#F3D2C1",
        "--date-color":"#006E8A",
        "--font-color": "#172C66",
        "--body-bg-color": "#FEF6E4",
        "--font-fam": "Playfair Display"
    },
    "choco-mountain":{
        "--active-color": "#F3AB87",
        "--info-color":"#E78FB3",
        "--theme-bg-color": "#41312E",
        "--date-color":"#FFC0AD",
        "--font-color": "#FFFFFE",
        "--body-bg-color": "#55423D",
        "--font-fam": "Ancizar Serif"
    },
    "koopa-beach":{
        "--active-color": "#FF9D00",
        "--info-color":"#BAE8E8",
        "--theme-bg-color": "#E3F6F5",
        "--date-color":"#2D334A",
        "--font-color": "#272343",
        "--body-bg-color": "#FFFFFE",
        "--font-fam": "Poppins"
    }
}


function switchTab(e, tab) {
    let btns = document.getElementsByClassName("tab");
    for (let i = 0; i < btns.length; i++) {
        btns[i].className = btns[i].className.replace(" active", "");
    }
    e.currentTarget.className += " active";

    let tabContent = document.getElementsByClassName("tabContent");
    for (let i = 0; i < tabContent.length; i++) {
        tabContent[i].style.display = "none";
    }
    document.getElementById(tab).style.display = "block";

    localStorage.setItem('selectedTheme', themeName);   
}

function switchTheme(e, themeName) {
    const themeVars = themes[themeName];
    if (!themeVars) {
        console.error(`Theme '${themeName}' not found.`);
        return;
    }

    for (const variable in themeVars) {
        document.documentElement.style.setProperty(variable, themeVars[variable]);
    }

    // Apply font family separately to body (if needed)
    if (themeVars["--font-fam"]) {
        document.body.style.fontFamily = themeVars["--font-fam"];
    }

    let themeBtns = document.getElementsByClassName("theme-picker")
    for (let i = 0; i < themeBtns.length; i++){
        themeBtns[i].classList.remove("active")
    }
    e.currentTarget.classList.add("active"); 
}

function closeThemes() {
    document.querySelector(".themes-tab").classList.toggle("display-none")
}

