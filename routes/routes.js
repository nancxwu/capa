var Student = require('../models/student');
var uriTemplate = require('uritemplate');

/* GET about page. */
module.exports.getAbout = function(req, res) {
  res.render('about', {
    title: 'About CAPA'
  });
};

/* GET home page. */
module.exports.getStudents = function(req, res) {
  Student.find({ $query: {}, $orderby: { name : 1 } }, function(err, students) {
    res.render('students.ejs', {
      title: 'CAPA Students',
      students: students
    });
  });
};

/* GET profile page. */
module.exports.getProfile = function(req, res) {
  Student.findOne({ _id: req.params.sid }, function(err, student) {
    var template = uriTemplate.parse('{?query*}');
    var uri = template.expand({query: {recurring: 1, months: 1, recipient: 'CAPA', comments: student.name}});
    res.render('profile', {
      title: 'CAPA: ' + student.name,
      student: student,
      uri: uri
    });
  });
};

/* GET needs page. */
module.exports.getNeeds = function(req, res) {
  res.render('needs', {
    title: 'CAPA\'s Needs'
  });
};

/* GET books page. */
module.exports.getBooks = function(req, res) {
  res.render('books', {
    title: 'Donate Books'
  });
};

/* GET read page. */
module.exports.getRead = function(req, res) {
  res.render('read', {
    title: 'Get Involved With CAPA'
  });
};

/* GET newsletters page. */
module.exports.getNewsletters = function(req, res) {
  res.render('newsletters', {
    title: 'CAPA Newsletters'
  });
};
