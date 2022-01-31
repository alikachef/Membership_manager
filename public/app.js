{
    /**
     * 
     * @param {HTMLDivElement} root
     */
async function updateTable(root){
  
       
  const table = root.querySelector(".table-refresh__table");
  const response = await fetch(root.dataset.url);
  const data  = await response.json();
  console.log(data);   
  //clear table
  table.querySelector("thead tr").innerHTML = "";
  table.querySelector("tbody ").innerHTML = "";

  for (const header of data.headers){
    table.querySelector("thead tr").insertAdjacentHTML('beforeEnd',`<th> ${header}</th>`);
  }

  for (const row of data.rows){
    table.querySelector("tbody").insertAdjacentHTML("beforeEnd",`
    <tr> 
        ${row.map(col => `<td> ${col} </td>`).join("")}
    </tr>
    
    `);
  }

  
  document.getElementById('sname').innerHTML = ("beforeEnd",` <h6>Title</h6><p>${data.infoTab}</p>`);
  document.getElementById('shname').innerHTML = ("beforeEnd",` <h6>Sheet Name</h6><p>${data.sheetNameTab}</p>`);
  document.getElementById('sowner').innerHTML = ("beforeEnd",` <h6>Owner</h6><p>Ali Kachef</p>`);
  document.getElementById('sversion').innerHTML = ("beforeEnd",` <h6>Version</h6><p>${data.versionTab}</p>`);
 
  tr = document.getElementsByTagName('tr');
  otp= new Date();
  otp1 = otp.setHours(0,0,0,0);
  let activeU = 0, unactiveU = 0, renwalU = 0, totalU =0 
  for(let i = 0; i < tr.length; i++){
    td = tr[i].getElementsByTagName('td')[5];
    if(td){

      textValue = td.textContent || td.innerText;
      date = new Date(textValue);
      pDate = date.setDate(date.getDate() - 10);
      if(new Date(textValue).getTime() <= new Date(otp1).getTime()){
        tr[i].style.backgroundColor = "red";
        tr[i].style.color = "White";
        tr[i].style.borderBottom = "1px solid lightGray";
        unactiveU++
        document.getElementById('unactiveU').innerHTML = "Unactive Users: " + unactiveU;
      }
      else if (new Date(pDate).getTime() <= new Date(otp1 ).getTime()){
        tr[i].style.backgroundColor = "orange";
        tr[i].style.color = "White";
        tr[i].style.borderBottom = "1px solid lightGray";
        renwalU++
        document.getElementById('rnewalN').innerHTML = "Renewal Needed: " + renwalU;

      }
      else {
        tr[i].style.backgroundColor = "green";
        tr[i].style.color = "White";
        tr[i].style.borderBottom = "1px solid lightGray";
        activeU++
        document.getElementById('activeU').innerHTML = "Active Users: " + activeU;
      }
      totalU++
      document.getElementById('totalU').innerHTML = "Total Users: " + totalU;
    }
  }
  root.querySelector(".table-refresh__button").classList.add("table-refresh__button--refreshing");
  root.querySelector(".table-refresh__label").textContent = `Last Update: ${new Date(data.lastUpdate).toLocaleString()}`;
  root.querySelector(".table-refresh__button").classList.remove("table-refresh__button--refreshing");         
          
}


    
    for (const root of document.querySelectorAll(".table-refresh[data-url]")){
        const table =document.createElement("table");
        const options = document.createElement("div");

        table.classList.add("table-refresh__table");
        options.classList.add("table-refresh__options");

        table.innerHTML = `
        <thead>
            <tr></tr>
        </thead>

        <tbody>
            <tr>
                <td>Loading</td>
            </tr>
        </tbody>
        `;

        options.innerHTML = `
        <span class="table-refresh__label">Last Update: never</span>
        <button type="button" class="table-refresh__button">
            <i class="material-icons">history</i>
        </button>  
        `;

        root.append(table,options);

        options.querySelector(".table-refresh__button").addEventListener("click", ()=> {
          updateTable(root);
        });

        updateTable(root);
    }

    function tableSearch(){
        let input, filters, table, tr, td, textValue, selection

        
        input = document.getElementById('search-input');
        filters = input.value.toUpperCase();
        table = document.getElementsByClassName('table-refresh__table');
        tr = document.getElementsByTagName('tr');
        selection = document.querySelector('#selection');
        output = selection.value;
        console.log(output);

        for(let i = 0; i < tr.length; i++ ){
          if(output == 'Name'){
            td = tr[i].getElementsByTagName('td')[1];
            if(td){
              textValue = td.textContent || td.innerText ;
              if(textValue.toUpperCase().indexOf(filters) > -1){
                  tr[i].style.display= "";
              }
              else{
                  tr[i].style.display = "none";
              }
          }
          }
          else if(output == 'Date'){
            td = tr[i].getElementsByTagName('td')[5];
            if(td){
              textValue = td.textContent || td.innerText;
              if(textValue.toUpperCase().indexOf(filters) > -1){
                  tr[i].style.display= "";
              }
              else{
                  tr[i].style.display = "none";
              }
          }
          }
          else if(output == 'Phone'){
            td = tr[i].getElementsByTagName('td')[2];
            if(td){
              textValue = td.textContent || td.innerText;
              if(textValue.toUpperCase().indexOf(filters) > -1){
                  tr[i].style.display= "";
              }
              else{
                  tr[i].style.display = "none";
              }
          }
          }
          else if(output == 'Gender'){
            td = tr[i].getElementsByTagName('td')[4];
            if(td){
              textValue = td.textContent || td.innerText;
              if(textValue.toUpperCase().indexOf(filters) > -1){
                  tr[i].style.display= "";
              }
              else{
                  tr[i].style.display = "none";
              }
          }
          }
          else if (output == 'Email'){
            td = tr[i].getElementsByTagName('td')[3];
            if(td){
              textValue = td.textContent || td.innerText;
              if(textValue.toUpperCase().indexOf(filters) > -1){
                  tr[i].style.display= "";
              }
              else{
                  tr[i].style.display = "none";
              }
            }
          }    
        }
    }
    
    function submit_btn(){ 
     
      document.querySelector('.bg-model').style.display = 'none';
        document.querySelector('.bg-model1').style.display = 'none';
        document.querySelector('.bg-model2').style.display = 'none';
        const timeout = setTimeout(updatet, 500);
        function updatet() {
          for (const root of document.querySelectorAll(".table-refresh[data-url]")){
          updateTable(root);
        }
      }
    }

    function nav_open() {
        document.getElementById("mySidebar").style.display = "block";
      }
      
      function nav_close() {
        document.getElementById("mySidebar").style.display = "none";

      }

      document.getElementById('btn').addEventListener('click', function() 
      {
        document.querySelector('.bg-model').style.display = 'flex';
        document.getElementById("mySidebar").style.display = "none";
        document.querySelector('.bg-model1').style.display = 'none';
        document.querySelector('.bg-model2').style.display = 'none';
      });

      document.querySelector('.close').addEventListener('click', function()
      {
        document.querySelector('.bg-model').style.display = 'none';
        document.querySelector('.bg-model1').style.display = 'none';
        document.querySelector('.bg-model2').style.display = 'none';
      });

      document.getElementById('btn-link2').addEventListener('click', function() 
      {
        document.querySelector('.bg-model').style.display = 'none';
        document.querySelector('.bg-model1').style.display = 'flex';
        document.getElementById("mySidebar").style.display = "none";
        document.querySelector('.bg-model2').style.display = "none";
      });

      document.querySelector('.close1').addEventListener('click', function()
      {
        document.querySelector('.bg-model').style.display = 'none';
        document.querySelector('.bg-model1').style.display = 'none';
        document.querySelector('.bg-model2').style.display = 'none';
      });

      document.getElementById('btn-link3').addEventListener('click', function() 
      {
        document.querySelector('.bg-model').style.display = 'none';
        document.querySelector('.bg-model2').style.display = 'flex';
        document.getElementById("mySidebar").style.display = "none";
        document.querySelector('.bg-model').style.display = 'none';
      });

      document.querySelector('.close2').addEventListener('click', function()
      {
        document.querySelector('.bg-model').style.display = 'none';
        document.querySelector('.bg-model1').style.display = 'none';
        document.querySelector('.bg-model2').style.display = 'none';
      });

      
}

