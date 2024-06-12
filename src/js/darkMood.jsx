let lightPage = "light";

const screenLightController = () => {
    if (lightPage === "light") {
        document.documentElement.classList.add("dark");
        lightPage = "dark";

    }
    else {
        document.documentElement.classList.remove("dark");
        lightPage = "light"
    }
}

export default screenLightController