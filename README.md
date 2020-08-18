# outfitTrackerAPI

Deno 🦕

Oak

DenoDb

Postgres

working endpoints:

* POST /api/v1/garments
* POST /api/v1/outfits
* GET /api/v1/garments/
* GET /api/v1/garments/{id}

garmentPayload: 
    {
      "name": "T shirt",
      "description": "This is garment one",
      "price": 99.99
    }

TODO:

- [ ] use mongodb (?)
- [ ] save clothes with photo
- [ ] save clothes, an outfit
- [ ] outfits should have dates
- [ ] clothes should have a record of when they where used, as well as outfits
- [ ] should get X most used clothes, outfits
- [X] DB migrations (nessie)
- [ ] schema validation
- [ ] error handling
- [ ] tests tests tests
