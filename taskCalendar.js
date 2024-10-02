// Ask the user for the day of the week
const day = prompt("Enter a day of the week: ");

// Switch statement to check the day of the week
switch (day) {
  case "monday":
    alert("Today is Monday. Rise, make coffee, check the news, check my online store, work on and complete the tasks in my business, take a bath, head to school, and return home to check my online store, complete my homework, and wrap up all of the tasks in my business.");
    break;
  case "tuesday":
    alert("Today is Tuesday. Rise, make coffee, check the news, check my online store, work on and complete the tasks in my business, take a bath, head to school, and return home to check my online store, complete my homework, and wrap up all of the tasks in my business.");
    break;
  case "wednesday":
    alert("Today is Wednesday. Get up of bed, make coffee, check the news, visit my web store, and do the task at hand for my business. Examine each order, then give it to the shipping firm. Examine the company's finances and inventory. Paperwork must be completed. Two hours of gaming. Spend the afternoon at the gym. Examine your schoolwork at night.");
    break;
  case "thursday":
    alert("Today is Thursday. Get up of bed, make coffee, check the news, visit my web store, and do the task at hand for my business. Attend school. attend church in the afternoon. In the evening, verify your work and assignments.");
    break;
  case "friday":
    alert("Today is Friday. Get up of bed, make coffee, check the news, visit my web store, and do the task at hand for my business. Attend school. Spend the afternoon at the gym. Check in with school and work when you get home, then spend hours gaming.");
    break;
  case "saturday":
    alert("Today is Saturday. Its saturday, get up in bed check my business, go on a cardio workout in a highway, go to the gym after that, and after that spend my time gaming all day, check business and make some plans and analize, business task gets to done. once more in the evening games.");
    break;
  case "sunday":
    alert("Today is Sunday. Sunday is finally rest and family day. Check the business once more, do all the tasks assigned, pack all the orders and parcels, and drop them off at the closest shipping company. After work, take a nap and wake up to play video games. Play video games and review your coursework and business in the evening.");
    break;
  default:
    alert("Invalid");
    break;
}

// Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch