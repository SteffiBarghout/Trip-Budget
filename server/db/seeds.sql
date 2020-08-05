insert into User (firstname, middleinitial, lastname, phonenumber, email, dateofbirth, username, password) values ("User", "U", "User", "9999999999", "guest@tripbudget.com", "08/04/2020", "guest", "$2b$10$5YaHDamMenYbZCYRKOjlxeA8m6GjcIv5q1TH4JmE7lccbPSCHbxUS");

insert into Trip (tripname, totalcost) values ("Colorado", "$800.00");

insert into Companion (firstname, middleinitial, lastname, phonenumber, email, dateofbirth) values ("Companion", "C", "Companion", "9999999999", "companion@tripbudget.com", "08/04/2020");

insert into Budget (budgetamount, totalamount, actualamount, amountperperson) values ("$800.00", "$900.00", "$1000.00", "$500.00");

insert into LogBudget (food, foodcost, airline, airlinecost, placetostay, staycost, carrentalcompany, rentalcost, misc, misccost, totalamount) values ("In 'n Out", "$5.00", "United Airlines", "$200.00", "Red Roof Inn", "$50.00", "Hertz", "$200.00", "Kayaking", "$100.00", "$555.00");

insert into Airfare (airline, cost) values ("United Airlines", "$200.00");

insert into CarRental (company, cartype, cost) values ("Hertz", "Toyota, Corolla", "$200.00");

insert into Food (food, cost) values ("In 'n Out", "$5.00");

insert into Hotel (hotelname, cost) values ("Red Roof Inn", "$50.00");

insert into Misc (description, cost) values ("Kayaking", "$100.00");