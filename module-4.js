
let attendees = [
    { name: "Lebo", age: 22, ticket: "General", hasTicket: true, checkedIn: false, spend: 350 },
    { name: "Aisha", age: 19, ticket: "VIP", hasTicket: true, checkedIn: false, spend: 1200 },
    { name: "Thabo", age: 17, ticket: "General", hasTicket: true, checkedIn: false, spend: 250 },
    { name: "Naledi", age: 25, ticket: "VIP", hasTicket: true, checkedIn: false, spend: 850 },
    { name: "Jason", age: 31, ticket: "General", hasTicket: false, checkedIn: false, spend: 0 },
    { name: "Zanele", age: 20, ticket: "General", hasTicket: true, checkedIn: false, spend: 650 },
    { name: "Karabo", age: 16, ticket: "VIP", hasTicket: true, checkedIn: false, spend: 900 },
    { name: "Michael", age: 28, ticket: "General", hasTicket: true, checkedIn: false, spend: 450 }
];

let capacity = 5;
let peopleInside = 0;
let deniedAttendees = [];

//Challenge 1: View the Queue


for (let attendee of attendees) {
    
    console.log("Name:", attendee.name);
    console.log("Age:", attendee.age);
    console.log("Ticket:", attendee.ticket);
    console.log("Valid Ticket:", attendee.hasTicket);
}


// Challenge 2: Who Can Enter?

for (let attendee of attendees) {
    if(attendee.age <18){
          console.log(attendee.name + " YOU CANNOT ENTER: NO VALID TICKET");

        deniedAttendees.push({
            name: attendee.name,
            reason: "UNDER 18"
        });
    } else if (attendee.hasTicket == false) {
          console.log(attendee.name + "YOU CANNOT ENTER: NO VALID TICKET");

        deniedAttendees.push({
            name: attendee.name,
            reason: "NO TICKET"
        });
    }else {
        console.log(attendee.name + "ENTRY ALLOWED");
    }

}

//Challenge 3: Access Zones

for (let attendee of attendees) {
    if (attendee.hasTicket === true && attendee.age >= 18) {

        switch (attendee.ticket) {
            case "VIP":
                console.log(attendee.name + "GOLD WRIST BAND");
                break;

            case "General":
                console.log(attendee.name + "BLUE WRISTBAND");
                break;

            default:
                console.log(attendee.name + "UKNOWN TICKET TYPE");

        }

    } else {
        console.log(attendee.name + "NO WRISTBAND");
    }
}

//Challenge 4: VIP Lounge Security

for (let attendee of attendees) {
    if( attendee.age >= 18 && attendee.hasTicket && attendee.ticket === "VIP") {
        console.log(attendee.name + " VIP LOUNGE ACCESS APROVED");

    }else if (attendee.ticket === "VIP") {
        console.log(attendee.name + " VIP LOUNGE ACCESS DENIED");
    }
}

// Challenge 5: Find a Person in the Queue

let searchName = "Zanele";
let found = false;

for (let attendee of attendees) {
    if (attendee.name === searchName) {
        console.log(attendee.name);
        console.log(attendee.age);
        console.log(attendee.ticket);
        console.log(attendee.hasTicket);

        found = true;
        break;
    }
}

if (found == false) {
    console.log("Attendee not found");
}

//Challenge 6: Security Fast Lane

for (let attendee of attendees) {
    console.log("checking:", attendee.name,);
    if ( attendee.hasTicket === false) {
        console.log("Skipping", attendee.name, "ticket invalid");

        continue;
 }

console.log(attendee.name, "has a valid ticket");
}

// My notes: The continue Key word makes the compiler skip the remaining statements in the loop and moves to the next attendee.
// The difference between break and coninue
// Break stops the loop entirely whilst continue skips the current iteration and continues with the next one.

//Challenge 7: Food Voucher Rewards

for (let attendee of attendees) {
    if (attendee.spend >= 1000) {
        console.log(attendee.name + " R200 foon voucher");

    }else if( attendee.spend >= 500) {
        console.log(attendee.name + " R100 food voucher");
    } else if(attendee >= 300) {
        console.log(attendee.name + " R50 food Voucher");

    } else {
        console.log(attendee.name + " No voucher");
    }
}

//Challenge 8: Festival Statistics

