  let arr=[  
  {name: "fruits of planet fruit", image: "https://images.unsplash.com/photo-1618897996318-5a901fa6ca71?q=80&w=3764&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  {name: "orange peeled fruit", image: "https://images.unsplash.com/photo-1557800636-894a64c1696f?q=80&w=3337&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
  {name: "web design", image: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
  {name: "apple juice fruit", image: "https://images.unsplash.com/photo-1576673442511-7e39b6545c87?q=80&w=3456&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
  {name:"person swimming",image:"https://images.unsplash.com/photo-1683009427470-a36fee396389?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw2fHx8ZW58MHx8fHx8"},
  {name:"men with umbrella",image:"https://images.unsplash.com/photo-1710610383283-37ecdf156c60?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
  {name:"person cutting oranges fruit",image:"https://plus.unsplash.com/premium_photo-1676642613556-e3a217b2751e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZnJ1aXRzfGVufDB8fDB8fHww"},
  {name:"stawberry fruit",image:"https://images.unsplash.com/photo-1601004890684-d8cbf643f5f2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGZydWl0c3xlbnwwfHwwfHx8MA%3D%3D"},
  {name:"coder human",image:"https://plus.unsplash.com/premium_photo-1673984259285-ac2152a63f1e?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
  {name:"web-coder human",image:"https://images.unsplash.com/photo-1581464647113-0196a7dc232b?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
  {name:"Horse animal",image:"https://images.unsplash.com/photo-1594768816441-1dd241ffaa67?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
  {name:"Dog animal",image:"https://images.unsplash.com/photo-1530281700549-e82e7bf110d6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZG9nfGVufDB8fDB8fHww"},
  {name:"car animal",image:"https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2F0fGVufDB8fDB8fHww"},
  {name:"A men on horse",image:"https://images.unsplash.com/photo-1537985961236-980bc462ff8a?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
  ]

  function showTheCard(searchTerm = ''){
      var clutter ="";
      arr.forEach(function(obj){
        if(obj.name.toLowerCase().includes(searchTerm.toLowerCase())){
          clutter +=  ` <div class="box">
          <img class="cursor-pointer" src="${obj.image}" alt="image">
          <div class="caption">${obj.name.toUpperCase()} </div>
      </div>`
        }
            })
      document.querySelector(".container").innerHTML=clutter; 
      }

      showTheCard()

            

      let search = document.querySelector("#searchinput");
    function handelSearch(){

      const searchInput = document.querySelector("#searchinput");

    searchInput.addEventListener("input", function() {
        const searchTerm = this.value.trim();
        showTheCard(searchTerm);
    });
  

  search.addEventListener("focus",function(){
      document.querySelector(".overlay").style.display="block";
  });
  search.addEventListener("mouseout",function(){
      document.querySelector(".overlay").style.display="none  ";
  }); 
  search.addEventListener("input",function(){
      const filterredArray = arr.filter(obj=>obj.name.toLowerCase().startsWith(search.value));  
      var clutter ="";
      filterredArray.forEach(function(obj){
      clutter += `<div class="res flex px-8 py-3">
      <i class="ri-search-line font-semibold mr-5"></i>
      <h3 class="font-semibold">${obj.name}</h3>
  </div>`
  if (search.value === '' ) {
    document.querySelector(".searchdata").style.display = "none";
  } else if(search.value===searchInput) {
    document.querySelector(".searchdata").style.display = "none";
  }
  else{
    document.querySelector(".searchdata").style.display = "hidden";
  }

  
  document.querySelector(".searchdata").innerHTML =clutter;
      })
  })
    }


    handelSearch()