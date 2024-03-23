var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

/* ============== All About Us Pages Starts here ============== */

/* GET about page. */
router.get('/about', function(req, res, next) {
  res.render('about');
});

/* GET Delhi page. */
router.get('/ias-coaching-delhi', function(req, res, next) {
  res.render('ias-coaching-delhi');
});

/* GET GurGaon page. */
router.get('/ias-coaching-gurgaon', function(req, res, next) {
  res.render('ias-coaching-gurgaon');
});

/* GET Indore page. */
router.get('/ias-coaching-indore', function(req, res, next) {
  res.render('ias-coaching-indore');
});

/* GET Bhubaneswar page. */
router.get('/ias-coaching-bhubaneswar', function(req, res, next) {
  res.render('ias-coaching-bhubaneswar');
});

/* GET Our Facilities page. */
router.get('/our-facilities', function(req, res, next) {
  res.render('our-facilities');
});

/* GET Our Achivement page. */
router.get('/our-achievements', function(req, res, next) {
  res.render('our-achievements');
});
 
/* ============== All Information Pages Starts here ============== */
/* GET Admission page. */
router.get('/admission', function(req, res, next) {
  res.render('admission');
});

/* GET upsc-syllabus */
router.get('/upsc-syllabus', function(req, res, next) {
  res.render('upsc-syllabus');
});

/* GET opsc-syllabus page. */
router.get('/opsc-syllabus', function(req, res, next) {
  res.render('opsc-syllabus');
});

/* GET Faq page. */
router.get('/faq', function(req, res, next) {
  res.render('faq');
});

/* GET testimonial page. */
router.get('/testimonial', function(req, res, next) {
  res.render('testimonial');
});

/* ============== All Resourses Page Starts here ============== */
/* GET Admission page. */
/* GET prelims-previous-year-papers page. */
router.get('/prelims-previous-year-papers', function(req, res, next) {
  res.render('prelims-previous-year-papers');
});

/* GET upsc-mains-previous-year-papers page. */
router.get('/upsc-mains-previous-year-papers', function(req, res, next) {
  res.render('upsc-mains-previous-year-papers');
});

/* GET recommended books page. */
router.get('/recommended-books', function(req, res, next) {
  res.render('recommended-books');
});

/* GET downloads page. */
router.get('/downloads', function(req, res, next) {
  res.render('downloads');
});

/* GET downloads page. */
router.get('/ncert-books', function(req, res, next) {
  res.render('ncert-books');
});


/* ============== All Courses Page Starts here ============== */

/* GET interview-guidance page. */
router.get('/interview-guidance', function(req, res, next) {
  res.render('interview-guidance');
});

/* GET OAS-Coaching-Bhubaneswar page. */
router.get('/oas-coaching-bhubaneswar', function(req, res, next) {
  res.render('oas-coaching-bhubaneswar');
});

/* GET mppsc-prelims-test-series-2024 page. */
router.get('/mppsc-prelims-test-series-2024', function(req, res, next) {
  res.render('mppsc-prelims-test-series-2024');
});

/* GET OAS-mains- test-series-2024 page. */
router.get('/oas-mains-test-series-2022', function(req, res, next) {
  res.render('oas-mains-test-series-2022');
});

/* GET prelims-test-series-2024 page. */
router.get('/prelims-test-series-2024', function(req, res, next) {
  res.render('prelims-test-series-2024');
});

/* GET postal-courses page. */
router.get('/postal-courses', function(req, res, next) {
  res.render('postal-courses');
});

/* GET postal-courses page. */
router.get('/online-courses', function(req, res, next) {
  res.render('online-courses');
});

/* GET offline-courses page. */
router.get('/offline-courses', function(req, res, next) {
  res.render('offline-courses');
});




/* ============== All Centers fees structure Page Starts here ============== */

/* GET fee-structure-delhi-center page. */
router.get('/fee-structure-delhi-center', function(req, res, next) {
  res.render('fee-structure-delhi-center');
});

/* GET fee-structure-gurgaon-center page. */
router.get('/fee-structure-gurgaon-center', function(req, res, next) {
  res.render('fee-structure-gurgaon-center');
});

/* GET fee-structure-indore-center page. */
router.get('/fee-structure-indore-center', function(req, res, next) {
  res.render('fee-structure-indore-center');
});

/* GET fee-structure-bhubaneswar-branch page. */
router.get('/fee-structure-bhubaneswar-branch', function(req, res, next) {
  res.render('fee-structure-bhubaneswar-branch');
});


/* GET Gallery page. */
router.get('/gallery', function(req, res, next) {
  res.render('gallery');
});

/* GET online-admission page. */
router.get('/online-admission', function(req, res, next) {
  res.render('online-admission');
});

/* GET contact page. */
router.get('/contact', function(req, res, next) {
  res.render('contact');
});


/* ========================================================================================== */

/* GET privacy-policy page. */
router.get('/privacy-policy', function(req, res, next) {
  res.render('privacy-policy');
});

/* GET refund-policy page. */
router.get('/refund-policy', function(req, res, next) {
  res.render('refund-policy');
});

/* GET postal-courses page. */
router.get('/terms-conditions', function(req, res, next) {
  res.render('terms-conditions');
});

module.exports = router;
