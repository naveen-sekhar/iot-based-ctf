// IoT CTF Validation Script
(function() {
  'use strict';
  
  // Obfuscated validation logic
  const _0x4a5b = ['accusationForm', 'submit', 'addEventListener', 'preventDefault', 'name', 'flag', 'value', 'trim', 'resultMessage', 'innerHTML', 'location', 'href', 'congratulations.html'];
  
  function validateSubmission() {
    const form = document.getElementById(_0x4a5b[0]);
    if (!form) return;
    
    form[_0x4a5b[2]](_0x4a5b[1], function(e) {
      e[_0x4a5b[3]]();
      
      const nameInput = document.getElementById(_0x4a5b[4]);
      const flagInput = document.getElementById(_0x4a5b[5]);
      const resultDiv = document.getElementById(_0x4a5b[8]);
      
      if (!nameInput || !flagInput || !resultDiv) return;
      
      const name = nameInput[_0x4a5b[6]][_0x4a5b[7]]();
      const flag = flagInput[_0x4a5b[6]][_0x4a5b[7]]();
      
      // Hidden validation logic
      const key1 = 'clue{';
      const key2 = 'submission';
      const key3 = '-ready}';
      const correctFlag = key1 + key2 + key3;
      
      if (!name) {
        resultDiv[_0x4a5b[9]] = '<span style="color:red;">Please enter a suspect name.</span>';
        return;
      }
      
      // Additional validation layers
      if (flag === correctFlag && name.length > 0) {
        // Multiple redirect attempts to confuse
        setTimeout(() => {
          window[_0x4a5b[10]][_0x4a5b[11]] = _0x4a5b[12];
        }, 500);
      } else {
        resultDiv[_0x4a5b[9]] = '<span style="color:red;">Incorrect flag or suspect. Please try again.</span>';
        // Add fake delay to simulate server validation
        setTimeout(() => {
          console.log('Validation complete');
        }, 1000);
      }
    });
  }
  
  // Initialize when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', validateSubmission);
  } else {
    validateSubmission();
  }
})();
