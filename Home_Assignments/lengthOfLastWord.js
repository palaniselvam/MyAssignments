// Find the Length of string

function lengthOfLastWord(s) {
    let trimmedString = s.trim();
    let words = trimmedString.split(" ");
    //console.log("split of strings " +words);
    //Find the Total Length 
    let totalLength = words.length
    //console.log("Total No of strings  " +totalLength)
    //find the Last word of string using while
    let i = 0
    while (i < totalLength) {
        if (i = totalLength - 1) {
            console.log('The last word is "' + words[i] + '" with length ' + words[i].length);
            i++
        }
        // other way
        //let lastWord = words[words.length - 1];
        //return lastWord.length;
    }
}
lengthOfLastWord("Hello World");
lengthOfLastWord("   fly me   to   the moon  ")
