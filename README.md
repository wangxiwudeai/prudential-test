# Prudential-Test

## General
### Folder Structure
```
project
│   README.md
│   docker-compose.yml       // to run up containers
│
└───backend
│   └───prudential-test      // backend source code
│       
└───frontend
│   └───jianshu-demo         // frontend source code
│       
└───mongodb                  // mongodb data files, the volumes for mongo images
```
### Technology stack overview

frontEnd:  `React, AntDesign`;  
backEnd: `Nodejs, NestJs`;  
database: `Mongo`;  

### Time constraint
    because of the time constraint, no more code for security and error handling and testing. some config is hard coding in the source code. 

### start project in local environment  
run :
```
    docker-compose up -d
```
view home page:   
[http://127.0.0.1:13001](http://127.0.0.1:13001)

---
## FrontEnd

### Third Party Libraries  
`ant design`: for UI components  
`moment`: for Date format  
`dva`: for Router (as same as react-router)  
`axios`: for ajax http request

### Routes
`/`, `/home`: homePage  
`/detail`: detailPage

---

## BackEnd

### Third Party Libraries  
`nestjs`: nodejs web server framework  
`mongoose`: mongodb object modeling tool

### API
`/jian-demo/recommend-user` : GET  

Get recommend user list in the homePage.

|  params   || 
|  ----  | ----  |
| random: string  | limit: number |
| id suffix to filter data, simulate recommend   | limit |

`/jian-demo/article-detail` : GET  

Get article detail page data, includes article info and author info of the article.

|  params   |
|  ----  | 
| id: string  |
| article id   | 

`/jian-demo/recommend-article` : GET 

Get recommend article list .

|  params   || 
|  ----  | ----  |
| random: string  | limit: number |
| id suffix to filter data, simulate recommend   | limit |

`/jian-demo/user-article` : GET  

Get user article list .

|  params   || 
|  ----  | ----  |
| id: string  | limit: number |
| user id   | limit |

---

## Database

### Collections

|  1. user   ||||||
|  ----  | ----  | ----  | ----  | ----  | ----  |
| id  | account | name | like | wordCount | assets |

|  2. article   |||||||||||
|  ----  | ----  | ----  | ----  | ----  | ----  | ----  | ----  | ----  | ----  | ----  |
| id  | abstract | author | authorName | content | createOn | diamond | like | read | title |wordCount |

---
