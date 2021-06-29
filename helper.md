1. The main task here is to take the input (url of the website where the info is present) and get the folders of the teams in which each folder will have the batsman name and info regarding their performance.

2. Input(url)---->scrap the data ----> convert to xslx

3. webscrapping -> convert the unstructured website data to structured data
browser -> requests DNS -> get the IP -> then sends the request to the IP -> and get the required HTML file from the server --> browser parses this HTML file and renders UI (Request response cycle)

4. TASKS :: Request to get the data(request module)  + parse the html and extract the data(cheerio module) + Save the data(xslx+fs)

5. npm -> consists of modules -> we will be using fs,cheeros,xslx,request

6. 