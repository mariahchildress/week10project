let id = 0;

document.getElementById('add').addEventListener('click' , () => {
    let createdDate = new Date ();
    let table = document.getElementById('list');
    let row = table.insertRow(1);
    row.setAttribute('id', `item-${id}`);
    row.insertCell(0).innerHTML = `${createdDate.getMonth() +1}-${createdDate.getDate()}-${createdDate.getFullYear()}`;
    row.insertCell(1).innerHTML = document.getElementById('new-priority').value;
    row.insertCell(2).innerHTML = document.getElementById('new-ride').value;
    row.insertCell(3).innerHTML = document.getElementById('new-park').value;
});

function createDeleteButoon(id) {
    let btn = document.createElement('button');
    btn.className = 'btn btn-primary';
    btn.id = iod;
    btn.innerHTML = 'Delete';
    btn.onclick = () => {
        console.log(`Deleting row with id: test-${id}`);
        let elementToDelete = document.getElementById(`test-${id}`);
        elementToDelete.parentNode.removeChild(elementToDelete);
    }
    return btn;
}

