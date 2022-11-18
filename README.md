# malaghe

![ascii_malaghe.png](ascii_malaghe.png)

### ---

### ⌘K V --> split view

### ⇧⌘V --> separate view

### code /etc/hosts

https://kubernetes.io/blog/2019/07/18/api-deprecations-in-1-16/

https://kubernetes.io/docs/concepts/services-networking/ingress/

https://docs.konghq.com/kubernetes-ingress-controller/latest/concepts/ingress-versions/

### ---

## Links:

github: malaghe --> https://github.com/apakhbari/malaghe

docker --> https://hub.docker.com/repository/docker/apakhbari/malaghe

npm utility package --> https://www.npmjs.com/package/@apa_malaghe/utility

github: malaghe_utility --> https://github.com/apakhbari/malaghe_utility

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

## USER MODEL:

Flags :

t --> trim

l --> lowercase

d --> default

minlength --> mn

maxlength --> mx

| Number |       Field        |      Type      | required |  flags  |
| :----: | :----------------: | :------------: | :------: | :-----: |
|   1    |       fiName       |     String     |    ✔     |    t    |
|   2    |       laName       |     String     |    ✔     |    t    |
|   3    |       email        |     String     | ✔ unique |   t-l   |
|   4    |       mobile       |     Number     | ✔ unique |    t    |
|   5    |       photo        |     String     |          |         |
|   6    |     locations      | locationsAttrs |          |         |
|   7    |        role        |   UsersRoles   |  d:user  |         |
|   8    |      password      |     String     |    ✔     | t-mn-mx |
|   9    |      isActive      |    Boolean     |  d:true  |         |
|   10   |     createdAt      |      Date      |  d:now   |         |
|   11   | passwordResetToken |     String     |          |         |

### locationsAttrs

| Number |    Field    |       Type       |
| :----: | :---------: | :--------------: |
|   1    | coordinates | coordinatesAttrs |
|   2    |   address   |      String      |
|   3    | postalCode  |      Number      |

### coordinatesAttrs

| Number | Field |  Type  |
| :----: | :---: | :----: |
|   1    | long  | number |
|   2    |  lat  | number |

---

## ingress-nginx:

<br>

    * host : malaghe.dev *

    path: /api/v1/users/?(.*)
      backend:
      serviceName: auth-srv
      servicePort: 3000

############################

    path: /api/v1/store/?(.*)
      backend:
        serviceName: store-srv
        servicePort: 3000

    path: /api/v1/mag/?(.*)
      backend:
        serviceName: mag-srv
        servicePort: 3000

    path: /api/v1/orders/?(.*)
      backend:
        serviceName: orders-srv
        servicePort: 3000

    path: /?(.*)
      backend:
        serviceName: client-srv
        servicePort: 3000

---

## Developed by APA

### copyright © 2022 all rights reserved

<br>

![ascii_apa.png](ascii_apa.png)
