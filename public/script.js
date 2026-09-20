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

/*Explore Page*/
const districts = document.querySelectorAll('#districtList li')
const destinations = document.querySelectorAll('.districtDestination')
districts.forEach(function(district) 
{
    district.addEventListener('click', function()
    {   
        const districtName = district.textContent.toLowerCase();

        const selectedDestination = document.querySelector(`.districtDestination[data-district="${districtName}"]`);

        if(selectedDestination.classList.contains('active'))
        {
            selectedDestination.classList.remove('active')
            district.classList.remove('active')
        }
        else
        {
            destinations.forEach(function(destination)
            {
                destination.classList.remove('active')
            });
            districts.forEach(function(districtItem)
            {
                districtItem.classList.remove("active");
            });
            selectedDestination.classList.add('active');
            district.classList.add("active");
        }
    });
});