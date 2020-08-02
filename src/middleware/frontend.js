module.exports = () => {
  return function frontend(req, res) {
    res.send('okay');

    console.log('\n\n\n----- BODY -----')
    console.log(req.body);
  };
};
