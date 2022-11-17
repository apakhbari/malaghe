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

---

## Service Setup:

1- Copy a service

2- Install dependencies

3- Build an image out of service

4- create a kubernetes deployment file

5- set up file sync options in skaffold.yaml file

6- set up routing rules in ingress service

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
