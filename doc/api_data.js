define({ "api": [
  {
    "type": "delete",
    "url": "/relationship/:id",
    "title": "Delete Relationship",
    "group": "Relationship",
    "description": "<p>Delete a relationship</p>",
    "version": "0.0.0",
    "filename": "src/controllers/relationship-controller.js",
    "groupTitle": "Relationship",
    "name": "DeleteRelationshipId"
  },
  {
    "type": "get",
    "url": "/relationship/",
    "title": "Get All Relationship",
    "group": "Relationship",
    "description": "<p>Get all relationship from the current user</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>JWT Token with the id user</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "user",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "user.id",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user.name",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/controllers/relationship-controller.js",
    "groupTitle": "Relationship",
    "name": "GetRelationship"
  },
  {
    "type": "get",
    "url": "/relationship/:id",
    "title": "Get One Relationship",
    "group": "Relationship",
    "description": "<p>Get one relationship by id from the current user</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "user",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "user.id",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user.name",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/controllers/relationship-controller.js",
    "groupTitle": "Relationship",
    "name": "GetRelationshipId"
  },
  {
    "type": "post",
    "url": "/relationship/",
    "title": "Post Relationship",
    "group": "Relationship",
    "description": "<p>Create a new relationship</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Name of the new relationship</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>The new relationship Id</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/controllers/relationship-controller.js",
    "groupTitle": "Relationship",
    "name": "PostRelationship"
  },
  {
    "type": "put",
    "url": "/relationship/:id",
    "title": "Update Relationship",
    "group": "Relationship",
    "description": "<p>Update the a relationship for a user</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Name of the new relationship</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>The relationship Id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>The new relationship name</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/controllers/relationship-controller.js",
    "groupTitle": "Relationship",
    "name": "PutRelationshipId"
  },
  {
    "type": "get",
    "url": "/story/",
    "title": "Get All Story",
    "group": "Story",
    "description": "<p>Get all the story from the current user</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>JWT Token with the id user</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "text",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "user",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "user.id",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user.name",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "relationship",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "relationship.id",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "relationship.name",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/controllers/story-controller.js",
    "groupTitle": "Story",
    "name": "GetStory"
  },
  {
    "type": "get",
    "url": "/story/:id",
    "title": "Get One Story",
    "group": "Story",
    "description": "<p>Get one story by id from the current user</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>JWT Token with the id user</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "text",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "user",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "user.id",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user.name",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "relationship",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "relationship.id",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "relationship.name",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/controllers/story-controller.js",
    "groupTitle": "Story",
    "name": "GetStoryId"
  },
  {
    "type": "post",
    "url": "/story/",
    "title": "Create One Story",
    "group": "Story",
    "description": "<p>Create one story by id from the current user</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>JWT Token with the id user</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "text",
            "description": "<p>Text that describe the new story</p>"
          },
          {
            "group": "Parameter",
            "type": "Object[]",
            "optional": false,
            "field": "relationship",
            "description": "<p>Array of relationship who we have tell the story</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "relationship.id",
            "description": "<p>id of the relationship</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "text",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "user",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "user.id",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user.name",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "relationships",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "relationship.id",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "relationship.name",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/controllers/story-controller.js",
    "groupTitle": "Story",
    "name": "PostStory"
  },
  {
    "type": "get",
    "url": "/user/",
    "title": "Get All User",
    "group": "User",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "relationships",
            "description": "<p>All the relationship of the user</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "relationships.id",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "relationships.name",
            "description": "<p>Name of the relationship</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/controllers/user-controller.js",
    "groupTitle": "User",
    "name": "GetUser"
  },
  {
    "type": "get",
    "url": "/user/:id",
    "title": "Get One User",
    "group": "User",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "relationships",
            "description": "<p>All the relationship of the user</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "relationships.id",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "relationships.name",
            "description": "<p>Name of the relationship</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/controllers/user-controller.js",
    "groupTitle": "User",
    "name": "GetUserId"
  },
  {
    "type": "post",
    "url": "/login/",
    "title": "Login",
    "group": "User",
    "description": "<p>Create user if not already exist and then return a token with the id of the user</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>JWT Token from the Front-End to certif that's authorize</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authId",
            "description": "<p>The id from Auth0</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "apiToken",
            "description": "<p>The token to use in Front-End to be Authenticated at each API call</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/controllers/user-controller.js",
    "groupTitle": "User",
    "name": "PostLogin"
  }
] });
