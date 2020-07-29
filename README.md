# outfitTrackerAPI

Deno 🦕

Oak

DenoDb

Postgres

working endpoints:

* POST /api/v1/products
* GET /api/v1/products/
* GET /api/v1/products/{id}

productPayload: 
    {
      "name": "Product One",
      "description": "This is product one",
      "price": 99.99
    }

TODO:

- [ ] save clothes with photo
- [ ] save clothes, an outfit
- [ ] outfits should have dates
- [ ] clothes should have a record of when they where used, as well as outfits
- [ ] should get X most used clothes, outfits