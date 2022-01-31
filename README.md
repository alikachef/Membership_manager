About this App

This Web app will transform your google spreadsheet to a fully functional app with interface to display, edit and manage your spreadsheet.
this app uses JavaScript, Node Js, Express Js, and Google Sheets Api 

![](https://github.com/alikachef/Membership_manager/blob/master/public/components/GoogleRW.png)
![alt text](https://github.com/alikachef/Membership_manager/blob/master/public/components/Member%20ship%20manager.png)
Turn Figure 1 into Figure 2


All data in this app is pulled from a google spreadsheet thats including the title
Some data is programed using Javascript to show additional information

![](https://github.com/alikachef/Membership_manager/blob/master/public/components/Member%20JavaBlock.png)
information blocks Figure 3

These Blocks uses JavaScript to calculate these Data. Active Users is the count of green bars and it doesnt count nulls. Unactive users count red bars and doesnt count nulls. Renual needed counts the yellow bars without counting nulls. and total count is how many entry this spreadsheets have without counting nulls. Even if there is empty row in the middle of the spreadsheet that wouldnt be counted

![](https://github.com/alikachef/Membership_manager/blob/master/public/components/Member%20adduser.png)
Add User Modal Figure 4

Sign Up a New User uses the POST append google api funtion to take user input and create a row for the added entry. these are not ristricted as its a database. therefore, if you add a random number and random values it will still display on the table. adding an ID will determine where the row will be added. adding an ID on an existing row it will append the table but if you delet a row in the middle of the table then you can fill the deleted the row by using the ssame deleted number ID

![](https://github.com/alikachef/Membership_manager/blob/master/public/components/Member%20finduser.png)
Find & Replace Modal Figure 5

Find & Replace uses the POST batchUpdate google api funtion to take user input to find text and replace it with the entered text. this feature doesnt look for a word rather than any word contains the text for example if you try to find male it will replace fe(male) and male. Caoution is necessery to use this app

![](https://github.com/alikachef/Membership_manager/blob/master/public/components/Member%20delete.png)
Delete Modal Figure 6

Delete Row uses the POST clear google api funtion to take user input and clear the value of the row. (row number should corresponds with the id)

![](https://github.com/alikachef/Membership_manager/blob/master/public/components/Member%20table.png)
Table Figure 7

Table grab each row in the spreadsheet and creates a row on this table using the GET grab google api funtion. each row is color coded based on the date (Subscription End Date) Using JavaScript it compares todays date and the date provided. if the date have passed it will color it Red as its (Unactive Users) the date have expired.The yellow color (Renewal Needed) suggest that its 10 days before experation. and green indicates (Active Users) the date havent expired and its more than 10 days before experation

![](https://github.com/alikachef/Membership_manager/blob/master/public/components/Member%20search.png)
Table search bar and select box Figure 8

Search Bar uses onkeyup funtion to filter by input dynamically as the user type. select box give the option to user to select search by (ex. name)

![](https://github.com/alikachef/Membership_manager/blob/master/public/components/Member%20lastupdate.png)
Last Update Table Refresh Figure 9

Displays the last update on the table and the refresh button will update the date and the table on press.

![](https://github.com/alikachef/Membership_manager/blob/master/public/components/Member%20info.png)
SpreadSheet Info Tab Figure 10

 Info Tab grabs information of the spreadsheet using the GET grab google api funtion and displays them in the corresponding tab.

            
