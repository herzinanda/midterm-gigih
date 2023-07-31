# Generasi GIGIH 3.0 Fullstack Engineer Midterm Project
This is a repository of my Midterm Project that assigned by Generasi GIGIH.


## Database Structure
This is the database schema I used in this project. I use MongoDB as the database

#### videos
```
{
    _id: ObjectId,
    thumbnailImg: {
        type: String,
        required: true,
    },
    videoUrl: {
        type: String,
        required: true,
    },
    desc: {
        type: String,
        required: true,
    },
    views: {
        type: Number,
        default: 0,
    },
    tags: {
        type: [String],
        default: [],
    },
    likes: {
        type: Number,
        default: 0,
    },
    timestamp: Date
}
```
#### products
```
{
    _id: ObjectId,
	videoId: {
        type: String,
        required: true,
    },
    productTitle:
    {
        type: String,
        required: true
    },
    productPrice: {
        type: Number,
        required: true,
    },
    productImg: {
        type: String,
        required: true,
    },
    productUrl: {
        type: String,
        required: true,
    },
    desc: {
        type: String,
        required: true,
    },
    timestamp: Date,
}
```
#### comments
```
{
    _id: ObjectId,
    videoId: {
        type: String,
        required: true,
    },
    username: {
        type: String,
        required: true,
    },
    comment: {
        type: String,
        required: true,
    },
}
```

## API Structure

## API References

### Videos
#### GET `/api/videos/all`
- **URL Params**  
  None
- **Data Params**  
  None
- **Headers**  
    Content-Type: application/json
- **Code:** 200
- **Content**
```
[
    {
        "_id": "64c76978aec4cb641f3a86a9",
        "thumbnailImg": "sdasada.jpg",
        "videoUrl": "https://youtube.com",
        "desc": "Video tentang sesuatu",
        "views": 0,
        "tags": [],
        "likes": 0,
        "createdAt": "2023-07-31T07:57:44.980Z",
        "updatedAt": "2023-07-31T07:57:44.980Z",
        "__v": 0
    },
    {
        "_id": "64c76978aec4cb641f3a86a9",
        "thumbnailImg": "sdasada.jpg",
        "videoUrl": "https://youtube.com",
        "desc": "Video tentang sesuatu",
        "views": 0,
        "tags": [],
        "likes": 0,
        "createdAt": "2023-07-31T07:57:44.980Z",
        "updatedAt": "2023-07-31T07:57:44.980Z",
        "__v": 0
    }
]
```

#### GET `/api/videos/:videoId`
- **URL Params**  
  _Required_: videoId=[string]
- **Data Params**  
  None
- **Headers**  
    Content-Type: application/json
- **Code:** 200
- **Content**
```
{
    "_id": "64c76978aec4cb641f3a86a9",
    "thumbnailImg": "sdasada.jpg",
    "videoUrl": "https://youtube.com",
    "desc": "Video tentang sesuatu",
    "views": 0,
    "tags": [],
    "likes": 0,
    "createdAt": "2023-07-31T07:57:44.980Z",
    "updatedAt": "2023-07-31T09:05:19.914Z",
    "__v": 0
}
```

#### POST `/api/videos/`
- **URL Params**  
  None
- **Data Params**  
  ```
  {
    "thumbnailImg": "sdasada.jpg",
    "videoUrl": "https://youtube.com",
    "desc": "Video tentang sesuatu"
  }   
  ```
- **Headers**  
    Content-Type: application/json
- **Code:** 200
- **Content**
```
New video was created successfully
```

#### PUT `/play/:videoId`
- **URL Params**  
  _Required_: videoId=[string]
- **Data Params**  
  None
- **Headers**  
    Content-Type: application/json
- **Code:** 200
- **Content**
```
{
    "_id": "64c76978aec4cb641f3a86a9",
    "thumbnailImg": "sdasada.jpg",
    "videoUrl": "https://youtube.com",
    "desc": "Video tentang sesuatu",
    "views": 2,
    "tags": [],
    "likes": 0,
    "createdAt": "2023-07-31T07:57:44.980Z",
    "updatedAt": "2023-07-31T09:05:19.914Z",
    "__v": 0
}
```

### Comments
#### GET `/api/comments/`
- **URL Params**  
  None
