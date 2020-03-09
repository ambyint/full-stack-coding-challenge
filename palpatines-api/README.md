## Palpatine Exercise

Following Supreme Chancellor Palpatine’s reorganization of the Galactic Republic, he has devised an initiative to 
collect personal data on all citizens of the Galaxy. It goes without saying that this is to be used solely for the 
good of the people.

The encrypted data has been intercepted from the rebels and needs to be cracked. The Chancellor has personally asked 
for you to undertake this most important duty. His first order of business is to group citizens by their homeworld, 
because, reasons.

The Chancellor has generously offered you the use of his super advanced computer that has the ability to break the 
encryption. Better yet, the decryption algorithm can be accessed with a convenient API.

#### Requirements

* Load the super-secret-data.txt file provided. Each line is encrypted information on a single citizen
* Decrypt each line using Palpatine’s Convenient Decryption API
* Clean the data
    * Remove any duplicates, determined by the name field
    * You may assume there are a maximum of 200 unique citizens exist in the Galaxy. It’s a small Galaxy.
* Fetch actual homeworld names from the Star Wars API (swapi) described below using the homeworld url’s on the citizen data. If the swapi is not available for some reason, then grouping by the homeworld url is fine. Your program should handle this case
    * You may assume that there are a maximum of 200 homeworlds
* Write the citizen names, grouped by their home worlds, to a file called citizens-super-secret-info.txt
    
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
    
#### Palpatine’s Convenient Decryption API


```
https://txje3ik1cb.execute-api.us-east-1.amazonaws.com/prod/decrypt
Type: POST
Parameters: None
Headers:
 - x-api-key: The api key that you have been issued. If you did not recieve a key, let us know
Body:
 - data: The data to be decrypted. Accepts either single or batch requests of up to 1000 entries
```


##### Example:

