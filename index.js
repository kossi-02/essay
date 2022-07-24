const scrols = document.querySelectorAll(".scrol")


const options = {
    threshold: 0.3
}

const observer = new IntersectionObserver(function(entries, observer) {
    entries.forEach(entry=>{
        if (!entry.isIntersecting) {
            return
        }
        entry.target.classList.toggle('animation')
        
        observer.unobserve(entry.target)
    })
}, options);

scrols.forEach(scrol =>{
    observer.observe(scrol)
})
