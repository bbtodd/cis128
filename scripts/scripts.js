    $(document).ready(function(){
        $(".hdr-animation").click(function(){
            $( "header h1" ).animate({
                fontSize: "3em",
                color: "blue",
            }, 1500, function(){
                console.log("done");
                $( "header h1" ).animate({
                    fontSize: "2em",
                    color: "black",
                }, 1500);
            });
            
            $( ".bio-pic" ).animate({
                borderWidth: "4px",
            }, 500 );

            $( "header h1" ).css({
                color: "dodgerblue",
            });

            setTimeout(changeH1toBlack, 3000);
        });

        function changeH1toBlack() {
            $( "header h1" ).css({
                color: "black",
            });
            //document.getElementsByTagName("h1")[0].style.color = "black";
        }
    
    });
