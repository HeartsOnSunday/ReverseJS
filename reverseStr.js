
function palindrome(str) {
  var reverseStr = str.replace(/[\W_]/g, '').toLowerCase().split('').reverse().join('');
  
  var originalStr = str.replace(/[\W_]/g, '').toLowerCase();
  
  if (originalStr === reverseStr) {
  return true;
  } else if (originalStr !== reverseStr){
    return false;
  }
}



palindrome("eye");
