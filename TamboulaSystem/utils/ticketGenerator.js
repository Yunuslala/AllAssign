
let countIteration = 0;


function generateTicket(columnValues) {
  const ticket = [];
  for (let row = 0; row < 3; row++) {
    const rowNumbers = [];
    //filling 5 random numbers in each rows
    for (let i = 0; i < 5; i++) {
      let num;
      do {
        num = getRandomNumber(row * 10 + 1, (row + 1) * 10);
      } while (rowNumbers.includes(num));
      rowNumbers.push(num);
    }

    //sorting arrays in ascending
    rowNumbers.sort((a, b) => a - b);

    //filling 4 zero values in each row at random indexs without replacing any existing value
    while (rowNumbers.length < 9) {
      const zeroIndex = getRandomNumber(0, rowNumbers.length);
      rowNumbers.splice(zeroIndex, 0, 0);
    }
    ticket.push(rowNumbers);
  }

  //here i am assuring that each cloumn must have at least one hero value and if not so swaping with non zero index

for (let col = 0; col < 9; col++) {
  let nonZeroFound = false;
  for (let row = 0; row < 3; row++) {
    if (ticket[row][col] !== 0) {
      nonZeroFound = true;
      break;
    }
  }
  if (!nonZeroFound) {
    const row = getRandomNumber(0, 2);
    const nonZeroIndex =[];
    for(let i=0;i<9;i++){
      if(ticket[row][i]!==0){
        nonZeroIndex.push(i);
      }
    }
    const RandomNonZeroIndex=nonZeroIndex[getRandomNumber(0,nonZeroIndex.length-1)]
    ticket[row][col] = ticket[row][RandomNonZeroIndex];
    ticket[row][RandomNonZeroIndex] = 0;
  }
}


//here i am checking values for column like 1st column should have 0 to 9 2nd 10 to 19.......
//and checking for uniqueness
 for (let col = 0; col < 9; col++) {
    for (let row = 0; row < 3; row++) {
      if (ticket[row][col] !== 0) {
        // console.log("col", col, "cloumnvalues", columnValues);
        ticket[row][col] = columnValues.get(col).pop();
      }
    }
  }
  return ticket;
} 





function generateTicketForSixth(columnValues) {
  const ticket = [];
  countIteration++;
  for (let row = 0; row < 3; row++) {
    const rowNumbers = [];
    //filling 5 random numbers in each row
    for (let i = 0; i < 5; i++) {
      let num;
      do {
        num = getRandomNumber(row * 10 + 1, (row + 1) * 10);
      } while (rowNumbers.includes(num));
      rowNumbers.push(num);
    }

    //sorting arrays in ascending
    rowNumbers.sort((a, b) => a - b);
    //filling 4 zero values in each row at random indexes without replacing any existing value
    while (rowNumbers.length < 9) {
      if (countIteration == 1) {
        if (row == 0) {
          rowNumbers.splice(1, 0, 0);
          rowNumbers.splice(2, 0, 0);
          rowNumbers.splice(4, 0, 0);
          rowNumbers.splice(6, 0, 0);
        }
        if (row == 1) {
          rowNumbers.splice(0, 0, 0);
          rowNumbers.splice(1, 0, 0);
          rowNumbers.splice(3, 0, 0);
          rowNumbers.splice(5, 0, 0);
        }
        if (row == 2) {
          rowNumbers.splice(0, 0, 0);
          rowNumbers.splice(2, 0, 0);
          rowNumbers.splice(7, 0, 0);
          rowNumbers.splice(8, 0, 0);
        }
      }
      if (countIteration == 2) {
        if (row == 0) {
          rowNumbers.splice(1, 0, 0);
          rowNumbers.splice(3, 0, 0);
          rowNumbers.splice(5, 0, 0);
          rowNumbers.splice(7, 0, 0);
        }
        if (row == 1) {
          rowNumbers.splice(0, 0, 0);
          rowNumbers.splice(3, 0, 0);
          rowNumbers.splice(4, 0, 0);
          rowNumbers.splice(6, 0, 0);
        }
        if (row == 2) {
          rowNumbers.splice(2, 0, 0);
          rowNumbers.splice(4, 0, 0);
          rowNumbers.splice(5, 0, 0);
          rowNumbers.splice(8, 0, 0);
        }
      }
      if (countIteration == 3) {
        if (row == 0) {
          rowNumbers.splice(1, 0, 0);
          rowNumbers.splice(4, 0, 0);
          rowNumbers.splice(6, 0, 0);
          rowNumbers.splice(8, 0, 0);
        }
        if (row == 1) {
          rowNumbers.splice(0, 0, 0);
          rowNumbers.splice(3, 0, 0);
          rowNumbers.splice(6, 0, 0);
          rowNumbers.splice(7, 0, 0);
        }
        if (row == 2) {
          rowNumbers.splice(2, 0, 0);
          rowNumbers.splice(5, 0, 0);
          rowNumbers.splice(7, 0, 0);
          rowNumbers.splice(8, 0, 0);
        }
      }
      if (countIteration == 4) {
        if (row == 0) {
          rowNumbers.splice(1, 0, 0);
          rowNumbers.splice(3, 0, 0);
          rowNumbers.splice(6, 0, 0);
          rowNumbers.splice(8, 0, 0);
        }
        if (row == 1) {
          rowNumbers.splice(0, 0, 0);
          rowNumbers.splice(2, 0, 0);
          rowNumbers.splice(5, 0, 0);
          rowNumbers.splice(7, 0, 0);
        }
        if (row == 2) {
          rowNumbers.splice(0, 0, 0);
          rowNumbers.splice(1, 0, 0);
          rowNumbers.splice(2, 0, 0);
          rowNumbers.splice(4, 0, 0);
        }
      }
      if (countIteration == 5) {
        if (row == 0) {
          rowNumbers.splice(1, 0, 0);
          rowNumbers.splice(3, 0, 0);
          rowNumbers.splice(5, 0, 0);
          rowNumbers.splice(7, 0, 0);
        }
        if (row == 1) {
          rowNumbers.splice(0, 0, 0);
          rowNumbers.splice(4, 0, 0);
          rowNumbers.splice(6, 0, 0);
          rowNumbers.splice(7, 0, 0);
        }
        if (row == 2) {
          rowNumbers.splice(3, 0, 0);
          rowNumbers.splice(4, 0, 0);
          rowNumbers.splice(5, 0, 0);
          rowNumbers.splice(6, 0, 0);
        }
      }
      if (countIteration == 6) {
        if (row == 0) {
          rowNumbers.splice(2, 0, 0);
          rowNumbers.splice(4, 0, 0);
          rowNumbers.splice(6, 0, 0);
          rowNumbers.splice(8, 0, 0);
        }
        if (row == 1) {
          rowNumbers.splice(0, 0, 0);
          rowNumbers.splice(2, 0, 0);
          rowNumbers.splice(7, 0, 0);
          rowNumbers.splice(8, 0, 0);
        }
        if (row == 2) {
          rowNumbers.splice(0, 0, 0);
          rowNumbers.splice(1, 0, 0);
          rowNumbers.splice(3, 0, 0);
          rowNumbers.splice(5, 0, 0);
        }
      }
    }
    ticket.push(rowNumbers);
  }

  for (let col = 0; col < 9; col++) {
    for (let row = 0; row < 3; row++) {
      if (ticket[row][col] !== 0) {
        // console.log("col", col, "cloumnvalues", columnValues);
        ticket[row][col] = columnValues.get(col).pop();
      }
    }
  }

  return ticket;
}



