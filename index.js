const { response } = require('express');
const express = require('express');
const { google } = require('googleapis');
const { androidpublisher } = require('googleapis/build/src/apis/androidpublisher');

const app = express();
app.set("view engine", "ejs");
app.use(express.urlencoded({extended: true}));
app.use(express.static('public'));




app.get("/", (req, res) => {
    res.render("index");
});

app.get("/About", (req, res) => {
    res.render("indexAbout");
});

app.post("/", async(req, res) => {
    const {id, Name, Phone, Email, Gender, sub, find, replace, deleter} = req.body;
    var idR = parseInt(id) + 1; 
    var deleter1 = parseInt(deleter) + 1 ;
    var rangeD = "Sheet1!A" + deleter1 + ":F" + deleter1;
    var idRange = "Sheet1!A" +  idR + ":F" + idR;
    console.log(id)
    console.log(idR)
    console.log(idRange)
    const spreadsheetId = "11pS8SMn_DaukXm6diIxaPc195qjJXgiTd9PAHmCzUS8"
    const auth = new google.auth.GoogleAuth({
        keyFile: "keys.json",
        scopes: "https://www.googleapis.com/auth/spreadsheets",
    });

    // Create client instance for auth
    const client = await auth.getClient();
    
    // Inctance of google sheets api
    const googleSheets = google.sheets({version: "v4", auth: client});

    // Get (Request data) metadata about spreadsheet
    const metaData = await googleSheets.spreadsheets.get({
        auth,
        spreadsheetId,
    });

    //Write row(s) to spreadsheet
    
    try {await googleSheets.spreadsheets.values.append({
        auth,
        spreadsheetId,
        range:idRange,
        valueInputOption: "USER_ENTERED",
        resource: {
            values: [[id, Name, Phone, Email, Gender, sub]],
        },
    });}catch (err) {
        console.error(err);
      }

    const request ={
        auth,
        spreadsheetId,
        resource: {
            requests: [{
                findReplace : {
                    find : find,
                    replacement: replace,
                    allSheets: true
                }
            }]
        }
    };

    try{
    const response = (await googleSheets.spreadsheets.batchUpdate(request)).data;
    console.log(JSON.stringify(response,null, 2));
    } 
    catch(err){
        console.error(err)
    }

    const deleteR ={
        spreadsheetId,
        range : rangeD
    }
    
    try {
        console.log(rangeD);
        const response = (await googleSheets.spreadsheets.values.clear(deleteR)).data;
        console.log(JSON.stringify(response, null, 2));
      } catch (err) {
        console.error(err);
      }
    
});

app.get("/data", async(req,res) =>{
    const auth = new google.auth.GoogleAuth({
        keyFile: "keys.json",
        scopes: "https://www.googleapis.com/auth/spreadsheets",
    });
    
    const client = await auth.getClient();
    const googleSheets = google.sheets({version: "v4", auth: client});
    const spreadsheetId = "11pS8SMn_DaukXm6diIxaPc195qjJXgiTd9PAHmCzUS8"
    
    const request ={
        auth,
        spreadsheetId,
    };

    const infoTab = await googleSheets.spreadsheets.get({
        auth,
        spreadsheetId
    });
   

    const getRows = await googleSheets.spreadsheets.values.get({
        auth,
        spreadsheetId,  
        range: "Sheet1!A2:Z",
    });
    
    let sheet1 = getRows.data.values;
    let title = infoTab.data.properties.title;
    let sheetname = infoTab.data.sheets[0].properties.title;
    let version = infoTab.config.userAgentDirectives[0].version;

    res.json({
        headers: ["id","Full name", "Phone", "E-mail","Gender", "Subscription Date"],
        rows: sheet1,
        lastUpdate: new Date().toISOString(),
        infoTab : title,
        sheetNameTab: sheetname,
        versionTab: version,
        else : infoTab
        
    });
})



app.listen(1337, (req, res) => console.log("running on 1337"));