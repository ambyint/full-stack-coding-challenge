## Palpatine Exercise

Following Supreme Chancellor Palpatine's reorganization of the Galactic Republic, he has devised a new initiative to collect the 
personal information of citizens of the galaxy. It goes without saying that this is to be used solely for the good of the galaxy.

The information has already been intercepted but unfortunately it's all encrypted. Palpatine has asked for you personally to extract
 key pieces of information from it. His first order of business is to group individuals by homeworld (Such as Coruscant, the
 location of the Jedi Temple) 

The Chancellor has generously offered you the use of his super advanced computer that has the ability to break the encryption. 
Better yet, the decryption algorithm can be accessed with a convenient API.

#### Requirements

* Load and parse super-secret-data.txt
* Decrypt the information
* Clean the data
    * Remove any duplicates (no one in the star wars universe shares the same name)
* Output character names grouped by their homeworlds (you may use the swapi linked below)
    
Example Output:

```
Kashyyyk
- Chewbacca
- Tarfful

Bespin
- Lobot
.
.

Unknown
- Jaira Alateen
```
    
#### Endpoint Documentation


```
https://ylj3ustbsk.execute-api.us-east-1.amazonaws.com/qa/decrypt
Type: POST
Parameters: None
Headers:
 - x-api-key: The api key you have been issued. If you did not recieve a key, let us know.
Body:
 - data: The data to be decrypted
```


##### Example:

Request Body:
```
{
    "data": "2ff11d982293ea55c20dee3126547c99:e7e3024e31dc607aff7392e1f6e9ecec8a198eee6c81c811f6d7f1e47c683740eb415791b579f4f5aec9d9ef6fa5cdf2ffeddb11928bdeb2d75eb89523062bb68a351db1a4d63f5c80c31e08863cc9f671a74c40c455e6aba82aacc97f2d92471df1b55964bdb07d561c10f53bc886b67142ddeec685cdeaea383f7669240374746c6938dabce9afa939f59541006b12806a513744d62b4e233c548884bb1646ed4229ea8f09733703f5ee9fa6edc946674d250495039f562554b287353398adf77f024645d0901648ae2cb878c7e7c9e6047ea94660b2d0ccdc4e586b0c0db97af70c57f23beb84889dfbfad9f6184ee984639e165d3f4dc189aa441de7fe7d9b9b64ba1e750766ea66cf6554f5c4405543475761b9eea90c2e6e3d8856d293f72baca9728465141400ec2ae8cc995f239d0f1af4bdeac02dc567c27edec9c8b5ad65ff9e54b7fbf50a79892832d26afd1f4121d81a07954cfb7f655926b554e077cd96f27b61fa0d467bc3f0f42d99cf5ff8719ed0be972560561204510cd075c4ce4263672704b4acb99205b6a9c8cf57f7f8b424b2c93202aae5b3853969487a42b37a8a9325d4e77d87a695a0225316f95fb2301a9d7a82f4b13a3deb040d24b0bce3f1f94cead1b9cb1bbaacb740f72bcf47d3030dc0c2b756ada5e1c7ab3ffee0a4021ef7e5e23cb346ab99cf6c49afd095f1f40b31cae9cbee7b93a3b33d3ad71a2282b45d611216c9aa2b7e29b05c1f4f203a437c8d40de19563c972e63644b69a949588637ec325cc53ef750bd249d41f9626a105f2ddcd7a24d16fde0794b1c925bacf64dc7098265295449d9c0fd72f3391f4f4a01bc24754cdf3d795c29d71c203a2adb249deaf44a8b6764dbf9980f3ce267d572e6ed093a164154b47fb4e53cf3aded96990b1395043281d3bd6d7201c6faa5cc57edbee157a9d0b253b1e3f01a0102faa4ba306f5329a21c24e1d51b260b279d7041268ae8"
}
```

Response:
```
{
    "name": "Luke Skywalker",
    "height": "172",
    "mass": "77",
    "hair_color": "blond",
    "skin_color": "fair",
    "eye_color": "blue",
    "birth_year": "19BBY",
    "gender": "male",
    "homeworld": "https://swapi.co/api/planets/1/",
    "films": [
        "https://swapi.co/api/films/2/",
        "https://swapi.co/api/films/6/",
        "https://swapi.co/api/films/3/",
        "https://swapi.co/api/films/1/",
        "https://swapi.co/api/films/7/"
    ],
    "species": [
        "https://swapi.co/api/species/1/"
    ],
    "vehicles": [
        "https://swapi.co/api/vehicles/14/",
        "https://swapi.co/api/vehicles/30/"
    ],
    "starships": [
        "https://swapi.co/api/starships/12/",
        "https://swapi.co/api/starships/22/"
    ],
    "created": "2014-12-09T13:50:51.644000Z",
    "edited": "2014-12-20T21:17:56.891000Z",
    "url": "https://swapi.co/api/people/1/"
}
```

##### Quota

You are limited to 20,000 requests per month and 25 requests per second. 

#### Also See

https://swapi.co/documentation


#### Submission Instructions

* Clone this repository and commit your changes locally (or to a separate remote repository)
* Use any packages or libraries which help you to complete these tasks
* When you are finished, please send us a link to the completed repository or a zip of the contents if you prefer
* Describe any challenges that made the task more difficult