let validTickets = 0;
let invalidTickets = 0;
let under18 = 0;
let vipCount = 0;
let generalCount = 0;
let totalSpend = 0;
let biggestSpender = attendees[0];

for (let attendee of attendees) {
    // counts valid and invalid tickets
    if (attendee.hasTicket === true) {
        validTickets++;
    } else {
        invalidTickets++;
    }

    // counts attendees under the age of 18

    if ( attendee.age < 18) {
        under18++;
    }

    // counts ticket types
    if (attendee.ticket === "VIP") {
        vipCount++;
    } else if (attendee.ticket === "General") {
        generalCount++;
    }

    // Total spending
    totalSpend = totalSpend + attendee.spend;

    if (attendee.spend > biggestSpender.spend) {
        biggestSpender = attendee;
    }
}

// Avarage spending
let average_spend = totalSpend/attendees.length;

// Output
console.log("Total Attendees:", attendees.length);
console.log("Valid Tickets:", validTickets);
console.log("Ivalid Tickets:", invalidTickets);
console.log( " Under 18 Atendees:", under18);
console.log("VIP ticket holders: ", vipCount);
console.log("General ticket holders:", generalCount);
console.log("Total amount spent: R" + totalSpend);
console.log("Average spending: R" + average_spend.toFixed(2));
console.log("Highest-spending attendee:", biggestSpender.name);
console.log("Highest amount spent: R" + biggestSpender.spend);

// Challenge 9: Find the Biggest Spender

//let biggestSpender = attendees[0];
for (let attendee of attendees) {
    if (attendee.spend > biggestSpender.spend) {
        biggestSpender = attendee;
    }
}

console.log("Name:", biggestSpender.name);
console.log("Amount Spent: R" + biggestSpender.spend);

if (biggestSpender.spend >= 100) {
    console.log("Reward: Backstage Upgrade:");
}else {
    console.log("Reward: No Backstage Upgrade");
}

//Challenge 10: Venue Capacity

peopleInside = 0;

for( let attendee of attendees) {
    // Halt addmission if it is full

    if( peopleInside >= capacity) {
        console.log("VENUE FULL !:");
        console.log("STOP ADMITTING PEOPLE");
        break;
    }

    // verify if age and ticket are valid

    if( attendee.age >= 18 && attendee.hasTicket === true) {

        peopleInside++;
        attendee.checkedIn = true;

        console.log(attendee.name + " entered. ");
        console.log("People inside:", peopleInside, "/", capacity);

    } else {
        console.log(attendee.name + " Entry denied");
    }

} 

    // Check whether this entry filled the venue
    if( peopleInside >= capacity){
    console.log("Venue Full");
    console.log("Stop Admitting People");
   
}

/*

1 Why did you use && for festival entry?
In this case, the attendee had to satisfy both conditions to be eligable to enter the festival. So the attendee must be at least 18 years old and have a valid ticket, if either condition is false and the entry is denied.

2. Where did you use else if and why?
I used the else if in the entry checks and food voucher system in order to test additional conditions when the previous condition was false. Fpr example, in the voucher system, conditions checks whether spending qualifies for R200, R100 or R50 before deciding that no voucher is awarded.

3.Why is switch appropriate for the control menu?
The switch statement is appropriate because we have sevral options to work with. So it checks the selected option and executes the corresponding operation, such as processiing entry, viewing guests or displaying stats

4. What is the difference between break in your search and continue in the security check?
In the search, the keyword break stops the loop completely when the attendee is found

5. How did you determine the biggest spender?
I first treated the first attendee as the biggest spender, the i used a loop to compare each attendee's spending with the current highest amount. So whenever a higher amount was found, i updated the biggest spender.

6. How did you prevent the venue from exceeding capacity?
 I checked where peopleInside had reached its maximum capacity being 5 before i could admit another attendee. Only eligible attendees where admitted. Each Successful entry increased peopleInside by one. WHen the capacity was reached i displayed a message and used break to stop the loop.

 7. What would happen if another 20 attendees were added to the array?
 The loop would go through the additional attendees then voucher rewards, statistics and the biggest spender would be recalculated from the updated data,provided the array is dynamic and does not have hardcoded totals. The venue would stop addmitting people once it reaches its capacity.

 8. Which part of the project required the most problem-solving?

 For me, i believe it was the venue capacity system. This is because i had to check age and ticket validity, count successful entries correctly, prevent the venue from exeeding it capacity and stop the loop at the correct time by use of the break keyword.
*/


