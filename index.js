let id = 0;

document.getElementById('add').addEventListener('click' , () => {
    let createdPark = new Park();
    let table = document.getElementById('list');
    let row = table.insertRow(1);
    row.setAttribute('id' , `item-${id}`);
    row.insertCell(0).innerHTML = document.getElementById('new-park').value;
    row.insertCell(1).innerHTML = `${createdPark()}`;
    row.insertCell(2).innerHTML = document.getElementById('new-ride').value;
    let actions = row.inserCell(3);
    actions.appendChild(createDeleteButton(id++));
    document.getElementById('new-park').value = '';
});

function createDeleteButton(id) {
    let btn = document.createElement('button');
}