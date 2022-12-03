# malaghe

![ascii_malaghe.png](ascii_malaghe.png)

---

### TODO:

1- for all of code

    res.status(204).json({
      status: 'success',
      data: null
    });

2- userClicks in the database model

---

### ⌘K V --> split view

### ⇧⌘V --> separate view

### code /etc/hosts

---

https://kubernetes.io/blog/2019/07/18/api-deprecations-in-1-16/

https://kubernetes.io/docs/concepts/services-networking/ingress/

https://docs.konghq.com/kubernetes-ingress-controller/latest/concepts/ingress-versions/

---

## Links:

github: malaghe --> https://github.com/apakhbari/malaghe

docker --> https://hub.docker.com/repository/docker/apakhbari/malaghe

npm utility package --> https://www.npmjs.com/package/@apa_malaghe/utility

github: malaghe_utility --> https://github.com/apakhbari/malaghe_utility

---

### Readme.md CheatSheet -->

https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet#tables

---

## Service Setup:

1- Copy a service

2- Install dependencies

3- Build an image out of service

4- create a kubernetes deployment file

5- set up file sync options in skaffold.yaml file

6- set up routing rules in ingress service

---

<br>

# USER SERVICE

### ToDo:

- refactor routes/signin
- refactor routes/currentuser
- refactor routes/signout

- delete user route

<br>

### ROUTES:

- /api/v1/users/signin --> POST
- /api/v1/users/signout --> POST
- /api/v1/users/signup --> POST
- '/api/v1/users/currentuser --> GET

<br>

### USER MODEL:

<br>

### - userSchema -

Flags : t --> trim, l --> lowercase, d --> default, minlength --> mn, maxlength --> mx

| Number |       Field        |        Type        | required |  flags  |
| :----: | :----------------: | :----------------: | :------: | :-----: |
|   1    |       fiName       |       String       |    ✔     |    t    |
|   2    |       laName       |       String       |    ✔     |    t    |
|   3    |       gender       |       Number       |    ✔     |         |
|   4    |       email        |       String       |          |   t-l   |
|   5    |       mobile       |       Number       |    ✔     |    t    |
|   6    |       photo        |       String       |          |         |
|   7    |     locations      | `[locationsAttrs]` |          |         |
|   8    |        role        |     UsersRoles     |  d:user  |         |
|   9    |      password      |       String       |    ✔     | t-mn-mx |
|   10   |      isActive      |      Boolean       |  d:true  |         |
|   11   |     createdAt      |        Date        |  d:now   |         |
|   12   | passwordResetToken |       String       |          |         |

<br>

### - locationsAttrs -

| Number |    Field    |        Type        |
| :----: | :---------: | :----------------: |
|   1    | coordinates | `coordinatesAttrs` |
|   2    |   address   |       String       |
|   3    | postalCode  |       Number       |

<br>

### - coordinatesAttrs -

| Number | Field |  Type  |
| :----: | :---: | :----: |
|   1    | long  | number |
|   2    |  lat  | number |

---

<br>

# MAG SERVICE

ToDo:

1- Add requireAdmin to new rout

2- patch route

3- delete route

4- listeners

<br>

### ROUTES:

- index: /api/v1/mag --> GET
- new: /api/v1/mag --> POST
- show: /api/v1/mag/:magId --> GET
- patch: /api/v1/mag/:magId --> PATCH
- delete: /api/v1/mag/:magId --> DELETE

### EVENTS:

- mag:assigned
- mag:updated
- mag:deleted

### MAG MODEL:

<br>

### - magSchema -

Flags : t --> trim, l --> lowercase, d --> default, minlength --> mn, maxlength --> mx

| Number |    Field    |      Type      | required |  flags  |
| :----: | :---------: | :------------: | :------: | :-----: |
|   1    |    title    |     String     | ✔ unique | t-mn-mx |
|   2    | description |     String     |    ✔     |  t-mn   |
|   3    |   summary   |     String     |    ✔     |    t    |
|   4    | imageCover  |     String     |    ✔     |         |
|   5    |   photos    |    [String]    |          |         |
|   6    |  videoLink  |     String     |          |         |
|   7    |  createdAt  |      Date      |  d:now   |         |
|   8    |  storeData  | `[storeAttrs]` |          |         |

<br>

### - storeAttrs -

| Number | Field |      Type      |
| :----: | :---: | :------------: |
|   1    |  id   | Types.ObjectId |
|   2    | title |     String     |

<br>

---

<br>

# STORE SERVICE

ToDo:

<br>

### ROUTES:

- index: /api/v1/store --> GET
- new: /api/v1/store --> POST

  yo

- show: /api/v1/store/:storeId --> GET
- patch: /api/v1/mag/:storeId --> PATCH
- delete: /api/v1/mag/:storeId --> DELETE

### EVENTS:

### STORE MODEL:

<br>

### - storeSchema -

Flags : t --> trim, l --> lowercase, d --> default, minlength --> mn, maxlength --> mx

| Number |       Field       |      Type      | required |  flags  |
| :----: | :---------------: | :------------: | :------: | :-----: |
|   1    |       title       |     String     | ✔ unique | t-mn-mx |
|   2    |    description    |     String     |          |  t-mn   |
|   3    |      summary      |    [String]    |    ✔     | t-mn-mx |
|   4    |      volumes      |     String     |          |    t    |
|   5    |    imageCover     |     String     |    ✔     |         |
|   6    |      photos       |    [String]    |          |         |
|   7    | availableQuantity |     Number     |    ✔     |         |
|   8    |  ratingsAverage   |     Number     |   d:5    |         |
|   9    |  ratingsQuantity  |     Number     |   d:0    |         |
|   10   |       price       |     Number     |    ✔     |         |
|   11   |    hasDiscount    |    Boolean     | d:false  |         |
|   12   |   discountKind    | `discountKind` |          |         |
|   13   |  discountedPrice  |     Number     |          |         |
|   14   |     createdAt     |      Date      |  d:now   |         |
|   15   |      magData      |  `[magAttrs]`  |          |         |

<br>

### - magAttrs -

| Number | Field |      Type      |
| :----: | :---: | :------------: |
|   1    |  id   | Types.ObjectId |
|   2    | title |     String     |

<br>

### - discountKind enum -

- percentage
- exactPrice

<br>

---

<br>

# INGRESS-NGINX SERVICE:

<br>

    * host : malaghe.dev *

    /api/v1/users/?(.*)
    auth-srv:3000
    ---

    /api/v1/mag/?(.*)
    auth-srv:3000
    ---

############################

    path: /api/v1/store/?(.*)
      backend:
        serviceName: store-srv
        servicePort: 3000

    path: /api/v1/orders/?(.*)
      backend:
        serviceName: orders-srv
        servicePort: 3000

    path: /?(.*)
      backend:
        serviceName: client-srv
        servicePort: 3000

<br>

---

## Developed by APA

### copyright © 2022 all rights reserved

<br>
<br>

![ascii_apa.png](ascii_apa.png)
