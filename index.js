const mobileTabs = document.querySelectorAll(".tab-moble");

mobileTabs.forEach(entry => {
    entry.addEventListener("click", () => {
        entry.parentNode.classList.toggle('active')
    }
)
})