function generateTickets(size,columnValues) {
  const tickets = {};
  let i = 1;
  let j = 1;
  if(size<=4){
 while (i <= size) {
    const ticketKey = "ticket" + j++;
    let ticket = generateTicket(new Map(columnValues));
    tickets[ticketKey] = ticket;
    // console.log("lessthanticket",tickets)
    i++;
  }
  }
  else if(size>4){
     while (i <= size) {
    const ticketKey = "ticket" + j++;
    let ticket = generateTicketForSixth(new Map(columnValues));
    tickets[ticketKey] = ticket;
    i++;
  }
  }
 
columnValues.clear();
// console.log(columnValues)
countIteration=0;
  return tickets;
}



function getRandomNumber(min, max) {
  let value = Math.floor(Math.random() * (max - min + 1)) + min;
  return value;
}


function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}


function GenerateAllTickets(size){
  const maxBatchSize = 6;
  let remainingSize = size;
  let allTickets=[];
  while (remainingSize > 0) {
    const currentSize = Math.min(remainingSize, maxBatchSize);
   
    // Create a new columnValues map for each batch
    const columnValues = new Map();
    for (let col = 0; col < 9; col++) {
      const values = [];
      for (let i = col * 10; i < (col + 1) * 10; i++) {
        if (i == 0) {
          i = 1;
        }
        values.push(i);
      }
      if (col == 8) {
        values.push(90);
      }
      shuffleArray(values);
      columnValues.set(col, values);
    }

    const tickets = generateTickets(currentSize, new Map(columnValues));
    columnValues.clear();
    // console.log(columnValues)
    allTickets.push(tickets);
    // console.log(`Generated ${currentSize} tickets:`, tickets);
    remainingSize -= currentSize;
  }

  let AllMergedTickets= mergeTickets(allTickets);
  return AllMergedTickets
}



function mergeTickets(ticketSets) {
  const mergedSet = {};
  let ticketNumber = 1;

  for (const ticketSet of ticketSets) {
    for (const ticket in ticketSet) {
      mergedSet[`ticket${ticketNumber}`] = ticketSet[ticket];
      ticketNumber++;
    }
  }

  return mergedSet;
}

const show=GenerateAllTickets(10)
console.log(show)


module.exports={
  GenerateAllTickets
}












