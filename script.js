//// Async/Await :
async function getData() {
    const url = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false";
    const response = await fetch(url);
    console.log(response);
    const data = await response.json();                                  // response.json converts into object
    // console.log(data);                                                // returns an array of objects
    return data;
}

async function callGetData() {
    const responseData = await getData();
    console.log(responseData);                                          // array of objects
    let tableData = "";
    responseData.map((values, index) => {                               // 'map' traverses through each object/each element...1 row = 1 value
        tableData += `<tr>                                               
        <td><img src="${values.image}"/></td>
        <td>${values.name}</td>
        <td>${values.symbol}</td>
        <td>$${values.current_price}</td>
        <td>$${values.total_volume}</td>
        <td class="${values.price_change_percentage_24h > 0 ? "positiveValues" : "negativeValues"}">${values.price_change_percentage_24h}</td>
        <td> Mkt Cap : $${values.market_cap}</td>
        </tr>`

        /// if price change % is greater than 0 then class = positiveValues, if % is less than 0 then class = negativeValues
    })
    document.getElementById("table-body").innerHTML = tableData;
}
callGetData();

// setInterval(()=>{                                                // if we want to auto-update the data aftr every 5sec
//     callGetData();                                               // its auto-updating but we need to refresh the page every 5sec to see changes
// }, 5000)


// //// .then method :
// function fetchData() {
//     const url = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false";
//     fetch(url)
//         .then((response) => {
//             console.log(response);
//             return response.json();
//         })
//         .then((data) => {
//             console.log(data);
//             let tableData = "";
//             data.map((values, index) => {
//                 tableData += `<tr>
//         <td><img src="${values.image}"/></td>
//         <td>${values.name}</td>
//         <td>${values.symbol}</td>
//         <td>$${values.current_price}</td>
//         <td>$${values.total_volume}</td>
//         <td class="${values.price_change_percentage_24h > 0 ? "positiveValues" : "negativeValues"}">${values.price_change_percentage_24h}</td>
//         <td> Mkt Cap : $${values.market_cap}</td>
//         </tr>`
//             })
//             document.getElementById("table-body").innerHTML = tableData;
//         })
// }
// fetchData();