// Final Challenge:

let option = 2;

console.log("1 - View Attendee Queue");
console.log("2 - Process Entry");
console.log("3 - View VIP Guests");
console.log("4 - View Denied Attendees");
console.log("5 - View Festival Statistics");
console.log("6 - Find Biggest Spender");
console.log("7 - Close Festival");

switch(option) {
    case 1:
        // view attendee queue using for..in
        for (let index in attendees) {
            let attendee = attendees[index];

            console.log("Name:", attendee.name);
            console.log("Age:", attendee.age);
            console.log("Ticket:", attendee.ticket);
            console.log("Valid Ticket:", attendee.hasTicket);
        }
        break;

    case 2:
        // Proccess Entry
         peopleInside = 0;
         deniedAttendees = [];

         for (let attendee of attendees) {
            if (peopleInside >= capacity){
                console.log("Venue Full");
                console.log("Stop Admitting People");
                break;
            }

            if (attendee.age <18) {
                console.log(attendee.name + " DENIED: UNDER 18");

                attendee.checkedIn = false;

                deniedAttendees.push({
                    name: attendee.name,
                    reason: "UNDER 18"
                });
            } else if (attendee.hasTicket === false) {
                console.log(attendee + " DENIED: NO VALID TICKET");

                attendee.checkedIn = false;

                deniedAttendees.push({
                    name: attendee.name,
                    reason: "NO VALID TICKET"
                });
            } else {
                peopleInside++;
                attendee.checkedIn = true;

                console.log(attendee.name + " entered.");
                console.log("People inside:", peopleInside, "/", capacity);
            }
        }

        if (peopleInside >= capacity) {
            console.log("VENUE FULL");
            console.log("STOP ADMITTING PEOPLE");
         } else{
            console.log("Entry processing complete.");
        }

        break;
        

    case 3:

        for (let attendee of attendees) {
            if (
                attendee.ticket === "VIP" && attendee.age >= 18 && attendee.hasTicket === true
            ){
                console.log(attendee.name, " VIP ACCESS APPROVED");
            }
        }
        break;

    case 4: // View All Denied Attendees

    if (deniedAttendees.length === 0) {
        console.log("No record of denied attendees.");

    } else {
        for (let attendee of deniedAttendees) {
            console.log(attendee.name + " -> " + attendee.reason);
        }
    }
        break;

    case 5: 
    // calculate Festival Stats

        let validCount = 0;
        let invalidCount = 0;
        let under18Count = 0;
        let vipCount = 0;
        let generalCount = 0;
        let totalSpendDashboard = 0;

        for (let attendee of attendees) {
            if (attendee.hasTicket === true) {
                validCount++;
            } else {
                invalidCount++;
            }

            if (attendee.ticket === "VIP") {
                vipCount++;
            } else if ( attendee.ticket === "General") {
                generalCount++;
            }

            totalSpendDashboard = totalSpendDashboard + attendee.spend; 

        }

        console.log("Total attendees:", attendees.length);
        console.log("Valid tickets:", validCount);
        console.log("Invalid tickets:", invalidCount);
        console.log("Under-18 attendees:", under18Count);
        console.log("VIP ticket holders:", vipCount);
        console.log("General ticket holders:", generalCount);
        console.log("Total spending: R" + totalSpendDashboard);
        console.log("Average spending: R" + totalSpendDashboard/attendees.length);
        break;

    case 6:
        // Find the Biggest spender
        let dashboardBiggestSpender = attendees[0];

        for (let attendee of attendees) {
             if (attendee.spend > dashboardBiggestSpender.spend) {
                dashboardBiggestSpender = attendee;
             }

        }

        console.log("Name:", dashboardBiggestSpender.name);
        console.log("Amount spent: R" + dashboardBiggestSpender.spend);

         if (dashboardBiggestSpender.spend >= 1000) {
            console.log("Reward: Backstage Upgrade");
         } else {
            console.log("Reward: No Backstage Upgrade");
         }
         break;

    case 7:
        // Close Festival
        console.log("Festival Closed");
        break;

    default:
        console.log("Invalid option. Select from 1 -> 7");


   }