- **Data Params**  
  None
- **Headers**  
    Content-Type: application/json
- **Code:** 200
- **Content**
```
[
    {
        "_id": "64c783eab65f5e862130a767",
        "videoId": "64c76978aec4cb641f3a86a9",
        "username": "joko123",
        "comment": "mantap",
        "createdAt": "2023-07-31T09:50:34.298Z",
        "updatedAt": "2023-07-31T09:50:34.298Z",
        "__v": 0
    }
]
```

#### POST `/api/comments/:videoId`
- **URL Params**  
  _Required_: videoId=[string]
- **Data Params**  
  ```
  {
    "username": "joko123",
    "comment": "mantasadap"
  }
  ```
- **Headers**  
    Content-Type: application/json
- **Code:** 200
- **Content**
```
{
    "videoId": "64c76978aec4cb641f3a86a9",
    "username": "joko123",
    "comment": "mantasadap",
    "_id": "64c783eab65f5e862130a767",
    "createdAt": "2023-07-31T09:50:34.298Z",
    "updatedAt": "2023-07-31T09:50:34.298Z",
    "__v": 0
}
```

#### DELETE `/api/comments/:videoId`
- **URL Params**  
  None
- **Data Params**  
  None
- **Headers**  
    Content-Type: application/json
- **Code:** 200
- **Content**
```
"Comment has been deleted"
```

### Products
#### GET `/api/products/:videoId`
- **URL Params**  
  _Required_: videoId=[string]
- **Data Params**  
  None
- **Headers**  
    Content-Type: application/json
- **Code:** 200
- **Content**
```
[
    {
        "_id": "64c788914b4ac4de4d457542",
        "videoId": "64c76978aec4cb641f3a86a9",
        "productTitle": "Baju Anak Laki Laki",
        "productPrice": 40000,
        "productImg": "bajuanak.jpg",
        "productUrl": "https://www.tokopedia.com",
        "desc": "Baju anak laki-laki tahan lama",
        "createdAt": "2023-07-31T10:10:25.515Z",
        "updatedAt": "2023-07-31T10:10:25.515Z",
        "__v": 0
    },
    {
        "_id": "64c788a84b4ac4de4d457544",
        "videoId": "64c76978aec4cb641f3a86a9",
        "productTitle": "Baju Anak Perempuan",
        "productPrice": 45000,
        "productImg": "bajuanakpr.jpg",
        "productUrl": "https://www.tokopedia.com",
        "desc": "Baju anak peremmpuan tahan lama",
        "createdAt": "2023-07-31T10:10:48.500Z",
        "updatedAt": "2023-07-31T10:10:48.500Z",
        "__v": 0
    }
]
```

#### POST `/api/products/:videoId`
- **URL Params**  
  _Required_: videoId=[string]
- **Data Params**  
  ```
  {
    "productTitle": "Baju Anak Perempuan",
    "productPrice": 45000,
    "productImg": "bajuanakpr.jpg",
    "productUrl": "https://www.tokopedia.com",
    "desc": "Baju anak peremmpuan tahan lama"
  }
  ```
- **Headers**  
    Content-Type: application/json
- **Code:** 200
- **Content**
```
{
    "videoId": "64c76978aec4cb641f3a86a9",
    "productTitle": "Baju Anak Perempuan",
    "productPrice": 45000,
    "productImg": "bajuanakpr.jpg",
    "productUrl": "https://www.tokopedia.com",
    "desc": "Baju anak peremmpuan tahan lama",
    "_id": "64c788a84b4ac4de4d457544",
    "createdAt": "2023-07-31T10:10:48.500Z",
    "updatedAt": "2023-07-31T10:10:48.500Z",
    "__v": 0
}
```

## How to use
### Prerequisite
- NodeJS
- MongoDB
- Package Manager
- HTTP Client

### Steps
1. Clone this repository
``` 
git clone https://github.com/herzinanda/midterm-gigih 
```
2. Open the project
3. Set the env variable of MongoDB URL
4. Install dependencies
```
npm Install
```
atau
```
yarn Install
```
5. Run the server with
```
yarn start
```
atau
```
npm run start
```
6. Try to hit the API from the HTTP Client or you can use Postman, Insomnia, etc.