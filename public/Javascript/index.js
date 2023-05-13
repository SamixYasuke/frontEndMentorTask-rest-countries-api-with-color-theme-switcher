// document.addEventListener('DOMContentLoaded', function() {
//     var selectElement = document.getElementById('continents-select');
//     selectElement.addEventListener('change', function() {
//       var selectedValue = selectElement.value;
//       // Send an AJAX request to the backend
//       var xhr = new XMLHttpRequest();
//       xhr.open('POST', '/', true);
//       xhr.setRequestHeader('Content-Type', 'application/json');
//       xhr.send(JSON.stringify({ Continents: selectedValue }));
//     });
// });

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
});