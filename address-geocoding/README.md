## Javascript Exercise

#### Description
The purpose of this assignment is for us to understand how you design and develop your code.  Once submitted we will go through a typical code review with members of our development team which will help serve as a tool for discussion during the team interview.

Keep in mind best practices, readability, testing and extensibility

#### Requirements

- Load and parse the `addresses.tar.gz` based on the positional key below.
- Geocode the addresses by using the [Google Geocode API](https://developers.google.com/maps/documentation/javascript/geocoding)
- Only output addresses that have a single non-partial results and have a geocode of `ROOFTOP` quality
- Do not purchase a Google API Key

The file is positional and below are the lengths of each value:

```
HOUSE NUMBER: 30
STREET DIRECTION PREFIX: 2
STREET NAME: 40
STREET SUFFIX: 4
STREET DIRECTION SUFFIX: 2
UNIT DESCRIPTOR: 10
UNIT NUMBER: 6
CITY: 30
STATE: 2
ZIP: 12
```
**NOTE** - A full address is formed in the same order of the parts listed above.

#### Submission Instructions
- Clone this repository and commit your changes locally (or to a separate remote repository)
- Inform us of the Node version you used
- You're free to use any packages or libraries which help you to complete these tasks
- We should be able to run the application by doing a `npm install` and `npm start`
- When you are finished, please send us a link to the completed repository or a zip of the contents if you prefer
- Describe any challenges that made the task more difficult
