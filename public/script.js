/*Home Page*/
//Part 1
const cards = document.querySelectorAll(".destinationCards, .categoryCard");
const observer = new IntersectionObserver((entries) => 
{
    entries.forEach((entry) => 
    {
        if(entry.isIntersecting) 
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
//Part 2
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

/*Plan your Trip Page*/
//Part 3
const tripForm = document.querySelector('form')
const startingLocation = document.querySelector('input[type="text"]')
const numberInputs = document.querySelectorAll('input[type="number"]')
const budget = numberInputs[0];
const days = numberInputs[1];
const interest = document.querySelector("select")
tripForm.addEventListener('submit', function(event)
{
    event.preventDefault();
    console.log(startingLocation.value);
    console.log(budget.value);
    console.log(days.value);
    console.log(interest.value);
})