


> Component Hierarchy

**Splash Container**
 - Auth Form

**User Container**
 - Header
 - Profile
	 - Feed
	 - Dashboard

**Feed**
 - Status Update
 - Personal Info
 - Feed List
	 - Feed Item Detail

**Dashboard Container**
 - Stats

**Friend Search**
 - Friend List
	 - Friend Item Detail
 - Search Comp
 
 **Route Index Cont**
 - List item
 - Create
	 --> Route Detail
	 --> Interactive Map
 - Log
	 --> Workout Form

**Route Detail**
 - Route Map

> Routes

 - Route path="/" component={Home}
	 - IndexRedirect to="/welcome"
	 - Route path="/welcome" component={Splash}
		 - Route path="/signup" component={SessionFormCont}
		 - Route path="/login" component={SessionFormCont}
	 - Route path="user" component={UserCont}
		 - IndexRoute to="/home" component={Profile}
	 - Route path="routes" component={RouteIndexCont}
		 - Route path="routes/:routeID" component={RouteDetailCont}
		 - Route path="create" component={CreateContainer}
		 - Route path="Log" component={LogContainer}
	 - Route path="friends" component={FriendSearchCont}
		 - Route path="/:friendId" component={FriendDetailCont}

