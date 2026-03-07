var a = document.getElementById("toodle")
        var b = document.getElementById("menubar")
        var c = document.getElementById("closetoodle")
        function toodlemenu() {
            if (a.style.left == "-350px") {
                a.style.left = "0px"
                b.style.display = "none"

            }
            else {
                a.style.left = "-350px"
                b.style.display = "block"
            }
        }

        function closetoodle(){
               if (a.style.left == "0") {
                a.style.left = "-350px"
                b.style.display = "block"

            }
            else {
                a.style.left = "-350px"
                b.style.display = "block"
            }
        }