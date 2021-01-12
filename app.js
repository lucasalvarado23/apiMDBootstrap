function fetchData() {
    fetch('https://reqres.in/api/users').then(response => {
       return response.json();
    }).then(data => {
        console.log(data.data);
        const html = data.data.map(user => {
            return `
            <!--Card-->
            <div class="card">

              <!--Card image-->
              <div class="view overlay">
                <img src="${user.avatar}" class="card-img-top" alt="" style="width:auto !important">
                <a href="https://mdbootstrap.com/education/tech-marketing/web-push-introduction/" target="_blank">
                  <div class="mask rgba-white-slight"></div>
                </a>
              </div>

              <!--Card content-->
              <div class="card-body">
                <!--Title-->
                <h4 class="card-title">${user.first_name}</h4>
                <!--Text-->
                <p class="card-text">${user.email}</p>
              </div>

            </div>
            <!--/.Card-->

          </div>
            ` ;
        }).join('');
        document.querySelector('#app').insertAdjacentHTML('afterbegin', html)
     }).catch(error => {
         console.log(error);
     });
};

fetchData();
