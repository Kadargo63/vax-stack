async function editFormHandler(event) {
    event.preventDefault();

    const vax_service = document.querySelector('input [name="appointment-service"]').value.trim();
    const date = document.querySelector('input[name="date"]').value.trim();
    const time = document.querySelector('input[name="time"]').value.trim();

    const id = window.location.toString().split('/')[
        window.location.toString().split('/').length - 1
    ];
    const response = await fetch(`/api/appointments/${id}`, {
        method: 'PUT',
        body: JSON.stringify({
            appointment_id: id,
            vax_service,
            date,
            time
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    });
    if (response.ok) {
        document.location.replace('/dashboard/');
    } else {
        alert(response.statusText);
    }
}

document.querySelector('.edit-appointment-form').addEventListener('submit', editFormHandler);