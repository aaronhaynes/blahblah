<html>
  <head>
    <style>
      .pinkmonkey {

      }
    </style>
  </head>
  <body>
    <div="wrapper">
      <p id="firstP">some generic text</p>
      <p id="secondP">Generic Text</p>
    </div>
    <div id="secondDiv">
      <button class="clickhere">Click Here!</button>
      </div>
      <p id="emptyparagraph"></p>
      <script type="text/javascript">
        var onlybutton = document.queryselector(".clickhere");
        onlybutton.addEventListener("mouseover", function() {
          document.getElementById("emptyParagraph").class.add ("pinkmonkey");
        });



        document.getElementById("emptyparagraph").innerHTML = "I was just added>"
      </script>
      
    </body>
</html>
