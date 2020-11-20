<h1>OrientDB CRUD Operations</h1>

<h2>INTRODUCTION</h2>
<ul>
<li>OriendDB is an open source NoSQL database management system which is written in the java.</li>
<li>It is multi-model dataset.</li>
<li>It supports Document model,Key/Value model, Graph model and object model.</li>
<li>The relationship  in the models are connected by Graph database model.</li>
<li>It also supports schema less , schema full or schema mixed models.</li>
</ul>

<h2>CHARACTERISTICS</h2>
<p>Orient DB is the primary Multi model Open deliver NoSQL DBMS that mixes the strength of
graphs and the ability of documents into scalable, high overall performance database.
</p>
<p><strong>Speed:</strong> OrientDB is very fast. It has speed on both read and write operations ,stores as much as 120,000 records.
</p>
<p><strong>Zero Configuration:</strong> As it has a zero-config multi-master architecture, OrientDB is suitable for the Cloud.
</p>
<p><strong>Low TCO:</strong> OrientDB is free of cost for the community Edition. It comes with the Apache 2 open source license. Eliminates the need for multiple product and multiple licenses.
</p>
<p><strong>Flexibility:</strong> It is costly to change the DBMS when it does not meet the requirements. OrientDB reduces the need to support multiple products to achieve the goals.
</p>

<h2>DATA MODEL</h2>
<h3>Document Model</h3>
<p>The data in this model is stored inside documents. A document is a set of key/value pairs.
</p>

<h3>Key/Value Model</h3>
<p>TThis is the simplest model of the three. Everything in the database can be reached by a key, where the values can be simple and complex types.
</p>


<h3>Graph Model</h3>
<p>A graph represents a network-like structure consisting of Vertices interconnected by Edges .graph model is represented by the concept of a property graph
</p>

<h3>Object Model</h3>
<p>This model has been inherited by Object Oriented programming and supports Inheritance
between types. 
</p>

<h2>INSTALLATION</h2>
<p>To Install OrientDB you will need to follow the simple manual provided by the orientDB. In this manual you will get detailed information about the orientDB. </p>
<p><a href="https://www.orientdb.org/">https://www.orientdb.org/</a></p>

<h2>Graph Model </h2>
<p>I have used a graph model and React Native to create a app  where you can post the qoutes, delete the qoutes, get all the posted qoutes, add user and delete the user.
.</p>


<h3>To add the user and add the qoutes I have written a Javascript Function in orientDB which is given Below</h3>
<h4>Add User</h4>
<p>
var fname = firstName;<br/>
var lname = lastName;<br/>

var imp = orient.getDatabase().command("INSERT INTO user SET firstName = ('"+fname+"'), lastName = ('"+lname+"')");<br/>
return imp;</p>

<h4>Add qoute</h4>
<p>var fname = firstName;<br/>
var que = qoutes;<br/>

var imp = orient.getDatabase().command("INSERT INTO qoute (qoutes) values ('"+que+"')");<br/>

var final =orient.getDatabase().command("CREATE edge post FROM (SELECT FROM user WHERE firstName =('"+fname+"')) TO (SELECT FROM qoute WHERE qoutes =('"+que+"'))");<br/>
return final;</p>

