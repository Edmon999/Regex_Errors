// Matching Characters
let str = "arara";
// console.log(str.match(/\w*/));

//Matching Digits
/\d+/;

//Matching With Wildcards
/[^\.]*/;
let str1 = "arara...";
console.log(str.match(/[^\.]*/));

// Matching Characters
// Match	can
// Match	man
// Match	fan
// Skip	dan
// Skip	ran
// Skip	pan
/[cmf]an/;

// Excluding Characters
// Match	hog	To be completed
// Match	dog	To be completed
// Skip	bog
/[^b]og/;

//Matching Character Ranges
// Match	Ana	Success
// Match	Bob	Success
// Match	Cpc	Success
// Skip	aax	To be completed
// Skip	bby	To be completed
// Skip	ccz
/[^a-z]\w+/;

//Matching Repeated Characters
// Match	aaaabcc	Success
// Match	aabbbbc	Success
// Match	aacc	Success
// Skip	a
/a{2,4}b{0,4}c{1,2}/;

// Matching Optional Characters
// Match	1 file found?	Success
// Match	2 files found?	Success
// Match	24 files found?	Success
// Skip	No files found.
/\d+\sfiles?\s\w+./;

// Matching Whitespaces
// Match	1.   abc	Success
// Match	2.	abc	Success
// Match	3.           abc	Success
// Skip	4.abc
/\d+\.\s+\w+/;

//Matching Groups
// Capture	file_record_transcript.pdf
// Capture	file_07241999.pdf
// Skip	testfile_fake.pdf.tmp
/^(.*)\.pdf$/;

//Matching Nested Groups
// Capture	Jan 1987
// Capture	May 1969
// Capture	Aug 2011
/(\w+\s(\d+))/;

// Matching Nested Groups
// Capture	1280x720
// Capture	1920x1600
// Capture	1024x768
/(\d+).(\d+)/;

//Matching Conditional Text
// Match	I love cats	To be completed
// Match	I love dogs	To be completed
// Skip	I love logs	To be completed
// Skip	I love cogs
/(I love (cats|dogs))/;
