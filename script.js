const outputElement = document.querySelector("#output")
const searchInput = document.querySelector("#searchInput")

searchInput.addEventListener("keypress", event => {
  if (event.charCode === 13) {
    const searchTerm = event.target.value
    outputElement.innerHTML = ""

    salesByWeek.forEach(sale => {
       for (const value of Object.values(sale.sales_agent)) {
              if (value.toUpperCase().includes(searchTerm.toUpperCase())) {
                    let firstName = sale.sales_agent.first_name
                    let lastName = sale.sales_agent.last_name
                    outputElement.innerHTML += `<h1>${firstName} ${lastName}<h1>`
                    
                    for (const entry of Object.entries(sale.vehicle)) {
                        outputElement.innerHTML += `<div>${entry[0]}: ${entry[1]}</div>`
                    }
                    
                    outputElement.innerHTML += `<h4>Profit: $${sale.gross_profit}</h4><hr/>`
                }
       
    }
    });
  }
})

salesByWeek.forEach(sale => {
    let firstName = sale.sales_agent.first_name
    let lastName = sale.sales_agent.last_name
    outputElement.innerHTML += `<h1>${firstName} ${lastName}<h1>`
    
    for (const entry of Object.entries(sale.vehicle)) {
        outputElement.innerHTML += `<div>${entry[0]}: ${entry[1]}</div>`
    }
    
    outputElement.innerHTML += `<h4>Profit: $${sale.gross_profit}</h4><hr/>`
})      