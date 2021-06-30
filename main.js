// url of the website circinfo
const url = "https://www.espncricinfo.com/series/ipl-2020-21-1210595";
// fs module 
const fs = require("fs");
// path module
const path = require("path");
// Venue date opponent result runs balls fours sixes sr
// request module to get the HTTP page 
const request = require("request");
// cheerio to parse and save the HTTP
const cheerio = require("cheerio");
// this denotes that something has been exported by Allmatch.js , which will be used here via AllMatchOBJ object
const AllMatcgObj = require("./Allmatch");
// home page 
const iplPath = path.join(__dirname, "ipl");
dirCreater(iplPath);
// request object to get the html page from the IP adress of the page
request(url, cb);
function cb(err, response, html) {
    if (err) {
        console.log(err);
    } else {
        // console.log(html);
        extractLink(html);
    }
}

// this function gets the 
function extractLink(html) {
    // parse the html and get the function(named $ here)
    let $ = cheerio.load(html);
    // the function obtained above will be used to select the elements from the html page using css selectors
   // css selectors passed to the function obtained will give the required results
    // the selector passed here will be containing the info about the url of the results page we are interested in to take the results from
    let anchorElem = $("a[data-hover='View All Results']");
    //  get the link to the results page
    let link = anchorElem.attr("href");
    // console.log(link);
    //  get the fulllink 
    let fullLink = "https://www.espncricinfo.com" + link;
    console.log(fullLink);
    // the AllMatcgObj calls the imported object gAlmatches which is actually exporting the function get  
    // 
    AllMatcgObj.gAlmatches(fullLink);
}

function dirCreater(filePath) {
    if (fs.existsSync(filePath) == false) {
        fs.mkdirSync(filePath);
    }

}