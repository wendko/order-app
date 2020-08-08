# Start the app

```
docker-compose up --build
```

# Order App 

- Get all orders
```
GET localhost:3000/order
```

- Get single order
```
GET localhost:3000/order/{{order_id}}
```

- Create an order
Response returns an order_id.
```
POST localhost:3000/order
{
    "customerName": "abc",
    "pax": 2,
    "fee": 50
}
```