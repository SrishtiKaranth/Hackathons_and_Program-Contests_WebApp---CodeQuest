let url = 'https://kontests.net/api/v1/all';
let response = fetch(url);
let allcards = document.getElementsByClassName('allcards')[0];
allcards.innerHTML = 'allcards';

response.then((value) => {
    return value.json();
}).then((contest) => {
    console.log(contest);
    let ihtml = '';
    for (item in contest) {
        console.log(contest[item]);

        ihtml += `
        <div class="card reveal">
                <div class="textinside">
                  <p class="heading">${contest[item].name}
                  </p><p class="para">
                    Starts at: ${contest[item].start_time}
                  </p>
                  <p class="para">
                    Ends at: ${contest[item].end_time}
                  </p>
                  <button class="btn" onclick="window.open('${contest[item].url}', '_blank')">Start Quest</button>
                </div>
            </div>
        `

        allcards.innerHTML = ihtml;
    }
});

window.addEventListener('scroll',reveal);
function reveal(){
    let reveals= document.querySelectorAll('.reveal');
    for(var i=0;i<reveals.length;i++){
        var windowheight=window.innerHeight;
        var revealtop=reveals[i].getBoundingClientRect().top;
        var revealpoint=150;

        if(revealtop<windowheight-revealpoint){
            reveals[i].classList.add('active');
        }
        else{
            reveals[i].classList.remove('active');
        }
    }
}

