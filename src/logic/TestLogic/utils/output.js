export function output(text) {
    // Get the list element
    const list = document.getElementById('terminal');
    
    // Split the text by newline characters
    const items = text.split('\n');
    
    // Loop through each item
    items.forEach(item => {
        // Create a new text node
        const textNode = document.createTextNode(item);
        
        // Append the text node to the list
        list.appendChild(textNode);
        
        // Create a line break element
        const lineBreak = document.createElement('br');
        
        // Append the line break after the text node
        list.appendChild(lineBreak);
    });
}