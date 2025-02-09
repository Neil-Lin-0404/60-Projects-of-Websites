document.getElementById("discord").addEventListener("click", () => {
    const discId = "curry_and_rice_987";
    navigator.clipboard.writeText(discId).then(() => {
        const button = document.getElementById("discord");
        const defaulttext = button.innerHTML;
        button.innerHTML = "Copied"
        setTimeout(() => {
            button.innerHTML = defaulttext;
        }, 3000)
    })
})