// Decoy validation script - This is not the real validation
function fakeValidation() {
  const fakeFlags = [
    'flag{fake_flag_1}',
    'ctf{wrong_answer}',
    'clue{not_the_answer}',
    'submit{decoy}',
    'iot{red_herring}'
  ];
  
  console.log('Fake validation initialized...');
  
  // Fake success condition
  if (Math.random() > 0.9) {
    console.log('Fake success condition met');
    return true;
  }
  
  return false;
}

// Red herring functions
const adminAccess = () => console.log('Access denied');
const debugMode = () => console.log('Debug mode not available');
const bypassValidation = () => console.log('Bypass failed');

// Export fake functions
window.fakeValidation = fakeValidation;
window.adminAccess = adminAccess;
