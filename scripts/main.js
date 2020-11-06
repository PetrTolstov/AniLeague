window.onload = function (){
    let a = document.getElementsByClassName("anime_card");
    Array.from(a).forEach(function(element) {
        element.addEventListener('mouseenter', () => {
                let headingOfAnime = element.getElementsByTagName("p")[0];
                let cardBody = element.getElementsByClassName("card-header")[0];
                headingOfAnime.style.whiteSpace = "normal";
                cardBody.style.height = headingOfAnime.clientHeight + 10 +'px';

            }
        );

        element.addEventListener('mouseout', () => {
                let headingOfAnime = element.getElementsByTagName("p")[0];
                let cardBody = element.getElementsByClassName("card-header")[0];
                cardBody.style.height = '30px'
                headingOfAnime.style.whiteSpace = "nowrap";
            }
        );
    });

}