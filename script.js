
      
        var inputElement = document.getElementById('inputText');
        var replaceButton = document.getElementById('replaceButton');
        var outputElement = document.getElementById('output');

     
        replaceButton.addEventListener('click', lookup);

       
        function lookup() {
            // Assign the output element's text content to a variable named 's'
            var s = outputElement.textContent;

            
            var rt = inputElement.value;

            field
            var regex = new RegExp(rt, 'g');

        
            var matches = s.match(regex);

           
            if (matches) {
                // Step 5: If the match is found, use replace() to set the new value
                s = s.replace(regex, 'ReplacementText');

               
                outputElement.textContent = s;
            } else {
                alert('No matches found.');
            }
        }
  
