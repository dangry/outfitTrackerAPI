# outfitTrackerAPI

[![Workflow](https://github.com/dangry/outfitTrackerAPI/workflows/deno/badge.svg)](https://github.com/dangry/outfitTrackerAPI/workflows/deno/badge.svg)


Deno 🦕

Oak 🐿

DenoDb

Postgres

working endpoints:

* POST /api/v1/outfits
* GET /api/v1/outfits/{id}
* POST /api/v1/garments
* GET /api/v1/garments/
* GET /api/v1/garments/{id}

garmentPayload: 
    {
      "name": "T shirt",
      "description": "This is garment one",
    }
    
outfitPayload: 
    {
    "name": "New outfit",
    "description": "This is a new outfit",
    "garmentIds": [
        "aaa2d8a4-a1f0-4989-8ccc-c22a571a1ce8",
        "a4b15292-cb8f-4438-8c58-f4fb751449c6"
    ]
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
