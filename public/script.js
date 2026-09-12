const cards = document.querySelectorAll(".destinationCards, .categoryCard");
const observer = new IntersectionObserver((entries) => 
{
    entries.forEach((entry) => 
    {
        if (entry.isIntersecting) 
        {
            entry.target.classList.add("show");
        }
    });
});
cards.forEach((card) => 
{
    observer.observe(card);
});