// Input/Enter the input given
const input = 'The Quick Brown Fox';
// Create a string that will be used to swap the case of each character
function acceptInput(string) {
    let swap = '';
    for (let i = 0; i < string.length; i++) {
        let sent = string[i];
        // Use the if function to say where the sentence is being uppercased ad lowercased respectively and adding the swap to them.
        if (sent == sent.toUpperCase()) {
            swap += sent.toLowerCase();
        } else if (sent === sent.toLowerCase()) {
            swap += sent.toUpperCase();
        } else {
            swap += sent;
    }

    }
    return swap;
}
// Get the output and console
const output = acceptInput(input);
console.log(output);
