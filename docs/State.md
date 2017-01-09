```
{
    session:  {
    		currentUser: {
    			username: string
    			id: integer
    			}
    		errors :  {}
    }
	routes: {
		routeId :  {
			name: string
			description: text
			comments: { comments }
		}
	}

  trips: {
    tripId :  {
      name: string
      description: text
      comments: { comments }
    }
  }
  routeDetail: {
    routeId: {
      user_id: integer
			name: string
			description: text
			mapOptions: Object with options
			comments: { comments }
    }
  }
  tripDetail: {
    routeId: {
      name: string
      description: text
      mapOptions: Object with options
      comments: { comments }
      route_id: integer
      user_id: integer
      gear: text
      notes: text
      pictures: images
    }
  }
	friends: {
		friendId: {
			username: string
			id: integer
			photo: img
		}
	}
}
```
