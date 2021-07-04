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
you cannot install javascript
it is always wrapped in an env
it doesn't have main -> it has a global execution context
the fns get on the stack and get executed line by line

// async function-->
you cannot create async fn (they are always derived from modules e.g. fs.readFile() from fs module)

so this fn will be on the stack 
nodejs -> an async fn cannot block the main stack 
so fs.readFile won't be allowed to be in the stack when os would have been reading the file and hence, whenever there is a async function , the working of the already present functions will not be hindered as nodejs will not allow the async fn to block them by removing it from the stack and sending it to the api area where it will be performed by the modules etc. and performing the required functionality.

The stack used here is called execution stack.


so we have a callback/message/waiting queue 

lets consider we have a async function and then a while(true) statement .

Now, once the async function on completion give a callback -> which will be stored in the waiting queue -> which will be sent to the stack only when all the contents present in the stack are completed and the stack is empty. Since, callback code is written by us, so it will only be executed via main stack . All the functions, made by us are executed through the stack . So after going to the stack , the error or the corresponding contents are printed  ---------> ASYNC architecture of nodejs/ browser.  Till the time the stack isn't empty , the messages from waiting queue won't be sent to the stack and that is why async wale fns last mei hi execute honge since callback last mei hi jaayega stack mei . Waiting queue is made on basis of time of completion of the async i.e. at the time they are coming to the waiting queue. 

Now, in order to continously check whether the stack is empty or not , in order to fill the waiting queue in the stack , there is a continous while loop checking , called the event loop. 

callback is just a confirmation ki kaam ho gaya hai async fn ka.

ek ek karke callback fns jaayenge from waiting queue to stack .

fs.readfile -> stack -> api area -> waiting queue mei callback -> back to stack for error printing or result printing

execution stack --> similar to stack in java
execution context ---> similar to fn calls in java


sync , async , parallel , serial 

sync and async -> functions
sync -> function which gets whole executed at once and then only next fn on stack is executed.
async -> function is called on the stack and then its implementation or execution is done on API . Part of fn is executed immediately on the stack () and rest of the function is executed later by the API ().

parallel and serial -> these are tasks 
image downloaded can be done serially or parallely(preffered parallely),  tasks done parallely are independent tasks , dependent tasks are done serially.

kya sync ke through parallel kaam ho skta ? nhi as wo pura ek saath ho jaayega serially 
kya async se ho skta ? haan 
kya async se parallel ho skta ? haan 

and in case of async -> since wo multiple parts mei execute ho rha so isse parallel kaam bhi kar skte. as async aaya .. uski call lag jaayegi wo api section mei chala gaya .. and then next async call aayi wo phir waha chala gaya and hence wo parallelly work kar skte hai .. but sync fn ek baar pura execute hoga and then hi dusra call hoga and thus koi work ko agar sync function use karke kia to wo sirf parallelly hi ho skta but async mei parallelly ho jaayega 

parallely karne ka matlab .. 4 kaam ek saath ho rhe .. koi kabhi bhi ho skta.

callback hell 

kaam khtm hone ke baad api call karti hai callback ko ... and then wo waiting queue mei jaake store ho jaata hai

hum async isliye use nhi karna chahte as hum main stack block nhi karna chahte .


