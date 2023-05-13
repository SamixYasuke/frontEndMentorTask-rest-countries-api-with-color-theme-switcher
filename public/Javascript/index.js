document.addEventListener('DOMContentLoaded', ()=> {
  const filter = document.querySelector("#continents-select");
  const rows = document.querySelectorAll(".row");
  filter.addEventListener("change", ()=> {
    const selectedRegion = filter.value;
    rows.forEach((row) => {
      const rowRegion = row.querySelector(".regionName").textContent;
      if (selectedRegion === "" || rowRegion === `Region: ${selectedRegion}`) {
        row.classList.remove("d-none");
      }else{
        row.classList.add("d-none");
      }
    });
  });

  const input = document.querySelector(".input-field");
  input.addEventListener("input", ()=>{
    rows.forEach((row)=>{
      const country = row.querySelector(".countryName").textContent;
      if(input.value === "" || input.value.toLowerCase() === country.toLowerCase()){
        row.classList.remove("d-none");
      }else{
        row.classList.add("d-none");
      }
    })
  });
  
  rows.forEach((row) => {
    row.addEventListener("click", () => {
      const country = row.querySelector(".countryName").textContent;
      // Redirect to another page with the country name in the URL
      window.location.href = `/country-details/${encodeURIComponent(country)}`;
    });
  });    
});
