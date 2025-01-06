
/* Program to calculate numbers of days in the year, remaining days and the amount due on the present day */


const totalDays = 365;

// to get the day of the year
Date.prototype.getDOY = function() 
{
  let onejan = new Date(this.getFullYear(),0,1);
  return Math.ceil((this - onejan) / 86400000);
}

// get todays details
const today = new Date();
const dayNum = today.getDOY(); // day of th year
const remainngDays = totalDays - dayNum; // remaining days

// calculate the total amount
function totalAmount() 
{
    return (dayNum * (dayNum + 1)) / 2;
}
console.log(totalAmount());

function updatePage()
{
    // update the time-text
    const timeTextElement = document.querySelector(".time-text");
    timeTextElement.innerHTML = `<span> Day ${dayNum} </span><span class= "time-sub-text"> ${remainngDays} days remaining</span>`;

    // update the amount-text
    const amountTextElement = document.querySelector(".amount-text");
    amountTextElement.textContent = `Total amount of today is SLE ${totalAmount()}`;

    // update the day-text with the current date in a readable format
    const dayTextElement = document.querySelector(".day-text");
    const options = {weekday: 'long', month: 'long', day: 'numeric'};
    dayTextElement.textContent = today.toLocaleDateString("en-US", options);

}

// update the page on load
updatePage();

