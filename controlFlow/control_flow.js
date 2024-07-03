// if...else condition
let userRole = "admin";
let accessLevel;

if (userRole === "admin") {
    accessLevel = "Full access granted";
} else if (userRole === "manager") {
    accessLevel = "Limited access granted";
} else {
    accessLevel = "No access granted";
}

console.log("Access Level: ", accessLevel);

// Nested if...else condition
let isLoggedIn = true;
let userMessage;

if (isLoggedIn) {
    if (userRole === "admin") {
        userMessage = "Welcome, Admin!";
    } else {
        userMessage = "Welcome, User!";
    }
} else {
    userMessage = "Please log in to access the system."
}

console.log("User Message: ", userMessage);

// Switch statement
let userType = "subscriber";
let userCategory;

switch(userType) {
    case "admin":
        userCategory = "Administrator";
        break;

    case "manager":
        userCategory = "Manager";
        break;
    
    case "subscriber":
        userCategory = "Subscriber";
        break;
    
    default:
        userCategory = "Unknown";
}

console.log("User Category: ", userCategory);

// Ternary operator
let isAuthenticated = "true";
let authenticationStatus = isAuthenticated ? "Authenticated" : "Not authenticated" ;

console.log("Authentication Status: ", authenticationStatus);

// Practice task

// if...else condition
let employment = "employee";
let authorizationStatus;

if (employment === "employee") {
    authorizationStatus = "You have access to \"Dietary Services\".";
} else {
    authorizationStatus = "You do not have access to \"Dietary Services\".";
}

console.log("Authorization Status: ", authorizationStatus);

// Nested if...else condition
let subscription = "enrolled member";
let subscriptionStatus;

if (employment === "employee") {
    if (subscription === "enrolled member") {
        subscriptionStatus = "You have access to \"Dietary Services\" and can have one-on-one interaction with a dietician.";
    } else {
        subscriptionStatus = "You have access to \"Dietary Services\" but can not have one-on-one interaction with a dietician.";
    }
} else {
    subscriptionStatus = "You can not have access to \"Dietary Services\".";
}

console.log("Subscription Status: ", subscriptionStatus);

// Switch statement
let membership = "subscriber";
let membershipStatus;

switch (membership) {
    case "admin":
        membershipStatus = "You have full access to facilitate \"Dietary Services\".";
        break;

    case "subscriber":
        membershipStatus = "You have partial access to facilitate \"Dietary Services\".";
        break;

    default:
        membershipStatus = "You do not have access to facilitate \"Dietary Services\".";
}

console.log("Membership Status: ", membershipStatus);

// Ternary operator
let enrollment = "non-subscriber";
let enrollmentStatus = enrollment ? "You need to enroll or at least subscribe first to avail this facility." : "You have already enrolled and can avail this facility.";

console.log("Enrollment Status: ", enrollmentStatus);