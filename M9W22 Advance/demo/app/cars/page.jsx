const Cars = () => {
  return (
    <div>
      <h1 className="text-[100px] text-blue-700">This is the Cars Page!</h1>
    </div>
  )
}

export default Cars;


/*
  app.get('/cars', (req, res) => {
    const data = db.query(`select * FROM USERS;`)
    res.render('cars')

    res.send({message: "Hello"})  
    res.send(data)
  })

  app.get('/urls/:id', (req, res) => {

  })

*/