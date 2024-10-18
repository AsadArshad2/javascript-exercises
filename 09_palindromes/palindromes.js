const palindromes = function (word) {
    const alphanumerical = 'abcdefghijklmnopqrstuvwxyz0123456789';

        const lword = word.toLowerCase();
        const rWord= lword
        .split('')
        .filter((character) => alphanumerical.includes(character))
        .join('');

        const pWord =   rWord.split('').reverse().join('');
         if (pWord==rWord){
            return true;
        }
        else{
            return false
        }
};

// Do not edit below this line
module.exports = palindromes;
