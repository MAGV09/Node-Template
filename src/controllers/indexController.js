async function getHomepage(req, res) {
  const links = [
    { href: '/', text: 'Home' },
    { href: 'about', text: 'About' },
  ];
  res.render('index', { title: 'Homepage', links });
}

async function getAbout(req, res) {
  res.send('<h1>About</h1>');
}

async function getContact(req, res) {
  res.send('<h1>Contact</h1>');
}

async function postContact(req, res) {
  console.log('post contact request');
  res.send('<h1>Contact</h1>');
}

module.exports = { getHomepage, getAbout, getContact, postContact };