Request Body:
```
"2ff11d982293ea55c20dee3126547c99:e7e3024e31dc607aff7392e1f6e9ecec8a198eee6c81c811f6d7f1e47c683740eb415791b579f4f5aec9d9ef6fa5cdf2ffeddb11928bdeb2d75eb89523062bb68a351db1a4d63f5c80c31e08863cc9f671a74c40c455e6aba82aacc97f2d92471df1b55964bdb07d561c10f53bc886b67142ddeec685cdeaea383f7669240374746c6938dabce9afa939f59541006b12806a513744d62b4e233c548884bb1646ed4229ea8f09733703f5ee9fa6edc946674d250495039f562554b287353398adf77f024645d0901648ae2cb878c7e7c9e6047ea94660b2d0ccdc4e586b0c0db97af70c57f23beb84889dfbfad9f6184ee984639e165d3f4dc189aa441de7fe7d9b9b64ba1e750766ea66cf6554f5c4405543475761b9eea90c2e6e3d8856d293f72baca9728465141400ec2ae8cc995f239d0f1af4bdeac02dc567c27edec9c8b5ad65ff9e54b7fbf50a79892832d26afd1f4121d81a07954cfb7f655926b554e077cd96f27b61fa0d467bc3f0f42d99cf5ff8719ed0be972560561204510cd075c4ce4263672704b4acb99205b6a9c8cf57f7f8b424b2c93202aae5b3853969487a42b37a8a9325d4e77d87a695a0225316f95fb2301a9d7a82f4b13a3deb040d24b0bce3f1f94cead1b9cb1bbaacb740f72bcf47d3030dc0c2b756ada5e1c7ab3ffee0a4021ef7e5e23cb346ab99cf6c49afd095f1f40b31cae9cbee7b93a3b33d3ad71a2282b45d611216c9aa2b7e29b05c1f4f203a437c8d40de19563c972e63644b69a949588637ec325cc53ef750bd249d41f9626a105f2ddcd7a24d16fde0794b1c925bacf64dc7098265295449d9c0fd72f3391f4f4a01bc24754cdf3d795c29d71c203a2adb249deaf44a8b6764dbf9980f3ce267d572e6ed093a164154b47fb4e53cf3aded96990b1395043281d3bd6d7201c6faa5cc57edbee157a9d0b253b1e3f01a0102faa4ba306f5329a21c24e1d51b260b279d7041268ae8"
```
or
```
[
    "2ff11d982293ea55c20dee3126547c99:e7e3024e31dc607aff7392e1f6e9ecec8a198eee6c81c811f6d7f1e47c683740eb415791b579f4f5aec9d9ef6fa5cdf2ffeddb11928bdeb2d75eb89523062bb68a351db1a4d63f5c80c31e08863cc9f671a74c40c455e6aba82aacc97f2d92471df1b55964bdb07d561c10f53bc886b67142ddeec685cdeaea383f7669240374746c6938dabce9afa939f59541006b12806a513744d62b4e233c548884bb1646ed4229ea8f09733703f5ee9fa6edc946674d250495039f562554b287353398adf77f024645d0901648ae2cb878c7e7c9e6047ea94660b2d0ccdc4e586b0c0db97af70c57f23beb84889dfbfad9f6184ee984639e165d3f4dc189aa441de7fe7d9b9b64ba1e750766ea66cf6554f5c4405543475761b9eea90c2e6e3d8856d293f72baca9728465141400ec2ae8cc995f239d0f1af4bdeac02dc567c27edec9c8b5ad65ff9e54b7fbf50a79892832d26afd1f4121d81a07954cfb7f655926b554e077cd96f27b61fa0d467bc3f0f42d99cf5ff8719ed0be972560561204510cd075c4ce4263672704b4acb99205b6a9c8cf57f7f8b424b2c93202aae5b3853969487a42b37a8a9325d4e77d87a695a0225316f95fb2301a9d7a82f4b13a3deb040d24b0bce3f1f94cead1b9cb1bbaacb740f72bcf47d3030dc0c2b756ada5e1c7ab3ffee0a4021ef7e5e23cb346ab99cf6c49afd095f1f40b31cae9cbee7b93a3b33d3ad71a2282b45d611216c9aa2b7e29b05c1f4f203a437c8d40de19563c972e63644b69a949588637ec325cc53ef750bd249d41f9626a105f2ddcd7a24d16fde0794b1c925bacf64dc7098265295449d9c0fd72f3391f4f4a01bc24754cdf3d795c29d71c203a2adb249deaf44a8b6764dbf9980f3ce267d572e6ed093a164154b47fb4e53cf3aded96990b1395043281d3bd6d7201c6faa5cc57edbee157a9d0b253b1e3f01a0102faa4ba306f5329a21c24e1d51b260b279d7041268ae8",
    "e1321182a9b1863291d045e5b8a62c17:ea12c4dca8f200bf81855db85e7c55c7d7cd079978b2fc77ebae4c94d7efb85fce7dc1b0b012732cceae2875ef65c4c7475a6dd4cd1ba6ba006406c52ecd12ea0e2f122fa716a27963acb24be3310fbce3dedb2408ed8242f54d3006c3a159fe4f66fa407b99dcc7eed93d23531a9b36e41b6ab5bed1db05b7f2c82b83c8bbac300d026f3786f94ef2a0ecf4a5ca8a1c99c6bf7037891efc3b4484160397291dd82b80a1486fa49d69e6295550bfd433961e5480d1820ec399db945c69355a28b6666a0e183601bd726cf46f6b8005dc8e98076aa0434928cef9fc0949d146eeba74539fa4922ae48579f21ac9846d0e1c2e8703a7226de684ac0590f964f9d2850c16791ff873c962a778f35423a1d924abf5f45d76dc890a084f64de1042b3cffc7c3bedb48932fbaa902f9718e55a440390684002c541617af729d9a3f56f4535b93e75384852d8de41658a5880262e6115066350b912f40297e0ed9d3203bbdaf0e7a3476f4b197051ad1653653b96c3ca3159d2759dd9229964774914d89658294bf6c2dc17bda77935e27ba3a29cc7e1ae8e3b946ae1c7798458989818f2ac68ca603b5ef44a42b11be5e745031427ad80a3ae0aaa5f863ea11afa41c9",
        .
        .
    
    "8521fac28eabd4b8b3c92141b58d9099:2a0913556f34bded73d0d8fb16e4912abb83ac9b147dacb404da6d3fd10e8ea3cdd4a23b3c84bbe0b3c3aef1981653a588ae24d22a8c7c12dc1a329182e30457bbc0190e36bb81f7eac3830b121d5360429220527581f51f7c2c9a79c408b030a34381df65cd2b52cb6e9d7f9d04286ec9db8f6c82a6356b093a1f07297cb025b980f2d10fdbf8af9e9501d4c912b56fdd11f374b7aa30cb98be3bdf13795efbdad2b4f311aad7a0cca7be55395b9aede1b5278294f859a23a3e771e26db4d41407859d9fbcbf599312589ae09eba7258f97eb7c88ccd2e05e97d9c78236a8a00b3c0c35c72d57279af6a192a745a0d9f859c4b1effa301d6b8efba3c48cdbd77c6fd92792e9bec2471918c86d0206a85383fde2eb38edfcd527c5989c813964a45b4200128ced578ca939cbeaff5c05f871e10fec0210629b8cd8dee8ef8242d717d8a4c87088066d137c98adf8bcd6b20edb68293285558eb0571ee3decbe4088a1414a6ef7d9c2963d6deb246bb56dfc81859478fad4c80e50888a3cc2cb07f8ae5e267c67f7984f153106904369eb01ba328fcb7289705aa45795df82e7b8287e53996c9063cd9266a4b128d0f810444a2ddee4be9ee83da5016fd98778f"
]
```


Response:
```
[
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
]
```

##### Quota

You are limited to 50,000 requests per month and 25 requests per second. 

#### SWAPI (Star Wars API)

https://swapi.co/documentation 


#### Submission Instructions

* Use any packages or libraries which help you to complete these tasks
* When you are finished, please provide us with a link to the completed repository (we use GithHub, but other services 
are completely fine)
* Please be sure to mention what version of Node you used
* Describe any challenges that made the task more difficult and how you might improve your program to handle a galaxy with millions of unique citizens and homeworlds. Be prepared to discuss this in the technical interview



