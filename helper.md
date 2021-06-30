1. The main task here is to take the input (url of the website where the info is present) and get the folders of the teams in which each folder will have the batsman name and info regarding their performance.

2. Input(url)---->scrap the data ----> convert to xslx

3. webscrapping -> convert the unstructured website data to structured data
browser -> requests DNS -> get the IP -> then sends the request to the IP -> and get the required HTML file from the server --> browser parses this HTML file and renders UI (Request response cycle)

4. TASKS :: Request to get the data(request module)  + parse the html and extract the data(cheerio module) + Save the data(xslx+fs)

5. npm -> consists of modules -> we will be using fs,cheeros,xslx,request

6. async version -> diff from sync in the sense that if fs.readFileASync() used instead of Sync() then, the ordering of printing of the results would be different .So, on using this , the read file thing would happen , but the results will only be printed out after everything else present after the async call has been done. This is because async calls through callbacks and hence, the time to actually execute the callbacks exceeds that taken up by the normal further commands to print the req results and hence if async used , then the file contents would be displayed at the last.

7. Request module -> request(url,callback_fn_address)

8. For the css selector used in the function extractLink in main.js , go to the site url , do page inspect, ctrl+f and put the value inside the quotes there. We will be able to reach the line with the url of the results page in it .. achieving where we really wanted to be.

9. 