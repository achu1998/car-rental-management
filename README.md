
# Car Rental System

A car rental system with various functionalities


## Indices

* [Default](#default)

  * [Return Car](#1-return-car)
  * [Book Car](#2-book-car)
  * [Generate JWT Token](#3-generate-jwt-token)
  * [Show Available Cars](#4-show-available-cars)
  * [Add New Car](#5-add-new-car)


--------


## Default


### 1. Return Car


Makes the availability of vehicle to True and the details of that car is shown in show availability page.


***Endpoint:***

```bash
Method: GET
Type: 
URL: http://carwp.herokuapp.com/routes/returncar/TN_31_BW_4502
```


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Authorization | jwt {{jwt}} |  |
| Content-Type | application/json |  |


### 2. Book Car


Book car based on availability and makes the availability of car to false and the details of that particular car is removed from show availability page.


***Endpoint:***

```bash
Method: POST
Type: 
URL: http://carwp.herokuapp.com/routes/bookcar/TN_38_BW_6985
```


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Authorization | jwt {{jwt}} |  |
| Content-Type | application/json |  |


### 3. Generate JWT Token


Generates an access token for JWT authentication.


***Endpoint:***

```bash
Method: GET
Type: 
URL: http://carwp.herokuapp.com/
```


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Authorization | jwt {{jwt}} |  |
| Content-Type | application/json |  |


### 4. Show Available Cars


Shows the list of available cars in a particular city where city name is taken as a url parameter.eg.(/routes/showavailability/<type-your-city>).
Click on the link displayed to book the cab.


***Endpoint:***

```bash
Method: GET
Type: RAW
URL: https://carwp.herokuapp.com/routes/showavailability/Bangalore
```


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Content-Type | application/json |  |
| Authorization | jwt {{jwt}} |  |


***Body:***

```js        
{
    "vehicle_city": "Bangalore"
}
```


### 5. Add New Car


Enables the user to add a car into the database.


***Endpoint:***

```bash
Method: POST
Type: RAW
URL: https://carwp.herokuapp.com/routes/addcar/
```


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Content-Type | application/json |  |
| Authorization | jwt {{jwt}} |  |


***Body:***

```js        
{
    "vehicle_number": "TN_31_BW_4502",
    "vehicle_model": "Sedan",
    "vehicle_seating_capacity": "5",
    "vehicle_rent_per_day": "1000",
    "vehicle_city": "Bangalore"
}
```


---
[Back to top](#car-rental-system)

