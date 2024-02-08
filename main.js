let rankz = document.querySelectorAll('.rankz');
let colors = document.querySelectorAll('.color');

colors.forEach(color => {
    color.addEventListener('dragstart', (e) => {
        e.dataTransfer.setData('text/plain', e.target.id);
    });
});

rankz.forEach(zone => {
    zone.addEventListener('dragover', (e) => {
        e.preventDefault();
    });

    zone.addEventListener('drop', (e) => {
        e.preventDefault();
        const colorId = e.dataTransfer.getData('text/plain');
        const draggedColor = document.getElementById(colorId);
        zone.appendChild(draggedColor);
        draggedColor.classList.add('newColor');

    });
});

/* working:

1.Selection of Elements: It selects all elements with the class `.color` and `.rankz` 
using `document.querySelectorAll()` and assigns them to the variables `colors` and `rankz`,
respectively.

2.Dragstart Event Listeners for Colors: For each element with the class `.color`,
it attaches a `dragstart` event listener. When a drag operation starts on one of these 
elements, it sets the data in the event's `dataTransfer` object to the ID of the dragged
element. This allows the data to be transferred during the drag-and-drop operation.

3.Drop Event Listeners for Rank Zones: For each element with the class `.rankz`, it 
attaches `dragover` and `drop` event listeners. When a color is dragged over a rank zone,
the `dragover` event listener prevents the default action (which would be to disallow dropping). 
When a color is dropped onto a rank zone, the `drop` event listener is triggered. It retrieves the
ID of the dragged color from the `dataTransfer` object, finds the corresponding element using 
`document.getElementById()`, appends it to the rank zone, adds the class `'newColor'` to the dropped
element.

*/