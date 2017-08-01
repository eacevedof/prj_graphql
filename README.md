<!--
README.md branch master 1.0.0

https://youtu.be/UBGzsb2UkeY?t=879
https://github.com/eacevedof/prj_graphql
-->
<h1>
    <a href="https://github.com/eacevedof/prj_graphql">Repo: prj_graphql</a>
</h1>
<h2>
    <a href="https://youtu.be/UBGzsb2UkeY?t=879">Zero to GraphQL in 30 Minutes - Node.js and express – Steven Luscher</a>
</h2>
<h3>
    <a href="https://github.com/steveluscher/zero-to-graphql/tree/master/zero-node">Repo for Node</a>
</h3>

<h4>Pasos instalación NODE y Express</h4>
<p>    
    <b>1</b> Descarga la carpeta "zero-node" 
</p>
<br/>
<p>
    <b>2</b> Ejecuta un npm install <br/>
    Esto instalará todo lo que está configurado en <b>package.json</b>.<br/>
    No se si con <b>yarn add</b> funcione en lugar de npm install, puede que si.
</p>
<br/>
<p>
    <b>3</b> Si te fijas en el json en la parte de <b>scripts</b> se aprecia lo siguiente:<br/>
    <i>"start": "nodemon --exec babel-node --presets es2015,stage-0 -- index.js",</i><br/>
    Esto quiere decir que despues de la instalación (paso anterior) para ver la interface
    en web se debe ejecutar el comando:<br/>
    <b>npm start</b>
</p>

<h4>Consultas</h4>

```js
{
  person(id: "1") {
    firstName
    lastName
    email
    username
    friends {
      firstName
      email
    }
  }
}
```

<b>Resultado</b>
<p>
Recibo este error:
</p>

```js
{
  "data": {
    "person": null
  },
  "errors": [
    {
      "message": "Unexpected token < in JSON at position 0",
      "locations": [
        {
          "line": 2,
          "column": 3
        }
      ]
    }
  ]
}
```

<b>Sol:</b>
<p>
  Debo copiar zero_django e instalar django de modo que publique el ws
  por el puerto 8000.<br/>
  Este proyecto tiene una bd <b>db.sqlite3</b>
</p>

![sqlite3_django](https://user-images.githubusercontent.com/2829142/28817065-592b9d18-76a7-11e7-8ca6-c1679300f76e.PNG)

<p>
He instalado python en windows: <b>python --version</b> Python 3.6.2 <br/>
He instalado django: <b>django-admin --version</b> 1.11.3 <br/>
Cambio el puerto: <b>manage.py runserver 0.0.0.0:8001</b> <br/>
Abro el link: <a href="http://localhost:8001/graphiql">http://localhost:8001/graphiql</a><br/>
Consumo el rest de python con Node: <a href="http://localhost:5000">http://localhost:5000</a><br/>
</p>

```js
{
  "data": {
    "person": {
      "firstName": "Steven",
      "lastName": "Luscher",
      "email": "steveluscher@fb.com",
      "username": "steveluscher",
      "friends": [
        {
          "firstName": "Adrian",
          "email": "a.holovaty@django.com"
        },
        {
          "firstName": "Simon",
          "email": "s.willison@django.com"
        }
      ]
    }
  }
}
```
