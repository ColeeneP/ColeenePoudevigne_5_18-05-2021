fetch('http://localhost:3000/api/cameras')
    .then(response => {
        console.log(response)
    })
    .catch(err => {
        console.log(err)
    });
    