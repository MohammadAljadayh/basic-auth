# basic-auth

## LAB - 06

### Deployment Test


- [ci/cd GitHub Actions]().
- [herokuapp Link Main ]().
- [PULL_REQUEST ]().
- [Main Repo link](https://github.com/MohammadAljadayh/basic-auth).

### Setup 

`.env` **requirements**

- `PORT` - 3000

- `DATABASE_URL` = Postgres DB

**Running the app**

- `npm start`

- Endpoint: `/signup`
```
 { 
    "username": "root" ,
     "password": "root" 
     
     }
```
- Returns : 
```
{
    "id": 6,
    "username": "root",
    "password": "$2b$10$NzKreTJ8EQyY.ogIBlMDs.sM0xALFLz9kxyZCV7.9G1l4noAVvIIW",
    "updatedAt": "2021-11-07T13:12:16.956Z",
    "createdAt": "2021-11-07T13:12:16.956Z"
}
```
- Endpoint: `/signin`

> Username `root`
> Password `root`

- Returns 
```
{
    "id": 6,
    "username": "root",
    "password": "$2b$10$NzKreTJ8EQyY.ogIBlMDs.sM0xALFLz9kxyZCV7.9G1l4noAVvIIW",
    "createdAt": "2021-11-07T13:12:16.956Z",
    "updatedAt": "2021-11-07T13:12:16.956Z"
}
```
**Tests**

- Unit Tests: `npm run test`
- Lint Tests: `npm run lint`

![UML](uml.PNG)
