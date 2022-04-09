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