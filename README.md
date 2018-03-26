# Full Stack Coding Challenge

TODO

Original one

The purpose of this assignment is for us to understand how you design and develop your code and the best practices you use during development. We would like it developed using NodeJS (you are free to determine the version of NodeJS you would like to use), but we would like you to not use any non-core NodeJS modules other than those dev dependencies required for testing, etc.

The attached csv file has a list of addresses and we want to geocode those addresses. However we only want those addresses that have a single non-partial result and that have a geocode that is of "ROOFTOP" quality.

Some key design considerations are:
- the service should not exceed the 50 requests/s limit of the Google geocode service
- the test data set is just a smaller subset of the full data set that we would like to process which is 25+ million addresses so your design should consider having to process that level of data (with the assumption that we would be able to pay the necessary processing charges to still be able to maintain a 50 requests/s throughput with the geocoding api).

The geocoding should be managed using the Google geocode service:
https://developers.google.com/maps/documentation/geocoding/ 

