window.addEventListener("load", function(){
  const employers = document.querySelectorAll(".employer--list a");

  const navBtn = document.querySelector('.navbar-burger');
  const mobileMenu = document.querySelector('#mainNav');
  navBtn.addEventListener('click', function(){
    let expandMenu = navBtn.classList.toggle('is-active');

    if(expandMenu){
      mobileMenu.classList.add('is-active');
    } else {
      mobileMenu.classList.remove('is-active');
    }
  });
  
  
  function tabClicks(tabClick){
    for (let i = 0; i < employers.length; i++){
      employers[i].classList.remove("active");
    }
    let activeTab = tabClick.currentTarget;
    activeTab.classList.add("active");
    tabClick.preventDefault();
    let workHistoryPane = document.querySelectorAll(".workHistory .workHistory__detail");

    for(i = 0; i < workHistoryPane.length; i++){
      workHistoryPane[i].classList.remove('active-tab');
    }

    let selectedAnchor = tabClick.currentTarget;
    let getAnchorID = selectedAnchor.getAttribute("href");
    let activeEmployer = document.querySelector(getAnchorID);
    activeEmployer.classList.add("active-tab");
  }

  for(i = 0; i < employers.length; i++){
    employers[i].addEventListener("click", tabClicks);
  }
  });